"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var alertContainer = document.createElement('div');
alertContainer.id = 'alertContainer';
alertContainer.style.position = 'fixed';
alertContainer.style.top = '10px';
alertContainer.style.right = '10px';
alertContainer.style.textAlign = 'right';
alertContainer.style.zIndex = '10';
var alert = document.createElement('div');
alert.className = 'alert';
alert.style.padding = '5px 0';
alert.style.opacity = '0.9';
alert.style.marginTop = '5px';
var alertText = document.createElement('span');
alertText.style.color = '#3F763F';
alertText.style.backgroundColor = '#DFF0D9';
alertText.style.border = '1px solid #d0e9c6';
alertText.style.borderRadius = '.25rem';
alertText.style.fontSize = '18px';
alertText.style.fontWeight = 'bold';
alertText.style.padding = '0.3rem 0.9rem';
alertText.style.marginTop = '10px';
alertText.style.position = 'relative';
var closebutton = document.createElement('span');
closebutton.style.position = 'absolute';
closebutton.style.top = '0';
closebutton.style.right = '0';
closebutton.style.color = '#B7474C';
var closeIcon = document.createElement('i');
closeIcon.setAttribute('class', 'fa fa-times');
closeIcon.addEventListener('click', function () {
    console.log('click');
});
closebutton.appendChild(closeIcon);
alert.appendChild(alertText);
var body = document.getElementsByName('body');
function successAlert(message, lastInSeconds) {
    alertFunction(message, 'success', lastInSeconds);
}
function alertFunction(message, mode, lastInSeconds) {
    var newAlert = alert.cloneNode();
    var newAlertText = alertText.cloneNode();
    switch (mode) {
        case 'error':
            newAlertText.style.backgroundColor = '#F1DEDE';
            newAlertText.style.color = '#a94442';
            newAlertText.style.borderColor = '#ebcccc';
            break;
    }
    newAlertText.textContent = message;
    newAlert.appendChild(newAlertText);
    alertContainer.appendChild(newAlert);
    if (!lastInSeconds)
        appendCloseButton(newAlertText);
    document.body.appendChild(alertContainer);
    if (lastInSeconds)
        removeNode(newAlert, lastInSeconds);
}
function errorAlert(message, lastInSeconds) {
    alertFunction(message, 'error', lastInSeconds);
}
function removeNode(alert, seconds) {
    setTimeout(function () {
        alertContainer.removeChild(alert);
        if (alertContainer.children.length == 0)
            document.body.removeChild(alertContainer);
    }, seconds * 1000);
}
function appendCloseButton(alertText) {
    var newClosebutton = closebutton.cloneNode(true);
    var clickEvent = function (e) {
        if (!e.srcElement) {
            return;
        }
        var closestAlert = e.srcElement.closest('.alert');
        if (!closestAlert) {
            return;
        }
        alertContainer.removeChild(closestAlert);
        newClosebutton.removeEventListener('click', clickEvent);
        if (alertContainer.children.length == 0)
            document.body.removeChild(alertContainer);
    };
    newClosebutton.addEventListener('click', clickEvent);
    alertText.appendChild(newClosebutton);
}
exports.genericErrorMessage = "There is an internal server error. Please contact the site administrator.";
exports.alertic = {
    success: successAlert,
    error: errorAlert
};
