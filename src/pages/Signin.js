import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Container = styled.div`
  background-color: white;
  align-items: center;
  justify-content: flex-start; 
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  margin: 0 auto;
  text-align: center;
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
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
  font-family: 'Urbanist', sans-serif;
  font-size: 12px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;


const Signin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
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
      const response = await axios.post('http://localhost:8080/api/signin', formData);

      console.log(response.data); // You can customize this based on your needs
      alert('User registered successfully'); // Display a success message to the user

      // Navigate back to the home page
      navigate('/');
    } catch (error) {
      console.error(error);
      alert('An error occurred. Please try again.'); // Display an error message to the user
    }
  };

  return (
    <Container>
      <div>
        <Navbar />
      </div>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="firstName"
            placeholder="first name"
            value={formData.firstName}
            onChange={handleInputChange}
          />
          <Input
            type="text"
            name="lastName"
            placeholder="last name"
            value={formData.lastName}
            onChange={handleInputChange}
          />
          <Input
            type="text"
            name="username"
            placeholder="username"
            value={formData.username}
            onChange={handleInputChange}
          />
          <Input
            type="email"
            name="email"
            placeholder="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          <Input
            type="password"
            name="password"
            placeholder="password"
            value={formData.password}
            onChange={handleInputChange}
          />
          <Input
            type="password"
            name="confirmPassword"
            placeholder="confirm password"
            value={formData.confirmPassword}
            onChange={handleInputChange}
          />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button type="submit">CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Signin;