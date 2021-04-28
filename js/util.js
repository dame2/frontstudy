  function slideIn(selector){
    // 1. div 태그를 생성해서 전체를 가리는 스크린
    var screen = document.createElement("div");
    var aside = document.querySelector("aside");

    screen.style.width= "100%";
    screen.style.height = "100%";
    screen.style.position= "fixed";
    screen.style.top="0";
    screen.style.backgroundColor = "black";
    screen.style.opacity = 0;
    screen.style.transition = ".5s";
    setTimeout(function(){
        screen.style.opacity = 0.7;
    }, 10);

    document.body.append(screen);
    
    screen.ontransitionend = function(e){
        aside.style.position = "fixed";
        aside.style.height = "100%";
        aside.style.width = "70%";
        aside.style.left = "100%";
        aside.style.top = "0px";
        aside.style.zIndex = 10;

        aside.style.transition = ".5s";
        
        setTimeout(function(){
            aside.style.left = "30%";
        }, 0);
    }
    
    // 닫기
    // 역방향으로 슬라이드 되도록 애니메이션 설정
    screen.onclick = function(){
        aside.style.left = "100%";
        screen.remove();
        // aside.style = "";
    }
};