import { StyleSheet, Text, TextInput, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";

function Input({ label, textInputConfig, style, invalid }) {
  const inputStyles = [
    styles.input,
    textInputConfig && textInputConfig.multiline ? styles.inputMultiline : null,
    invalid && styles.invalidText
  ];
  return (
    <View style={[styles.inputContainer, style]}>
      <Text style={[styles.label,invalid && styles.invalidLabel]}>{label}</Text>
      <TextInput {...textInputConfig} style={inputStyles} />
    </View>
  );
}
export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 4,
    marginVertical: 8,
  },
  label: {
    fontSize: 14,
    color: GlobalStyles.colors.primary100,
    marginBottom: 4,
  },
  input: {
    backgroundColor: GlobalStyles.colors.primary100,
    padding: 6,
    borderRadius: 6,
    fontSize: 18,
    color: GlobalStyles.colors.primary700,
  },
  inputMultiline: {
    minHeight: 100,
    textAlignVertical: "top",
  },
  invalidLabel:{
    color:GlobalStyles.colors.error500
  },
  invalidText:{
    backgroundColor:GlobalStyles.colors.error50
  }
});
