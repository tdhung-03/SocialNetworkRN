import {View, StyleSheet} from 'react-native';
import Logo from '../assets/images/logo.svg';

const Header = () => {
  return (
    <View style={styles.container}>
      <Logo height={30} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2d2d39',
    paddingTop: 17,
    paddingBottom: 17,
  },
});

export default Header;
