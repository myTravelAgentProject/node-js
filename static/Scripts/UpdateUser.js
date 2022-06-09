
window.addEventListener('load', (event) => {
    const email=JSON.parse(sessionStorage.getItem('user')).email;
    const name=JSON.parse(sessionStorage.getItem('user')).name;
    const city=JSON.parse(sessionStorage.getItem('user')).address[0].city;
    const street=JSON.parse(sessionStorage.getItem('user')).address[0].street;
    const houseNumber=JSON.parse(sessionStorage.getItem('user')).address[0].houseNumber;
    const password=JSON.parse(sessionStorage.getItem('user')).password;
    document.getElementById("inp_email_new").value=email;
    document.getElementById("inp_password_new").value=Number(password);
    document.getElementById("inp_name_new").value=name;
    document.getElementById("inp_city_new").value=city,
    document.getElementById("inp_street_new").value=street,
    document.getElementById("inp_houseNumber_new").value=houseNumber
});

function updateUser() {
    let user = { 
    email: document.getElementById("inp_email_new").value,
    password:Number( document.getElementById("inp_password_new").value),
    name: document.getElementById("inp_name_new").value,
    address: {
        city:document.getElementById("inp_city_new").value,
        street:document.getElementById("inp_street_new").value,
        houseNumber:document.getElementById("inp_houseNumber_new").value,
}}
    let userId=JSON.parse(sessionStorage.getItem('user'))._id;
    fetch("/user/" + userId, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    }) .then(res => {
            if (res.ok){
                alert("hi " + user.name + " , your update saved succsessfully");
                // sessionStorage.setItem('user',JSON.stringify(res))
                window.location.href = "Products.html";
            }
        }
        )

}
