import {View, StyleSheet, Pressable} from 'react-native';
import Logo from '../../assets/images/logo.svg';
import {useNavigation} from '@react-navigation/native';

const HorizontalLine = () => {
  return <View style={styles.line}></View>;
};

const Header = () => {
  const navigation = useNavigation();
  const returnDevelopers = () => {
    navigation.navigate('Developers');
  };

  return (
    <>
      <View style={styles.container}>
        <Pressable onPress={returnDevelopers}>
          <Logo height={30} />
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
  },
  line: {
    height: 1,
    backgroundColor: 'gray',
  },
});

export default Header;
