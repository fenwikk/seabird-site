import CryptoJS from "crypto-js";

export const encrypt = (text: string) => {
	const passphrase = import.meta.env.VITE_SECRET;
	console.log("hi");
	return CryptoJS.AES.encrypt(text, passphrase).toString();
};

export const decrypt = (ciphertext: string) => {
	const passphrase = import.meta.env.VITE_SECRET;
	const bytes = CryptoJS.AES.decrypt(ciphertext, passphrase);
	const originalText = bytes.toString(CryptoJS.enc.Utf8);
	return originalText;
};
