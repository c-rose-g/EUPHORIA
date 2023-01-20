import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { loadLoves, addLove, deleteLove } from '../../store/loves';
// import { Modal } from '../../context/Modal';
// import LoginModal from '../LoginModal';
import './LovesButton.css';

const LoveButton = ({productId}) => {
	const dispatch = useDispatch();
	// const { productId } = useParams();
	// usestates
	const [loved, setLoved] = useState(false);
	const [showLoginModal, setShowLoginModal] = useState(false);

	// const [heartColor, setHeartColor] = useState('heart-color-white')
	const user = useSelector((state) => state.session.user);
	const loves = useSelector((state) => Object.values(state.loves.loves));

	//useEffect that checks if a product is loved or not
	useEffect(() => {
		if (loves) {
			setLoved(false);
			loves.forEach((love) => {
				if (love.prod_id?.id === +productId) {
					setLoved(true);
				}
			});
		}
	}, [loves]);

	useEffect(() => {
		if (user) {
			dispatch(loadLoves(user.id));
		}
	}, [dispatch]);

	const addLoved = async (e) => {
		e.preventDefault();
		const payload = {
			user_id: user.id,
			prod_id: +productId,
		};

		setLoved(true);
		const data = await dispatch(addLove(payload));
		dispatch(loadLoves(user.id));
	};

	const removeLove = async (e) => {
		e.preventDefault();

		setLoved(false);
		const data = await dispatch(deleteLove(productId));
	};
	if (!user) {
		return null;
	}

	return (
		<div className='love-button-container'>
			{user && loved && (
				<i
					className='fa-solid fa-heart'
					style={{ color: 'red', fontSize: '20px' }}
					onClick={removeLove}
				></i>
			)}

			{user && !loved && (
				<i
					className='fa-solid fa-heart'
					style={{ color: 'grey', fontSize: '20px' }}
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
