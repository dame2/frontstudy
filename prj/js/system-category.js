var deleteBtn = document.querySelector(".delete-btn");
var inactiveBtn = document.querySelector(".inactive-btn");
var modifyBtn = document.querySelector(".modify-btn");
var addBtn = document.querySelector(".add-btn");

var chechbox = document.querySelector("checkbox");
var yes = document.querySelector(".popup-btn");
var no = document.querySelector(".popup-cancel-btn");
var upper = document.querySelector(".upper");
var lower = document.querySelectorAll(".lower");
var radio = document.querySelectorAll("radio");

function upperSelect(){
    lower.classList.remove(".lower");
}
function toggleDelete(){
    console.log("delete");
    //정말 삭제하겠냐는 toggle이 뜬다
}

function add(){
    console.log("add");
    // input type=text인 동그라미가 생긴다
}

function modify(){
    console.log("modify");
    //선택한 동그라미가 input type=text로 바뀐다 
}

function inactive(){
    console.log("inactive");
    //선택한 동그라미가 비활성화하면 회색으로 바뀐다
}

function noResult(){
    //동그라미가 없다면, 검색 결과가 없다는 문구가 뜬다
}

function Result(){
    //검색 결과에 맞는 결과를 내온다
}

function option(){
    //상태분류에 맞는 결과를 내온다
}

deleteBtn.addEventListener("click", toggleDelete);
inactiveBtn.addEventListener("click", inactive);
modifyBtn.addEventListener("click", modify);
addBtn.addEventListener("click", add);
radio.addEventListener("click", upperSelect);