import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import Video from 'react-native-video';
import {welcomestyle} from '../style/WelcomeScreenStyle';

const WelcomeScreen = ({navigation}) => {
  return (
    <View style={welcomestyle.container}>
      {/* Video Background */}
      <Video
        source={require('../assets/landingvideo.mp4')}
        style={welcomestyle.backgroundVideo}
        resizeMode="cover"
        repeat
        muted
        playWhenInactive
      />

      {/* Overlay Content */}
      <View style={welcomestyle.overlay}>
        {/* Title Section */}
        <View style={welcomestyle.titleContainer}>
          <Text style={welcomestyle.titleText2}>VLSQZ</Text>
          <Text style={welcomestyle.subtext}>Catering Services</Text>
        </View>

        {/* Get Started */}
        <View style={welcomestyle.buttonContainer}>
          <TouchableOpacity
            style={welcomestyle.button}
            onPress={() => navigation.navigate('LoginScreen')}>
            <Text style={welcomestyle.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default WelcomeScreen;
