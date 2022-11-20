import quoteDB from "./db/quotes.json"
import QuotesBox from "./components/QuotesBox";
import colors from "./db/colors";
import { useState } from "react";

function App() {

  const getRandomElementFromArray = (array) =>{
        const randomIndex = Math.floor(array.length*Math.random())
        return array[randomIndex]
    }

    const getNweValues = ( ) => {
        const newQuote = getRandomElementFromArray(quoteDB)
        const newColor = getRandomElementFromArray(colors)
        setQuote (newQuote)
        setColor (newColor)
    }

    const [quote, setQuote] = useState(getRandomElementFromArray(quoteDB));

    const [color, setColor] = useState(getRandomElementFromArray(colors));

    const objectColor = {
        color: color
    }
    const backgroundColor = color;

  return (
    <div className="App" style={{backgroundColor}}>

      <QuotesBox 
        quote={quote} 
        getNweValues={getNweValues} 
        backgroundColor={backgroundColor}
        objectColor={objectColor}
        />
       
    </div>
  )
}

export default App
