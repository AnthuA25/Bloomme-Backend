import { GoogleGenerativeAI } from '@google/generative-ai';
import dotenv from 'dotenv';
import { QuizCategory } from '../models';
import { Option } from '../models/Option';
import { Question } from '../models/Question';


dotenv.config();
if (!process.env.GEMINI_API_KEY) {
    throw new Error('La clave de API GEMINI_API_KEY no está definida en el archivo .env');
}
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
console.log("",process.env.GEMINI_API_KEY)
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });


const getScoreIdByCategory = async (quizCategory: string): Promise<number | null> => {
  const quizScore = await QuizCategory.findOne({
      where: { name: quizCategory }
  });

  return quizScore ? quizScore.quiz_id : null;
}

export const generateQuizQuestions = async (quizCategory: string) => {

    const prompt = `
    Genera 3 preguntas de trivia sobre el tema: ${quizCategory}.
    Cada pregunta debe tener 4 opciones de respuesta, con una marcada como la correcta.
    Formatea la respuesta en JSON con el siguiente formato:
    [
      {
        "question": "Texto de la pregunta",
        "options": ["opción1", "opción2", "opción3", "opción4"],
        "correctAnswer": "opción correcta"
      },
      ...
    ]
  `;

    const result = await model.generateContent([
        { text: prompt }
    ]);
    const generatedText = result.response.text();
    console.log(generatedText)
    const cleanedText = generatedText.replace(/```json|```/g, '').trim();
    try {
        const questions = JSON.parse(cleanedText);

        const score_id = await getScoreIdByCategory(quizCategory);
        if(!score_id){
          throw new Error('No score_id found for category')
        }

        for(const questionData of questions){
          const {question,options,correctAnswer} = questionData;
          const createQuestion = await Question.create({
            question_text:question,
            score_id:score_id,
          });
          for(let i=0;i<options.length;i++){
            const isCorrect = options[i] === correctAnswer;

            await Option.create({
              option_text:options[i],
              question_id:createQuestion.question_id,
              is_correct:isCorrect
            })
          }
        }
    } catch (error) {
        console.error('Error parsing the model response:', error);
        throw new Error('Error in the response format.');
    }
};

