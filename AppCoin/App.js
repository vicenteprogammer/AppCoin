
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text,View, SafeAreaView, Platform } from 'react-native';
import CurrentPrice from './src/components/CurrentPrice';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
        <StatusBar
        style='light-content'
        backgroundColor='#fff'
        />
      <CurrentPrice/>
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
