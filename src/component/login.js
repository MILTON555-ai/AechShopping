import '../styles/login.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function LogIn() {

  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let navigate = useNavigate();

  let handleSubmit = () => {
    if (email == "user@gmail.com" && password == 1234) {
      navigate("/home");
    } else {
      alert("invalid username or password");
    }
  };

  return (
    <div className='login'>
    <div className="login-form">
    <Form onSubmit={handleSubmit}  className="my-5 mx-5">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={email}
              onChange={(e) => setEmail(e.target.value)} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={password}
              onChange={(e) => setPassword(e.target.value)} />
      </Form.Group>
      
      <Button className="" variant="primary" type="submit">
        Login
      </Button>
    </Form>
    </div>
    </div>
  );
}

export default LogIn;