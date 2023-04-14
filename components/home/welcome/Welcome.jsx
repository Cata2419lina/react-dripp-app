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

const artistTours = ['Jisoo', 'Jackson Wang', 'B.I', 'Jay Park' ]

const Welcome = () => {
  const router = useRouter();
  const [activeArtistisTour, setActiveArtistsTour] =useState('Jisoo')

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
        <TouchableOpacity style={styles.searchBtn} onPress={() =>{}}>
          <Image 
            source={icons.search}
            resizeMode="contain"
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>
      
      <View style={styles.tabsContainer}>
        <FlatList 
          data={artistTours}
          renderItem={({ item }) => (
            <TouchableOpacity
            style={styles.tab(activeArtistisTour, item)}
            onPress={() => {
              setActiveArtistsTour(item);
              router.push( `/search/${item}`)
            }}
            >
              <Text style={styles.tabText(activeArtistisTour, item)}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item}
          contentContainerStyle={{ columnGap: SIZES.small}}
          horizontal
        />
      </View>
    </View>
  )
}

export default Welcome