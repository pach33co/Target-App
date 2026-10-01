import { colors } from "@/styles/colors";
import { spacing } from "@/styles/spacing";
import { typography } from "@/styles/typography";
import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
        gap: spacing.xs,

    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        gap: spacing.xs
    },
    label: {
        ...typography.small,
        color: colors.purple[200]
    },
    value: {
        ...typography.subtitle,
        color: colors.gray[0]
    }
})