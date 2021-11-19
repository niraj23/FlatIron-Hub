import React from "react";
import { useState } from "react";
import Button from '@mui/material/Button';
import styled from 'styled-components'


function AddLearn({onAddLearn}){
    const [name, setName] = useState("")
    const [description, setDescription] = useState ("")
    const [image, setImage] = useState("")
    const [url, setUrl] = useState("")
    const [postdate, setPostDate] = useState("")
    const [postername, setPosterName] = useState("")

    
    function handleSubmit (e) {
        e.preventDefault();
        fetch ("https://my-cool-projs.herokuapp.com/learnItems", {
            method: "POST",
            headers: {
          "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name,
                description: description,
                image: image,
                url: url,
                postdate: postdate,
                postername: postername
            }),
        })
            .then((res) => res.json())
            .then((newLearnItem) => onAddLearn(newLearnItem));
        }        
        return (
            <div className="ui segment" style={{backgroundColor: 'transparent'}}>
              <HeadContainer>
                <h1 style={{alignContent: 'center'}}> Upload Your Resources Here!</h1>
              <form onSubmit = {handleSubmit} className="ui form" style={{opacity: '0.9'}}>
                <div className="inline fields">
                 
                  <input
                  type="text"
                  name=""
                  value = {postername}
                  onChange ={(e) => setPosterName(e.target.value)}
                  placeholder= "Enter Author Name"
                  />
                   <input
                  type="date"
                  name="date"
                  value = {postdate}
                  onChange ={(e) => setPostDate(e.target.value)}
                  />
                   <input 
                  type="text"
                  name="title"
                  value ={name}
                  onChange={(e)=> setName(e.target.value)}
                  placeholder="Enter Title"
                  />
                  <input
                  type="text"
                  name="description"
                  value ={description}
                  onChange={(e)=> setDescription(e.target.value)}
                  placeholder= "Enter Description"
                  />
                  <input
                  type="text"
                  name="image"
                  value = {image}
                  onChange ={(e) => setImage(e.target.value)}
                  placeholder = "Enter Image Link"
                  />
                  <input
                  type="text"
                  name="url"
                  value = {URL}
                  onChange ={(e) => setUrl(e.target.value)}
                  placeholder= "URL Link here"
                  />
                </div>
                <Button style={{alignItems: 'center'}} className="ui button" variant = "contained" type="submit">
                  Add Your Resource
                </Button>
              </form>
              </HeadContainer>
            </div>
          );  
}
export default AddLearn;

const HeadContainer = styled.div`
    h1{
        text-align: center;
        font-size: 4rem;
        font-family: 'Permanent Marker', cursive;
        background: -webkit-linear-gradient(#fc1100, #ff9b94);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        padding-bottom: 20px;
    }
    Button{
      width:100%; height:100%; border: 1px solid;
      opacity: 0.9;
    }
  `