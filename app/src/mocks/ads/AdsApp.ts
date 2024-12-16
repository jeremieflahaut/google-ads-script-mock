import AdGroup from "./adGrouos/AdGroup";
import AdGroupSelector from "./adGrouos/AdGroupSelector";
import Campaign from "./campaigns/Campaign";
import CampaignSelector from "./campaigns/CampaignSelector";

export default class AdsApp {

    private static mockCampaigns: Campaign[] = [];
    private static mockAdgroups: AdGroup[] = [];

    static initCampaigns(mockCampaigns: Campaign[]): void {
        this.mockCampaigns = mockCampaigns;
    }

    static initAdGroups(adGroups: AdGroup[]): void {
        this.mockAdgroups = adGroups;
    }

    static campaigns(): CampaignSelector {
        return new CampaignSelector(AdsApp.mockCampaigns);
    }

    static performanceMaxCampaigns(): CampaignSelector {
        return new CampaignSelector(AdsApp.mockCampaigns.filter(campaign => campaign.type === "MULTI_CHANNEL"));
    }

    static adGroups(): AdGroupSelector {
        return new AdGroupSelector(this.mockAdgroups);
    }
}
