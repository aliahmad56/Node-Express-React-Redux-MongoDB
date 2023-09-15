// CompanyEdit.js

import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { updateCompany } from "../redux/actions/companyActions";

const EditCompany = () => {
  const { id } = useParams(); // Get the company ID from the URL
  console.log('id checking', id);
  // Parse the id as an integer
  // const companyId = parseInt(id, 10);
  const companyId = id;
  const history = useHistory();
  const dispatch = useDispatch();
  const companies = useSelector((state) => state.company.companies);
console.log('Edit Company Checking', companies);

  const [editedData, setEditedData] = useState({
    name: "",
    location: "",
    phoneNumber: "",
  });

  useEffect(() => {
    const companyToEdit = companies.find((company) => company._id === companyId);
    console.log('Here info against id', companyToEdit)
    if (companyToEdit) {
      setEditedData(companyToEdit);
    }
    // yahan se jo store se access kiya tha data wo SetEditedData UseState helper function
    // ke andar add kar rha ha.
  }, [id, companies]);

  const handleChange = (e) => {
    // Ye function jaise hi koye input ki value form me change hoga wo triger karega 
    // us value ko useState ke andar rak dega.
    const { name, value } = e.target;
    setEditedData({ ...editedData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateCompany(id, editedData));
   
    // dispatch ka function sendoff data to updateCompany or tum ye bi keh skte ho ke 
    //  updateCompany ke function ko yahan par import kar rha ha.
    history.push("/"); // Redirect to the company list after editing
  };

  return (
    <div>
      <h2>Edit Company</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={editedData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Location:</label>
          <input
            type="text"
            name="location"
            value={editedData.location}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Phone Number:</label>
          <input
            type="text"
            name="phoneNumber"
            value={editedData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EditCompany;
