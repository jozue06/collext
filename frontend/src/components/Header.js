import React from 'react';
import styled from 'styled-components';

const Head = styled.header`
	text-align: center;
	color: palevioletred;
	font-size: 2em;
	text-align: center;
	list-style-type: none;
	width: 100%;
	letter-spacing: 0.5em;
`;

export default class Header extends React.Component {
	render() {
		return (
			<Head>
				COLLEXT | beta
			</Head>
		);
	}
};