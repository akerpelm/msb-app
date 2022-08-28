// import React, { useReducer, useContext } from 'react';
// import axios from 'axios';
// // import reducer from './reducers';
// // import {
// //   DISPLAY_ALERT,
// //   CLEAR_ALERT,
// //   AUTHENTICATE_USER_INITIATE,
// //   AUTHENTICATE_USER_SUCCESS,
// //   AUTHENTICATE_USER_ERROR,
// //   TOGGLE_SIDEBAR,
// //   LOGOUT_USER,
// //   UPDATE_USER_INITIATE,
// //   UPDATE_USER_SUCCESS,
// //   UPDATE_USER_ERROR,
// //   HANDLE_CHANGE,
// //   CLEAR_VALUES,
// //   CREATE_JOB_INITIATE,
// //   CREATE_JOB_SUCCESS,
// //   CREATE_JOB_ERROR,
// //   GET_JOBS_SUCCESS,
// //   GET_JOBS_INITIATE,
// //   SET_EDIT_JOB,
// //   DELETE_JOB_INITIATE,
// //   EDIT_JOB_INITIATE,
// //   EDIT_JOB_SUCCESS,
// //   EDIT_JOB_ERROR,
// //   GET_JOB_STATS_INITIATE,
// //   GET_JOB_STATS_SUCCESS,
// //   CLEAR_FILTERS,
// //   CHANGE_PAGE
// // } from './actions';
// // import {
// //   jobTypeOptions,
// //   jobStatusOptions,
// //   sortOptions
// // } from './contextConstants';

// // const token = localStorage.getItem('token');
// // const user = localStorage.getItem('user');
// // const userLocation = localStorage.getItem('location');

// const initialState = {
//   // isLoading: false,
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
// };

// const AppContext = React.createContext();

// const AppProvider = ({ children }) => {
//   // const [state, dispatch] = useReducer(reducer, initialState);

//   return <AppContext.Provider value={true}>{children}</AppContext.Provider>;
// };

// // const useAppContext = () => {
// //   return useContext(AppContext);
// // };

// // export { AppProvider, initialState, useAppContext };
