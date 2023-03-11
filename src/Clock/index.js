import { StyledClock } from "./styled";
import { useCurrentDate } from "./useCurrentDate";
import { FormatDate } from "./useCurrentDate";

const Clock = () => {
    const {
        date,
    } = useCurrentDate();
    
    return (
        <StyledClock>
            Dziś jest {FormatDate(date)}
        </StyledClock>
    );
};

export default Clock;