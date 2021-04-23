import React from "react";
import {
	Container,
	FormWrap,
	Icon,
	FormContent,
	Form,
	FormH1,
	FormLabel,
	FormInput,
	FormButton,
	Text,
} from "./LoginElements";
import { useForm } from "react-hook-form";

interface FormData {
	email: string;
	password: string;
}

interface Props {}

const Login = (props: Props) => {
	const { register, handleSubmit } = useForm<FormData>();

	const onSubmit = (data: FormData, e: any) => {
		fetch("http://localhost:5000", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			credentials: "include",
			body: JSON.stringify(data),
		});
	};

	return (
		<Container>
			<FormWrap>
				<Icon to="/"></Icon>
				<FormContent>
					<Form onSubmit={handleSubmit(onSubmit)}>
						<FormH1>Sign in to your account</FormH1>
						<FormLabel htmlFor="for">Email</FormLabel>
						<FormInput
							type="email"
							{...register("email", { required: true })}
						/>
						<FormLabel htmlFor="for">Password</FormLabel>
						<FormInput
							type="password"
							{...register("password", { required: true })}
						/>
						<FormButton type="submit">Continue </FormButton>
						<Text>Forgot password</Text>
					</Form>
				</FormContent>
			</FormWrap>
		</Container>
	);
};

export default Login;
