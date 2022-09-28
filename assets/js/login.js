const LogInForm = document.getElementById('loginForm');

function showLoginForm(bool) {
    if (bool) {
        LogInForm.hidden = false;
    } else {
        LogInForm.hidden = true;
    }
  }