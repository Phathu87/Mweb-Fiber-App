import React, { useState, useEffect } from 'react';
import { fetchCampaigns } from '../services/api';

const CampaignSelector = ({ onSelect }) => {
    const [campaigns, setCampaigns] = useState([]);
    const [selectedCampaign, setSelectedCampaign] = useState('');

    useEffect(() => {
        fetchCampaigns().then(response => {
            setCampaigns(response.data.campaigns);
            setSelectedCampaign(response.data.campaigns[0]?.code || '');
        });
    }, []);

    const handleChange = (event) => {
        const { value } = event.target;
        setSelectedCampaign(value);
        onSelect(value);
    };

    return (
        <div>
            <h2>Select Fibre Campaign</h2>
            <select value={selectedCampaign} onChange={handleChange}>
                {campaigns.map(campaign => (
                    <option key={campaign.code} value={campaign.code}>
                        {campaign.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default CampaignSelector;
