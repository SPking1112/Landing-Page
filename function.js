let pop = document.getElementById("popup");

let username = document.getElementById("username");

 document.getElementById("cart-username").innerText = username.value;

// Cart page Redirect
function cart(){
     pop.style.display="initial"
    setTimeout(() => {
        pop.style.display="none"
    },1000);
}

// Shop page Redirect
function shop(){
    window.location.href="./shop.html";
}




