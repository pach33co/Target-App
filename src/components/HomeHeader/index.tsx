import { Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { colors } from "@/styles/colors";
import { styles } from "./styles";
import { Separator } from "../Separator";
import { Summary } from "../Summary";

export type THomeHeaderProps = {
    total: string
}

type Props = {
    data: THomeHeaderProps
}

export function HomeHeader({ data }: Props) {
    return (
        <LinearGradient
            colors={
                [colors.purple[500],
                colors.purple[800]]
            }
            style={styles.container}
        >
            <View>
                <Text style={styles.label}>Total que você possui</Text>
                <Text style={styles.total}>{data.total}</Text>
            </View>

            <Separator color={colors.purple[400]} />

            <View style={styles.summary}>
                <Summary data={{ label: "Entradas", value: "R$ 6.184,90" }}
                    icon={{ name: "arrow-upward", color: colors.green[500] }}
                />

                <Summary data={{ label: "Saídas", value: "-R$ 883,65" }} isLeft={true}
                    icon={{ name: "arrow-downward", color: colors.red[400] }}
                />
            </View>

        </LinearGradient>
    )
}