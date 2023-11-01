import {View, Text, TextInput, StyleSheet} from 'react-native';

const Field = ({title, placeholder}) => {
  return (
    <>
      <Text style={styles.title}>{title}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        // placeholderTextColor="#f8fafd"
      />
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 11,
    color: '#51546e',
    fontWeight: '500',
    marginTop: 12,
  },
  input: {
    marginTop: 4,
    backgroundColor: '#f8fafd',
    borderWidth: 2,
    borderColor: '#e5e7eb',
    borderStyle: 'solid',
    borderRadius: 5,
    paddingVertical: 4,
    paddingHorizontal: 12,
    fontSize: 12,
  },
});

export default Field;
