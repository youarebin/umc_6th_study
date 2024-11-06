import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Wrapper = styled.form`
justify-content: center;
align-items: center;/* 수직 중앙 정렬 */
padding: 40px;
h3{
    text-align: center;/*왜 color앞에 써야 적용되지? -> color뒤이쓰면 안됨, 색도 없어짐*/
    color: white
}
.content {
    display: flex;
    flex-direction: column; /* 아래로 정렬하기 위해 컬럼으로 변경 */
    align-items: center; /* 수직 중앙 정렬 */
}
div > input{
    border-radius: 30px;
    height: 30px;
    width: 30%;
    padding: 7px 15px;
}
div > button{
    border-radius: 30px;
    height: 40px;
    width: 30%;
    color: black;
    font-size: 15px;
    font-weight: 400;
}
span.error_next_box{
    color: red;
    margin: 9px 0px;
    font-size: 12px;
}
div.elseThing{
width: 40%;
    display: flex;
    color: white;
    text-align: center;
    cursor: pointer;
    margin-top: 20px;
    a{
        margin-top: 16px;
        margin-left: 5%;
        color: white;
        text-decoration: none;
        font-weight: bold;
    }
}
`;

const SignUpPage = () =>{

    const navigate = useNavigate();
     //초기값 세팅
    const [enable, setEnable] = useState(false)
    const [valid, setValid] = useState(Array(6).fill(false))
    const [data, setData] = useState({
        name: "",
        email: "",
        age: "",
        username: "",
        password: "",
        passwordCheck: ""
    });
 
     //오류메시지 상태 저장
    const[nameMessage, setNameMessage] = useState("");
    const[idMessage, setIdMessage] = useState("");
    const[emailMessage, setEmailMessage] = useState("");
    const[ageMessage, setAgeMessage] = useState("");
    const[passwordMessage, setPasswordMessage] = useState("");
    const[passwordCheckMessage, setPasswordCheckMessage] = useState("");

    useEffect(() => {
        if(!valid.includes(false))
            setEnable(true)
    }, [valid])

    const handleValueChange = (e) => {
        setData({...data, [e.target.name]: e.target.value})
        var validState = [...valid]

        switch(e.target.name){
            case "name":
                if(e.target.value.length > 0){
                    setNameMessage("")
                    validState[0] = true
                    setValid(validState)
                }else{
                    setNameMessage("이름을 입력해 주세요!")
                    validState[0] = false
                    setValid(validState)
                }
                break
            case "username":
                if(e.target.value.length > 0){
                    setIdMessage("")
                    validState[1] = true
                    setValid(validState)
                }else{
                    setIdMessage("아이디를 입력해주세요!")
                    validState[1] = false
                    setValid(validState)
                }
                break
            case "email":
                if(e.target.value.length > 0){
                    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;

                    if(!emailPattern.test(e.target.value)){/*이메일 양식에 맞춰야한다.*/
                        setEmailMessage("이메일 형식에 맞게 다시 입력해주세요.");
                        validState[2] = false
                        setValid(validState)
                    }
                    else{
                        setEmailMessage("")
                        validState[2] = true
                        setValid(validState)
                    }
                }else{
                    setEmailMessage("이메일을 입력해주세요!")
                    validState[2] = false
                    setValid(validState)
                }
                break
           case "age":
                if(e.target.value.length > 0){
                    if(e.target.value < 0){
                        setAgeMessage("나이는 양수여야 합니다.")
                        validState[3] = false
                        setValid(validState)
                    }
                    else if(isNaN(e.target.value)){//나이는 숫자를 입력받아야함
                        setAgeMessage("나이는 숫자로 입력해주세요.")
                        validState[3] = false
                        setValid(validState)
                    }
                    else if(e.target.value%1){
                        setAgeMessage("나이는 실수가 될 수 없습니다.")
                        validState[3] = false
                        setValid(validState)
                    }
                    else if(e.target.value < 20){
                        setAgeMessage("19세 이상만 사용가능합니다.")
                        validState[3] = false
                        setValid(validState)
                    }
                    else{
                        setAgeMessage("")
                        validState[3] = true
                        setValid(validState)
                    }
                }else{
                    setAgeMessage("나이를 입력해 주세요!")
                }
                break
            case "password":
                if(e.target.value.length > 0){
                    const pwPattern = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[~!@#$%^&*()_+|<>?:{}]).{4,12}$/;

                    if (e.target.value.length < 4) { // 비밀번호가 4자리 미만일 때
                        setPasswordMessage("최소 4자리 이상 입력해주세요.");
                        validState[4] = false
                        setValid(validState)
                    } else if (e.target.value.length > 12) { // 비밀번호가 12자리를 초과할 때
                        setPasswordMessage("최대 12자리까지만 입력 가능합니다.");
                        validState[4] = false
                        setValid(validState)
                    } else if (!pwPattern.test(e.target.value)) { // 비밀번호 패턴에 맞지 않을 때
                        setPasswordMessage("비밀번호는 영어, 숫자, 특수 문자를 포함해주세요.");
                        validState[4] = false
                        setValid(validState)
                    } else {
                        setPasswordMessage("");
                        validState[4] = true
                        setValid(validState)
                    }
                }else{
                    setPasswordMessage("비밀번호를 입력해주세요!");
                }
                break
            case "passwordCheck":
                if(data.password !== e.target.value){//비밀번호 일치하는지 확인
                    setPasswordCheckMessage("비밀번호가 일치하지 않습니다.");
                    validState[5] = false
                    setValid(validState)
                }
                else{
                    setPasswordCheckMessage("");
                    validState[5] = true
                    setValid(validState)
                }

        }
    }
    
    const handleSubmit = async (e) =>{
        e.preventDefault();
        if(enable){
            try {
            axios.post('http://localhost:8080/auth/signup',data)
            alert("회원가입 성공!")
            navigate('/Login')
            }catch(error){
                if(error.response){
                    if(error.response.status === 409){
                        alert("이미 존재하는 아이디 입니다.")
                    } else if(error.response.status === 400){
                        alert("비밀번호가 일치하지 않습니다.")
                    }else{
                        console.error(error.message)
                    }
                }
            }
        }
        
    }

    return(
        <Wrapper method="post" onSubmit={handleSubmit}>
            <div className="content">
                <h3>회원가입 페이지</h3>
                    <input type="text"  name="name"  onChange={handleValueChange} placeholder="이름을 입력해주세요."/>
                    <span className="error_next_box">{nameMessage}</span>
                    <input type="text" name="username" onChange={handleValueChange} placeholder="아이디를 입력해주세요."/>
                    <span className="error_next_box">{idMessage}</span>
                    <input type="email" name="email" onChange={handleValueChange} placeholder="이메일을 입력해주세요."/>
                    <span className="error_next_box">{emailMessage}</span>
                    <input type="text" name="age" onChange={handleValueChange} placeholder="나이를 입력해주세요."/>
                    <span className="error_next_box">{ageMessage}</span>
                    <input type="password" name="password" onChange={handleValueChange} placeholder="비밀번호를 입력해주세요."/>
                    <span className="error_next_box">{passwordMessage}</span>
                    <input type="password" name="passwordCheck" onChange={handleValueChange} placeholder="비밀번호 확인"/>
                    <span className="error_next_box">{passwordCheckMessage}</span>
                    <button type="submit"
                            style={{
                                backgroundColor: enable ? "#ffc411" : "white",
                                cursor: enable ? "pointer" : "not-allowed"
                            }}>
                        제출하기
                    </button>
                <div className="elseThing">
                   <p>이미 아이디가 있으신가요?</p>
                   <Link to="/Login">로그인 페이지로 이동하기</Link>
                </div>
            </div>
        </Wrapper>
    );
}

export default SignUpPage;