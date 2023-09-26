"use client"
import Link from 'next/link';
 import Image from 'next/image';
 import node from "@/acces/tecnologias/node.png";
import css from "@/acces/tecnologias/css.png";
 import react from "@/acces/tecnologias/react.png";
 import js from "@/acces/tecnologias/js.png";
 import redux from "@/acces/tecnologias/redux.png";
 import postgres from "@/acces/tecnologias/postgres.png";
 import git from "@/acces/tecnologias/git.png";

 import java from "@/acces/tecnologias/java.png";
 import mongo from "@/acces/tecnologias/mongo.png";
 import next from "@/acces/tecnologias/next.png";
 import php from "@/acces/tecnologias/php.png";
 import scrum from "@/acces/tecnologias/scrum.png";
 import sql from "@/acces/tecnologias/sql.png";
 import tail from "@/acces/tecnologias/tail.png";
 import tool from "@/acces/tecnologias/tool.png";
 import ts from "@/acces/tecnologias/ts.png";

import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageCarousel = () => {
  const settings:any = {
    dots: true,
    infinite: true,
    autoplaySpeed: 2000,
    slidesToShow:11,
    slidesToScroll: 1,
    autoplay:500,
    focusOnSelect:true
  };

  return (
    <div>
        <h1 className=' text-center'>skils</h1>
    <Slider {...settings} >
      <div >
        <Image src={js} alt="Imagen 1" />
      </div>
      <div>
        <Image src={react} alt="Imagen 2" />
      </div>
      <div>
        <Image src={redux} alt="Imagen 3" />
      </div>
      <div>
        <Image src={node} alt="Imagen 1" className='pt-5'/>
      </div>
      <div>
        <Image src={postgres} alt="Imagen 2" />
      </div>
      <div>
        <Image src={git} alt="Imagen 3" />
      </div>
      <div>
        <Image src={css} alt="Imagen 3" />
      </div>
      <div >
        <Image src={mongo} alt="Imagen 1" />
      </div>
      <div>
        <Image src={next} alt="Imagen 2" className='p-5 pt-10' />
      </div>
      <div>
        <Image src={scrum} alt="Imagen 3" />
      </div>
      <div>
        <Image src={sql} alt="Imagen 1" className='px-5 pt-8'  />
      </div>
      <div>
        <Image src={tail} alt="Imagen 2" className='pt-5 px-5'/>
      </div>
      <div>
        <Image src={tool} alt="Imagen 3" className='pt-5 '/>
      </div>
      <div>
        <Image src={ts} alt="Imagen 3" />
      </div>
      <div>
        <Image src={java} alt="Imagen 3" />
      </div>
      <div>
        <Image src={php} alt="Imagen 3" className='pt-5'/>
      </div>
    </Slider>
    </div>
  );
};

export default ImageCarousel;