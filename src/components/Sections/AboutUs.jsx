import React from "react";
import styled from "styled-components";
// Components
import AddImage2 from "../../assets/img/add/add2.jpg";
import WhyToChoose from "../Elements/WhyToChoose";
export default function AboutUs() {
  return (
    <Wrapper id="aboutus">
      <div className="lightBg">
      <div className="container">
          <Advertising className="flexSpaceCenter">
            <AddLeft>
              <AddLeftInner>
                <ImgWrapper className="flexCenter">
                  <img className="radius8" src={AddImage2} alt="add" />
                </ImgWrapper>
              </AddLeftInner>
            </AddLeft>
            <AddRight>
              <h2 className=" semiBold">A few words about company</h2>
              <p className="font12">
              Welcome to Gayatri Rolling Shutters and Fabricators, your trusted partner in rolling shutters and fabrications since 2000. With over two decades of experience in the industry, we have established ourselves as a leading manufacturer and service provider in India.

Our journey began with a vision to deliver high-quality rolling shutters and custom fabrication solutions. Today, we proudly stand at the forefront of the industry, known for our commitment to excellence, innovation, and customer satisfaction.

At Gayatri Rolling Shutters and Fabricators, we specialize in designing, manufacturing, and installing a diverse range of rolling shutters and fabricated products tailored to meet our clients' needs. Our dedication to using superior materials and adhering to stringent safety standards ensures that our products not only meet but exceed industry expectations.

              </p>
            
            </AddRight>
          </Advertising>
        </div>
      </div>
      <div className="whiteBg" style={{ padding: "50px 0" }}>
        <div className="container">
      <WhyToChoose/>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  padding-top: 20px;
`;

const Advertising = styled.div`
  padding: 100px 0;
  position: relative;
  @media (max-width: 1160px) {
    padding: 60px 0 40px 0;
  }
  @media (max-width: 860px) {
    flex-direction: column;
    padding: 0 0 30px 0;
    margin: 80px 0 0px 0;
  }
`;
const AddLeft = styled.div`
  position: relative;
  width: 50%;
  p {
    max-width: 475px;
  }
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
    text-align: center;
    h2 {
      line-height: 3rem;
      margin: 15px 0;
    }
    p {
      margin: 0 auto;
    }
  }
`;
const AddRight = styled.div`
  width: 50%;
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
  }
`;
const AddLeftInner = styled.div`
  width: 100%;
  position: absolute;
  top: -300px;
  left: 0;
  @media (max-width: 1190px) {
    top: -250px;
  }
  @media (max-width: 920px) {
    top: -200px;
  }
  @media (max-width: 860px) {
    order: 1;
    position: relative;
    top: -60px;
    left: 0;
  }
`;
const ImgWrapper = styled.div`
  width: 100%;
  padding: 0 15%;
  img {
    width: 100%;
    height: auto;
  }
  @media (max-width: 400px) {
    padding: 0;
  }
`;
