import { StyleSheet } from "react-native";

const homeStyles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor:"gray"
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "cover",
    borderRadius: 100,
    borderWidth: 4,
    borderColor: "yellow"
  }
}); 


export default homeStyles;