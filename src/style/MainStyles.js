import { StyleSheet } from 'react-native';

export const mainStyle = StyleSheet.create({
  container: {
    flex: 1,
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
    marginBottom: 16,
  },
  card: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 20,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: -2 },
    elevation: 5,
    paddingTop: 40,
  },
  inputGroup: {
    width: '90%',
    marginHorizontal: 20,
    alignSelf: 'center',
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2e2e2e',
    marginBottom: 6,
  },
  textInput: {
    borderRadius: 8,
    fontSize: 16,
    padding: 12,
    backgroundColor: '#f0eff2',
    width: '100%',
    borderWidth: 1,
  },
  normalBorder: {
    borderColor: '#ccc',
  },
  errorBorder: {
    borderColor: 'red',
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
    color: '#4B382A',
    textAlign: 'center',
    marginTop: 10,
    fontWeight: 'bold',
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    marginBottom: 8,
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
  formTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    borderRadius: 8,
    marginBottom: 8,
  },
  inputError: {
    borderColor: 'red',
  },
});
