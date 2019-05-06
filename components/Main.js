import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

class Main extends Component {
    state = { name: '' } // use for tracking update and user input
    onPress = () => {
        this.props.navigation.navigate('Chat', { name: this.state.name });
    }
    onChangeText = name => this.setState({ name }); // update the component with a new string value

    render() {
        return (
            <View>
                {/* Title */}
                <Text style={styles.title}>Enter your name:</Text>

                {/* Input box */}
                <TextInput
                    onChangeText={this.onChangeText}
                    style={styles.nameInput}
                    placeHolder="John Cena"
                    value={this.state.name}    
                />

                {/* Button */}
                <TouchableOpacity onPress={this.onPress}>
                    <Text style={styles.buttonText}>Next</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const offset = 24;
const styles = StyleSheet.create({
    title: {
        marginTop: offset,
        marginLeft: offset,
        fontSize: offset,
    },
    nameInput: {
        height: offset * 2,
        margin: offset,
        paddingHorizontal: offset,
        borderColor: '#111111',
        borderWidth: 1,
    },
    buttonText: {
        marginLeft: offset,
        fontSize: offset,
    },
});

export default Main;