import React from 'react';
import { View, Text, Image, TouchableOpacity, Dimensions, Pressable } from 'react-native';
import { LineChart, PieChart } from 'react-native-chart-kit';
import { adminStyles } from '../../style/AdministratorStyles/AdminStyles';

const screenWidth = Dimensions.get('window').width;

const AdminPageScreen = ({ navigation }) => {
    const handleBoxPress = (screenName) => {
        console.log(`${screenName} pressed`);
        navigation.navigate(screenName);
    };

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
                        width={screenWidth * 0.4} // Adjust width
                        height={120} // Adjust height
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

                {/* Something Overview Box */}
                <View style={adminStyles.overviewBox}>
                    <Text style={adminStyles.overviewText}>Something Overview</Text>
                    <PieChart
                        data={[
                            { name: "Category A", population: 40, color: "#FF6384", legendFontColor: "#fff", legendFontSize: 12 },
                            { name: "Category B", population: 30, color: "#36A2EB", legendFontColor: "#fff", legendFontSize: 12 },
                            { name: "Category C", population: 20, color: "#FFCE56", legendFontColor: "#fff", legendFontSize: 12 },
                            { name: "Category D", population: 10, color: "#4BC0C0", legendFontColor: "#fff", legendFontSize: 12 },
                        ]}
                        width={screenWidth * 0.4} // Adjust width
                        height={120} // Adjust height
                        chartConfig={{
                            backgroundColor: "#2E2E2E",
                            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`, // White labels
                            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`, // White text
                        }}
                        accessor={"population"}
                        backgroundColor={"#2E2E2E"} // Match the background color
                        paddingLeft={"10"}
                        absolute // Shows percentage inside slices
                    />


                </View>
            </View>
            <View style={[adminStyles.container]}>
                {/* Bottom Navigation */}
                <View style={adminStyles.bottomNav}>
                    <TouchableOpacity style={adminStyles.navBox} onPress={() => handleBoxPress('MenuManagementScreen')}>
                        <Image source={require('../../assets/admin-items/white-home.png')} style={adminStyles.navIcon} />
                        <Text style={adminStyles.navText}>Home</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={adminStyles.navBox} onPress={() => handleBoxPress('MenuManagementScreen')}>
                        <Image source={require('../../assets/admin-items/menumanagementicon.png')} style={adminStyles.navIcon} />
                        <Text style={adminStyles.navText}>Menu</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={adminStyles.navBox} onPress={() => handleBoxPress('ContentManagementScreen')}>
                        <Image source={require('../../assets/admin-items/contenticon.png')} style={adminStyles.navIcon} />
                        <Text style={adminStyles.navText}>Content</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={adminStyles.navBox} onPress={() => handleBoxPress('UserAnalyticsScreen')}>
                        <Image source={require('../../assets/admin-items/analytics.png')} style={adminStyles.navIcon} />
                        <Text style={adminStyles.navText}>Analytics</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={adminStyles.navBox}
                        onPress={() => handleBoxPress('UserAccountManagementScreen')}
                    >
                        <Image source={require('../../assets/admin-items/users.png')} style={adminStyles.navIcon} />
                        <Text style={adminStyles.navText}>User</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default AdminPageScreen;
