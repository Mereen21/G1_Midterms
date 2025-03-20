import React from 'react';
import { View, Text, Image, TouchableOpacity, Dimensions, Pressable } from 'react-native';
import { LineChart, PieChart } from 'react-native-chart-kit';
import { useNavigation } from '@react-navigation/native'; // Import navigation hook
import { adminStyles } from '../../style/AdministratorStyles/AdminStyles';

const screenWidth = Dimensions.get('window').width;

const AdminPageScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={{ flex: 1, backgroundColor: '#5C5C5C' }}>
            {/* Header Section */}
            <View style={adminStyles.header}>
                <Pressable onPress={() => navigation.navigate("EditProfileScreen", { avatar: require('../../assets/admin-items/logo.png') })}>
                    <Image source={require('../../assets/admin-items/logo.png')} style={adminStyles.logo} />
                </Pressable>
                <Text style={adminStyles.welcomeText}>Welcome, Admin</Text>
            </View>

            {/* Overview Section */}
            <View style={adminStyles.overviewContainer}>
                {/* Sales Overview with Chart */}
                <View style={adminStyles.overviewBox}>
                    <Text style={adminStyles.overviewText}>Sales Overview</Text>
                    <LineChart
                        data={{
                            labels: ["Jan", "Feb", "Mar", "Apr", "May"],
                            datasets: [
                                {
                                    data: [50, 70, 80, 60, 90],
                                    strokeWidth: 2,
                                },
                            ],
                        }}
                        width={screenWidth * 0.85} // Adjust width
                        height={170} // Adjust height
                        chartConfig={{
                            backgroundColor: "#2E2E2E", // Use solid background color
                            backgroundGradientFrom: "#2E2E2E", // Match background color
                            backgroundGradientTo: "#2E2E2E", // Match background color
                            decimalPlaces: 0,
                            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`, // White lines
                            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`, // White text
                            style: {
                                borderRadius: 10, // Rounded corners
                            },
                            propsForDots: {
                                r: "4",
                                strokeWidth: "2",
                                stroke: "#fff",
                            },
                        }}
                        bezier
                        style={{
                            backgroundColor: "#5C5C5C", // Make sure the container matches
                            borderRadius: 10,
                            marginVertical: 8,
                        }}
                    />
                </View>

               
            </View>
           {/* Something Overview Box */}
           <View style={adminStyles.overviewContainer}>
           <View style={adminStyles.overviewBox}>
                    <Text style={adminStyles.overviewText}>Events and Orders Overview</Text>
                    <PieChart
                        data={[
                            { name: "Single Order", population: 40, color: "#FF6384", legendFontColor: "#fff", legendFontSize: 12 },
                            { name: "Packaged Order", population: 25, color: "#36A2EB", legendFontColor: "#fff", legendFontSize: 12 },
                            { name: "Confirm Events", population: 8, color: "#FFCE56", legendFontColor: "#fff", legendFontSize: 12 },
                            
                        ]}
                        width={screenWidth * 0.85} // Adjust width
                        height={170} // Adjust height
                        chartConfig={{
                            backgroundColor: "#2E2E2E",
                            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`, // White labels
                            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`, // White text
                        }}
                        accessor={"population"}
                        backgroundColor={"#2E2E2E"} // Match the background color
                        paddingLeft={"6"}
                        absolute // Shows percentage inside slices
                    />


                </View>
                </View>
        </View>
    );
};

export default AdminPageScreen;
