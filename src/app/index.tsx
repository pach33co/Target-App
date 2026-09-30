import { router } from "expo-router";
import { Button, Text, View } from "react-native";


export default function Index() {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", gap: 16 }}>
            <Text>Index do Projeto</Text>

            <Button
                title="Nova Meta"
                onPress={() => router.navigate("/target")}
            />

            <Button
                title="Transação"
                onPress={() => router.navigate("/transaction/1234")}
            />
        </View>
    )
}