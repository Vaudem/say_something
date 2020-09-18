import React, { Component } from 'react';
import {
    Text,
    View,
    ActivityIndicator,
} from 'react-native';

import IconButton from "../../components/Buttons/IconButton";
import { styles } from "./styles";

export default class MainScreen extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            quote : null,
            author : null,
        };
    }

    componentDidMount()
    {
        this.getQuote();
    }

    getQuote()
    {
        fetch("https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json", {
            method: 'GET',
        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
                this.setState({
                    quote : responseJson.quoteText,
                    author : responseJson.quoteAuthor,
                });
            })
            .catch((error) => { console.log(error); });
    }

    render() {
        if(this.state.quote === null || this.state.author === null)
        {
            return (
                // <View style={styles.container}>
                <View>
                    <ActivityIndicator color="#ffffff" size="large" />
                    <IconButton icon="refresh" action={this.getQuote.bind(this)}/>
                </View>
            );
        }
        else
        {
            return (
                <View style={styles.container}>
                {/* <View> */}
                    <Text style={styles.quote}>
                    {/* <Text> */}
                        { this.state.quote }
                    </Text>
                    <Text style={styles.author}>
                    {/* <Text> */}
                        { this.state.author }
                    </Text>
                    <IconButton icon="refresh" action={this.getQuote.bind(this)}/>
                </View>
            );
        }
    }
}

