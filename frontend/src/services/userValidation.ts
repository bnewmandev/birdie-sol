import axios from "axios";
import { ValidateUserResponse } from "../types";

const userValidation = async (recipientId: string): Promise<ValidateUserResponse> => {
	if (recipientId.length === 0) {
		return new Promise<ValidateUserResponse>((res, rej) => {
			res({
				isAnyEntry: false,
				isIdValid: false,
				response: "No Recipient Selected",
			});
		});
	}
	let request = `/validateUser?id=${recipientId}`;
	if (process.env.NODE_ENV === "development") {
		request = `http://localhost:8000/validateUser?id=${recipientId}`;
	}

	const recipientData = await axios.get(request);

	if (recipientData.data.code === 200) {
		return {
			isAnyEntry: true,
			isIdValid: true,
			response: recipientData.data.id,
		};
	} else if (recipientData.data.code === 404) {
		return new Promise<ValidateUserResponse>((res, rej) => {
			res({
				isAnyEntry: true,
				isIdValid: false,
				response: "Invalid Recipient ID",
			});
		});
	} else {
		return new Promise<ValidateUserResponse>((res, rej) => {
			res({
				isAnyEntry: false,
				isIdValid: false,
				response: "Internal Server Error",
			});
		});
	}
};

export default userValidation;
