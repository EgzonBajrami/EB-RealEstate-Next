'use client'
import { Cloudinary } from "@cloudinary/url-gen";
import React,{useReducer, useCallback, useState, useRef} from 'react';
import './BanesaForm.css'
import {Form} from 'react-bootstrap';
import Input from '../Input/Input';
import {  VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH, VALIDATOR_MIN,  VALIDATOR_MAXLENGTH, VALIDATOR_FILE} from '../validator.js';

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
 export default function BanesaForm(){
  
  const cld:any = new Cloudinary({cloud: {cloudName: 'dhylul5fj'}});
    const [successQuote, setSuccessQuote] = useState<boolean>();
    const [message, setMessage] = useState<string>();
    const [imagesUpload, setImagesUpload] = useState<string[]>([""]);
    const imageRef = useRef<HTMLInputElement | null>(null);
    const fileRef2 = useRef<HTMLInputElement | null>(null);
    const fileRef3 = useRef<HTMLInputElement | null>(null);
    const fileRef4 = useRef<HTMLInputElement | null>(null);
    const fileRef5 = useRef<HTMLInputElement | null>(null);
    console.log(Object.keys(cld));
    const [formState, dispatch] = useReducer(formReducer, {
        inputs: {
      
     
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

      const handleMoreImages = async(e:React.SyntheticEvent) =>{
        e.stopPropagation();
        const tempItems = [...imagesUpload];
        tempItems.push("");
        setImagesUpload(tempItems);
      }

      console.log(imagesUpload);

      const handleImageChange = async (e:React.SyntheticEvent) =>{
        e.preventDefault();
        e.stopPropagation();
        if(imageRef.current){
          if(imageRef.current.files){
            changeImage(imageRef.current.files[0])
          }
       
        }
    }

    const handleImageChange2 = async (e:React.SyntheticEvent) =>{
        e.preventDefault();
        e.stopPropagation();
        if(fileRef2.current){
          if(fileRef2.current.files){
            changeImage(fileRef2.current.files[0])
          }
       
        }
      
    }

    const handleImageChange3 = async (e:React.SyntheticEvent) =>{
        e.preventDefault();
        e.stopPropagation();
        if(fileRef3.current){
          if(fileRef3.current.files){
            changeImage(fileRef3.current.files[0])
          }
       
        }
      
    }


    const handleImageChange5 = async (e:React.SyntheticEvent) =>{
        e.preventDefault();
        e.stopPropagation();
        if(fileRef5.current){
          if(fileRef5.current.files){
            changeImage(fileRef5.current.files[0])
          }
       
        }
      
    }

    const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
          changeImage(event.target.files[0]);
        }
      };

    const changeImage = async(file:File)=>{
   

      try {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', 'qpzcuujp');
        const response = await fetch(`https://api.cloudinary.com/v1_1/dhylul5fj/image/upload`, {
          method: 'POST',
          body: formData,
        });
    
        if (response.ok) {
          const result = await response.json();
          const imageUrl = result.secure_url;
          let currentImageUrls = [...imagesUpload];
          if(currentImageUrls[0]===""){
            currentImageUrls[0] = imageUrl;
          }else{
            currentImageUrls.push(imageUrl);
          }
          setImagesUpload(currentImageUrls);
          console.log('Image uploaded successfully. URL:', imageUrl);
    
          // Do something with the image URL, such as saving it to a database or displaying it in your app
        } else {
          throw new Error('Failed to upload image');
        }
      } catch (error) {
        console.error('Error uploading image:', error);
      }
 
    }
    console.log(imagesUpload);

      const handleSubmit = async (e:React.SyntheticEvent)=>{
        e.preventDefault();
        const imageData = [...imagesUpload];
        imageData.shift();
        console.log(imageData);
        const data = {
            title:formState.inputs.Name.value,
            text:formState.inputs.Teksti.value,
            city:formState.inputs.Qyteti.value,
            rooms:formState.inputs.DhomaGjumi.value,
            bathroom:formState.inputs.Banjo.value,
            space:formState.inputs.Metra.value,
            price:formState.inputs.Cmimi.value,
            type:formState.inputs.Qera.value,
            latitude:formState.inputs.Latituda.value,
            longitude:formState.inputs.Longituda.value,
            images:imagesUpload
        }
        console.log(data);
        const result = await fetch('/api/apartmentadd',
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
            setMessage("Postimi u shtua")
        
          }else{
            setSuccessQuote(false);
            setMessage("Diqka nuk eshte ne rregull, provo prap!")
            setTimeout(()=>{
              setSuccessQuote(true)
              setMessage("")
            },5000)
          }
      }

    return<>
    <div className="reachout-me">
        Welcome to E.B Real Estate! Shto apartment!
    </div>
    <Form className="submit-form"
    onSubmit={handleSubmit}>
        <div className="input-holder">
        <Input
            id="Name"
            element="input"
            type="text"
            placeholder=""
            label="Titulli i postimit:*"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Duhet te shenosh titullin e postimit."
            onInput={inputHandler}    
            />
        </div>
     

        <div className="input-holder">
            <Input
            id="Qyteti"
            element="input"
            type="text"
            placeholder=""
            label="Qyteti:*"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Duhet te shenosh qytetin."
            onInput={inputHandler}    
            />
        </div>

        <div className="input-holder">
            <Input
            id="Teksti"
            element="textarea"
          
            placeholder=""
            label="Teksti:*"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="You must enter your email."
            onInput={inputHandler}    
            />
        </div>

        <div className="input-grid">
     
            <div className="input-holder">
                <Input 
                id="DhomaGjumi"
                element="input"
                type="number"
                placeholder=""
                label="Dhoma gjumi:*"
                validators={[VALIDATOR_REQUIRE(), VALIDATOR_MIN(1)]}
                errorText="Minimumi 1"
                onInput={inputHandler}
                />
            </div>
            <div className="input-holder">
                <Input
                id="Banjo"
                element="input"
                type="number"
                placeholder=""
                label="Numri i banjove:*"
                validators={[VALIDATOR_REQUIRE(), VALIDATOR_MIN(1)]}
                errorText="Minimumi 1"
                onInput={inputHandler}
                />
            </div>

            <div className="input-holder">
                <Input
                id="Metra"
                element="input"
                type="number"
                placeholder=""
                label="Numri i metrave katror:*"
                validators={[VALIDATOR_REQUIRE(), VALIDATOR_MIN(1)]}
                errorText="Minimumi 1"
                onInput={inputHandler}
                />
            </div>
                
        </div>

        <div className="input-grid">
            <div className="input-holder">
                    <Input
                    id="Cmimi"
                    element="input"
                    type="number"
                    placeholder=""
                    label="Cmimi i baneses:*"
                    validators={[VALIDATOR_REQUIRE(), VALIDATOR_MIN(100)]}
                    errorText="Minimumi 100"
                    onInput={inputHandler}
                    />
            </div> 
            <div className="input-holder">
                    <Input
                    id="Qera"
                    element="input"
                    type="text"
                    placeholder=""
                    label="Qera/Shitje:*"
                    validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(2), VALIDATOR_MAXLENGTH(2)]}
                    errorText="Min/Max 2"
                    onInput={inputHandler}
                    />
            </div>
        </div>

        <div className="input-grid">
            <div className="input-holder">
                    <Input
                    id="Latituda"
                    element="input"
                    type="number"
                    placeholder=""
                    label="Latituda ne google:*"
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText="Sheno latituden"
                    onInput={inputHandler}
                    />
            </div> 
            <div className="input-holder">
                    <Input
                    id="Longituda"
                    element="input"
                    type="text"
                    placeholder=""
                    label="Longituda ne google:*"
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText="Sheno longituden"
                    onInput={inputHandler}
                    />
            </div>
        </div>

        <div className="input-grid">
          
                <div className="input-holder">
                    <input 
                    ref={imageRef}
                    type="file"
                    name="image"
                    accept="image/png, image/jpeg, image/webp"
                    onChange={handleImageChange}
                    />
                </div>

                <div className="input-holder">
                    <input 
                    ref={fileRef2}
                    type="file"
                    name="image"
                    accept="image/png, image/jpeg, image/webp"
                    onChange={handleImageChange2}
                    />
                </div>

                <div className="input-holder">
                    <input 
                    ref={fileRef3}
                    type="file"
                    name="image"
                    accept="image/png, image/jpeg, image/webp"
                    onChange={handleImageChange3}
                    />
                </div>

                <div className="input-holder">
                    <input 
                    ref={fileRef4}
                    type="file"
                    name="image"
                    accept="image/png, image/jpeg, image/webp"
                    onChange={handleFileSelect}
                    />
                </div>

                <div className="input-holder">
                    <input 
                    ref={fileRef5}
                    type="file"
                    name="image"
                    accept="image/png, image/jpeg, image/webp"
                    onChange={handleImageChange5}
                    />
                </div>
        </div>

        <div className="add-more-images">
            <button type="button" onClick={()=>handleMoreImages}>Add more</button>
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