import { useState } from 'react';
import {
  View, Text, TouchableOpacity, FlatList, ActivityIndicator
} from 'react-native';
import { useRouter } from 'expo-router';

import styles from './artists.style';
import { COLORS, SIZES } from '../../../constants';
import Artists from '../../common/cards/artists/Artists';
import useFetch from '../../../hook/useFetch';

const SignedArtists = () => {
  const router = useRouter();
  const isLoading = false;
  const error = false;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Artists</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        { isLoading ? (
          <ActivityIndicator size='large' colors={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          <FlatList 
            data={[1,2,3,4]}
            renderItem={({ item }) => (
              <SignedArtists
              item={item}
              />
            )}
            keyExtractor={item => item?.job_id}
            contentContainerStyle={{ columnGap: SIZES.medium }}
            horizontal
          />
        )}
      </View>
    </View>
  )
}

export default SignedArtists;