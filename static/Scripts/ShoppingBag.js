// const { Date } = require("mongoose/lib/schema/index");

window.addEventListener('load', (event) => {
    getAllProducts();
});

function drawProduct(product, quantity) {

   

    let elmnt = document.getElementById("temp-row");
    let cln = elmnt.content.cloneNode(true);
    cln.querySelector(".image").style.backgroundImage = "url(../img/" + product.img + ")";
    cln.querySelector(".itemName").innerHTML = product.name;
    cln.querySelector(".descriptionColumn").innerHTML = product.name + ": " + product.description;
    cln.querySelector(".price").innerHTML = (product.price * quantity ) + ' ₪';
    cln.querySelector(".ammountItem").innerHTML = quantity;
    // cln.querySelector(".itemNumber").innerHTML = product.id.toString();
    cln.querySelector(".delete").addEventListener("click", () => {
        DeleteItem(product);
    });
    document.getElementById("itemCount").innerHTML = parseInt(document.getElementById("itemCount").innerText) + quantity;
    document.getElementById("totalAmount").innerHTML = parseInt(document.getElementById("totalAmount").innerText) + product.price * quantity;
    localStorage.setItem('totalAmount', document.getElementById("totalAmount").innerHTML);
    document.getElementById("items").appendChild(cln);
}

function getAllProducts(){
    document.getElementById("itemCount").innerHTML =0;
    document.getElementById("totalAmount").innerHTML =0;
    let productsFromBag=[]
    productsFromBag=JSON.parse(sessionStorage.getItem('myBag'));
    productsFromBag.forEach(pair => {
        drawProduct(pair.product,pair.quantity)
    });
}

function DeleteItem(product){
    let shoppingBag=[] 
    shoppingBag=JSON.parse(sessionStorage.getItem('myBag'));
    newAmount=Number(JSON.parse(sessionStorage.getItem('amount')))-1;
    sessionStorage.setItem('amount',JSON.stringify(newAmount));
    let index=shoppingBag.findIndex(p=>p.product._id==product._id);
    if(shoppingBag[index].quantity==1){
        let array=[]
        shoppingBag.forEach(p=>{
            if(p.product._id!=product._id)
                array.push(p);
        })
        sessionStorage.setItem('myBag',JSON.stringify(array));
       }
       else{
            shoppingBag[index].quantity= shoppingBag[index].quantity -1;
            sessionStorage.setItem('myBag',JSON.stringify(shoppingBag));

       }
    //    document.getElementById("items").innerHTML=""; 
    window.location.href = "";
       getAllProducts();
//    document.getElementById("ItemsCountText").innerHTML=Number(document.getElementById("ItemsCountText").innerHTML)-1 ;
  
   
}

function placeOrder(){
    let items=[];
    let products=[];
    products= JSON.parse(sessionStorage.getItem('myBag'));
    products.forEach(prod=>{
     let product= {"product":prod.product._id,"quantity":JSON.parse(prod.quantity)}
     items.push(product)});
    let sum=Number(document.getElementById("totalAmount").innerHTML);
    let dateOfOrder=new Date();
    let user=JSON.parse(sessionStorage.getItem('user'))._id;
 let newOrder={sum:sum,date:dateOfOrder,user:user,items:items}
 fetch("order/", {
    headers: { "Content-Type": "application/json; charset=utf-8" },
    method: 'POST',
    body: JSON.stringify(newOrder)
    }).then(response => {
        if (response.ok)
            return response.json();
        else
            console.log('post');
    })
    .then(data => {
        if (data) {
            console.log(data)
            alert('ההזמנה מספר' + ' ' + data._id.toString() + ' ' + 'בוצעה בהצלחה' + '👏👏👏');
            sessionStorage.setItem('myBag',"");
            sessionStorage.setItem('amount',JSON.stringify(0));
            window.location.href = "./Products.html";
        }
}).catch(err=>alert(err));
}