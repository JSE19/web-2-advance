//synchronous 

// console.log("Start")
// console.log("This runs immediately after start")
// console.log("End")


console.log("Start")

// setTimeout(function (params) {
//     console.log("This runs  after 3 seconds")
// }, 3000)

// setTimeout(
//     () => {
//         console.log("This runs  after 3 seconds")
//     },  4000

// )
console.log("End")


// function fetchStudents(userId, callback) {

//     setTimeout(function () {
//         const user = { id: userId, name: "Daniel" }
//         callback(user)
//     }, 3000)

// }

// console.log("fetching students....")
// fetchStudents(1, function (user) {
//     console.log(`User: ${user.name}`);

// })
// console.log("This run second time");




async function fetchStudents(params) {

    const student = new Promise((resolve, reject) => {
        setTimeout(() => {
            // const user = { id: userId, name: "Daniel" }
            resolve("User: Daniel")
        }, 3000)
    })

    const result = await student
    console.log(result);

}


console.log("fetching students....")
fetchStudents(1)
console.log("This run second time");