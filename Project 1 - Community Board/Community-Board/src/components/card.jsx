const Card = ({ name, logo, altText }) => {
  return (
    <div className="Card"> 
      <img
        src={logo}
        alt={altText}
      />
        <h3>{name}</h3>

    </div>
  )
}
export default Card;