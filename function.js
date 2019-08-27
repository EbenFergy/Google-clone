
// function checkDriverAge(){
//     var age = prompt("How old are you?");

//     if (Number(age) < 18) {
//         alert("Sorry, you are too yound to drive this car. Powering off");
//     } 
//     else if (Number(age) > 18) {
//         alert("Powering On. Enjoy the ride!");
//     } 
//     else if (Number(age) === 18) {
//         alert("Congratulations on your first year of driving. Enjoy the ride!");
//     }
// }

var checkDriverAge = function(age){
    // var age = prompt("How old are you?");

        if (age < 18) {
            return "Sorry, you are too yound to drive this car. Powering off";
        } 
        else if (Number(age) > 18) {
            alert("Powering On. Enjoy the ride!");
        } 
        else if (Number(age) === 18) {
            alert("Congratulations on your first year of driving. Enjoy the ride!");
        }
}

// checkDriverAge();

