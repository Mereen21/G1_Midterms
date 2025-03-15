import * as React from 'react';
import { View, ScrollView, Dimensions } from 'react-native';
import { Button, Text, Card, Chip } from 'react-native-paper';
import { BarChart } from 'react-native-chart-kit';

import { sellerDashstyles } from '../../style/SellerStyles.js/SellerDashboardStyles';

const screenWidth = Dimensions.get("window").width;

// Functions returning different datasets
const monthlyOrders = () => ({
  labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
  datasets: [{ data: [50, 100, 75, 125] }],
});

const weeklyOrders = () => ({
  labels: ["M", "T", "W", "Th", "F", "S"],
  datasets: [{ data: [10, 20, 15, 25, 30, 12] }],
});

const dailyOrders = () => ({
  labels: ["9 AM", "12 PM", "3 PM", "6 PM"],
  datasets: [{ data: [15, 10, 20, 12] }],
});

const monthlyBookings = () => ({
  labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
  datasets: [{ data: [50, 20, 35, 25] }],
});

const weeklyBookings = () => ({
  labels: ["M", "T", "W", "Th", "F", "S"],
  datasets: [{ data: [4, 2, 6, 0, 2, 4] }],
});

const dailyBookings = () => ({
  labels: ["9 AM", "12 PM", "3 PM", "6 PM"],
  datasets: [{ data: [1, 3, 10, 12] }],
});

// Sales Overview Data
const monthlySales = () => ({
  labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
  datasets: [{ data: [5000, 8000, 6000, 9000] }],
});

const weeklySales = () => ({
  labels: ["M", "T", "W", "Th", "F", "S"],
  datasets: [{ data: [1200, 1500, 1000, 1800, 1600, 1400] }],
});

const dailySales = () => ({
  labels: ["9 AM", "12 PM", "3 PM", "6 PM"],
  datasets: [{ data: [1200, 800, 1500, 1100] }],
});

