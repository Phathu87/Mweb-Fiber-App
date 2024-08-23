import React, { useState, useEffect } from 'react';
import { fetchProviderInfo } from '../services/api';

const ProviderFilter = ({ selectedProviders, onProviderChange }) => {
    const [providers, setProviders] = useState([]); // Default to empty array

    useEffect(() => {
        // Fetch provider information and set the state
        const fetchProviders = async () => {
            try {
                const data = await fetchProviderInfo();
                setProviders(data);
            } catch (error) {
                console.error('Error fetching providers:', error);
            }
        };

        fetchProviders();
    }, []);

    // Handle checkbox change events
    const handleChange = (event) => {
        const { value, checked } = event.target;
        onProviderChange(value, checked);
    };

    return (
        <div className="provider-filter">
            <h2>Select Fibre Providers</h2>
            {providers.map(provider => (
                <div key={provider.code} className="provider-item">
                    <input
                        type="checkbox"
                        id={provider.code}
                        value={provider.code}
                        checked={selectedProviders.includes(provider.code)}
                        onChange={handleChange}
                    />
                    <label htmlFor={provider.code}>
                        <img 
                            src={provider.url} 
                            alt={provider.name} 
                            title={provider.name} 
                            className="provider-icon" 
                        />
                    </label>
                </div>
            ))}
        </div>
    );
};

export default ProviderFilter;