import Campaign from "../class/ads/campaigns/Campaign";

const campaignsMock = [
    new Campaign(123, 'Campagne Search', 'SEARCH', 'MAXIMIZE_CONVERSION_VALUE'),
    new Campaign(456, 'Campagne Display', 'DISPLAY', 'MAXIMIZE_CONVERSION_VALUE'),
    new Campaign(789, 'Campagne Performance Max', 'MULTI_CHANNEL', 'MAXIMIZE_CONVERSION_VALUE'),
];

export default campaignsMock;