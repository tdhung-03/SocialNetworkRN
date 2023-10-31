import {StyleSheet, Pressable, Text} from 'react-native';

const SearchButton = () => {
  return (
    <Pressable style={styles.button}>
      <Text style={styles.text}>Search</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#51546e',
    paddingVertical: 10,
    width: 365,
    borderRadius: 5,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 17,
  },
});

export default SearchButton;
