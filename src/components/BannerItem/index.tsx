import React from "react";
import styled from "styled-components";

function BannerItem({ item }: any) {
  return (
    <Wrapper color={item.color}>
      <ImageContainer>
        <Image className="triggle-img" src={item.imgUrl} />
      </ImageContainer>

      <ContentWrap>
        <Tag className="triggle-tag" bg={item.color}>
          {item.tag}
        </Tag>
        <Title className="triggle-title">{item.title}</Title>
      </ContentWrap>
    </Wrapper>
  );
}

const Wrapper = styled.div<{ color?: any }>`
  /* width: 25%; */
  position: relative;
  min-height: 300px;
  overflow: hidden;
  &:hover {
    .triggle-img {
      /* display: none; */
      transform: scale(1.05);
    }

    .triggle-title {
      /* display: none; */
      /* transform: scale(1.05); */
      color: ${(props) => props.color} !important;
    }

    .triggle-tag {
      /* display: none; */
      transform: translateY(-5px);
      /* color: ${(props) => props.color} !important; */
    }
  }
`;

const ImageContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: 0.3s;
`;

const ContentWrap = styled.div`
  z-index: 100;
  position: absolute;
  left: 20px;
  bottom: 25px;
`;

const Tag = styled.p<{ bg?: any }>`
  background-color: ${(props) => props.bg};
  padding: 3px 7px;
  margin: 0;
  width: fit-content;
  color: #fff;
  font-weight: 700;
  font-size: 12px;
  text-transform: uppercase;
  transition: 0.6s;
`;

const Title = styled.p`
  padding: 3px 7px;
  margin: 0;
  color: #000; //${(props) => props.color};
  font-weight: 900;
  font-size: 24px;
  text-transform: uppercase;
  /* background-image: linear-gradient(transparent calc(13%), #fff 1px); */
  display: inline;
  /* line-height: 1.126em; */
  /* padding: 0.198em 0.4em 0.3em; */
  /* background-size: 100% 80%; */
  /* background-repeat: no-repeat; */
  background-color: #fff;
  transition: 0.6s;
`;

export default BannerItem;
