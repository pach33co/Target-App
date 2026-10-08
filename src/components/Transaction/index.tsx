import { Text, TouchableOpacity, View } from "react-native";

import { TransactionTypes } from "@/utils/TransactionTypes";
import { styles } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "@/styles/colors";

export type TTransactionProps = {
    id: string
    value: string
    date: string
    description?: string
    type: TransactionTypes
}

type Props = {
    data: TTransactionProps
    onRemove: () => void
}

export function Transaction({ data, onRemove }: Props) {
    return (
        <View style={styles.container}>
            <MaterialIcons
            name={
                data.type === TransactionTypes.Input ? "arrow-upward"
                : "arrow-downward"
            }
            size={20}
            color={
                data.type === TransactionTypes.Input ? colors.green[500]
                : colors.red[400]
            }
            />

            <View style={styles.info}>
                <Text style={styles.value}>{data.value}</Text>
                <Text style={styles.description} numberOfLines={1}>{data.date} {data.description && `• ${data.description}`}</Text>
            </View>

            <TouchableOpacity activeOpacity={0.8} onPress={onRemove}>
                <MaterialIcons name="close" size={16} color={colors.gray[300]}/>
            </TouchableOpacity>
        </View>
    )
}