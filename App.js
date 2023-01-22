import { useState } from "react";
import { Platform, StyleSheet, View } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { myProfile, friendProfiles } from "./src/data";
import Header from "./src/Header";
import Margin from "./src/Margin";
import Profile from "./src/Profile";
import Division from "./src/Division";
import FriendSection from "./src/FriendSection";
import FriendList from "./src/FriendList";
import TabBar from "./src/TabBar";

// statusBarHeight와 관련된 코드 및 라이브러리 없애고 edges를 수정해도 동작함
const statusBarHeight = getStatusBarHeight(true);

export default function App() {
  console.log("App Start")
  console.log('statusBarHeight', statusBarHeight, Platform.OS)

  const [isOpened, setIsOpened] = useState(true);
  const [selectedTabIdx, setSelectedTabIdx] = useState(0);

  const onPressArrow = () => {
    setIsOpened(!isOpened);
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={["right", "left"]}>
        <View style={{ flex: 1, paddingHorizontal: 15 }}>
          <Header />

          <Margin height={10} />

          <Profile
            uri={myProfile.uri}
            name={myProfile.name}
            introduction={myProfile.introduction}
          />

          <Margin height={15} />

          <Division />

          <Margin height={12} />

          <FriendSection
            friendProfileLen={friendProfiles.length}
            onPressArrow={onPressArrow}
            isOpened={isOpened}
          />

          <Margin height={12} />

          <FriendList data={friendProfiles} isOpened={isOpened} />
        </View>

        <TabBar 
          selectedTabIdx={selectedTabIdx}
          setSelectedTabIdx={setSelectedTabIdx}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: statusBarHeight,
  },
});