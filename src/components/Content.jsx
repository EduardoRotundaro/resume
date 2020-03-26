import React from 'react';
import Section from './Section';
import Row from './Row';
import Column from './Column';
import DataBox from './DataBox';
import {CV} from '../constants';

export default function Content() {
    const {
        INFO,
        SKILLS,
        EDUCATION,
        EXPERIENCE,
        ACTIVITIES,
        LANGUAGE,
    } = CV;

    function renderInfos() {
        return INFO.map(({name, data}, index) => (
            <Column xs={0} key={`info_${index}`}>
                <div className="information">
                    <div className="information__title">{name}</div>
                    <div className="information__description">{data}</div>
                </div>
            </Column>
        ));
    }

    function renderSkills(arr) {
        return arr.map(({name, type}, index) => (
            <span key={`${type}_${index}`}>{name}</span>
        ));
    }

    function renderDataBoxes(arr) {
        return arr.map(({title, subTitle, date, description}, index) => (
            <DataBox 
                title={title} 
                subTitle={subTitle} 
                date={date} 
                description={description}
                key={`db_${index}`}
            />
        ));
    }

    return (
        <>
            <Section title={'Informações'}>
                <Row>
                    {renderInfos()}
                </Row>
            </Section>
            <Section title={'Conhecimentos'}>
                <Row>
                    <Column>
                        <div className="knowledge__title">Setor</div>
                    </Column>
                    <Column>
                        <div className="knowledge__skills">
                            {renderSkills(SKILLS.filter(s => s.type==='sector'))}
                        </div>
                    </Column>
                    <Column>
                        <div className="knowledge__title">Tecnologias</div>
                    </Column>
                    <Column>
                        <div className="knowledge__skills">
                            {renderSkills(SKILLS.filter(s => s.type==='tech'))}
                        </div>
                    </Column>
                </Row>
            </Section>
            <Section title={'Formação Acadêmica'}>
                <Row>
                    {renderDataBoxes(EDUCATION)}
                </Row>
            </Section>
            <Section title={'Experiência'}>
                <Row>
                    {renderDataBoxes(EXPERIENCE)}
                </Row>
            </Section>
            <Section title={'Idiomas'}>
                <Row>
                    {renderDataBoxes(LANGUAGE)}
                </Row>
            </Section>
            <Section title={'Atividades e Voluntariado'}>
                <Row>
                    {renderDataBoxes(ACTIVITIES)}
                </Row>
            </Section>
        </>
    );
}
