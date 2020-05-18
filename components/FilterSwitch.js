import React, {useState} from 'react'
import { View, Text, StyleSheet, Switch } from 'react-native'
import Colors from '../constants/colors';

/**
* @author
* @function SwitchFilter
**/
const SwitchFilter = (props) => {

const [isFiltered, setIsFiltered] = useState(false);
 return(
    <View style={styles.filterContainer}>
      <Text style={styles.filterName}>{props.name}</Text>
      <Switch
       value={props.current}
       onValueChange={()=> props.setFilter()} 
       trackColor={{true: Colors.accentColor}}
       thumbColor={Colors.primaryColor}
      />
    </View>
  )
}


const styles = StyleSheet.create({
    filterContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
        marginVertical: 30
      },
      filterName:{
        fontFamily: 'open-sans',
        fontSize: 20,
    
      }
})
export default SwitchFilter