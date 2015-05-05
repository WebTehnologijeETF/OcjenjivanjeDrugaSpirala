function Prikazi_error(tekst)
{
	
	document.getElementById("error").innerHTML=tekst;
	
}
function Validacija_forme()
{	
	
	var email=document.getElementById("email");
	var tekst=document.getElementById("text");
	var tel=document.getElementById("tel");
	var visemail=0;
	var vistel=0;
	var vistext=0;
	var visweb=0;
	var telRegex=/^\(?(\d{3})\)?[-]?(\d{3})[-]?(\d{4})$/;
	if(email.value==""|| email.value==null)
	{
		document.getElementById("email-slika").style.visibility="visible";
		document.getElementById("error_email").innerHTML="Please enter e-mail address!";
		visemail=1;
	}
	else
	{
		document.getElementById("email-slika").style.visibility="hidden";
		document.getElementById("error_email").innerHTML="";
		visemail=0;
	}
	if(tel.value=="" || tel.value==null )
	{
		document.getElementById("tel-slika").style.visibility="visible";
		document.getElementById("error_tel").innerHTML="Please enter a 10 digit number!";
		vistel=1;
	}
	else if(!telRegex.test(document.getElementById('tel').value))
	{
		document.getElementById("tel-slika").style.visibility="visible";
		document.getElementById("error_tel").innerHTML="Please enter a 10 digit number in format '999-999-9999' or '9999999999'!";  
		vistel=1;
	}
	else
	{
		document.getElementById("tel-slika").style.visibility="hidden";
		document.getElementById("error_tel").innerHTML="";
		vistel=0;
	}
	if(web.value==""|| web.value==null)
	{
		document.getElementById("web-slika").style.visibility="visible";
		document.getElementById("error_tel").innerHTML="Please enter 10 digit number address or website!";
		visweb=1;
	}
	else
	{
		document.getElementById("web-slika").style.visibility="hidden";
		document.getElementById("error_tel").innerHTML="";
		visweb=0;
	}
	if(text.value=="" || text.value==null)
	{
		document.getElementById("text-slika").style.visibility="visible";
		document.getElementById("error_text").innerHTML="Please enter your message!";
		vistext=1;
	}
	else
	{
		document.getElementById("text-slika").style.visibility="hidden";
		document.getElementById("error_text").innerHTML="";
		vistext=0;
	}


	if (visweb==0 && vistel==1)
	{
		document.getElementById("tel-slika").style.visibility="hidden";
		document.getElementById("error_tel").innerHTML="";
		vistel=0;

	}
	else if(vistel==0 && visweb==1)
	{
		document.getElementById("web-slika").style.visibility="hidden";
		document.getElementById("error_tel").innerHTML="";
		visemail=0;
	}

 	if(vistext==0 && vistel==0 && visemail==0)
 	{
 		document.forms.submit();
		return true;
 	}
}