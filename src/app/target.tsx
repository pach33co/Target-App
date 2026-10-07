import { View } from "react-native";

import { PageHeader } from "@/components/PageHeader";

export default function Target() {
    return (
        <View style={{ flex: 1, padding: 24}}>
            <PageHeader 
            title="Meta" 
            subtitle="Economize para alcançar sua meta financeira"
            rightButton={{
                icon: "edit",
                onPress: () => {}
            }}
            />

        </View>
    )
}