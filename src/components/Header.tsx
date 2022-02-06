import React from "react";
import { Autocomplete } from "@react-google-maps/api";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";

const Header = () => {
  return (
    <HeaderContainer>
      <h4>Travel Advisor</h4>
      <SearchInputContainer>
        <h5>Explore new places</h5>
        <div className="input-container">
          <SearchIcon />
          <input type="text" />
        </div>
      </SearchInputContainer>
    </HeaderContainer>
  );
};

export default Header;
const HeaderContainer = styled.div`
  background-color: skyblue;
  padding: 0 10px;
  display: flex;
  align-items: center;
  position: static;
  justify-content: space-between;
`;
const SearchInputContainer = styled.div`
  display: inherit;
  .input-container {
    padding: 0 5px;
    display: flex;
    align-items: center;
  }
`;
