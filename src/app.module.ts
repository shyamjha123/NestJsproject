import { Module } from '@nestjs/common';
import { userController } from './user/user.controller';
import { userAlbum } from './album/album.controller';
import { userVideos } from './videos/uservideos.controller';
import { uploadUserphotos } from './phtosupload/userphotosupload';
import { userCrudOperation } from './user/usercrudoperation.controller';
import { adminOperation } from './user/adminCrudoperation.controller';
import { subadminstore } from './store/subadmin.store';
import { Subadmin } from './dependencyinject/subadmin.controller';
import { Store } from './store/Store.store';
import { Admincredential } from './store/New.store';
import { userDetails } from './store/userdetails.controller';
import { userService } from './servicescontroller/userservices.conrtroller';
import { Userservice } from './services/user.service';
import { userModule } from './usermodule/module/usermodule';
import { jobmodule } from './jobmodule/module/job.module';
import { RouterModule } from '@nestjs/core';
import { jobappmodule } from './jobmodule/jobapplicationmodule/jobappmodule/jobapp.module';
import { JOB_ROUTES } from './jobmodule/jobroutes/job-routes';
import { USER_ROUTES } from './usermodule/userroutes/user-routes';
import { AppRoutingModule } from './app-routing.modules';
// u can defined your router modules and nested modules give its children path 
// const Routes = [
//   {path:'users', module:userModule},
//   {
//     path:"jobs",
//     module:jobmodule,
//     children:[
//       {
//         path:'job-app',
//         module:jobappmodule
//       }
//     ]
//   }
// ]



@Module({
  // im;port userModule in main maodule
  imports: [],

  // imports modules as router module
    // imports: [jobmodule, userModule, AppRoutingModule],
  // controllers and routes
  // controllers: [userController, userAlbum, userVideos, uploadUserphotos, userCrudOperation, adminOperation, Subadmin],
  controllers: [userService],
  // store here dependency as token and instance
  // providers: [{ provide: Admincredential, useClass: Admincredential }],
  // u can store in provider injwction instance as String format also
  // providers: [{ provide: "STORE", useClass: subadminstore }],
  // provide ur class as alias   means
  // providers: [subadminstore,{ provide: Store, useExisting:subadminstore }],
  // give injection token in form of string that is DATABASE_NAME
  // providers:[{ provide:'DATABASE_NAME', useValue:'MOON_KNIGHT'}]
  // give injection token in form of Array that is DATABASE_NAME
  // providers:[{ provide:'MAIL', useValue:['sjha2324@gmail.com', 'sweatkamal@gmail.com']},
  // providers: [{provide:Store, useClass:Store}]
  // add service file as DI 
  providers:[Userservice]
})
export class AppModule {}
