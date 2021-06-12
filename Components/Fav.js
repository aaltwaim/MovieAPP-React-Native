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
    const renderItem = ({ item }) => {
        console.log("inside render", item.name);
    }
    const toggleDetails = (id) => {
        setShowDetails(!showDetails)
        setClickID(id)
    }
    console.log("render", renderItem, fav);
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
