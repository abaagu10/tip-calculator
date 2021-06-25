const billAmount=document.getElementById("bill")
const peopleSharing=document.getElementById("people")
const displayResult=document.getElementById("display")
const select=document.getElementById("choose")


//calculate amount to be shared by each person

document.getElementById("calculate").addEventListener("click", function solve() {
        displayResult.value="$" + billAmount.value / peopleSharing.value;

})

document.getElementById("submit").addEventListener("click", function displayConsole() {
    if (select=="Bad") {
        console.log("Bad");
    } else if (select=="Good") {
        console.log("Good");
    }else if (select=="Very"+"Good") {
        console.log("Very Good");
    }else{
        console.log("Excellent");
    }
    
})
