/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {SafeAreaView, Text, View, Image} from 'react-native';

export default class Profile extends Component {
  render() {
    const {item} = this.props;
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#FFF'}}>
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-start',
            alignItems: 'center',
            flexDirection: 'column',
            paddingTop: 20,
          }}>
          <Image
            source={{uri: item.avatar_url}}
            style={{height: 200, width: 200, borderRadius: 100}}
          />
          <Text style={{fontSize: 20, color: '#000', marginTop: 10}}>
            {item.name}
          </Text>
          <Text style={{fontSize: 18, color: '#000', marginTop: 10}}>
            {item.email}
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 18, color: '#000', marginTop: 10}}>
              {`${item.age},`}
            </Text>
            <Text
              style={{
                fontSize: 18,
                color: '#000',
                marginTop: 10,
                paddingLeft: 2,
              }}>
              {item.gender}
            </Text>
          </View>
          <Text style={{fontSize: 18, color: '#000', marginTop: 10}}>
            {item.phoneNo}
          </Text>
        </View>
      </SafeAreaView>
    );
  }
}
