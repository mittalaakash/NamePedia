import { React } from 'react';
import NameCard from '../NameCard/NameCard';
import './ResultsContainer.css';
const ResultsContainer = ({ suggestedNames }) => {
    const suggestions = suggestedNames.map((suggestedName) => {
        return <NameCard key={suggestedName} suggestedName={suggestedName} />;
    });
    return <div className="results-container">{suggestions}</div>;
};
export default ResultsContainer;
