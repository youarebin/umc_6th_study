import { useState } from 'react'
import './App.css'

function App() {
  const[todoInput, setTodoInput] = useState('');/*입력값 문자열*/
  const [todoList, setTodoList] = useState([]);/*todo데이터 저장 관리 배열*/
  const[doneList, setDoneList] = useState([]);/*완료todo저장 관리 배열*/
/*input.value변경감지 -> setTodoInput으로 현재 todoInput을 inuput.value로 변경 */
  const onChange = (event)=> setTodoInput(event.target.value)

  const handleKeyDown = (event)=>{
    if(event.key === 'Enter'){
      addInput();
    }
  };

  const addInput = () =>{/*새로운 todo add*/
    if(todoInput.trim() !== ''){/*trim으로 양끝 공백 제거후 입력값 검사*/
      const newTodo = {text:todoInput}
      setTodoList([...todoList, newTodo]);/*input값 넣기 */
      setTodoInput('');/*빈칸만들기*/
    }
  }
  /*완료 -> 한 일 리스트로 | 삭제 -> 없애기*/
  const completeInput = (index, isDone) => {
    const completedTodo = todoList[index];
    if (isDone) {/* 이미 한 일 */
      setDoneList([...doneList, completedTodo]); /* done list 에 추가 */
    }
    setTodoList(todoList.filter((_, i) => i !== index)); /* 해당 todo 삭제 */
  };

  const deleteInput = (index)=>{
    setDoneList(doneList.filter((_,i) => i !== index));/*해당 요소 삭제*/
  }

  return(
    <div id="todoContainer">
      <h1>UMC Study Plan</h1>
      <hr/>
      <div id="inputContainer">
        <input 
        value={todoInput}
        onChange={onChange}
        onKeyDown={handleKeyDown}
        type="text" 
        id="todoInput" 
        placeholder="스터디 계획을 작성해보세요!"/>
      </div>   
      <div id="will">
        <h2>해야 할 일</h2>
          <ul id="todoList">
          {todoList.map((todo, index) => (
            <li key={index}>
              {todo.text}
              <button onClick={() => completeInput(index, true)}>완료</button>
            </li>
          ))}
          </ul>
      </div>
            
      <div id="done">
        <h2>해낸 일</h2>
          <ul id="todoDone">
          {doneList.map((doneTodo, index) => (
            <li key={index}>
              {doneTodo.text}
              <button onClick={() => deleteInput(index)}>삭제</button>
            </li>
          ))}
          </ul>
      </div>  
    </div>
  )
}

export default App
