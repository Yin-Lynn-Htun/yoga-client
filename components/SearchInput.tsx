import { useState } from 'react'
import { router, usePathname } from 'expo-router'
import { View, TouchableOpacity, Image, TextInput, Alert } from 'react-native'

import { icons } from '../constants'

const SearchInput = ({
  initialQuery,
  placeholder,
  onSearch,
}: {
  initialQuery?: string
  placeholder: string
  onSearch: (query: string) => void
}) => {
  const [query, setQuery] = useState(initialQuery || '')

  return (
    <View className="flex flex-row items-center space-x-4 w-full h-16 px-4 bg-black-100 rounded-2xl border-2 focus:border-secondary">
      <TextInput
        className="text-base mt-0.5 text-white flex-1 font-dregular"
        value={query}
        placeholder={placeholder}
        placeholderTextColor="#CDCDE0"
        onChangeText={(e) => setQuery(e)}
      />

      <TouchableOpacity
        onPress={() => {
          onSearch(query)
        }}
      >
        <Image source={icons.search} className="w-5 h-5" resizeMode="contain" />
      </TouchableOpacity>
    </View>
  )
}

export default SearchInput
