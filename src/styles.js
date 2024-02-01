import styled from 'styled-components';
import Background from './assets/bg image.png';

export const Container = styled.div`
    background: url("${Background}");
    background-size: cover;   
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    height:100vh
`;

export const Image = styled.img`
margin-top:30px;

    
`;
export const ConteinerItens = styled.div`
    background: linear-gradient(
        157.44deg,
     rgba(255, 255, 255, 0.6) 0.84%,
      rgba(255, 255, 255, 0.6) 0.85%,
       rgba(255, 255, 255, 0.15) 100%
       );
    border-radius: 61px 61px 0px 0px;   
    padding: 50px 36px; 
    display: flex;
    flex-direction: column;
    height: 100vh;
`;
export const H1 = styled.h1`
    color: #FFFFFF;
    font-family: Roboto;
    font-size: 34px;
    font-weight: 700;
    line-height: 40px;
    letter-spacing: 0px;
    text-align: center;
`;
export const InputLabel = styled.p`
    font-family: Roboto;
    font-size: 18px;
    font-weight: 700;
    line-height: 22px;
    letter-spacing: -0.40799999237060547px;
    text-align: left;
    color: #EEEEEE;
    margin-left: 25px;



    
`;
export const Input = styled.input`
    box-shadow: 0px 4px 4px 0px #00000040;
    background: #FFFFFF40;
    width: 342px;
    height: 58px;
    top: 193px;
    left: 36px;
    padding: 15px, 20px, 15px, 25px;
    border-radius: 14px;

    padding-left:25px;


    border: none;
    outline: none;

    margin-bottom: 34px;


    font-size: 20px;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0px;
    text-align: left;
    color: #FFFFFF;





    
`;
export const Button = styled.button`

    width: 342px;
    height: 74px;

    background: #000000CC;
    border-radius: 14px;
    border: none;

    font-style: normal;
    font-size: 17px;
    font-weight: bold;
    line-height: 28px;

    color: #FFFFFF;

    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;





    
`;