import { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useTranslation } from "react-i18next";

import Icon from "react-native-vector-icons/FontAwesome";
import { ImageVariant } from "@/components/atoms";
import { SafeScreen } from "@/components/template";
import { useTheme } from "@/theme";
import ColorsWatchImage from "@/theme/assets/images/colorswatch.png";

function HomeScreen() {
  const { t } = useTranslation(["example", "welcome"]);

  const {
    colors,
    variant,
    changeTheme,
    layout,
    gutters,
    fonts,
    components,
    backgrounds,
  } = useTheme();

  const onChangeTheme = () => {
    changeTheme(variant === "default" ? "dark" : "default");
  };

  return (
    <SafeScreen>
      <View
        style={[layout.justifyCenter, layout.itemsCenter, layout.fullHeight]}
      >
        <View>
          <Text style={{ color: "#000" }}>Title</Text>
          {/* <Text>Hi</Text>
          <Icon name="rocket" size={30} color="#900" /> */}
        </View>
        {/* <View style={[layout.justifyBetween, layout.bottom0]}>
          <TouchableOpacity
            testID="change-theme-button"
            style={[components.buttonCircle, gutters.marginBottom_16]}
            onPress={() => onChangeTheme()}
          >
            <ImageVariant
              source={ColorsWatchImage}
              style={{ tintColor: colors.purple500 }}
            />
          </TouchableOpacity>
        </View> */}
      </View>
    </SafeScreen>
  );
}

export default HomeScreen;
