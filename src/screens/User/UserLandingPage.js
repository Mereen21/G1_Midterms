import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import styles from '../../style/UserStyles/UserLandingPageStyle';

// images
import featuredbg from '../../assets/user-items/featuredbg.jpg';

const foodTrays = [
  {
    id: '1',
    name: 'Pork',
    image: 'https://via.placeholder.com/80',
  },
  {
    id: '2',
    name: 'Beef',
    image: 'https://via.placeholder.com/80',
  },
  {
    id: '3',
    name: 'Chicken',
    image: 'https://via.placeholder.com/80',
  },
  {
    id: '4',
    name: 'Seafood',
    image: 'https://via.placeholder.com/80',
  },
  {
    id: '5',
    name: 'Pasta/Noodles',
    image: 'https://via.placeholder.com/80',
  },
  {
    id: '6',
    name: 'Vegtables',
    image: 'https://via.placeholder.com/80',
  },
];

const UserLandingPage = () => {
  // default number of columns
  // set to 3, adjust if may idadagdag sa categories
  const [numColumns, setNumColumns] = useState(3);

  return (
    <View style={styles.container}>
      {/* Search Bar */}
      {/* <TextInput placeholder="Search" style={styles.searchBar} /> */}

      {/* Delivery Section */}
      <View style={styles.deliveryContainer}>
        <Text style={styles.welcomeTitle}>Welcome Back!</Text>
        <Text style={styles.welcomeName}>John Cena</Text>
      </View>

      <View style={styles.featuredItem}>
        <Image source={featuredbg} style={styles.featuredImage} />

        <View style={styles.featuredText}>
          <Text style={styles.featuredTitle}>Crafted For Every</Text>
          <Text style={styles.featuredTitle}>Celebration</Text>
          <TouchableOpacity style={styles.browseButton}>
            <Text style={styles.orderText}>Browse Menu</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Top of the Week */}
      <Text style={styles.sectionTitle}>Top of the Week</Text>
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
