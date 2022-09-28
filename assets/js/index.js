 const signUp = e => {
     let fname = document.getElementById('fname').value,
         lname = document.getElementById('lname').value,
         email = document.getElementById('email').value,
         pwd = document.getElementById('pwd').value;

     let formData = JSON.parse(localStorage.getItem('formData')) || [];

     let exist = formData.length &&
         JSON.parse(localStorage.getItem('formData')).some(data =>
             data.fname.toLowerCase() == fname.toLowerCase() &&
             data.lname.toLowerCase() == lname.toLowerCase()
         );

     if (!exist) {
         formData.push({ fname, lname, email, pwd });
         localStorage.setItem('formData', JSON.stringify(formData));
         document.querySelector('form').reset();
         document.getElementById('fname').focus();
         alert("Account Created.\nLet's Get Friendly!");
         location.href = "landing.html";

     } else {
         alert("Ooopppssss... Duplicate found!!!\nYou have already signed up");
     }
     e.preventDefault();
 }


 function login(e) {
     let email = document.getElementById('lemail').value,
         pwd = document.getElementById('pswd').value;
     let formData = JSON.parse(localStorage.getItem('formData')) || [];
     let exist = //formData.length &&
         JSON.parse(localStorage.getItem('formData')).some(data =>
             data.email == email.toLowerCase() &&
             data.pwd == pwd.toLowerCase());
     if (!exist) {
         alert("Incorrect login credentials");
     } else {
         alert('Login successful');
         location.href = "landing.html";
     }
     e.preventDefault();
 }