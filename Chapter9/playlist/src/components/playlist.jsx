import React, {useEffect} from 'react'
import { useDispatch, useSelector  } from 'react-redux'
import {increase, decrease, removeItem, clearCart, calculateTotals} from '../redux/cartSlice'
import { CartIcon , ChevronUp, ChevronDown } from '../icons'
import styled from 'styled-components'

const Wrapper = styled.div`
padding: 100px;
`

const PlaylistWrapper = styled.ul`
.list{
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    width: 80%;
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
}
`
const PriceWrapper = styled.div`
display: flex;
`
const Button = styled.button`
border: 1px solid red;
border-radius: 5px;
color: red;
padding: 5px 10px;
`

export default function Playlist() {
    const cartList = useSelector(state => state.cart.cart)
    const totalPrice = useSelector(state => state.cart.totalPrice)
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(calculateTotals());
    }, [cartList, dispatch]);

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
        <Wrapper>
            <PlaylistWrapper>{playlistView}</PlaylistWrapper>
            <hr/>
            <PriceWrapper>
            <p>총 가격</p>
            <p>₩ {totalPrice}</p>    
            </PriceWrapper>
            <Button onClick={() => dispatch(clearCart())}>장바구니 초기화</Button>
        </Wrapper>
    )
}