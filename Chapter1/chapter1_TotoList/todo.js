//변수 선언
const todoInput = document.getElementById('todoInput')
const todoList = document.getElementById('todoList')
const todoDone = document.getElementById('todoDone')
//이벤트 연결
todoInput.addEventListener('keydown',(e)=>{
  if (e.key === 'Enter') {
    addInput();
  }
})

function addInput(){//할 일추가
  if(todoInput.value !== ''){
    //alert('실행됨')
    const newLi = document.createElement('li');
    const completeBtn = document.createElement('button');

    newLi.textContent = todoInput.value;//입력값 넣기

    completeBtn.textContent = '완료';
    newLi.appendChild(completeBtn);//li자식으로 버튼 추가

    todoList.appendChild(newLi);//ul자식으로 li 추가

    todoInput.value="";//입력란 비우기

    completeBtn.addEventListener('click', function () {
      completeInput(newLi);
    });
  }
}

function completeInput(listItem){
  todoList.removeChild(listItem);//완료한 항목은 todoList에서 삭제
  listItem.removeChild(listItem.querySelector('button'))

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = '삭제';

  deleteBtn.addEventListener('click', function(){
    todoDone.removeChild(listItem);
  });

  listItem.appendChild(deleteBtn);
  todoDone.appendChild(listItem);
}