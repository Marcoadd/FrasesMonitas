import QuoteButton from "./QuoteButton"

const QuotesBox = ({quote, getNweValues, backgroundColor, objectColor}) => {

  return (
    <article className="backgroundCol">
      <p style={objectColor}>{quote.quote}</p>
      <h4  style={objectColor}>{quote.author}</h4>
      <div className="footer"><i  style={objectColor} className='bx bx-cloud-lightning'></i><QuoteButton getNweValues={getNweValues} backgroundColor={backgroundColor} /></div>
    </article>
  )
}

export default QuotesBox