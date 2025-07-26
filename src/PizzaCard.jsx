
export default function PizzaCard({pizza}) {
  return (
    <div className='pizza-card'>
      <img src={pizza.photoName} alt="" />
      <div className="pizza-text">
        <h2>{pizza.name}</h2>
        <p>{pizza.ingredients}</p>
        <span>{pizza.price}</span>
      </div> 
    </div>
  )
}


