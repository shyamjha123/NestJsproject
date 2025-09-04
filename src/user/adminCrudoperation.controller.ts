
// crud operation perform for admin 

let admins: Array<any> = []
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AdminDto } from './admin.dto';
@Controller('/admin')

export class adminOperation {
    @Post()
    addAdmin(@Body() createAdminDto: AdminDto) {
        admins.push(createAdminDto)

        return 'Admin added'

    }

    @Get()
    getAdmins() {
        return admins
    };

    @Get(':id')
    getAdmin(@Param('id') id: number) {
        return admins.find((admin) => admin.id === +id)
    };

    @Put(':id')
    updateAdmin(@Param('id') id: number, @Body() updateAdmindto: AdminDto) {
        const adminIdx = admins.findIndex((admin) => admin.id === +id)
        if (!adminIdx) {
            return "Admin not found"
        }
        admins[adminIdx] = updateAdmindto

    }

    @Delete(':id')
    deleteadmin(@Param('id') id: number) {
        admins = admins.filter((admin) => admin.id !== +id)
    }

}