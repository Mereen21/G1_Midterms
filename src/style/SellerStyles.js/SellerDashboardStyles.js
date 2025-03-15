import { StyleSheet } from "react-native";

export const sellerDashstyles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#ffffff"
  },
  body:{
    margin:20
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
  card: {
    marginTop: 20,
    padding: 5,
    paddingRight:20,
    elevation: 4, 
    backgroundColor: "#ffffff", 
    borderRadius: 10, 
    
  },
  filterButtonContainer: {
    flexDirection: "row",
    flexWrap: "wrap", 
    justifyContent: "space-evenly", 
    marginBottom: 10,
    paddingHorizontal: 10, 
  },
  button: {
    flexShrink: 1, 
    minWidth: 90, 
    marginHorizontal: 5, 
    fontSize:20,
  },
  chartLabel: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10, 
  },
  chartContainer: {
    width: "100%", 
    alignItems: "center",
    justifyContent: "center",
    overflow: "visible", // Ensure bars are fully visible
    paddingHorizontal: 10, // Adds padding to prevent cutoff
  },
  chart: {
    borderRadius: 16,
    minWidth: 300, 
    maxWidth: "95%", 
    alignSelf: "center",
    marginRight: 10, // Fix right side cutoff
  },
  sectionLabel: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop:10,
    marginBottom: 5,
    paddingLeft: 8,
  },
  fullWidthCard: {
    width: "100%", 
    marginBottom: 10,
    elevation: 4,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    padding: 12,
  },
  recentOrdersContainer: {
    flexDirection: "row", 
    flexWrap: "wrap", 
    justifyContent: "space-between", 
    padding: 8,
  },
  recentOrderCard: {
    width: "48%", 
    marginBottom: 10, 
    elevation: 4, 
    backgroundColor: "#ffffff",
    borderRadius: 10, 
    padding: 10,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  cardSubtitle: {
    fontSize: 12,
    color: "gray",
    marginBottom: 8,
  },
  chip: {
    alignSelf: "flex-start",
    backgroundColor: "#2D9C5A",
  },
  chip2: {
    alignSelf: "flex-start",
    backgroundColor: "#FFA500",
  },
  chipText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 12, 
  },
});
