import ReactModal from "react-modal";
import { useDispatch, useSelector } from 'react-redux'
import { clearCart } from "../redux/cartSlice";
import { openModal,closeModal, selectModal } from "../redux/modalSlice";
import styled from "styled-components";

const customStyles = {
    overlay:{
        backgroundColor: " rgba(0, 0, 0, 0.7)",
    },
    content:{
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "350px",
        height: "100px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
}

const YesBtn = styled.button`
border: 1px solid red;
border-radius: 5px;
color: red;
padding: 5px 10px;
margin: 0 50px;
`

const NoBtn = styled.button`
border: 1px solid blue;
border-radius: 5px;
color: blue;
padding: 5px 10px;
margin: 0 50px;
`

const Modal = ({isOpen}) =>{
    const { isModalOpen } = useSelector(selectModal);//isOpenMidal의 상태 추출
    const dispatch = useDispatch()

    const handleClickSubmit = () => {
        dispatch(clearCart())
        dispatch(closeModal())
      };

    const handleClickCancle = () => {
        dispatch(closeModal())
    }

    return(
        <ReactModal isOpen={isModalOpen} style={customStyles}>
            <div>
                <p>담아두신 모든 음반을 삭제하시겠습니까?</p>
                <YesBtn onClick={handleClickSubmit}>네</YesBtn>
                <NoBtn onClick={handleClickCancle}>아니요</NoBtn>
            </div>
        </ReactModal>
    )
}

export default Modal