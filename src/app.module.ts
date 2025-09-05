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

@Module({
  imports: [],
  // controllers and routes 
  // controllers: [userController, userAlbum, userVideos, uploadUserphotos, userCrudOperation, adminOperation, Subadmin],
  controllers: [Subadmin],
  // store here dependency as token and instance 
  // providers: [{ provide: subadminstore, useClass: subadminstore }],
  // u can store in provider injwction instance as String format also
  // providers: [{ provide: "STORE", useClass: subadminstore }],
  // provide ur class as alias   means 

  providers: [subadminstore,{ provide: Store, useExisting:subadminstore }],
})
export class AppModule { }
