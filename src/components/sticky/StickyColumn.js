import React from "react";
import styled from "styled-components";

import "./StickyColumn.scss";

const StickyColumn = (props) => {
	const Sticky = styled.div`
		width: ${props.width || "50%"};
	`;

	return <Sticky className="sticky">
		{props.children}
	</Sticky>
}

export default StickyColumn;