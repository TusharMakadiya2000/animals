import { useState } from "react";
import "./App.css";
import AnimalShow from "./AnimalShow";

function getRandomAnimal() {
    const animals = ["bird", "cat", "cow", "dog", "gator", "horse"];
    return animals[Math.floor(Math.random() * animals.length)];
}

function App() {
    const [animals, setAnimals] = useState([]);
    const handleClick = () => {
        setAnimals([...animals, getRandomAnimal()]);
    };

    const renderedAnimals = animals.map((animal, index) => {
        return <AnimalShow type={animal} key={index} />;
    });

    return (
        <div>
            <div className="flex justify-center">
                <button
                    onClick={handleClick}
                    className="flex justify-center items-center w-36 bg-green-300 rounded-[4px]"
                >
                    Add Animal
                </button>
            </div>
            <div className="flex flex-wrap justify-center">
                {renderedAnimals}
            </div>
        </div>
    );
}

export default App;
