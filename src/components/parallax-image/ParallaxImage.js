import React from "react";
import styled from "styled-components";

const ParallaxImage = (props) => {
	const BackgroundImage = styled.div`
		background-image: url(${props.src});

		background-attachment: fixed;
		background-repeat: no-repeat;
		background-size: cover;
		height: 600px;
	`;

	return <BackgroundImage />
}

export default ParallaxImage;