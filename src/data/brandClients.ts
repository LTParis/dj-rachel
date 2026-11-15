// Keep evidence with each client. Add approved logo files under public/brands/.
export interface BrandClient {
	name: string;
	logo?: string;
	event: string;
	evidence: string;
	logoSource?: string;
}

export const brandClients: BrandClient[] = [
	{
		name: "FP Movement",
		logo: "/brands/fp-movement.png",
		event: "Grand opening",
		evidence: "https://www.mixcloud.com/djrachellynch/dj-rachel-fp-movement-grand-opening-set-part-1/",
		logoSource: "https://theshopsatfarmingtonvalley.com/wp-content/uploads/sites/9/2025/01/FPMovement_Logo-FINAL-6383-1655310856-2.png",
	},
	{
		name: "Raising Cane’s",
		logo: "/brands/raising-canes.png",
		event: "Wethersfield grand opening",
		evidence: "https://www.ctpost.com/food/article/raising-canes-wethersfield-opening-ct-20382907.php",
		logoSource: "https://www.raisingcanes.com/",
	},
	{
		name: "SMG Corporate Services",
		logo: "/brands/smg.svg",
		event: "Company holiday party",
		evidence: "https://www.linkedin.com/posts/smgcorporateservices_smgcorporateservices-sscsecurity-sscbsi-activity-7272284608577122304-KXAH",
		logoSource: "https://www.smgcorporateservices.com/packages/worx/themes/worx/images/smg-logo.svg",
	},
	{
		name: "The Shops at Farmington Valley",
		logo: "/brands/farmington-valley.svg",
		event: "TogetHER event",
		evidence: "/reviews/#rachel-review-25",
		logoSource: "https://theshopsatfarmingtonvalley.com/wp-content/uploads/sites/9/2019/09/FV_logo.svg",
	},
	{
		name: "Bruce Bennett Nissan",
		event: "Company holiday party",
		evidence: "/reviews/#rachel-review-98",
	},
	{
		name: "New York Jets",
		logo: "/brands/new-york-jets.svg",
		event: "Events at MetLife Stadium",
		evidence: "https://www.idjnow.com/blog/gator-frameworks-id-series-adjustable-speaker-stands-review-with-dj-rachel/",
		logoSource: "https://static.www.nfl.com/t_q-best/league/api/clubs/logos/NYJ",
	},
];
