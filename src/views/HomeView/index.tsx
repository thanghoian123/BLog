import React from "react";
import BannerItem from "../../components/BannerItem";
import Carousel from "../../components/Carousel";
import Navigation from "../../components/Navigation";
import Spacer from "../../components/spacer";
import ListBlog from "./components/ListBlog";

function HomeView() {
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
    {
      imgUrl:
        "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      tag: "Art",
      title: "art so cool",
      color: "#a29bfe",
    },
  ];
  return (
    <div>
      <Navigation />
      <Carousel>
        {mock.map((item: any, index: number) => {
          return <BannerItem key={index} item={item} />;
        })}
      </Carousel>
      <Spacer />
      <Spacer />
      <Spacer />
      <Spacer />

      <ListBlog />
    </div>
  );
}

export default HomeView;
