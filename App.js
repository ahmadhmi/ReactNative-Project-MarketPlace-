import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";

export default function App() {
  return (
    <GestureHandlerRootView>
      <ListItem title= "My Title" subtitle="My Subtitle" />
    </GestureHandlerRootView>
  );
}
