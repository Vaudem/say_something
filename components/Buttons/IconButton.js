import React, { Component } from 'react';
import {
    Text,
    TouchableOpacity,
    View,
    Image
} from 'react-native';
// import Icon from "react-native-vector-icons/FontAwesome";
// import ElevatedView from "react-native-elevated-view";

import { styles } from "./styles";

export default class IconButton extends Component {
    constructor(props)
    {
        super(props);
    }

    render() {
        return (
            <TouchableOpacity onPress={() => { this.props.action() }}>
                {/* <ElevatedView style={styles.button} elevation={7}> */}
                    <View>
                        <Image
                        name={this.props.icon}
                        style={styles.icon}
                        source={require('../../assets/white-icon.png')}
                        />
                        {/* <Text name={this.props.icon}>coucou</Text> */}
                    </View>
                {/* </ElevatedView> */}
            </TouchableOpacity>
        );
    }
}

