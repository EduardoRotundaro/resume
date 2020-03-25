import React from 'react';
import PropTypes from 'prop-types';

function Column({ children, xs, sm, md, lg, xl, hd, }) {
    function getClassName() {
        let clss = `row__column--${xs===0? 'auto' : xs} `;
        if(sm!==undefined) clss += `row__column--sm-${sm===0? 'auto' : sm} `;
        if(md!==undefined) clss += `row__column--md-${md===0? 'auto' : md} `;
        if(lg!==undefined) clss += `row__column--lg-${lg===0? 'auto' : lg} `;
        if(xl!==undefined) clss += `row__column--xl-${xl===0? 'auto' : xl} `;
        if(hd!==undefined) clss += `row__column--hd-${hd===0? 'auto' : hd} `;
        return clss;
    }
    return (
        <div className={getClassName()}>
            {children}
        </div>
    );
}

Column.propTypes = {
    xs: PropTypes.number,
    sm: PropTypes.number,
    md: PropTypes.number,
    lg: PropTypes.number,
    xl: PropTypes.number,
    hd: PropTypes.number,
};

Column.defaultProps = {
    xs: 10,
};

export default Column;
