// ActivitySection.js

import React, { useContext } from "react";
import { View, Text } from "react-native";
import { Icon } from "react-native-paper";
import themeContext from "../context/themeContext";
import iconMappings from "../utils/iconMappings";

const ActivitySection = ({ title, bottomText }) => {
  const theme = useContext(themeContext);

  // Retrieve icon name based on title from iconMappings
  const iconName = iconMappings[title];

  // Default color logic (you can adjust as needed)
  const color = title === "Time Off" ? "orange" : "blue";

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: theme.secondaryBackground,
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginTop: 10,
      }}
    >
      {iconName && (
        <Icon source={iconName} type="material" color={color} size={30} />
      )}
      <View style={{ marginLeft: 10 }}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
            paddingLeft: 10,
            color: theme.color,
          }}
        >
          {title}
        </Text>
        <Text style={{ paddingLeft: 10, color: theme.primaryText }}>
          {bottomText}
        </Text>
      </View>
    </View>
  );
};

export default ActivitySection;
