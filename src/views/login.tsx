import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  Image,
} from 'react-native';
import React from 'react';
import styles from '../../styles';
import {Icon} from 'react-native-safe-area-context';

const LogIn = () => {
  return (
    <SafeAreaView>
      <View>
        <Text style={styles.topText}>Identity</Text>
        <Text style={styles.subText}>
          Enter a good profile photo and type your name
        </Text>
        <View style={styles.container2}>
          <View style={styles.logo}>
            <Image
              source={require('../images/user.png')}
              style={styles.imgLogo}
            />
          </View>
        </View>
        <View style={styles.container}>
          <TextInput style={styles.textBox} placeholder="Name" />
          <TextInput style={styles.textBox} placeholder="Last Name" />
        </View>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => {
            // registrarse e ir a iniciar sesion
          }}>
          <Text style={styles.linkLo}>Create account</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LogIn;
