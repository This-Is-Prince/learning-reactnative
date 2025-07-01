import { View } from "react-native";
import { AppText } from "@/components/AppText";
import { Link } from "expo-router";

export default function IndexScreen() {
  return (
    <View className="justify-center flex-1 p-4">
      <AppText center size="heading" bold>
        Second Screen
      </AppText>
      <Link href="/third" push>
        Push to /third
      </Link>
    </View>
  );
}