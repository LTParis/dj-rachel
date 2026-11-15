# Corporate + Brands showcase

Researched November 15, 2026. This is a starting list, not a complete client roster. Client evidence and logo-source URLs also live beside each entry in `src/data/brandClients.ts`.

| Client | Event evidence | Logo |
| --- | --- | --- |
| FP Movement | [Rachel’s live grand-opening set](https://www.mixcloud.com/djrachellynch/dj-rachel-fp-movement-grand-opening-set-part-1/) explicitly identifies the event. | Retrieved from [the shopping center’s FP Movement listing](https://theshopsatfarmingtonvalley.com/tenants/fp-movement/) via its public media API. |
| Raising Cane’s | [CT Post’s opening announcement](https://www.ctpost.com/food/article/raising-canes-wethersfield-opening-ct-20382907.php) names DJ Rachel Lynch for the Wethersfield ribbon cutting on June 24, 2025. | Retrieved from the official Raising Cane’s homepage’s Prismic image asset. |
| SMG Corporate Services | [The company’s holiday-party post](https://www.linkedin.com/posts/smgcorporateservices_smgcorporateservices-sscsecurity-sscbsi-activity-7272284608577122304-KXAH) names DJ Rachel at its 2024 holiday party in Shelton, Connecticut. | Retrieved from the company’s official website. |
| The Shops at Farmington Valley | Supplied review `rachel-review-25` from Liz Ackerman, signed by The Shops at Farmington Valley Team, names Rachel at TogetHER. [The center’s event page](https://theshopsatfarmingtonvalley.com/event/together/) independently identifies the event, but does not itself name Rachel. | Retrieved from the center’s official website. |
| Bruce Bennett Nissan | Supplied review `rachel-review-98` from Todd Bennett explicitly names the annual dealership holiday party. | Displayed as plain text. The old dealership website now redirects to Route 7 Nissan; do not substitute the successor’s logo or a Nissan manufacturer logo for this historical client. |
| New York Jets | [I DJ NOW’s Rachel profile](https://www.idjnow.com/blog/gator-frameworks-id-series-adjustable-speaker-stands-review-with-dj-rachel/) explicitly describes her performances at MetLife Stadium for the NFL Jets. Rachel’s [authored DJ Blog bio](https://www.djblog.org/building-a-better-business/its-never-too-early-to-start-reading-your-crowd/) corroborates this. | Retrieved from the official NFL club-logo asset linked by the Jets website. |

## Extending the section

Add a client to `src/data/brandClients.ts` with its name, a supported event label, and evidence. Store its approved logo in `public/brands/`, then set `logo` and `logoSource`. Without an approved logo, the component displays the client’s name as plain text. Keep logos in their supplied colors and proportions.

The search also surfaced DJ-industry relationships with Electro-Voice, Promo Only, I DJ NOW, Digital DJ Tips, Crate Hackers, and NLFX. These were not presented as activation or holiday-party clients because the available evidence described partnerships, education, or equipment content.

No missing retail clients were inferred from tenant directories, nearby businesses, equipment use, or photographs. Rachel can supply additional client names and approved logos to extend this list.

## Additions confirmed by Rachel

Rachel supplied the following client relationships on November 15, 2026: Dunkin’ Brands, Floor & Decor, American Cancer Society, Perks NYC, NBC Connecticut, Town of Hamden, Torrco, Farmington Valley Lifestyle, Tuff Girl Fitness, Viking Construction, Anastasio Home, Premier Real Estate Group, and American Metal in Danbury. FP Movement was already present and was not duplicated. Rachel explicitly confirmed Anastasio Home in Connecticut and Premier Real Estate Group in Southington. No event subtype was supplied for these additions, so none is displayed.

Logo assets were retrieved from the organization’s official site or brand resource page. Source asset URLs:

- `dunkin-brands.jpg`: https://iprsoftwaremedia.com/285/files/20182/5aa986d12cfac20fb037a339_Dunkin%20Brands%20Logo/Dunkin%20Brands%20Logo_mid.jpg?v=02c5f1aa-215b-4779-ba87-a58a1774dfa4
- `floor-decor.svg`: https://www.flooranddecor.com/on/demandware.static/Sites-floor-decor-Site/-/default/dwa3cbddd6/img/default.svg
- `american-cancer-society.svg`: https://www.acsresources.org/wp-content/uploads/2023/10/ACS_RGB.svg
- `nbc-connecticut.png`: https://media.nbcconnecticut.com/2024/08/WVIT_station_logo_light.png
- `hamden.png`: https://www.hamden.com/ImageRepository/Document?documentID=8648
- `torrco.png`: https://woe.torrco.com/images/TorrcoNewName.png
- `tuff-girl.png`: https://images.squarespace-cdn.com/content/v1/667a19866dde1020805b8fac/d99db974-0571-4f7f-9f22-3567cfc50983/TG-white.png?format=500w
- `viking-construction.svg`: https://www.vikingconstruction.net/wp-content/themes/vikingconstruction/img/viking-construction-logo.svg
- `anastasio-home.svg`: https://anastasiohome.com/cdn/shop/files/AH_Logo_6C6557_ffdd332d-cd91-4f48-91d9-553ee6110d07.svg?v=1772722505&width=600
- `american-metal.svg`: https://www.americanmetalcustoms.com/cdn/shop/files/AMC_Script_Logo_-_Color_Dark_BG.svg?v=1736513528&width=600
- `premier-real-estate.png`: https://premierrealestategrp.com/wp-content/uploads/2025/01/PREG_Logo.png

Perks NYC and Farmington Valley Lifestyle display plain-text names pending matching logo files. Do not substitute a different Perks company or the City Lifestyle parent logo for these clients. Bruce Bennett Nissan also remains a plain-text entry. Dunkin’ Brands uses the historical corporate logo from its official press archive, not an Inspire Brands logo.

## Logo-only revision

At Rachel’s request, lululemon is first, the New York Jets entry and logo asset are removed, and event captions and text-only client placeholders are no longer displayed. Perks NYC and Bruce Bennett Nissan remain in the data for future logos but do not produce visible tiles. The grid contains 17 logos.

- lululemon: client relationship confirmed by Rachel. Official asset: https://corporate.lululemon.com/~/media/Images/L/Lululemon/logo/logo-black-full.svg
- Farmington Valley Lifestyle Magazine: replaced the text entry with the publication-specific logo URL embedded in the official City Lifestyle page’s magazine data: https://citylifestylehq.com/generated/logos/937/CityLifestyle_Farmington_Valley_City_Lifestyle_CT_Black1.png
- TUFFGIRL Fitness: retained one instance of the official Hamden gym logo from https://www.tuffgirlfitnessct.com/ and made the Hamden identity explicit in alternative text.

Earlier Jets research above is historical provenance only; it no longer appears on the page.

## University of New Haven

Rachel confirmed the client relationship and requested the last open logo position. The official university homepage header logo was downloaded from https://newhaven.edu/_resources/img/logos/header-logo.png and added as the final visible tile, bringing the grid to 18 logos. No event subtype was inferred.
