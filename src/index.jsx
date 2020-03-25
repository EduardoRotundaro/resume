import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom';
import Row from './components/Row';
import Column from './components/Column';
import Content from './components/Content';
import Header from './components/Header';

import './assets/sass/main.scss';

ReactDOM.render(
    <StrictMode>
        <main>
            <div className="block">
                <Row>
                    <Column xs={3} xl={3}>
                        <Header />
                    </Column>
                    <Column xs={7} xl={7}>
                        <Content />
                    </Column>
                </Row>
            </div>
        </main>
    </StrictMode>,
    document.getElementById('root')
);
