import axios from 'axios'
import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, Button, FlatList } from 'react-native'

export default function Search() {
    const [search, setSearch] = useState("")
    const [result, setResult] = useState([])
    const searchMovie = (search) => {
        axios.get(`http://10.0.2.2:8080/movieApp/movie/search?freeText=${search}`)
            .then((response) => {
                console.log("search movie", response.data.results);
                setResult(response.data.results);

            }).catch((err) => {
                console.log("error in searching", err);
            })
    }
    return (

        <View>
            <Text>Search</Text>
            <TextInput
                style={styles.input}
                onChangeText={setSearch}
                value={search}
                placeholder="Search movie"
            />
            <Button
                onPress={() => searchMovie(search)}
                title="Search"
            />
            <View>
                <FlatList
                    data={result}
                    renderItem={({ item }) => <View key={item.id}>
                        <Text>Movie Title: {item.title}</Text>
                        <Text>Overview: {item.overview}</Text>
                    </View>}
                />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
    },
});
