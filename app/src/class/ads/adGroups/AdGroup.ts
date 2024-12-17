import AdGroupBidding from "./AdGroupBidding";

export default class AdGroup {
    public id: number;
    public name: string;
    public type: string;
    private biddingInstance: AdGroupBidding;

    constructor(id: number, name: string, type: string) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.biddingInstance = new AdGroupBidding();
    }

    getId(): number {
        return this.id;
    }

    getName(): string {
        return this.name;
    }

    getType(): string {
        return this.type;
    }

    bidding(): AdGroupBidding {
        return this.biddingInstance;
    }
    
}