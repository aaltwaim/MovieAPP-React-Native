import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { View, Text, Image } from 'react-native'

export default function Details(props) {
    const [details, setDetails] = useState({})
    let id = props.id
    useEffect(() => {
        movieDetails()

        return () => {

        }
    }, [])
    const movieDetails = () => {
        axios.get(`http://10.0.2.2:8080/movieApp/movie/details?id=${props.id}`)
            .then((response) => {
                console.log("movie details", response.data.poster);
                setDetails(response.data)
            }).catch((err) => {
                console.log("error to get movie details", err);
            })

    };
    return (
        <View>
            <Text>Movie Name {details.name}</Text>
            <Text>Poster </Text>
            <View>
                <Image
                    style={{ width: 100, height: 150 }}
                    source={{ uri: details.poster }} />
            </View>

            <Text>Movie Description {details.movieDescription}</Text>
            <Text>Genres {details.genres}</Text>
        </View>
    )
}
