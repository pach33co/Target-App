import { StyleSheet } from "react-native";

import { typography } from "@/styles/typography";
import { colors } from "@/styles/colors";
import { spacing } from "@/styles/spacing";

export const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 324,
        paddingHorizontal: spacing.lg,
        justifyContent: "flex-end",
        paddingBottom: spacing.mlg,
        gap: spacing.lg
    },
    label: {
        ...typography.label,
        color: colors.gray[0]
    },
    total: {
        ...typography.heading,
        color: colors.gray[0]
    }
})