import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import styles from '../../style/UserStyles/UserLandingPageStyle';

import featuredbg from '../../assets/user-items/featuredbg.jpg';
import avatar from '../../assets/user-items/avatar.jpg';

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

const serviceSections = [
  {id: '1', title: 'Food Ordering', screen: 'FoodOrderingScreen'},
  {id: '2', title: 'Catering Services', screen: 'CateringServicesScreen'},
  {id: '3', title: 'Frozen Products', screen: 'FrozenProductsScreen'},
];

const UserLandingPage = () => {
  const navigation = useNavigation();
  const [numColumns, setNumColumns] = useState(3);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{paddingBottom: 20}}>
      {/* Greeting & Avatar */}
      <View style={styles.deliveryContainer}>
        <View style={styles.deliveryTextContainer}>
          <Text style={styles.welcomeName}>Welcome, John</Text>
          <Text style={styles.welcomeTitle}>Craving Something Delicious?</Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('UserEditProfileScreen')}>
          <Image source={avatar} style={styles.userAvatar} />
        </TouchableOpacity>
      </View>

      <TextInput placeholder="Search for food..." style={styles.searchBar} />

      {/* Featured Item Section */}
      <View style={styles.featuredItem}>
        <ImageBackground source={featuredbg} style={styles.featuredImage}>
          <View style={styles.gradientOverlay} />
          <TouchableOpacity style={styles.featuredButton}>
            <Text style={styles.featuredButtonText}>Order Now</Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>

      {/* Service Sections */}
      <Text style={[styles.sectionTitle, {marginBottom: 20}]}>
        Our Services
      </Text>
      <FlatList
        data={serviceSections}
        numColumns={3}
        keyExtractor={item => item.id}
        contentContainerStyle={{paddingBottom: 20}}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.serviceCard}
            onPress={() => navigation.navigate(item.screen)}>
            <Text style={styles.serviceText}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />

      {/* Food Trays */}
      <Text style={[styles.sectionTitle, {marginBottom: 20}]}>
        Explore Our Food Trays
      </Text>
      <FlatList
        data={foodTrays}
        numColumns={numColumns}
        key={numColumns.toString()}
        keyExtractor={item => item.id}
        contentContainerStyle={{paddingBottom: 20}}
        renderItem={({item}) => (
          <View style={styles.foodCard}>
            <Image source={{uri: item.image}} style={styles.foodImage} />
            <Text style={styles.foodName}>{item.name}</Text>
          </View>
        )}
      />
    </ScrollView>
  );
};

export default UserLandingPage;
