window.onload = function(){
    var section = window.document.getElementById("ex2");
    var x = section.getElementsByClassName("x-input")[0];
    var y = section.getElementsByClassName("y-input")[0];
    var result = document.getElementById("result");
    
    var submitButton= section.getElementsByClassName("submit-button")[0];
    
    
    submitButton.onclick = function(){
        var add = parseInt(x.value)+parseInt(y.value);
        result.innerText=add;
    }
}

// window.onload= function(){
    
//     var section= window.document.getElementById("ex1");
    
//     var submitButtons= section.getElementsByClassName("submit-button");
//     var submitButton = submitButtons[0];

//     submitButton.onclick = function(){
//         console.log("test");
//     }
// }