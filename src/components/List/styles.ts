import { StyleSheet } from "react-native";

import { colors } from "@/styles/colors";
import { spacing } from "@/styles/spacing";
import { typography } from "@/styles/typography";

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    listContent: {
        gap: spacing.md,
        paddingTop: spacing.md,
        paddingBottom: spacing.xxxl
    },
    title: {
        ...typography.titleMedium,
        color: colors.gray[950],
        marginTop: spacing.lg,
        paddingBottom: spacing.md,
        borderBottomWidth: 1,
        borderBottomColor: colors.gray[100]
    },
    empty: {
        ...typography.body,
        color: colors.gray[600]
    }
})