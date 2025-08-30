//Call back Set Timeout
console.log("Welcome to Prefects Announcement Date");

/*function getUser(userName,callback){
    setTimeout(() => {
        const user = {id:"001", name:userName};
        callback(user);
    }, 5000);
}

console.log("Prefect Info Loading...");
getUser("Agnes John",(user)=>{
    console.log(`The Head Prefect is ${user.name} with Id: ${user.id}`);
});

console.log('Please remember Tuesday is PTA');*/


//Promise
/*function getUserPromise(userName){
    const user = new Promise((resolve)=>{
        setTimeout(() => {
            const user = {id:"001", name:userName};
            resolve(`The Head Prefect is ${user.name} with Id: ${user.id}`)
        }, 5000);
    })
    return user;
}

console.log("Prefect Info Loading...");
getUserPromise("Agnes John").then((message)=>{console.log(message)});   

console.log('Please remember Tuesday is PTA');

//Async/Await
async function getUserAsync(userName){
    const user = await new Promise((resolve)=>{
        setTimeout(() => {
            const user = {id:"001", name:userName};
            resolve(`The Head Prefect is ${user.name} with Id: ${user.id}`)
        }, 5000);
    });

    console.log(user);
}
console.log("Prefect Info Loading...");
getUserAsync("Agnes John");   
console.log('Please remember Tuesday is PTA');*/

//Promise.all / Async Await
async function getBonus(userId,userName,userRole){
    const user = await new Promise((resolve)=>{
        setTimeout(() => {
            const user = {id:userId, name:userName,role:userRole};
            resolve(`${user.role} Prefect is ${user.name} with Id: ${user.id}`)
        }, 5000);
    });
    return user;
}

async function getParralel() {
    console.log("Prefects Info Loading...");

    const [prefect1,prefect2] = await Promise.all([
        getBonus("001", "Agnes John", "Sanitation"),
        getBonus("002", "Samuel Felix", "Library")
    ]);

    console.log(prefect1);
    console.log(prefect2);

    

}

getParralel();
console.log("Please remember Tuesday is PTA");