import { useState, useEffect } from "react";
import { StyledClock } from "./styled";

const dateFormat = {
    weekday: "long",
    day: "numeric",
    month: "long",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
};

const Clock = () => {
    const [date, setDate] = useState(new Date());

    useEffect (() => {
        const intervalId = setInterval(() => {
            setDate(new Date());
        }, 1000);

    return () => {
        clearInterval(intervalId)
    }
}, []);

return (
    <StyledClock>
        Dziś jest {date.toLocaleString(undefined, dateFormat)}
    </StyledClock>
    );
};

export default Clock;