import './index.css'

const TechnologyProfile = props => {
  const {cards} = props
  const {title, description, imgUrl, className} = cards
  return (
    <li className={className}>
      <h1 className="title">{title}</h1>
      <p className="discription">{description}</p>
      <img src={imgUrl} className="Avathor" alt={title} />
    </li>
  )
}
export default TechnologyProfile
