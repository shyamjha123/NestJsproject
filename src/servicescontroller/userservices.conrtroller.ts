import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { CreateUserDto } from 'src/dto/user.dto';
import { Userservice } from 'src/services/user.service';
@Controller('/userservice')
export class userService {
  constructor(private userService: Userservice) {}

  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    this.userService.addUser(createUserDto);
    return { message: 'User Added' };
  }

  @Get()
  findAllUsers() {
    return this.userService.getUsers();
  }

  @Get(':id')
  // ParseIntpipe convet string id into number type data of id
  // finduser(@Param('id', ParseIntPipe) id: number) {
  //     console.log('====================================');
  //     console.log( typeof id);
  //     console.log('====================================');
  //  return this.userService.getUser(+id);
  //  }
  // or u can also handle your http status codees acc to error come from pipe 
  finduser(
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    id: number,
  ) {
    console.log('====================================');
    console.log(typeof id);
    console.log('====================================');
    return this.userService.getUser(+id);
  }

  @Put(':id')
  updateUser(@Param(':id') id: number, @Body() updateUserDto: CreateUserDto) {
    this.userService.updateUser(+id, updateUserDto);
    return { message: 'USER UPDATED' };
  }
  @Delete(':id')
  deletUser(@Param(':id') id: number) {
    this.userService.deleteUser(+id);
    return { message: 'USER DELETED' };
  }
}
