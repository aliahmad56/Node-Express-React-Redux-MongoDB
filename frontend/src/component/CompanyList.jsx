// CompanyList.js
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCompanies, deleteCompany   } from "../redux/actions/companyActions";
import { Link,useHistory } from "react-router-dom";


const CompanyList = () => {
  const companies = useSelector((state) => state.company.companies);
  console.log('whole companies data', companies);
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    dispatch(fetchCompanies());     
  }, [dispatch]);

  const handleDelete = (companyId) => {
    console.log(companyId);
    dispatch(deleteCompany(companyId));
    history.push("/");
  };

  return (
    <div>
      <h2>Company List</h2>
      <ul>
        {companies.map((company) => (   
          <li key={company.id}>
            <strong>{company.name}</strong>
            <p>Location: {company.location}</p>
            <p>Phone Number: {company.phoneNumber}</p>
          
            <div>
                <Link to={"/edit/"+company._id}>Edit</Link> 
                <button onClick={() => handleDelete(company._id)}>Delete</button>
              </div>

          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyList;
