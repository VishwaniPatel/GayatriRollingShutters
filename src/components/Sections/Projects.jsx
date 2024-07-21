import React from "react";
import styled from "styled-components";
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

export default function Projects() {
  return (
    <GalleryWrapper id='projects'>
      <div className="container">
      <HeaderInfo>
          <h1 className="font40 extraBold">Our Awesome Projects</h1>
        </HeaderInfo>
        <div className="gallery">
          <div className="gallery-item item1" style={{ backgroundImage: `url(${ProjectImg1})` }}></div>
          <div className="gallery-item item2" style={{ backgroundImage: `url(${ProjectImg2})` }}></div>
          <div className="gallery-item item3" style={{ backgroundImage: `url(${ProjectImg3})` }}></div>
          <div className="gallery-item item4" style={{ backgroundImage: `url(${ProjectImg4})` }}></div>
          <div className="gallery-item item5" style={{ backgroundImage: `url(${ProjectImg5})` }}></div>
          <div className="gallery-item item6" style={{ backgroundImage: `url(${ProjectImg6})` }}></div>
          <div className="gallery-item item7" style={{ backgroundImage: `url(${ProjectImg7})` }}></div>
          <div className="gallery-item item8" style={{ backgroundImage: `url(${ProjectImg8})` }}></div>
          <div className="gallery-item item9" style={{ backgroundImage: `url(${ProjectImg9})` }}></div>
          <div className="gallery-item item10" style={{ backgroundImage: `url(${ProjectImg10})` }}></div>
          <div className="gallery-item item11" style={{ backgroundImage: `url(${ProjectImg11})` }}></div>
        </div>
      </div>
    </GalleryWrapper>
  );
}

const HeaderInfo = styled.div`
margin-bottom:20px;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const GalleryWrapper = styled.section`
  width: 100%;
  padding: 1rem;

  .gallery {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 8px;
  }

  .gallery-item {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
    width: 100%;
  }

  .item1 {
    grid-column: span 2;
    grid-row: span 2;
    height: auto; /* Adjusted height */
  }

  .item2 {
    height: 180px; /* Medium size */
  }

  .item3 {
    height: 180px; /* Medium size */
  }

  .item4 {
   height: 200px; /* Medium size */
   
  }

  .item5 {
    height: 200px; /* Medium size */
  }

  .item6 {
  height: 200px; /* Medium size */
    grid-column: span 1;
    grid-row: span 2;
    height: auto; /* Adjusted height */
  }

  .item7 {
    height: 150px; /* Smaller size */
  }

  .item8 {
    height: 150px; /* Smaller size */
  }

  .item9 {
    height: 250px; /* Smaller size */
  }

  .item10 {
    height: 250px; /* Medium size */
  }

  .item11 {
    height: 250px; /* Medium size */
    margin-bottom:100px
  }


`;
