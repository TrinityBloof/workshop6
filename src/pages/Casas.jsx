import { Navigation } from "./Navigation";
import React, { useState, useEffect } from "react";
import { db } from "../api/firebase.config";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

export function Casas() {
    const [houses, setHouses] = useState([]);

    useEffect(() => {
        const storedHouses = localStorage.getItem("houses");
        if (storedHouses) {
        setHouses(JSON.parse(storedHouses));
        }
    }, []);

    const fetchPost = async () => {
        await getDocs(collection(db, "casas"))
            .then((querySnapshot) => {
                const newData =querySnapshot.docs
                    .map((doc) => ({...doc.data(), id: doc.id}));
                setHouses(newData);
                console.log(houses, newData);
            })
    }

    useEffect(() => {
        fetchPost();
    }, [])

    return (
    <div>
        <Navigation/>
        <h1>Casas</h1>
        <div className="container mt-4">
        <h1>hi2</h1>
        <div className="row row-cols-1 row-cols-md-3 g-4">
            {houses.map((house, index) => (
            <div className="col" key={index}>
                <div className="card">
                <img
                    src={house.photo}
                    className="card-img-top"
                    alt="Casa"
                    style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body">
                    <h5 className="card-title">Dueño: {house.owner}</h5>
                    <p className="card-text">Ubicación: {house.location}</p>
                    <p className="card-text">Precio: ${house.price}</p>
                    <p className="card-text">Extensión: {house.extension} km2</p>
                </div>
                </div>
            </div>
            ))}
        </div>
        </div>
    </div>
    )
}