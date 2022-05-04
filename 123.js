function validateform(){  
  var name=document.myform.name.value;  
  var password=document.myform.password.value; 
  var name1=document.myform.name1.value;  
  var name2=document.myform.name2.value;  
    
  if (name==null || name==""){  
    alert("Firstname can't be blank/Firstname can't be numbers"); 
     return false;  
  }
  if (name1==null || name1==""){  
    alert("Lastname can't be blank/Lastname can't be numbers");   
    return false;  
  }
  if (name2==null || name2==""){  
    alert("Date can't be blank");  
    return false;  
  }
  if(password.length<6){  
    alert("contact information must be at least 11 characters long.");  
    return false;  
    }else if(isNaN(password) || isNaN("")){
    alert("Please enter number");
    return false;
    } 
  }

  var slideIndex = 1;
  showDivs(slideIndex);
  
  function plusDivs(n) {
    showDivs(slideIndex += n);
  }
  
  function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    x[slideIndex-1].style.display = "block";  
  }
  text= prompt("please enter student or parents ")
if (text === "student") {
 window.location.href = "http://127.0.0.1:5500/course.html";
}
else if (text === "parent") {
 window.location.href = "http://127.0.0.1:5500/home.html";
}