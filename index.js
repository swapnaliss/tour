function loginUsername() {
    const uname = document.getElementById("username");
    const unameerror = document.getElementById("unameerror");

    if (uname.value !== '') {
        unameerror.innerHTML = " ";
        return true;

    } else {
        unameerror.innerHTML = "Field can not be empty";
        return false;
    }
}


function loginPassword() {

    const pwd = document.getElementById("pwd");
    const pwderror = document.getElementById("pwderror");


    if (pwd.value !== '') {

        pwderror.innerHTML = " ";
        return true;

    } else {
        pwderror.innerHTML = "Field can not be empty";
        return false;
    }
}


function loginPageValidate() {

    if (loginUsername() && loginPassword()) {
        window.location = "Home.html"
    }

}

function signUpEmail() {

    const EmailId = document.getElementById("EmailId");
    const emailerror = document.getElementById("emailerror");
    const invalidEmailIcon = document.getElementById("invalidEmailIcon");
    const validEmailIcon = document.getElementById("validEmailIcon");
    let regexp = /^([A-Za-z0-9\.-]+)@([a-zA-Z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;

    if (regexp.test(EmailId.value)) {
        emailerror.innerHTML = "Valid email";
        emailerror.style.color = "green";
        invalidEmailIcon.style.display = 'none';
        validEmailIcon.style.display = '';
        return true;
    } else {
        emailerror.innerHTML = "Invalid email";
        emailerror.style.color = "Red";
        invalidEmailIcon.style.display = '';
        validEmailIcon.style.display = 'none';
        return false;
    }
}

function signUpUsername() {
    const user = document.getElementById("signupUsername");
    const unameerror = document.getElementById("signupUserError");
    const invalidUsernameIcon = document.getElementById("invalidUsernameIcon");
    const validUsernameIcon = document.getElementById("validUsernameIcon");

    if (user.value !== '') {
        unameerror.innerHTML = " ";
        validUsernameIcon.style.display = '';
        invalidUsernameIcon.style.display = 'none'
        return true;
    } else {
        unameerror.innerHTML = "Field can not be empty";
        unameerror.style.color = "Red";
        validUsernameIcon.style.display = 'none';
        invalidUsernameIcon.style.display = ''
        return false;
    }
}

function signUpPhone() {
    const phone = document.getElementById("Phone");
    const signupPhoneError = document.getElementById("signupPhoneError");
    let phoneRegexp = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    const invalidPhoneIcon = document.getElementById("invalidPhoneIcon");
    const validPhoneIcon = document.getElementById("validPhoneIcon")

    if (phone.value.match(phoneRegexp)) {
        // signupPhoneError.innerHTML = " ";
        signupPhoneError.style.display = 'none';
        invalidPhoneIcon.style.display = 'none';
        validPhoneIcon.style.display = ''
        return true;
    } else {
        // signupPhoneError.innerHTML = "Field can not be empty";
        signupPhoneError.style.display = '';
        invalidPhoneIcon.style.display = '';
        validPhoneIcon.style.display = 'none';
        return false;
    }
}

function signUpPassword() {
    const Password = document.getElementById("Password");
    const signupPasswordError = document.getElementById("signupPasswordError");
    const invalidPasswordIcon = document.getElementById("invalidPasswordIcon");
    const validPasswordIcon = document.getElementById("validPasswordIcon")
    let passRegexp = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
    let strength = 0;
    let strengthbar = document.getElementById("meter");


    if (Password.value.match(/[a-z]+/)) {
        strength += 1;
      }
      if (Password.value.match(/[A-Z]+/)) {
        strength += 1;
      }
      if (Password.value.match(/[0-9]+/)) {
        strength += 1;
      }
      if (Password.value.length >= 8) {
        strength += 1;
      }


      switch (strength) {
        case 0:
          strengthbar.value = 0;
          break;
    
        case 1:
          strengthbar.value = 25;
          break;
    
        case 2:
          strengthbar.value = 50;
          break;
    
        case 3:
          strengthbar.value = 75;
          break;
    
        case 4:
          strengthbar.value = 100;
          break;
      }

    if (Password.value.match(passRegexp)) {
        signupPasswordError.style.display = 'none';
        invalidPasswordIcon.style.display = 'none';
        validPasswordIcon.style.display = '';
        return true;
    } else {
        signupPasswordError.style.display = '';
        invalidPasswordIcon.style.display = '';
        validPasswordIcon.style.display = 'none';
        return false;
    }
    
}

function signUpConfirmPassword() {
    const Confirmpwd = document.getElementById("Confirmpwd");
    const signupConfirmError = document.getElementById("signupConfirmError");
    const Password = document.getElementById("Password");
    const invalidCofirmPasswordIcon = document.getElementById("invalidCofirmPasswordIcon");
    const validCofirmPasswordIcon = document.getElementById("validCofirmPasswordIcon")

    if (Confirmpwd.value === Password.value) {
        signupConfirmError.innerHTML = " "
        invalidCofirmPasswordIcon.style.display = 'none';
        validCofirmPasswordIcon.style.display = '';
        return true;
    } else {
        signupConfirmError.innerHTML = "Password must match";
        signupConfirmError.style.color = 'red';
        invalidCofirmPasswordIcon.style.display = '';
        validCofirmPasswordIcon.style.display = 'none';
        return false;
    }
}


function signUpValidations() {

    if (signUpEmail() && signUpUsername() && signUpPhone() && signUpPassword() && signUpConfirmPassword()) {
        window.location = "Home.html"
    }
}
