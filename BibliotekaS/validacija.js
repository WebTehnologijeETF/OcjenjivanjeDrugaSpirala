(function() {

    'use strict';

    var button = document.forms["myForm"]["submit"];
    button.disabled = true;

    addNewEvent(
        document.forms["myForm"]["ime"],
        'blur',
        validateContactName
    );

    addNewEvent(
        document.forms["myForm"]["email"],
        'blur',
        validateContactEmail
    );

    addNewEvent(
        document.forms["myForm"]["poruka"],
        'blur',
        validateContactMsg
    );

})();


function validateContactName() {

    if (!this.value) {
        addError(this, 'Unesite ime', true);
        return;
    }

    addError(this, '');
};

function validateContactEmail() {

    var patern = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

    if (!this.value.match(patern)) {
        addError(this, 'Ispravan format e-mail-a: primjer@primjer.primjer', true);
        return;
    }

    addError(this, '');

};

function validateContactMsg() {

    if (!this.value) {
        addError(this, 'Unesite poruku', true);
        return;
    }

    addError(this, '');
};


function addError(node, msg, isError) {
    var parentContainer = node.parentElement,
        errorLabel = parentContainer.getElementsByClassName('errorLabel')[0];

    if (!errorLabel) {
        errorLabel = document.createElement("span");
        errorLabel.className = ' errorLabel';

        parentContainer.appendChild(errorLabel);
    }

    errorLabel.textContent = msg;

    node.className = node.className.replace(' error', '');
    node.className = node.className.replace(' passed', '');

    isError && (node.className += ' error');
    !isError && (node.className += ' passed');

    toggleButton();
};

function toggleButton() {
    var form = document.forms["myForm"],
        requirdFields = form.getElementsByClassName('required'),
        passedFields = form.getElementsByClassName('passed'),
        button = document.forms["myForm"]["submit"];

    if( requirdFields.length !== passedFields.length ) {
        button.disabled = true;
        return;
    }    

    button.disabled = false;
};


function addNewEvent(element, evnt, funct) {
    
    if (element.attachEvent) {
        return element.attachEvent('on' + evnt, funct);
    } else {
        return element.addEventListener(evnt, funct, false);
    }
}
