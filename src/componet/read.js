import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Read() {
  const [Data, setData] = useState([]);
  const navigate = useNavigate();

  const handelReadData = async (id) => {
    let response = await axios.get("http://localhost:4000/users");

    setData(response.data);
  };

  useEffect(() => {
    handelReadData();
  }, []);

  const setlocalstorage = (
    id,
    name,
    email,
    password,
    address,
    city,
    zip,
    state
  ) => {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    localStorage.setItem("address", address);
    localStorage.setItem("city", city);
    localStorage.setItem("zip", zip);
    localStorage.setItem("state", state);
    navigate("/edit");
  };

  const deleteHandel = async (id) => {
    try {
      const deleteData = await axios.delete(
        `http://localhost:4000/users/${id}`
      );
      handelReadData(deleteData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container-fluid">
      <>
        <div className="row">
          <div className="col-12">
            <table className="table table-dark">
              <thead className="p-5">
                <tr>
                  <th>id</th>
                  <td>Name</td>
                  <td>Email</td>
                  <td>Password</td>
                  <td>Address</td>
                  <td>Zipcode</td>
                  <td>state</td>
                  <td>UpdateData</td>
                  <td>DeleteData</td>
                </tr>
              </thead>

              {Data.map((e) => {
                return (
                  <tbody key={e.id}>
                    <tr className="table-active" />
                    <tr />

                    <tr>
                      <th scope="row">{e.id}</th>

                      <td>{e.name}</td>
                      <td>{e.email}</td>
                      <td>{e.password}</td>
                      <td>{e.address}</td>
                      <td>{e.City}</td>
                      <td>{e.zip}</td>
                      <td>{e.state}</td>

                      <td>
                        <button
                          type="button"
                          className="btn btn-success"
                          onClick={() =>
                            setlocalstorage(
                              e.id,
                              e.name,
                              e.email,
                              e.password,
                              e.address,
                              e.city,
                              e.zip,
                              e.state
                            )
                          }
                        >
                          Edit
                        </button>
                      </td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-danger"
                          onClick={() => deleteHandel(e.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  </tbody>
                );
              })}
            </table>
          </div>
        </div>
      </>
    </div>
  );
}
