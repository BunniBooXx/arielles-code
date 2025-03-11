import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';

const PetGame = () => {
    const [pet, setPet] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('http://127.0.0.1:5000/pet/read/1')
            .then(response => {
                setPet(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching pet data:', error);
                setLoading(true);
            });
    }, []);

    const feedPet = () => {
        if (pet) {
            axios.post(`http://127.0.0.1:5000/pet/feed/${pet.id}`, { food_amount: 3 })
                .then(response => {
                    setPet(prevPet => ({
                        ...prevPet,
                        hunger_level: Math.max(prevPet.hunger_level - 1, 0),
                        image_url: response.data.image_url,
                        state: 'eating',
                        dialogue: 'Yummy! Thanks for the food!'
                    }));
                })
                .catch(error => console.error('Error feeding pet:', error));
        }
    };

    const walkPet = () => {
        if (pet) {
            axios.post(`http://127.0.0.1:5000/pet/walk/${pet.id}`, { walk_duration: 3 })
                .then(response => {
                    setPet(prevPet => ({
                        ...prevPet,
                        happiness_level: Math.min(prevPet.happiness_level + 1, 10),
                        hunger_level: Math.min(prevPet.hunger_level + 1, 10),
                        image_url: response.data.image_url,
                        state: 'walking',
                        dialogue: 'I love walking!'
                    }));
                })
                .catch(error => console.error('Error walking pet:', error));
        }
    };

    const petBath = () => {
        if (pet) {
            axios.post(`http://127.0.0.1:5000/pet/bath/${pet.id}`, { bath_duration: 1 })
                .then(response => {
                    setPet(prevPet => ({
                        ...prevPet,
                        happiness_level: Math.min(prevPet.happiness_level + 1, 10),
                        image_url: response.data.image_url,
                        state: 'bathing',
                        dialogue: 'Bath time is so refreshing!'
                    }));
                })
                .catch(error => console.error('Error bathing pet:', error));
        }
    };

    if (loading) return <Navigate to="/under-construction" replace />;

    return (
        <div>
            <h1>{pet.name} the {pet.species}</h1>
            <p>{pet.description}</p>
            <p>Hunger Level: {pet.hunger_level}</p>
            <p>Happiness Level: {pet.happiness_level}</p>
            <p>{pet.dialogue}</p>
            <div>
                <button onClick={feedPet}>Feed</button>
                <button onClick={walkPet}>Walk</button>
                <button onClick={petBath}>Bath</button>
            </div>
            <div>
                <img src={pet.image_url} alt={pet.name} />
            </div>
        </div>
    );
};

export default PetGame;

