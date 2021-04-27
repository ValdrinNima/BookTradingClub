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
	username: string;
	password: string;
}

interface Props {}

const Login = (props: Props) => {
	const { register, handleSubmit } = useForm<FormData>();

	const onSubmit = (data: FormData, e: any) => {
		fetch("http://localhost:5000/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			credentials: "include",
			body: JSON.stringify(data),
		})
			.then((res) => res.json())
			.then((data) => console.log(data));
	};

	return (
		<Container>
			<FormWrap>
				<Icon to="/"></Icon>
				<FormContent>
					<Form onSubmit={handleSubmit(onSubmit)}>
						<FormH1>Sign in to your account</FormH1>
						<FormLabel htmlFor="for">Username</FormLabel>
						<FormInput
							type="text"
							{...register("username", { required: true })}
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
