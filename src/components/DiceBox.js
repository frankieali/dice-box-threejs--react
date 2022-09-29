import React, {useEffect, useRef} from "react"
import DiceBoxThree from "@3d-dice/dice-box-threejs"
import "./DiceBox.css"
import PubSub from "pubsub-js"

const DiceBox = (props) => {
  const { children } = props
  let boxRef = useRef();
  let Box = useRef()
  

  // setup DiceBox
  useEffect(()=>{
    async function SetUpDiceBox(){
      Box = new DiceBoxThree("#scene-container",{
        assetPath: "",
        sounds: true,
        volume: 100,
        theme_colorset: "bronze",
        baseScale: 140,
        strength: 1,
        onRollComplete: (results) => {
          console.log(`I've got results :>> `, results);
        }
      });
      
      await Box.initialize()

      PubSub.subscribe('roll', (msg, data) => {
        Box.roll(data.notation)
      })
    }

    // check if there's a canvas in the #scene-container
    const hasCanvas =Array.from(boxRef.current.children).filter(child => child.tagName === 'CANVAS')
    if(hasCanvas.length === 0) {
      SetUpDiceBox()
    }
  },[])

  return (
    <div id="scene-container" ref={boxRef}>{children}</div>
  )
}

export default DiceBox