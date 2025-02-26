"use server";

import FormData from "form-data";
import Mailgun from "mailgun.js";
const mailgun = new Mailgun(FormData);
const mg = mailgun.client({
	username: "api",
	key: process.env.MAILGUN_API_KEY,
});

async function verifyCaptcha(hcaptcha) {
	const data = new URLSearchParams();
	data.append("secret", process.env.HCAPTCHA_SECRET_KEY);
	data.append("response", hcaptcha);

	const response = await fetch("https://api.hcaptcha.com/siteverify", {
		method: "POST",
		headers: {
			"Content-Type": "application/x-www-form-urlencoded",
			Accept: "application/json",
		},
		body: data.toString(),
	});

	const responseData = await response.json();
	return responseData;
}

export async function submitForm(formData) {
	const {
		name,
		email,
		phone,
		project,
		message,
		formCheck: honeyPot,
		"h-captcha-response": hcaptcha,
	} = formData;

	if (honeyPot) {
		return {
			success: false,
			message: "Something went wrong, please try again later.",
		};
	}

	if (!hcaptcha) {
		return {
			success: false,
			message: "Please complete the captcha challenge.",
		};
	}

	try {
		const responseData = await verifyCaptcha(hcaptcha);

		if (!responseData.success) {
			return {
				success: false,
				message: "Captcha verification failed. Please try again.",
			};
		}

		const emailResponse = await mg.messages.create(process.env.MAILGUN_DOMAIN, {
			from: `NEKB <postmaster@${process.env.MAILGUN_DOMAIN}>`,
			to: ["kevinrkowalski@gmail.com"],
			subject: "New Website Form Submission",
			text: `
				Name: ${name}
				Email: ${email}
				Phone: ${phone}
				Project: ${project}
				Message: ${message}
			`,
		});

		// Check the status of the email response
		if (emailResponse.status !== 200) {
			return {
				success: false,
				message: "Failed to send email. Please try again later.",
			};
		}

		return { success: true, message: "Form submitted successfully!" };
	} catch (err) {
		return {
			success: false,
			message:
				"There was an error with the captcha challenge or email sending. Please try again later.",
		};
	}
}
