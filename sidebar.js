var open = false;

waitForEl("#mySidebar", function(){
  $("#mySidebar > a").on("click", function(){
    closeNav();
    console.log("test");
  });
});

function waitForEl(selector, callback) {
  if ($(selector).length) {
    callback();
  } else {
    setTimeout(function() {
      waitForEl(selector, callback);
    }, 100);
  }
};

function toggleNav(){
  if (open){
    closeNav();
  } else {
    openNav();
  }
}

function closeNav(){
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("myOpenBtn").style.left = "0";
  document.getElementById("myOpenBtn").innerHTML = "☰";
  document.getElementsByTagName("main")[0].style.opacity = "1.0";
  open = false;
}

function openNav(){
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("myOpenBtn").style.left = "250px";
  document.getElementById("myOpenBtn").innerHTML = "×";
  document.getElementsByTagName("main")[0].style.opacity = "0.25";
  open = true;
}
