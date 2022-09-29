import React, {useEffect, useState} from "react"
import PubSub from "pubsub-js"
import "./RollButton.css"

const RollButton = () => {
  const [requestNumbers, setRequestNumbers] = useState()
  // const [numbers,setNumbers] = useState([])

  useEffect(()=>{
    if(requestNumbers){
      const url = 'https://api.random.org/json-rpc/4/invoke'
      const params = {
        jsonrpc: '2.0',
        method: "generateIntegers",
        params: {
          apiKey: "8cfd3f9a-165e-429e-8255-d5ec27c0a910",
          n: 3,
          min: 1,
          max: 6,
          replacement: true
        },
        id: requestNumbers
      }
      fetch(url,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(params)
      }).then(response => response.json()).then(response => {
        // console.log('response :>> ', response);
        const nums = response.result.random.data.join(',')
        console.log(`we're going to roll => `, nums);
        PubSub.publish('roll', {notation: `3d6@${nums}`})
      })
    }
  },[requestNumbers])


  const handleRoll = (e) => {
    // PubSub.publish('roll', {notation: `3d6@4,4,4`})

    // trigger useEffect to fetch numbers
    setRequestNumbers(Date.now())
  }
  return (
    <div id="rollers" onClick={handleRoll}>
      <button id="roll">Roll</button>
    </div>
  )
}

export default RollButton