const Result = ({ showResult, result }) => {
    if (!showResult.inAmout) {
        return null;
    };
    
        return (
            <>
                {showResult.inAmout} {showResult.inCurrency} = {result.toFixed(2)} {showResult.outCurrency}
            </>
        ); 
};

export default Result;