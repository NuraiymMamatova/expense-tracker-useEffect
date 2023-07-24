import React, { useEffect, useState } from "react";
import { styled } from "styled-components";

const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const result = await response.json();
        setUsers(result);
      } catch (error) {
        console.log(error);
      }
    };
    getUsers();
  }, []);
  return (
    <div>
      <StyledUsersContainer>
        {users.map((user) => (
          <StyledUserBox>
            <h3>{user.name}</h3>
            <p>
              <b>Email: </b>
              {user.email}
            </p>
            <p>
              <b>Website: </b>
              {user.website}
            </p>
          </StyledUserBox>
        ))}
      </StyledUsersContainer>
    </div>
  );
};

export default Users;

const StyledUsersContainer = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 30px;
`;

const StyledUserBox = styled.li`
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  padding: 10px;
`;
