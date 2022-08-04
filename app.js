// https://calculator.swiftutors.com/acceleration-due-to-gravity-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const accelerationduetoGravityRadio = document.getElementById('accelerationduetoGravityRadio');
const massoftheBodyRadio = document.getElementById('massoftheBodyRadio');
const radiusbetweentwoBodiesRadio = document.getElementById('radiusbetweentwoBodiesRadio');

let accelerationduetoGravity;
const G = 6.67e-11;
let massoftheBody = v1;
let radiusbetweentwoBodies = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

accelerationduetoGravityRadio.addEventListener('click', function() {
  variable1.textContent = '(M) Mass of the Body (kg)';
  variable2.textContent = '(r) Radius between two Bodies (m)';
  massoftheBody = v1;
  radiusbetweentwoBodies = v2;
  result.textContent = '';
});

massoftheBodyRadio.addEventListener('click', function() {
  variable1.textContent = '(g) Acceleration due to Gravity (m/s²)';
  variable2.textContent = '(r) Radius between two Bodies (m)';
  accelerationduetoGravity = v1;
  radiusbetweentwoBodies = v2;
  result.textContent = '';
});

radiusbetweentwoBodiesRadio.addEventListener('click', function() {
  variable1.textContent = '(g) Acceleration due to Gravity (m/s²)';
  variable2.textContent = '(M) Mass of the Body (kg)';
  accelerationduetoGravity = v1;
  massoftheBody = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(accelerationduetoGravityRadio.checked)
    result.textContent = `Acceleration due to Gravity = ${computeAccelerationduetoGravity()} m/s²`;

  else if(massoftheBodyRadio.checked)
    result.textContent = `Mass of the Body = ${computeMassoftheBody().toFixed(2)} kg`;

  else if(radiusbetweentwoBodiesRadio.checked)
    result.textContent = `Radius between two Bodies = ${computeRadiusbetweentwoBodies().toFixed(2)} m`;
})

// calculation

function computeAccelerationduetoGravity() {
  return (G * Number(massoftheBody.value)) / Math.pow(Number(radiusbetweentwoBodies.value), 2);
}

function computeMassoftheBody() {
  return (Number(accelerationduetoGravity.value) * Math.pow(Number(radiusbetweentwoBodies.value), 2)) / G;
}

function computeRadiusbetweentwoBodies() {
  return Math.sqrt((G * Number(massoftheBody.value)) / Number(accelerationduetoGravity.value));
}