const defaultChartConfig = {
  backgroundColor: "#ffffff",
  backgroundGradientFrom: "#ffffff",
  backgroundGradientTo: "#ffffff",
  decimalPlaces: 0,
  color: (opacity = 1) => `rgba(0, 122, 255, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  style: { borderRadius: 16 },
};

const SellerDashboard = () => {
  const [filter, setFilter] = React.useState("This Month");
  const [filter2, setFilter2] = React.useState("This Month");
  const [filter3, setFilter3] = React.useState("This Month");
  const [chartData, setChartData] = React.useState(monthlyOrders());
  const [chartData2, setChartData2] = React.useState(monthlyBookings());
  const [chartData3, setChartData3] = React.useState(monthlySales());

  // Change Data Set
  const updateChartData = (selectedFilter) => {
    setFilter(selectedFilter);
    if (selectedFilter === "This Month") setChartData(monthlyOrders());
    else if (selectedFilter === "This Week") setChartData(weeklyOrders());
    else if (selectedFilter === "Today") setChartData(dailyOrders());
  };

  const updateChartData2 = (selectedFilter) => {
    setFilter2(selectedFilter);
    if (selectedFilter === "This Month") setChartData2(monthlyBookings());
    else if (selectedFilter === "This Week") setChartData2(weeklyBookings());
    else if (selectedFilter === "Today") setChartData2(dailyBookings());
  };

  const updateChartData3 = (selectedFilter) => {
    setFilter3(selectedFilter);
    if (selectedFilter === "This Month") setChartData3(monthlySales());
    else if (selectedFilter === "This Week") setChartData3(weeklySales());
    else if (selectedFilter === "Today") setChartData3(dailySales());
  };

  return (
    <ScrollView contentContainerStyle={sellerDashstyles.container}>
      <Text variant="headlineLarge">Home</Text>
    
       {/* SALES */}
       <Card mode="elevated" style={sellerDashstyles.card}>
        <Card.Content>
          <View style={sellerDashstyles.filterButtonContainer}>
            {["This Month", "This Week", "Today"].map((item) => (
              <Button
                buttonColor={filter3 === item ? "#2D9C5A" : "#FFFFFF"}
                textColor={filter3 === item ? "#FFFFFF" : "#2D9C5A"}
                key={item}
                mode={filter3 === item ? "contained" : "outlined"}
                onPress={() => updateChartData3(item)}
              >
                {item}
              </Button>
            ))}
          </View>

          <Text style={sellerDashstyles.chartLabel}>
            Sales Overview ({filter3})
          </Text>

          <BarChart
            data={chartData3}
            width={screenWidth - 70}
            height={250}
            chartConfig={defaultChartConfig}
            showValuesOnTopOfBars={true}
          />
        </Card.Content>
      </Card>

      {/* ORDERS */}
      <Card mode="elevated" style={sellerDashstyles.card}>
        <Card.Content>
          <View style={sellerDashstyles.filterButtonContainer}>
            {["This Month", "This Week", "Today"].map((item) => (
              <Button
                buttonColor={filter === item ? "#2D9C5A" : "#FFFFFF"}
                textColor={filter === item ? "#FFFFFF" : "#2D9C5A"}
                key={item}
                mode={filter === item ? "contained" : "outlined"}
                onPress={() => updateChartData(item)}
              >
                {item}
              </Button>
            ))}
          </View>

          <Text style={sellerDashstyles.chartLabel}>
            Orders Overview ({filter})
          </Text>

          <BarChart
            data={chartData}
            width={screenWidth - 80}
            height={250}
            chartConfig={defaultChartConfig}
            showValuesOnTopOfBars={true}
          />
        </Card.Content>
      </Card>

      {/* BOOKINGS */}
      <Card mode="elevated" style={sellerDashstyles.card}>
        <Card.Content>
          <View style={sellerDashstyles.filterButtonContainer}>
            {["This Month", "This Week", "Today"].map((item) => (
              <Button
                buttonColor={filter2 === item ? "#2D9C5A" : "#FFFFFF"}
                textColor={filter2 === item ? "#FFFFFF" : "#2D9C5A"}
                key={item}
                mode={filter2 === item ? "contained" : "outlined"}
                onPress={() => updateChartData2(item)}
              >
                {item}
              </Button>
            ))}
          </View>

          <Text style={sellerDashstyles.chartLabel}>
            Bookings Overview ({filter2})
          </Text>

          <BarChart
            data={chartData2}
            width={screenWidth - 80}
            height={250}
            chartConfig={defaultChartConfig}
            showValuesOnTopOfBars={true}
          />
        </Card.Content>
      </Card>


 {/* Recent Orders  */}
      <View>
    <Text style={sellerDashstyles.sectionLabel}>Recent Orders</Text> 
    <View style={sellerDashstyles.recentOrdersContainer}>
        <Card mode="elevated" style={sellerDashstyles.recentOrderCard}>
        <Card.Content>
            <Text style={sellerDashstyles.cardTitle}>Juan de la Cruz</Text>
            <Text style={sellerDashstyles.cardSubtitle}>3 Items | 03.12.2025</Text>
            <Chip mode="outlined" style={sellerDashstyles.chip} textStyle={sellerDashstyles.chipText}>
            For Delivery
            </Chip>
        </Card.Content>
        </Card>

        <Card mode="elevated" style={sellerDashstyles.recentOrderCard}>
        <Card.Content>
            <Text style={sellerDashstyles.cardTitle}>Maria Clara</Text>
            <Text style={sellerDashstyles.cardSubtitle}>5 Items | 03.13.2025</Text>
            <Chip mode="outlined" style={sellerDashstyles.chip2} textStyle={sellerDashstyles.chipText}>
            In Kitchen
            </Chip>
        </Card.Content>
        </Card>
    </View>
    </View>

    {/* Recent Bookings */}
    <View>
    <Text style={sellerDashstyles.sectionLabel}>Recent Bookings</Text> 
    <View style={sellerDashstyles.recentOrdersContainer}>
        <Card mode="elevated" style={sellerDashstyles.recentOrderCard}>
        <Card.Content>
            <Text style={sellerDashstyles.cardTitle}>Crisostomo Ibarra</Text>
            <Text style={sellerDashstyles.cardSubtitle}>El Patio| 03.12.2025</Text>
            <Chip mode="outlined"   style={{ backgroundColor: "#007AFF"}} textStyle={sellerDashstyles.chipText}>
            Ongoing
            </Chip>
        </Card.Content>
        </Card>

        <Card mode="elevated" style={sellerDashstyles.recentOrderCard}>
        <Card.Content>
            <Text style={sellerDashstyles.cardTitle}>Maria Clara</Text>
            <Text style={sellerDashstyles.cardSubtitle}>San Augustin | 03.13.2025</Text>
            <Chip mode="outlined"   style={{ backgroundColor: "#B0B0B0" }} textStyle={sellerDashstyles.chipText}>
            TBD
            </Chip>
        </Card.Content>
        </Card>
    </View>
    </View>

     {/* Recent Bookings */}
     <View>
    <Text style={sellerDashstyles.sectionLabel}>Inventory</Text> 
    <View style={sellerDashstyles.recentOrdersContainer}>
        <Card mode="elevated" style={sellerDashstyles.recentOrderCard}>
        <Card.Content>
            <Text style={sellerDashstyles.cardTitle}>Frozen Longganisa</Text>
            <Text style={sellerDashstyles.cardSubtitle}>Only 10 Left</Text>
            <Chip mode="outlined"   style={{ backgroundColor: "#FF3B30"}} textStyle={sellerDashstyles.chipText}>
            RESTOCK
            </Chip>
        </Card.Content>
        </Card>

        <Card mode="elevated" style={sellerDashstyles.recentOrderCard}>
        <Card.Content>
            <Text style={sellerDashstyles.cardTitle}>Frozen Dumplings</Text>
            <Text style={sellerDashstyles.cardSubtitle}>Only 50 Left</Text>
            <Chip mode="outlined"   style={{ backgroundColor: "#FFCC00" }} textStyle={sellerDashstyles.chipText}>
            LOW STOCK
            </Chip>
        </Card.Content>
        </Card>
    </View>
    </View>





    </ScrollView>
  );
};

export default SellerDashboard;
