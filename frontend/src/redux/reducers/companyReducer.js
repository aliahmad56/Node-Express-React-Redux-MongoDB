// companyReducer.js
import { ADD_COMPANY, FETCH_COMPANIES, UPDATE_COMPANY, DELETE_COMPANY  } from "../actions/types";

const initialState = {
  companies: [],
};

const companyReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMPANY:
      return {
        ...state,
        companies: [...state.companies, action.payload],
      };

    case FETCH_COMPANIES:
      return {
        ...state,   
        // the above line create shallow copy of the current state  
        // any properties in the current state that are not explicitly 
        // updated will be retained in the new state
        companies: action.payload,
      };

      case UPDATE_COMPANY:
        const updatedCompanies = state.companies.map((company) =>
          company.id === action.payload.id ? action.payload : company
          // Ternary operator => if the condition is true return the value of action.payload
          // update companies array if the condition is false return : company object means 
          // nothing to update
        );
        return {
          ...state,
          companies: updatedCompanies,
        };

        case DELETE_COMPANY:
      const filteredCompanies = state.companies.filter(
        (company) => company.id !== action.payload
      );
      return {
        ...state,
        companies: filteredCompanies,
      };
      
    default:
      return state;
  }
};

export default companyReducer;
