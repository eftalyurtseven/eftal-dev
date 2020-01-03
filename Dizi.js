//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

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
});

//make this component available to the app
export default Dizi;
