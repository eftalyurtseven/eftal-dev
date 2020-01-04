//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Actions } from "react-native-router-flux";
import Icon from "react-native-vector-icons/FontAwesome";
import MyCarousel from "./MyCarousel";
import MyJson from "./MyJson"

/*componentWillMount = () =>{
                                => Render işleminden hemen önceki tetiklenir.
                                Constructor metodu en başta çalışır. (Constructor => componentWillMount)
}

componentDidMount = () => {
                            =>  Komponent render edildikten sonra çalışır.
                                ComponentDidMount’ta setState işlemi yapılırsa tekrardan Render işlemi yapılır.
                                Construtor => ComponentWillMount => Render

}

componentWillUnmount = () => {
                            => Bütün işlemler bittikten sonra bileşen dom üzerinden kaldırılmadan önce çalışır.

}

componentWillUpdate = () => {
                            =>Komponentin güncellenmesi halinde çalışır. 
                            Render edilmeden hemen önce çalışır.
                            iki parametre alır. (nextProps - nextStates)
                            ComponentWillUpdate => Render
                            ComponentDidUpdate () tetikler.
}

componentDidUpdate = () => {
                            =>Aynı ki farklı parametreyi alır.
                            Render Edildikten sonra çalışır.
                            ComponentWillUpdate => Render => componentDidUpdate
}

*/
// create a component
class MyLifeCycles extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date(), cnt: 10 };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
      cnt: this.state.cnt - 1,
    });
    if (this.state.cnt === 0) this.componentWillUnmount();
  }

  // Başlangıçta constructor tanımlarak zaman bilgisini alıp cnt oluşturuldum.
  //Constructor uygulama ilk açılırken devreye girer ve bir daha çalışmaz.
  //componentDidMount() metodu içinde tanımlayarak sonra saniyede bir tick() metodunun devreye giremsini istedim.
  // Tick() metodu çağrıldığında zaman ve cnt değerlerini setState üzerinden güncellenmesini istedim.
  //componentWillUnmount() metodu devreye girmediği sürece yaşam döngüsü devam ediyor.
  //cnt sıfır değerine ulaşınca tick() metodunu çalıştırdım.
  //cnt sfıra ulaştğında componentWillUnmount() devreye girerek saat ve cnt değerinin güncellenmesinin durması sağladım.
  // sıfır değerini görünce duran işlemimi buttonla componentDidMount() methodunu kullanarak tekrar başlattım. -1 den saymaya devam ederek. Güncellemeye devam etti.
  render() {
    return (
      <View style={styles.container}>
      <TouchableOpacity onPress={() => Actions.MyJson()} style={styles.icon}>
          <Icon name="chevron-right" size={40} color="black" />
        </TouchableOpacity>
        <Text>LifeCycles</Text>
        <Text>Saat Şuanda: {this.state.date.toLocaleTimeString()}.</Text>
        <Text> Saatin Durması İçin Kalan {this.state.cnt}</Text>
        <TouchableOpacity onPress={() => this.componentDidMount()}>
          <Text> Saati Yeniden Başlat</Text>
        </TouchableOpacity>
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
  icon: {
    alignItems: "flex-end",
    margin:10,
  },
});

//make this component available to the app
export default MyLifeCycles;
