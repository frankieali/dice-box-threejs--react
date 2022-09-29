import React, {useEffect, useState, useRef} from "react"
import PubSub from "pubsub-js"
import "./DisplayResults.css"

const DisplayResults = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [results, setResults] = useState({sets:[]})
  let initalized = useRef(false);

  useEffect(()=>{
    if(!initalized.current){
      PubSub.subscribe("results",(msg, data) => {
        // console.log('data.results :>> ', data.results);
        setResults(data.results)
      })
      initalized.current = true
    }

  },[initalized])
  return (
    <div className={`show-${isVisible}`} id="displayResults">
      <span className="die-results">
      {
        results?.sets.map(set => {
          return set.rolls.map(roll => <span key={roll.id} className="die-result">{roll.label}</span>)
        })
      }
      </span>
      <span className="equals">=</span><span className="total">{results.total}</span>
    </div>
  )
}

export default DisplayResults