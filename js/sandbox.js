const d= new Date ();
let hour=d.getHours();

if(hour<12){
    console.log("morning");
}
else if  (hour<17){
    console.log("afternoon");
}
else {
    console.log("night");
}