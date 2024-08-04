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
 import docker from "@/acces/tecnologias/docker.png";
 import aws from "@/acces/tecnologias/aws.png";
 import spring from "@/acces/tecnologias/spring-boot.png";
 import security from "@/acces/tecnologias/spring-security-logo.png";
 import kafka from "@/acces/tecnologias/pngwing.com.png";
 import angular from "@/acces/tecnologias/pngwing.com (1).png";
 import redis from "@/acces/tecnologias/redis.com.png";
 import server from "@/acces/tecnologias/server-sql.png";

import React from 'react';

const tecnologias = [
  { id: 1, name: 'NodeJS', image: node },
  { id: 2, name: 'CSS', image: css },
  { id: 3, name: 'React', image: react },
  { id: 4, name: 'JS', image: js },
  { id: 5, name: 'Redux', image: redux },
  { id: 6, name: 'Postgres', image: postgres },
  { id: 7, name: 'Git', image: git },
  { id: 8, name: 'Java', image: java },
  { id: 9, name: 'Mongo', image: mongo },
  { id: 10, name: 'NextJS', image: next },
  { id: 11, name: 'PHP', image: php },
  { id: 12, name: 'Scrum', image: scrum },
  { id: 13, name: 'SQL', image: sql },
  { id: 14, name: 'Tailwind', image: tail },
  { id: 15, name: 'Redux Toolkit', image: tool },
  { id: 16, name: 'TS', image: ts },
  { id: 17, name: 'Docker', image: docker },
  { id: 18, name: 'AWS', image: aws },
  { id: 19, name: 'spring', image: spring },
  { id: 20, name: 'security', image: security },
  { id: 21, name: 'kafka', image: kafka },
  { id: 22, name: 'angular', image: angular },
  { id: 23, name: 'redis', image: redis },
  { id: 24, name: 'sql', image: server },
  { id: 25, name: 'redis', image: redis },
  { id: 26, name: 'redis', image: redis },
]

const ImageCarousel = () => {
 

  return (
    <div>
      <h1 className='text-center text-2xl py-8 font-bold font-secular md:text-4xl'>Skills</h1>
      <div className={`grid ${tecnologias.length > 6 ? 'grid-cols-3' : 'grid-cols-2'} gap-6 p-10 pt-0 md:grid-cols-3 lg:grid-cols-8`}>
        {tecnologias.map(tech => (
          <div key={tech.id} className={`my-2 flex items-center justify-center ${tech.name === 'React' ? 'react-style' : ''}`}>
            <Image src={tech.image} alt={`Imagen ${tech.name}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;