import { StyleSheet } from "react-native";

import { colors } from "@/styles/colors";
import { typography } from "@/styles/typography";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.purple[600],
        height: 48,
        width: "100%",
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center"
    },
    title: {
        ...typography.button,
        color: colors.gray[0]
    }
})