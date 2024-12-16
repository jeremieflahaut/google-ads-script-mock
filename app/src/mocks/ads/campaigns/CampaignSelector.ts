import CampaignIterator from './CampaignIterator';
import Campaign from './Campaign';

export default class CampaignSelector {
	private campaigns: Campaign[];
	private ids: number[] = [];
	private conditions: string[] = [];

	constructor(campaigns: Campaign[]) {
		this.campaigns = campaigns;
	}

	withIds(ids: number[]): this {
		this.ids = ids;
		return this;
	}

	withCondition(condition: string): this {
		this.conditions.push(condition);
		return this;
	}

	get(): CampaignIterator {

		let filteredCampaigns = this.campaigns;

		if (this.ids.length > 0) {
			filteredCampaigns = filteredCampaigns.filter(campaign => this.ids.includes(campaign.getId()));
		}

		if (this.conditions.length > 0) {
			this.conditions.forEach(condition => {
				const [field, operator, value] = this.parseCondition(condition);
				filteredCampaigns = filteredCampaigns.filter(campaign => {
					const fieldValue = campaign[field as keyof Campaign];
					switch (operator) {
						case '=':
							return this.isValidField(field, campaign) && campaign[field as keyof Campaign] === value;
						case 'CONTAINS':
							return this.isValidField(field, campaign) && (campaign[field as keyof Campaign] as string)?.includes(value);
						case '!=':
							return this.isValidField(field, campaign) && campaign[field as keyof Campaign] !== value;
						default:
							throw new Error(`Opérateur non supporté : ${operator}`);
					}
				});
			});
		}

		return new CampaignIterator(filteredCampaigns);

	}

	private parseCondition(condition: string): [string, string, string] {
		const regex = /^(\w+)\s*([=|!=|CONTAINS]+)\s*'([^']+)'$/;
		const match = condition.match(regex);

		if (!match) {
			throw new Error(`Condition invalide : ${condition}`);
		}

		return [match[1], match[2], match[3]];
	}

	private isValidField(field: string, campaign: Campaign): boolean {
		return field in campaign;
	}

}
