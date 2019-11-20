import { getQuote, getCharacterName, getCharacterImage, getLoading } from './quoteSelectors';

describe('quote selectors', () => {
  const state = {
    quoteState: {
      loading: false,
      quote: 'testQuote',
      characterName: 'testName',
      characterImage: 'testImage',
    }
  };
  it('should get quote', () => {
    const result = getQuote(state);
    expect(result).toBe('testQuote');
  });
  it('should get character name', () => {
    const result = getCharacterName(state);
    expect(result).toBe('testName');
  });
  it('should get character image', () => {
    const result = getCharacterImage(state);
    expect(result).toBe('testImage');
  });
  it('gets loading', () => {
    const result = getLoading(state);
    expect(result).toBe(false);
  });
});
