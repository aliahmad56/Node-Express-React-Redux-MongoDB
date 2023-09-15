import React, { useState } from "react";
import axios from "axios";
import { useHistory } from 'react-router-dom';

const Contact = () => {
  const history = useHistory();

  //setName is a updater funciton aur hamo name statevariable name with set keyword 
  // 2: name is state variable 3: useState function
  // means that the statevariable is empty initally
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [adress, setAdress] = useState("");
  const [msg, setMsg] = useState("");

  async function formSubmit(e) {
    e.preventDefault();
    let data = { 
      name, 
      email, 
      phone, 
      adress, 
      msg 
    }
    // alert(data.name);
    let result = await axios.post("http://localhost:5000/contact", data);
    console.log(result.data); // You can handle the response data here

    console.log(result.status);
    if (result.status === 201) {
      history.push('/');
    }
  }
  return (
    <>
      <div className="my-2">
        <h1 className="text-center">Contact Us</h1>
      </div>

      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Enter Your Name</label>
                <input type="text" class="form-control" required
                  placeholder="Enter your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                <input type="email" class="form-control"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Phone Number</label>
                <input type="phone" class="form-control"
                  placeholder="Enter your Phone Number"
                  // The value attribute is used to make this input a "controlled component" 
                  // in React, meaning its value is controlled by React's state.
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                <input type="text" class="form-control"
                  value={adress}
                  onChange={(e) => setAdress(e.target.value)}
                  placeholder="Enter your Adress" />
              </div>


              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                <textarea class="form-control"
                  rows="3"
                  value={msg}
                  onChange={(e) => setMsg(e.target.value)}>

                </textarea>
              </div>
              <div class="col-auto">
                <button type="submit" class="btn btn-outline-primary">Submit</button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;