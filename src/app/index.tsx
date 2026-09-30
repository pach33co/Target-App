import { typography } from "@/styles/typography";
import { router } from "expo-router";
import { Button, Text, View } from "react-native";


export default function Index() {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", gap: 16 }}>
            <Text style={typography.title}>Index do Projeto</Text>

            <Button
                title="Nova Meta"
                onPress={() => router.navigate("/target")}
            />

            <Button
                title="Transação"
                onPress={() => router.navigate("/transaction/1234")}
            />

            <Button
                title="Progresso"
                onPress={() => router.navigate("/in-progress/5678")}
            />
        </View>
    )
}