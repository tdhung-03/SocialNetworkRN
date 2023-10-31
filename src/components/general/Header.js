import {View, StyleSheet} from 'react-native';
import Logo from '../../assets/images/logo.svg';

const HorizontalLine = () => {
  return <View style={styles.line}></View>;
};

const Header = () => {
  return (
    <>
      <View style={styles.container}>
        <Logo height={30} />
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
