export function addHours(date: Date, hours: number): Date {
	const newDate = new Date(new Date(date).setHours(date.getHours() + hours));
	return newDate;
}

export function toTimeString(time: number | string | Date) {
	let datetime: Date;
	if (typeof time === "number" || typeof time === "string") {
		datetime = new Date(time);
	} else {
		datetime = time;
	}
	return datetime.toLocaleTimeString("en-uk", {
		timeStyle: "short",
	});
}
