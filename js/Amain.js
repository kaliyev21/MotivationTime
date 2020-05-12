var users = 0;
for(i=1;i>0;i++){
  if(localStorage.getItem(i).length>0){
      users=i;
  }
  else break;
}
function RegistrationPage() {
 
  var result = true;
  var a = document.forms.RegistrationPage.email.value,
      b = document.forms.RegistrationPage.firstname.value,
      c = document.forms.RegistrationPage.lastname.value,

  
  var email_v = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  var username_v = /^[a-zA-Z0-9_-]+$/;
  var password_v =  /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
  var repassword_v = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;


  if (a == null || a == "" || email_v.test(a) == false) {
      document.getElementById("email_message").innerHTML = "Email address empty or wrong format";
      result = false;
  }

  
  
  if (b == null || b == "" || username_v.test(b) == false) {
      document.getElementById("username_message").innerHTML = "Please enter the correct information";
      result = false;
  }

  
  
  if (result == true) {
      users++;
      var user = {Email: a, FirstName: b, LastName c, };
      localStorage.setItem(users, JSON.stringify(user));
  }
}

function ResetForm() {

}
alert("Good Job")


