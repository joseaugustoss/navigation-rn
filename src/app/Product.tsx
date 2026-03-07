import { View } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/core";

import { ButtonIcon } from "@/components/ButtonIcon";
import { Header } from "@/components/Header";
import { Title } from "@/components/Title";
import type { BottomRoutesProps } from "@/routes/ButtonRoutes";

export function Product({ navigation, route }: BottomRoutesProps<"product">) {
  const { params } = useRoute();
  return (
    <View style={{ flex: 1, padding: 32, paddingTop: 54 }}>
      <Header>
        <ButtonIcon
          name="arrow-circle-left"
          onPress={() => navigation.goBack()}
        />
        <Title>Product {params?.id}</Title>
      </Header>
    </View>
  );
}
