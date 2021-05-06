import { useState } from 'react';

import { Route } from '../../../../router/route';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Search = ({ history }) => {
    const [keyword, setKeyword] = useState('');

    const handleSearch = (event) => {
        event.preventDefault();

        if (keyword.trim()) {
            history.push(`${Route.SEARCH}/${keyword}`);
        } else {
            history.push(Route.HOME);
        }
    };

    return (
        <div className="header-search">
            <form onSubmit={handleSearch}>
                <div className="header-search__container">
                    <input
                        className="header-search__input"
                        type="text"
                        placeholder="Enter Product Name ..."
                        onChange={(event) => setKeyword(event.target.value)}
                    />
                    <button className="header_search__button">
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Search;
