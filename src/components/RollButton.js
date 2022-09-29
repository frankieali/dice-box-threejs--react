import React from "react"
import PubSub from "pubsub-js"
import "./RollButton.css"

const RollButton = () => {

  const handleRoll = (e) => {
    PubSub.publish('roll', {notation: "3d6@4,4,4"})
  }
  return (
    <div id="rollers" onClick={handleRoll}>
      <button id="roll">Roll</button>
    </div>
  )
}

export default RollButton