
// common function to calculate value inside div

function divValue(fieldId) {
    const divText = document.getElementById(fieldId);
    const divTextString = divText.innerText;
    const divTextValue = parseFloat(divTextString);
    return divTextValue;


}

// common function to set total price

function calculateTotalPrice(itemPrice) {
    const totalPrice = divValue('total-price');

    const TotalPrices = totalPrice + itemPrice;
    const TotalPrice = TotalPrices.toFixed(2);
    document.getElementById('total-price').innerText = TotalPrice;


    // counting discount

    const discounts = TotalPrice * 0.2;
    const discount = discounts.toFixed(2);
    
    // discount price without cupon code
    document.getElementById('discount-price').innerText = 0;

    // counting final total Before discount

    const totalsBeforeDiscount = TotalPrice;
    document.getElementById('total').innerText = totalsBeforeDiscount;


    // apply cupon field 
    document.getElementById('cupon-input').addEventListener('keyup', function (event) {
        const text = event.target.value;

        if (text === 'SELL200') {
            document.getElementById('btn-apply').addEventListener('click', function () {
                // setting total discount
                document.getElementById('discount-price').innerText = discount;

                // setting total value after discount
                const totals = TotalPrice - discount;
                const total = totals.toFixed(2);
                document.getElementById('total').innerText = total;

                // setting empty value after clicking apply btn for cupon field

                const newText = document.getElementById('cupon-input');
                newText.value = '';





            })
        }

        //  after clicking go home button  resetting values
        document.getElementById('go-home').addEventListener('click', function () {
            const totalPriceInitial = 0;
            const totalInitial = 0;
            const totaldiscount = 0;
            document.getElementById('total-price').innerText = totalPriceInitial;
            document.getElementById('total').innerText = totalInitial;
            document.getElementById('discount-price').innerText = totaldiscount;
        })

    })



    // checking total price to enable purchase button
    const purchase = document.getElementById('purchase-btn');
    if (TotalPrice > 0) {
        purchase.removeAttribute('disabled');
    }
    else {
        purchase.setAttribute('disabled', true);
    }

    // checking total price to enable apply button
    const applyButton = document.getElementById('btn-apply');
    if (TotalPrice >= 200) {
        applyButton.removeAttribute('disabled');
    }
    else {
        applyButton.setAttribute('disabled', true);
    }





}





// calculate AccessoriesPrice1
function calculateAccessories1() {
    const AccessoriesPrice1 = divValue('Accessories-price1');
    const presentTotalPrice = calculateTotalPrice(AccessoriesPrice1);
    const cartItemsName = cartItems('K. Accessories');


}

// calculate home cooker
function calculateHomeCooker() {
    const CookerPrice = divValue('cooker-price');
    const presentTotalPrice = calculateTotalPrice(CookerPrice);
    const cartItemsName = cartItems('Home Cooker');

}

// calculate AccessoriesPrice2
function calculateAccessories2() {
    const AccessoriesPrice2 = divValue('Accessories-price2');
    const presentTotalPrice = calculateTotalPrice(AccessoriesPrice2);
    const cartItemsName = cartItems('K. Accessories');


}

// calculate Chair
function calculateChair() {
    const chairPrice = divValue('chair-price');
    const presentTotalPrice = calculateTotalPrice(chairPrice);
    const cartItemsName = cartItems('Single Relax Chair');
}

// calculate ChildrenPlay
function calculateChildrenPlay() {
    const ChildrenPlayPrice = divValue('chidrenPlay-price');
    const presentTotalPrice = calculateTotalPrice(ChildrenPlayPrice);
    const cartItemsName = cartItems('Children Play');
}

// calculate sofa price
function calculateSofaPrice() {
    const sofaPrice = divValue('sofa-price');
    const presentTotalPrice = calculateTotalPrice(sofaPrice);
    const cartItemsName = cartItems('Flexible Sofa');
}

// dynamically creating cart items name
function cartItems(itemName){
   const cartList =  document.getElementById('cart-list');
   cartList.classList.add('bg-white' , 'p-2');
   const count = cartList.childElementCount;
   const p = document.createElement('p');
   p.classList.add('m-4', 'font-semibold');
   p.innerHTML = `${count + 1}.  ${itemName}` ;

   cartList.appendChild(p);
}