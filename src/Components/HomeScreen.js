import React from "react";
import styled from "styled-components";
import { GlobalButton } from "./GlobalButton";

const HomeScreen = ({ date, course, price }) => {
	const year = date.getFullYear();
	const month = date.toLocaleString("en-US", { month: "long" });
	const day = date.getDay();

	return (
		<Container>
			<Wrapper>
				<Holder>
					<DateHold>
						<div>{year}</div>
						<div>{month}</div>
						<div>{day}</div>
					</DateHold>
					<CourseHold>{course}</CourseHold>
					<PriceHold>{price}</PriceHold>
				</Holder>
			</Wrapper>
		</Container>
	);
};

export default HomeScreen;

const DateHold = styled.div`
	/* height: 70px; */
	width: 100px;
	background-color: black;
	color: white;
	text-align: center;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 10px;
	border-radius: 10px;
	transition: all 350ms;
	flex-direction: column;

	:hover {
		background-color: silver;
		color: black;
		cursor: pointer;
	}
`;
const CourseHold = styled.div`
	font-weight: bold;
`;
const PriceHold = styled.div`
	color: orange;
	font-weight: bold;
	font-size: 20px;
`;

const Wrapper = styled.div`
	height: 300px;
	width: 800px;
	background: black;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 5px;
	margin: 10px;
`;
const Holder = styled.div`
	height: 200px;
	width: 700px;
	background: white;
	display: flex;
	justify-content: space-around;
	align-items: center;
	border-radius: 5px;
`;

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	/* height: 100vh; */
`;
