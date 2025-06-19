var inputUserName = document.querySelector('#username');
var inputPassword = document.querySelector('#password');
var inputConfirmPass = document.querySelector('#confirm');
var headForm = document.querySelector('#head-form');
var submitButton = document.querySelector('#submitButton');



function createElementNotification(message, color){
    const noti = document.createElement('p');
    noti.className = 'form-error-message';
    noti.textContent = message;
    noti.style.color = color;
    return noti;
}
function removeAllNotifications() {
    const notifications = document.querySelectorAll('.form-error-message');
    notifications.forEach(noti => noti.remove());
}

function showNotificationAfterElement(element,message,color){
    
    element.insertAdjacentElement("afterend",createElementNotification(message,color));
}
function isNullOrEmpty(value) {
    return value === null || value === '';
  }

function isMatchPassword (){
    return inputPassword.value === inputConfirmPass.value;
}


function isValidUserName(){
    return !isNullOrEmpty(inputUserName.value);
}

function showAllNoti(){
    removeAllNotifications();
    if(isMatchPassword() && !isNullOrEmpty(inputPassword.value)  && isValidUserName()){
        showNotificationAfterElement(headForm,'You have registered successfully','green');
    }
    
    else{
        if(isNullOrEmpty(inputUserName.value)){
            showNotificationAfterElement(inputUserName,'Username is required','red');
        }
        if(isNullOrEmpty(inputPassword.value)){
            showNotificationAfterElement(inputPassword,'Password is required','red');
        }
        if(isNullOrEmpty(inputConfirmPass.value)){
            showNotificationAfterElement(inputConfirmPass,'Confirm password is required','red');
        }else{
            if(!isMatchPassword()){
                showNotificationAfterElement(inputConfirmPass,'Password and confirm password do not match','red');
            }
        }
        
    }
}

//add event
submitButton.addEventListener('click',function (){
    showAllNoti();
})

document.querySelector("#registerForm").addEventListener('submit',function(event){
    event.preventDefault();
})
