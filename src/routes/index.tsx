import { NavigationContainer } from "@react-navigation/native";
import { StackRoutes } from "./StackRoutes";
import { BottomRoutes } from "./ButtonRoutes";

export function Routes() {
  return (
    <NavigationContainer>
      <BottomRoutes />
    </NavigationContainer>
  );
}
