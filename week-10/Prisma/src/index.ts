
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Insert User//

async function insertUser (username:string, password:string, firstName:string, lastName:string){
   const res = await prisma.user.create({
        data:{
            email: username,
            firstName,
            lastName,
            password
        },
        select:{
            id:true,
            password:true,
            firstName:true
        },
        
    })
    console.log(res);
    
}

insertUser("mdsdhahnawaz@gmail.com","Md", "Shahnawsaz","1234567");

// UpdateUser

interface UpdateParams{
    firstName:string;
    lastName:string;
}


async function updateUser(username:string,{
    firstName,
    lastName
}:UpdateParams){
    const res =   await  prisma.user.update({
        where:{email:username},
        data:{
            firstName,
            lastName
        }
    })

    console.log(res);
    
}

updateUser("mdshahnawaz@gmail.com",{
    firstName:"Mohd",
    lastName:"Shahnawaz"
})
