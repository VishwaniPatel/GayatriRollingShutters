import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
// Assets
import ProjectImg1 from "../../assets/img/projects/1.jpg";
import ProjectImg2 from "../../assets/img/projects/2.jpg";
import ProjectImg3 from "../../assets/img/projects/3.jpg";
import ProjectImg4 from "../../assets/img/projects/4.jpg";
import ProjectImg5 from "../../assets/img/projects/5.jpg";
import ProjectImg6 from "../../assets/img/projects/6.jpg";
import ProjectImg7 from "../../assets/img/projects/7.jpg";
import ProjectImg8 from "../../assets/img/projects/8.jpg";
import ProjectImg9 from "../../assets/img/projects/9.jpg";
import ProjectImg10 from "../../assets/img/projects/10.jpeg";
import ProjectImg11 from "../../assets/img/projects/11.jpg";
import ProjectImg12 from "../../assets/img/projects/12.jpg";
import ProjectImg13 from "../../assets/img/projects/13.jpg";
import ProjectImg14 from "../../assets/img/projects/14.jpg";
import ProjectImg15 from "../../assets/img/projects/15.jpg";
import ProjectImg16 from "../../assets/img/projects/16.jpg";
import ProjectImg17 from "../../assets/img/projects/17.jpg";
import ProjectImg18 from "../../assets/img/projects/18.jpg";
import ProjectImg19 from "../../assets/img/projects/19.jpg";
import ProjectImg20 from "../../assets/img/projects/20.jpg";

export default function Projects() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const images = [
    ProjectImg1, ProjectImg2, ProjectImg3, ProjectImg4, ProjectImg5,
    ProjectImg6, ProjectImg7, ProjectImg8, ProjectImg9, ProjectImg10,
    ProjectImg11, ProjectImg12, ProjectImg13, ProjectImg14, ProjectImg15,
    ProjectImg16, ProjectImg17, ProjectImg18, ProjectImg19, ProjectImg20,
  ];

  return (
    <GalleryWrapper id="projects">
      <div className="container">
        <HeaderInfo>
          <h1 className="font40 extraBold">Our Awesome Projects</h1>
        </HeaderInfo>
        <Slider {...settings}>
          {images.map((img, idx) => (
            <div key={idx} className="gallery-slide">
              <ImageWrapper style={{ backgroundImage: `url(${img})` }}></ImageWrapper>
            </div>
          ))}
        </Slider>
      </div>
    </GalleryWrapper>
  );
}

const HeaderInfo = styled.div`
  margin-bottom: 20px;
  @media (max-width: 860px) {
    text-align: center;
  }
`;

const GalleryWrapper = styled.section`
  width: 100%;
  padding: 1rem;
 margin-bottom: 4rem; 
  .slick-slider {
    margin-bottom: 2rem; /* Add bottom margin */
  }

  .slick-slide {
    padding: 0 8px; /* Add horizontal padding between slides */
  }
`;

const ImageWrapper = styled.div`
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 300px; /* Adjust height as needed */
  margin-bottom: 8px; /* Space between rows */
  @media (max-width: 768px) {
    height: 150px; /* Adjust height for smaller screens */
  }
  @media (max-width: 480px) {
    height: 100px; /* Adjust height for very small screens */
  }
`;
