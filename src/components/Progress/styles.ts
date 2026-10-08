import { StyleSheet } from "react-native";

import { typography } from "@/styles/typography";
import { colors } from "@/styles/colors";
import { spacing } from "@/styles/spacing";

export const styles = StyleSheet.create({
    container: {
        width: "100%"
    },
    label: {
        ...typography.label,
        color: colors.gray[500],
        marginBottom: spacing.xs
    },
    status: {
        width: "100%",
        flexDirection: "row",
        alignItems: "flex-end"
    },
    value: {
        ...typography.smallTitle,
        color: colors.gray[950],
        flex: 1
    },
    target: {
        ...typography.body,
        color: colors.gray[500]
    },
    percentage: {
        ...typography.percentage,
        color: colors.purple[500]
    },
    progress: {
        marginTop: spacing.md,
        width: "100%",
        height: 6,
        borderRadius: 6,
        backgroundColor: colors.gray[100],
        overflow: "hidden"
    },
    currentProgress: {
        height: 6,
        backgroundColor: colors.purple[500]
    }
})