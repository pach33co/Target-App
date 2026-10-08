import { fontFamily } from "./fontFamily";

const sizes = {
    xl: { fontSize: 32, lineHeight: 42 },
    lg: { fontSize: 24, lineHeight: 32 },
    md: { fontSize: 18, lineHeight: 26 },
    sm: { fontSize: 16, lineHeight: 22 },
    base: { fontSize: 14, lineHeight: 20 },
    xs: { fontSize: 12, lineHeight: 16 },
    xxs: { fontSize: 10, lineHeight: 14 },
};

export const typography = {
    // Title
    heading: { ...sizes.xl, fontFamily: fontFamily.medium },
    smallHeading: { ...sizes.lg, fontFamily: fontFamily.bold },
    title: { ...sizes.md, fontFamily: fontFamily.bold },
    titleMedium: { ...sizes.md, fontFamily: fontFamily.medium },
    subtitle: { ...sizes.sm, fontFamily: fontFamily.medium },

    // Body
    body: { ...sizes.base, fontFamily: fontFamily.regular },
    label: { ...sizes.xs, fontFamily: fontFamily.medium },
    description: { ...sizes.xs, fontFamily: fontFamily.regular },
    small: { ...sizes.xxs, fontFamily: fontFamily.regular },

    // Others
    percentage: { ...sizes.base, fontFamily: fontFamily.bold },
    button: { ...sizes.base, fontFamily: fontFamily.medium },
}