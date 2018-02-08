import { REICEVE_KATS, TEST_KATS, SET_KAT, REICEVE_QUOTE } from './actions';

// reducer
const katsReducer = (state =
  {
    kats: [], katsOnline: false, quote: null, kat: {}
  },
  action) => {
  switch (action.type) {
    case TEST_KATS:
      return {
        quote: state.quote,
        kats: state.kats,
        kat:state.kat,
        katsOnline: !state.katsOnline,
      };
  case SET_KAT:
    return {
      quote: state.quote,
      kats: state.kats,
      katsOnline: !state.katsOnline,
      kat: action.kat
    };
  case REICEVE_QUOTE:
    return {
      kats:state.kats,
      katsOnline: state.katsOnline,
      kat: state.kat,
      quote: action.quote
    };
  case REICEVE_KATS:
      return {
        quote: state.quote,
        katsOnline: state.katsOnline,
        kat: state.kat,
        kats: action.kats,
    };
  default:
    return state;
  }
};

export {
	katsReducer,
};