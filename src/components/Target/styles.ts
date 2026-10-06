import { StyleSheet } from "react-native";

import { spacing } from "@/styles/spacing";
import { typography } from "@/styles/typography";
import { fontFamily } from "@/styles/fontFamily";
import { colors } from "@/styles/colors";

export const styles = StyleSheet.create({
    conatiner: {
        height: 72,
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        gap: spacing.smd,
        paddingBottom: spacing.md
    },
    content: {
        flex: 1,
        gap: spacing.xs
    },
    name: {
        ...typography.body,
        fontFamily: fontFamily.medium,
        color: colors.gray[950]
    },
    status: {
        ...typography.small,
        color: colors.gray[600]
    }
})