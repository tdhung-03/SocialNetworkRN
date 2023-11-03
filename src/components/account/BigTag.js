import {Text, StyleSheet, View} from 'react-native';

const BigTag = ({name}) => {
  return (
    <View style={styles.tag}>
      <Text style={styles.text}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  tag: {
    backgroundColor: '#ededfd',
    alignSelf: 'flex-start',
    paddingVertical: 5,
    paddingHorizontal: 24,
    borderRadius: 12,
  },
  text: {
    color: '#51546e',
    fontWeight: '500',
    fontSize: 12,
  },
});

export default BigTag;
