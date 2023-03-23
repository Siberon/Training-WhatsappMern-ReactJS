import React from "react";

import styled from "styled-components";
import { Avatar } from "@mui/material";

const StyledChat = styled.div`
	display: flex;
	padding: 20px;
	cursor: pointer;
	border-bottom: 1px solid #f6f6f6;
	&:hover {
		background-color: #ebebeb;
	}
`;
const StyledChatInfo = styled.div`
	margin-left: 15px;
	& > h2 {
		font-size: 16px;
		margin-bottom: 8px;
	}
`;

function SidebarChat() {
	return (
		<StyledChat>
			<Avatar />
			<StyledChatInfo>
				<h2>Room Name</h2>
				<p>This is the last message</p >
			</StyledChatInfo>
		</StyledChat>
	);
}

export default SidebarChat;
