// companyActions.js
import axios from "axios";

import { ADD_COMPANY, FETCH_COMPANIES, UPDATE_COMPANY, DELETE_COMPANY  } from "./types";


export const addCompany = (companyData) => async (dispatch) => {
  try {
    const response = await axios.post("http://localhost:5000/addresturant", companyData);
    dispatch({
      type: ADD_COMPANY,
      payload: response.data,
    });
  } catch (error) {
    console.error("Error adding company:", error);
  }
};

export const fetchCompanies = () => async (dispatch) => {
  try {
    const response = await axios.get("http://localhost:5000/showrestaurant");
    dispatch({
      type: FETCH_COMPANIES,
      // dispath means send off/ sending data or import function from anywhere
      payload: response.data,
    });
  } catch (error) {
    console.error("Error fetching companies:", error);
  }
};

export const updateCompany = (companyId, updatedData) => async (dispatch) => {
  try {
    const response = await axios.put(`http://localhost:5000/updatedresto/${companyId}`, updatedData);
    console.log("Checking from action", response.data );
    dispatch({
      type: UPDATE_COMPANY,
      payload: response.data,
    });
  } catch (error) {
    console.error("Error updating company:", error);
  }
  };

// export const updateCompany = (companyId, updatedData) => async (dispatch) => {
//   try {
//     const response = await axios.put(`${apiUrl}/${companyId}`, updatedData);
//     dispatch({
//       type: UPDATE_COMPANY,
//       payload: response.data,
//     });
//   } catch (error) {
//     console.error("Error updating company:", error);
//   }
//   };

  export const deleteCompany = (companyId) => async (dispatch) => {
    console.log('Checking from action', companyId);
  
    try {
       await axios.delete(`http://localhost:5000/deleteresto/${companyId}`);
      dispatch({
        type: DELETE_COMPANY,
        payload: companyId,
      });
   
   
    } catch (error) {
      console.error("Error deleting company:", error);
    }
  }
