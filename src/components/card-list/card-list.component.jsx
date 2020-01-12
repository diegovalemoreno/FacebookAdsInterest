import React from 'react';

import { Card } from '../card/card.component';

import './card-list.styles.css';

export const CardList = props => (
  <div className="card-list">
    {props.interests.map(interest => (
      <Card key={interest.id} interest={interest} />
    ))}
  </div>
);
