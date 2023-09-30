"use client"

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



const ImageCarousel = () => {
 

  return (
    <div>
        <h1 className=' text-center text-4xl py-8 font-bold '>Skills</h1>
    <div className="grid grid-cols-8 gap-6 p-10  ">
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
        <Image src={node} alt="Imagen 1" />
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
        <Image src={next} alt="Imagen 2" />
      </div>
      <div>
        <Image src={scrum} alt="Imagen 3" />
      </div>
      <div>
        <Image src={sql} alt="Imagen 1"/>
      </div>
      <div>
        <Image src={tail} alt="Imagen 2"/>
      </div>
      <div>
        <Image src={tool} alt="Imagen 3"/>
      </div>
      <div>
        <Image src={ts} alt="Imagen 3" />
      </div>
      <div>
        <Image src={java} alt="Imagen 3" />
      </div>
      <div>
        <Image src={php} alt="Imagen 3"/>
      </div>
    </div>
    </div>
  );
};

export default ImageCarousel;