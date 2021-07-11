import React from 'react';
import './ResultContainer.css';
import NameCard from './../NameCard/NameCard'

const ResultContainer = ({suggestedNames}) => {

    const suggestedNameJsx = suggestedNames.map((suggestedName) => {
        // console.log({suggestedName});

        return <NameCard key={suggestedName} suggestedName={suggestedName}/>;

    });

    // console.log(suggestedNameJsx)
    return (
        <div className="result-container">
            
            {suggestedNameJsx}
            
           
        </div>
    )
}

export default ResultContainer;
