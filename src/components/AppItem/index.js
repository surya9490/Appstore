// Write your code here
import './index.css'

const AppDetails = props => {
  const {appItems} = props
  const {appName, imageUrl} = appItems
  return (
    <li className="app-container">
      <img className="app-icon" src={imageUrl} alt={appName} />
      <p>{appName}</p>
    </li>
  )
}

export default AppDetails
