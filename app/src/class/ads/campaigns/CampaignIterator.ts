import Campaign from "./Campaign";

export default class CampaignIterator {
  private campaigns: Campaign[];

  constructor(campaigns: Campaign[]) {
    this.campaigns = [...campaigns];
  }

  hasNext(): boolean {
    return this.campaigns.length > 0;
  }

  next(): Campaign {
    if (!this.hasNext()) {
      throw new Error("No more campaigns available.");
    }
    return this.campaigns.shift() as Campaign;
  }
}
