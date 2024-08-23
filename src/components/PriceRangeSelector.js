import React from 'react';

const PriceRangeSelector = ({ priceRanges, selectedPriceRanges, onPriceRangeChange }) => {
    const handleChange = (event) => {
        const { value, checked } = event.target;
        onPriceRangeChange(value, checked);
    };

    return (
        <div>
            <h2>Select Price Ranges</h2>
            {priceRanges.map(range => (
                <div key={range.label}>
                    <input
                        type="checkbox"
                        value={range.label}
                        checked={selectedPriceRanges.includes(range.label)}
                        onChange={handleChange}
                    />
                    {range.label}
                </div>
            ))}
        </div>
    );
};

export default PriceRangeSelector;
