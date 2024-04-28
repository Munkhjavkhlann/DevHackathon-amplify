import { HomeScreen } from "@/screens";
import type { StackScreenProps } from "@react-navigation/stack";

export type ApplicationStackParamList = {
  Home: undefined;
  Profile: undefined;
  Camera: undefined;
};

export type ApplicationScreenProps =
  StackScreenProps<ApplicationStackParamList>;
