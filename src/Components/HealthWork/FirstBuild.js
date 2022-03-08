import React from "react";
import styled from "styled-components";
import pic from "./img/2.png";
import pic2 from "./img/phone.png";
import PropsComp1 from "./PropsComp1";
import pic3 from "./img/5.jpg";
const FirstBuild = () => {
	return (
		<Container>
			<Wrapper>
				<h2>Check in For Regular Test and Vaccination</h2>
				<br />
				<ContHold>
					<PropsComp1 avatar={pic3} />
					<PropsComp1 avatar={pic3} />
					<PropsComp1 avatar={pic3} />
					<PropsComp1 avatar={pic3} />
					<PropsComp1 avatar={pic3} />
				</ContHold>
			</Wrapper>
		</Container>
	);
};

export default FirstBuild;

const Container = styled.div``;
const ContHold = styled.div`
	display: flex;
	justify-content: space-around;
	width: 70%;
	flex-wrap: wrap;
	align-items: center;
	@media screen and (max-width: 760px) {
		/* width: 100%; */
	}
`;

const Wrapper = styled.div`
	height: auto;
	width: 100%;
	background: black;

	background-image: url(${pic});
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;

	display: flex;
	/* justify-content: center; */
	flex-direction: column;
	align-items: center;
	text-align: center;

	@media screen and (max-width: 600px) {
		height: auto;
		background-image: url(${pic2});
	}
`;

const Wrapper2 = styled.div`
	display: none;

	@media screen and (max-width: 600px) {
	}
`;
