import React from "react";
import styled from "styled-components";

interface IProps {
  item: any;
}

function BlogItem({ item }: IProps) {
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
      <ContentContainer className="triggle"></ContentContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div<{ color?: any }>`
  /* width: 25%; */
  position: relative;
  min-height: 450px;
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

    .triggle {
      height: 0;
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

const ContentContainer = styled.div`
  /* position: relative; */
  /* bottom: 0; */
  background: #fff;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 125px;
  transition: all 0.6s ease-in-out;
`;

const ContentWrap = styled.div`
  z-index: 100;
  position: absolute;
  /* left: 20px; */
  width: 100%;
  bottom: 75px;
  text-align: center;
`;

const Tag = styled.p<{ bg?: any }>`
  background-color: ${(props) => props.bg};
  padding: 3px 7px;
  margin: 0;
  width: fit-content;
  color: #fff;
  font-weight: 600;
  font-size: 12px;
  text-transform: uppercase;
  transition: 0.6s;
  margin: 0 auto;
`;

const Title = styled.p`
  padding: 3px 7px;
  margin: 0;
  color: #000; //${(props) => props.color};
  font-weight: 900;
  font-size: 16px;
  text-transform: uppercase;
  display: inline;
  background-color: #fff;
  transition: 0.6s;
`;

export default BlogItem;
