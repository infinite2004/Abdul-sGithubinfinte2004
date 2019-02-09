//create paragraph
var paragraph  = document.createElement("p");
paragraph.innerHTML = "I am 14 years old and want to become a sofware engineer"
var videoBanner =document.getElementById("videoBanner");
videoBanner.appendChild(paragraph);

//adding new header
var newHeader = document.createElement("h2");
newHeader.innerHTML = "Ladies and Gentlemen";
videoBanner.insertBefore(newHeader,paragraph);



videoBanner.addEventListener("click",myEventHandler);
function myEventHandler(){
alert("hell0 w0rld");

}


