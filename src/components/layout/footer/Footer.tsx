import React, { ReactElement } from 'react';

import Strings from '../../../resources/strings/components/layout/footer/footerStrings';
import './styles/footer.scss';

const Footer: React.FC = (): ReactElement => (
    <footer>
        <p className={'footer'}>{Strings.allRightsReserved}</p>
    </footer>
);

Footer.displayName = 'Footer';

export default Footer;
