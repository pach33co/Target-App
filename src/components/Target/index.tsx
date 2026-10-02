import { Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native";

import { styles } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "@/styles/colors";

export type TTargetProps = {
    id?: string
    name: string
    percentage: string
    current: string
    target: string
}

type Props = TouchableOpacityProps & {
    data: TTargetProps
}

export function Target({ data, ...rest }: Props) {
    return (
        <TouchableOpacity style={styles.conatiner} {...rest}>
            <View style={styles.content}>
                <Text style={styles.name} numberOfLines={1}>
                    {data.name}
                </Text>

                <Text style={styles.status}>
                    {data.percentage} • R$ {data.current} de R$ {data.target}
                </Text>
            </View>

            <MaterialIcons name="chevron-right" size={20} color={colors.gray[950]} />
        </TouchableOpacity>
    )
}