import { Module } from '@nestjs/common';
import { userController } from './user/user.controller';
import { userAlbum } from './album/album.controller';
import { userVideos } from './videos/uservideos.controller';
import { uploadUserphotos } from './phtosupload/userphotosupload';
import { userCrudOperation } from './user/usercrudoperation';


@Module({
  imports: [],
  controllers: [userController, userAlbum, userVideos, uploadUserphotos, userCrudOperation],
  providers: [],
})
export class AppModule {}
