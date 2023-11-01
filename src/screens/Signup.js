import {View, Text, StyleSheet, ImageBackground, Image} from 'react-native';
import Field from '../components/auth/Field';
import ConfirmButton from '../components/auth/ConfirmButton';
import Redirect from '../components/auth/Redirect';

const Signup = () => {
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
              <Text style={styles.textHeader}>Account SignUp</Text>
              <Text style={styles.textIntro}>
                Create a new developer account
              </Text>
            </View>

            <View style={styles.body}>
              <Field title="Full Name: " placeholder="e.g. Tran Duy Hung" />
              <Field
                title="Email Address: "
                placeholder="e.g. user@domain.com"
              />
              <Field title="Password: " placeholder="••••••••" />
              <Field title="Confirm Password: " placeholder="••••••••" />
            </View>

            <View style={styles.footer}>
              <ConfirmButton text="Sign In" />
              <Redirect guide="Already have an Account?" textButton="Log In" />
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
    flex: 0.7,
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
  },
  footer: {
    marginTop: 17,
  },
});

export default Signup;
