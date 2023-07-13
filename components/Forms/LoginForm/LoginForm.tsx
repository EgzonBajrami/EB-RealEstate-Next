'use client'
import React,{useReducer, useCallback, useState} from 'react';
import './LoginForm.css'
import {Form} from 'react-bootstrap';
import Input from '../Input/Input';
import { VALIDATOR_EMAIL, VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from '../validator.js';
import  {useRouter}  from 'next/navigation';
import {useDispatch} from 'react-redux';
import { login } from '../../../lib/store/slices/auth';
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
 export default function LoginForm(){
    const dispatcher = useDispatch();
    const [successQuote, setSuccessQuote] = useState<boolean>();
    const [message, setMessage] = useState<string>();
    const router = useRouter()

    const [formState, dispatch] = useReducer(formReducer, {
        inputs: {
          Email: {
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
    
            email:formState.inputs.Email.value,
            password:formState.inputs.Password.value
        }
        console.log(data);
        const result = await fetch('/api/login',
        {
          headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
          },
          method:'POST',
          body:JSON.stringify({data})
        })
      
      
        if(result.ok){
            const finalData = await result.json();
        
            setSuccessQuote(true);
            setMessage("You have successfully logged in!")
            dispatcher(login(finalData))
            setTimeout(()=>{
                router.push('/');
            },3000) 
        
          }else{
            setSuccessQuote(false);
            setMessage("Email or password is incorrect!")
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