import React, { useEffect, useState } from 'react';

import DropDownMenu from './DropDownMenu';

const LoggedUserHeader = ({ user, logoutHandler }) => {
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        const dropDownClicked = () => {
            setIsActive(!isActive);
        };

        if (isActive) {
            window.addEventListener('click', dropDownClicked);
        }

        return () => {
            window.removeEventListener('click', dropDownClicked);
        };
    }, [isActive]);

    return (
        <div className={'header-profile'}>
            <button className={'header-profile__user'} type={'button'} onClick={() => setIsActive(!isActive)}>
                <figure>
                    <img alt={'Avatar'} className={'header-profile__user-logo'} src={user.avatar?.url} />
                </figure>
                <span className={'header-profile__user-name'}>{user?.name}</span>
            </button>

            {isActive && (
                <div className={'header-profile__drop-down-menu--container'}>
                    <DropDownMenu logoutHandler={logoutHandler} user={user} />
                </div>
            )}
        </div>
    );
};

LoggedUserHeader.displayName = 'LoggedUserHeader';

export default LoggedUserHeader;
