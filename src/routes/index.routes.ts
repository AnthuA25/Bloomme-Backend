import { Application} from "express";
import { quizCategoryRouter } from "./quizCategory.routes";
import { userRouter } from "./user.routes";
import { authRouter } from "./auth.routes";
import { rewardRouter } from "./reward.routes";
import { userRewardRouter } from "./userReward";
import { pathRouter } from "./path.routes";
import { moduleRouter } from "./module.routes";
import { assistantRouter } from "./assistants.routes";
import { chatRouter } from "./gemini.chat.routes";
import { emotionRouter } from "./emotion.routes";
import { exercisesRouter } from "./exercises.routes";

function router(app: Application): void {
    app.use('/api',quizCategoryRouter);
    app.use('/api',userRouter);
    app.use('/api',authRouter);
    app.use('/api',rewardRouter)
    app.use('/api',userRewardRouter)
    app.use('/api',pathRouter);
    app.use('/api',moduleRouter);
    app.use('/api',assistantRouter);
    app.use('/api',chatRouter);
    app.use('/api',emotionRouter);
    app.use('/api',exercisesRouter);
  }
  
  export { router };