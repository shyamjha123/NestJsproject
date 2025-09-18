import {
  ArrayMinSize,
  IsBoolean,
  IsEmail,
  isEmail,
  IsIn,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import {Type} from 'class-transformer';

enum JobType {
  FULL_TIME = 1,
  HALF_TIME,
}

export class LocationDTO {
  @IsString()
  @IsNotEmpty()
  city: string;
  @IsString()
  @IsNotEmpty()
  country: string;
}
// write DTO for employee using class validator or transformer 
export class CreateemployeeDto {
  @IsString()
  @IsNotEmpty()
  companyName: string;
  @IsString()
  @IsNotEmpty()
  title: string;
  @IsEmail()
  email: string;
  @IsIn(Object.keys(JobType))
  @IsOptional()
  type?: JobType;
  @IsInt()
  @IsNotEmpty()
  experience: number;
  @IsNumber()
  @IsNotEmpty()
  salary: number;
  @IsString({ each: true })
  @ArrayMinSize(1)
  tags?: string[];
  @IsBoolean()
  @IsOptional()
  isActivity?: boolean;
  @ValidateNested()
  @IsObject()
  @Type(()=> LocationDTO)
  location: LocationDTO;
}
