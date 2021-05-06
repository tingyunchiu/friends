import React, { Component } from 'react';
import { ActivityIndicator, Text, View, FlatList} from 'react-native';
import Friend from './Friend';

class MyFirends extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: true
    };
  }

  componentDidMount() {
    fetch('https://mocki.io/v1/1faaf470-b1f3-4813-aa80-276e2709e91a')
      .then((response) => response.json())
      .then((json) => {
        this.setState({ data: json });
      })
      .catch((error) => console.error(error))
      .finally(() => {
        this.setState({ isLoading: false });
      });
  }

  render() {
    const { data, isLoading } = this.state;
    return (
          <View style={{ flex: 1, padding: 24}}>
            <Text
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'center',
                textAlign: 'center',
                fontSize: 25,
                fontWeight: "bold"
              }}
            >I have {data.length} friends</Text>
            {isLoading ? <ActivityIndicator/> : (
              <FlatList
                data={data}
                renderItem={({ item }) => (
                  <Friend name={item.name} city= {item.city}/>
                )}
                keyExtractor={item => item.name + item.city}
              />
            )}
          </View>
        )
  }
}

export default MyFirends;