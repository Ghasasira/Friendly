const LoginForm = document.getElementById("signupForm");

function showSignupForm(bool) {
    if (bool) {
        LoginForm.hidden = false;
    } else {
        LoginForm.hidden = true;
    }
  }