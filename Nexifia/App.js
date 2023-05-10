//important Dependencies
import React from 'react'
import { View } from 'react-native'

//Navigation Dependencies
import { NavigationContainer } from '@react-navigation/native'
import Tabs from "./navigation/tabs"

//Landing page
import Landingpage from './ExternalScreens/Landingpage'


const App = () => {
  return (
      // <NavigationContainer>
      //   <Tabs />
      // </NavigationContainer>
      <Landingpage />    
  )
}

export default App
