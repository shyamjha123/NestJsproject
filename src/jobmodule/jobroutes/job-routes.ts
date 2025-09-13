import { jobappmodule } from "../jobapplicationmodule/jobappmodule/jobapp.module";
import { jobmodule } from "../module/job.module";
// defined here your all job routes path for job and nested childre jobapp path 
 export const JOB_ROUTES = [
  {
    path:"jobs",
    module:jobmodule,
    children:[
      {
        path:'job-app',
        module:jobappmodule
      }
    ]
  }
]