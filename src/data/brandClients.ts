// Keep evidence with each client. Add approved logo files under public/brands/.
export interface BrandClient {
	name: string;
	logo?: string;
	event?: string;
	evidence: string;
	logoSource?: string;
	logoBackground?: "dark";
}

export const brandClients: BrandClient[] = [
	{
		name: "Dunkin’ Brands",
		logo: "/brands/dunkin-brands.jpg",
		evidence: "Client relationship confirmed by Rachel, November 15, 2026.",
		logoSource: "https://news.dunkindonuts.com/file?fid=5aa986d12cfac20fb037a339",
	},
	{
		name: "Floor & Decor",
		logo: "/brands/floor-decor.svg",
		evidence: "Client relationship confirmed by Rachel, November 15, 2026.",
		logoSource: "https://www.flooranddecor.com/",
	},
	{
		name: "American Cancer Society",
		logo: "/brands/american-cancer-society.svg",
		evidence: "Client relationship confirmed by Rachel, November 15, 2026.",
		logoSource: "https://www.acsresources.org/socialassets/american-cancer-society-logos-all/",
	},
	{
		name: "Perks NYC",
		evidence: "Client name confirmed by Rachel, November 15, 2026. Original logo pending.",
	},
	{
		name: "NBC Connecticut",
		logo: "/brands/nbc-connecticut.png",
		evidence: "Client relationship confirmed by Rachel, November 15, 2026.",
		logoSource: "https://media.nbcconnecticut.com/2024/08/WVIT_station_logo_light.png",
	},
	{
		name: "Town of Hamden",
		logo: "/brands/hamden.png",
		evidence: "Client relationship confirmed by Rachel, November 15, 2026.",
		logoSource: "https://www.hamden.com/ImageRepository/Document?documentID=8648",
	},
	{
		name: "Torrco",
		logo: "/brands/torrco.png",
		evidence: "Client relationship confirmed by Rachel, November 15, 2026.",
		logoSource: "https://woe.torrco.com/images/TorrcoNewName.png",
	},
	{
		name: "Farmington Valley Lifestyle",
		evidence: "Client name confirmed by Rachel, November 15, 2026. Publication-specific logo pending.",
	},
	{
		name: "Tuff Girl Fitness",
		logo: "/brands/tuff-girl.png",
		logoBackground: "dark",
		evidence: "Client relationship confirmed by Rachel, November 15, 2026.",
		logoSource: "https://www.tuffgirlfitnessct.com/",
	},
	{
		name: "Viking Construction",
		logo: "/brands/viking-construction.svg",
		logoBackground: "dark",
		evidence: "Client relationship confirmed by Rachel, November 15, 2026.",
		logoSource: "https://www.vikingconstruction.net/wp-content/themes/vikingconstruction/img/viking-construction-logo.svg",
	},
	{
		name: "Anastasio Home",
		logo: "/brands/anastasio-home.svg",
		evidence: "Client relationship and Connecticut identity confirmed by Rachel, November 15, 2026.",
		logoSource: "https://anastasiohome.com/",
	},
	{
		name: "Premier Real Estate Group",
		logo: "/brands/premier-real-estate.png",
		evidence: "Client relationship and Southington identity confirmed by Rachel, November 15, 2026.",
		logoSource: "https://premierrealestategrp.com/wp-content/uploads/2025/01/PREG_Logo.png",
	},
	{
		name: "American Metal",
		logo: "/brands/american-metal.svg",
		logoBackground: "dark",
		evidence: "Client relationship and Danbury location confirmed by Rachel, November 15, 2026.",
		logoSource: "https://www.americanmetalcustoms.com/",
	},
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
