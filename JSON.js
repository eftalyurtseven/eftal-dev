//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

//JSON (JavaScript Object Notation), okuyup yazabilmesi oldukça kolay, uygulamalarda kolaylıkla tarayıp üzerinden ilerlenebilecek yapısal olarak oldukça hafif ve esnek bir veri değişim formatıdır
//Temel amacı veri alış verişi yaparken daha küçük boyutlarda veri değiştokuşu yapmaktır.
// JSON içeriği bulunan dosyaların uzantısıdır.Örnekte de görüldüğü üzere veriler 2 parçadan oluşmaktadır. Bu parçalardan ilki key (anahtar), diğeri ise value (değer) olarak nitelendirilir.
// Key nesnenin (property) hangi özelliğinin olduğunu, değer ise key’in içeriğini kapsar.
class JSON extends Component {
  render() {
    const myObj = {
      name: "berkcan",
      age: 21,
      favoriteFood: "Tavuk Pilav",
    };

//JSON.stringify veriyi json formatına dönüştürmek için kullanırız.Dönüştürdüğümüz veriyi başka bir dile göndererek artık oradaki json komutlarıyla okuyabiliriz.
 //console.log(JSON.stringify(myObj));
//JSON.parse json olarak gelen veriyi okumamıza yarar.
//console.log(JSON.parse(myObj));
    return (
      <View style={styles.container}>
        <Text>sss</Text>
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
export default JSON;
