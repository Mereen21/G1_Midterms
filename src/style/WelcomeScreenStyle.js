import { StyleSheet } from 'react-native';

export const welcomestyle = StyleSheet.create({
  // Main container
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 30,
    backgroundColor: '#1c242e',
  },

  // Background video
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: '100%',
    height: '110%',
  },

  overlay: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },

  // Title container
  titleContainer: {
    position: 'absolute',
    top: 50,
    left: 40,
    width: '100%',
  },

  // Title text
  titleText2: {
    fontSize: 60,
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#ffffff',
  },

  // Subtext
  subtext: {
    fontSize: 17,
    textAlign: 'left',
    color: '#ffffff',
  },

  // Button container
  buttonContainer: {
    position: 'absolute',
    bottom: 10, 
    width: '100%',
    alignItems: 'center',
  },

  // Get Started button
  button: {
    paddingVertical: 12,
    borderRadius: 20,
    borderWidth: 1,
    alignItems: 'center',
    width: '55%',
    marginBottom: 16,
    backgroundColor: '#f26140',
  },

  // Button text
  buttonText: {
    fontSize: 16,
    padding: 6,
    fontWeight: '600',
    color: '#ecedf3',
  },
});
