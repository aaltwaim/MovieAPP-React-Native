
import React from 'react'
import { View, Text } from 'react-native'
import LatestMovie from './LatestMovie'
import { NativeRouter, Route, Link } from "react-router-native";
import Fav from './Fav';
import AddMovie from './AddMovie';
import Search from './Search';

export default function Home() {

    return (
        <NativeRouter>
            <View>
                <View>
                    <Text>Movie App</Text>
                    <Link to="/search" >
                        <Text>Search</Text>
                    </Link>
                    <Link to="/latest" >
                        <Text>Latest</Text>
                    </Link>
                    <Link to="/fav" >
                        <Text>favourite Movie</Text>
                    </Link>
                    <Link to="/add" >
                        <Text>Add Movie to fravourite</Text>
                    </Link>
                </View>
                <Route path="/search" component={Search} />
                <Route path="/latest" component={LatestMovie} />
                <Route path="/fav" component={Fav} />
                <Route path="/add" component={AddMovie} />


            </View>
        </NativeRouter>
    )
}
