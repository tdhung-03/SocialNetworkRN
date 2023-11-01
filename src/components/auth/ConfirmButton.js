import {Pressable, StyleSheet, Text} from 'react-native';

const ConfirmButton = ({text}) => {
  return (
    <Pressable style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#51546e',
    paddingVertical: 9,
    paddingHorizontal: 32,
    alignSelf: 'flex-start',
    borderRadius: 5,
  },
  text: {
    color: 'white',
    fontWeight: '500',
  },
});

export default ConfirmButton;
