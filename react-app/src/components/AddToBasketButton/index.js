import React from "react";
import { useDispatch } from "react-redux";
import { NavLink, Redirect, useHistory } from "react-router-dom";
import { addToCart } from "../../store/shoppingCarts";
const AddToBasketButton = ({productId, basketId}) =>{
    const dispatch = useDispatch()
    const history = useHistory()
    console.log('this is productId >>>>>>>', productId)
    const handleAddToCart = async (e) =>{
        e.preventDefault()

        const payload = {
            productId,
            prod_quantity:1,
            basketId
        }

        console.log('this is the payload in add to basket comp', payload)
        const data = await dispatch(addToCart(payload))
        return <Redirect to={`/products/${productId}`}/>
    }
    // add purchase history
    return(
        <div>
            <button onClick={handleAddToCart}>Add to Basket</button>
        </div>
    )
}

export default AddToBasketButton
