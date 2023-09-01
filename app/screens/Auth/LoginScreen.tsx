// ---
// patches:
// - path: "app/screens/index.ts"
//   append: "export * from \"./LoginScreen\"\n"
//   skip:
// - path: "app/navigators/AppNavigator.tsx"
//   replace: "// IGNITE_GENERATOR_ANCHOR_APP_STACK_PARAM_LIST"
//   insert: "Login: undefined\n\t// IGNITE_GENERATOR_ANCHOR_APP_STACK_PARAM_LIST"
// - path: "app/navigators/AppNavigator.tsx"
//   replace: "{/* IGNITE_GENERATOR_ANCHOR_APP_STACK_SCREENS */}"
//   insert: "<Stack.Screen name=\"Login\" component={Screens.LoginScreen} />\n\t\t\t{/* IGNITE_GENERATOR_ANCHOR_APP_STACK_SCREENS */}"
//   skip:
// ---
import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { general } from "app/styles"
import { AppStackScreenProps } from "app/navigators"
import { colors } from "app/theme"
import { ImageStyle, View, ViewStyle } from "react-native"
import { Button, Icon, Screen, Text, TextField } from "../../components"
import { typography } from "../../theme"
import { useNavigation } from "@react-navigation/native"

// import { useStores } from "app/models"

interface LoginScreenProps extends AppStackScreenProps<"Login"> {
}

export const LoginScreen: FC<LoginScreenProps> = observer(function LoginScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()
  const [username, setUsername] = React.useState("")
  const [password, setPassword] = React.useState("")

  const loginHandler = () => {
    if (username === "admin" && password === "admin") {
      alert("Login Success")
    }
  }

  // Pull in navigation via hook
  const navigation = useNavigation()
  return <Screen style={general.page_container}>
    {/*   App Logo   */}
    <Icon icon="heart" color={colors.palette.primary300} size={100} style={$icon} />
    {/*   Input form   */}
    <TextField
      labelTx={"loginScreen.username"}
      placeholderTx={"loginScreen.username"}
      inputWrapperStyle={$textFieldWrapper}
      onChangeText={(text) => setUsername(text)}
      value={username}
      allowFontScaling={false}
      autoCapitalize={"none"}

    />
    <TextField
      labelTx={"loginScreen.password"}
      placeholderTx={"loginScreen.password"}
      inputWrapperStyle={$textFieldWrapper}
      onChangeText={(text) => setPassword(text)}
      value={password}
      allowFontScaling={false}
      autoCapitalize={"none"}
      secureTextEntry={true}
    />

    {/*   Forget password */}
    <Button
      tx="loginScreen.forgotPassword"
      onPress={() => {
        alert("Forgot password")
      }} preset={"link"}
      style={{
        marginBottom: 10,
        alignSelf: "flex-end",
      }}
      textStyle={{
          textAlign: "right",
          alignSelf: "flex-end",
        }}
    />

    {/*   Login button   */}
    <Button text={"Login"} onPress={loginHandler} preset="filled" style={{
      borderRadius: 48,
    }} />
    {/* Login as guest */}
    <Button
      tx={"loginScreen.loginAsGuest"} preset={"link"}
      style={{
        marginTop: 52,
        marginBottom: 14,
        justifyContent: "center",
        alignItems: "center",
        width: "100%"
      }}
      RightAccessory={() => (
        <Icon icon={"caretRight"} size={20} color={colors.palette.primary300} />
      )}
    />
    {/*   Divider */}
    <View style={$divider}></View>
    {/*   Register field */}
    <View style={
      {
        flexDirection: "row",
        justifyContent: "center",
      }
    }>
      <Text tx={"loginScreen.noAccount"} size={"xs"} />
      <Button tx={"loginScreen.createAccount"} preset={"link"} textStyle={
        [
          typography.size.xs,
          {
            textDecorationLine: "underline",
          },
        ]
      }
              onPress={() => {
                navigation.navigate("Register" as never)
              }}
      />
    </View>
  </Screen>
})
const $icon: ImageStyle = {
  alignSelf: "center",
  marginTop: 200,
}

const $textFieldWrapper: ViewStyle = {
  borderColor: colors.border,
  marginBottom: 14,
  borderRadius: 12
}

const $divider: ViewStyle = {
  height: 2,
  alignItems: "center",
  marginVertical: 10,
  backgroundColor: "#DEDEDE",
}