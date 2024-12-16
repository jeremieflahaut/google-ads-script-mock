import CampaignBidding from "./CampaignBidding";

export default class Campaign {
	public id: number;
	public name: string;
	public strategy: string;
	public type: string;
	private biddingInstance: CampaignBidding;

	constructor(id: number, name: string, type: string, biddingStrategyType: string) {
		this.id = id;
		this.name = name;
		this.type = type;
		this.strategy = biddingStrategyType;
		this.biddingInstance = new CampaignBidding();
	}

	getId(): number {
		return this.id;
	}

	getName(): string {
		return this.name;
	}

	getBiddingStrategyType(): string {
		return this.strategy;
	}

	bidding(): CampaignBidding {
		return this.biddingInstance;
	}
}