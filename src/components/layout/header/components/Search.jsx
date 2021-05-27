import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import _ from 'lodash';
import React, { useState } from 'react';

import { Route } from '../../../../router/route';

const Search = ({ history }) => {
    const [keyword, setKeyword] = useState('');

    const handleSearch = (event) => {
        event.preventDefault();

        if (_.trim(keyword)) {
            history.push(`${Route.SEARCH}/${keyword}`);
        } else {
            history.push(Route.HOME);
        }
    };

    return (
        <div className={'header-search'}>
            <form onSubmit={handleSearch}>
                <div className={'header-search__container'}>
                    <input
                        className={'header-search__input'}
                        placeholder={'Enter Product Name ...'}
                        type={'text'}
                        onChange={(event) => setKeyword(event.target.value)}
                    />
                    <button className={'header_search__button'} type={'button'}>
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </div>
            </form>
        </div>
    );
};

Search.displayName = 'Search';

export default Search;
