import React, {useEffect, useState} from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {

    const navigation = useNavigation();
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    
    useEffect(() => {
       
    }, []);

    useEffect(() => {
        navigation.setOptions({
            headerLargeTitle: true,
            headerTitle: "Home",
            headerRight: () => (
                <TouchableOpacity
                    onPress={() => navigation.navigate("Stack")}
                    style={{
                        backgroundColor: "purple",
                        width: 30,
                        height: 30,
                        borderRadius: 10,
                        justifyContent: "center",
                    }}
                >
                    <Text
                        style={{
                            fontSize: 20,
                            textAlign: "center",
                            color: "white",
                        }}
                    >+</Text>
                </TouchableOpacity>
            ),
            headerSearchBarOptions: {
                placeholder: "",
                onChangeText: (event) => {
                    searchFilterFunction(event.nativeEvent.text);
                },
            },
        });
    }, [navigation]);

    const fetchData = async (url) => {
        try {
            const response = await fetch(url);
            const json = await response.json();
            setData(json.results);
            setFilteredData(json.results);
            console.log(json.results);
        } catch (error) {
            console.error(error);
        }
    };

    const searchFilterFunction = (text) => {
        if(text){  
            const newData = data.filter(item => {
                const itemData = item.name.first ? item.name.first.toUpperCase() : ''.toUpperCase();
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1;
            })
            setFilteredData(newData);
        } else {
            setFilteredData(data);
        }
    }

    return (
        <ScrollView>
            <Text style={styles.textFriends}>XG FOTOS AUN EN PROCESO...</Text>
            {
                filteredData.map((item, index) => {
                    // return (
                      
                    // )
                })
            }
        </ScrollView>
    );
    }

export default HomeScreen;

const styles = StyleSheet.create({
    text: {
        
        textAlign: 'center',
        marginLeft: 10,
        fontWeight: 'bold',
        marginTop: 200,
    
    },
});