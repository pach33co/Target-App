import { StyleSheet } from "react-native";

import { spacing } from "@/styles/spacing";
import { colors } from "@/styles/colors";
import { typography } from "@/styles/typography";

export const styles = StyleSheet.create({
    container: {
        width: "100%",
        gap: spacing.sm
    },
    label: {
        ...typography.label,
        color: colors.gray[500]
    },
    input: {
        ...typography.subtitle,
        color: colors.gray[950],
        paddingBottom: spacing.smd,
        borderBottomWidth: 1,
        borderBottomColor: colors.gray[200]
    }
})