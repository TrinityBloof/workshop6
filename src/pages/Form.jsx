import React, { useState } from "react";

import { Navigation } from "./Navigation";

//import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

var x;

export function Form() {


    const [formData, setFormData] = useState({
        owner: "",
        location: "",
        price: "",
        extension: "",
        photo: "",
      });
    
      const change = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
      const Submit = (event) => {
        event.preventDefault();
    
        const existingData = localStorage.getItem("houses");
        const existingHouses = existingData ? JSON.parse(existingData) : [];
        existingHouses.push(formData);
        localStorage.setItem("houses", JSON.stringify(existingHouses));
    
        setFormData({
          owner: "",
          location: "",
          price: "",
          extension: "",
          photo: "",
        });
      };

    return (
        <div>
            <Navigation/>
            <div className="container d-flex align-items-center justify-content-center vh-100">
                <div className="card">
                <div className="card-body">
                    <h2 className="card-title text-center mb-4">Registro de Casas</h2>
                    <form onSubmit={Submit}>
                    <div className="form-group mb-3">
                        <label>dueño</label>
                        <input
                        type="text"
                        className="form-control"
                        placeholder="nombre"
                        name="owner"
                        value={formData.owner}
                        onChange={change}
                        />
                    </div>
                    <div className="form-group mb-3">
                        <label>ubicacion</label>
                        <input
                        type="text"
                        className="form-control"
                        placeholder="Ciudad"
                        name="location"
                        value={formData.location}
                        onChange={change}
                        />
                    </div>
                    <div className="form-group mb-3">
                        <label>precio</label>
                        <input
                        type="number"
                        step="any"
                        className="form-control"
                        placeholder="$"
                        name="price"
                        value={formData.price}
                        onChange={change}
                        />
                    </div>
                    <div className="form-group mb-3">
                        <label>extencion</label>
                        <input
                        type="number"
                        step="any"
                        className="form-control"
                        placeholder="km2"
                        name="extension"
                        value={formData.extension}
                        onChange={change}
                        />
                    </div>
                    <div className="form-group mb-3">
                        <label>fotografia</label>
                        <input
                        type="text"
                        className="form-control"
                        placeholder="link"
                        name="photo"
                        value={formData.photo}
                        onChange={change}
                        />
                    </div>
                    <div className="text-center">
                        <button type="submit" className="btn btn-primary">
                        save
                        </button>
                    </div>
                    </form>
                </div>
                </div>
            </div>
        </div>
       
    )
}