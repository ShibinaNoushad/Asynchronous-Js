/*console.log('person1: shows ticket');
console.log('person2: shows ticket');

const promiseWifeBringingTicket=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('ticket');
    },3000);
});
const getPopcorn=promiseWifeBringingTicket.then((t)=>{
    console.log('wife: i have the tickets');
    console.log('husband: we should go in');
    console.log('wife: no i am hungry');
    return new Promise((res,rej)=>res(`${t} popcorn`))
    
});
const getButter=getPopcorn.then((t)=>{
    console.log('husband:i got some popcorn');
    console.log('husband: we should go in');
    console.log('wife: i need butter on my popcorn');
    return new Promise((res,rej)=>res(`${t} and butter`))

});
//getButter.then((t)=>{console.log(t)})


const getColdDrink=getButter.then((t)=>{
    console.log('husband:anything else darling');
    console.log('wife: i need a cold drink');
    return new Promise((res,rej)=>res(`${t} and cold Drink :)`))
});
getColdDrink.then((v)=>{console.log(v)})

console.log('person4: shows ticket');
console.log('person5: shows ticket');*/

//async

console.log('person1: shows ticket');
console.log('person2: shows ticket');
//create async function

const preMovie=async()=>{
    const promiseWifeBringingTicket=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('Ticket :)');
    },3000);
});

const getPopcorn=new Promise((resolve,reject)=>resolve('popcorn :)'));
const getButter=new Promise((resolve,reject)=>resolve('butter :)'));
const getCandy=new Promise((res,rej)=>res('candy'));
const getColdDrinks=new Promise((resolve,reject)=>resolve('cool Drink :)'))

 let ticket=await promiseWifeBringingTicket;

    console.log(`wife: i have the ${ticket}`);
    console.log('husband: we should go in');
    console.log('wife: no i am hungry');

 let popcorn=await getPopcorn;

    console.log(`husband: i got some ${popcorn}`);
    console.log('husband: we should go in');
    console.log('wife: i need butter on my popcorn');

let butter=await getButter;

    console.log(`husband: i got  some ${butter} on popcorn`);
    console.log('husband: any thing else darling');
    console.log('wife: i need  a Cold drink');

let coldDrink=await getColdDrinks;
    console.log(`husband: i got a ${coldDrink} anything else`);
    console.log('wife:no lets go we are getting late');
    console.log('husband: thanks for the reminder *grins*');

    //promise.all instead of creating each variable like let coldDrink=await getColdDrinks, also comment all conversation because the values are not defined so they cant be used;

/*let [popcorn,butter,candy,coldDrink]=await Promise.all([getPopcorn,getButter,getCandy,getColdDrinks]);
console.log(popcorn,butter,candy,coldDrink)*/

//dealing with error,reject is called not resolve,
/*const promiseWifeBringingTicket=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject('Ticket :)');
    },3000);
});
 let ticket
 try {
    ticket=await promiseWifeBringingTicket;
 } catch (error) {
    ticket='sad face :('
 }*/

 return ticket;
}


preMovie().then((function_returned_value)=>console.log(`person3: shows ${function_returned_value}`))


console.log('person4: shows ticket');
console.log('person5: shows ticket');
//