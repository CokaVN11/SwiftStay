// ---
// patches:
// - path: "app/screens/index.ts"
//   append: "export * from \"./RegisterScreen\"\n"
//   skip:
// - path: "app/navigators/AppNavigator.tsx"
//   replace: "// IGNITE_GENERATOR_ANCHOR_APP_STACK_PARAM_LIST"
//   insert: "Register: undefined\n\t// IGNITE_GENERATOR_ANCHOR_APP_STACK_PARAM_LIST"
// - path: "app/navigators/AppNavigator.tsx"
//   replace: "{/* IGNITE_GENERATOR_ANCHOR_APP_STACK_SCREENS */}"
//   insert: "<Stack.Screen name=\"Register\" component={Screens.RegisterScreen} />\n\t\t\t{/* IGNITE_GENERATOR_ANCHOR_APP_STACK_SCREENS */}"
//   skip:
// ---
import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { Dimensions, Image, ImageStyle, TextStyle, View, ViewStyle } from "react-native"
import { AppStackScreenProps } from "app/navigators"
import { Button, Icon, Screen, Text } from "app/components"
import { colors } from "../../theme"
import { useNavigation } from "@react-navigation/native"

// import { useStores } from "app/models"

interface RegisterScreenProps extends AppStackScreenProps<"Register"> {
}

export const RegisterScreen: FC<RegisterScreenProps> = observer(function RegisterScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  const navigation = useNavigation()
  return (
    <Screen style={$root}>
      {/*   Back button   */}
      <Icon
        icon={"back"} onPress={() => {
        navigation.navigate("Login" as never)
      }}
        containerStyle={$backButton}
        size={20}
        color={colors.palette.primary300}
      />

      <Text
        tx={"registerScreen.callout"} size={"lg"}
        style={$callout}
        weight={"bold"}
      />

      {/*   Selection part */}
      <View style={$roleSelection}>
        <Button
          tx={"registerScreen.customer"}
          style={$roleButton}

          RightAccessory=
            {() =>
              (
                <>
                  <View
                    style={$accessory}
                  >
                    <Image
                      source={require("../../../assets/images/client.png")}
                      style={$image}
                    />
                  </View>
                  <Text tx={"registerScreen.customerDesc"}
                        style={$centerText}
                        numberOfLines={3}
                        size={"xxs"}
                        weight={"light"}
                  />
                </>
              )
            }
          onPress={() => { navigation.navigate("RegisterForm" as never, {selectedRole: "Customer"} as never) }}
        />
        <Button
          tx={"registerScreen.host"}
          style={$roleButton}
          RightAccessory={
            () =>
              (
                <>
                  <View
                    style={$accessory}
                  >
                    <Image
                      source={require("../../../assets/images/home.png")}
                      style={$image}
                    />
                  </View>
                  <Text tx={"registerScreen.hostDesc"}
                        style={$centerText}
                        numberOfLines={3}
                        size={"xxs"}
                        weight={"light"}
                  />
                </>
              )
          }
          onPress={() => { navigation.navigate("RegisterForm" as never, {selectedRole: "Host"} as never) }}/>
      </View>

    </Screen>
  )
})

const $root: ViewStyle = {
  flex: 1,
}

const $backButton: ViewStyle = {
  position: "absolute",
  top: 52,
  left: 24,
  width: 32,
  height: 32,
  zIndex: 1,
  borderWidth: 2,
  borderColor: colors.border,
  borderRadius: 8,
  alignItems: "center",
  justifyContent: "center",
}

const $callout: TextStyle = {
  marginTop: Dimensions.get("window").height / 2 - 170,
  marginHorizontal: 24,
  textAlign: "center",
}

const $roleButton: ViewStyle = {
  flexDirection: "column",
  alignItems: "center",
  width: 150,
  height: 230,
  justifyContent: "center",
  paddingVertical: 16,
  paddingHorizontal: 24,
  borderRadius: 16,
  elevation: 10,
}

const $roleSelection: ViewStyle = {
  flexDirection: "row",
  justifyContent: "space-between",
  marginTop: 40,
  marginHorizontal: 24,
}

const $accessory: ViewStyle = {
  borderWidth: 3,
  borderColor: colors.palette.primary300,
  borderRadius: 50,
  margin: 8,
  padding: 12,
}

const $image: ImageStyle = {
  width: 50,
  height: 50,
  resizeMode: "contain",
}

const $centerText: TextStyle= {
  textAlign: "center",
}