import React from 'react'; 
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';




function Portfolio(){

    return(
        <div>
            <Container style={{ marginTop: 30 }}>
            <Row>
                <Col lg><p>Eat-Da-Burger</p><a href="https://placeholder.com"><img src="https://via.placeholder.com/300"></img></a>
                </Col>
                <Col lg><p>Employee Generator</p><a href="https://placeholder.com"><img src="https://via.placeholder.com/300"></img></a></Col>
                <Col lg><p>wellyes</p><a href="https://placeholder.com"><img src="https://via.placeholder.com/300"></img></a></Col>
            </Row>
            <Row style={{ marginTop: 30 }}>
                <Col lg><p>Note Taker</p><a href="https://placeholder.com"><img src="https://via.placeholder.com/300"></img></a></Col>
                <Col lg><p>Work Day Scheduler</p><a href="https://placeholder.com"><img src="https://via.placeholder.com/300"></img></a></Col>
                <Col lg><p>Coding Quiz</p><a href="https://placeholder.com"><img src="https://via.placeholder.com/300"></img></a></Col>
            </Row>
            <Row style={{ marginTop: 30 }}>
                <Col lg><p>Vegg-In-Place</p><a href="https://placeholder.com"><img src="https://via.placeholder.com/300"></img></a></Col>
                <Col lg><p>Weather Dashboard</p><a href="https://placeholder.com"><img src="https://via.placeholder.com/300"></img></a></Col>
                <Col lg><p>Employee Directory</p><a href="https://placeholder.com"><img src="https://via.placeholder.com/300"></img></a></Col>
            </Row>

            </Container>
           
        </div>
    )

}

export default Portfolio; 