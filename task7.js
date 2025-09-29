function farecalc(){
let distance = Number(prompt("Enter distance in km:"));
let transport = prompt("Enter transport type (Bus/Train/Taxi):");
let farePerKm;

switch (transport.toLowerCase()) {
    case "bus":
        farePerKm = 2;
        break;
    case "train":
        farePerKm = 5;
        break;
    case "taxi":
        farePerKm = 10;
        break;
    default:
        alert("Invalid transport type!");
        farePerKm = 0;
}

if (farePerKm > 0) {
    let totalFare = distance * farePerKm;
    alert("Total Fare: " + totalFare);
}
}
farecalc()
