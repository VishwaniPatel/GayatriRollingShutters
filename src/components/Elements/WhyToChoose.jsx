import React from "react";
import styled from "styled-components";
// Assets
import Quality from "../../assets/svg/Quality.png";
import Customized from "../../assets/svg/Customized.png";
import Delivery from "../../assets/svg/Delivery.png";
import Maintainance from "../../assets/svg/Maintainance.png";

export default function WhyToChoose() {
  return (
    <SliderWrapper>
      <LogoWrapper>
        <img src={Quality} alt="Quality Icon" />
        <TextWrapper>
          <BoldText>QUALITY</BoldText>
        </TextWrapper>
      </LogoWrapper>
      <LogoWrapper>
        <img src={Customized} alt="Customized Icon" />
        <TextWrapper>
          <BoldText>CUSTOMIZED</BoldText>
        </TextWrapper>
      </LogoWrapper>
      <LogoWrapper>
        <img src={Delivery} alt="Delivery Icon" />
        <TextWrapper>
          <BoldText>PROMPT DELIVERY</BoldText>
        </TextWrapper>
      </LogoWrapper>
      <LogoWrapper>
        <img src={Maintainance} alt="Maintainance Icon" />
        <TextWrapper>
          <BoldText>PREVENTIVE SERVICE</BoldText>
        </TextWrapper>
      </LogoWrapper>
    </SliderWrapper>
  );
}

const SliderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  flex-wrap: wrap; /* Allow wrapping for responsive layout */
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 25%; /* Adjust width for responsiveness */
  height: 100px;
  cursor: pointer;
  :focus-visible {
    outline: none;
    border: 0;
  }

  & > div {
    text-align: center;
  }
  
  @media (max-width: 768px) {
    width: 50%; /* Adjust width for smaller screens */
    margin-bottom: 20px;
  }

  @media (max-width: 480px) {
    width: 100%; /* Adjust width for very small screens */
    margin-bottom: 20px;
  }

  img {
    height: 70px;
    width: auto;

    @media (max-width: 768px) {
      height: 50px; /* Adjust height for smaller screens */
    }

    @media (max-width: 480px) {
      height: 40px; /* Adjust height for very small screens */
    }
  }
`;

const TextWrapper = styled.div`
  text-align: center;
  margin-top: 16px;
`;

const BoldText = styled.p`
  font-size: 1em; 
  font-weight: bold;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 0.9em; /* Adjust font size for smaller screens */
  }

  @media (max-width: 480px) {
    font-size: 0.8em; /* Adjust font size for very small screens */
  }
`;
