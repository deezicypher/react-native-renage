import { formatCurrency } from '@/libs/utils'
import { Image, Text, View } from 'react-native'

const UpcomingSubCard = ({name,price, daysLeft, icon,currency}:  UpcomingSubscription) => {
  return (
    <View className="mr-4 w-44 border rounded-2xl border-black/10 p-4 bg-background">
      <View className="flex-row items-center gap-3">
        <Image source={icon} className="size-14" />
        <View>
          <Text className="text-lg font-sans-bold text-primary">
            {formatCurrency(price, currency)}
          </Text>
          <Text className="text-sm font-sans-semibold text-muted-foreground">
            {daysLeft > 1 ? `${daysLeft} days left` : 'Last day'}
          </Text>
        </View>
      </View>
      <Text className="mt-2 text-lg font-sans-bold text-primary">{name}</Text>
    </View>
  )
}

export default UpcomingSubCard