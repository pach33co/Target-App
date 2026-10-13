import { colors } from "@/styles/colors";
import { Stack } from "expo-router";

import {
    useFonts,
    Outfit_400Regular,
    Outfit_500Medium,
    Outfit_700Bold
} from "@expo-google-fonts/outfit";

import { Loading } from "@/components/Loading";
import { SQLiteProvider } from "expo-sqlite";
import { migrate } from "@/database/migrate";
import { Suspense } from "react";

export default function Layout() {
    const [fontsLoaded] = useFonts({ Outfit_400Regular, Outfit_500Medium, Outfit_700Bold })

    if (!fontsLoaded) {
        return <Loading />
    }

    return (
        <Suspense fallback={<Loading />}>
            <SQLiteProvider
                databaseName="target.db"
                onInit={migrate}
                useSuspense={true}
            >
                <Stack
                    screenOptions={{
                        headerShown: false,
                        statusBarStyle: "auto",
                        contentStyle: {
                            backgroundColor: colors.gray[0]
                        }
                    }}
                />
            </SQLiteProvider>
        </Suspense>
    )
}