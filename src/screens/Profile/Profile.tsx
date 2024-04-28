import { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useTranslation } from "react-i18next";

import { ImageVariant } from "@/components/atoms";
import { SafeScreen } from "@/components/template";
import { useTheme } from "@/theme";

function Profile() {
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
        style={[
          layout.justifyCenter,
          layout.itemsCenter,
          gutters.marginTop_80,
          layout.fullHeight,
        ]}
      >
        <View>
          <Text>Welcome to profile</Text>
        </View>
      </View>
    </SafeScreen>
  );
}

export default Profile;
