import { Module } from '@nestjs/common';
import { usermodulecontroller } from '../controllers/usermodule.controller';
import { userModuleservices } from '../services/usermodule.services';
import { jobmodule } from 'src/jobmodule/module/job.module';
// create different user module
@Module({
    imports:[jobmodule],
    controllers:[usermodulecontroller],
    providers:[userModuleservices],
    exports:[userModuleservices]

})
export class userModule{}