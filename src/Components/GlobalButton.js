import styled from "styled-components";

export const GlobalButton = (props) => {
	return <Button>{props.name}</Button>;
};

const Button = styled.button`
	height: 50px;
	width: 150px;
	background-color: orange;
	color: black;
`;
