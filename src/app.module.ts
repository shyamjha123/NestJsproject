import { Module } from '@nestjs/common';
import { userController } from './user/user.controller';
import { userAlbum } from './album/album.controller';
import { userVideos } from './videos/uservideos.controller';
import { uploadUserphotos } from './phtosupload/userphotosupload';


@Module({
  imports: [],
  controllers: [userController, userAlbum, userVideos, uploadUserphotos],
  providers: [],
})
export class AppModule {}
