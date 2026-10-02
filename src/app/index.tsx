import { HomeHeader } from "@/components/HomeHeader";
import { Target } from "@/components/Target";
import { View } from "react-native";



const summary = {
    total: "R$ 2.680,00",
    input: { label: "Entradas", value: "R$ 6.184,90" },
    output: { label: "Saídas", value: "-R$ 883,65" }
}

const targets = [
    {
        name: "Apple Watch",
        percentage: "50%",
        current: "580,00",
        target: "1.790,00"
    },
    {
        name: "Comprar uma cadeira ergonômica",
        percentage: "75%",
        current: "900,00",
        target: "1.200,00"
    },
    {
        name: "Fazer uma viagem para São Paulo",
        percentage: "35%",
        current: "1.000,00",
        target: "3.000,00"
    },
]

export default function Index() {
    return (
        <View style={{ flex: 1 }}>
            <HomeHeader data={summary} />

            <Target
                data={targets[0]}
            />
            <Target
                data={targets[1]}
            />
            <Target
                data={targets[2]}
            />
        </View>
    )
}