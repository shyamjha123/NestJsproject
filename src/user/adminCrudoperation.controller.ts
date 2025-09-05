
// crud operation perform for admin 

let admins: Array<any> = []
import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Query } from '@nestjs/common';
import { AdminDto, Queryofadmin } from './admin.dto';
@Controller('/admin')

export class adminOperation {
    // register admin 
    @Post()
    addAdmin(@Body() createAdminDto: AdminDto, @Query() quer: Queryofadmin) {
        console.log(quer, 'query');
        if(quer.age < 25){
            return 'Admin minimum age should be 25'
        }
        
        
        console.log(createAdminDto, 'createAdminDto');
        if (createAdminDto?.phoneNumber.length === 10) {
            admins.push(createAdminDto)
            return 'Admin register successfully'
        }

        return 'Please add mobile numer minimum of 10 digits'

    }
    // get all admins 
    @Get()
    getAdmins() {
        return admins
    };
    // get admin by their id specific 
    @Get(':id')
    getAdmin(@Param('id') id: number) {
        return admins.find((admin) => admin.id === +id)
    };
    // update admin details by their id
    @Put(':id')
    updateAdmin(@Param('id') id: number, @Body() updateAdmindto: AdminDto) {
        const adminIdx = admins.findIndex((admin) => admin.id === +id)
        if (!adminIdx) {
            return "Admin not found"
        }
        admins[adminIdx] = updateAdmindto

    }
    // delete admin by their id 
    @Delete(':id')
    deleteadmin(@Param('id') id: number) {
        admins = admins.filter((admin) => admin.id !== +id)
    }

}