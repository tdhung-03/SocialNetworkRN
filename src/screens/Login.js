import {View, Text, StyleSheet, ImageBackground, Image} from 'react-native';

const Login = () => {
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
              <Text style={styles.textHeader}>Account Login</Text>
              <Text style={styles.textIntro}>
                Hello Developer, Welcome Back!
              </Text>
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
    paddingVertical: 20,
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
});

export default Login;
