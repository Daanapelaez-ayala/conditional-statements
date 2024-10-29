const d= new Date ();
let hour=d.getHours();

console.log(hour);



if(hour<12){
    console.log("morning");
    document.getElementById("picture").src = "img/sun.png";
    document.getElementById("greetings").innerText = "Good morning";
}

else if  (hour<17){
    console.log("afternoon");
    document.getElementById("picture").src = "img/sunsets.png";
    document.getElementById("greetings").innerText = "Good Afternoon";
}

else {
    console.log("night");
    document.getElementById("greetings").innerText = "Good night";
    document.getElementById("picture").src = "img/night.png";
}

// console.log(greetingElement);