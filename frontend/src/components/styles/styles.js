import styled from 'styled-components';
import {Heart} from 'styled-icons/fa-solid'

const Title = styled.h1`
	font-size: 2em;
	text-align: center;
	list-style-type: none;
	color: white;
	letter-spacing: 0.5em;
`;

const Wrapper = styled.section`
	margin-top: 0;
	padding-left: 4em;
	padding-right: 4em;
	padding-bottom: 4em;
	text-align: center;
	background: black;
	animation: 3s ease-out 0s 1 animationSlide;
	@keyframes animationSlide {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
}
`;

const InputWrapper = styled.form`
	font-size: 1em;
	text-align: center;
	color: white;
	display: flex;
	flex-flow: column wrap;
	align-items: center;
`;

const Editor = styled.input`
	width: 30%;
	height: 5em;
	text-align: center;
	border-radius: 5px;
`;

const Alert = styled.section`
	background-color:  #4295f4;
	border-left: 8px solid darken(#4295f4, 15%);
	border-radius: 5px;
	margin-bottom: 1em;
	animation: 3s ease-out 0s 1 animationSlide2;
	@keyframes animationSlide2 {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
`;

const Text = styled.pre`
	font-size: 1em;
	text-align: center;
	color: white;
	padding: 10%;

	border-color:papayawhip;
	border: solid;
	border-width: .01em;
`;


const Link = styled.a`
	color: palevioletred;  
`;

const Button = styled.button`
	/* Adapt the colors based on primary prop */
	background: #4295f4;
	color: white;
	font-size: 1em;
	margin: 0.2em;
	padding: 0.25em 0.25em;
	border-radius: 2px;
	border-color: #4295f4;
	text-align: center;
	/* list-style-type: none; */
`;

const List = styled.li`
	color: white;
	font-size: 1.1em;
	margin-left: 20%;
	margin-right: 20%;
	margin-bottom: 5%;
	padding: 2em 2em; 
	background: palevioletred;
	border: 1px solid palevioletred;
	border-radius: 5px;
	text-align: center;
	list-style-type: none;
`;
const Tiny = styled.p`
	color: white;
	font-size: 0.1em;
	font-style: italic;
`;

const Foot = styled.footer`
	background: black;
	font-size: 0.5em;
	text-align: center;
	color: white;
	margin-top: 1em;
	margin-bottom: 1em;
	position:absolute;
	left:0;
	bottom:0;
	right:0;
`;
const RedHeart = styled(Heart)`
	color: red;
`
const PhoneInput = styled.input`
	border-radius: 1px;
	margin-bottom:1em;
	text-align: center;
`;

export default {
	Button,
	Title,
	Wrapper,
	Alert,
	PhoneInput,
	Text,
	Link,
	InputWrapper,
	Editor,
	List,
	Tiny,
	Foot,
	RedHeart
};
