import { useState } from 'react';
import { 
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList
} from 'react-native';
import { useRouter } from 'expo-router';
import { icons, SIZES } from '../../../constants';
import styles from './welcome.style'

const Welcome = () => {
  const router = useRouter();

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Mohammed Shaikh</Text>
        <Text style={styles.userName}>Find your perfect jobs</Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value=""
            onChange={() => {}}
            placeholder='What do you want?'
          />
        </View>
        <TouchableOpacity style={styles.searchBtn} onPress={() => {}}>
          <Image
            source={icons.search}
            resizeMode='contain'
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Welcome