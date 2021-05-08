import { useEffect, useState } from 'react';

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
        <div className="header-profile">
            <button onClick={() => setIsActive(!isActive)} className="header-profile__user">
                <figure>
                    <img src={user.avatar?.url} className="header-profile__user-logo" alt="Avatar" />
              </figure>
                <span className="header-profile__user-name">{user?.name}</span>
          </button>

            {isActive && (
                <div className="header-profile__drop-down-menu--container">
                    <DropDownMenu user={user} logoutHandler={logoutHandler} />
            </div>
            )}
      </div>
    );
};

export default LoggedUserHeader;
