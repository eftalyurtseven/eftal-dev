//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
//JSON (JavaScript Object Notation), okuyup yazabilmesi oldukça kolay, uygulamalarda kolaylıkla tarayıp üzerinden ilerlenebilecek yapısal olarak oldukça hafif ve esnek bir veri değişim formatıdır
//Temel amacı veri alış verişi yaparken daha küçük boyutlarda veri değiştokuşu yapmaktır.
// JSON içeriği bulunan dosyaların uzantısıdır.Örnekte de görüldüğü üzere veriler 2 parçadan oluşmaktadır. Bu parçalardan ilki key (anahtar), diğeri ise value (değer) olarak nitelendirilir.
// Key nesnenin (property) hangi özelliğinin olduğunu, değer ise key’in içeriğini kapsar.
class MyJson extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: {
        test: "test",
        deneme: "deneme"
      },
    };
    console.log("berkcan", this.state.obj);
  }

  //JSON.stringify veriyi json formatına dönüştürmek için kullanırız.Dönüştürdüğümüz veriyi başka bir dile göndererek artık oradaki json komutlarıyla okuyabiliriz.
  //console.log(JSON.stringify(myObj));
  //JSON.parse json olarak gelen veriyi okumamıza yarar.
  //console.log(JSON.parse(myObj));
  render() {
    return (
      <View style={styles.container}>
        <Text>
          Json.stringify yapmadan önce datamız: test:"test", deneme:
          "deneme"
        </Text>
        <Text>{JSON.stringify(this.state.arr)}</Text>
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
export default MyJson;
