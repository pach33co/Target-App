import { Alert, View } from "react-native";

import { HomeHeader } from "@/components/HomeHeader";
import { List } from "@/components/List";
import { Target, TTargetProps } from "@/components/Target";
import { spacing } from "@/styles/spacing";
import { Button } from "@/components/Button";
import { router, useFocusEffect } from "expo-router";
import { useTargetDatabase } from "@/database/useTargetDatabase";
import { useCallback, useState } from "react";
import { Loading } from "@/components/Loading";
import { numberToCurrency } from "@/utils/numberToCurrency";


const summary = {
    total: "R$ 2.680,00",
    input: { label: "Entradas", value: "R$ 6.184,90" },
    output: { label: "Saídas", value: "-R$ 883,65" }
}


export default function Index() {
    const [isFetching, setIsFetching] = useState(true)
    const [targets, setTargets] = useState<TTargetProps[]>([])

    const targetDatabase = useTargetDatabase()

    async function fetchTargets(): Promise<TTargetProps[]> {
        try {
            const response = await targetDatabase.listBySavedValue()
            console.log(response)

            return response.map((item) => ({
                id: String(item.id),
                name: item.name,
                current: numberToCurrency(item.current),
                percentage: item.percentage.toFixed(0) + "%",
                target: numberToCurrency(item.amount),
            }))

        } catch (error) {
            Alert.alert("Erro", "Não foi possível carregar as metas")
            console.log(error)
        }
    }

    async function fetchData() {
        const targetDataPromise = fetchTargets()

        const [targetData] = await Promise.all([targetDataPromise])

        setTargets(targetData)
        setIsFetching(false)
    }

    useFocusEffect(
        useCallback(() => {
            fetchData()
        }, [])
    )
    
    if(isFetching){
        return <Loading />
    }

    return (
        <View style={{ flex: 1 }}>
            <HomeHeader data={summary} />

            <List
                title="Metas"
                data={targets}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <Target data={item} onPress={() => router.navigate(`/in-progress/${item.id}`)} />}
                emptyMessage="Nenhuma meta. Clique em nova meta para criar"
                containerStyle={{ paddingHorizontal: spacing.lg }}
            />

            <View style={{ padding: spacing.lg, paddingBottom: spacing.xl }}>
                <Button title="Nova meta" onPress={() => router.navigate("/target")} />
            </View>
        </View>
    )
}