import React, { useState, useEffect } from "react";
import {axiosWithAuth} from '../utils/axiosWithAuth'

import AnimalForm from "./AnimalForm.js";
import AnimalList from "./AnimalsList.js";

export default function AnimalDashboard(props) {
    
    const [ animals, setAnimals ] = useState([]);
    const [ update, setUpdate] = useState(false)
    
    // How can get fetch the data from the server when the component mounts?
    useEffect(() => {
        axiosWithAuth()
        .get('/api/animals')
        .then(res => {
            // console.log(res.data)
            setAnimals(res.data)
        })
        .catch(err => console.log('error dashboard', err))
    }, [update])

    console.log(animals)
    // How can we capture and set that data to state?

    return(
        <div className="dash">
            <AnimalForm animals={animals} updateAnimals={setAnimals} setUpdating={setUpdate} updating={update}/>
            <AnimalList animals={animals} />
        </div>
    )
}