function onContactButtonClicked() {
  var b = false; //boolean to check all inputs
  var lastNamebool = false;
  var firstNameBool = false;
  var messageBool = false;
  var emailBool = false;
  var lastName = document.getElementById("lastNameText").value;
  var firstName = document.getElementById("firstNameText").value;
  var message = document.getElementById("messageText").value;
  var email = document.getElementById("emailText").value;
  var urgency = document.getElementById("importance").value;
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
  if (email == "") {
    //email is null
    email = "wack";
  } else {
    emailBool = true;
  }
  if (lastNamebool) {
    //when lastName is correct
    if (firstNameBool) {
      //when firstName is correct
      if (messageBool) {
        //when message is correct
        if (emailBool) {
          b = true;
          document.getElementById("demo").value = email;
        } else {
          document.getElementById("emailText").value = "";
        }
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

  var bodymessage = urgency + "<br>" + message + "<br>" + "Bitte auf " + email + " antworten!";


  if (b) {
    Email.send({
      SecureToken: "744700c4-a70f-4911-8076-3ccd29a6a0c1",
      To: 'dominik.berger17@outlook.com',
      From: "doemu@outlook.com",
      Subject: firstName + " " + lastName + " will dich kontaktieren",
      Body: bodymessage.replace("\n", "<br>")
    }).then(
      message => alert("Ihre Anfrage wird bearbeitet " + firstName)
    );
  }

  document.getElementById("lastNameText").value = "";
  document.getElementById("firstNameText").value = "";
  document.getElementById("messageText").value = "";
  document.getElementById("emailText").value = "";
}
