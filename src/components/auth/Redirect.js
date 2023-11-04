import {Text, Pressable, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Redirect = ({guide, textButton, screen}) => {
  const navigation = useNavigation();
  const returnSignup = () => {
    navigation.navigate(screen);
  };
  return (
    <>
      <Text style={styles.guide}>{guide}</Text>
      <Pressable onPress={returnSignup}>
        <Text style={styles.textButton}>{textButton}</Text>
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  guide: {
    color: '#51546e',
    fontSize: 11,
    fontWeight: '500',
    marginTop: 15,
  },
  textButton: {
    fontSize: 16,
    color: '#5aa5b9',
    fontWeight: '500',
  },
});

export default Redirect;
