import React, { useState, useEffect } from 'react';
import { fetchProducts } from './services/api';
import CampaignSelector from './components/CampaignSelector';
import ProviderFilter from './components/ProviderFilter';
import PriceRangeSelector from './components/PriceRangeSelector';
import ProductList from './components/ProductList';
import './styles/App.css';

const priceRanges = [
    { min: 0, max: 699, label: 'R0 - R699' },
    { min: 700, max: 999, label: 'R700 - R999' },
    { min: 1000, max: 9999, label: 'R1000+' }
];

const App = () => {
    const [campaign, setCampaign] = useState('');
    const [products, setProducts] = useState([]);
    const [selectedProviders, setSelectedProviders] = useState([]);
    const [selectedPriceRanges, setSelectedPriceRanges] = useState([]);

    const handleCampaignChange = (selectedCampaign) => {
        setCampaign(selectedCampaign);
        fetchProductsForCampaign(selectedCampaign);
    };

    const handleProviderChange = (provider, isChecked) => {
        setSelectedProviders(prev =>
            isChecked ? [...prev, provider] : prev.filter(p => p !== provider)
        );
    };

    const handlePriceRangeChange = (rangeLabel, isChecked) => {
        setSelectedPriceRanges(prev =>
            isChecked ? [...prev, rangeLabel] : prev.filter(label => label !== rangeLabel)
        );
    };

    const fetchProductsForCampaign = (campaignCode) => {
        fetchProducts([campaignCode]).then(response => {
            const summarizedProducts = response.data.products.map(p => ({
                productCode: p.productCode,
                productName: p.productName,
                productRate: p.productRate,
                provider: p.subcategory.replace('Uncapped', '').replace('Capped', '').trim()
            }));
            setProducts(summarizedProducts);
        });
    };

    const filteredProducts = products.filter(product => {
        const inProviderSet = selectedProviders.length === 0 || selectedProviders.includes(product.provider);
        const inPriceRange = selectedPriceRanges.length === 0 || selectedPriceRanges.some(range => {
            const { min, max } = priceRanges.find(r => r.label === range);
            return product.productRate >= min && product.productRate <= max;
        });
        return inProviderSet && inPriceRange;
    });

    return (
        <div className="App">
            <CampaignSelector onSelect={handleCampaignChange} />
            <ProviderFilter
                providers={Array.from(new Set(products.map(p => p.provider)))}
                selectedProviders={selectedProviders}
                onProviderChange={handleProviderChange}
            />
            <PriceRangeSelector
                priceRanges={priceRanges}
                selectedPriceRanges={selectedPriceRanges}
                onPriceRangeChange={handlePriceRangeChange}
            />
            <ProductList products={filteredProducts} />
        </div>
    );
};

export default App;
