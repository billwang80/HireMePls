import React from 'react';
import './style.css';
import posed from 'react-pose';

const OnScreen = posed.div({
    hidden: {
        opacity: 0,
        duration: 300
    },
    visible: {
        opacity: 1,
        duration: 400
    }
})

class FadeText extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isVisible: true,
        };
        this.selector = React.createRef();
    }

    listenScrollEvent = e => {     
        var rect = this.selector.current.getBoundingClientRect();
        if(rect.top > 32 && rect.bottom < window.innerHeight){
            this.setState({isVisible: true});
        } else {
            this.setState({isVisible: false});
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.listenScrollEvent)
    }

    render() {
        const text = this.props.text;
        const class_name = this.props.class_name;
        const { isVisible } = this.state;
        return (
            <OnScreen ref={this.selector} className={class_name} pose={isVisible ? 'visible' : 'hidden'}>
                <h2>{text}</h2>
            </OnScreen>
        );
    }
}

export default FadeText
