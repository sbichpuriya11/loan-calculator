console.log('Hello');

//Listen for submit
document.getElementById('loan-form').addEventListener('submit',function(event){

    event.preventDefault();

    //Hiding the resuts
    document.getElementById('results').style.display = 'none';

    setTimeout(calculateResult,4000);

    //Loader Icon Usage
    document.getElementById('loading').style.display = 'block';


});

function calculateResult(){

   
    let amount = document.getElementById('amount');
    let interest = document.getElementById('interest');
    let time = document.getElementById('time');
    let mPayment = document.getElementById('monthly-payment');
    let tPayment = document.getElementById('total-payment');
    let tInterest = document.getElementById('total-interest');

 
    const principal = parseInt(amount.value);
    const calculatedInterest = parseFloat(interest.value)/100/12;
    const calculatedPayments = parseFloat(interest.value)*12;


    //Compute monthly payments
    const x = Math.pow(1+calculatedInterest,calculatedPayments);
    const monthly = (principal*x*calculatedInterest)/(x-1);

    if(isFinite(monthly)){
        
    
    
    setTimeout(clearLoading,6000);
        mPayment.value = monthly.toFixed(2);
        tPayment.value = (monthly*calculatedPayments).toFixed(2);
        tInterest.value = ((monthly*calculatedPayments)-principal).toFixed(2);

        //hide loader
        document.getElementById('loading').style.display = 'none';

        ///show results
        document.getElementById('results').style.display = 'block';
    }
    else{
      showError('Please check your input');
    }
    mPayment.appendChild(document.createTextNode('Hello'));
    console.log('form submitted');
 
}


function showError(error){

    //Hide Loader
    document.getElementById('loading').style.display = 'none';

    //Show results
    document.getElementById('results').style.display = 'none';


    let errorDiv = document.createElement('div');
    errorDiv.className = 'alert alert-danger';
    errorDiv.id = 'error';
    errorDiv.style.boxShadow = '10px 10px 10px rgba(0,0,0,0.4)'; 
    errorDiv.appendChild(document.createTextNode(error));

    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');

    card.insertBefore(errorDiv,heading);

    //Clear error after 3 seconds
    setTimeout(clearError,3000);    

}

function clearError(){

    // document.querySelector('#error').style.display = 'none';

    document.querySelector('.alert').remove();
}



function clearLoading(){
    document.getElementById('loading').remove();
}
