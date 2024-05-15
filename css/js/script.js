// alert("welcome")

let iconCart = document.querySelector('.icon-cart');
let closeCart = document.querySelector('.close');
let body = document.querySelector('body');
let listProductHTML = document.querySelector('.flex-images');
let listCartHTML = document.querySelector('.listCart');
let iconCartSpan = document.querySelector('.icon-cart span');
let addToCartButton = document.querySelectorAll('.veg')
let cart = document.querySelector('#addCount');
// let productName = document.querySelector('#productName')
// let productNameItem = productName.textContent;
// let productPrice = document.querySelector('#productPrice')
// let productPriceItem = productPrice.textContent;
// let productImage = document.querySelector('#productImage')
// let productImageItem = productImage.getAttribute('src');
let cartItem = document.getElementById('cart');
// cartImage.setAttribute('src') = productImageItem
let count = 0; 
const cartItems = [];
// iconCart.addEventListener('click', () =>{
//     body.classList.toggle('showCart')
// })
// closeCart.addEventListener('click', () =>{
//     body.classList.toggle('showCart')

// } )
// addToCartButton.forEach(button=>{
//     button.addEventListener('click', (e)=>{
//         count++;
//         // console.log(count,productImageItem); 
//         cart.innerHTML = '('+count+')';
//         const btnid = e.target
//         let productContainer = btnid.parentElement
//         let productName = productContainer.querySelector('#productName')
//         let productPrice = productContainer.querySelector('#productPrice')
//         let productImage = productContainer.querySelector('#productImage')
//         let productNameItem = productName.textContent
//         let productPriceItem = productPrice.textContent
//         let productImageItem = productImage.getAttribute('src')
//          // Create a new cart item element (using a DIV)
//     const cartItemElement = document.createElement("div");
//     cartItemElement.classList.add("item");  // Add a class for styling (optional)

//     // Structure the cart item content with quantity control buttons
//     cartItemElement.innerHTML = `
//       <div class="image">
//         <img src="${productImageItem}" alt="${productNameItem}" id="cartImage">
//       </div>
//       <div class="name" id="cartName">${productNameItem}</div>
//       <div class="totalPrice" id="cartPrice">${productPriceItem}</div>
//       <div class="quantity">
//         <span class="minus" id="cartMinus">-</span>
//         <span id="cartCount">1</span>
//         <span class="plus" id="cartPlus">+</span>
//       </div>
//     `;

//     // Add the cart item element to the cart container
//     cartItem.appendChild(cartItemElement);
//     const isDuplicate = cartItems.some(item => item.name === productName);
 
//     if (!isDuplicate ) {
//       // Add item to cart array if not a duplicate
//       cartItems.push({ name: productNameItem, price: productPriceItem });
      
//       // Update cart display (replace with your cart logic)
//       console.log(`Item added to cart: ${productName}`);
//       // You can dynamically add the item to the cart UI here using the cartItems array.

//       // Optional: Update total price or quantity based on your cart logic.
//     } else {
//       console.log(`Item "${productName}" already exists in the cart.`);
//     }
//         // let productNameItem = productName.innerHTML;
  
//         const cartCountElement = cartItemElement.querySelector("#cartCount");
//         const minusButton = cartItemElement.querySelector("#cartMinus");
//         const plusButton = cartItemElement.querySelector("#cartPlus");
    
//         minusButton.addEventListener("click", () => {
//           let currentCount = parseInt(cartCountElement.textContent);
//           if (currentCount > 1) {
//             currentCount--;
//             cartCountElement.textContent = currentCount;
//           }
//           else{
//             cartItem.removeChild(cartItemElement);
//           }
//           // Update cart total based on quantity and price (implement your logic)
//         });
    
//         plusButton.addEventListener("click", () => {
//           let currentCount = parseInt(cartCountElement.textContent);
//           currentCount++;
//           cartCountElement.textContent = currentCount;
//           // Update cart total based on quantity and price (implement your logic)
//         });
//         addCartToMemory(); 
    
