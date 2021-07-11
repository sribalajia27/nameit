import React from 'react'
import './NameCard.css'
const NameCard = ({suggestedName}) => {

    const domainUrl = 'https://www.namecheap.com/domains/registration/results/?domain='
    return (

        <a target="_blank" rel="noreferrer" className="name-click" href={`${domainUrl}${suggestedName}`}>
        <div className="result-name-card">
            <p className="result-name">{suggestedName}</p>
        </div>
        </a>

    )
}

export default NameCard
