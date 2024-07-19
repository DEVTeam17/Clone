import React, { useContext } from "react";
import { SafeAreaView, ScrollView, View, Text, StyleSheet } from "react-native";
import { Divider } from "react-native-paper";
import AttendanceItem from "../components/AttendanceItem";
import themeContext from "../context/themeContext";

const AllUsersScreen = ({ route }) => {
  const { users } = route.params;
  const theme = useContext(themeContext);

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.background }]}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View
          style={[
            styles.attendanceContainer,
            { backgroundColor: theme.secondaryBackground },
          ]}
        >
          <View style={styles.header}>
            <Text style={[styles.headerText, { color: theme.color }]}>
              All Users
            </Text>
          </View>
          {users.map((user, index) => (
            <View key={user.name}>
              <AttendanceItem
                name={user.name}
                title={user.title}
                time={user.time}
                avatarSource={user.avatarSource}
                isLoggedIn={user.isLoggedIn}
              />
              {index < users.length - 1 && <Divider />}
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  attendanceContainer: {
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 10,
    borderRadius: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  headerText: {
    alignSelf: "flex-start",
    fontSize: 17,
    fontWeight: "bold",
    alignItems: "center",
  },
});

export default AllUsersScreen;