//         // // Optional cart update (replace with your cart logic if needed)
//         // console.log(`Item ID: ${buttonId}, Product Added: ${productName}`)
//     })
// })
addToCartButton.forEach(button => {
  button.addEventListener('click', (e) => {
      // count++;
     
      const btnid = e.target;
      let productContainer = btnid.parentElement;
      let productName = productContainer.querySelector('#productName');
      let productPrice = productContainer.querySelector('#productPrice');
      let productImage = productContainer.querySelector('#productImage');
      let productNameItem = productName.textContent;
      let productPriceItem = productPrice.textContent;
      let productImageItem = productImage.getAttribute('src');

      // Check if the product already exists in the cart
      const isDuplicate = cartItems.some(item => item.name == productNameItem);

      if (!isDuplicate) {
        count++;
        cart.innerHTML = '(' + count + ')';
          // Create a new cart item element (using a DIV)
          const cartItemElement = document.createElement("div");
          cartItemElement.classList.add("item"); // Add a class for styling (optional)

          // Structure the cart item content with quantity control buttons
          cartItemElement.innerHTML = `
            <div class="image">
              <img src="${productImageItem}" alt="${productNameItem}" id="cartImage">
            </div>
            <div class="name" id="cartName">${productNameItem}</div>
            <div class="totalPrice" id="cartPrice">${productPriceItem}</div>
            <div class="quantity">
              <span class="minus" id="cartMinus">-</span>
              <span id="cartCount">1</span>
              <span class="plus" id="cartPlus">+</span>
            </div>
          `;

          // Add the cart item element to the cart container
          cartItem.appendChild(cartItemElement);

          // Add item to cart array
          cartItems.push({ name: productNameItem, price: productPriceItem });

          // Update cart display
          console.log(`Item added to cart: ${productNameItem}`);

          // Optional: Update total price or quantity based on your cart logic.

          // Attach event listeners to the quantity control buttons
          const cartCountElement = cartItemElement.querySelector("#cartCount");
          const minusButton = cartItemElement.querySelector("#cartMinus");
          const plusButton = cartItemElement.querySelector("#cartPlus");

          minusButton.addEventListener("click", () => {
              let currentCount = parseInt(cartCountElement.textContent);
              if (currentCount > 1) {
                  currentCount--;
                  cartCountElement.textContent = currentCount;
              } else {
                  cartItem.removeChild(cartItemElement);
              }
              // Update cart total based on quantity and price (implement your logic)
          });

          plusButton.addEventListener("click", () => {
              let currentCount = parseInt(cartCountElement.textContent);
              currentCount++;
              cartCountElement.textContent = currentCount;
              // Update cart total based on quantity and price (implement your logic)
          });

          // addCartToMemory();
      } else {
          console.log(`Item "${productNameItem}" already exists in the cart.`);
          // count--;
          // if(count<0){
          //   cart.innerHTML = '(' + 0 + ')';
          // }
         
         
      }
  });
});
// Function to retrieve cart items from local storage
// const getCartFromMemory = () => {
//   const cartItemsData = localStorage.getItem('cart');
//   if (cartItemsData) {
//       return JSON.parse(cartItemsData);
//   } else {
//       return []; // Return an empty array if no cart items are found
//   }
// };

// Function to display cart items in the DOM
// const displayCartItems = () => {
//   const cartItemsData = getCartFromMemory();
//   const cartItemContainer = document.getElementById("cart");

//   // Clear existing cart items from the DOM
//   cartItemContainer.innerHTML = '';

//   // Loop through each cart item data and create DOM elements
//   if(cartItemsData.forEach(cartItemData => {
//     count++;
//     cart.innerHTML = '(' + count + ')';
//       const cartItemElement = document.createElement("div");
//       cartItemElement.classList.add("item");
//       cartItemElement.innerHTML = `
//           <div class="image">
//               <img src="${cartItemData.image}" alt="${cartItemData.name}" id="cartImage">
//           </div>
//           <div class="name" id="cartName">${cartItemData.name}</div>
//           <div class="totalPrice" id="cartPrice">${cartItemData.price}</div>
//           <div class="quantity">
//               <span class="minus" id="cartMinus">-</span>
//               <span id="cartCount">${cartItemData.quantity}</span>
//               <span class="plus" id="cartPlus">+</span>
//           </div>
//       `;
//       cartItemContainer.appendChild(cartItemElement);
//   })){
    
//   };
// };

//Call displayCartItems function when the page loads
// window.addEventListener('load', displayCartItems);


// let listProducts = [];
// console.log(listProducts)
// let carts = [];

iconCart.addEventListener('click', () =>{
    body.classList.toggle('showCart')
})

closeCart.addEventListener('click', () =>{
    body.classList.toggle('showCart')
})
// const addDataToHTML = () =>{
//     listProductHTML.innerHTML = '';
    
//     if (listProducts.length > 0){
//         listProducts.forEach(product => {
//             let newProduct = document.createElement('div');
//             newProduct.classList.add('vegetables');
//             newProduct.dataset.id = product.id;
//             newProduct.innerHTML = `
//             <div class="vegetables">
//             <div class="veg">add to cart</div>
//             <img src="./image/${product.image}.png" alt="">
//             <h3>${product.name}</h3>
//             <div class="line"></div>
//             <div class="flex-star">
//               <div>
//             <h6><del>${product.price} </del><span style="color:#274C5B; font-weight: bold;
//              font-size: 15px; margin-left: 10px;">${product.price}</span></h6>
//           </div>
//           <div id="flex-s">
//             <i class="fa-solid fa-star"></i>
//             <i class="fa-solid fa-star"></i>
//             <i class="fa-solid fa-star"></i>
//             <i class="fa-solid fa-star"></i>
//             <i class="fa-solid fa-star"></i>
//           </div>
//           </div>
//           </div>
//             `; 
//             listProductHTML.appendChild(newProduct);
//         })
//     }
// }

