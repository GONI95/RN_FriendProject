import { ScrollView, View } from "react-native"
import Profile from "./Profile"
import Margin from "./Margin";

export default (props) => {
  /**
   * 2. if문으로 예외처리 (가독성)
   */
  if (!props.isOpened) return null;
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
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

  /**
   * 1. 삼항 연산자
   */
  //return props.isOpened ? (
  //  <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: bottomSpace }}>
  //    {props.data.map((item, index) => (
  //      <View key={index}>
  //        <Profile
  //          uri={item.uri}
  //          name={item.name} 
  //          introduction={item.introduction}
  //        />
  //        <Margin height={13} />
  //      </View>
  //    ))}
  //  </ScrollView>
  //) : null;
}