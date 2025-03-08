import {StyleSheet} from 'react-native';

export const welcomestyle = StyleSheet.create({
  // main container
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 30,
    backgroundColor: '#1c242e',
  },

  // title container
  titleContainer: {
    position: 'absolute',
    top: 50, // Adjust as needed
    left: 40,
    width: '100%',
    alignItems: 'left',
  },
  // title text
  titleText: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#ffffff',
  },
  titleText2: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#f9d000',
  },
  // subtext
  subtext: {
    fontSize: 17,
    textAlign: 'left',
    color: '#ffffff',
  },

  // image container
  imageContainer: {
    width: 350,
    height: 258,
    backgroundColor: '#2a70ed',
    borderRadius: 20,
    justifyContent: 'flex-end',
    alignItems: 'center',
    position: 'relative',
    marginBottom: 100,
  },
  // image
  image: {
    width: 350,
    height: 350,
    position: 'absolute',
    bottom: 0,
    zIndex: 10,
  },

  // button container
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
  },
  // signup button
  button: {
    paddingVertical: 12,
    borderRadius: 20,
    borderWidth: 1,
    alignItems: 'center',
    width: '55%',
    marginBottom: 16,
    backgroundColor: '#fad10a',
  },
  // signup button text
  buttonText: {
    fontSize: 16,
    padding: 6,
    fontWeight: '600',
    color: '#1c242e',
  },
  // loginbutton
  buttonLogin: {
    paddingVertical: 12,
    bworderRadius: 20,
    alignItems: 'center',
    width: '70%',
  },
  // login button
  buttonTextLogin: {
    fontSize: 16,
    padding: 6,
    color: '#ecedf3',
    fontWeight: '600',
  },
});
