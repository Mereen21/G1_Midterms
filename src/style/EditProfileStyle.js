import {StyleSheet} from 'react-native';


export const editStyle = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#366dfb',
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 50,
  },

  logo: {
    width: 40,
    height: 40,
    marginRight: 10,
  },

  companyName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },

  background: {
    flex: 1,
    width: '100%',
    height: '90%',
  },

  avatarContainer: {
    position: 'absolute',
    top: 90, 
    left: '50%',
    transform: [{ translateX: -50 }], 
    zIndex: 10, 
  },
  
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50, 
    borderWidth: 4,
    borderColor: '#fff', 
  },
  

  titleContainer: {
    marginLeft: 20,
    marginBottom: 10,
  },

  Title: {
    fontSize: 45,
    fontWeight: 'bold',
    color: '#000000',
    paddingTop: 40,
    paddingBottom: 6,
    marginBottom:10
  },

  description: {
    fontSize: 14,
    color: '#faffff',
    fontWeight: 'light',
    // marginTop: 5,
    marginBottom: 16,
  },
  form:{
    marginTop:40,
  },
  card: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 20,
    paddingTop:80,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: -2},
    elevation: 5,
    paddingTop: 40,
  },

  formTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
  },

  inputGroup: {
    width: '90%', 
    marginHorizontal: 20, 
    alignSelf: 'center', 
    marginBottom: 16,
    // marginTop: 20,
  },

  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2e2e2e',
    marginBottom: 6,
  },

  textInput: {
    // borderWidth: 1,
    borderRadius: 8,
    fontSize: 16,
    padding: 12,
    // backgroundColor: '#f7f7f7', //old bg color
    backgroundColor: '#f0eff2',
    width: '100%', 
  },

  button: {
    backgroundColor: '#f26140',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
    width: '90%',
    alignSelf: 'center', 
  },  

  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  signInText: {
    color: "#4B382A",
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 40,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)', // Dim background effect
  },
  
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center', 
  },
  
  modalText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 10,
  },
  
  logoutButton: {
    flex: 1,
    padding: 10,
    backgroundColor: '#d9534f',
    borderRadius: 5,
    alignItems: 'center',
    marginRight: 5,
  },
  
  cancelButton: {
    flex: 1,
    padding: 10,
    backgroundColor: '#ccc',
    borderRadius: 5,
    alignItems: 'center',
    marginLeft: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // width: '100%',
  },
  
});