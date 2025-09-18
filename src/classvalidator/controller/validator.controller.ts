import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { CreateemployeeDto } from '../dto/employee.dto';
@Controller('/validator')

export class validatorController{
   @Post()
   emplyeedetails(@Body(ValidationPipe) employeeDto:CreateemployeeDto ){
    console.log('====================================');
    console.log(employeeDto);
    console.log('====================================');

    return {'data':[
        employeeDto
    ]}
   }
}