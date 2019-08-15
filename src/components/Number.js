import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {connect} from 'react-redux';
import {increaseNumber, decreaseNumber} from '../actions'



class Number extends Component {

    constructor (props) {
        super(props);
        this.onDecreasePress = this.onDecreasePress.bind(this);
        this.onIncreasePress = this.onIncreasePress.bind(this);
    }

    onIncreasePress() {
        var {number} = this.props;
        this.props.increaseNumber(number);
    }

    onDecreasePress () {
        var {number} = this.props;
        this.props.decreaseNumber(number);
    }

    render () {

        const {numberFontSize} = styles;
        return (

            <Container>
                <Row>
                    <Col sm={{ span: 4, offset: 4 }}>
                        <p style = {numberFontSize}>{this.props.number}</p>
                    </Col>
                </Row>

                <Row>
                    <Col sm={{ span: 4, offset: 1 }}>
                        <Button onClick = {this.onIncreasePress} variant ="primary">
                            Increment
                        </Button>
                    </Col>

                    <Col sm={{ span: 4, offset: 1 }}>
                        <Button onClick = {this.onDecreasePress} variant = "danger">
                            Decrement
                        </Button>
                    </Col>     
                
                </Row>
            </Container >

        );
    }
}



const styles = {
    numberFontSize: {
        fontSize: 200
    }
}


const mapStateToProps = ({incdec}) => {

    const {number} =  incdec;

    return  {number};

};


export default connect (mapStateToProps, {increaseNumber, decreaseNumber})(Number);

