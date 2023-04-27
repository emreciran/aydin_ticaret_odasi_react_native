import { Animated, FlatList, Text, View } from "react-native";
import React, { useRef, useState } from "react";
import SlideItem from "./SlideItem";
import Pagination from "./Pagination";
import axios from "../../../axios";
import { useEffect } from "react";
import NewsService from "../../../services/newsService";

const Slider = () => {
  const [datas, setDatas] = useState();

  const getData = () => {
    NewsService.getNews()
      .then((response) => {
        setDatas(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const [index, setIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;

  const handleOnScroll = (event) => {
    Animated.event(
      [
        {
          nativeEvent: {
            contentOffset: {
              x: scrollX,
            },
          },
        },
      ],
      {
        useNativeDriver: false,
      }
    )(event);
  };

  const handleOnViewableItemsChanged = useRef(({ viewableItems }) => {
    // console.log('viewableItems', viewableItems);
    setIndex(viewableItems[0].index);
  }).current;

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
  }).current;

  return (
    <View>
      <FlatList
        data={datas?.news}
        renderItem={({ item }) => <SlideItem item={item} />}
        horizontal
        pagingEnabled
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        onScroll={handleOnScroll}
        onViewableItemsChanged={handleOnViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
      />
      <Pagination data={datas?.news} scrollX={scrollX} index={index} />
    </View>
  );
};

export default Slider;
