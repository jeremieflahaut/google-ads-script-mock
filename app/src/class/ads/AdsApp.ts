import AdGroup from "./adGrouos/AdGroup";
import AdGroupSelector from "./adGrouos/AdGroupSelector";
import Campaign from "./campaigns/Campaign";
import CampaignSelector from "./campaigns/CampaignSelector";

export default class AdsApp {

    private static mockCampaigns: Campaign[] = [];
    private static mockAdgroups: AdGroup[] = [];

    static initCampaigns(CampaignsMock: Campaign[]): void {
        this.mockCampaigns = CampaignsMock;
    }

    static initAdGroups(adGroupsMock: AdGroup[]): void {
        this.mockAdgroups = adGroupsMock;
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
