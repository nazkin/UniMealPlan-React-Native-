import React from 'react'
import { View, Text, StyleSheet } from 'react-native'


/**
* @author
* @function Favorites
**/
const Favorites = (props) => {

const { container } = styles
 return(
  <View style={container}>
    <Text>Favorites</Text>
  </View>
  )
}


const styles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center',
  }
})
export default Favorites