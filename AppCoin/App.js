
import { StyleSheet, StatusBar, Text,View, SafeAreaView, Platform } from 'react-native';
import CurrentPrice from './src/components/CurrentPrice';
import HistoryGraphic from './src/components/HistoryGraphic';
import QuotationList from './src/components/QuotationList';
import QuotationItems from './src/components/QuotationList/QuotationItems';

function addZero(number){
  if(number < 9){
    return "0" + number
  }

  return number 
}

function url(){
  const date = new Date()
  const listLastDays = 10

  return `https://economia.awesomeapi.com.br/json/daily/ETH-BRL/${listLastDays}`
}




export default function App() {
  return (
    <SafeAreaView style={styles.container}>
        <StatusBar
        backgroundColor='red'
        style='light-content'
        />
      <CurrentPrice/>
      <HistoryGraphic/>
      <QuotationList/>
      <QuotationItems/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    paddingTop: Platform.OS === "android" ? 40: 0
  },
});
