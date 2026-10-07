import { StyleSheet } from "react-native";

import { spacing } from "@/styles/spacing";
import { typography } from "@/styles/typography";
import { colors } from "@/styles/colors";

export const styles = StyleSheet.create({
    container: {
        width: "100%",
        paddingTop: spacing.xl,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: spacing.xl
    },
    title: {
        ...typography.smallHeading,
        color: colors.gray[950],
    },
    subtitle: {
        ...typography.body,
        color: colors.gray[500]
    }
})