import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Edit() {
  const navigate = useNavigate();
  const [id, setId] = useState([]);
  const [Data, setData] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
    city: "",
    zip: "",
    state: "",
  });
  const handelChange = (e) => {
    e.preventDefault();
    const { name, value, type } = e.target;
    if (type === "option") {
      setData({...Data, state: value });
    } else {
      setData({...Data, [name]: value });
    }
  };
  const { name, email, password, address, zip, city, state } = Data;

  const updateData = async (e) => {
    e.preventDefault();
    const AddData = { name, email, password, address, zip, city, state };

    const Update = await axios.put(
      `http://localhost:4000/users/${id}`,
      AddData
    );
    navigate("/read");
  };

  useEffect(() => {
    setId(localStorage.getItem("id"));
  }, []);

  useEffect(() => {
    const storeData = {
      name: localStorage.getItem("name"),
      email: localStorage.getItem("email"),
      password: localStorage.getItem("password"),
      address: localStorage.getItem("address"),
      city: localStorage.getItem("city"),
      zip: localStorage.getItem("zip"),
      state:localStorage.getItem("state"),
    };
    
    setData(storeData);
  }, []);

  const statename = [
    "gujarat",
    "maharastra",
    "uttarpradesh",
    "bihar",
    "kerala",
    "channai",
    "madhyapradesh",
  ];

  return (
    <div className="container">
      <form>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputEmail4">Name</label>
            <input
              type="text"
              className="form-control"
              id="inputEmail4"
              placeholder="Enter full Name"
              name="name"
              onChange={handelChange}
              value={name}
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputEmail4">Email</label>
            <input
              type="email"
              className="form-control"
              id="inputEmail4"
              placeholder="Email"
              name="email"
              onChange={handelChange}
              value={email}
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputPassword4">Password</label>
            <input
              type="password"
              className="form-control"
              id="inputPassword4"
              placeholder="Password"
              name="password"
              value={password}
              onChange={handelChange}
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="inputAddress">Address</label>
          <input
            type="text"
            className="form-control"
            id="inputAddress"
            placeholder="1234 Main St"
            name="address"
            value={address}
            onChange={handelChange}
          />
        </div>

        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputCity">City</label>
            <input
              type="text"
              className="form-control"
              id="inputCity"
              name="city"
              onChange={handelChange}
              value={city}
            />
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="inputState">State</label>
            <select
              id="inputState"
              type="option"
              className="form-control"
              name="state"
              onChange={handelChange}
              value={state}
            >
              <option>Choose...</option>
              {statename.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group col-md-2">
            <label htmlFor="inputZip">Zip</label>
            <input
              type="text"
              className="form-control"
              id="inputZip"
              name="zip"
              onChange={handelChange}
              value={zip}
            />
          </div>
        </div>

        <button type="submit" className="btn btn-primary" onClick={updateData}>
          Update
        </button>
      </form>
    </div>
  );
}
