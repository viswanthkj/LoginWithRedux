import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Scene, Router, Stack, Actions} from 'react-native-router-flux';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import Login from './Login';
import Dashboard from './Dashboard';
import Profile from './Profile';

const AppRoutes = () => (
  <Router>
    <Stack key="root" hideNavBar>
      <Scene key="login" component={Login} title="Login" hideNavBar />
      <Stack key="mainApp">
        <Scene
          key="dashboard"
          component={Dashboard}
          title="Dashboard"
          renderRightButton={() => (
            <TouchableOpacity
              // eslint-disable-next-line react-native/no-inline-styles
              style={{marginRight: 20}}
              onPress={() => Actions.login()}>
              <AntDesignIcon name="logout" color="#000" size={20} />
            </TouchableOpacity>
          )}
        />
        <Scene key="profile" component={Profile} title="Profile" />
      </Stack>
    </Stack>
  </Router>
);

export default AppRoutes;
