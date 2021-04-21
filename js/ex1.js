// --ex6---
window.onload = addEventListener("load", function(){
    var section = window.document.querySelector("#ex6");

    var container = section.querySelector(".container");
    var del = section.querySelector(".btn-del");
    var clone = section.querySelector(".btn-clone");
    var change = section.querySelector(".btn-change");

    var selected = null;

    // div들을 얻어온다
    var boxes = container.querySelectorAll(".box");
    // 0번째가 클릭되면 selected에 대입한다
    for(let i=0; i<boxes.length; i++){
            boxes[i].onclick = function(){
            selected = boxes[i];
            console.log(selected);
        }
    }
    
    del.onclick = function(){
        if(selected != null)
        // selected된 엘리먼트 객체를 삭제하시오.
            selected.remove();
    }
});

// --ex5---
window.onload = addEventListener("load", function(){
    var section = window.document.querySelector("#ex5");

    var container = section.querySelector(".container");
    var add = section.querySelector(".btn-add");
    var del = section.querySelector(".btn-del");
    var clone = section.querySelector(".btn-clone");
    var change = section.querySelector(".btn-change");

    var idInput = section.querySelector(".id-input");
    var colorInput = section.querySelector(".color-input");

    add.onclick = function(){
        //1. 엘리먼트 객체를 생성하기
        // var txt = section.querySelector(".id-input");
        var div = document.createElement("div");
        //1. 엘리먼트 객체의 속성 설정하기
        div.style.backgroundColor = colorInput.value;
        div.style.width="100px";
        div.style.height="100px";
        div.style.borderRadius= "50px";
        div.style.textAlign="center";
        div.style.color = "#fff";
        div.style.lineHeight = "100px";

        //3. 엘리먼트 객체를 문서에 추가하기
        
        div.append(idInput.value);
        container.append(div);

        // container.innerHTML += '<div style="width:100px;height:100px;border-radius:50px;background-color:blue;">1</div>'
    };
    
    del.onclick = function(){
        var div = container.querySelector("div:first-child");
        div.remove();
        // container.removeChild(div);
    };
    
    clone.onclick = function(){
        var div = container.querySelector("div:first-child");

        var clone = div.cloneNode(true);
        container.append(clone);
    };

    change.onclick = function(){
        var e1 = container.querySelector("div:first-child"); //first
        var e2 = container.querySelector("div:nth-child(2)"); //second
        
        //  Detach
        // Detach해서 newNode인 e1을 제거한, 빠져 있는 놈이라고 쳐서 newNode이다

        //  Replace
        // var oldNode = parentNode.replaceChild(new, old)
        // new 자리에 old를 넣고 new를 반환한다
        var old = container.replaceChild(e1,e2);
        
        //  insertBefore
        // container.insertBefore(new, ref)
        // new를 e1 앞에 삽입한다
        // container.insertBefore(old, e1); //old
        e1.insertAdjacentElement('beforebegin', old);
    }
});

// --ex4---
window.onload = addEventListener("load", function(){
    var section = window.document.querySelector("#ex4");
    var container = section.querySelector(".container");
    var boxes = section.querySelectorAll(".box");
    var button = section.querySelector("input[value='click']");

    button.onclick = function(){
        var box = boxes[0];
        
        let boxStyle = window.getComputedStyle(box);
        var left = parseInt(boxStyle.getPropertyValue("left"));

        var tid = window.setInterval(function(){
            if(left>=400)
                clearInterval(tid);

        left++;
        box.style.left = left+"px";
        

        }, 17);
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