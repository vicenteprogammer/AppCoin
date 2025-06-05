import React from "react";
import { View, Image, Text } from "react-native";
import styles from "./style";

export default function QuotationItems() {
    return (
        <View style={styles.mainContent}>
            <View style={styles.contextLeft}>
                <View style={styles.logo}>
                    <Image
                        style={styles.logoBit}
                        source={require('../../../img/logoEterium.png')}
                    />
                    <Text style={styles.dataQuotation}>22/02/2025</Text>
                </View>
            </View>


            <View style={styles.contextRight}>
                <Text style={styles.price}>$20000</Text>
            </View>

        </View>
    )
}