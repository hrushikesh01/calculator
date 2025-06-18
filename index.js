// your code goes here
let display = document.getElementById('display');

function appendValue(val) {
  if (display.innerText === '0') {
    display.innerText = val;
  } else {
    display.innerText += val;
  }
}

function clearDisplay() {
  display.innerText = '0';
}

function deleteLast() {
  if (display.innerText.length === 1) {
    display.innerText = '0';
  } else {
    display.innerText = display.innerText.slice(0, -1);
  }
}

function calculateResult() {
  try {
    display.innerText = eval(display.innerText.replace(/÷/g, '/').replace(/×/g, '*'));
  } catch {
    display.innerText = 'Error';
  }
}
