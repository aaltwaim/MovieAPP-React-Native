import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'

export default function LatestMovie() {
    const [movie, setMovie] = useState({})
    useEffect(() => {
        latestMovie()
        return () => {

        }
    }, [])

    const latestMovie = () => {
        axios.get("http://10.0.2.2:8080/movieApp/movie/latest") // using 10.0.2.2 instead of localhost
            .then((response) => {
                console.log("res", response.data);
                setMovie(response.data)
            }).catch((err) => {
                console.log("error to get latest movie", err);
            })
    }
    return (
        <View>
            <Text>Movie Component</Text>
            <Text> the name of the movie {movie.title}</Text>

        </View>
    )
}
