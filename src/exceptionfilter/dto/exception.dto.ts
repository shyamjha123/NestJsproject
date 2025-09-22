import { } from '@nestjs/common';
import { ArrayMinSize, IsArray, IsIn, IsNumber, IsOptional, IsString } from 'class-validator';

enum workTime {
    FULL_TIME = 1,
    HALF_TIME
}

export class exceptionDto {
    @IsString()
    name: string;
    @IsString()
    bankName: string;
    @IsNumber()
    salary: number;
    @IsNumber()
    experience: number;
    @IsString()
    @IsOptional()
    hobbies: string;
    @IsIn(Object.keys(workTime))
    @IsOptional()
    worktime?: workTime
    @IsString({ each: true })
    // @ArrayMinSize(1)
    @IsArray()
    banservice?: string[]
}
