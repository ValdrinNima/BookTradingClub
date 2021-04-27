import React, { useState } from "react";
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
} from "./SigninElements";
import { useForm } from "react-hook-form";

interface FormData {
	username: string;
	email: string;
	password: string;
}

interface Props {}

const Signin = (props: Props) => {
	const { register, handleSubmit } = useForm<FormData>();
	const [registerMsg, setRegisterMsg] = useState<string>();

	const onSubmit = (data: FormData, e: any) => {
		fetch("http://localhost:5000/register", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			// credentials: "include",
			body: JSON.stringify(data),
		})
			.then((res) => res.json())
			.then((data) => setRegisterMsg(data.msg));
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
							{...register("username", { required: true })}
						/>
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
						<h3 style={{ color: "white" }}>{registerMsg}</h3>
						<FormButton type="submit">Continue </FormButton>
						<Text>Forgot password</Text>
					</Form>
				</FormContent>
			</FormWrap>
		</Container>
	);
};

export default Signin;
