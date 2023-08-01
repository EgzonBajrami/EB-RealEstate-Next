'use client'
import { Cloudinary } from "@cloudinary/url-gen";
import { useSelector } from "react-redux";
import React,{useReducer, useCallback, useState, useRef} from 'react';
import './EditItemForm.css'
import {Form} from 'react-bootstrap';
import EditInput from "../EditInput/EditInput";
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
 export default function EditItemForm({data, type}:any){
  console.log(data);
  console.log(type);
  const auth = useSelector((state:any)=>state.auth.data)
  const cld:any = new Cloudinary({cloud: {cloudName: 'dhylul5fj'}});
    const [successQuote, setSuccessQuote] = useState<boolean>();
    const [message, setMessage] = useState<string>();
    const [imagesUpload, setImagesUpload] = useState<string[]>(data.images);
    const imageRef = useRef<HTMLInputElement | null>(null);
    const fileRef2 = useRef<HTMLInputElement | null>(null);
    const fileRef3 = useRef<HTMLInputElement | null>(null);
    const fileRef4 = useRef<HTMLInputElement | null>(null);
    const fileRef5 = useRef<HTMLInputElement | null>(null);
    console.log(Object.keys(cld));
    const [formState, dispatch] = useReducer(formReducer, {
        inputs: {
    
          Name: {
            value: data.title,
            isValid: false,
          },
        },
        isValid: false,
      });
      console.log(formState);
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
    const id = data.id
      const handleSubmit = async (e:React.SyntheticEvent)=>{
        e.preventDefault();
        const imageData = [...imagesUpload];
        imageData.shift();
       
        let data = {
     
        }

        if(type==="banesa"){
            console.log('ss')
            data = {
                id:id,
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
        }

        if(type==="shtepia"){
            data = {
                id:id,
                title:formState.inputs.Name.value,
                text:formState.inputs.Teksti.value,
                city:formState.inputs.Qyteti.value,
                rooms:formState.inputs.DhomaGjumi.value,
                bathroom:formState.inputs.Banjo.value,
                floors:formState.inputs.Kat.value,
                space:formState.inputs.Metra.value,
                price:formState.inputs.Cmimi.value,
                type:formState.inputs.Qera.value,
                latitude:formState.inputs.Latituda.value,
                longitude:formState.inputs.Longituda.value,
                images:imagesUpload   
            }
        }

        if(type==='lokale'){
            data = {
                id:id,
                title:formState.inputs.Name.value,
                text:formState.inputs.Teksti.value,
                city:formState.inputs.Qyteti.value,
                rooms:formState.inputs.DhomaGjumi.value,
                space:formState.inputs.Metra.value,
                price:formState.inputs.Cmimi.value,
                type:formState.inputs.Qera.value,
                latitude:formState.inputs.Latituda.value,
                longitude:formState.inputs.Longituda.value,
                images:imagesUpload
            }
        }

        if(type==='prona'){
            data = {
                id:id,
                title:formState.inputs.Name.value,
                text:formState.inputs.Teksti.value,
                city:formState.inputs.Qyteti.value,
                space:formState.inputs.Metra.value,
                price:formState.inputs.Cmimi.value,
                type:formState.inputs.Qera.value,
                latitude:formState.inputs.Latituda.value,
                longitude:formState.inputs.Longituda.value,
                images:imagesUpload
            }
        }
        const result = await fetch(`/api/edit${type}`,
        {
          headers:{
            'Accept':'application/json',
            'Content-Type':'application/json',
            'Authorization': `Bearer ${auth.token}`,
          },
          method:'POST',
          body:JSON.stringify({data})
        })
        console.log(result);
        if(result.ok){
            setSuccessQuote(true);
            setMessage("Postimi u editua")
        
          }else{
            setSuccessQuote(false);
            setMessage("Diqka nuk eshte ne rregull, provo prap!")
            setTimeout(()=>{
              setSuccessQuote(true)
              setMessage("")
            },5000)
          }
      }

      const handleItemRemove = async(e:React.SyntheticEvent) =>{
       e.stopPropagation();
        let deleteData = {
            id:id,
            type:type
        }
        console.log(deleteData);
        const result = await fetch(`/api/deletebanesa`,{
            method:"POST",
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json',
                'Authorization': `Bearer ${auth.token}`,
              },
              body:JSON.stringify(deleteData)
        })
       console.log(result);
       console.log('clicked');
      }

    return<>
    {data && (<>
    <div className="reachout-me">
        Welcome to E.B Real Estate! Shto apartment!
    </div>
    <Form className="submit-form"
    onSubmit={handleSubmit}>
        <div className="input-holder">
        <EditInput
            id="Name"
            latestData={data.title}
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
            <EditInput
            id="Qyteti"
            latestData={data.city}
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
            <EditInput
            id="Teksti"
            element="textarea"
            latestData={data.text}
            placeholder=""
            label="Teksti:*"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="You must enter your email."
            onInput={inputHandler}    
            />
        </div>

        <div className="input-grid">
         {(type==="banesa" || type==="shtepia" || type==="lokale") &&(
            <div className="input-holder">
                <EditInput 
                id="DhomaGjumi"
                latestData={data.rooms}
                element="input"
                type="number"
                placeholder=""
                label="Dhoma gjumi:*"
                validators={[VALIDATOR_REQUIRE(), VALIDATOR_MIN(1)]}
                errorText="Minimumi 1"
                onInput={inputHandler}
                />
            </div>
            )}

            {(type==="banesa" || type==="shtepia") && (
            <div className="input-holder">
                <EditInput
                id="Banjo"
                element="input"
                latestData={data.bathroom}
                type="number"
                placeholder=""
                label="Numri i banjove:*"
                validators={[VALIDATOR_REQUIRE(), VALIDATOR_MIN(1)]}
                errorText="Minimumi 1"
                onInput={inputHandler}
                />
            </div>
            )}

            <div className="input-holder">
                <EditInput
                id="Metra"
                element="input"
                latestData={data.space}
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

            {type==="shtepia" && (<>
                <Input
                id="Kat"
                latestData={data.floors}
                element="input"
                type="number"
                placeholder=""
                label="Numri i kateve:*"
                validators={[VALIDATOR_REQUIRE(), VALIDATOR_MIN(1)]}
                errorText="Minimumi 1"
                onInput={inputHandler}
                />
            </>)}
            <div className="input-holder">
                    <EditInput
                    id="Cmimi"
                    latestData={data.price}
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
                    <EditInput
                    id="Qera"
                    latestData={data.type}
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
                    <EditInput
                    id="Latituda"
                    latestData={data.latitude}
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
                    <EditInput
                    id="Longituda"
                    latestData={data.longitude}
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
                
                <button type="submit" className="valid-btn">Submit</button>
                <button type="button" onClick={(e)=>handleItemRemove(e)} className="remove-item-btn">Delete</button>
           
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
    </>)}
    </>
  }