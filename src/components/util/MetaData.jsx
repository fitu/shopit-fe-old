import PropTypes from 'prop-types';
import React from 'react';
import { Helmet } from 'react-helmet';

const MetaData = ({ title }) => (
    <Helmet>
        <title>{`${title} - Shopit`}</title>
    </Helmet>
);

MetaData.displayName = 'MetaData';

MetaData.propTypes = {
    title: PropTypes.string.isRequired,
};

export default MetaData;
