import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import ListItem from './src/components/ListItem/Listitem';

export default class PizzaTranslator extends Component {
  state = {
    placeName: '',
    places: []
  };
  placeNameChangedHandler = val => {
    this.setState({
      placeName: val
    });
  };
  placeSubmitHandler = () => {
    if (this.state.placeName.trim() === "") {
      return;
    }

    this.setState(prevState => {
      return {
        places: prevState.places.concat(this.state.placeName)
      }
    });
  };

  render() {
    const placesOutput = this.state.places.map((place, i)  => {
      <Text key={i} >
        {place}
      </Text>
    });
    return (
      <View style={styles.container}>
             <Text>My Application</Text>
        <View style={styles.inputContainer}>
   
        <TextInput
          placeholder=" An Awesome place"
          onChangeText={this.placeNameChangedHandler}
          value={this.state.placeNAme}
          style={styles.placeInput}
        />
        <Button 
          title="Add" 
          style={styles.placeButton}
          onPress={this.placeSubmitHandler}
          />
        </View>
       <View>
         <Text>{placesOutput}</Text>
       </View>
       </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start"
  }, 
  inputContainer: {
    
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  placeInput: {
    width: "70%"
  },
  placeButton: {
    width: "30%"
  }
});