import React from 'react';
import PropTypes from 'prop-types';

const Loading = ({ fetchQuote }) => {
  return <button onClick={fetchQuote} >Get New Quote</button>;
};

Loading.propTypes = {
  fetchQuote: PropTypes.func.isRequired
};

export default Loading;
