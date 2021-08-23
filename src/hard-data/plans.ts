import { PlanGroupInterface } from "../interfaces/interface";

export const Plans: PlanGroupInterface[] = [
	{
		header: 'How do you drink your coffee?',
		plans: [
			{
				title: 'Capsule',
				description: 'Compatible with Nespresso systems and similar brewers'
			},
			{
				title: 'Filter',
				description: 'For pour over or drip methods like Aeropress, Chemex, and V60'
			},
			{
				title: 'Espresso',
				description: 'Dense and finely ground beans for an intense, flavorful experience'
			},
		]
	},
	{
		header: 'What type of coffee?',
		plans: [
			{
				title: 'Single origin',
				description: 'Distinct, high quality coffee from a specific family-owned farm'
			},
			{
				title: 'Decaf',
				description: 'Just like regular coffee, except the caffeine has been removed'
			},
			{
				title: 'Blended',
				description: 'Combination of two or three dark roasted beans of organic coffees'
			},
		],
	},
	{
		header: 'How much would you like?',
		plans: [
			{
				title: '250g',
				description: 'Perfect for the solo drinker. Yields about 12 delicious cups.'
			},
			{
				title: '500g',
				description: 'Perfect option for a couple. Yields about 40 delectable cups.'
			},
			{
				title: '100g',
				description: 'Perfect for offices and events. Yields about 90 delightful cups.'
			},
		],
	},
	{
		header: 'Want us to grind them?',
		plans: [
			{
				title: 'Wholebean',
				description: 'Best choice if you cherish the full sensory experience'
			},
			{
				title: 'Filter',
				description: 'For drip or pour-over coffee methods such as V60 or Aeropress'
			},
			{
				title: 'Cafetiére',
				description: 'Course ground beans specially suited for french press coffee'
			},
		],
	},
	{
		header: 'How often should we deliver?',
		plans: [
			{
				title: 'Every week',
				description: '$14.00 per shipment. Includes free first-class shipping.'
			},
			{
				title: 'Every 2 weeks',
				description: '$17.25 per shipment. Includes free priority shipping.'
			},
			{
				title: 'Every month',
				description: '$22.50 per shipment. Includes free priority shipping.'
			},
		],
	},
];



