import React from 'react';
import PropTypes from 'prop-types';
import Column from './Column';
import If from './If';

function DataBox({title, subTitle, date, description}) {
    debugger
    return (
        <Column>
            <div>
                <div>{title}</div>
                <If condition={subTitle}>
                    <div>{subTitle}</div>
                </If>
                <If condition={date}>
                    <div>{date}</div>
                </If>
                <If condition={description}>
                    <div>{description}</div>
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
