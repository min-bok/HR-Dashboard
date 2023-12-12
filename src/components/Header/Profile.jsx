import React from "react";
import styled from "styled-components";

export default function Profile() {
  return (
    <Wrap>
      <img className="profileImg" src="/asset/adminProfile.png" alt="" />
      <div className="textWrap">
        <p className="name">Admin</p>
        <p className="email">admin@domain.in</p>
      </div>
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;

  img.profileImg {
    border-radius: 50%;
  }
  p {
    font-size: 12px;
  }
`;
