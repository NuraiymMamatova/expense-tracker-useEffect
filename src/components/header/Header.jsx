import React, { useState } from "react";
import { styled } from "styled-components";
import Button from "../UI/button/Button";
import Modal from "../UI/modal/Modal";

const Header = ({ setIsUserLogined, setIsShowUsers }) => {
  const [isModalShow, setIsModalShow] = useState(false);
  const onLogout = () => {
    setIsUserLogined(localStorage.removeItem("USER"));
  };

  const onUsers = () => {
    setIsShowUsers(true);
  };

  const onExpenses = () => {
    setIsShowUsers(false);
  };

  const onClose = () => {
    setIsModalShow(false);
  };
  return (
    <StyledHeader>
      <Button onClick={onExpenses}>Expenses</Button>
      <Button onClick={onUsers}>Users</Button>
      <Button onClick={() => setIsModalShow(true)} bgColor={"dark"}>
        Logout
      </Button>
      {isModalShow && (
        <Modal onClose={onClose}>
          <h2>Are you sure you want to logout?</h2>
          <ButtonsBox>
            <Button onClick={onClose}>No</Button>
            <Button onClick={onLogout}>Yes</Button>
          </ButtonsBox>
        </Modal>
      )}
    </StyledHeader>
  );
};

const StyledHeader = styled("header")`
  padding: 1rem;
  background-color: #c2b4f2;
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  min-height: 5rem;
`;

const ButtonsBox = styled.div`
  display: flex;
  gap: 10px;
`;

export default Header;
