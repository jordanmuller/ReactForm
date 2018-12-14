import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css'
import { Steps, Button, message } from 'antd';
import InformationForm from './formsteps/InformationForm';

const Step = Steps.Step;

const steps = [
    {
        title: <InformationForm />,
        content: 'Try',
    },
    {
        title: 'Prix',
        content: 'Something'
    }
];

class FormLease extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 0,
        };
    }

    next() {
        const current = this.state.current + 1;
        this.setState({ current });
    }

    prev() {
        const current = this.state.current - 1;
        this.setState({ current });
    }

    render() {
        const { current } = this.state;
        return (
            <div>
                <Steps current={current}>
                    {steps.map(item => <Step key={item.title} title={item.title} />)}
                </Steps>
                <div className="steps-content">{steps[current].content}</div>
                <div className="steps-action">
                    {
                        current > 0
                        // eslint-disable-next-line
                        && (
                            <Button onClick={() => this.prev()}>
                                Retour
                            </Button>
                        )
                        // eslint-disable-next-line
                        || current === 0
                        // eslint-disable-next-line
                        && <Button disabled onClick={() => this.prev()}>
                            Retour
                        </Button>
                    }
                    {
                        current < steps.length - 1
                        && <Button type="primary" onClick={() => this.next()}>Continuer</Button>
                    }
                    {
                        current === steps.length - 1
                        && <Button
                            type="primary"
                            onClick={() => message.success('Votre bail vient d\'être créé')}
                        >
                            Terminer
                        </Button>
                    }
                </div>
            </div>
        );
    }
}

ReactDOM.render(<FormLease />, document.querySelector('#root'));