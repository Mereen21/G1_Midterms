import { StyleSheet } from "react-native";

export const sellerDashstyles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#ffffff"
  },
  card: {
    marginTop: 16,
    padding: 5,
    paddingRight:10,
    elevation: 4, 
    backgroundColor: "#ffffff", 
    borderRadius: 10, 
    
  },
  filterButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 10,
    
  },
  btnColor:{
    backgroundColor:"#2D9C5A"
  },
  chartLabel: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10, 
  },
  chartContainer: {
    alignItems: "center",
    justifyContent: "center", 
    
  },
  chart: {
    borderRadius: 16,
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
  },
});
