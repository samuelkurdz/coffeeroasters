export interface BgImages {
	desktopBg: string;
	tabletBg: string;
	mobileBg: string;
}

export interface PlanGroupInterface {
	header: string;
	plans: Plan[];
}

export interface Plan {
	title: string;
	description: string;
}