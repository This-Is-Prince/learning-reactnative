import { View } from "react-native";
import { AppText } from "@/components/AppText";
import { Link, useRouter } from "expo-router";
import { Button } from "@/components/Button";

export default function IndexScreen() {
  // const router = useRouter();

  return (
    <View className="justify-center flex-1 p-4">
      <AppText center size="heading" bold>
        Index Screen
      </AppText>
      {/* <Link href="/second" push>
        Push to /second
      </Link> */}
      <Link href="/second" push asChild>
        <Button title="Push to /second" />
      </Link>
      {/* <Button title="Push to /second" onPress={() => router.push("/second")} /> */}
    </View>
  );
}