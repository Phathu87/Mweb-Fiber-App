import axios from 'axios';

const baseURL = 'https://apigw.mweb.co.za/prod/baas/proxy';

export const fetchCampaigns = () => axios.get(`${baseURL}/marketing/campaigns/fibre?channels=120&visibility=public`);
export const fetchProducts = (promocodes) => axios.get(`${baseURL}/marketing/products/promos/${promocodes.join(',')}?sellable_online=true`);
