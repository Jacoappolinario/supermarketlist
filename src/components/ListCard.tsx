import React from 'react';
import {
    TouchableOpacity,
    TouchableOpacityProps,
    Text,
    StyleSheet
} from 'react-native';

interface ListCardProps extends TouchableOpacityProps {
    list: string
}

export function ListCard({ list, ...rest } : ListCardProps) {
    return (
        <TouchableOpacity 
            style={styles.buttonList}
            {...rest}
        >
            <Text style={styles.textList}>
                {list}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonList: {
        backgroundColor: '#F1F3F2',
        padding: 15,
        borderRadius: 50,
        alignItems: 'center',
        marginVertical: 10
    },
    textList: {
        color: '#52665A',
        fontSize: 22,
        fontWeight: 'bold'
    }
})