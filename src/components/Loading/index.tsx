import { colors } from "@/styles/colors";
import { ActivityIndicator } from "react-native";
import { styles } from "./styles";


export function Loading() {
    return (
        <ActivityIndicator
        color={colors.purple[600]}
        style={styles.container}
        />
    )
}