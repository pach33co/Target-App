import { colors } from "@/styles/colors";
import { Stack } from "expo-router";

import {
    useFonts,
    Outfit_400Regular,
    Outfit_500Medium,
    Outfit_700Bold
} from "@expo-google-fonts/outfit";

import { Loading } from "@/components/Loading";

export default function Layout() {
    const [fontsLoaded] = useFonts({ Outfit_400Regular, Outfit_500Medium, Outfit_700Bold})

    if(!fontsLoaded) {
        return <Loading />
    }

    return (
        <Stack
            screenOptions={{
                headerShown: false,
                statusBarStyle: "dark",
                contentStyle: {
                    backgroundColor: colors.gray[0]
                }
            }}
        />
    )
}