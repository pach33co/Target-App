import { Alert, View } from "react-native";

import { HomeHeader } from "@/components/HomeHeader";
import { List } from "@/components/List";
import { Target } from "@/components/Target";
import { spacing } from "@/styles/spacing";
import { Button } from "@/components/Button";
import { router, useFocusEffect } from "expo-router";
import { useTargetDatabase } from "@/database/useTargetDatabase";
import { useCallback } from "react";


const summary = {
    total: "R$ 2.680,00",
    input: { label: "Entradas", value: "R$ 6.184,90" },
    output: { label: "Saídas", value: "-R$ 883,65" }
}

const targets = [
    {
        id: "1",
        name: "Apple Watch",
        percentage: "50%",
        current: "580,00",
        target: "1.790,00"
    },
    {
        id: "2",
        name: "Comprar uma cadeira ergonômica",
        percentage: "75%",
        current: "900,00",
        target: "1.200,00"
    },
    {
        id: "3",
        name: "Fazer uma viagem para São Paulo",
        percentage: "35%",
        current: "1.000,00",
        target: "3.000,00"
    },
]

export default function Index() {
    const targetDatabase = useTargetDatabase()
    
    async function fetchTargets() {
        try {
            const response = await targetDatabase.listBySavedValue()
            console.log(response)
        } catch (error) {
            Alert.alert("Erro", "Não foi possível carregar as metas")
            console.log(error)
        }
    }
    
    useFocusEffect(
        useCallback(() => {
            fetchTargets()
        },[])
    )

    return (
        <View style={{ flex: 1 }}>
            <HomeHeader data={summary} />

            <List
                title="Metas"
                data={targets}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <Target data={item} onPress={() => router.navigate(`/in-progress/${item.id}`)}/>}
                emptyMessage="Nenhuma meta. Clique em nova meta para criar"
                containerStyle={{ paddingHorizontal: spacing.lg}}
            />

            <View style={{ padding: spacing.lg, paddingBottom: spacing.xl}}>
                <Button title="Nova meta" onPress={() => router.navigate("/target")}/>
            </View>
        </View>
    )
}