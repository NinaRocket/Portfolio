import React from 'react'; 
// import Container from "../components/Container";
// import Row from "../components/Row";
// import Col from "../components/Col";
import Bio from "../images/Ninabio.jpg"; 
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function About(){

    return(
      <div>

      <Container style={{ marginTop: 15 }}>
          <Row>
           <Col size="md-12">
              <h1>About Me</h1>
            </Col>
          </Row>
          <Row>
            <Col size="col-md-3 col-sm-12">
              <img src={Bio} alt="Nina, a late 30's woman is smiling"
               className="img-thumbnail"/>
            </Col>
             <Col>
                  <h3>Welcome to my page!</h3>
                  <p className="card-text"> My name is Nina Rocket and I am a full time working Mom
                      to 6 unique individual humans.
                      I have a Bachelors degree in Psychology with a Minor in Sociocultural Anthropology.
                      I am an enrollment advisor for a graduate university and am
                      currently learning web development with the University of Arizona in partnership with
                      Triology Education. Follow my journey to mastering web development!
                  </p>    
            </Col>
          </Row>
            <Row>
              <Col size="md-12">  
                    <p>
                        <h3>Professional Links:</h3>
                        <a href="https://github.com/NinaRocket">Nina's GitHub</a>
                        <br />
                        <a href="https://www.linkedin.com/in/ninarocket/">Nina's LinkedIn</a>
                        <br />
                    
                        <h3>Extracurricular Activities:</h3>
                        <a href="https://medium.com/@enRocket">Nina's Blog</a>
                        <br />
                        <a href="https://www.visualizingimmigrantphoenix.com/individual-projects/nina-rocket/">2018
                            Visualizing Immigrant Phoenix Project</a>
                        <br />
                        <a href="https://karachi2018.jimdofree.com/">2018 Karachi, Pakistan: Walking Between Slums and
                            Skyscrapers of Neoliberal Urbanism</a>
                        <br />
                        <sub>Karachi website is built with jimdo. I plan to redesign in the future.</sub>
                        <br />
                    </p>
                        
                </Col>
            </Row>
      </Container> 
  
     </div>
    
    );
};

export default About; 