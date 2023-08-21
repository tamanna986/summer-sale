
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


            })
        }


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


// cupon part

// new try

// document.getElementById('cupon-input').addEventListener('keyup', function(event){
//     const text = event.target.value;
//     const discountPrice = divValue('discount-price');
//     if (text === 'SELL200'){
//         document.getElementById('btn-apply').addEventListener('click',function()){
//             newdiscountPrice = TotalPrice*0.2;
//             discountPrice.innerText = newdiscountPrice;
//         }
//     }
// })








// calculate AccessoriesPrice1
function calculateAccessories1() {
    const AccessoriesPrice1 = divValue('Accessories-price1');
    const presentTotalPrice = calculateTotalPrice(AccessoriesPrice1);


}

// calculate home cooker
function calculateHomeCooker() {
    const CookerPrice = divValue('cooker-price');
    const presentTotalPrice = calculateTotalPrice(CookerPrice);
}

// calculate AccessoriesPrice2
function calculateAccessories2() {
    const AccessoriesPrice2 = divValue('Accessories-price2');
    const presentTotalPrice = calculateTotalPrice(AccessoriesPrice2);


}

// calculate Chair
function calculateChair() {
    const chairPrice = divValue('chair-price');
    const presentTotalPrice = calculateTotalPrice(chairPrice);
}

// calculate ChildrenPlay
function calculateChildrenPlay() {
    const ChildrenPlayPrice = divValue('chidrenPlay-price');
    const presentTotalPrice = calculateTotalPrice(ChildrenPlayPrice);
}

// calculate sofa price
function calculateSofaPrice() {
    const sofaPrice = divValue('sofa-price');
    const presentTotalPrice = calculateTotalPrice(sofaPrice);
}