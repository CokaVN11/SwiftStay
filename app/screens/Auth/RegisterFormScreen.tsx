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
import { TextStyle, View, ViewStyle } from "react-native"
import { AppStackScreenProps } from "app/navigators"
import { Header, Icon, Screen, TextField, Text, Toggle, Button } from "app/components"
import { useNavigation, useRoute } from "@react-navigation/native"
import { colors, typography } from "../../theme"

interface RegisterFormScreenProps extends AppStackScreenProps<"RegisterForm"> {
}

export const RegisterFormScreen: FC<RegisterFormScreenProps> = observer(function RegisterFormScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()
  const route = useRoute()
  const navigation = useNavigation()
  const { selectedRole } = route.params as any

  const [username, setUsername] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [confirmPassword, setConfirmPassword] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [firstName, setFirstName] = React.useState("")
  const [lastName, setLastName] = React.useState("")
  const [phone, setPhone] = React.useState("")

  const [hotelName, setHotelName] = React.useState("")
  const [hotelAddress, setHotelAddress] = React.useState("")
  const [hotelDescription, setHotelDescription] = React.useState("")
  const [hotelImage, setHotelImage] = React.useState("")

  const [agreeTerm, setAgreeTerm] = React.useState(false)
  // Pull in navigation via hook

  return (
    <Screen style={$root} preset="scroll">
      {/* <Text text={selectedRole} /> */}
      {/*   Header    */}
      <Header titleTx={"registerScreen.register"}
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

      {selectedRole === "Host" && (
        <>
          {/* Hotel name */}
          <TextField
            labelTx={"registerScreen.hotelName"}
            placeholderTx={"registerScreen.hotelName"}
            inputWrapperStyle={$textFieldWrapper}
            onChangeText={(text) => setHotelName(text)}
            value={hotelName}
            allowFontScaling={false}
          />
          {/* Hotel address section */}
          {/* <TextField */}
          {/*   labelTx={"registerScreen.address"} */}
          {/*   placeholderTx={"registerScreen.address"} */}
          {/*   inputWrapperStyle={$textFieldWrapper} */}
          {/*   onChangeText={(text) => setHotelAddress(text)} */}
          {/*   value={hotelAddress} */}
          {/*   allowFontScaling={false} */}
          {/* /> */}
          <>
          {/* Province */}
          <TextField
            labelTx={"registerScreen.province"}
            placeholderTx={"registerScreen.province"}
            inputWrapperStyle={$textFieldWrapper}
            onChangeText={(text) => setHotelAddress(text)}
            value={hotelAddress}
            allowFontScaling={false}
          />
          {/* City */}
          <TextField
            labelTx={"registerScreen.city"}
            placeholderTx={"registerScreen.city"}
            inputWrapperStyle={$textFieldWrapper}
            onChangeText={(text) => setHotelAddress(text)}
            value={hotelAddress}
            allowFontScaling={false}
          />
          {/* Detail address */}
          <TextField
            labelTx={"registerScreen.address"}
            placeholderTx={"registerScreen.address"}
            inputWrapperStyle={$textFieldWrapper}
            onChangeText={(text) => setHotelAddress(text)}
            value={hotelAddress}
            allowFontScaling={false}
          />
          </>
          {/* Hotel description */}
          <TextField
            labelTx={"registerScreen.hotelDescription"}
            placeholderTx={"registerScreen.hotelDescription"}
            inputWrapperStyle={$descriptionFieldWrapper}
            onChangeText={(text) => setHotelDescription(text)}
            value={hotelDescription}
            allowFontScaling={false}
          />
          {/* Hotel Image Input link */}
          <TextField
            labelTx={"registerScreen.hotelImage"}
            placeholderTx={"registerScreen.hotelImage"}
            inputWrapperStyle={$textFieldWrapper}
            onChangeText={(text) => setHotelImage(text)}
            value={hotelImage}
            allowFontScaling={false}
          />
        </>
      )}

      {/* Register Term */}
      <View style={$termLine}>
        <Toggle
          value={agreeTerm}
          onValueChange={setAgreeTerm}
          checkboxIcon={"check"}
          variant={"checkbox"}
          inputOuterStyle={$outerToggle}
          inputInnerStyle={$innerToggle}
        />
        <View style={$termTextContainer}>
          <Text
            tx={"registerScreen.agreeTerm"}
            style={$agree}
            size={"xs"}
            weight={"light"}
            numberOfLines={2}
          />
          <Button
            tx={"registerScreen.term"}
            textStyle={$term}
            preset={"link"}
            onPress={() => {
              alert("Term")
            }}
          />
        </View>
      </View>

      {/* Register Button */}
      <Button tx={"registerScreen.register"}
              preset={"filled"}
              style={$registerButton}
      />
    </Screen>
  )
})

const $root: ViewStyle = {
  flex: 1,
  paddingHorizontal: 24,
}

const $backButton: ViewStyle = {
  position: "absolute",
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
  borderColor: colors.border,
  marginBottom: 14,
  borderRadius: 12,
}

const $descriptionFieldWrapper: ViewStyle = {
  ...$textFieldWrapper,
  height: 200
}

const $termLine: ViewStyle = {
  flexDirection: "row",
  // alignItems: "flex-start", // vertical
  marginTop: 10,
  alignContent: "space-between", // horizontal
  width: "100%",
}
const $outerToggle: ViewStyle = {
  borderColor: colors.palette.primary300,
  width: 20,
  height: 20,
}

const $innerToggle: ViewStyle = {
  backgroundColor: colors.palette.primary300,
  width: 10,
}

const $termTextContainer: ViewStyle = {
  flexDirection: "row",
  alignContent: "center",
  justifyContent: "center",
  width: "100%",
}

const $agree: TextStyle = {
  color: colors.palette.neutral800,
  textAlign: "center",
}

const $term: TextStyle = {
  color: colors.palette.primary300,
  textAlign: "left",
  width: 200,
  ...typography.size.xs,
  fontWeight: "300",
}

const $registerButton: ViewStyle = {
  marginTop: 14,
  borderRadius: 48,
  height: 48,
  marginBottom: 48
}
