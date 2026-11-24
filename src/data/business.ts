// Business facts used by structured data (schema.org) and llms.txt.
// Every value here must already be visible on the site and approved by Rachel.
// When a social link, email, or phone number changes in the footer, update it here too.

export const business = {
	name: "DJ Rachel Entertainment",
	person: "Rachel Lynch",
	personAlternateName: "DJ Rachel",
	jobTitle: "DJ and MC",
	description:
		"Personalized DJ and MC services for weddings, corporate events, and private celebrations in Connecticut and across the Northeast.",
	email: "djrachel@me.com",
	telephone: "+1-203-297-8191",
	areaServed: [
		{ "@type": "State", name: "Connecticut" },
		{ "@type": "Place", name: "Northeastern United States" },
	],
	sameAs: [
		"https://www.youtube.com/@DJRachelLynch",
		"https://www.mixcloud.com/djrachellynch/",
		"https://www.instagram.com/djrachelrlynch/",
		"https://www.facebook.com/DJRachelRLynch",
	],
};

// Services offered, used for Service structured data on each service page.
export const services = {
	weddings: {
		name: "Wedding DJ and MC",
		serviceType: "Wedding DJ and MC",
		path: "/weddings/",
		description: "Wedding DJ and MC services, ceremony audio, and event coordination, from the ceremony to the last song.",
	},
	corporate: {
		name: "Corporate and brand event DJ",
		serviceType: "Corporate event DJ and host",
		path: "/corporate/",
		description: "DJ and event-host services for corporate events, brand activations, grand openings, company celebrations, and galas.",
	},
	private: {
		name: "Private party DJ",
		serviceType: "Private event DJ",
		path: "/private-events/",
		description: "DJ services for birthdays, anniversaries, reunions, graduations, and private celebrations.",
	},
} as const;

// Names used for breadcrumb trails in structured data, keyed by URL segment.
export const sectionNames: Record<string, string> = {
	weddings: "Weddings",
	corporate: "Corporate events",
	"private-events": "Private events",
	about: "About",
	reviews: "Reviews",
	writing: "Blogs",
};

/** schema.org Service node for a service page; pass it to SiteLayout's `schema` prop. */
export function serviceSchema(key: keyof typeof services, site: URL) {
	const service = services[key];
	const url = new URL(service.path, site).href;
	return {
		"@type": "Service",
		"@id": `${url}#service`,
		name: service.name,
		serviceType: service.serviceType,
		description: service.description,
		url,
		provider: { "@id": new URL("/#organization", site).href },
		areaServed: business.areaServed,
	};
}
