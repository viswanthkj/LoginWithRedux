import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
  SafeAreaView,
  ScrollView,
  BackHandler,
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import loginImage from './images/download.png';
import {setUserEmail, setUserPassword} from './actions';

class Login extends Component {
  componentDidMount = () => {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
  };

  componentWillUnmount = () => {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
  };

  onBackPress() {
    BackHandler.exitApp();
  }
  loginValidation = () => {
    const {email, password} = this.props;
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const passwordRegex = /^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    if (email && emailRegex.test(email)) {
      if (password && passwordRegex.test(password)) {
        if (email === 'hruday@gmail.com' && password === 'hruday123') {
          Alert.alert('Login Success');
          Actions.mainApp();
        } else {
          Alert.alert('Please enter valid credentials to login');
        }
      } else {
        Alert.alert('Invalid password', password);
      }
    } else {
      Alert.alert('Invalid email', email);
    }
  };

  render() {
    const {email, password} = this.props;
    return (
      <SafeAreaView style={styles.safeArea}>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          contentContainerStyle={[styles.scrollView]}>
          <View style={styles.container}>
            <View style={styles.logoContainer}>
              <Image source={loginImage} style={styles.logo} />
            </View>
            <View style={styles.inputContainer}>
              <AntDesignIcon
                name="user"
                color="#2C6CC3"
                size={30}
                style={styles.inputIcon}
              />
              <TextInput
                style={styles.inputs}
                placeholder="Email"
                keyboardType="email-address"
                underlineColorAndroid="transparent"
                onChangeText={emailChange =>
                  this.props.saveUserEmailAction(emailChange)
                }
                value={email}
              />
            </View>
            <View style={styles.inputContainer}>
              <AntDesignIcon
                name="key"
                color="#2C6CC3"
                size={30}
                style={styles.inputIcon}
              />
              <TextInput
                style={styles.inputs}
                placeholder="Password"
                secureTextEntry={true}
                underlineColorAndroid="transparent"
                onChangeText={passwordChange =>
                  this.props.saveUserPasswordAction(passwordChange)
                }
                value={password}
              />
            </View>
            <TouchableOpacity
              style={[styles.buttonContainer, styles.loginButton]}
              onPress={() => this.loginValidation()}>
              <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

function mapStateToProps(state) {
  return {
    email: state.email,
    password: state.password,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    saveUserEmailAction: email => dispatch(setUserEmail(email)),
    saveUserPasswordAction: password => dispatch(setUserPassword(password)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: '#FFF',
    flexGrow: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 30,
  },
  logo: {
    width: 200,
    height: 200,
  },
  inputContainer: {
    borderBottomColor: '#000',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    borderWidth: 1,
    width: 250,
    height: 45,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: '#FFFFFF',
    flex: 1,
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginLeft: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
  },
  loginButton: {
    backgroundColor: '#2C6CC3',
  },
  loginText: {
    color: '#FFF',
  },
});
