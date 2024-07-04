// Filename: index.js
// Combined code from all files

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView, View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';

const stories = [
    { id: '1', title: 'Cinderella' },
    { id: '2', title: 'Hansel and Gretel' },
    { id: '3', title: 'Little Red Riding Hood' },
    { id: '4', title: 'Rapunzel' },
    { id: '5', title: 'Snow White' },
];

const HomeScreen = ({ navigation }) => {
    const renderItem = ({ item }) => (
        <TouchableOpacity 
            style={styles.storyItem} 
            onPress={() => navigation.navigate('Details', { story: item })}
        >
            <Text style={styles.storyTitle}>{item.title}</Text>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={stories}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    );
};

const DetailScreen = ({ route }) => {
    const { story } = route.params;

    return (
        <SafeAreaView style={styles.container}>
            <Image
                source={{ uri: `https://picsum.photos/400/300?random=${story.id}` }}
                style={styles.image}
            />
            <View style={styles.storyDetails}>
                <Text style={styles.storyTitle}>{story.title}</Text>
                <Text style={styles.storyText}>
                    This is a placeholder for the story details of {story.title}. Once upon a time...
                </Text>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: '20px',
        padding: 10,
    },
    storyItem: {
        backgroundColor: '#ffebcd',
        padding: 20,
        borderRadius: 10,
        marginVertical: 10,
    },
    storyTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 10,
        marginBottom: 20,
    },
    storyDetails: {
        backgroundColor: '#fff8dc',
        padding: 20,
        borderRadius: 10,
    },
    storyTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    storyText: {
        fontSize: 16,
    },
});

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen 
                    name="Home" 
                    component={HomeScreen} 
                    options={{ title: 'Fairy Tales' }} 
                />
                <Stack.Screen 
                    name="Details" 
                    component={DetailScreen} 
                    options={{ title: 'Story Details' }} 
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}