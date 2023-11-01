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

const ForgetPassword = () => {
  return (
    <>
      <ImageBackground
        style={styles.background}
        source={require('../assets/images/pattern.jpg')}
        resizeMode="repeat">
        <View style={styles.overlay}>
          <View style={styles.container}>
            <View style={styles.header}>
              <Image
                source={require('../assets/images/favicon-3.png')}
                style={styles.logo}></Image>
              <Text style={styles.textHeader}>Forget Password?</Text>
              <Text style={styles.textIntro}>
                Reset password by entering the email address
              </Text>
            </View>
            <View style={styles.body}>
              <Field
                title="Email Address: "
                placeholder="e.g. user@domain.com"
              />
            </View>
            <View style={styles.footer}>
              <View style={styles.idk}>
                <ConfirmButton text="Send Instructions" />
                <Pressable style={styles.forget}>
                  <Text style={styles.forgetText}>Login</Text>
                </Pressable>
              </View>
              <Redirect guide="Don't have an Account?" textButton="Sign Up" />
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
    flex: 0.43,
    backgroundColor: 'white',
    borderRadius: 8,
    paddingVertical: 15,
    paddingHorizontal: 35,
    paddingBottom: 50,
  },
  header: {
    alignItems: 'center',
  },
  logo: {
    height: 60,
    width: 60,
  },
  textHeader: {
    fontSize: 26,
    fontWeight: '800',
    color: '#2d2d39',
    marginTop: 9,
  },
  textIntro: {
    fontSize: 15,
    color: '#737373',
    marginTop: 4,
    textAlign: 'center',
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

export default ForgetPassword;
