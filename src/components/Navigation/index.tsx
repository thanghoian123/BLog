import React from "react";
import { ReactSVG } from "react-svg";
import styled from "styled-components";
import clock from "../../assets/icons/clock.svg";
import fire from "../../assets/icons/fire.svg";
import hashtag from "../../assets/icons/hashtag.svg";
import banner from "../../assets/images/banner.png";
import logo from "../../assets/images/logo.png";

const list = [
  {
    title: "Trending",
    icon: hashtag,
  },
  {
    title: "Hot",
    icon: fire,
  },
  {
    title: "Latest",
    icon: clock,
  },
];
function Navigation() {
  return (
    <Wrapper>
      <div style={{ display: "flex" }}>
        <LogoBox>
          <Logo src={logo} />
        </LogoBox>

        <ListMenu>
          {list.map((item: any, index: number) => {
            return (
              <ListItem key={index}>
                <IconBox>
                  <ReactSVG src={item.icon} width={20} height={20} />
                </IconBox>

                <ListItemTitle>{item.title}</ListItemTitle>
              </ListItem>
            );
          })}
        </ListMenu>
      </div>

      <div>
        <AdvBox>
          <Adv src={banner} />
        </AdvBox>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 20px 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 0px 6px 1px #d5d5d5;
`;

const LogoBox = styled.div`
  width: 219px;
  height: 78px;
`;

const IconBox = styled.div`
  width: 20px;
  height: 20px;
  background-color: #b2bec3;
  border-radius: 50%;
  padding: 8px 8px;
  margin-right: 8px;
  * svg {
    fill: #fff;
  }
`;

const Logo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ListMenu = styled.ul`
  padding: 0;
  margin: 0 0 0 24px;
  display: flex;
`;

const ListItem = styled.li`
  list-style: none;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  margin-right: 12px;
`;
const ListItemTitle = styled.p`
  font-weight: 700;
  font-size: 12px;
`;
const AdvBox = styled.div``;

const Adv = styled.img``;

export default Navigation;
