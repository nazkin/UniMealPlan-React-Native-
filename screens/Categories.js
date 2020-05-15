import React from 'react'
import { View, Text, StyleSheet } from 'react-native'


/**
* @author
* @function Categories
**/
const Categories = (props) => {

const { container } = styles
 return(
  <View style={container}>
    <Text>Categories</Text>
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
export default Categories