import { colors } from "@/styles/colors";
import { spacing } from "@/styles/spacing";
import { typography } from "@/styles/typography";
import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
        height: 42,
        width: "100%",
        flexDirection: "row",
        backgroundColor: colors.gray[50],
        borderRadius: 8,
        overflow: "hidden"
    },
    option: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        borderRadius: 8,
        gap: spacing.sm
    },
    title: {
        ...typography.transactionButton,
        color: colors.gray[500]
    }
})