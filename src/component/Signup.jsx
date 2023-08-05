import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import '../App.css';
import Mogo from './Mogo.png';

function Signup() {
  return (
    <div>
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          {/* Column for the signup card */}
          <Col md={8} lg={6} xs={12}>
            {/* Signup card with a shadow */}
            <Card className="shadow">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  {/* Mogo logo */}
                  <img src={Mogo} className="App-logo" alt="My Image" />
                  {/* Signup header */}
                  <h2 className="fw-bold mb-2 App">Sign up in to Mokx</h2>
                  <p className="mb-5 App">Welcome Back! Sign in using your social account or email to continue with us</p>
                  <div className="mb-3">
                    {/* Signup form */}
                    <Form>
                      <Form.Group className="mb-3" controlId="formBasictext">
                        {/* Name input label */}
                        <Form.Label className="text-center email">
                          Your Name 
                        </Form.Label>
                        {/* Name input */}
                        <Form.Control type="text" placeholder=" " />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        {/* Email input label */}
                        <Form.Label className="text-center email">
                          Your Email 
                        </Form.Label>
                        {/* Email input */}
                        <Form.Control type="email" placeholder="" />
                      </Form.Group>    
                      <Form.Group className="mb-3 email" controlId="formBasicPassword">
                        {/* Password input label */}
                        <Form.Label>Password</Form.Label>
                        {/* Password input */}
                        <Form.Control type="password" placeholder="" />
                      </Form.Group>
                      <Form.Group className="mb-3 email" controlId="formBasicPassword">
                        {/* Confirm Password input label */}
                        <Form.Label>Confirm Password</Form.Label>
                        {/* Confirm Password input */}
                        <Form.Control type="password" placeholder="" />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        {/* Checkbox (if needed) */}
                      </Form.Group>
                      {/* Signup button */}
                      <div className="d-grid mt-5">
                        <Button variant="warning" type="submit">
                          Create an account
                        </Button>
                      </div>                          
                    </Form>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Signup;

