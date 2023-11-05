import {View, Image, Text, StyleSheet, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const AuthHeader = ({title, desc}) => {
  const navigation = useNavigation();
  const returnDevelopers = () => {
    navigation.navigate('Developers');
  };
  return (
    <View style={styles.header}>
      <Pressable onPress={returnDevelopers}>
        <Image
          source={require('../../assets/images/favicon-3.png')}
          style={styles.logo}
        />
      </Pressable>
      <Text style={styles.textHeader}>{title}</Text>
      <Text style={styles.textIntro}>{desc}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
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
});

export default AuthHeader;
