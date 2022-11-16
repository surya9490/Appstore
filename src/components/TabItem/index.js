import './index.css'

const TabItem = props => {
  const {tabDetails, displayTab} = props
  const {tabId, displayText} = tabDetails

  const onClickTab = () => {
    displayTab(tabId)
  }
  return (
    <li className="tab-list">
      <button className="button" type="button" onClick={onClickTab}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
