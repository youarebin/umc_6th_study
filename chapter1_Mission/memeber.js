//변수 선언
let id = document.querySelector("#name");
let email = document.querySelector("#email")
let age = document.querySelector("#age")
let pw = document.querySelector("#password");
let pwCheck= document.querySelector("#passwordCheck");
let btn = document.querySelector("#btnJoin")
var error = document.querySelectorAll('.error_next_box');

//이벤트 헨들러 연결
id.addEventListener("change", checkID);
email.addEventListener("change",checkEmail);
age.addEventListener("change",checkAge);
pw.addEventListener("change", checkPw);
pwCheck.addEventListener("change", checkPwcheck);

function checkID() {
    if(id.value === "") {
        error[0].innerHTML = "필수 정보입니다.";
        error[0].style.color = "red";
        error[0].style.display = "block";
    }
    else {
        error[0].innerHTML = "멋진 이름이네요!";
        error[0].style.color = "#08A600";
        error[0].style.display = "block";
    }
}

function checkEmail() {//안됨
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
    if(email.value === ""){//ok
        error[1].innerHTML = "올바른 이메일 형식이 아닙니다.";
        error[1].style.color = "red";
        error[1].style.display = "block"
    }
    else if(!emailPattern.test(email.value)){
        error[1].innerHTML = "올바른 이메일 형식이 아닙니다.";
        error[1].style.color = "red";
        error[1].style.display = "block"
    }
    else{
        error[1].innerHTML = "올바른 이메일 형식입니다.";
        error[1].style.color = "#08A600";
        error[1].style.display = "block"; 
    }
}

function checkAge() {
    if(age.value === "" ) {
        error[2].innerHTML = "나이를 입력해주세요."
        error[2].style.color = "red";
        error[2].style.display = "block"
    }
    else if(age.value < 0){
        error[2].innerHTML = "나이는 음수가 될 수 없습니다."
        error[2].style.color = "red";
        error[2].style.display = "block"
    }
    else if(isNaN(age.value)){//문자열이면
        error[2].innerHTML = "나이는 숫자형식이어야 합니다."
        error[2].style.color = "red";
        error[2].style.display = "block"
    }
    else if(age.value%1){
        error[2].innerHTML = "나이는 소수가 될 수 없습니다."
        error[2].style.color = "red";
        error[2].style.display = "block"
    }
    else if(age.value < 20){
        error[2].innerHTML = "미성년자는 가입할 수 없습니다."
        error[2].style.color = "red";
        error[2].style.display = "block"
    }
    else{
        error[2].innerHTML = "올바른 나이 형식입니다."
        error[2].style.color = "#08A600";
        error[2].style.display = "block"
    }
}

function checkPw() {//길이에따른 메시지 출력 이상
    var pwPattern = /[a-zA-Z0-9~!@#$%^&*()_+|<>?:{}]{4,12}/;

    if(pw.value === "") {
        error[3].innerHTML = "비밀번호는 최소 4자리 이상이어야 합니다.";
        error[3].style.color = "red";
        error[3].style.display = "block";
    } else if(!pwPattern.test(pw.value)) {
        error[3].innerHTML = "비밀번호는 최대 12자리까지 가능합니다.";
        error[3].style.color = "red";
        error[3].style.display = "block";
    } else {
        error[3].innerHTML = "올바른 비밀번호 입니다.";
        error[3].style.color = "#08A600";
        error[3].style.display = "block";
    }
}

function checkPwcheck() {
    if(pw.value !== pwCheck.value){
        error[4].innerHTML = "비밀번호가 일치하지 않습니다.";
        error[4].style.color = "red";
        error[4].style.display = "block";
    }
    else{
        error[4].innerHTML = "비밀번호가 일치합니다.";
        error[4].style.color = "#08A600";
        error[4].style.display = "block";
    }
}

//버튼 클릭 이벤트
btn.addEventListener("click", function () {
    alert("umc가입을 축하합니다")
  });