import React, { Component } from 'react';
import Sound from 'react-sound';
import { Container, Row, Col, Button } from 'reactstrap';

const sounds = new Audio("bensound-summer.mp3");


class Noisey extends Component {
    constructor(props) {
        super(props);
        
    }
    soundbite() {
        const sound = document.getElementsByClassName('audio-element')[0]
        sound.play()
    }
    soundbite1() {
        const sound = document.getElementsByClassName('audio-element')[1]
        sound.play()
    }
    
    render() {
        return(
            <Container>
                <Row>
                    <Col>
                    <Button onClick={this.soundbite}><span>Play</span></Button>
                    <audio className="audio-element">
                        <source src="https://api.coderrocketfuel.com/assets/pomodoro-times-up.mp3"></source>
                    </audio>
                    </Col>
                    <Col>
                    <Button onClick={this.soundbite1}><span>Play Me 2!</span></Button>
                    <audio className="audio-element">
                        <source src="http://commondatastorage.googleapis.com/codeskulptor-assets/Collision8-Bit.ogg"></source>
                    </audio>
                    </Col>
                </Row>
            </Container>
        
        );
    }
}

export default Noisey;