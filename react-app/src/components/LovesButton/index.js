import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { Redirect, useHistory, useParams } from 'react-router-dom';
import { addLove, deleteLove } from '../../store/loves';
import './LovesButton.css';

const LoveButton = () => {
	const dispatch = useDispatch();
	const { productId } = useParams();
    // console.log('product id 7', productId)
	const [loved, setLoved] = useState(false);
    // console.log('loved use state', loved)
	// const [heartColor, setHeartColor] = useState('heart-color-white')
	const user = useSelector((state) => state.session.user);
	const loves = useSelector((state) => Object.values(state.loves));
    // console.log('loves use selector', loves)
    useEffect(()=>{
        if (loves) {
            loves.forEach((love) => {
                if (love.prod_id?.id === +productId) {
                    setLoved(true);
                }
            });
        }
    },[loves])


	const addLoved = async (e) => {
		e.preventDefault();
		const payload = {
			user_id: user.id,
			prod_id: +productId,
		};

		const data = await dispatch(addLove(payload));
        setLoved(true)

	};

    const removeLove = async (e) => {
        e.preventDefault();
		const payload = {
			user_id: user.id,
			prod_id: +productId,
		};
        const data = await dispatch(deleteLove(payload));
        setLoved(false)
    }
    if(!user){
        return null;
    }

	return (
		<div className='love-button-container'>
			{loved && user ? (
				<i
					className='fa-solid fa-heart'
					style={{ color: 'red', fontSize: '20px' }}
					onClick={removeLove}
				></i>
			) : (
				<i
					className='fa-solid fa-heart'
					style={{ color: 'grey',fontSize: '20px'}}
					onClick={addLoved}
				></i>
			)}
            {!user && (<div></div>)}

		</div>
	);
};
export default LoveButton;
