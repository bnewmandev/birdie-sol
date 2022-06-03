export interface CalenderEvent {
	id: number;
	title: string;
	allDay: boolean;
	start: Date;
	end: Date;
	color: string;
}

export interface GlobalState {
	eventArray: CalenderEvent[];
}

export interface PreRender {
	ui: any;
	opts: Object;
}

export interface ValidateUserResponse {
	isAnyEntry: boolean;
	isIdValid: boolean;
	response: string;
}

export interface CalendarProps {
	events?: CalenderEvent[];
	defaultDate?: Date;
}
