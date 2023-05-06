//important Dependencies
import React from 'react'
import { View } from 'react-native'

//Navigation Dependencies
import { NavigationContainer } from '@react-navigation/native'
import Tabs from "./navigation/tabs"


const App = () => {
  return (
      <NavigationContainer>
        <Tabs />
      </NavigationContainer>    
  )
}

export default App
