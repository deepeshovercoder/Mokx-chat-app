import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import '../App.css';
import Mogo from './Mogo.png';

function Login() {
  return (
    <div>
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          {/* Column for the login card */}
          <Col md={8} lg={6} xs={12}>
            {/* Login card with a shadow */}
            <Card className="shadow">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  {/* Mogo logo */}
                  <img src={Mogo} className="App-logo" alt="My Image" />
                  {/* Login header */}
                  <h2 className="fw-bold mb-2 App">Log in to Mokx</h2>
                  <p className="mb-5 App">Welcome Back! Sign in using your social account or email to continue with us</p>
                  <div className="mb-3">
                    {/* Login form */}
                    <Form>
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
                      <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        {/* Checkbox (if needed) */}
                      </Form.Group>
                      {/* Login button */}
                      <div className="d-grid">
                        <Button variant="warning" type="submit">
                          Login
                        </Button>
                      </div>
                      {/* Forgot password link */}
                      <p className="small App mt-4">
                        <a className="text-warning" href="#!">
                          Forgot password?
                        </a>
                      </p>
                    </Form>

                    {/* Signup link */}
                    <div className="mt-3">
                      <p className="mb-0  text-center">
                        Don't have an account?{" "}
                        <a href="{''}" className="text-warning fw-bold">
                          Sign Up
                        </a>
                      </p>
                    </div>
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

export default Login;