function formValidator(){
  
   let firstname= document.getElementById('firstname').value;
   let lastname= document.getElementById('lastname').value;
   let password=document.getElementById('password').value;
   let address=document.getElementById('address').value;
   let pincode=document.getElementById('pincode').value;
   let contact=document.getElementById('contact').value;
   if(firstname==null||firstname=="")
   {
    alert("Name can't be empty");
    return false;
   }

   else if(address==null||address=="")
   {
    alert("First line address can't be empty");
    return false;
   }

   else if(pincode.length!=6)
   {
      alert("Invalid Pincode");
      return false;
   }
   else if(contact.length!=10)
   {
      alert("Do provide a proper contact");
      return false;
   }

   else if(password.length<6){
    alert("password too short");
    return false;
   }
  
}

function submitWarning(){
   let submit=document.getElementById('submit');
   alert("Are u sure to submit ??");
}