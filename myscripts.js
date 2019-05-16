

function calculateAge() {
  var birthday = new Date();
  birthday.setFullYear(2000, 9, 12);
  var ageDifMs = Date.now() - birthday.getTime();
  var ageDate = new Date(ageDifMs);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

function makeParagraph() {
  var mainText = document.getElementById("demo").innerHTML;
  mainText = mainText.replace("?", calculateAge());
  return mainText;
}

document.getElementById("demo").innerHTML = makeParagraph();
