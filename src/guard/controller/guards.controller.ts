import { Controller, Get, UseGuards } from '@nestjs/common';
import { BookGuard } from '../guard/guards.guard';

@Controller('book')
 export class guardsController{
 @Get('/findall')
 @UseGuards(new BookGuard())
 getallbooks(){
  return 'this api return all books'
 }
 }