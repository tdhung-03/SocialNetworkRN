import {Text, StyleSheet, View} from 'react-native';
import SearchButton from '../general/SearchButton';
import SearchInput from '../general/SearchInput';

const ProjectsIntro = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        SEARCH FOR <Text style={{fontWeight: '900'}}>PROJECTS</Text>
      </Text>
      <SearchInput text="Search by Project Title" />
      <SearchButton />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#ededfd',
    paddingVertical: 35,
  },
  text: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: '300',
    marginBottom: 40,
    color: '#2d2d39',
  },
});
export default ProjectsIntro;
