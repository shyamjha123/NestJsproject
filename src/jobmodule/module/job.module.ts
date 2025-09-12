import { Module } from '@nestjs/common';
import { jobsController } from '../controller/job.controller';
import { jobServices } from '../services/job.services';
import { jobappmodule } from '../jobapplicationmodule/jobappmodule/jobapp.module';

@Module({
  imports: [jobappmodule],
  controllers: [jobsController],
  providers: [jobServices],
  // exports your services or modules
  exports: [jobServices],
})
export class jobmodule {}
