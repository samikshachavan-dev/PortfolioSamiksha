import React from 'react'
export const Projects=({title, description, image, links})=>{
    <div>
        <h1>{title}</h1>
        <p>{description}</p>
        <img src={image} alt="" />
        <a href={links}>{links}</a>
    </div>
}