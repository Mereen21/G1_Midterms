import { StyleSheet } from "react-native";
export const sellerInv = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  searchInput: {
    marginVertical: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
  },
  card: {
    marginVertical: 8,
    padding: 10,
    backgroundColor: '#e8f5e9',
  },
  cardTitle: {
    fontWeight: 'bold',
    color: '#2e7d32',
  },
  editButton: {
    backgroundColor: '#ff9800',
  },
  saveButton: {
    backgroundColor: '#006400',
  },
  deleteButton: {
    backgroundColor: '#d32f2f',
  },
  fab: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    backgroundColor: '#2e7d32',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
});
