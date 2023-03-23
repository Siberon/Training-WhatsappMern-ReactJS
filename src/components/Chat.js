import React from "react";
import styled from "styled-components";

import { Avatar, IconButton } from "@mui/material";
import { AttachFile, MoreVert, SearchOutlined } from "@mui/icons-material";

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

const StyledBody = styled.div``;

const StyledHRight = styled.div``;

const StyledName = styled.span``;

const StyledTimestamp = styled.span``;

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
				<StyledBody>
					<p>
						<StyledName>This is a message</StyledName>
						<StyledName>{new Date().toUTCString()}</StyledName>
					</p>
				</StyledBody>
			</StyledHeader>
		</StyledChat>
	);
};

export default Chat;
