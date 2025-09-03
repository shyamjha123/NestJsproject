import { Body, Controller, Delete, Get, Post, Param } from '@nestjs/common';
// create interface for user 

interface userUpload {
    id: number,
    name: string,
    email: string,
    password: string,
    Phonenumber: number,
    role: string,
    experience: string,
    certification: string
}

// create crud operation for user 

const storeUserData: Array<any> = [];

@Controller('/crudoperation')

export class userCrudOperation {
    // upload the data of user 
    @Post('/uploaddata')
    userDatasubmit(@Body() userbodyData: userUpload) {
        console.log(userbodyData);
        storeUserData.push(userbodyData)
        console.log(storeUserData, 'storeddata');
        console.log(storeUserData[0]);
        return "Data submitted successfully"
    };

    // get user data details

    @Get('/getusers')
    getUserdata() {
        return { 'data': storeUserData }
    }

    // get user by their Id 

    @Get('/getbyId/:Id')
    getByuserId(@Param('Id') id: string) {
        console.log(id, 'userid');
        const userId = Number(id);
        // find index of user
        const user = storeUserData.find((user) =>userId === user.id);
        console.log(user,'user');
        
        if (!user) {
            return { message: `User with id ${userId} not found` };
        }

        return { data: user }

    }

    // delete user data by their Id
    @Delete('/deleteuser/:id')
    deleteUserdata(@Param('id') id: string) {
        const userId = Number(id);

        // find index of user
        const index = storeUserData.findIndex((user) => user.id === userId);
        console.log(index, 'index');


        if (index === -1) {
            return { message: `User with id ${userId} not found` };
        }

        // remove user from array
        const deletedUser = storeUserData.splice(index, 1);

        return {
            message: `User with id ${userId} deleted successfully`,
            deletedUser,
        };
    }



}