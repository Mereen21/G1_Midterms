import * as React from 'react';
import { Button,Text,} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const SellerDashboard = () => (
  <>
   <Text variant="headlineLarge">Home</Text>
   <Button
      icon={() => <MaterialCommunityIcons name="calendar" size={24} color="white" />}
      mode="contained"
      onPress={() => console.log('Pressed')}
    >
    This Month
  </Button>
  <Button  mode="contained" onPress={() => console.log('Pressed')}>
    This Week
  </Button>
  <Button  mode="contained" onPress={() => console.log('Pressed')}>
    Today
  </Button>
 </>
);

export default SellerDashboard;