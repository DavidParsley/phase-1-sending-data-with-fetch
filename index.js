// Add your code here
function submitData(name, email){
    const newData = {
        name: name,
        email:  email,
            };
    return fetch(("http://localhost:3000/users"), {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(newData)
    })
    .then(res => res.json())
    .then(data =>{
        const body=document.querySelector("body")
        const p = document.createElement("p")
        p.textContent = data.id
        body.append(p)
    })

    .catch(error => {
        const body=document.querySelector("body")
        const message = document.createElement("p")
        message.textContent = `Unauthorized Access ${error.message}`
        body.append(message)
        
    })    

}

