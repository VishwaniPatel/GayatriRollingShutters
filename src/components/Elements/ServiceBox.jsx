import React from "react";
import styled from "styled-components";
// Assets
import GearOperated from "../../assets/img/GearOperated.jpg";
import MotorizedShutter from "../../assets/img/MotorizedShutter.jpg";
import SlidingGate from "../../assets/img/SlidingGate.jpg";
import ManualSlidingGate from "../../assets/img/ManualSlidingGate.jpg";

export default function ServiceBox({image, title, subtitle}) {
  let getImage;

  switch (image) {
    case "GearOperated":
      getImage = GearOperated;
      break;
    case "MotorizedShutter":
      getImage = MotorizedShutter;
      break;
    case "SlidingGate":
      getImage = SlidingGate;
      break;
    case "ManualSlidingGate":
      getImage = ManualSlidingGate;
      break;
    default:
      getImage = MotorizedShutter;
      break;
  }


  return (
    <Wrapper className="flex flexColumn">
      <img className="radius8" src={getImage} alt="Service"></img>
      <TitleStyle className="font20 extraBold">{title}</TitleStyle>
      <SubtitleStyle className="font13">{subtitle}</SubtitleStyle>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;
const IconStyle = styled.div`
  @media (max-width: 860px) {
    margin: 0 auto;
  }
`;
const TitleStyle = styled.h2`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  padding: 40px 0;
  @media (max-width: 860px) {
    padding: 20px 0;
  }
`;
const SubtitleStyle = styled.p`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
`;