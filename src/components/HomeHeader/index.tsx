import { colors } from "@/styles/colors";
import { LinearGradient } from "expo-linear-gradient";
import { View } from "react-native";
import { styles } from "./styles";


export function HomeHeader() {
    return (
        <LinearGradient colors={[colors.purple[500], colors.purple[800]]} style={styles.container}>

        </LinearGradient>
    )
}