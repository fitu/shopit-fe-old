import React, { ReactElement } from 'react';

import strings from '../../../resources/strings/components/layout/footer/footerStrings';
import './styles/footer.scss';

const Footer: React.FC = (): ReactElement => (
    <footer>
        <p className={'footer'}>{strings.allRightsReserved}</p>
    </footer>
);

Footer.displayName = 'Footer';

export default Footer;
