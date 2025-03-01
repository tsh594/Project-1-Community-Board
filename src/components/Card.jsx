import React from 'react';
import './Card.css';

const Card = ({ resource }) => {
  return (
    <div className="card">
      <div className="card-content">
        <div className="category-tag">{resource.category}</div>
        <h3>{resource.title}</h3>
        <p>{resource.description}</p>
        <a 
          href={resource.link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="resource-link"
        >
          Visit Resource
        </a>
      </div>
    </div>
  );
};

export default Card;