console.log("try");

// function calculate(operator){

//     var result;
//     switch(operator){
//         case ('add'):
//             var add1 = document.getElementById("add1").value;
//             var add2 = document.getElementById("add2").value;
//             result = parseInt(add1) + parseInt(add2);
//             document.getElementById("addResult").innerHTML = result;
//         break;
//         case('sub'):
//             var sub1 = document.getElementById("sub1").value;
//             var sub2 = document.getElementById("sub2").value;
//             result = parseInt(sub1) - parseInt(sub2);
//             document.getElementById("subResult").innerHTML = result;
//         break;
//         case('div'):
//             var div1 = document.getElementById("div1").value;
//             var div2 = document.getElementById("div2").value;
//             result = parseInt(div1) / parseInt(div2);
//             document.getElementById("divResult").innerHTML = result;
//         break;
//         default:
//             alert("Please put correct operation");
//     }
  
// }


function calculateWithIf(operator){


    if (operator === "add") {
        var add1 = document.getElementById("add1").value;
        var add2 = document.getElementById("add2").value;
        if ((add1.length < 1) || (add2.length < 1)){
            alert("Please enter a number");
            return;
        }
        if(isNaN(add1) && (isNaN(add2))){
            alert("Incorrect input.Please enter a number!");
            return;
        }
        result = parseInt(add1) + parseInt(add2);
        document.getElementById("addResult").innerHTML = result;
           
    } else if (operator === "sub"){
        var sub1 = document.getElementById("sub1").value;
        var sub2 = document.getElementById("sub2").value;
        if ((sub1.length < 1) || (sub2.length < 1)){
            alert("Please enter a number");
            return;
        }
        if(isNaN(sub1) && (isNaN(sub2))){
            alert("Incorrect input.Please enter a number!");
            return;
        }
        result = parseInt(sub1) - parseInt(sub2);
        document.getElementById("subResult").innerHTML = result;
    } else {
        var div1 = document.getElementById("div1").value;
        var div2 = document.getElementById("div2").value;
        if ((div1.length < 1) || (div2.length < 1)){
            alert("Please enter a number");
            return;
        }
        if(isNaN(div1) && (isNaN(div2))){
            alert("Incorrect input.Please enter a number!");
            return;
        }
        result = parseInt(div1) / parseInt(div2);
        document.getElementById("divResult").innerHTML = result;
    }
  
  
}
