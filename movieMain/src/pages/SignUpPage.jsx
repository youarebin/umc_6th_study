import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
justify-content: center;
flex-direction: column;/* 아래로 정렬하기 위해 컬럼으로 변경 */
align-items: center;/* 수직 중앙 정렬 */
padding: 40px;
h3{
    text-align: center;/*왜 color앞에 써야 적용되지? -> color뒤이쓰면 안됨, 색도 없어짐*/
    color: white
}
div {
    display: flex;
    flex-direction: column; /* 아래로 정렬하기 위해 컬럼으로 변경 */
    align-items: center; /* 수직 중앙 정렬 */
}
div > input{
    border-radius: 30px;
    height: 40px;
    width: 30%;
}
div > button{
    border-radius: 30px;
    height: 40px;
    width: 30%;
    color: black;
    font-size: 15px;
    font-weight: 400;
    background-color: ${({isSubmitButtonDisabled}) => (isSubmitButtonDisabled ? "yellow" : "white")}
}
span.error_next_box{
    color: red;
    margin: 9px 0px;
    font-size: 12px;
}
div.elseThing{
    color: white;
    display: inline-block;
}
`;


const SignUpPage = () =>{

     //초기값 세팅
     const[name, setName] = useState("");
     const[eamil, setEmail] = useState("");
     const[age, setAge] = useState("");
     const[password, setPassword] = useState("");
     const[passwordCheck, setPasswordCheck] = useState("");
 
     //오류메시지 상태 저장
     const[nameMessage, setNameMessage] = useState("");
     const[eamilMessage, setEmailMessage] = useState("");
     const[ageMessage, setAgeMessage] = useState("");
     const[passwordMessage, setPasswordMessage] = useState("");
     const[passwordCheckMessage, setPasswordCheckMessage] = useState("");
 
     //유효성 검사
     const[isName, setIsName] = useState(false);
     const[isEamil, setIsEmail] = useState(false);
     const[isAge, setIsAge] = useState(false);
     const[isPassword, setIsPassword] = useState(false);
     const[isPasswordCheck, setIsPasswordCheck] = useState(false);

     const onChangeName = (e) =>{
        const currentName = e.target.value;
        setName(currentName);

        if(currentName === ""){
            setNameMessage("이름을 입력해주세요!")
            setIsName(false)
        } else{
            setNameMessage("")
            setIsName(true)
        }
            
     }

     const onChangeEmail = (e) =>{
        const currentEmail = e.target.value;
        setEmail(currentEmail);
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;

        if(currentEmail === ""){/*이메일은 문자열이어야 한다*/
            setEmailMessage("이메일을 입력해주세요!");
            setIsEmail(false)
        }
        else if(!emailPattern.test(currentEmail)){/*이메일 양식에 맞춰야한다.*/
            setEmailMessage("이메일 형식에 맞게 다시 입력해주세요.");
        }
        else{
            setEmailMessage("")
            setIsEmail(true)
        }
            
     }

     const onChangeAge = (e) =>{
        const currentAge = e.target.value;
        setAge(currentAge);

        if(currentAge === "" ) {//입력받아야함 -> 입력X: 버튼 비활성화
            setAgeMessage("나이를 입력해주세요!")
            setIsAge(false)
        }
        else if(currentAge < 0){
            setAgeMessage("나이는 양수여야 합니다.")
            setIsAge(false)
        }
        else if(isNaN(currentAge)){//나이는 숫자를 입력받아야함
            setAgeMessage("나이는 숫자로 입력해주세요.")
            setIsAge(false)
        }
        else if(currentAge%1){
            setAgeMessage("나이는 실수가 될 수 없습니다.")
            setIsAge(false)
        }
        else if(currentAge < 20){
            setAgeMessage("19세 이상만 사용가능합니다.")
            setIsAge(false)
        }
        else{
            setAgeMessage("")
            setIsAge(true)
        }
           
     }

     const onChangePassword = (e) =>{
        const currentPw = e.target.value;
        setPassword(currentPw)

        const pwPattern = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[~!@#$%^&*()_+|<>?:{}]).{4,12}$/;

        if (currentPw === "") { // 비밀번호가 비어 있을 때
            setPasswordMessage("비밀번호를 입력해주세요!");
            setIsPassword(false);
        } else if (currentPw.length < 4) { // 비밀번호가 4자리 미만일 때
            setPasswordMessage("최소 4자리 이상 입력해주세요.");
            setIsPassword(false);
        } else if (currentPw.length > 12) { // 비밀번호가 12자리를 초과할 때
            setPasswordMessage("최대 12자리까지만 입력 가능합니다.");
            setIsPassword(false);
        } else if (!pwPattern.test(currentPw)) { // 비밀번호 패턴에 맞지 않을 때
            setPasswordMessage("비밀번호는 영어, 숫자, 특수 문자를 포함해주세요.");
            setIsPassword(false);
        } else {
            setPasswordMessage("");
            setIsPassword(true);
        }
            
     }

     const onChangePasswordcheck = (e) =>{
        const currentPwCheck = e.target.value;
        setPasswordCheck(currentPwCheck)

        if(password !== currentPwCheck){//비밀번호 일치하는지 확인
            setPasswordCheckMessage("비밀번호가 일치하지 않습니다.");
            setIsPasswordCheck(false)
        }
        else{
            setPasswordCheckMessage("")
            setIsPasswordCheck(true)
        }
            
     }
     //유효성 검사 계산
     const isSubmitButtonDisabled =
    !isName ||
    !isEamil ||
    !isAge||
    !isPassword ||
    !isPasswordCheck;

    const handleSubmit = () =>{
        if(!isSubmitButtonDisabled){//유효성 검사 통과시
            console.log("checkpw:",passwordCheck,"pw:",password,"age:",age,"email:",eamil,"username:",name)
        }
    }

    return(
        <Wrapper>
            <div className="content">
                <h3>회원가입 페이지</h3>
                    <input type="text" value={name} onChange={onChangeName} placeholder="이름을 입력해주세요."/>
                    <span className="error_next_box">{nameMessage}</span>
                    <input type="email" value={eamil} onChange={onChangeEmail} placeholder="이메일을 입력해주세요."/>
                    <span className="error_next_box">{eamilMessage}</span>
                    <input type="text" value={age} onChange={onChangeAge} placeholder="나이를 입력해주세요."/>
                    <span className="error_next_box">{ageMessage}</span>
                    <input type="password" value={password} onChange={onChangePassword} placeholder="비밀번호를 입력해주세요."/>
                    <span className="error_next_box">{passwordMessage}</span>
                    <input type="password" value={passwordCheck} onChange={onChangePasswordcheck} placeholder="비밀번호 확인"/>
                    <span className="error_next_box">{passwordCheckMessage}</span>
                    <button type="button" onClick={handleSubmit} disabled={isSubmitButtonDisabled}>
                        <span>제출하기</span>
                    </button>
                <div className="elseThing">
                   <div>이미 아이디가 있으신가요?</div>
                   <div>로그인 페이지로 이동하기</div>
                </div>
            </div>
        </Wrapper>
    );
}

export default SignUpPage;