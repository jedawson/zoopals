import React from "react";
import { View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
import styles from "../../../global-styles";
import { ZookeeperState } from "../../../store/store";
import { Title } from "../Title";
import { ZookeeperDetail } from "./ZookeeperDetail";

function Staff() {
  let zookeepers = useSelector((state: ZookeeperState) => state.zookeepers);
  console.log('zookeepers in state: ', zookeepers);

  return (
    <View style={styles.viewContainer}>
      <Title title="STAFF" />
      <View style={styles.staffView}>
        <FlatList
          data={zookeepers}
          renderItem={({ item }) => (
            <ZookeeperDetail data={item}></ZookeeperDetail>
          )}
          keyExtractor={(item, index) => item.username + index.toString()}
        />
      </View>
    </View>
  );
}

export { Staff };
