import { StyledClock } from "./styled";
import { useCurrentDate } from "./useCurrentDate";
import { FormatClock } from "./useCurrentDate";

const Clock = () => {
    const {
        date,
    } = useCurrentDate();
    
    return (
        <StyledClock>
            Dziś jest {FormatClock(date)}
        </StyledClock>
    );
};

export default Clock;