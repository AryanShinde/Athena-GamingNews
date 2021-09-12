import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import {useHistory} from "react-router-dom";


const Details=()=>{
    const detail=useSelector(store=>store.detail.details);
    const images=useSelector(store=>store.detail.screen);
    const isloading=useSelector(store=>store.detail.isloading);
    const history=useHistory();
    const backEventHandler=(e)=>{
        if(e.target.classList.contains("background-detail")){
            history.push("/");
        }
    }

    return (
        <>
        { !isloading && (<Name onClick={backEventHandler} className="background-detail" >
            <Card>
            {detail.name}
            <img src={detail.background_image} alt="" />
            <div>{detail.description}</div>
            {images.map((image)=>(
                <img src={image.image} alt={image} ></img>
            ))}
            </Card>
        </Name>
        )}
        
        </>
    );
}

const Name=styled.div`
    background-color: rgba(0,0,0,0.5);
    padding:4rem;
    width:100%;
    height: 100%;
    position: fixed;
    top:0%;
    left:0%;
    overflow-y: scroll !important;
    min-height: 100vh;
    img{
        padding: 0.4rem;
        width:40rem;
    } 
`
const Card=styled.div`
    min-height: 200vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    left:13%;
    top:2%;
    align-items: center;
    width:60%;
    color: black;
    border-radius: 2rem;
    background-color: white;
    pointer-events: all;
    padding: 2rem;
    padding-bottom: 10rem;
    @media (max-width:786px){
        padding: 2rem;
        left:10%;
        min-height: 20vh;
        width:40%;
        img{
            width:10rem;
        }
    }
`

export default Details;