import React from 'react';
import PropTypes from 'prop-types';
import Column from './Column';
import If from './If';

function DataBox({title, subTitle, date, description}) {
    return (
        <Column>
            <div className="data-box">
                <div className="data-box__title">{title}</div>
                <If condition={subTitle}>
                    <div className="data-box__sub-title">{subTitle}</div>
                </If>
                <If condition={date}>
                    <div className="data-box__date">{date}</div>
                </If>
                <If condition={description}>
                    <div className="data-box__description">{description}</div>
                </If>
            </div>
        </Column>
    );
}

DataBox.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string,
    date: PropTypes.string,
    description: PropTypes.string,
};

export default DataBox;
