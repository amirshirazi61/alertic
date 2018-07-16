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

var closeIcon = document.createElement('i');
closeIcon.setAttribute('class', 'close');
closeIcon.addEventListener('click', () => {
  console.log('click');
});

enum alertMode {
  success = 'success',
  error = 'error',
  warning = 'warning'
}

closebutton.appendChild(closeIcon);

alert.appendChild(alertText);

document.onreadystatechange = () => {
  if (document.readyState === 'complete') {
    let head = document.head;
    if (!head) {
      head = document.createElement('head');
      document.body.appendChild(head);
    }
    const styleText = document.createElement('style');
    styleText.innerHTML =
      ".alert{ \
        font-family: Arial, Helvetica, sans-serif;\
      }\
      .close:before {\
          cursor:pointer;\
          content: 'x';\
          font-style: normal;\
          font-weight: bold;\
          color: inherit;\
        }\
        .close:hover {\
          opacity: 0.6\
        }";

    head.appendChild(styleText);
  }
};

function successAlert(message: string, lastInSeconds?: number) {
  alertFunction(message, alertMode.success, lastInSeconds);
}

function alertFunction(
  message: string,
  mode: alertMode,
  lastInSeconds?: number
) {
  var newAlert = <HTMLElement>alert.cloneNode();
  var newAlertText = <HTMLElement>alertText.cloneNode();

  switch (mode) {
    case alertMode.error:
      newAlertText.style.backgroundColor = '#F1DEDE';
      newAlertText.style.color = '#a94442';
      newAlertText.style.borderColor = '#ebcccc';
      break;
    case alertMode.warning:
      newAlertText.style.backgroundColor = '#FEF3CF';
      newAlertText.style.color = '#856404';
      newAlertText.style.borderColor = '#ffeeba';
  }

  newAlertText.textContent = message;
  newAlert.appendChild(newAlertText);
  alertContainer.appendChild(newAlert);

  if (!lastInSeconds) appendCloseButton(newAlertText);

  document.body.appendChild(alertContainer);

  if (lastInSeconds) removeNode(newAlert, lastInSeconds);
}

function errorAlert(message: string, lastInSeconds?: number) {
  alertFunction(message, alertMode.error, lastInSeconds);
}

function warningAlert(message: string, lastInSeconds?: number) {
  alertFunction(message, alertMode.warning, lastInSeconds);
}

function removeNode(alert: HTMLElement, seconds: number) {
  setTimeout(function() {
    alertContainer.removeChild(alert);
    if (alertContainer.children.length == 0)
      document.body.removeChild(alertContainer);
  }, seconds * 1000);
}

function appendCloseButton(alertText: HTMLElement) {
  var newClosebutton = closebutton.cloneNode(true);

  let clickEvent: EventListener = function(e: Event) {
    let closestAlert = (e.target as Element).closest('.alert');
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

export const genericErrorMessage = `There is an internal server error. Please contact the site administrator.`;

export var alertic = {
  success: successAlert,
  error: errorAlert,
  warning: warningAlert
};
