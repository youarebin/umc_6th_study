import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
justify-content: center;
flex-direction: column;/* 아래로 정렬하기 위해 컬럼으로 변경 */
align-items: center;/* 수직 중앙 정렬 */
padding: 40px;
display: flex;
h3{
    text-align: center;/*왜 color앞에 써야 적용되지? -> color뒤이쓰면 안됨, 색도 없어짐*/
    color: white
}
span.error_next_box{
    color: red;
    margin: 9px 0px;
    font-size: 12px;s
}
input{
    border-radius: 30px;
    height: 30px;
    width: 30%;
    padding: 7px 15px;
}
button{
    border-radius: 30px;
    height: 40px;
    width: 30%;
    color: black;
    font-size: 15px;
    font-weight: 400;
   // background-color: ${props=>props.disabled? 'yellow' : 'white'  };
}
`;

const Login = () =>{
    const[id, setId] = useState("");
    const[password, setPassword] = useState("");
    
    const[idMessage, setIdMessage] = useState("");
    const[passwordMessage, setPasswordMessage] = useState("");

    const[isId, setIsId] = useState(false);
    const[isPassword, setIsPassword] = useState(false);

    const onChangeId = (e) =>{
        const currentId = e.target.value;
        setId(currentId)

        if(currentId === ""){
            setIsId(false)
            setIdMessage("아이디를 입력해주세요!")
        }else{
            setIdMessage("")
            setIsId(true)
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

    return(
        <Wrapper>
            <h3>로그인 페이지</h3>
            <input type="text" value={id} onChange={onChangeId} placeholder="아이디"/>
            <span className="error_next_box">{idMessage}</span>
            <input type="password" value={password} onChange={onChangePassword} placeholder="비밀번호"/>
            <span className="error_next_box">{passwordMessage}</span>
           <button type="button"  style={{ backgroundColor: (isId && isPassword) ? '#ffc411' : 'white' }}> 
                <span>로그인</span>
            </button>
        </Wrapper>
    );
}
export default Login;