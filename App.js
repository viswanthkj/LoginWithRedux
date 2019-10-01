/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import AppRoutes from './src/routes';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

const initialState = {
  email: '',
  password: '',
  user: [
    {
      id: 1,
      name: 'test1',
      age: '11',
      gender: 'male',
      email: 'test1@gmail.com',
      phoneNo: '9415346313',
      avatar_url: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
    {
      id: 2,
      name: 'test2',
      age: '12',
      gender: 'male',
      email: 'test2@gmail.com',
      phoneNo: '9415346314',
      avatar_url: 'https://randomuser.me/api/portraits/men/43.jpg',
    },
    {
      id: 3,
      name: 'test3',
      age: '13',
      gender: 'male',
      email: 'test3@gmail.com',
      phoneNo: '9415346315',
      avatar_url: 'https://randomuser.me/api/portraits/men/46.jpg',
    },
    {
      id: 4,
      name: 'test4',
      age: '14',
      gender: 'male',
      email: 'test4@gmail.com',
      phoneNo: '9415346316',
      avatar_url:
        'https://tinyfac.es/data/avatars/7D3FA6C0-83C8-4834-B432-6C65ED4FD4C3-500w.jpeg',
    },
    {
      id: 5,
      name: 'test5',
      age: '15',
      gender: 'male',
      email: 'test5@gmail.com',
      phoneNo: '9415346317',
      avatar_url:
        'https://pbs.twimg.com/profile_images/1055263632861343745/vIqzOHXj.jpg',
    },
    {
      id: 6,
      name: 'test6',
      age: '16',
      gender: 'male',
      email: 'test6@gmail.com',
      phoneNo: '9415346318',
      avatar_url:
        'https://pbs.twimg.com/profile_images/974603248119222272/N5PLzyan.jpg',
    },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER_EMAIL':
      return {
        ...state,
        email: action.email,
      };
    case 'SET_USER_PASSWORD':
      return {
        ...state,
        password: action.password,
      };
  }
  return state;
};

const store = createStore(reducer);

export default function App() {
  return (
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  );
}
