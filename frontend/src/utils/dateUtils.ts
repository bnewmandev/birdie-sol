export function addHours(date: Date, hours: number): Date {
	const newDate = new Date(new Date(date).setHours(date.getHours() + hours));
	return newDate;
}
