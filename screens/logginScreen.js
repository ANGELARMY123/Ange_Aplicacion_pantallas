import react from "react";
import {View, Text, Image, ScrollView, TextInput,} from 'react-native';

const loggin = () => {
    return (
      <ScrollView>
        <Text>Ejemplo</Text>
        <View
        style={{textAlign: 'center',}}>
          <Text>LOGGIN</Text>
          <Image
            source={{
              uri: 'https://static.vecteezy.com/system/resources/previews/008/302/463/non_2x/eps10-pink-user-icon-or-logo-in-simple-flat-trendy-modern-style-isolated-on-white-background-free-vector.jpg',
            }}
            style={{width: 200, height: 200,  alignSelf: 'center',}}
          />

        </View>
        <TextInput                           //poder recibir texto
          style={{
            textAlign: 'center',
            height: 40,
            borderRadius: 20,
            borderWidth: 2,
            backgroundColor: 'pink',
              borderColor: 'purple',
              alignItems: 'center',
              marginLeft: 35,
              marginRight: 35,
              marginTop: 20,
              marginBottom: 1,
          }}
          
          placeholder = "usuario"
          
        />
        <TextInput 
         style={{
          textAlign: 'center',
          height: 40,
          borderRadius: 20,
          borderWidth: 2,
          backgroundColor: 'pink',
            borderColor: 'purple',
            alignItems: 'center',
            marginLeft: 35,
            marginRight: 35,
            marginTop: 20,
            marginBottom: 1,
            
            
          }}
          placeholder = "usuario"
          />
      </ScrollView>
    );
  };
  
  export default loggin;