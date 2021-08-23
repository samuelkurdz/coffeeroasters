import { CollectionItem, PlanSection } from "../interfaces/interface";


export const planSections: PlanSection[] = [
	{
		id: '01',
		title: 'Preferences'
	},
	{
		id: '02',
		title: 'Bean Type'
	},
	{
		id: '03',
		title: 'Quantity'
	},
	{
		id: '04',
		title: 'Grind Option'
	},
	{
		id: '05',
		title: 'Deliveries'
	},
];

export const collectionItems: CollectionItem[] = [
	{
		title: '01',
		header: 'Pick your coffee',
		description: 'Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out.',
	},
	{
		title: '02',
		header: 'Choose the frequency',
		description: 'Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal.',
	},
	{

		title: '03',
		header: 'Receive and enjoy!',
		description: 'We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience.',
	},
];
