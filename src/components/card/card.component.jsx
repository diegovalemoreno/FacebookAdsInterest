import React from 'react';
import './card.styles.css';
import { Link } from 'react-router-dom';

export const Card = props => (
  <div className="card-container">
    <ul>{props.interest.name}</ul>;
    {/* <h2>{props.interest.name}</h2>
    <p> Audiencia: {props.interest.audienceFormated} </p>
    <p> Tópico: {props.interest.topic} </p>
    <p> {props.interest.path} </p> */}
  </div>
);
