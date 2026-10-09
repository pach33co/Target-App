import { useLocalSearchParams } from "expo-router";
import { View } from "react-native";


import { CurrencyInput } from "@/components/CurrencyInput";
import { PageHeader } from "@/components/PageHeader";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";

export default function Transaction() {
    const params = useLocalSearchParams<{ id: string }>()

    return (
        <View style={{ flex: 1, padding: 24 }}>
            <PageHeader
                title="Nova transação"
                subtitle="A cada valor guardado, você fica mais próximo da sua meta. Guarde cada vez mais e evite retirar."
            />

            <View style={{ marginTop: 32, gap: 24 }}>
                <CurrencyInput
                    label="Valor (R$)"
                    value={0}
                />

                <Input
                    label="Motivo (opicional)"
                    placeholder="Ex: Investir em CDB de 110% no Banco XPTO"
                />

                <Button
                title="Salvar"
                onPress={() => {}}
                />
            </View>

        </View>
    )
}