import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  Pressable,
} from 'react-native';
import Field from '../components/auth/Field';
import ConfirmButton from '../components/auth/ConfirmButton';
import Redirect from '../components/auth/Redirect';
import {useNavigation} from '@react-navigation/native';
import AuthHeader from '../components/auth/AuthHeader';

const Login = () => {
  const navigation = useNavigation();
  const forgetPress = () => {
    navigation.navigate('ForgetPassword');
  };
  return (
    <>
      <ImageBackground
        style={styles.background}
        source={require('../assets/images/pattern.jpg')}
        resizeMode="repeat">
        <View style={styles.overlay}>
          <View style={styles.container}>
            <AuthHeader
              title="Account Login"
              desc="Hello Developer, Welcome Back!"
            />
            <View style={styles.body}>
              <Field title="Username: " placeholder="Enter your username..." />
              <Field title="Password: " placeholder="••••••••" />
            </View>
            <View style={styles.footer}>
              <View style={styles.idk}>
                <ConfirmButton text="Log In" />
                <Pressable style={styles.forget} onPress={forgetPress}>
                  <Text style={styles.forgetText}>Forget Password?</Text>
                </Pressable>
              </View>
              <Redirect
                guide="Don't have an Account?"
                textButton="Sign Up"
                screen="Signup"
              />
            </View>
          </View>
        </View>
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  container: {
    flex: 0.5,
    backgroundColor: 'white',
    borderRadius: 8,
    paddingVertical: 15,
    paddingHorizontal: 35,
    paddingBottom: 50,
  },
  body: {
    marginTop: 5,
  },
  footer: {
    marginTop: 17,
  },
  idk: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  forget: {
    alignSelf: 'center',
  },
  forgetText: {
    fontSize: 12,
    color: '#5aa5b9',
    fontWeight: '500',
    textDecorationLine: 'underline',
  },
});

export default Login;
