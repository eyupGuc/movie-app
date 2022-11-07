import styled from "styled-components";


export const MainDiv=styled.div`
display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    margin-top:30px;
    margin-bottom:30px;

`;

export const MainCard=styled.div`
width: 300px;
    height: 500px;
    position: relative;
    overflow: hidden;
    box-shadow: 6px 8px 6px -2px rgba(0,0,0,0.75);

  
`;

export const CardImg=styled.img`
width: 300px;
    height: 450px;
    cursor: pointer;
`;

export const CardBottom=styled.div`
 padding:5px 10px;
    display: flex;
    
    gap:10px;
    align-items: center;
    background-color:rgb(63, 81, 180) !important;
    color: white;
    font-size: 1.2rem;
    font-weight: 700;
    position: relative;
    bottom: 0;
    left: 0;
    width: 300px;
    height: 50px;
    word-wrap: break-word;
    word-break:break-all ;
`;



 