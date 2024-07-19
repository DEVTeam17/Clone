import React, { useState, useContext, useEffect } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  ImageBackground,
  Text,
  ScrollView,
  TouchableOpacity,
  Modal,
  FlatList,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import AttendanceCheck from "../components/AttendanceCheck";
import ActivitySection from "../components/ActivitySection";
import themeContext from "../context/themeContext";
import activityData from "../data/activityData";
import Button from "../components/Button";

const image = {
  uri: "https://img.freepik.com/free-photo/black-prism-concept-ai-generated_268835-7011.jpg",
};

const filterOptions = [
  "Time Off",
  "Payroll",
  "Learning Session",
  "Coffee Break",
  "Project Completion",
  "Team Meeting",
  "Training Session",
  "Task Completed",
  "Meeting",
  "Project Kickoff",
  "Deadline",
];

const ActivityScreen = () => {
  const theme = useContext(themeContext);

  // State for filter criteria and filtered data
  const [filterText, setFilterText] = useState("");
  const [filteredData, setFilteredData] = useState(activityData);
  const [isModalVisible, setIsModalVisible] = useState(false);

  // Function to filter data based on filterText
  const applyFilter = () => {
    const filtered = activityData.filter((item) =>
      item.title.toLowerCase().includes(filterText.toLowerCase())
    );
    setFilteredData(filtered);
  };

  // Function to reset filter
  const clearFilter = () => {
    setFilterText("");
    setFilteredData(activityData);
  };

  // Function to filter data based on selected category
  const filterByCategory = (category) => {
    const filtered = activityData.filter((item) =>
      item.title.toLowerCase().includes(category.toLowerCase())
    );
    setFilteredData(filtered);
    setIsModalVisible(false);
  };

  // Use effect to apply filter when filterText changes
  useEffect(() => {
    applyFilter();
  }, [filterText]);

  // Group activities by date
  const groupedData = filteredData.reduce((acc, item) => {
    const date = item.date;
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(item);

    return acc;
  }, {});

  return (
    <ScrollView style={{ flex: 1, backgroundColor: theme.black }}>
      <ImageBackground
        source={image}
        style={{
          paddingTop: 50,
          paddingHorizontal: 5,
          paddingVertical: 30,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            color: "white",
            fontWeight: "bold",
            fontSize: 20,
          }}
        >
          Activity
        </Text>
        <View
          style={[
            styles.searchContainer,
            { backgroundColor: theme.secondaryBackground },
          ]}
        >
          <Icon
            name="search"
            size={24}
            color={theme.primaryText}
            style={styles.icon}
          />
          <TextInput
            style={[styles.input, { color: theme.primaryText }]}
            placeholder="Search your activity..."
            placeholderTextColor={theme.primaryText}
            value={filterText}
            onChangeText={(text) => setFilterText(text)}
          />
          <TouchableOpacity onPress={() => setIsModalVisible(true)}>
            <Icon
              name="filter"
              size={24}
              color={theme.primaryText}
              style={styles.filterIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={clearFilter}>
            <Icon
              name="times-circle"
              size={24}
              color={theme.primaryText}
              style={styles.filterIcon}
            />
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <View
        style={{
          padding: 20,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          backgroundColor: theme.background,
          flex: 1,
        }}
      >
        {Object.keys(groupedData).map((date) => (
          <View key={date}>
            <Text style={{ color: theme.primaryText, fontWeight: "thin" }}>
              {date}
            </Text>
            {groupedData[date].map((item, index) => (
              <View key={index}>
                {item.type === "attendance" && (
                  <AttendanceCheck
                    title={item.title}
                    checkIn={item.checkIn}
                    checkOut={item.checkOut}
                  />
                )}
                {item.type === "activity" && (
                  <ActivitySection
                    iconLeft={item.iconLeft}
                    title={item.title}
                    bottomText={item.bottomText}
                    color={item.color}
                  />
                )}
              </View>
            ))}
          </View>
        ))}
      </View>

      <Modal
        visible={isModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setIsModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Filter by Category</Text>
            <FlatList
              data={filterOptions}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.filterItem}
                  onPress={() => filterByCategory(item)}
                >
                  <Text style={styles.filterText}>{item}</Text>
                </TouchableOpacity>
              )}
            />

            <Button title="Close" onPress={() => setIsModalVisible(false)} />
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingHorizontal: 10,
    marginHorizontal: 20,
    marginTop: 20,
    backgroundColor: "white",
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    paddingVertical: 10,
  },
  filterIcon: {
    marginLeft: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: "80%",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  filterItem: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  filterText: {
    fontSize: 16,
  },
  closeButton: {
    width: "50%",
  },

  closeButtonText: {
    color: "white",
    fontSize: 16,
  },
});

export default ActivityScreen;
