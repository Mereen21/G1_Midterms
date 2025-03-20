import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f6fe',
    padding: 15,
  },

  searchBar: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 8,
    marginBottom: 15,
  },
  deliveryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 15,
  },
  deliveryTextContainer: {},
  welcomeTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#2e2e2e',
  },
  welcomeName: {
    color: '#2e2e2e',
    fontSize: 12,
  },
  userAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#ddd',
  },
  featuredItem: {
    flexDirection: 'row',
    padding: 10,
    marginBottom: 15,
  },
  featuredImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    overflow: 'hidden',
  },
  featuredText: {
    marginLeft: 10,
    justifyContent: 'center',
  },
  featuredTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  sectionButtonContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 16,
  },
  segmentedButtonWrapper: {
    width: '100%',
    alignItems: 'center',
  },
  browseButton: {
    backgroundColor: '#f26140',
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
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
    // paddingTop: 6,
  },
  foodCard: {
    // backgroundColor: '#f1f1f1',
    borderRadius: 10,
    padding: 4,
    margin: 5,
    width: '30%',
    alignItems: 'center',
  },
  foodImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  foodName: {
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 5,
  },
  searchBar: {
    backgroundColor: '#f0f0f0',
    padding: 12,
    borderRadius: 8,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },

  featuredButton: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: '#f26140',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
  },

  featuredButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  gradientOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },

  serviceCard: {
    flex: 1,
    backgroundColor: '#f26140',
    paddingVertical: 15,
    margin: 5,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
  },
  serviceText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 14,
  },
});
