import React, { useReducer, useContext } from 'react';
// import axios from 'axios';
import reducer from './reducers';
import { DISPLAY_ALERT, CLEAR_ALERT, TOGGLE_MODAL } from './actions';

// // const token = localStorage.getItem('token');
// // const user = localStorage.getItem('user');
// // const userLocation = localStorage.getItem('location');

const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: '',
  alertType: '',
  showModal: false
};
//   // showAlert: false,
//   // alertText: '',
//   // alertType: '',
//   // user: user ? JSON.parse(user) : null,
//   // token: token,
//   // userLocation: userLocation || '',
//   // showSidebar: false,
//   // isEditing: false,
//   // editJobId: '',
//   // position: '',
//   // company: '',
//   // jobTypeOptions,
//   // jobType: 'Full-Time',
//   // jobStatusOptions,
//   // jobStatus: 'Application Pending',
//   // jobLocation: userLocation || '',
//   // jobs: [],
//   // totalJobs: 0,
//   // pages: 1,
//   // currentPage: 1,
//   // jobStats: {},
//   // monthlyApplications: [],
//   // search: '',
//   // searchJobStatus: 'all',
//   // searchJobType: 'all',
//   // sort: 'newest',
//   // sortOptions

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const displayAlert = () => {
    dispatch({ type: DISPLAY_ALERT });
    // clearAlert();
  };
  const clearAlert = () => {
    // setTimeout(() => {
    dispatch({ type: CLEAR_ALERT });
    // }, 5000);
  };

  const toggleModal = () => {
    dispatch({ type: TOGGLE_MODAL });
  };
  return (
    <AppContext.Provider
      value={{
        ...state,
        displayAlert,
        clearAlert,
        toggleModal
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, initialState, useAppContext };
