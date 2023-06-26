'use client'
import React,{useReducer, useState} from 'react';
import './WriteUsForm.css'
import {Form} from 'react-bootstrap';
import Input from '../Input/Input';
import { VALIDATOR_EMAIL, VALIDATOR_REQUIRE } from '../validator';

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
    console.log(state);
    console.log(action);
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
 function WriteUsForm(){
    const [formState, dispatch] = useReducer(formReducer, {
        inputs: {
          Email: {
            value: '',
            isValid: false,
          },
          Surname: {
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
    
      const inputHandler = (
        id: string,
        value: string,
        isValid: boolean
      ): void => {
        dispatch({
          type: 'INPUT_CHANGE',
          value: value,
          isValid: isValid,
          inputId: id,
        });
      };

    return<>
    <Form className="submit-form">
        <div className="input-holder">
        <Input
            id="Name"
            element="input"
            type="text"
            placeholder=""
            label="Emri juaj?*"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Duhet të shenoni emrin tuaj."
            onInput={inputHandler}    
            />
        </div>
        <div className="input-holder">
            <Input
            id="Mbiemri"
            element="input"
            type="text"
            placeholder=""
            label="Mbiemri juaj?*"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Duhet të shënoni mbiemrin tuaj."
            onInput={inputHandler}    
            />
            </div>

            <div className="input-holder">
            <Input
            id="Email"
            element="input"
            type="text"
            placeholder=""
            label="Email juaj?*"
            validators={[VALIDATOR_REQUIRE(), VALIDATOR_EMAIL()]}
            errorText="Duhet të shenoni email-in tuaj."
            onInput={inputHandler}    
            />
            </div>
            <div className="input-holder">
            <Input 
                id="Request"
                element="textarea"
                type="text"
                label="Kërkesa juaj*"
                rows={5}
                placeholder=""
                validators={[VALIDATOR_REQUIRE()]}
                errorText="Duhet të shënoni kërkesën tuaj."
                onInput={inputHandler} 
                />
            </div>

            <div className="form-buttons-holder">
                
            </div>
    </Form>
    </>
  }
  
  export default WriteUsForm;