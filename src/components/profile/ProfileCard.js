import ConfirmButton from '../auth/ConfirmButton';
import CardHeader from '../general/CardHeader';
import {View, StyleSheet} from 'react-native';

const ProfileCard = ({name, shortIntro, location}) => {
  return (
    <View style={styles.container}>
      <CardHeader name={name} shortIntro={shortIntro} location={location} />
      <View>
        <ConfirmButton text="Send Message" style={styles.middle} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 20,
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: '#e5e7eb',
    borderRadius: 7,
    alignItems: 'center',
  },
  middle: {
    position: 'relative',
    left: '50%',
  },
});

export default ProfileCard;
