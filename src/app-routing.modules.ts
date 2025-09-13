import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { JOB_ROUTES } from './jobmodule/jobroutes/job-routes';
import { USER_ROUTES } from './usermodule/userroutes/user-routes';

// this way u defined your routes in your specific modules and call it in your app.moduk so ths structore of your main app module not complex
const Routes = [...JOB_ROUTES, ...USER_ROUTES]
@Module({
    imports:[RouterModule.register(Routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{}