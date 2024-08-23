// src/services/api.js

import axios from 'axios';

const baseURL = 'https://apigw.mweb.co.za/prod/baas/proxy';

// Fetch campaigns from the API
export const fetchCampaigns = () => {
    return axios.get(`${baseURL}/marketing/campaigns/fibre?channels=120&visibility=public`)
        .then(response => {
            console.log('Campaigns API response:', response.data);
            return response.data; // Adjust this based on the actual structure of the API response
        })
        .catch(error => {
            console.error('Campaigns API error:', error);
            throw error; // Rethrow the error after logging it
        });
};

// Fetch products based on selected campaign(s)
export const fetchProducts = (promocodes) => {
    return axios.get(`${baseURL}/marketing/products/promos/${promocodes.join(',')}?sellable_online=true`)
        .then(response => {
            console.log('Products API response:', response.data);
            return response.data; // Adjust this based on the actual structure of the API response
        })
        .catch(error => {
            console.error('Products API error:', error);
            throw error; // Rethrow the error after logging it
        });
};

// Fetch provider information (mock data for now)
export const fetchProviderInfo = () => Promise.resolve([
    { code: "centurycity", name: "Century City Connect", url: "https://www.mweb.co.za/media/images/providers/provider-century.png" },
    { code: "evotel", name: "Evotel", url: "https://www.mweb.co.za/media/images/providers/provider-evotel.png" },
    { code: "octotel", name: "Octotel", url: "https://www.mweb.co.za/media/images/providers/provider-octotel.png" },
    { code: "vumatel", name: "Vumatel", url: "https://www.mweb.co.za/media/images/providers/provider-vuma.png" },
    { code: "openserve", name: "Openserve", url: "https://www.mweb.co.za/media/images/providers/provider-openserve.png" },
    { code: "frogfoot", name: "Frogfoot", url: "https://www.mweb.co.za/media/images/providers/provider-frogfoot.png" },
    { code: "mfn", name: "MFN", url: "https://www.mweb.co.za/media/images/providers/provider-metrofibre.png" },
    { code: "vodacom", name: "Vodacom", url: "https://www.mweb.co.za/media/images/providers/provider-vodacom.png" },
    { code: "linkafrica", name: "Link Africa", url: "https://www.mweb.co.za/media/images/providers/provider-linkafrica.png" },
    { code: "linklayer", name: "Link Layer", url: "https://www.mweb.co.za/media/images/providers/provider-link-layer.png" },
    { code: "lightstruck", name: "Lightstruck", url: "https://www.mweb.co.za/media/images/providers/provider-lightstruck.png" },
    { code: "mitchells", name: "Mitchells Fibre", url: "https://www.mweb.co.za/media/images/providers/provider-mitchells.png" },
    { code: "vumareach", name: "Vuma Reach", url: "https://www.mweb.co.za/media/images/providers/provider-vuma.png" }
]);
