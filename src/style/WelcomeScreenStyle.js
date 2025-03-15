import {StyleSheet} from 'react-native';

// bat may mainstyle may registerstyle at welcomescreenstyle ? may mga pareparehas naman na code

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
    top: 50, 
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
    fontSize: 60,
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#ffffff',
  },
  // subtext
  subtext: {
    fontSize: 17,
    textAlign: 'left',
    color: '#ffffff',
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
    backgroundColor: '#f26140',
  },
  // signup button text
  buttonText: {
    fontSize: 16,
    padding: 6,
    fontWeight: '600',
    color: '#ecedf3',
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
