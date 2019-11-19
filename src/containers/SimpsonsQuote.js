import React from 'react';
import { useSelector } from 'react-redux';
import Quote from '../components/quote/Quote';
// import { setQuote, setQuotePromise } from '../actions/quoteActions';
import {  } from '../selectors/quoteSelectors';
import { getQuote } from '../selectors/quoteSelectors';

export default function DisplayQuote() {
  const quote = useSelector(getQuote);
  // const dispatch = useDispatch();

  // useEffect(() => {

  // })
  return (
    <>
      <Quote quote={quote} />
    </>
  );
}

