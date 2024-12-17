import SpreadsheetApp from "@class/spreadSheets/SpreadsheetApp";
import AdsApp from "@class/ads/AdsApp";
import adGroupsMock from "@mocks/AdGroupsMock";
import campaignsMock from "@mocks/CampaignsMock";
import spreadsheetsMock from "@mocks/SpreadSheetsMock";

AdsApp.initCampaigns(campaignsMock);
AdsApp.initAdGroups(adGroupsMock);

SpreadsheetApp.init(spreadsheetsMock)

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