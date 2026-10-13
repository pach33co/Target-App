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
        ...typography.description,
        color: colors.gray[0]
    },
    value: {
        ...typography.subtitle,
        color: colors.gray[0]
    }
})