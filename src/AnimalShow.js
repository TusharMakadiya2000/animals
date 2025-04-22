import { useState } from "react";
import bird from "./svg/bird.svg";
import cat from "./svg/cat.svg";
import cow from "./svg/cow.svg";
import dog from "./svg/dog.svg";
import gator from "./svg/gator.svg";
import heart from "./svg/heart.svg";
import horse from "./svg/horse.svg";

const svgMap = {
    bird,
    cat,
    cow,
    dog,
    gator,
    heart,
    horse,
};

function AnimalShow({ type }) {
    const [clicks, setClicks] = useState(0);

    const handleClick = () => {
        setClicks(clicks + 1);
    };

    return (
        <div
            onClick={handleClick}
            className="relative border border-gray-300 p-2.5 rounded-md m-2.5 shadow-gray-300 shadow-md"
        >
            <img className="h-[200px]" src={svgMap[type]} alt="animal" />
            <img
                className="absolute bottom-[10%] right-[10%]"
                src={heart}
                alt="heart"
                style={{ width: 10 + 10 * clicks + "px" }}
            />
        </div>
    );
}
export default AnimalShow;
