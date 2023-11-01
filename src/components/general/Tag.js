import {Text, StyleSheet, View} from 'react-native';

const Tag = ({name}) => {
  return (
    <View style={styles.tag}>
      <Text style={styles.text}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  tag: {
    backgroundColor: '#e6faff',
    alignSelf: 'flex-start',
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 12,
  },
  text: {
    color: '#5aa5b9',
    fontWeight: '500',
    fontSize: 10,
  },
});

export default Tag;