// listProductHTML.addEventListener('click', (event) => {
//     let positionClick = event.target;
//     if(positionClick.classList.contains('addCart')){
//         alert('1');
//         let product_id = positionClick.parentElement.dataset.id;
//         addToCart(product_id);
//     }
// })

// const addToCart = (product_id) => {
//     let positionThisProductInCart = carts.findIndex((value) => value.product_id == product_id);
//     if (carts.length <= 0){
//         carts = [{
//             product_id: product_id,
//             quantity: 1
//         }]
//     }else if(positionThisProductInCart < 0){
//         carts.push({
//             product_id: product_id,
//             quantity: 1
//         });
//     }else{
//          carts[positionThisProductInCart].quantity = carts[positionThisProductInCart].quantity + 1;   
//      }
//     addCartToHTML();
//     addCartToMemory();
    
//     // console.log(carts);
//     // addToCart();
// }
// const  addCartToMemory = () => {
//   const cartItemsDOM = document.querySelectorAll(".item");

//   // Create an array to store cart items data
//   const cartItemsData = [];

//   // Loop through each cart item in the DOM
//   cartItemsDOM.forEach(cartItem => {
//       // Extract relevant data from each cart item
//       const productName = cartItem.querySelector("#cartName").textContent;
//       const productPrice = cartItem.querySelector("#cartPrice").textContent;
//       const productQuantity = cartItem.querySelector("#cartCount").textContent;
//       const productImage = cartItem.querySelector("#cartImage").getAttribute('src');

//       // Create an object with cart item data
//       const cartItemData = {
//           name: productName,
//           price: productPrice,
//           quantity: productQuantity,
//           image: productImage
//       };

//       // Add cart item data to the array
//       cartItemsData.push(cartItemData);
//   });
//   localStorage.setItem('cart', JSON.stringify(cartItemsData));

// }
// const addCartToHTML = () =>{
//     listCartHTML.innerHTML = '';
//     let totalQuantity = 0;
//     if(carts.length > 0){
//         carts.forEach(cart => {
//             totalQuantity = totalQuantity + cart.quantity;
//             let newCart = document.createElement('div');
//             newCart.classList.add('item');
//             newCart.dataset.id = cart.product_id;
//             let positionProduct = listProducts.findIndex((value) => value.id == cart.product_id);
//             let info = listProducts[positionProduct];
//             newCart.innerHTML = `
//             <div class="image">
//             <img src="./image/${info.image}.svg" alt="img" style="width:50px; height:50px">
//             </div>
//         <div class="name">${info.name}</div>
//         <div class="totalPrice">${info.price * cart.quantity}</div>
//         <div class="quantity">
//         <span class="minus">-</span>
//         <span>${cart.quantity}</span>
//         <span class="plus">+</span>
//     </div>
//     `;
//     listCartHTML.appendChild(newCart);     
//         })
//     }
  
//     iconCartSpan.innerText = totalQuantity;
// }
// listCartHTML.addEventListener('click', (event) =>{
//     let positionClick = event.target;
//     if(positionClick.classList.contains('minus') || positionClick.classList.contains('plus')){
//         let product_id = positionClick.parentElement.parentElement.dataset.id;
//         let type = 'minus';
//         if(positionClick.classList.contains('plus')){
//             type = 'plus';
//         }
//         changeQuantity(product_id, type)

//     }
// })
// const changeQuantity = (product_id, type) =>{
//     let positionItemInCart = carts.findIndex((value) => value.product_id == product_id);
//     if(positionItemInCart >= 0){
//         switch (type){
//             case 'plus':
//                 carts[positionItemInCart].quantity = carts[positionItemInCart].quantity + 1;
//                 break;
//                 default:
//                     let valueChange = carts[positionItemInCart].quantity - 1;
//                     if(valueChange > 0){
//                         carts[positionItemInCart].quantity = valueChange;

//                     }else{
//                         carts.splice(positionItemInCart, 1);
//                     }
//                     break;
//         }
//     }
//     addCartToMemory();
//     addCartToHTML();
// }
// const initApp = () =>{
//     // get data from json
//     fetch('product.json')
//     .then (response => response.json())
//     .then (data => {
//         listProducts = data;
//         addDataToHTML();
//         console.log(listProducts);

//         // get cart from memory
//         if (localStorage.getItem('cart')){
//             carts = JSON.parse(localStorage.getItem('cart'));
//             addCartToHTML();
//         }
//     })
// }
// initApp();

