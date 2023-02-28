function formValidator(){
  
   let firstname= document.getElementById('firstname').value;
   let lastname= document.getElementById('lastname').value;
   let password=document.getElementById('password').value;
   let address=document.getElementById('address').value;
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
   else if(password.length<6){
    alert("password too short");
    return false;
   }
  
  
}