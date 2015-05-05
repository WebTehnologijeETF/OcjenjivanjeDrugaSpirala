function Radi(){

   document.getElementById("ImeGreska").style.display="none";
   document.getElementById("PrezimeGreska").style.display="none";
   document.getElementById("GreskaEmail").style.display="none";
   document.getElementById("PrimjedbaGreska").style.display="none";
}
function ValidacijaForme()
{
	var regex=/^([^0-9]*)$/;
	var mail=document.Forma.email.value;
	var ludoa=mail.indexOf("@");
	var tacka=mail.lastIndexOf(".");
	ispravnost=true;
	var pomocnaime=document.Forma.Ime.value.search(regex);
	var pomocnaprezime=document.Forma.Prezime.value.search(regex);

	if(document.Forma.Ime.value!="")
	{
        
        	document.getElementById("ImeGreska").style.display="none";
		if(pomocnaime!="")
		{
			ispravnost=false;
		    document.getElementById("ImeGreska").style.display="block";
		}
    }
	if(document.Forma.Ime.value=="")
	{
		ispravnost=false;
		
		document.getElementById("ImeGreska").style.display="block";
	}
	if(document.Forma.Prezime.value!="")
	{
		document.getElementById("PrezimeGreska").style.display="none";
       if(pomocnaprezime!="")
       {
       	document.getElementById("PrezimeGreska").style.display="block";
		ispravnost=false;
		}
	}
	if(document.Forma.Prezime.value=="")
	{
		ispravnost=false;
		document.getElementById("PrezimeGreska").style.display="block";
	}
	if(mail.length==0)
	{
		document.getElementById("GreskaEmail").style.display="block";
		ispravnost=false;
	}
	if(document.Forma.email.value!="")
	{
		document.getElementById("GreskaEmail").style.display="none";
	if(ludoa<1 || tacka<ludoa+2 || tacka+2>=mail.length)
	{
		ispravnost=false;
		document.getElementById("GreskaEmail").style.display="block";
	}
	if(document.Forma.Primjedbe.value!=0)
	{
		document.getElementById("PrimjedbaGreska").style.display="none";
	}
}
	if(document.getElementsByName("Track")[0].value<50 && document.Forma.Primjedbe.value=="")
	{
		ispravnost=false;
		document.getElementById("PrimjedbaGreska").style.display="block";
		
	}
	if(document.getElementsByName("Track")[0].value>50)
	{
		document.getElementById("PrimjedbaGreska").style.display="none";
	}
		return ispravnost;
	
}
	