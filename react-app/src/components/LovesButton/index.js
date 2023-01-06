import React, { useEffect, useState } from 'react';
import { connectAdvanced, useDispatch, useSelector, useStore } from 'react-redux';
import { Redirect, useHistory, useParams } from 'react-router-dom';
import { addLove, deleteLove } from '../../store/loves';
import { Modal } from '../../context/Modal';
import LoginModal from '../LoginModal';
import './LovesButton.css';

const LoveButton = () => {
	const dispatch = useDispatch();
	const { productId } = useParams();
    // console.log('product id 7', productId)
	// usestates
	const [loved, setLoved] = useState(false);
	const [showLoginModal, setShowLoginModal] = useState(false);

	// const [heartColor, setHeartColor] = useState('heart-color-white')
	const user = useSelector((state) => state.session.user);
	const loves = useSelector((state) => Object.values(state.loves));
	let loveJRA ;

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
		// if(!loved){
			// console.log('what is the usestate here before adding it',loved)

			setLoved(true)
			const data = await dispatch(addLove(payload));
			// console.log('love usestate should be true',loved )
		// }

	};

    const removeLove = async (e) => {
        e.preventDefault();
		// if(loved){
			// console.log('what is the usestate here before removing it',loved)
			setLoved(false)
			const data = await dispatch(deleteLove(productId));
		// }

		// console.log('love usestate should be false', loved)
    }
    if(!user){
        return null;
    }
	// console.log('love usestate in general for JSON', loved)
	return (
		<div className='love-button-container'>
			{user && loved && (
				<i
					className='fa-solid fa-heart'
					style={{ color: 'red', fontSize: '20px' }}
					onClick={removeLove}
				></i>
			) }

			{user && !loved && (
				<i
					className='fa-solid fa-heart'
					style={{ color: 'grey',fontSize: '20px'}}
					onClick={addLoved}
				></i>

			)}
            {/* {!user && !loved && (<div>
				<i
					className='fa-solid fa-heart'
					style={{ color: 'grey',fontSize: '20px'}}
					onClick={() => setShowLoginModal(true)}
				></i>
			</div>)}

			{showLoginModal && (
				<Modal onClose={() => setShowLoginModal(false)}>
					<LoginModal setShowLoginModal={setShowLoginModal} />
				</Modal>
			)} */}
		</div>
	);
};
export default LoveButton;
