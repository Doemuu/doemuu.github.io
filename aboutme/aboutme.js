//logic
function calculateAge() {
  var birthday = new Date();
  birthday.setFullYear(2000, 9, 12);
  var ageDifMs = Date.now() - birthday.getTime();
  var ageDate = new Date(ageDifMs);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

function makeParagraph() {
  var summer = new Date();
  summer.setFullYear(2018, 9, 12);
  var mainText = document.getElementById("demo").innerHTML;
  mainText = mainText.replace("/age", calculateAge());
  return mainText;
}

//build
document.getElementById("demo").innerHTML = makeParagraph();
