import React from 'react'

const QuoteButton = ({getNweValues, backgroundColor}) => {
  return (
    <button className='button' onClick={getNweValues} style={{backgroundColor}}><i className='bx bx-right-arrow-circle'></i></button>
  )
}

export default QuoteButton