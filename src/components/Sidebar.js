import React from "react";
import styled from "styled-components";
import { Avatar, IconButton } from "@mui/material";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import ChatIcon from "@mui/icons-material/Chat";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { SearchOutlined } from "@mui/icons-material";
import SidebarChat from "./SidebarChat";

const StyledSidebar = styled.div`
	display: flex;
	flex-direction: column;
	flex: 0.35;
`;

const StyledHeader = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 20px;
	border-right: 1px solid lightgray;
`;

const StyledHeaderRight = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	min-width: 10vw;
	& > .MuiSvgIcon-root {
		margin-right: 2vw;
		font-size: 24px !important;
	}
`;

const StyledSearch = styled.div`
	display: flex;
	align-items: center;
	background-color: #f6f6f6;
	height: 39px;
	border-radius: 10px;
`;

const StyledSearchContainer = styled.div`
	display: flex;
	align-items: center;
	background-color: white;
	width: 100%;
	height: 35px;
	border-radius: 20px;
	& > .MuiSvgIcon-root {
		color: gray;
		padding: 10px;
	}
	& > input {
		border: none;
		margin-left: 10px;
		outline-width: 0;
	}
`;

const StyledChats = styled.div`
	flex: 1;
	background-coor: white;
	overflow: scroll;
`;

const Sidebar = () => {
	return (
		<StyledSidebar>
			<StyledHeader>
				<Avatar src="https://avatars.githubusercontent.com/u/46264859?s=400&u=bc7200fc7653860d6cbb1025338fcd8dde3788c0&v=4" />
				<StyledHeaderRight>
					<IconButton>
						<DonutLargeIcon />
					</IconButton>
					<IconButton>
						<ChatIcon />
					</IconButton>
					<IconButton>
						<MoreVertIcon />
					</IconButton>
				</StyledHeaderRight>
			</StyledHeader>
			<StyledSearch>
				<StyledSearchContainer>
					<SearchOutlined />
					<input placeholder="Search or start a new chat" type="text" />
				</StyledSearchContainer>
			</StyledSearch>
			<StyledChats>
				<SidebarChat />
				<SidebarChat />
				<SidebarChat />
			</StyledChats>
		</StyledSidebar>
	);
};

export default Sidebar;
