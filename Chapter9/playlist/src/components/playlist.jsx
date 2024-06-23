import React, {useEffect} from 'react'
import { useDispatch, useSelector  } from 'react-redux'
import {increase, decrease, calculateTotals, fetchCartItems} from '../redux/cartSlice'
import { openModal, closeModal, selectModal } from '../redux/modalSlice'
import { ChevronUp, ChevronDown } from '../icons'
import styled from 'styled-components'
import Modal from './modal'
import Spinner from './spinner'

const Wrapper = styled.div`
padding: 100px;
padding-bottom: 150px;
background-color: #eff3f6;

h1{
    text-align: center;
    padding: 10px 0;
}
`

const PlaylistWrapper = styled.ul`
.list{
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    width: 90%;
}
.img{
    width: 100px;
    height: auto;
    margin-right: 20px;
}
.content{
    flex-grow: 1;
    margin: 20px;
}
.content p{
    vertical-align: auto;
    margin: 0;
}
.counter{
    p{
        text-align: center;
        margin: 0;
    }
}
.ChevronUp,
.ChevronDown{
    left: 0;
    cursor: pointer;
    margin: 0 5px;
    border-color: #6e6cc6;
}
`
const PriceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`

const Price = styled.p`
    font-weight: bold;
  &:first-of-type {
    margin-right: auto;
  }

  &:last-of-type {
    margin-left: auto;
  }
`;

const BtnWrapper = styled.div`
    margin-right: 40px;
    display: flex;
    justify-content: center;
    align-items: center;

    button{
        margin: 0 auto;
        border: 1px solid red;
        border-radius: 5px;
        color: red;
        width: 150px;
        padding: 7px 10px;
    }
`

export default function Playlist() {
    const cartList = useSelector(state => state.cart.cart)
    const totalPrice = useSelector(state => state.cart.totalPrice)
    const isLoading = useSelector(state => state.cart.isLoading)
    const {isModalOpen} = useSelector(selectModal)
    const dispatch = useDispatch()
    
    useEffect(() => {
         // 서버에서 데이터를 불러오는 createAsyncThunk 호출
        dispatch(fetchCartItems())
        console.log(cartList)
    },[]);

    useEffect(() => {
        dispatch(calculateTotals());
    }, [cartList, dispatch]);

    console.log(isLoading)

    const playlistView = cartList?.map(item => (
        <li className='list' key={item.id}>
           <img className='img' src={item.img} alt={item.title}/> 
           <div className='content'>
                <p>{item.title}|{item.singer}</p>
                <p>₩{item.price}</p>
            </div>    
            <div className='counter'>
                <div onClick={() => dispatch(increase(item.id))}>
                    <ChevronUp />
                </div>
                <p>{item.amount}</p>
                <div onClick={() => dispatch(decrease(item.id))}>
                    <ChevronDown />
                </div>
            </div>
        </li>
    ))

    return(
        <>
        {isLoading? (
            <Spinner/>
         ): ( 
            <Wrapper>
            <h1>당신이 선택한 음반</h1>
            <PlaylistWrapper>{playlistView}</PlaylistWrapper>
            <hr/>
            <PriceWrapper>
                <Price>총 가격</Price>
                <Price>₩ {totalPrice}</Price>    
            </PriceWrapper>
            <BtnWrapper>
                <button onClick={()=> dispatch(openModal())}>장바구니 초기화</button>
            </BtnWrapper>
            <Modal 
                isOpen={isModalOpen}
                onSubmit={()=> dispatch(openModal())}
                onCancel={()=> dispatch(closeModal())}/>
            </Wrapper>
         )}
        </>   
    )
}