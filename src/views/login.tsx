import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from '../../styles';

const LogIn = () => {
  return (
    <View style={styles.content}>
      <Text style={styles.texto}>Autenticacion</Text>
      <Text style={styles.texto}>Iniciar Sesion</Text>
      <TouchableOpacity>
        <Text style={styles.link}>Log In</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LogIn;