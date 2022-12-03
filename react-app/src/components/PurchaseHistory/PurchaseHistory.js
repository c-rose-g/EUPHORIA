import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import CategoriesNavBar from "../CategoriesNavBar";
import { loadPurchaseHistory } from "../../store/purchaseHistories";

import './PurchaseHistory.css'

const PurchaseHistory = () =>{
    const [loaded, setLoaded] = useState(false)
    const {userId} = useParams()
    const dispatch = useDispatch()
    const user_history = useSelector(state => state.history.purchaseHistory)
    console.log('user history ********', user_history)

    useEffect(() => {
        dispatch(loadPurchaseHistory(userId))
        .then(() => setLoaded(true))
    },[dispatch])
    return(
        <>
            {loaded && (
                <>
                <CategoriesNavBar/>
                    <div className="purchase-history-page-container">
                    <div>Buy it again</div>
                        <div className="purchase-history-rows-wrapper">
                            <div className="purchase-history-map">

                            </div>
                        </div>
                    </div>
                </>
             )}
        </>
    )
}
export default PurchaseHistory
