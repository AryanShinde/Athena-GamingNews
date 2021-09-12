import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";


const Details=()=>{
    const detail=useSelector(store=>store.detail.details);
    const images=useSelector(store=>store.detail.screen);
    const isloading=useSelector(store=>store.detail.isloading);


    return (
        <>
        { !isloading && (<Name>
            <Card>
            {detail.name}
            <img src={detail.background_image} alt="" />
            <div>{detail.description}</div>
            {images.map((image)=>(
                <img src={image.image}></img>
            ))}
            </Card>
        </Name>
        )}
        
        </>
    );
}

const Name=styled.div`
    background-color: rgba(0,0,0,0.5);
    pointer-events: none;
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
`

export default Details;