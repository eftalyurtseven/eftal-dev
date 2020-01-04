//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Header, Right, Left, Body } from "native-base";
import { Actions } from "react-native-router-flux";
import Icon from "react-native-vector-icons/FontAwesome";
import LifeCycles from "./MyLifeCycles";

// Dizi : Dizi benzer ifadelerin bir araya getirildiği özel değişkendir. Bir değişken içinde bir veri saklana bilirken, dizilerde birden fazla veri saklamak mümkündür.

class Dizi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ilk: "",
      orta: "",
      son: "",
    };
  }
  render() {
    var name = [this.state.orta];
    name.unshift(this.state.ilk);
    name.push(this.state.son);
    return (
      <View style={styles.container}>
         <Header style={styles.Header}>
        <Body>
          <Text style={styles.text} numberOfLines={1}>
            {this.props.title}
          </Text>
        </Body>
        <Right>
        <TouchableOpacity onPress={() => Actions.MyLifeCycles()}>
            <Icon name="chevron-right" size={30} color="black" />
          </TouchableOpacity></Right>
      </Header>
        <TextInput
          style={{ height: 40 }}
          placeholder="Cümlenin sonuna yazınız!"
          onChangeText={son => this.setState({ son })}
          value={this.state.son}
        />
        <TextInput
          style={{ height: 40 }}
          placeholder="Cümlenin ortasını yazınız!"
          onChangeText={orta => this.setState({ orta })}
          value={this.state.orta}
        />
        <TextInput
          style={{ height: 40 }}
          placeholder="Cümlenin başını yazınız !"
          onChangeText={ilk => this.setState({ ilk })}
          value={this.state.ilk}
        />
        {name.map((item, key) => <Text key={key}> {item}</Text>)}
      </View>
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

   Header: {
    width: "100%",
    backgroundColor:"white",
  },
});

//make this component available to the app
export default Dizi;
