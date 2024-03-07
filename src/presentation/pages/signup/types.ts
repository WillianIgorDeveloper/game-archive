import { UseFormReturn } from "react-hook-form";

export type SignUpProps = {
	passwordType: string;
	setPasswordType: React.Dispatch<React.SetStateAction<string>>;
	SignUpform: UseFormReturn<SignUpParams>;
	SignUpSubmit: (values: SignUpParams) => void;
};

type SignUpParams = {
	tag: string;
	password: string;
};
