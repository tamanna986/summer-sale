// cupon part
document.getElementById('cupon-input').addEventListener('keyup',function(event){
    const text = event.target.value;
    const cuponButton = document.getElementById('btn-apply'){
        if (text === 'SELL200') {
            cuponButton.removeAttribute('disabled');
        }
        else{
            cuponButton.setAttribute('disabled',true);
        }
    }
})