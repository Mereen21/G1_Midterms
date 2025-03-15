import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  FlatList,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

// react native paper imports
import {SegmentedButtons} from 'react-native-paper';

import styles from '../../style/UserStyles/UserLandingPageStyle';

// images
import featuredbg from '../../assets/user-items/featuredbg.jpg';
import avatar from '../../assets/user-items/avatar.jpg';

// food tray items
const foodTrays = [
  {
    id: '1',
    name: 'Pork',
    image:
      'https://www.mcatering.ph/wp-content/uploads/2021/07/roast-beef-belly-in-mushroom-sauce.jpg',
  },
  {
    id: '2',
    name: 'Beef',
    image:
      'https://www.mcatering.ph/wp-content/uploads/2022/11/Tender-Pork-Ribs-with-Peach-Barbecue-Sauce-and-Cajun-Potato-Wedges.jpg',
  },
  {
    id: '3',
    name: 'Chicken',
    image:
      'https://www.mcatering.ph/wp-content/uploads/2021/07/roast-chicken-in-rosemary-honey-mustard-sauce.jpg',
  },
  {
    id: '4',
    name: 'Seafood',
    image:
      'https://www.mcatering.ph/wp-content/uploads/2021/07/gambas-al-ajillo.jpg',
  },
  {
    id: '5',
    name: 'Pasta/Noodles',
    image:
      'https://www.mcatering.ph/wp-content/uploads/2021/07/mushroom-bacon-carbonara.jpg',
  },
  {
    id: '6',
    name: 'Desserts',
    image:
      'https://www.mcatering.ph/wp-content/uploads/2022/11/Ube-Buko-Jelly.jpg',
  },
];

const UserLandingPage = () => {
  const navigation = useNavigation();
  const [numColumns, setNumColumns] = useState(3);
  const [option, setOption] = useState('');

  return (
    <View style={styles.container}>
      {/* Delivery Section */}
      <View style={styles.deliveryContainer}>
        <View style={styles.deliveryTextContainer}>
          <Text style={styles.welcomeName}>Hello John</Text>
          <Text style={styles.welcomeTitle}>Hungry Now?</Text>
        </View>

        {/* User Avatar */}
        <TouchableOpacity
          onPress={() => navigation.navigate('UserEditProfileScreen')}>
          <Image source={avatar} style={styles.userAvatar} />
        </TouchableOpacity>
      </View>

      {/* <View style={styles.sectionButtonContainer}>
        <View style={styles.segmentedButtonWrapper}>
          <SegmentedButtons
            value={option}
            onValueChange={setOption}
            buttons={[
              {
                value: 'foodOrder',
                label: 'Food Trays',
              },
              {
                value: 'cateringServices',
                label: 'Catering Services',
              },
            ]}
          />
        </View>
      </View> */}

      <TextInput placeholder="Search" style={styles.searchBar} />

      <View style={styles.featuredItem}>
        <ImageBackground source={featuredbg} style={styles.featuredImage}>
          <View style={styles.gradientOverlay} />

          <TouchableOpacity style={styles.featuredButton}>
            <Text style={styles.featuredButtonText}>Order Now</Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>

      <Text style={styles.sectionTitle}>Our Food Trays</Text>
      <FlatList
        data={foodTrays}
        numColumns={numColumns}
        key={numColumns.toString()}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.foodCard}>
            <Image source={{uri: item.image}} style={styles.foodImage} />
            <Text style={styles.foodName}>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default UserLandingPage;
