import React from "react";
import styled from "styled-components";

import { Avatar, IconButton } from "@mui/material";
import { AttachFile, MoreVert, SearchOutlined } from "@mui/icons-material";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import MicIcon from "@mui/icons-material/Mic";

const StyledChat = styled.div`
	display: flex;
	flex-direction: column;
	flex: 0.65;
`;
const StyledHeader = styled.div`
	padding: 20px;
	display: flex;
	align-items: center;
	border-bottom: 1px solid lightgray;
`;
const StyledHInfo = styled.div`
	flex: 1;
	padding-left: 20px;

	& > h3 {
		margin-bottom: 3px;
		font-weight: 500;
	}
	& > p {
		color: gray;
	}
`;

const StyledBody = styled.div`
	flex: 1;
	background-image: url("https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png");
	background-repeat: repeat;
	background-position: center;
	padding: 30px;
	overflow: scroll;
`;

const StyledChatReceiver = styled.div`
	position: relative;
	font-size: 16px;
	padding: 10px;
	width: fit-content;
	border-radius: 10px;
	background-color: #ffffff;
	margin-bottom: 30px;
	margin-left: auto;
	background-color: #dcf8c6;
`;

const StyledTimestamp = styled.span`
	margin-left: 10px;
	font-size: xx-small;
`;
const StyledName = styled.span`
	position: absolute;
	top: -15px;
	font-weight: 800;
	font-size: xx-small;
`;

const StyledChatFooter = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 62px;
	border-top: 1px solid lightgray;
	& > form {
		flex: 1;
		display: flex;
		& > input {
			flex: 1;
			outline-width: 0;
			border-radius: 30px;
			padding: 10px;
			border: none;
		}
		& > button {
			display: none;
		}
	}

	& > .MuiSvgIcon-root {
		padding: 10px;
		color: #919191;
	}
`;

const StyledHRight = styled.div``;

const StyledChatMessage = styled.p`
	position: relative;
	font-size: 16px;
	padding: 10px;
	width: fit-content;
	border-radius: 10px;
	background-color: #ffffff;
	margin-bottom: 30px;
`;
const Chat = () => {
	return (
		<StyledChat>
			<StyledHeader>
				<Avatar />
				<StyledHInfo>
					<h3>Room name</h3>
					<p>Last seen at...</p>
				</StyledHInfo>
				<StyledHRight>
					<IconButton>
						<SearchOutlined />
					</IconButton>
					<IconButton>
						<AttachFile />
					</IconButton>
					<IconButton>
						<MoreVert />
					</IconButton>
				</StyledHRight>
			</StyledHeader>
			<StyledBody>
				<StyledChatMessage>
					<StyledName>This is a message</StyledName>
					<StyledTimestamp>{new Date().toUTCString()}</StyledTimestamp>
				</StyledChatMessage>
				<StyledChatReceiver>
					<StyledName>This is a message</StyledName>
					<StyledTimestamp>{new Date().toUTCString()}</StyledTimestamp>
				</StyledChatReceiver> 
				<StyledChatMessage>
					<StyledName>This is a message</StyledName>
					<StyledTimestamp>{new Date().toUTCString()}</StyledTimestamp>
				</StyledChatMessage>
			</StyledBody>
			<StyledChatFooter>
				<InsertEmoticonIcon />
				<form>
					<input placeholder="Type a message" type="text" />
					<button type="submit">Send a message</button>
				</form>
				<MicIcon />
			</StyledChatFooter>
		</StyledChat>
	);
};

export default Chat;
