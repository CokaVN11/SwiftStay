// ---
// patches:
// - path: "app/screens/index.ts"
//   append: "export * from \"./RegisterFormScreen\"\n"
//   skip:
// - path: "app/navigators/AppNavigator.tsx"
//   replace: "// IGNITE_GENERATOR_ANCHOR_APP_STACK_PARAM_LIST"
//   insert: "RegisterForm: undefined\n\t// IGNITE_GENERATOR_ANCHOR_APP_STACK_PARAM_LIST"
// - path: "app/navigators/AppNavigator.tsx"
//   replace: "{/* IGNITE_GENERATOR_ANCHOR_APP_STACK_SCREENS */}"
//   insert: "<Stack.Screen name=\"RegisterForm\" component={Screens.RegisterFormScreen} />\n\t\t\t{/* IGNITE_GENERATOR_ANCHOR_APP_STACK_SCREENS */}"
//   skip:
// ---
import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { View, ViewStyle } from "react-native"
import { AppStackScreenProps } from "app/navigators"
import { Header, Icon, Screen, TextField, Text, Toggle } from "app/components"
import { useNavigation, useRoute } from "@react-navigation/native"
import { colors } from "../../theme"

interface RegisterFormScreenProps extends AppStackScreenProps<"RegisterForm"> {
}

export const RegisterFormScreen: FC<RegisterFormScreenProps> = observer(function RegisterFormScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()
  const [username, setUsername] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [confirmPassword, setConfirmPassword] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [firstName, setFirstName] = React.useState("")
  const [lastName, setLastName] = React.useState("")
  const [phone, setPhone] = React.useState("")


  const [agreeTerm, setAgreeTerm] = React.useState(false)
  // Pull in navigation via hook
  const navigation = useNavigation()
  const route = useRoute()
  const { selectedRole } = route.params as any
  return (
    <Screen style={$root} preset="scroll">
      {/* <Text text={selectedRole} /> */}
      {/*   Header    */}
      <Header titleTx={"registerScreen.register"} style={{
        marginTop: 32,
      }}
              LeftActionComponent={
                <Icon icon={"back"} onPress={() => {
                  navigation.goBack()
                }}
                      containerStyle={$backButton}
                      size={20}
                      color={colors.palette.primary300}
                />
              }
      />

      {/*   Register Input    */}
      {/*   username  */}
      <TextField
        labelTx={"registerScreen.username"}
        placeholderTx={"registerScreen.username"}
        inputWrapperStyle={$textFieldWrapper}
        onChangeText={(text) => setUsername(text)}
        value={username}
        allowFontScaling={false}
        autoCapitalize={"none"}
      />
      {/*   password  */}
      <TextField
        labelTx={"registerScreen.password"}
        placeholderTx={"registerScreen.password"}
        inputWrapperStyle={$textFieldWrapper}
        onChangeText={(text) => setPassword(text)}
        value={password}
        allowFontScaling={false}
        autoCapitalize={"none"}
        secureTextEntry={true}
      />
      {/*   confirm password  */}
      <TextField
        labelTx={"registerScreen.confirmPassword"}
        placeholderTx={"registerScreen.confirmPassword"}
        inputWrapperStyle={$textFieldWrapper}
        onChangeText={(text) => setConfirmPassword(text)}
        value={confirmPassword}
        allowFontScaling={false}
        autoCapitalize={"none"}
        secureTextEntry={true}
      />
      {/*   email  */}
      <TextField
        labelTx={"registerScreen.email"}
        placeholderTx={"registerScreen.email"}
        inputWrapperStyle={$textFieldWrapper}
        onChangeText={(text) => setEmail(text)}
        value={email}
        allowFontScaling={false}
        autoCapitalize={"none"}
        keyboardType={"email-address"}
      />
      <View style={{
        flexDirection: "row",
        gap: 10,
      }}>
        <TextField
          labelTx={"registerScreen.firstName"}
          placeholderTx={"registerScreen.firstName"}
          containerStyle={$textFieldContainer}
          inputWrapperStyle={$textFieldWrapper}
          style={{
            width: "100%",
          }}
          onChangeText={(text) => setFirstName(text)}
          value={firstName}
          allowFontScaling={false}
        />
        <TextField
          labelTx={"registerScreen.lastName"}
          placeholderTx={"registerScreen.lastName"}
          containerStyle={$textFieldContainer}
          inputWrapperStyle={$textFieldWrapper}
          style={{
            width: "100%",
          }}
          onChangeText={(text) => setLastName(text)}
          value={lastName}
          allowFontScaling={false}
        />
      </View>
      {/*   phone  */}
      <TextField
        labelTx={"registerScreen.phone"}
        placeholderTx={"registerScreen.phone"}
        inputWrapperStyle={$textFieldWrapper}
        onChangeText={(text) => setPhone(text)}
        value={phone}
        allowFontScaling={false}
        keyboardType={"phone-pad"}
      />

      {/* Register Term */}
      <View style={{
        flexDirection: "row",
        alignItems: "center",
        marginTop: 10,
      }}>
        <Toggle value={agreeTerm}
                onValueChange={(value) => {
                  console.log(`agreeTerm: ${value}`)
                  setAgreeTerm(value)
                }}
                checkboxIcon={"check"}
                variant={"checkbox"}
                inputWrapperStyle={{
                  borderColor: colors.palette.primary300,
                }}
        />
        <Text
          tx={"registerScreen.term"}
          style={{
            color: colors.palette.primary300,
            flexWrap: "wrap",
          }}
          size={"xs"}

        />
      </View>
    </Screen>
  )
})

const $root: ViewStyle = {
  flex: 1,
  paddingHorizontal: 24,
}

const $backButton: ViewStyle = {
  // position: "absolute",
  // top: 52,
  width: 32,
  height: 32,
  zIndex: 1,
  borderWidth: 2,
  borderColor: colors.border,
  borderRadius: 8,
  alignItems: "center",
  justifyContent: "center",
}

const $textFieldContainer: ViewStyle = {
  flex: 1,
  justifyContent: "space-between",
  width: "100%",
}

const $textFieldWrapper: ViewStyle = {
  borderColor: colors.palette.primary300,
  marginBottom: 14,
  borderRadius: 12,
}