import {View, Text, StyleSheet} from 'react-native';
import SearchButton from '../general/SearchButton';
import SearchInput from '../general/SearchInput';

const DevelopersIntro = () => {
  return (
    <View style={styles.container}>
      <Text>CONNECT WITH DEVELOPERS FROM AROUND THE WORLD</Text>
      <SearchInput />
      <SearchButton />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2d2d39',
  },
});

export default DevelopersIntro;
