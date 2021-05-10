// --ex10--
window.onload = addEventListener("load", function(){
    var section = document.querySelector("#ex10");
    
    var requestBtn = section.querySelector(".btn-request");
    requestBtn.onclick = function(e){
        var request = new XMLHttpRequest();
        request.open("GET", "http://localhost:8080/api/notice/list", false);
        request.send(null);

        console.log(request.responseText);
    }
});

// --ex9--
window.onload = addEventListener("load", function(){
    var section = window.document.querySelector("#ex9");
    
    var uploadBox = section.querySelector(".upload-box")
    var selButton = section.querySelector(".btn-sel");
    var fileButton = section.querySelector(".btn-file")
    
    uploadBox.ondragenter = function(e){
        console.log("enter")
    }

    uploadBox.ondragover = function(e){
        e.preventDefault();
        
        var valid = e.dataTransfer.types.indexOf("Files") >=0;
        console.log(valid);

        if(!valid)
            uploadBox.style.backgroundColor = "red";
        else
            uploadBox.style.backgroundColor = "green";
       
    }

    uploadBox.ondragleave = function(e){
        uploadBox.style.backgroundColor = "initial";
    }

    uploadBox.ondrop = function(e){
        uploadBox.style.backgroundColor = "white";
        e.preventDefault();

        console.log(e.dataTransfer.files[0].text);
    }
    
    fileButton.oninput = function(e){
        for(var k in fileButton.files[0])
         console.log(k);

        console.log(fileButton.files[0]);
    };

    selButton.onclick = function(e){
        var event = new MouseEvent("click",{
            'view': window,
            'bubbles': true,
            'cancelable': true
        });

        fileButton.dispatchEvent(event);
    }
});

// --ex8--
window.onload = addEventListener("load", function(){
    var section = window.document.querySelector("#ex8");

    var product = section.querySelector(".product");

    var up = section.querySelector(".up");
    var down = section.querySelector(".down");
    var current = section.querySelector(".current");

    product.onclick = function(e){
        var target = e.target;
        if(!target.classList.contains("up")&&
          !target.classList.contains("down")&&
          !target.classList.contains("current"))
            return;

        if(target.classList.contains("up")){
            var input = target.parentElement.querySelector("input");
            input.value = parseInt(input.value)+1;
        }
        else if(target.classList.contains("down")){
            var input = target.parentElement.querySelector("input");
            input.value = parseInt(input.value)-1;
        }
        else if(target.classList.contains("current")){
            target.parentElement.classList.toggle("dotted");
        }
    }
});

// --ex7--
window.onload = addEventListener("load", function(){
    var section = window.document.querySelector("#ex7");

    var accordion = section.querySelector(".accordion");
    
    accordion.onclick = function(e){
        // 1. .title이 아니면 return
        // if(!e.target.classList.contains("title"))
        //     return;

        // 2. target의 동생의 d-none을 빼다
        e.target.nextElementSibling.classList.toggle("d-none");
    }
});


// --ex6---
window.onload = addEventListener("load", function(){
    var section = window.document.querySelector("#ex6");

    var container = section.querySelector(".container");
    var del = section.querySelector(".btn-del");
    var clone = section.querySelector(".btn-clone");
    var change = section.querySelector(".btn-change");

    var selected = null;

    container.onclick = function(e){
        //박스 선택했을 때만 반응해라
        if(!e.target.classList.contains("box"))
            return;

        //이전 상태를 지우기 위한 조건문
        if(selected != null && selected != e.target)
            selected.classList.remove("selected");

        //선택된 놈을 select에 담아라
        selected = e.target;
        
        //알아서 넣다 뺐다 하렴
        selected.classList.toggle("selected");

            
        

        // selected.onclick = function(twice){
        //     twice.classList.remove("selected");
        // }
    }

    // var boxes = container.querySelectorAll(".box");
    // for(let i=0; i<boxes.length; i++){
    //         boxes[i].onclick = function(){
    //         selected = boxes[i];
    //         console.log(selected);
    //     }
    // }
    
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