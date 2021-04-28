window.addEventListener("load", function(){
    var header = document.querySelector("#header");
    var menuBtn = header.querySelector(".icon-menu");

    menuBtn.onclick = function(e){
        e.preventDefault();
        
        slideIn("#aside");
    
    }
});