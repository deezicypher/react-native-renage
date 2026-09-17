import { formatCurrency, formatSubscriptionDateTime } from '@/libs/utils'
import clsx from 'clsx'
import { Image, Pressable, Text, View } from 'react-native'

const SubCard = ({name, price,currency,icon, billing, color,
    renewalDate, category, plan, onPress, expanded, paymentMethod
}: SubscriptionCardProps) => {
  return (
    <Pressable className={clsx("rounded-2xl p-4 border border-border", expanded? "bg-subscription": "bg-card")}
        style={!expanded && color?{backgroundColor: color}: {}}
        onPress={onPress}
    >
        <View className="flex-row items-center py-2 ">
            <View className="flex-1 min-w-0 flex-row items-center gap-3">
                <Image source={icon} className="size-16 rounded-lg" />
                <View className="min-w-0 flex-1">
                    <Text numberOfLines={1} className="mb-1 font-sans-bold text-lg text-primary">
                        {name}
                        </Text>
                        <Text numberOfLines={1} ellipsizeMode="tail" className="text-sm font-sans-semibold text-muted-foreground">
                            {category?.trim() || plan?.trim() || (renewalDate ? formatSubscriptionDateTime(renewalDate) : '')}
                        </Text>
                </View>
            </View>
            <View className="ml-3 shrink-0 items-end">
                <Text className="mb-1 text-lg font-sans-bold text-primary">
                    {formatCurrency(price, currency)}
                </Text>
                <Text className="text-sm font-sans-medium text-muted-foreground">
                    {billing}
                </Text>
            </View>
        </View>

        {expanded && (
            <View className="mt-6 gap-4">
                <View className="gap-6">
                    <View className="flex-row items-center justify-between gap-3">
                        <Text className="shrink-0 text-base font-sans-medium text-muted-foreground">
                            Payment:
                        </Text>
                        <Text numberOfLines={1} ellipsizeMode="tail" className="flex-1 font-size-bold text-primary">
                            {paymentMethod?.trim()}
                        </Text>
                    </View>
                </View>
            </View>
        ) }
    </Pressable>
  )
}

export default SubCard