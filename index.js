
let add = document.getElementsByClassName("buybutton");

function addedToCart() {
  alert('Item has been added to cart');
  let numval = document.getElementById("num");
  let counter = Number(numval.innerText) + 1;
  numval.innerText = counter;
}

for(var i in add){
  add[i].addEventListener("click", addedToCart);
}