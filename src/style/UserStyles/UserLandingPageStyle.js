import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 15,
  },
  searchBar: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 8,
    marginBottom: 15,
  },
  deliveryContainer: {
    backgroundColor: '#2D9C5A',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  welcomeTitle: {
    color: '#fff',
    fontWeight: 'bold',
  },
  welcomeName: {
    color: '#fff',
    fontSize: 12,
  },
  featuredItem: {
    backgroundColor: '#eee',
    borderRadius: 10,
    flexDirection: 'row',
    padding: 10,
    marginBottom: 15,
  },
  featuredImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  featuredText: {
    marginLeft: 10,
    justifyContent: 'center',
  },
  featuredTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
//   descriptionTitle: {
//     fontSize: 14,
//     marginBottom: 5,
//   },
  browseButton: {
    backgroundColor: '#2D9C5A',
    marginTop: 4,
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  orderText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  foodCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 8,
    margin: 5,
    width: '30%', 
    alignItems: 'center',
    elevation: 3,
  },
  foodImage: {
    width: 70, 
    height: 70,
    borderRadius: 10,
  },
  foodName: {
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 5,
  },
});
