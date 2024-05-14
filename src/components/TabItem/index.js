// Write your code here

import './index.css'

const TabItem = props => {
  const {eachTabDetails, handelChangeTabs, isActive} = props
  const {displayText, tabId} = eachTabDetails

  const onClickItem = () => {
    handelChangeTabs(tabId)
  }

  const tabButtonClassName = isActive ? 'active-tab-button ' : ''

  return (
    <li className="list-items">
      <button
        className={`tab-button ${tabButtonClassName} `}
        type="button"
        onClick={onClickItem}
      >
        {displayText}
      </button>
      <hr className="line" />
    </li>
  )
}

export default TabItem
