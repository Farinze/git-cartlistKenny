const add = document.querySelectorAll('.add')
const cartList = document.querySelector('.cart-list')

for(let i = 0; i < add.length; i++){
    add[i].addEventListener('click', addCurrentItem)
}

function addCurrentItem(e){
    const coffeeCont = e.target.parentElement
    const img = coffeeCont.querySelector('img').src
    const prod =coffeeCont.querySelector('.name')
    console.log(prod.textContent)

    const li = document.createElement('li')
    li.classList.add('li')

    li.innerHTML = `
        <div class="item">
            <img src="${img}">
            <p class="name">${prod.textContent}</p>
            <button class="remove">remove</button>
        </div>
        <div class="counter">
            <button class="minus">-</button>
            <span class="number">1</span>
            <button class="add">+</button>
        </div>
    `

    cartList.appendChild(li)


    const removeItem = document.querySelectorAll('.remove')

    // if(let i = 0; i < removeItem.length; i++){
    //     removeItem[i].addEventListener('click', removeCurrentItem)
    // }

    // Or

    removeItem.forEach(item => {
        item.addEventListener('click', removeCurrentItem)
    })
    
    
    // removeItem.addEventListener('click', removeCurrentItem)

    // increase number of a particular item in cart
    const add = li.querySelector('.add')
    add.addEventListener('click', increaseItemNo)


    // reduce number of a particular item in cart
    const sub = li.querySelector('.minus')

    sub.addEventListener('click', reduceItemNo)
}


// these two lines of code will only affect preexisting delete buttons
// const removeItem = document.querySelectorAll('.remove')
// removeItem.addEventListener('click', removeCurrentItem)



function removeCurrentItem(e){
    const itemCont = e.target.parentElement.parentElement
    cartList.removeChild(itemCont)
}

function increaseItemNo(e){
    const num = e.target.previousElementSibling

    num.textContent = +num.textContent + 1
}

function reduceItemNo(e){
    const num = e.target.nextElementSibling
    
    if(num.textContent > 1){
        num.textContent = num.textContent - 1
    }
    else{
        cartList.removeChild(e.target.parentElement.parentElement)
    }
}











// let num = 5
// const myInterval = setInterval(count, 1000)

// function count(){
//     num += 1
//     console.log(num)

//     if(num > 30){
//         clearInterval(myInterval)
//     }
// }