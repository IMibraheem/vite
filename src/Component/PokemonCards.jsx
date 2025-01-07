import React from 'react'

const PokemonCards = ({pokemonData}) => {
  return (
    <div className="bg-white p-3 flex flex-col justify-center items-center rounded-md  cursor-pointer hover:shadow-lg gap-3">
    <img src={pokemonData.sprites.back_default} alt={pokemonData.name}  className="w-32  object-cover"/>

    {/* Name of Pokemon */}
    <div className="text-center mb-3 ">
        <h1 className="font-semibold font-sans text-2xl ">{pokemonData.name} </h1>
        <p className="bg-teal-400 mt-2 p-2 text-xl font-bold rounded-xl text-white">{pokemonData.types.map((typename)=>typename.type.name).join(", ")}</p>
    </div>

    {/* More data about Pokemon   */}
    <div className="grid grid-cols-2 gap-2 justify-between">
    <div className="flex justify-center items-center gap-2">
        <h1 className="font-bold text-lg">Weight :</h1>
        <span className="font-semibold bg-green-300 text-center p-[3px] min-w-8 rounded-md">{pokemonData.weight} </span>
    </div>
    <div className="flex justify-center items-center gap-2 ">
        <h1 className="font-bold text-lg">Ability:</h1>
        <span className="font-semibold text-center bg-green-300 p-[3px]  rounded-md"> {pokemonData.abilities.map((abilityinfo)=>abilityinfo.ability.name).splice(0,1)} </span>
    </div>
    <div className="flex justify-center items-center gap-2">
        <h1 className="font-bold text-lg">Height:</h1>
        <span className="font-semibold text-center bg-green-300 py-[3px] px-6 rounded-md"> {pokemonData.height} </span>
    </div>
    <div className="flex justify-center items-center gap-2">
        <h1 className="font-bold text-lg">Speed:</h1>
        <span className="font-semibold text-clip bg-green-300 py-[3px] px-6 rounded-md"> {pokemonData.stats[5].base_stat} </span>
    </div>
    </div>
</div>
  )
}

export default PokemonCards