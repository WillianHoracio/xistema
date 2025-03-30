import { useState } from 'react';
import { View, Text } from 'react-native'
import { NewCell } from '../../components/NewCell'

export function Products(){


    const [modalNewState, setModalNewState] = useState(false);

    const handleNew = () => {
        setModalNewState(true);
    }

    return(
        <View>
            <Text> Em construção</Text>
            <NewCell width='40%' height='150px' handleClick={handleNew}/>
        </View>
    )
}
