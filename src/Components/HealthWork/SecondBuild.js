import React from "react";
import styled from "styled-components";
import PropsComp2 from "./PropsComp2";
import pic from "./img/4.jpg";
const SecondBuild = () => {
	return (
		<Container>
			<Holding>
				<PropsComp2 avatar={pic} />
				<PropsComp2 avatar={pic} />
				<PropsComp2 avatar={pic} />
				<PropsComp2 avatar={pic} />
			</Holding>
		</Container>
	);
};

export default SecondBuild;

const Container = styled.div`
	height: 300px;
	width: 100%;
	background-image: linear-gradient(#434762, #000, #000);

	@media screen and (max-width: 600px) {
		height: 100%;
	}
`;

const Holding = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	/* background: red; */
	height: 100%;
	flex-wrap: wrap;
`;
