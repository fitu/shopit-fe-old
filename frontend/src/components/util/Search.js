import React, { useState } from 'react';

import { Route } from '../router/route';

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
        <form onSubmit={handleSearch}>
            <div className="input-group">
                <input
                    type="text"
                    id="search_field"
                    className="form-control"
                    placeholder="Enter Product Name ..."
                    onChange={(event) => setKeyword(event.target.value)}
                />
                <div className="input-group-append">
                    <button id="search_btn" className="btn">
                        <i className="fa fa-search" aria-hidden="true"></i>
                    </button>
                </div>
            </div>
        </form>
    );
};

export default Search;
