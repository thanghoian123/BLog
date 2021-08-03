import { Container, Grid } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import BlogItem from "../BlogItem";

function ListBlog() {
  const mock = [
    {
      imgUrl:
        "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      tag: "Art",
      title: "It is a long established fact that a reader",
      color: "#a29bfe",
    },
    {
      imgUrl:
        "https://images.unsplash.com/photo-1615653633551-25dd80d2765a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      tag: "Food",
      title: "It is a long established fact that a reader",
      color: "#00b894",
    },
    {
      imgUrl:
        "https://images.unsplash.com/photo-1562569633-622303bafef5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      tag: "Animal",
      title: "It is a long established fact that a reader",
      color: "#ff7675",
    },
    {
      imgUrl:
        "https://images.unsplash.com/photo-1580692475446-c2fabbbbf835?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      tag: "Basketball",
      title: "It is a long established fact that a reader",
      color: "#fdcb6e",
    },
    {
      imgUrl:
        "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      tag: "Art",
      title: "art so cool",
      color: "#e17055",
    },
    {
      imgUrl:
        "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      tag: "Art",
      title: "art so cool",
      color: "#a29bfe",
    },
  ];
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={9}>
          <List>
            {mock.map((item: any, index: number) => (
              <Item key={index}>
                <BlogItem item={item} />
              </Item>
            ))}
          </List>
        </Grid>
        <Grid item xs={3}>
          <h2>asdasdasdasdasdas asd asd asd asd asd ad asd </h2>
        </Grid>
      </Grid>
    </Container>
  );
}

const List = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
const Item = styled.li`
  list-style: none;
  width: 32%;
  margin-bottom: 12px;
`;

export default ListBlog;
