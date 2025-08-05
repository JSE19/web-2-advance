let userList = document.getElementById("user-list")


const API_URL = "https://jsonplaceholder.typicode.com/users"

fetch(API_URL)
    .then(response => response.json())
    .then(data => {
        data.forEach(user => {
            userList.style.display = "block";
            let userDiv = document.createElement("div")
            userDiv.classList.add("user")
            userDiv.innerHTML = `
            <h3>${user.name}</h3>
            <p>${user.email}</p>
            `
            userList.appendChild(userDiv)
        }
        );
    })

    .catch(error => {
        console.log("Error:", error);
        document.getElementById("error").style.display ="block";
    })