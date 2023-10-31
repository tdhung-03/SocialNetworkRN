import {TextInput, StyleSheet} from 'react-native';

const SearchInput = () => {
  return (
    <TextInput style={styles.input} placeholder="Search by developer name" />
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'white',
    width: 365,
    borderRadius: 5,
    paddingHorizontal: 15,
    marginBottom: 10,
  },
});
export default SearchInput;
