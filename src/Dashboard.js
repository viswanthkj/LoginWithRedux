/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {StyleSheet, SafeAreaView, FlatList, BackHandler} from 'react-native';
import {ListItem} from 'react-native-elements';
import {connect} from 'react-redux';
import {Actions} from 'react-native-router-flux';

class Dashboard extends Component {
  componentDidMount = () => {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
  };

  componentWillUnmount = () => {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
  };

  onBackPress() {
    BackHandler.exitApp();
  }
  renderItem = ({item}) => {
    return (
      <ListItem
        title={item.name}
        subtitle={item.email}
        containerStyle={styles.item}
        leftAvatar={{source: {uri: item.avatar_url}}}
        chevron
        onPress={() =>
          Actions.profile({
            item,
          })
        }
      />
    );
  };

  render() {
    const {user} = this.props;
    return (
      <SafeAreaView style={{backgroundColor: '#FFF'}}>
        <FlatList
          data={user}
          renderItem={this.renderItem}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#FFF',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderWidth: 1,
    borderColor: '#ddd',
    elevation: 1,
    borderRadius: 5,
  },
  title: {
    fontSize: 32,
  },
});

function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    // saveUserEmailAction: email => dispatch(setUserEmail(email)),
    // saveUserPasswordAction: password => dispatch(setUserPassword(password)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dashboard);
