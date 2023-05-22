
const BASE_IMG_URL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/`

function Pokecard({id, name, type, base_experience}) {
  return (
    <div className="Pokecard">
      <h3>{name}</h3>
      <img src={`${BASE_IMG_URL}/${id}.png`} alt=""/>
      <p>Type: {type}</p>
      <p>EXP: {base_experience}</p>
    </div>
  )
}

export default Pokecard;