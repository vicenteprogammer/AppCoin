import React from "react";
import { StyleSheet, View, Text } from "react-native";
import styles from "./styles"

export default function CurrentPrice(){
    return(
        <View style={styles.headerPrice}>
            <Text style={styles.currentPrice}>$ 200000</Text>
            <Text style={styles.textPrice}>Testando</Text>
        </View>
    )
}