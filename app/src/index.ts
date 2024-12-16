import Campaign from "./mocks/ads/campaigns/Campaign";
import AdsApp from "./mocks/ads/AdsApp";
import AdGroup from "./mocks/ads/adGrouos/AdGroup";

const mockCampaigns = [
    new Campaign(123, 'Campagne Search', 'SEARCH', 'MAXIMIZE_CONVERSION_VALUE'),
    new Campaign(456, 'Campagne Display', 'DISPLAY', 'MAXIMIZE_CONVERSION_VALUE'),
    new Campaign(789, 'Campagne Performance Max', 'MULTI_CHANNEL', 'MAXIMIZE_CONVERSION_VALUE'),
];

AdsApp.initCampaigns(mockCampaigns);

const mockAdGroups = [
    new AdGroup(1, 'Ad Group 1', 'SEARCH'),
    new AdGroup(2, 'Ad Group 2', 'DISPLAY'),
    new AdGroup(3, 'Ad Group 3', 'SEARCH'),
];

AdsApp.initAdGroups(mockAdGroups);

/**
 * 
 * A copier sur Plateforme Google Ads
 * 
 */
const CONFIG = {};

function main() {


}

/* ################ */

main();