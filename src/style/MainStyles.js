import {StyleSheet} from 'react-native';

export const loginstyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#366dfb',
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

  titleContainer: {
    marginLeft: 20,
    marginBottom: 10,
  },

  registerTitle: {
    fontSize: 45,
    fontWeight: 'bold',
    color: '#faffff',
    paddingTop: 40,
    paddingBottom: 6,
  },

  description: {
    fontSize: 14,
    color: '#faffff',
    fontWeight: 'light',
    // marginTop: 5,
    marginBottom: 16,
  },

  card: {
    flex: 1,
    backgroundColor: '#1c222e',
    padding: 20,
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
    // marginTop: 8,
  },

  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 6,
  },

  textInput: {
    // borderWidth: 1,
    borderRadius: 8,
    fontSize: 16,
    padding: 12,
    // backgroundColor: '#f7f7f7', //old bg color
    backgroundColor: '#303c4d',
    width: '100%', 
  },

  button: {
    backgroundColor: '#fad10a',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
    width: '90%',
    alignSelf: 'center', 
  },  

  buttonText: {
    color: '#1c222e',
    fontSize: 16,
    fontWeight: '600',
  },
});