import { DISPLAY_ALERT, CLEAR_ALERT, TOGGLE_MODAL } from './actions';
import { initialState } from './appContext';

const reducer = (state, action) => {
  switch (action.type) {
    case DISPLAY_ALERT: {
      return {
        ...state,
        showAlert: true,
        alertType: 'danger',
        alertText: 'Please provide all values.'
      };
    }
    case CLEAR_ALERT: {
      return { ...state, showAlert: false, alertType: '', alertText: '' };
    }

    case TOGGLE_MODAL: {
      return {
        ...initialState,
        showModal: !state.showModal
      };
    }
  }
};

export default reducer;
