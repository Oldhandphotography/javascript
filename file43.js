//array nested destructuring
const user = [
    {userId:1 , firstName: 'harshit' , gender: 'male'} ,
    {userId:2 , firstName: 'nimish'  , gender: 'male'} , 
    {userId:3 , firstName: 'hitish' , gender: 'male'} , 
    {userId:4 , firstName: 'soddey' , gender: 'male'}
    ]
   
    const[usr1,usr2,usr3,usr4] = user;
    // console.log(usr1)
    
    //suppose we want name of 1 and gneder of 4 then
    const[{firstName}, , ,{gender}] = user;
    console.log(firstName);
    console.log(gender);