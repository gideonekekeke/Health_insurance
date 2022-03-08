import React from "react";
import styled from "styled-components";
const PropsComp1 = ({ avatar }) => {
	return (
		<Container>
			<CircHold>
				<ImageHold src={avatar} />
				<Title>Eye Test</Title>
			</CircHold>
		</Container>
	);
};

export default PropsComp1;

const Title = styled.div`
	margin-top: 10px;
	font-weight: bold;
`;
const Container = styled.div``;
const CircHold = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	@media screen and (max-width: 600px) {
		/* margin: 20px; */
	}
`;
const ImageHold = styled.img`
	height: 150px;
	width: 150px;
	background: silver;
	border-radius: 50%;
	object-fit: cover;
`;
