export const usermanageStyles = {
  maincontainer: {
    flex: 1,
    padding: 20,
    backgroundColor: '#5C5C5C',
  },
  categoryTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: 'white'
  },
  searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  searchContainer: {
    flex: 3, // Takes most of the space
    backgroundColor: '#5C5C5C',
    padding: 10,

    marginRight: 10, // Space between search and suggestion
  },
  searchInput: {
    color: 'white',
    borderWidth: 1,
    borderColor: '#FFFFFF',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
  },
  newuserBox: {
    flex: 1, // Smaller width than search
    backgroundColor: '#ff9800',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ff9800',
    justifyContent: 'center',
    alignItems: 'center',
  },
  newusertext: {
    fontSize: 14,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  categoryContainer: {
    marginBottom: 10,
  },
  categoryButton: {
    backgroundColor: '#222',
    padding: 5,
    borderColor: '#222',
    color: 'white',
  },
  card: {
    marginVertical: 5,
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#222'
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  cardContent: {
    fontSize: 14,
    color: 'white',
  },
  cardStatus: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  addbutton: {
    backgroundColor: '#FFA500',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
    width: '90%',
    alignSelf: 'center',
  },
  editButton: {
    backgroundColor: '#ff9800',
  },
  deleteButton: {
    backgroundColor: '#d32f2f',
  },
  noUsersText: {
    textAlign: 'center',
    color: 'red',
    fontSize: 16,
    marginTop: 10,
  },

  //Modal

  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
  },
  modalContent: {
    width: '80%',
    padding: 20,
    backgroundColor: '#222',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'white',
  },
  closeButton: {
    backgroundColor: 'red',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
    width: '90%',
    alignSelf: 'center',
  },

  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 6,
    color: 'white',
  },
  textInput: {
    borderRadius: 8,
    fontSize: 16,
    padding: 12,
    backgroundColor: '#2C2C2C',
    width: '100%',
    borderWidth: 1,
    color: 'white',
  },
};
