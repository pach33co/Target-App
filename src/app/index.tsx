import { HomeHeader } from "@/components/HomeHeader";
import { styles } from "@/components/Loading/styles";
import { typography } from "@/styles/typography";
import { router } from "expo-router";
import { Button, Text, View } from "react-native";


export default function Index() {
    return (
        <View style={{ flex: 1 }}>
            <HomeHeader  style={styles.total} data={{ total: "R$ 2.680,00"}}/>
        </View>
    )
}