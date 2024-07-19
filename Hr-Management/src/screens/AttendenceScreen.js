import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { IconButton, Button } from "react-native-paper";

import themeContext from "../context/themeContext";

const AttendenceScreen = ({ navigation }) => {
  const theme = useContext(themeContext);
  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      {/* Header */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
          alignSelf: "stretch",
        }}
      >
        <IconButton
          icon="arrow-left"
          iconColor={theme.color}
          size={20}
          onPress={() => console.log("Back Button Pressed!")}
        />
        <Text
          style={{
            fontSize: 17,
            color: theme.color,
            marginLeft: "20%",
          }}
        >
          Attendence Check
        </Text>
      </View>
      <View style={styles.content}>
        <Text style={[styles.text, { color: theme.color }]}>Clock In</Text>
        <Text style={styles.clockText}>08.00 AM</Text>
        <IconButton
          icon="face-recognition"
          iconColor="white"
          style={{
            backgroundColor: theme.iconBG,
            width: 140,
            height: 140,
            borderRadius: 100,
          }}
          size={100}
          onPress={() => console.log("Pressed")}
        />
        <Text style={[styles.headerText, { color: theme.color }]}>
          Face Recognition
        </Text>
        <Text style={[styles.paraText, , { color: theme.primaryText }]}>
          Ensure you are currently at the office and in well-lit surroundings
          for optimal face recognition.
        </Text>
      </View>
      <View style={styles.bottomButtonContainer}>
        <Button
          mode="contained"
          style={{
            backgroundColor: theme.buttonBackground,
            color: theme.buttonText,
          }}
          onPress={() => navigation.navigate("AttendenceSuccessScreen")}
        >
          Start Live Attendance
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 20,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 15,
    fontWeight: "300",
  },
  clockText: {
    color: "green",
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
  },
  headerText: {
    marginTop: 10,
    fontSize: 25,
    fontWeight: "bold",
  },
  paraText: {
    marginTop: 5,
    textAlign: "center",
    marginBottom: 20,
    fontSize: 16,
  },
  bottomButtonContainer: {
    marginBottom: 20,
    width: "90%",
  },
});

export default AttendenceScreen;
