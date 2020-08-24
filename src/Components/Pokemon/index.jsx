import React from 'react';

export default function index(props) {
  return (
    <div className="showing">
      <img src={props.completePokemon.sprites.front_default} alt={props.completePokemon.name} />
      <div>
        <h3>Name</h3>
        <p>{props.completePokemon.name}</p>
      </div>
      <div>
        <h3>HP</h3>
        <p>{props.completePokemon.stats[5].base_stat}</p>
      </div>
      <div>
        <h3>Types</h3>
        <p>{props.completePokemon.types[0].type.name}</p>
      </div>
    </div>
  );
}