import React from "react";
import styled from "styled-components";
// Assets
import StarIcon from "../../assets/svg/StarIcon.png";
import UserIcon from "../../assets/svg/UserIcon.png";
import InstallationIcon from "../../assets/svg/InstallationIcon.png";
import ProductIcon from "../../assets/svg/ProductIcon.png";

export default function ClientSlider() {
  return (
    <SliderWrapper>
      <LogoWrapper>
        <img src={StarIcon} alt="Star Icon" />
        <TextWrapper>
          <BoldText>24+</BoldText>
          <BoldSubText>Years of Excellence</BoldSubText>
        </TextWrapper>
      </LogoWrapper>
      <LogoWrapper>
        <img src={UserIcon} alt="User Icon" />
        <TextWrapper>
          <BoldText>280+</BoldText>
          <BoldSubText>Happy Clients</BoldSubText>
        </TextWrapper>
      </LogoWrapper>
      <LogoWrapper>
        <img src={InstallationIcon} alt="Installation Icon" />
        <TextWrapper>
          <BoldText>400+</BoldText>
          <BoldSubText>Accomplished Projects</BoldSubText>
        </TextWrapper>
      </LogoWrapper>
      <LogoWrapper>
        <img src={ProductIcon} alt="Product Icon" />
        <TextWrapper>
          <BoldText>2000+</BoldText>
          <BoldSubText>Products Installed</BoldSubText>
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
    height: 50px;
    width: auto;

    @media (max-width: 768px) {
      height: 40px; /* Adjust height for smaller screens */
    }

    @media (max-width: 480px) {
      height: 30px; /* Adjust height for very small screens */
    }
  }
`;

const TextWrapper = styled.div`
  text-align: center;
  margin-top: 8px;
`;

const BoldText = styled.p`
  font-size: 2em; 
  font-weight: bold;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1.5em; /* Adjust font size for smaller screens */
  }

  @media (max-width: 480px) {
    font-size: 1.2em; /* Adjust font size for very small screens */
  }
`;

const BoldSubText = styled.p`
  font-weight: bold;
  margin: 0;
  
  @media (max-width: 768px) {
    font-size: 0.9em; /* Adjust font size for smaller screens */
  }

  @media (max-width: 480px) {
    font-size: 0.8em; /* Adjust font size for very small screens */
  }
`;
