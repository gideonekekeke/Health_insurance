import React from "react";
import styled from "styled-components";
const PropsComp2 = ({ avatar }) => {
	return (
		<Container>
			<CircHold>
				<ImageHold src={avatar} />
				<Title>Eye Test</Title>
				<Cont>Adequate facilities to support our services </Cont>
			</CircHold>
		</Container>
	);
};

export default PropsComp2;

const Cont = styled.div`
	text-align: center;
	width: 220px;
	color: silver;
	margin-top: 10px;

	/* padding-bottom: 50px; */
`;
const Title = styled.div`
	margin-top: 10px;
	font-weight: bold;
`;
const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	height: 100%;
	transition: all 350ms;

	:hover {
		margin-top: -100px;
		cursor: pointer;

		background-image: linear-gradient(#57abf3, #57abf3, #000);

		border-radius: 10px;
	}
`;

const CircHold = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	height: 100%;
	color: white;

	margin-top: 50px;
	padding-bottom: 25px;

	margin: 20px;

	@media screen and (max-width: 600px) {
		margin: 20px;
	}
`;
const ImageHold = styled.img`
	height: 120px;
	width: 120px;
	background: silver;
	border-radius: 50%;

	border: 8px solid white;
	object-fit: cover;
`;
