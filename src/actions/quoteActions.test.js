import { setQuotePromise, UPDATE_QUOTE, UPDATE_QUOTE_LOADING, UPDATE_QUOTE_DONE } from './quoteActions';

jest.mock('../services/quoteApi', () => ({
  fetchQuote: () => Promise.resolve([])
}));

describe('quote data actions', () => {
  it('should get a quote', () => {
    const result = setQuotePromise();
    expect(result).toEqual({
      type: UPDATE_QUOTE,
      pendingType: UPDATE_QUOTE_LOADING,
      fulfilledType: UPDATE_QUOTE_DONE,
      payload: Promise.resolve([])
    });
  });
});
