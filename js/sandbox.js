const d= new Date ();
let hour=d.getHours();

console.log(hour);

if(hour<12){
    console.log("morning");
    document.getElementById("greetings").innerText = "Goodmorning";
    document.getElementById("picture").src = "img/sun.png";
}

else if  (hour<17){
    console.log("afternoon");
    document.getElementById("greetings").innerText = "GoodAfternoon";
    document.getElementById("picture").src = "img/cloud.png";
}

else {
    console.log("night");
    document.getElementById("greetings").innerText = "Goodnight";
    document.getElementById("picture").src = "img/night.png";
}

// console.log(greetingElement);