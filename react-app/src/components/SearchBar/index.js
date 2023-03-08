import React, { useState } from 'react';
import './SearchBar.css';
import {BiSearchAlt} from 'react-icons/bi'
const SearchBar = () => {
	const [searchQuery, setSearchQuery] = useState('');
	const [results, setResults] = useState([]);
	console.log('search query', searchQuery);
	console.log('results', results);

	const handleSearchQuery = async (e) => {
		e.preventDefault();

		if (searchQuery.trim() === '') return;

		try {
			const res = await fetch(`/api/products/search?query=${searchQuery}`);
			const data = await res.json();
			setResults(data.retrieve_products);
		} catch (err) {
			console.error(err);
		}
	};
	return (
		<div className='search-bar-container'>
			<form onSubmit={handleSearchQuery}>
				<div className='search-bar-form'>
					<input
          className='search-input'
						type='text'
						// name="search"
						value={searchQuery}
						onChange={(e) => setSearchQuery(e.target.value)}
						placeholder='Search'
					/>
					<button type='submit'>
          <div class='bx bx-search-alt' style={{size:'20px', backgroundColor:'transparent'}}></div>
           </button>
					{searchQuery.length ? (
						<div className='results-dropdown'>
							{results.map((product) => (
								<div className='result-name font-12' key={product.id} value={product.id}>
									{/* <NavLink to={`products/`}></NavLink> */}
									{product.product_name}
								</div>
							))}
						</div>
					) : (
						<div></div>
					)}
				</div>
			</form>
		</div>
	);
};

export default SearchBar;
