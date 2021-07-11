// base for loop
for (var i = 0; i < 10; i++) {
    console.log(i);
  }

// restyling one dom element
document.getElementsByTagName("h1")[0].style.color = "#ff0000";

// adding gif in page at click
document.body.addEventListener('click', function () {
    var myParent = document.getElementsByTagName("h1")[0]; 
    var myImage = document.createElement("img");
    myImage.src = 'https://thecatapi.com/api/images/get?format=src&type=gif';
    myParent.appendChild(myImage);
    myImage.style.marginLeft = "160px";
});

// Falsy

if ("") {
  console.log("the value is truthy");
} else {
    console.log("the value is falsy");
}

// Truthy
if (1) {
  console.log("the value is truthy");
} else {
  console.log("the value is falsy");
}