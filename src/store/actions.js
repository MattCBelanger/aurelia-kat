export const REICEVE_KATS = 'REICEVE_KATS';
export const GET_KATS = 'GET_KATS';
export const TEST_KATS = 'TEST_KATS';
export const SET_KAT = 'SET_KAT';
export const REICEVE_QUOTE = 'DETAILS_REICEVE_QUOTE';

//Actions
export const testKats = {
  type: TEST_KATS
};
export const recieveKats = (kats) => {
  return {
    type: REICEVE_KATS,
    kats,
  };
}

export const setKat = (kat) => {
  return {
    type: SET_KAT,
    kat: { name: kat },
  };
}

export const detailsQuote = (quote) => {
  return {
    type: REICEVE_QUOTE,
    quote,
  };
}
