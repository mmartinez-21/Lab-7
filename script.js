function init(){
//add your javascrip between these two lines of code


var button1 = document.getElementById('entrybutton');
var input1 = document.getElementById('entryinput');
var results = document.getElementById('textoutput');
var name = document.getElementsByClassName('center')[1];

function alertMeClicked(){
  alert(name.textContent + ": " + input1.value);
  results.innerHTML = input1.value;
  
}

button1.addEventListener('click', alertMeClicked);


}
window.addEventListener('load', init);

