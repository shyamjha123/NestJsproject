import { BadRequestException, Body, Controller, Get, HttpException, HttpStatus, InternalServerErrorException, Param, ParseIntPipe, Post, UnauthorizedException, UseFilters, ValidationPipe } from '@nestjs/common';
import { exceptionServices } from '../services/exception.services';
import { exceptionDto } from '../dto/exception.dto';
import { IdExceptions } from 'src/exception/id-exceptions';
import { IdExceptionFilter } from 'src/exception/id-exception.filter';
import { HttpExceptionFilter } from 'src/exception/http-exception.filter';
import { AppExceptionFilter } from 'src/exception/app-exception.filter';


@Controller('/exceptions')
// @UseFilters(HttpExceptionFilter)
// @UseFilters(AppExceptionFilter)
export class exceptionHandleController {
  constructor(private readonly exceptioFilter: exceptionServices) { }
  @Get(":id")
  exceptionHandling(@Param("id", ParseIntPipe) id: number) {

    console.log('====================================');
    console.log(id);
    console.log('====================================');
    if (id <= 0) {
      // unrecognized exceptio
      // throw new Error()

      // throw new HttpException("Invalid id", HttpStatus.BAD_REQUEST)

      // build in exception of parent Httpexception
      //  throw new BadRequestException("Id must be graeter tha or equal to 0", "Id is not valid")
      //   throw new BadRequestException({
      //     error:"Invalid Id",
      //     message:"Id must be graeter tha or equal to 0",
      //     timestamp:Date.now(),
      //     date:id
      //   })
      // Internal server Error exception
      // throw new InternalServerErrorException()
      // Unauthrized Exception
      throw new UnauthorizedException()

    };

    return { success: true, id }
  };


  @Get()
  getallEmp() {
    return this.exceptioFilter.getemployee()
  }

  @Post()
  storeBankemp(@Body(ValidationPipe) bankempData: exceptionDto) {
    this.exceptioFilter.receiveUser(bankempData)

    return { message: 'user Added successfully' }
  };


  @Get("job/:id")
  // @UseFilters(IdExceptionFilter)
  JobbyId(@Param("id", ParseIntPipe) id: number) {

    console.log('====================================');
    console.log(id);
    console.log('====================================');
    if (id <= 0) {  
      // call here id custom exception
      //  throw new IdExceptions();
      throw new Error()


    };

    return { success: true, id }
  };


}
