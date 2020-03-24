import React from 'react';
import PropTypes from 'prop-types';

function Row(props) {
    const {
        children,
        horizontalStart,
        horizontalEnd,
        horizontalCenter,
        verticalStart,
        verticalEnd,
        verticalCenter,
    } = props;
    function getClassName() {
        let clss = 'row';
        if(horizontalStart) clss += ' align-horizontal-start';
        else if(horizontalEnd) clss += ' align-horizontal-end';
        else if(horizontalCenter) clss += ' align-horizontal-center';
        if(verticalStart) clss += ' align-vertical-start';
        else if(verticalEnd) clss += ' align-vertical-end';
        else if(verticalCenter) clss += ' align-vertical-center';
        return clss;
    }
    return (
        <div className={getClassName()}>
            {children}
        </div>
    )
}

Row.propTypes = {
    horizontalStart: PropTypes.bool,
    horizontalEnd: PropTypes.bool,
    horizontalCenter: PropTypes.bool,
    verticalStart: PropTypes.bool,
    verticalEnd: PropTypes.bool,
    verticalCenter: PropTypes.bool,
};

export default Row;
