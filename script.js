const firebaseConfig = {
    apiKey: "AIzaSyD66jp4insP7jTC-txmiu5X4W3IflXrQ5M",
    authDomain: "hotelbookingform.firebaseapp.com",
    databaseURL: "https://hotelbookingform-default-rtdb.firebaseio.com",
    projectId: "hotelbookingform",
    storageBucket: "hotelbookingform.appspot.com",
    messagingSenderId: "845586226935",
    appId: "1:845586226935:web:20cd87305bd5ad92c0fdf2"
  };
  
  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var contactFormDB = firebase.database().ref("contactForm");
  
  document.getElementById("contactForm").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal("name");
    var email = getElementVal("email");
    var number = getElementVal("number");
    var subject = getElementVal("subject");
    var message = getElementVal("message");
  
    // saveMessages(name, emailid, msgContent);
    saveMessages(name, email, number, subject, message);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("contactForm").reset();
  }
  
  const saveMessages = (name, email, number, subject, message) => {
//   const saveMessages = (name) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      name: name,
      email: email,
      number: number,
      subject: subject,
      message: message,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };
  