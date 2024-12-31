let foodData = [
  {
      name: "Cappuccino with Masala Paneer",
      price: 410,
  
  },
  {
      name: "Flat White and Croissant",
      price: 369,
  },
  {
      name: "Hot Chocolate",
      price: 260,
      
  },
  {
      name: "Mocha",
      price: 265,
     
  },
  {
      name: "Schezwan Margherita - New",
      price: 219,
    
  },
  {
      name: "Paneer Pizza",
      price: 130,
     
  },
  {
      name: "Chilly Willy Pizza",
      price: 500,
      
  },
];

document.addEventListener("DOMContentLoaded", function(){

  // create empty cart

  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  
  // function for total price calculation
  
  function totalPriceOfOrder(){
    let total = 0;
    cart.forEach(function (item) {
      total += item.price;
    });
    return total;
  }
 
  // function for display items and price 

  function displayCart (){
    const displayCartItems = document.getElementById("cartItems");
    if(displayCartItems){
      displayCartItems.innerHTML = " ";

      cart.forEach(function (item,index){
        let cartItem = document.createElement("div");
        cartItem.className = "cart-item";

        let nameofItem = document.createElement("span");
        nameofItem.textContent = item.name;

        let priceOfItem = document.createElement("span");
        priceOfItem.textContent = "₹" +item.price;

        // create Delete button 
        let deleteButton = document.createElement("button");
        deleteButton.className = "delete-btn";
        deleteButton.textContent = "Delete";
        
        // Delete button function
        deleteButton.addEventListener("click",function(){
          deleteFromCart(index);
        });

        cartItem.appendChild(nameofItem);
        cartItem.appendChild(priceOfItem);
        cartItem.appendChild(deleteButton);
        displayCartItems.appendChild(cartItem);

      });

      // display total price 
      
      const displayTotalPrice = document.getElementById("totalPrices");
      displayTotalPrice.innerHTML = "Total :"  + "₹" + totalPriceOfOrder();

    }
  }

  // function for add items

  function addToCart (itemOfIndex){
  const addItems = foodData[itemOfIndex];
  cart.push(addItems);
  localStorage.setItem("cart", JSON.stringify(cart));
  displayCart();
  }

   // function for delete items
   function deleteFromCart(index){
    cart.splice(index,1);
    localStorage.setItem("cart",JSON.stringify(cart));
    displayCart();

   }

   // function of initialize

   function init(){
    displayCart();

    const addButtons = document.querySelectorAll(".add-btn");
    addButtons.forEach((button,index) => {
      button.addEventListener("click", function(){
        addToCart(index);
      });
    });

    // check out button

    const checkOutButton = document.getElementById("checkoutBtn");
    if(checkOutButton){
      checkOutButton.addEventListener("click", function () {
        checkOut();
      })
    }

   }

   init();

   // check out function

   function checkOut(){
    alert("Thank you for your order");
    cart = [];
    localStorage.setItem("cart",JSON.stringify(cart));
    displayCart();
   }
})