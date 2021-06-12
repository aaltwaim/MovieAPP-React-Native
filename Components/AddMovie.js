import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { View, Text, TextInput, StyleSheet, Button } from 'react-native'

export default function AddMovie() {
    const [id, setId] = useState("")
    const [message, setMessage] = useState(false)
    useEffect(() => {
        console.log("add", id)
        return () => {

        }
    }, [])
    const addMovie = (id) => {
        axios.post(`http://10.0.2.2:8080/movieApp/movie/add?movieId=${id}`)
            .then((response) => {
                console.log("post movie", response.data);
                setMessage(true);

            }).catch((err) => {
                console.log("error to adding movie", err);
            })

    }

    return (
        <View>
            <Text>ADD </Text>
            <TextInput
                style={styles.input}
                onChangeText={setId}
                value={id}
                keyboardType='numeric'
                placeholder="Enter the Movie ID"
            />
            <Button
                onPress={() => addMovie(id)}
                title="Add it"
            />
            {message ? <View>
                <Text>The movie was added successfully</Text>
            </View> : null}
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