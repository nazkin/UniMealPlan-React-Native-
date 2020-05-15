import React from 'react'
import { View, Text, StyleSheet } from 'react-native'


/**
* @author
* @function FilterSettings
**/
const FilterSettings = (props) => {

const { container } = styles
 return(
  <View style={container}>
    <Text>FilterSettings</Text>
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
export default FilterSettings