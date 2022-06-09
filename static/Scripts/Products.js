window.addEventListener('load', (event) => {
    getAllProducts();
    getallCategories();
    productsCounter=Number(JSON.parse(sessionStorage.getItem('amount')));
    if(productsCounter!=0)
    {
        document.getElementById("ItemsCountText").innerHTML=productsCounter;
    }
});

function drawProducts(products) {
    let element = document.getElementById("PoductList");
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
    products.forEach(product => {
     temp = document.getElementById("temp-card");
    const clonProducts = temp.content.cloneNode(true);
    clonProducts.querySelector("img").src = "../img/" + product.img;
    clonProducts.querySelector("h1").innerText =product.name;
    clonProducts.querySelector(".price").innerText = "₪" +product.price;
    clonProducts.querySelector(".description").innerText = product.description;
    clonProducts.querySelector("button").addEventListener("click",  ()=> {
        addToCart(product)
    });

    document.getElementById("PoductList").appendChild(clonProducts);
    });
}

function drawCategories(categories){
    categories.forEach(category=>{
        tempCategory = document.getElementById("temp-category");
        const clonCategory = tempCategory.content.cloneNode(true);
        clonCategory.getElementById("OptionName").innerText =category.name;
        clonCategory.getElementById("OptionInput").addEventListener("change",  ()=> {
            
                getProductsByCategoryId(category)
            
        });
        document.getElementById('filters').appendChild(clonCategory)
    })
}

function getAllProducts(){
    fetch('/product')
    .then(res=>res.json())
    .then(res=>drawProducts(res))
    .catch(err=>alert(err))
}
async function getallCategories(){
    fetch('/category')
    .then(res=>res.json())
    .then(res=>drawCategories(res))
    .catch(err=>alert(err))
}

function getProductsByCategoryId(category){
    fetch('/product?categoryId='+category._id)
    .then(res=>res.json())
    .then(res=>drawProducts(res))
    .catch(err=>alert(err))
}

function addToCart(product){
    
   let shoppingBag=[] 
   if(document.getElementById("ItemsCountText").innerHTML==0)
   {
    shoppingBag.push({"product":product,"quantity":1});
    sessionStorage.setItem('myBag',JSON.stringify(shoppingBag));
    sessionStorage.setItem('amount',1);
   }
   else{
       shoppingBag=JSON.parse(sessionStorage.getItem('myBag'));
       amount=Number(JSON.parse(sessionStorage.getItem('amount')))+1;
       let index=shoppingBag.findIndex(p=>p.product._id==product._id);
        if(index!=-1)
        {
            shoppingBag[index].quantity= shoppingBag[index].quantity +1;
        }else{
            shoppingBag.push({"product":product,"quantity":1});
        }
        sessionStorage.setItem('myBag',JSON.stringify(shoppingBag));
        sessionStorage.setItem('amount',JSON.stringify(amount));
   }
   document.getElementById("ItemsCountText").innerHTML=Number( document.getElementById("ItemsCountText").innerHTML)+1 ;
}

function TrackLinkID(){
    const userId=JSON.parse(sessionStorage.getItem('user'))._id;
    fetch('/user/'+userId+'/orders')
    .then(res=>res.json())
    .then(res=>alert(JSON.stringify(res.usersOrders)))
    .catch(err=>alert(err))
}