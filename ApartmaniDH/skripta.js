window.onload=  function() {
  var tekst=document.getElementById("unosteksta");	
  tekst.disabled=true;
}
//textarea je disabled, tek nakon imena i maila se moze poceti kucati poruka

function showmore(ref,bonus){	
var tekst=ref.innerHTML;
if(tekst=="Read more..."){
	document.getElementById(bonus).style.display="inline";
	ref.innerHTML="Read less.";
}
else {
	document.getElementById(bonus).style.display="none";
	ref.innerHTML="Read more...";
}
}


function showMenu(){
	var submeni=document.getElementById("submenu").children[0];
    var submeni1=document.getElementById("submenu").children[1];      
	submeni.style.display="block";
	submeni1.style.display="block";
   document.getElementById("submenu").style.display="block";
   document.getElementById("submenu").style.clear="both";
    
 }
 function hideMenu(){
   document.getElementById("submenu").style.display="none";
 }
 
 function validiraj(){
	 var email = document.getElementById("mejl").value;
	 var ime=document.getElementById("unosime").value;
	 var tekst=document.getElementById("unosteksta").value;
	 
	 if(!validirajIme(ime) || !validirajEmail(email) || !validirajTekst(tekst)){
		 
		 if(!validirajIme(ime) && validirajEmail(email) && validirajTekst(tekst)){
		document.getElementById("errormail").innerHTML = "";
		 document.getElementById("errorime").innerHTML = "Please enter a valid name.";
		 document.getElementById("errortekst").innerHTML = "";
		 return false;
		 }
		else if(validirajIme(ime) && !validirajEmail(email) && validirajTekst(tekst)){
			document.getElementById("errorime").innerHTML = "";
		 document.getElementById("errormail").innerHTML = "Please enter a valid e-mail.";
		 document.getElementById("errortekst").innerHTML = "";
		 return false;
		}
		else if (!validirajIme(ime) && !validirajEmail(email) && validirajTekst(tekst)){
		document.getElementById("errorime").innerHTML = "Please enter a valid name.";
		document.getElementById("errormail").innerHTML = "Please enter a valid e-mail.";
		document.getElementById("errortekst").innerHTML = "";
		return false;
		}
		
		else if (!validirajIme(ime) && validirajEmail(email) && !validirajTekst(tekst)){
		document.getElementById("errorime").innerHTML = "Please enter a valid name.";
		document.getElementById("errormail").innerHTML = "";
		document.getElementById("errortekst").innerHTML = "Please enter a message.";
		return false;
		}
		
		else if (validirajIme(ime) && !validirajEmail(email) && !validirajTekst(tekst)){
		document.getElementById("errorime").innerHTML = "";
		document.getElementById("errormail").innerHTML = "Please enter a valid e-mail.";
		document.getElementById("errortekst").innerHTML = "Please enter a message.";
		return false;
		}
		
		else if (validirajIme(ime) && validirajEmail(email) && !validirajTekst(tekst)){
		document.getElementById("errorime").innerHTML = "";
		document.getElementById("errormail").innerHTML = "";
		document.getElementById("errortekst").innerHTML = "Please enter a message.";
		return false;
		}
		
		document.getElementById("errorime").innerHTML = "Please enter a valid name.";
		document.getElementById("errormail").innerHTML = "Please enter a valid e-mail.";
		document.getElementById("errortekst").innerHTML = "Please enter a message.";
		
		return false;
	 }
	 
	 
	 else {
		 
		 document.getElementById("errorime").innerHTML = "";
		document.getElementById("errormail").innerHTML = "";
		document.getElementById("errortekst").innerHTML = "";
		 return true;
		 
	 }
	 
	 	 
}



function odobri(){
	var email = document.getElementById("mejl").value;
	var tekst=document.getElementById("unosteksta");
	var ime=document.getElementById("unosime").value;
	if(validirajEmail(email) && validirajIme(ime)){
		document.getElementById("errortekst").innerHTML="";
  tekst.disabled=false;
	}

else{
	tekst.disabled=true;
	document.getElementById("errortekst").innerHTML="Name and/or mail missing!";
}
}

function odobriIme(){
	var ime=document.getElementById("unosime").value;
	if(validirajIme(ime))
		document.getElementById("errorime").innerHTML="";
	else 
		document.getElementById("errorime").innerHTML="Please enter a valid name.";
}

function odobriMail(){
	var email=document.getElementById("mejl").value;
	if(validirajEmail(email))
		document.getElementById("errormail").innerHTML="";
	else 
		document.getElementById("errormail").innerHTML="Please enter a valid mail.";
}

function validirajEmail(email) {
 var re = /^[a-z\._0-9]+@[a-z]+\.[a-z]{2,4}$/;
 return re.test(email);
 }
 
 function validirajIme(ime)
{
	var re=/^[a-zšđčćž]+$/i;
	return re.test(ime);
    }

function validirajTekst(tekst)
{
	if(tekst=="" || tekst==null)
        return false;
    
    return true;
}



function resetsve(){
	document.getElementById("errormail").innerHTML = "";
	document.getElementById("errorime").innerHTML = "";
	document.getElementById("errortekst").innerHTML="";
}