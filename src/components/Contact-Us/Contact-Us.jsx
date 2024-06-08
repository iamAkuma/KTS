import React from 'react';
import { Form, FormGroup, FormControl, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const StyledForm = styled(Form)`
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  margin: auto;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

const SubmitButton = styled(Button)`
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 5px;
`;

const ContactForm = () => {
    return (
        <StyledForm>
            <Title>CONTACT US</Title>
            <FormGroup>
                <FormControl type="text" placeholder="Full Name" />
            </FormGroup>
            <FormGroup>
                <FormControl type="text" placeholder="Address" />
            </FormGroup>
            <FormGroup>
                <FormControl type="email" placeholder="Email" />
                <FontAwesomeIcon icon={faEnvelope} style={{ marginLeft: 10 }} />
            </FormGroup>
            <FormGroup>
                <FormControl type="tel" placeholder="Phone" />
                <FontAwesomeIcon icon={faPhone} style={{ marginLeft: 10 }} />
            </FormGroup>
            <FormGroup>
                <FormControl as="select">
                    <option>Which course are you interested in?</option>
                    <option>Caregiver / Aged Care</option>
                    {/* Add more options as needed */}
                </FormControl>
            </FormGroup>
            <SubmitButton type="submit">SUBMIT</SubmitButton>
        </StyledForm>
    );
};

export default ContactForm;
