import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const LovesPage = () => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.session.user)
    const userloves = useSelector(state => state.loves.loves)
    console.log('user loves', userloves)
	return (
		<div>
			<h1>the users loves go hurrr</h1>
            {/* {userloves} */}
		</div>
	);
};
export default LovesPage;
