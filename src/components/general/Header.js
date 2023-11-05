import {View, StyleSheet, Pressable} from 'react-native';
import Logo from '../../assets/images/logo.svg';
import {useNavigation} from '@react-navigation/native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faArrowAltCircleRight} from '@fortawesome/free-regular-svg-icons/faArrowAltCircleRight';
import {faArrowAltCircleLeft} from '@fortawesome/free-regular-svg-icons/faArrowAltCircleLeft';

const HorizontalLine = () => {
  return <View style={styles.line}></View>;
};

const Header = () => {
  const navigation = useNavigation();
  const returnDevelopers = () => {
    navigation.navigate('Developers');
  };

  const returnLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <>
      <View style={styles.container}>
        <Pressable onPress={returnDevelopers}>
          <Logo height={30} />
        </Pressable>
        <Pressable style={{marginRight: 20}} onPress={returnLogin}>
          <FontAwesomeIcon
            icon={faArrowAltCircleRight}
            size={30}
            style={styles.icon}
          />
        </Pressable>
      </View>
      <HorizontalLine />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2d2d39',
    paddingTop: 17,
    paddingBottom: 17,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  line: {
    height: 1,
    backgroundColor: 'gray',
  },
  icon: {
    color: 'white',
  },
});

export default Header;
