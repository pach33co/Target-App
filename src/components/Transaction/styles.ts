import { StyleSheet } from "react-native";

import { spacing } from "@/styles/spacing";
import { typography } from "@/styles/typography";
import { colors } from "@/styles/colors";

export const styles = StyleSheet.create({
    container: {
        height: 72,
        flexDirection: "row",
        alignItems: "center",
        gap: spacing.smd
    },
    info: {
        flex: 1,
        gap: spacing.xs
    },
    value: {
        ...typography.button,
        color: colors.gray[950]
    },
    description: {
        ...typography.description,
        color: colors.gray[400]
    }
})