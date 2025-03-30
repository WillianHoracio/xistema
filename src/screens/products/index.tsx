import { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native'
import { NewCell } from '../../components/NewCell'



export function Products(){

    const [modalNewState, setModalNewState] = useState(false);

    const handleNew = () => {
        setModalNewState(true);
    }

    return(
        <View>
            <NewCell width='40%' height='150px' handleClick={handleNew}/>
        </View>
    )
}
