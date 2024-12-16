export default class CampaignBidding {
	private targetRoas: number;

	constructor() {
		this.targetRoas = this.generateRandomRoas();
	}

	setTargetRoas(roas: number): void {
		if (roas < 1.0 || roas > 100000.0) {
			throw new Error('ROAS doit être compris entre 1.0 et 100000.0');
		}
		this.targetRoas = roas;
	}

	getTargetRoas(): number {
		return this.targetRoas;
	}

	private generateRandomRoas(): number {
		return parseFloat((Math.random() * (100000 - 1) + 1).toFixed(2));
	}
}