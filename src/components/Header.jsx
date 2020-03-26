import React from 'react';
import Row from './Row';
import Column from './Column';
import If from './If';
import profile from '../assets/images/profile.png';
import {CV} from '../constants';

export default function Header() {
    const {
        NAME,
        TITLE,
        ABOUT,
        CONTACT,
    } = CV;
    function renderContacts() {
        return CONTACT.map(({name, ref, icon}) =>(
            <Column xs={10} key={icon}>
                <div className="header__contacts">
                    <If condition={ref}>
                        <a href={ref} className="header__link" target="_blank" rel="noopener noreferrer">
                            <i className={`fa fa-${icon}`}></i>&nbsp;{name}
                        </a>
                    </If>
                    <If condition={!ref}>
                        <span className="header__span">
                            <i className={`fa fa-${icon}`}></i>&nbsp;{name}
                        </span>
                    </If>
                </div>
            </Column>
        ));
    }

    return (
        <section className="header">
            <Row horizontalCenter>
                <Column xs={0}>
                    <img src={profile} alt="Eduardo H." className="header__photo" />
                </Column>
            </Row>
            <Row>
                <Column>
                    <div className="header__name">{NAME}</div>
                </Column>
                <Column>
                    <div className="header__title">{TITLE}</div>
                </Column>
                <Column>
                    <div className="header__about">{ABOUT}</div>
                </Column>
            </Row>
            <Row>
                {renderContacts()}
            </Row>
        </section>
    );
}
