import { Module } from '@nestjs/common';
import { userController } from './user/user.controller';
import { userAlbum } from './album/album.controller';
import { userVideos } from './videos/uservideos.controller';
import { uploadUserphotos } from './phtosupload/userphotosupload';
import { userCrudOperation } from './user/usercrudoperation.controller';
import { adminOperation } from './user/adminCrudoperation.controller';


@Module({
  imports: [],
  controllers: [userController, userAlbum, userVideos, uploadUserphotos, userCrudOperation, adminOperation],
  providers: [],
})
export class AppModule {}
