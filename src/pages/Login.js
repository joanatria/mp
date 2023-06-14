import styled from "styled-components";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from "../components/Navbar";

const Container = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  text-align: center;
  margin-top: 50px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
  font-family: 'Urbanist', sans-serif;
  font-size: 12px;
`;

const Button = styled.button`
  width: 40%;
  margin-top: 20px;
  border: none;
  padding: 15px 20px;
  background-color: black;
  color: white;
  cursor: pointer;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
`;

const Link = styled.a`
  margin-top: 10px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Make the HTTP POST request to your Spring Boot API
      const response = await axios.post('http://localhost:8080/api/login', formData);

      console.log(response.data); // You can customize this based on your needs
      alert('Login successful'); // Display a success message to the user

      // Redirect to a success page or navigate to another route
      navigate('/');
    } catch (error) {
      console.error(error);
      alert('Invalid username or password. Please try again.'); // Display an error message to the user
    }
  };

  return (
    <Container>
      <Navbar />
      <Wrapper>
        <Title>LOG IN</Title>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="username"
            placeholder="username"
            value={formData.username}
            onChange={handleInputChange}
          />
          <Input
            type="password"
            name="password"
            placeholder="password"
            value={formData.password}
            onChange={handleInputChange}
          />
          <Button type="submit">LOGIN</Button>
          <br/>
          <Link to="/forgot-password">FORGOT PASSWORD?</Link>
          <Link to="/signin">CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;