import React from 'react';

import strings from '../../../resources/strings/components/layout/footer/footerStrings';
import './styles/footer.scss';

const Footer = () => (
    <footer>
        <p className={'footer'}>{strings.allRightsReserved}</p>
    </footer>
);

Footer.displayName = 'Footer';

export default Footer;
