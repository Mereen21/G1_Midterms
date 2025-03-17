import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { View, Text, Image, TouchableOpacity, Dimensions, Pressable } from 'react-native';
import { LineChart, PieChart } from 'react-native-chart-kit';
import { adminStyles } from '../../style/AdministratorStyles/AdminStyles';
import { usermanageStyles } from '../../style/AdministratorStyles/UserManageStyles';


const screenWidth = Dimensions.get('window').width;

const AdminPageScreen = ({ navigation }) => {
    const handleBoxPress = (screenName) => {
        console.log(`${screenName} pressed`);
        navigation.navigate(screenName);
    };

    return (
        <View style={{ flex: 1, backgroundColor: '#5C5C5C' }}>
            <View style={usermanageStyles.header}>
                <View style={usermanageStyles.leftContainer}>
                    {/* <Pressable onPress={() => navigation.navigate("EditProfileScreen")}>
                        <Image source={require('../../assets/admin-items/logo.png')} style={usermanageStyles.logo} />
                    </Pressable> */}
                    <Text style={usermanageStyles.welcomeText}>User List</Text>
                </View>

                {/* Right section: New User Box */}
                <TouchableOpacity style={usermanageStyles.newuserBox}>
                    <Text style={usermanageStyles.newusertxt}>+ ADD USER</Text>
                </TouchableOpacity>
            </View>

            <SafeAreaView style={{ flex: 'auto' }}>
                <ScrollView contentContainerStyle={{ flexGrow: 1, }}>
                    <View style={usermanageStyles.maincontainer}>
                        <Text style={usermanageStyles.desc}>Customers</Text>
                        <View style={usermanageStyles.listcontainer1}>

                            <View style={usermanageStyles.customerbox}>

                            </View>
                        </View>

                        <Text style={usermanageStyles.desc}>Employees</Text>
                        <View style={usermanageStyles.listcontainer2}>

                            <View style={usermanageStyles.customerbox}>

                            </View>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>

            <View style={[adminStyles.container]}>
                {/* Bottom Navigation */}
                <View style={adminStyles.bottomNav}>
                    <TouchableOpacity style={adminStyles.navBox} onPress={() => handleBoxPress('AdminPageScreen')}>
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
                        <Image source={require('../../assets/admin-items/userselect.png')} style={adminStyles.navIcon} />
                        <Text style={adminStyles.navText}>User</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default AdminPageScreen;

