import {
  Image,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";

import { StatusBar } from "expo-status-bar";
import { MagnifyingGlassIcon } from "react-native-heroicons/outline";

export default function HomeScreen() {
  return (
    <View className="flex-1 relative">
      {/* Background Image */}
      <Image
        blurRadius={70}
        source={require("../../assets/images/bg.png")}
        width={100}
        className="absolute h-full w-full"
      />
      <StatusBar style="light" />

      {/* Safe Area */}
      <SafeAreaView className="flex flex-1">
        {/* Search Bar Container */}
        <View className=" mx-4 relative z-50">
          <View className="flex-row items-center bg-white/20 rounded-full pl-3">
            {/* Text Input */}
            <TextInput
              placeholder="Search city"
              placeholderTextColor="lightgrey"
              className="flex-1 text-white"
            />
            {/* Search Button */}
            <TouchableOpacity className="bg-white/30 rounded-full p-4">
              <MagnifyingGlassIcon size={25} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}
