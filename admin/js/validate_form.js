document.querySelector('form').addEventListener('submit', function(event) {
    let isFormValidate = true;

    const emailAddressInput = event.target.querySelector('input[name="e-mail"]')

    if(emailAddressInput.value.indexOf('@') < 0) {
      isFormValidate = false;
      
      document.querySelector('.error').innerHTML = 'Wrong e-mail address';
   
    }
  
    return !isFormValidate ? event.preventDefault() : true;
  })


  