
function login()
{
    let email = document.getElementById("inp_name").value
    let password = document.getElementById("inp_password").value
    fetch("/user/" + email + "/" + password)
        .then(res => res.json())
        .then((res) => {
            // let response=JSON.stringify(res);
            sessionStorage.setItem('user',JSON.stringify(res))
            window.location.href = "Products.html";
        }).catch(error=>alert("user not found"))
}


{

function login_new_user() {
    document.getElementById("div_new_user").style.display = "block";
}

function addNewUser()
{
    const user={
        email: document.getElementById("inp_email_new").value,
        password:Number( document.getElementById("inp_password_new").value),
        name: document.getElementById("inp_name_new").value,
        address: {
            city:document.getElementById("inp_city_new").value,
            street:document.getElementById("inp_street_new").value,
            houseNumber:document.getElementById("inp_houseNumber_new").value,
    }}
    fetch("/user/", {
        method:'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(res => res.json())
        .then((data) => {
            alert("Hi to  " + data.name )
        })
}
}