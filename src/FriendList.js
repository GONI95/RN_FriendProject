import { ScrollView } from "react-native"
import { getBottomSpace } from "react-native-iphone-x-helper";
import { View } from "react-native";
import Profile from "./Profile"
import Margin from "./Margin";

const bottomSpace = getBottomSpace();

export default (props) => {
  console.log('getBottomSpace', bottomSpace, Platform.OS)

  return (
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: bottomSpace }}>
      {props.data.map((item, index) => (
        <View key={index}>
          <Profile
            uri={item.uri}
            name={item.name} 
            introduction={item.introduction}
          />
          <Margin height={13} />
        </View>
      ))}
    </ScrollView>
  )
}