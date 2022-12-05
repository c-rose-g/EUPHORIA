import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink, Redirect, useHistory } from "react-router-dom";
import { addToCart } from "../../store/shoppingCarts";
import './BasketButton.css'
const AddToBasketButton = ({productId, basketId}) =>{
    const dispatch = useDispatch()
    const history = useHistory()
    const [pressed, setPressed] = useState(false)
    console.log('this is productId >>>>>>>', productId)
    const handleAddToCart = async (e) =>{
        e.preventDefault()
        const payload = {
            productId,
            prod_quantity:1,
            basketId
        }
        const data = await dispatch(addToCart(payload))
        setPressed(true)
        return <Redirect to={`/products/${productId}`}/>
    }
    // pressed ? <div className="add-button-pressed font-16"> Item has been added to your basket</div> :
    // add purchase history
    return(
        <div>
            {<button className="add-button-not-pressed font-16-white" type='button' onClick={handleAddToCart}>Add to Basket</button>}
        </div>
    )
}

export default AddToBasketButton
