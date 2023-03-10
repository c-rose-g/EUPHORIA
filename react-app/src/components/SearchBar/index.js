import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './SearchBar.css';

const SearchBar = () => {
	const [searchQuery, setSearchQuery] = useState('');
	const [results, setResults] = useState([]);
	const [noResults, setNoResults] = useState(false);
	console.log('search query', searchQuery);
	console.log('results', results);
	console.log('no results', noResults)
	const [dropdown, setDropDown] = useState(false);

	const handleSearchQuery = async (e) => {
		e.preventDefault();

		if (searchQuery.trim() === '') return;
		setNoResults(false);

		try {
			const res = await fetch(`/api/products/search?query=${searchQuery}`);
			const data = await res.json();

			if (!data.retrieve_products) {
				setNoResults(true);
				setDropDown(true)
			} else {
				setResults(data.retrieve_products);
				setDropDown(true);
			}
		} catch (err) {
			console.error(err);
		}
	};
	const handleKeyPress = (e) => {
		if (e.keyCode === 'Enter') {
			handleSearchQuery();
		}
	};
	const handleResultClick = () => {
		setDropDown(false);
		setSearchQuery('');
	};
	return (
		<form className='search-bar-container' onSubmit={handleSearchQuery}>
			<div>
				<div className='search-bar-form'>
					<input
						className='search-input'
						type='search'
						value={searchQuery}
						onChange={(e) => setSearchQuery(e.target.value)}
						placeholder='Search'
						onKeyDown={handleKeyPress}
					/>

					{dropdown && searchQuery.length ? (
						<div className='results-dropdown'>
						{/* {noResults ? (
                <div className='font-14' style={{paddingBottom: '2px' }}>
                  No results found
                </div>
              ) : results.length ? (
                <div className='font-14' style={{ color: '#a1a1a1', paddingBottom: '2px' }}>
                  Previous Searches
                </div>
              ) : null}
              {results.map((product) => (
                <div key={product.id} value={product.id} onClick={handleResultClick}>
                  <NavLink to={`products/${product.id}`} className='result-name remove-underline font-12'>
                    {product.product_name}
                  </NavLink>
                </div>
              ))}
            </div>
          ) : null} */}


							{results.length > 0 && (
								<div
									className='font-14'
									style={{ color: '#a1a1a1', paddingBottom: '2px' }}
								>
									Previous Searches
								</div>
							)}
							{noResults ? (
								<div className='font-14'>No results found</div>
							) : (
								results.map((product) => (
									<div
										key={product.id}
										value={product.id}
										onClick={handleResultClick}
									>
										<NavLink
											to={`products/${product.id}`}
											className='result-name remove-underline font-12'
										>
											{product.product_name}
										</NavLink>
									</div>
								))
							)}
						</div>
					) : null}

					{/* {
								results.map((product) => (
								<div
									key={product.id}
									value={product.id}
                  onClick={handleResultClick}
								>
									<NavLink to={`products/${product.id}`} className='result-name remove-underline font-12'>
										{product.product_name}
									</NavLink>
								</div>
							))
							}
						</div>
					) : (
						null
					)} */}
				</div>
			</div>
		</form>
	);
};

export default SearchBar;
