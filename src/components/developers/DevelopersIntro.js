import {View, Text, StyleSheet} from 'react-native';
import SearchButton from '../general/SearchButton';
import SearchInput from '../general/SearchInput';

const DevelopersIntro = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        CONNECT WITH <Text style={{fontWeight: '900'}}>DEVELOPERS</Text> FROM
        AROUND THE WORLD
      </Text>
      <SearchInput text="Search by developer name" />
      <SearchButton />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2d2d39',
    alignItems: 'center',
    paddingVertical: 65,
  },
  text: {
    color: 'white',
    fontSize: 24,
    textAlign: 'center',
    fontWeight: '300',
    marginBottom: 40,
  },
});

export default DevelopersIntro;
