import axios from "axios";
import { ValidateUserResponse } from "../types";

const userValidation = async (id: string): Promise<ValidateUserResponse> => {
	if (id.length <= 1) {
		return new Promise<ValidateUserResponse>((res, rej) => {
			res({
				isAnyEntry: false,
				isIdValid: false,
				response: "No Recipient Selected",
				id: "",
			});
		});
	}
	let request = `/api/validateUser?id=${id}`;

	const recipientData = await axios.get(request);

	if (recipientData.data.code === 200) {
		return {
			isAnyEntry: true,
			isIdValid: true,
			response: "Recipient: " + recipientData.data.recipientId,
			id: id,
		};
	} else if (recipientData.data.code === 404) {
		return new Promise<ValidateUserResponse>((res, rej) => {
			res({
				isAnyEntry: true,
				isIdValid: false,
				response: "Invalid Recipient ID",
				id: "",
			});
		});
	} else {
		return new Promise<ValidateUserResponse>((res, rej) => {
			res({
				isAnyEntry: false,
				isIdValid: false,
				response: "Internal Server Error",
				id: "",
			});
		});
	}
};

export default userValidation;
