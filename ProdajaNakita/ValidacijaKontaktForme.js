function validateName() {

  var name = document.getElementById('contact-name').value;

  if(name.length == 0) {

    producePrompt('Niste unijeli ime', 'name-error' , 'red')
    return false;

  }

  if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {

    producePrompt('Unesite ime i prezime','name-error', 'red');
    return false;

  }

  producePrompt('OK', 'name-error', 'green');
  return true;

}


function validateEmail () {

  var email = document.getElementById('contact-email').value;

  if(email.length == 0) {

    producePrompt('Email nije pravilan','email-error', 'red');
    return false;

  }

  if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {

    producePrompt('Email nije pravilno unesen', 'email-error', 'red');
    return false;

  }

  producePrompt('OK', 'email-error', 'green');
  return true;

}

function validateMessage() {
  var message = document.getElementById('contact-message').value;
  var required = 30;
  var left = required - message.length;

  if (left > 0) {
    producePrompt(left + ' Unesite tekst','message-error','red');
    return false;
  }

  producePrompt('OK', 'message-error', 'green');
  return true;

}

function validateForm() {
    if ((!validateName() && !validatePhone() && !validateEmail() && !validateMessage())||(!validateName() || !validatePhone() || !validateEmail() || !validateMessage())) {
        jsShow('submit-error');
        producePrompt('Ispravite greške.', 'submit-error', 'red');
        setTimeout(function(){jsHide('submit-error');}, 2000);
        return false;
    }
	alert("Ispunili ste formu ispravno!");
}
function validatePhone() {

  var phone = document.getElementById('contact-phone').value;

    if(phone.length == 0) {
      producePrompt('Niste unijeli broj telefona', 'phone-error', 'red');
      return false;
    }

    if(phone.length != 9) {
      producePrompt('Unesite i pozivni broj', 'phone-error', 'red');
      return false;
    }

    if(!phone.match(/^[0-9]{10}$/)) {
      producePrompt('Unijeli ste slovo ili znak.' ,'phone-error', 'red');
      return false;
    }

    producePrompt('OK', 'phone-error', 'green');
    return true;

}

function jsShow(id) {
  document.getElementById(id).style.display = 'block';
}

function jsHide(id) {
  document.getElementById(id).style.display = 'none';
}




function producePrompt(message, promptLocation, color) {

  document.getElementById(promptLocation).innerHTML = message;
  document.getElementById(promptLocation).style.color = color;


}