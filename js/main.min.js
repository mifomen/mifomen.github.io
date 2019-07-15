var arr = document.getElementsByTagName('div')
var N=1

var links = document.getElementsByTagName('a');
for (var i = 0; i < links.length; i++) {
  links[i].addEventListener('click',function (evt) {
    evt.preventDefault();
    arr[N-1].classList.remove('showing')
     arr[N].classList.add('showing')
  N++
  console.log(CombatIndex + ' ' + MagicIndex + ' ' + StealthIndex)
  document.querySelector('.combat').textContent = CombatIndex;
  document.querySelector('.magic').textContent = MagicIndex;
  document.querySelector('.stealth').textContent = StealthIndex;
})
};
console.log('work')

CombatIndex=0;
 var Combat = function () {
CombatIndex++
 }
 var MagicIndex=0
  var Magic = function () {
  MagicIndex++
 }
var StealthIndex=0
  var Stealth = function () {
  StealthIndex++
 }

// document.querySelector('.combat').textContent = CombatIndex;
// document.querySelector('.magic').textContent = MagicIndex;
// document.querySelector('.stealth').textContent = StealthIndex;
// console.log(CombatIndex + ' ' + MagicIndex + ' ' + StealthIndex)
