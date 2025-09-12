import { Module } from '@nestjs/common';
import { jobappController } from '../jobappcontroller/jobapp.controller';
import { jobServices } from 'src/jobmodule/services/job.services';

@Module({
    imports:[],
    controllers:[jobappController],
    providers:[jobServices],
    exports:[jobServices, jobappmodule]

})
export class jobappmodule{}