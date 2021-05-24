import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    Platform,
    FlatList
} from 'react-native';

import { Button } from '../components/Button';
import { ListCard } from '../components/ListCard';

interface ItemProps {
    id: string;
    name: string;
}

export function Home() {
    const [newItems, setNewItems] = useState('');
    const [myList, setMyList] = useState<ItemProps[]>([])
    const [greeting, setGreenting] = useState('')

    function handleAddItem() {
        const data = {
            id: String(new Date().getTime()),
            name: newItems
        }

        setMyList(oldState => [...oldState, data])
    }

    function handleDeleteItem(id: string) {
        setMyList(oldState => oldState.filter(
            item => item.id !== id    
        ))
    } 

    useEffect(() => {
        const currentHour = new Date().getHours()

        if (currentHour < 12) {
            setGreenting('Good Morning!')
        } else if (currentHour >= 12 && currentHour < 18) {
            setGreenting('Good Afternoon!')
        } else {
            setGreenting('Good Night!')
        }
    }, [])

    return (
        <View style={styles.container}>
            <Text style={styles.greetings}>
                Hello, {greeting}
            </Text>
            <Text style={styles.title}>
                What do you want to buy? 🛒
            </Text>
            
            <TextInput
                style={styles.input}
                placeholder="New item"
                placeholderTextColor="#AEB3B0"
                onChangeText={setNewItems}
            />

            <Button title="Add" onPress={handleAddItem}/>

            <Text style={[styles.title, { marginTop: 50 }]}>
                My List
            </Text>

            <FlatList
                showsVerticalScrollIndicator={false}
                data={myList}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <ListCard list={item.name} onPress={() => handleDeleteItem(item.id)}/>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 20,
        paddingVertical: 70
    },
    title: {
        color: '#52665A',
        fontSize: 24,
        fontWeight: 'bold'
    },
    input: {
        backgroundColor: '#F1F3F2',
        color: '#52665A',
        fontSize: 18,
        padding: Platform.OS == 'ios' ? 15 : 10,
        marginTop: 30,
        borderRadius: 7
    },
    greetings: {
        color: '#52665A',
        fontSize: 16
    }
})