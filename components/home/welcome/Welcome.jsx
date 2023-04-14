import { useState } from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList
} from 'react-native';
import { useRouter } from 'expo-router';

import styles from './welcome.style';
import { icons, SIZES } from '../../../constants';

const Welcome = () => {
  const router = useRouter();

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Dear Catalina</Text>
        <Text style={styles.welcomeMessage}>Sounds will be drippin' on you</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            styles={styles.searchInput}
            value=""
            onChange={() => { }}
            placeholder='Looking for tickets?'
          />
        </View>
      </View>
    </View>
  )
}

export default Welcome