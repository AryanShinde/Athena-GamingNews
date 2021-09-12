import React from "react";
import logo from "./logo.png"
import styled from "styled-components";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { SearchAction } from "../actions/searchAction";

 const Nav=()=>{
    const [query,setQuery]=useState("");

    const searchHandler=(e)=>{
    const value=e.target.value;
    setQuery(value);
    }
    const dispatch=useDispatch();
    const submitHandler=(e)=>{
        e.preventDefault();
        dispatch(SearchAction(query));
    }
    return (
        <NavComponent>
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <form onSubmit={submitHandler} className="search">
                <input type="text" onChange={searchHandler} />
                <button>Search</button>
            </form>
        </NavComponent>
    )
}

const NavComponent=styled.div`
display: flex;
justify-content: center;
align-items: center;
img{
    width: 100px;
    height:200px;
    
}
input{
    padding:0.6rem;
    box-shadow: 0px 0px 12px #8881d1;
    outline: none;
    border: none;
    font-size: large;
    @media (max-width:786px){
        font-size:10px ;
    }
}
button{
    padding:0.6rem;
    border:none;
    background: #d63636;
    color:white;
    cursor:pointer;
    font-size: large;
    @media (max-width:786px){
        font-size:10px ;
    }
}
`
export default Nav;