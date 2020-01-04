//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { Header, Right, Left, Body } from "native-base";
import { Actions } from "react-native-router-flux";
import Carousel, { Pagination, ParallaxImage } from "react-native-snap-carousel";
import Icon from "react-native-vector-icons/FontAwesome";
import Dizi from "./Dizi";
// create a component
const { width: screenWidth } = Dimensions.get('window')
class MyCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carouselItems: [
        {
          title: "Berkcan",
          image:
            "https://images.unsplash.com/photo-1502320332898-8ec6e74e147f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
        },
        {
          title: "Berkcan 2",
          image:
            "https://images.unsplash.com/photo-1489549132488-d00b7eee80f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        },
        {
          title: "Berkcan 3",
          image:
            "https://images.unsplash.com/photo-1512389055488-8d82cb26ba6c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        },
        {
          title: "Berkcan 4",
          image:"https://images.unsplash.com/photo-1509114397022-ed747cca3f65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        },
        {
          title: "Berkcan 5",
          image:
            "https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
        },
      ],
    };
  }
  renderItem({ item, index }, parallaxProps) {
    return (
<View style={styles.item}>
                <ParallaxImage
                    source={{ uri: item.image }}
                    containerStyle={styles.imageContainer}
                    style={styles.image}
                    parallaxFactor={1}
                    {...parallaxProps}
                />
                <Text style={styles.Te} numberOfLines={2}>
                    { item.title }
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
  render() {
    return (
      <SafeAreaView style={styles.container}>
      <Header style={styles.Header}>
        <Left/>
        <Body>
          <Text style={styles.text} numberOfLines={1}>
            {this.props.title}
          </Text>
        </Body>
        <Right>
        <TouchableOpacity onPress={() => Actions.Dizi()}>
            <Icon name="chevron-right" size={30} color="black" />
          </TouchableOpacity></Right>
      </Header>
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
    backgroundColor:"white"
  },
  icon: {
    alignItems: "flex-end",
    margin:10,
  },
   item: {
    width: screenWidth - 60,
    height: screenWidth - 60,
    marginTop:screenWidth -250,
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ ios: 0, android: 1 }),
    backgroundColor: 'white',
    borderRadius: 8,
  },
  image: {

    resizeMode: 'cover',
  },
});

//make this component available to the app
export default MyCarousel;
