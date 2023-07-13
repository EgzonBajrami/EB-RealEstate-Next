'use client'
import React,{useReducer, useCallback, useState} from 'react';
import './RegisterForm.css'
import {Form} from 'react-bootstrap';
import Input from '../Input/Input';
import { VALIDATOR_EMAIL, VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from '../validator.js';

interface FormInputItem {
    value: string;
    isValid: boolean;
  }
  
  interface FormInput {
    [key: string]: FormInputItem; 

  }


  interface FormStateProps {
    inputs: FormInput;
    isValid: boolean;
  }
  
  interface ActionProps {
    type: string;
    value: string;
    isValid: boolean;
    inputId: string;
  }
  
const formReducer = (state:FormStateProps, action:ActionProps) => {

    switch (action.type) {
      case 'INPUT_CHANGE':
        let formIsValid = true;
        for (const inputId in state.inputs) {
          if (inputId === action.inputId) {
            formIsValid = formIsValid && action.isValid;
          } else {
            formIsValid = formIsValid && state.inputs[inputId].isValid;
          }
        }
        return {
          ...state,
          inputs: {
            ...state.inputs,
            [action.inputId]: { value: action.value, isValid: action.isValid }
          },
          isValid: formIsValid
        };
      default:
        return state;
    }
  };
 export default function RegisterForm(){

    const [successQuote, setSuccessQuote] = useState<boolean>();
    const [message, setMessage] = useState<string>();

    const [formState, dispatch] = useReducer(formReducer, {
        inputs: {
          Email: {
            value: '',
            isValid: false,
          },
     
          Name: {
            value: '',
            isValid: false,
          },
        },
        isValid: false,
      });
      const inputHandler = useCallback((id: string, value: string, isValid: boolean) => {
        dispatch({
          type: 'INPUT_CHANGE',
          value: value,
          isValid: isValid,
          inputId: id
        });
      }, []);

      const handleSubmit = async (e:React.SyntheticEvent)=>{
        e.preventDefault();
        const data = {
            name:formState.inputs.Name.value,
            email:formState.inputs.Email.value,
            password:formState.inputs.Password.value
        }
        console.log(data);
        const result = await fetch('/api/register',
        {
          headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
          },
          method:'POST',
          body:JSON.stringify({data})
        })
        console.log(result);
        if(result.ok){
            setSuccessQuote(true);
            setMessage("Your message has been received!")
        
          }else{
            setSuccessQuote(false);
            setMessage("Something went wrong when sending your message, please try again!")
            setTimeout(()=>{
              setSuccessQuote(true)
              setMessage("")
            },5000)
          }
      }

    return<>
    <div className="reachout-me">
        Welcome to E.B Real Estate, fill out this form to register!
    </div>
    <Form className="submit-form"
    onSubmit={handleSubmit}>
        <div className="input-holder">
        <Input
            id="Name"
            element="input"
            type="text"
            placeholder=""
            label="Your full name:*"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="You must enter your name."
            onInput={inputHandler}    
            />
        </div>
     

        <div className="input-holder">
            <Input
            id="Email"
            element="input"
            type="text"
            placeholder=""
            label="Your email:*"
            validators={[VALIDATOR_REQUIRE(), VALIDATOR_EMAIL()]}
            errorText="You must enter your email."
            onInput={inputHandler}    
            />
        </div>
        <div className="input-holder">
            <Input 
            id="Password"
            element="input"
            type="password"
            placeholder=""
            label="Enter the password:*"
            validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(6)]}
            errorText="You must enter the password and it has to be minimum 6 characters long."
            onInput={inputHandler}
            />
        </div>
        <div className="input-holder">
            <Input
            id="ConfirmPw"
            element="input"
            type="password"
            placeholder=""
            label="Confirm password:*"
            validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(6)]}
            errorText="You must confirm the password and it must be the same as the initial password."
            onInput={inputHandler}
            />
        </div>

            <div className="form-buttons-holder">
                {formState.isValid ? (<>
                <button type="submit" className="valid-btn">Submit</button></>):(<>
                    <button disabled>Submit</button>
                </>)}
           
            </div>
            <div className="request-response">
                    {message && message.length>0 &&(<>
                        {successQuote ?(<div className="success-handler">
                            <p>{message}</p>
                        </div>):(
                            <div className="error-handler">
                                <p>{message}</p>
                            </div>
                        )}
                    </>)}
                </div>
    </Form>
    </>
  }