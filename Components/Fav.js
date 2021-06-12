import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, Button } from 'react-native'
import Details from './Details'

export default function Fav() {
    const [fav, setFav] = useState([])
    const [showDetails, setShowDetails] = useState(false)
    const [clickedID, setClickID] = useState("")
    // let info = null;
    useEffect(() => {
        // setTimeout(() => {
        //     favMovie()

        // }, 2000);
        favMovie()
        return () => {
        }
    }, [])
    const favMovie = () => {
        axios.get("http://10.0.2.2:8080/movieApp/movie/fav") // using 10.0.2.2 instead of localhost
            .then((response) => {
                console.log("fav res", response.data);
                setFav(response.data)
            }).catch((err) => {
                console.log("error to get favourite movie", err);
            })
    }
    const toggleDetails = (id) => {
        setShowDetails(!showDetails)
        setClickID(id)
    }
    const removeMovie = (id) => {
        axios.get(`http://10.0.2.2:8080/movieApp/movie/remove?id=${id}`)
            .then((response) => {
                const favList = [...fav];
                const index = favList.findIndex(fav => fav.id === id);
                if (index !== -1) {
                    favList.splice(index, 1);
                    setFav(favList);
                }
                console.log("fav res", response);
            }).catch((err) => {
                console.log("error removing the movie", err);
            })
    }
    //We can either use the id to call the api details of just get the info for the fav api
    return (
        <View>
            <Text>Fav Component</Text>
            <FlatList
                data={fav}
                renderItem={({ item }) => <View>
                    <Text key={item.id}>{item.name}</Text>

                    <Button
                        onPress={() => toggleDetails(item.id)}
                        title="Details"
                    />
                    <Button
                        onPress={() => removeMovie(item.id)}
                        title="Remove"
                    />
                    {showDetails && clickedID === item.id ? <Details id={item.id} /> : null}

                    {/* <Text>{item.id}</Text>
                    <Text>{item.poster}</Text>
                    <Text>{item.movieDescription}</Text>
                    <Text>{item.genres}</Text> */}
                </View>}

            />
        </View>
    )
}
