import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  // we gonna print aut value using state
  const [value, setValue] = useState({
    name: "",
    email: "",
    number: "",
    gender: "",
    message: "",
  });

  // printing function
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`
    name : ${value.name}
    email : ${value.email}
    number : ${value.number}
    gender : ${value.gender}
    message : ${value.message}
    `);

    setValue({
      name: "",
      email: "",
      number: "",
      gender: "",
      message: "",
    });

    return alert(`
    name : ${value.name}
    email : ${value.email}
    number : ${value.number}
    gender : ${value.gender}
    message : ${value.message}
    `);
  };

  return (
    <div className="form-card p-5 pt-4 mt-5  col-lg-4  col-md-6 mx-auto">
      <div className="text-center">
        <img
          src="https://s3-us-west-2.amazonaws.com/public.notion-static.com/d6b0f269-ebf4-4da9-ab33-0c2d23020b6a/logodp.jfif"
          width={60}
          className="image"
          alt=""
        />
        <h4 className="mt-2 mb-4">Feedback Form</h4>
      </div>
      <form onSubmit={handleSubmit}>
        <div className=" mb-3">
          <label htmlFor="name" className="mb-2">
            Name
          </label>
          <br />
          <input
            type="text"
            name="name"
            id="input"
            value={value.name}
            required
            onChange={(e) => setValue({ ...value, name: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="mb-2">
            Email
          </label>
          <br />
          <input
            type="text"
            name="email"
            id="input"
            value={value.email}
            required
            onChange={(e) => setValue({ ...value, email: e.target.value })}
          />
        </div>
        <div className=" mb-3">
          <label htmlFor="contact" className="mb-2">
            Contact
          </label>
          <br />
          <input
            type="text"
            name="contact"
            id="input"
            value={value.number}
            required
            onChange={(e) => setValue({ ...value, number: e.target.value })}
          />
        </div>
        <div className=" mb-3">
          <label htmlFor="contact" className="mb-2">
            Gender
          </label>
          <br />
          <div className="d-flex ">
            <div>
              <input
                type="radio"
                name="gender"
                value="male"
                required
                onClick={(e) => setValue({ ...value, gender: e.target.value })}
              />
              &nbsp;
              <span>Male</span>
            </div>
            <div className="offset-1">
              <input
                type="radio"
                name="gender"
                value="female"
                required
                onClick={(e) => setValue({ ...value, gender: e.target.value })}
              />
              &nbsp;
              <span>Female</span>
            </div>
          </div>
        </div>
        <div className=" mb-3">
          <label htmlFor="message" className="mb-2">
            Contact
          </label>
          <br />
          <textarea
            name="message"
            cols="15"
            rows="2"
            id="input"
            required
            value={value.message}
            onChange={(e) => setValue({ ...value, message: e.target.value })}
          />
        </div>
        <div>
          <button className="btn btn-success button">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;
