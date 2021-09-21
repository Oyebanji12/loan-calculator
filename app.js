// listen for submit button
document.querySelector('#loan-form').addEventListener('submit', calculateResults)


// calculate result
function calculateResults(e) {

//console.log('calculating')

    
    // UI variable
    var amount=document.querySelector('#amout');
    var interest= document.querySelector('#interest');
    var years= document.querySelector('#years');

    var monthlyPayment= document.querySelector('#monthly-payment');
    var totalPayment= document.querySelector('#total-payment');
    var totalInterest= document.querySelector('#total-interest')


    var principal=parseFloat(amount.value);
    var calculatedInterest=parseFloat(interest.value) /100 /12;
    var calculatedPayment=parseFloat(years.value) * 12;


// compute monthly payment
var x= Math.pow(1 + calculatedInterest, calculatedPayment);
var monthly=(principal * x * calculatedInterest) / (x-1)


if(isFinite(monthly)){
    monthlyPayment.value=monthly.toFixed(2);
    totalPayment.value=(monthly * calculatedPayment).toFixed(2)
    totalInterest.value=((monthly * calculatedPayment)- principal).toFixed(2)

} else {
    showError('pls check your number');

}

    e.preventDefault();

}

// show error
function showError(error) {
    //create a div
    var errorDiv=document.createElement('div')

    // get element
    var card=document.querySelector('.card');
    var heading=document.querySelector('.heading');

    // add a class name
    errorDiv.className='alert alert-danger';
    

    // create a text node and append to div
    errorDiv.appendChild(document.createTextNode(error));
    
    // insert error above heading
    card.insertBefore(errorDiv, heading)

    // clear error after 3 seconds
    setTimeout(clearError,3000)
}

// clear error
function clearError() {
    document.querySelector('.alert').remove();
    
}