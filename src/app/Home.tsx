import { ButtonIcon } from "@/components/ButtonIcon";
import { Header } from "@/components/Header";
import { Title } from "@/components/Title";
import type { BottomRoutesProps } from "@/routes/ButtonRoutes";
import type { DrawerRoutesProps } from "@/routes/DrawerRoutes";
import type { StackRoutesList } from "@/routes/StackRoutes";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View } from "react-native";

type Props = NativeStackScreenProps<StackRoutesList, "home">;
export function Home({ navigation }: DrawerRoutesProps<"home">) {
  return (
    <View style={{ flex: 1, padding: 32, paddingTop: 54 }}>
      <Header>
        <Title>Home</Title>
        <ButtonIcon
          name="add-circle"
          onPress={() => navigation.navigate("product", { id: "123" })}
        />
      </Header>
    </View>
  );
}
