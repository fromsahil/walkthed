//function btntest_onclick() 
//{
//    window.location.href = "map.html";
//    console.log("do something");
//}
function myFunction() {
    window.open("map.html");
    console.log("do something");
   
}




function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}
function showPosition(position) {
    document.getElementById("startingLocation").value = "test + " + position.coords.latitude;
}




var getLoc = document.getElementById("currentLocation");
getLoc.addEventListener("click", getLocation, false);