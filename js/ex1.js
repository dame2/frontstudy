// --ex4---
window.onload = addEventListener("load", function(){
    var section = window.document.querySelector("#ex4");
    var container = section.querySelector(".container");
    var boxes = section.querySelectorAll(".box");
    var button = section.querySelector("input[value='click']");

    button.onclick = function(){
        var box = boxes[0];
        
        let boxStyle = window.getComputedStyle(box);
        var left = boxStyle.getPropertyValue("left");
        
        console.log(left);
    }
});

// --ex3---
window.onload = addEventListener("load", function(){
    var section = window.document.querySelector("#ex3");
    var span = section.querySelector(".span");
    var button = section.querySelector(".btn");

    button.onclick = function(){
        
        window.setInterval(function(){
            var count = parseInt(span.innerText);
            count--;
            span.innerText = count;
        }, 500 )
    }
});

// --ex2---
window.onload = addEventListener("load", function(){
    var section = window.document.getElementById("ex2");
    var x = section.getElementsByClassName("x-input")[0];
    var y = section.getElementsByClassName("y-input")[0];
    var result = document.getElementById("result");
    
    var submitButton= section.getElementsByClassName("submit-button")[0];
    
    
    submitButton.onclick = function(){
        var add = parseInt(x.value)+parseInt(y.value);
        result.innerText=add;
    }
});

// --ex1---
window.onload = addEventListener("load", function(){
    
    var section= window.document.getElementById("ex1");
    
    var submitButtons= section.getElementsByClassName("submit-button");
    var submitButton = submitButtons[0];

    submitButton.onclick = function(){
        console.log("test");
    }
});