//import liraries
import { Header, Right, Left, Body } from "native-base";
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  TouchableHighlight,
  Modal,
} from "react-native";
import ImageViewer from "react-native-image-zoom-viewer";
import { Actions } from "react-native-router-flux";
import Carousel, {
  Pagination,
  ParallaxImage,
} from "react-native-snap-carousel";
import Icon from "react-native-vector-icons/FontAwesome";
import Dizi from "./Dizi";

// create a component
const { width: screenWidth } = Dimensions.get("window");
class MyCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carouselItems: [
        {
          title: "Berkcan",
          url: "https://s.cdpn.io/profiles/user/30606/512.jpg?2",
        },
        {
          title: "Berkcan 2",
          url: "https://avatars1.githubusercontent.com/u/2545400?s=460&v=4",
        },
        {
          title: "Berkcan 3",
          url:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjHzmqdgCjZlzoeKv-fzDnc8-qL5nzzsJVYRZ4Pf8861exdthgrw&s",
        },
        {
          title: "Berkcan 4",
          url:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8Eqcv6VifKYhFsfsA2f7xISqGizybqiL410U-g18aPzP6sHkm&s",
        },
        {
          title: "Berkcan 5",
          url:
            "https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
        },
      ],
      modalVisible: false,
    };
  }
  handleChange = index => {
    this.setState({ currentIndex: index });
  };
  renderItem({ item, index }, parallaxProps) {
    console.log("index", index);
    return (
      <View style={styles.item}>
        <ParallaxImage
          source={{ uri: item.url }}
          containerStyle={styles.imageContainer}
          style={styles.image}
          parallaxFactor={1}
          {...parallaxProps}
        />
        <Text style={styles.Te} numberOfLines={2}>
          {item.title}
        </Text>
      </View>
    );
  }

  get pagination() {
    const { carouselItems, activeSlide } = this.state;
    return (
      <Pagination
        dotsLength={carouselItems.length}
        activeDotIndex={activeSlide}
        containerStyle={{ backgroundColor: "white" }}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 8,
          backgroundColor: "black",
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    );
  }
  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <Modal
            visible={this.state.modalVisible}
            transparent={true}
            swipeDirection={"down"}
            onRequestClose={() => {
              this.setState({ modalVisible: false });
            }}
          >
            <ImageViewer
              imageUrls={this.state.carouselItems}
              enableSwipeDown={true}
              onCancel={() => {
                this.setState({ modalVisible: false });
              }}
            />
          </Modal>
        </View>
        <Header style={styles.Header}>
          <Left />
          <Body>
            <Text style={styles.text} numberOfLines={1}>
              {this.props.title}
            </Text>
          </Body>
          <Right>
            <TouchableOpacity onPress={() => Actions.Dizi()}>
              <Icon name="chevron-right" size={30} color="black" />
            </TouchableOpacity>
          </Right>
        </Header>
        <TouchableHighlight
          onPress={() => {
            this.setModalVisible(true);
          }}
        >
          <Carousel
            ref={c => {
              this._carousel = c;
            }}
            data={this.state.carouselItems}
            renderItem={this.renderItem}
            sliderWidth={screenWidth}
            sliderHeight={screenWidth}
            itemWidth={screenWidth - 60}
            onSnapToItem={index => this.setState({ activeSlide: index })}
            hasParallaxImages={true}
          />
        </TouchableHighlight>
        {this.pagination}
      </SafeAreaView>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  Text: {
    fontSize: 20,
    color: "white",
    textAlign: "center",
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  Header: {
    width: "100%",
    backgroundColor: "white",
  },
  icon: {
    alignItems: "flex-end",
    margin: 10,
  },
  item: {
    width: screenWidth - 60,
    height: screenWidth - 60,
    marginTop: screenWidth - 250,
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ ios: 0, android: 1 }),
    backgroundColor: "white",
    borderRadius: 8,
  },
  image: {
    resizeMode: "cover",
  },
  MainContainer: {
    flex: 1,
    alignItems: "center",
  },
});

//make this component available to the app
export default MyCarousel;
