import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from '../../styles';
import {useNavigation} from '@react-navigation/native';

const SignUp = ({}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.content}>
      <Text style={styles.texto}>Hola</Text>
      <Text style={styles.texto}>Registrarse</Text>
      <TouchableOpacity
        onPress={() => {
          // registrarse e ir a iniciar sesion
          navigation.navigate('Login');
        }}>
        <Text style={styles.link}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUp;
