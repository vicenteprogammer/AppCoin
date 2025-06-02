import React, { Fragment } from "react";
import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import styles from "./styles";

export default function QuotationList(){
    return(
        <Fragment>
            <View style={styles.filters}>
                <TouchableOpacity
                 style ={styles.buttonQuery}
                 onPress={() =>{}}
                >
                    <Text style={styles.textButton}>7D</Text>
                </TouchableOpacity>

                <TouchableOpacity
                 style ={styles.buttonQuery}
                 onPress={()=> {}}
                >
                    <Text style={styles.textButton}>1M</Text>
                </TouchableOpacity>

                <TouchableOpacity
                 style={styles.buttonQuery}
                 onPress={()=> {}}
                >
                    <Text style={styles.textButton}>3M</Text>
                </TouchableOpacity>

                <TouchableOpacity
                 style ={ styles.buttonQuery}
                 onPress={()=> {}}
                >
                    <Text style={styles.textButton}>6M</Text>
                </TouchableOpacity>
            </View>
            <ScrollView></ScrollView>
        </Fragment>
    )
}