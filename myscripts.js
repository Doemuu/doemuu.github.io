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

function onContactButtonClicked() {
  var b = false; //boolean to check all inputs
  var lastNamebool = false;
  var firstNameBool = false;
  var messageBool = false;
  var lastName = document.getElementById("lastNameText").value;
  var firstName = document.getElementById("firstNameText").value;
  var message = document.getElementById("messageText").value;
  if (lastName == "") {
    lastName = "wack";
    //lastName is null
  } else {
    lastNamebool = true;
  }
  if (firstName == "") {
    //firstName is null
    firstName = "wack";
  } else {
    firstNameBool = true;
  }
  if (message == "") {
    //message is null
    message = "wack";
  } else {
    messageBool = true;
  }
  if (lastNamebool) {
    //when lastName is correct
    if (firstNameBool) {
      //when firstName is correct
      if (messageBool) {
        //when message is correct
        b = true;
      } else {
        //when message is wack
        document.getElementById("messageText").value = "";
      }
    } else {
      //when firstName is wack
      document.getElementById("firstNameText").value = "";
    }
  } else {
    //when lastname is wack
    document.getElementById("lastNameText").value = "";
  }

  if (b) {
    Email.send({
      SecureToken: "744700c4-a70f-4911-8076-3ccd29a6a0c1",
      To: 'dominik.berger17@outlook.com',
      From: "doemu@outlook.com",
      Subject: firstName + " " + lastName + " will dich kontaktieren",
      Body: message
    }).then(
      message => alert(message)
    );
  }

  document.getElementById("lastNameText").value = "";
  document.getElementById("firstNameText").value = "";
  document.getElementById("messageText").value = "";
}

//build
document.getElementById("demo").innerHTML = makeParagraph();
