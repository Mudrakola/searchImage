import './index.css'

const DestinationItem = props => {
  const {destinations} = props
  const {id, name, imgUrl} = destinations

  return (
    <li className="list-container">
      <img src={imgUrl} className="image" alt={name} />
      <p className="heading1">{name}</p>
    </li>
  )
}

export default DestinationItem
