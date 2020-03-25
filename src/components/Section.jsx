import React from 'react';
import PropTypes from 'prop-types';
import Row from './Row';
import Column from './Column';

function Section({title, children}) {
    return (
        <section className="section">
            <Row>
                <Column>
                    <div className="section__title">{title}</div>
                </Column>
                <Column>
                    {children}
                </Column>
            </Row>
        </section>
    );
}

Section.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Section;
