import React from 'react';

const ProviderFilter = ({ providers, selectedProviders, onProviderChange }) => {
    const handleChange = (event) => {
        const { value, checked } = event.target;
        onProviderChange(value, checked);
    };

    return (
        <div>
            <h2>Select Fibre Providers</h2>
            {providers.map(provider => (
                <div key={provider}>
                    <input
                        type="checkbox"
                        value={provider}
                        checked={selectedProviders.includes(provider)}
                        onChange={handleChange}
                    />
                    {provider}
                </div>
            ))}
        </div>
    );
};

export default ProviderFilter;
