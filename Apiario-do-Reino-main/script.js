const menu= document.getElementById("menu")
const cartBtn = document.getElementById("cart-btn")
const cartModal = document.getElementById("cart-modal")
const carItemsContainer = document.getElementById("cart-items")
const carTotal = document.getElementById("cart-total")
const checkout = document.getElementById("checkout-btn")
const closeModalBtn = document.getElementById("close-modal-btn")
const cartCounter = document.getElementById("cart-count")
const addressInput = document.getElementById("address")
const addressWarn = document.getElementById("address-warn")


let cart = [];

// Abrir o modal do carrinho
cartBtn.addEventListener("click" , function() {
    updateCartModal();
    cartModal.style.display= "flex"
})

// Fechar o modal quando clicar fora
cartModal.addEventListener("click" , function(event){
    if(event.target === cartModal){
        cartModal.style.display = "none"
    }
})

closeModalBtn.addEventListener("click" , function(){
    cartModal.style.display = "none"
})


menu.addEventListener("click" , function(event){
    //console.log(event.target)
     let parentButton = event.target.closest(".add-to-cart-btn")
     
     if(parentButton){
        const name = parentButton.getAttribute("data-name")
        const price = parseFloat(parentButton.getAttribute("data-price"))
        addToCart(name,price)
    
     }
})

// Função para adicionar no carrinho 
function addToCart(name,price){
    const existingItem = cart.find(item => item.name === name)

    if(existingItem){
        existingItem.quantity +=1;
    }else{

        cart.push({
          name,
          price,
          quantity: 1,

        })
    }
    
    updateCartModal()

}

//Atualiza o carrinho
function updateCartModal(){
    carItemsContainer.innerHTML="";
    let total = 0;

    cart.forEach(item => {
        const cartItemElement = document.createElement("div");
        cartItemElement.classList.add("flex", "mb-4", "flex-col")    
    
        cartItemElement.innerHTML = `
        <div class="justify-between flex items-center">
            <div>
                <p class="font-medium">${item.name}</p>
                 <p>Qtd: ${item.quantity}</p>
                <p class="font-medium mt-2">R$ ${item.price.toFixed(2)}</p>
            </div>

                <button>
                    Remover
                </button>

        </div>
         `

         total += item.price * item.quantity;

        carItemsContainer.appendChild(cartItemElement)

    })

    carTotal.textContent = total.toLocaleString("pt-BR",{
        style: "currency",
        currency: "BRL"
    })

    cartCounter.innerHTML = cart.length;



}