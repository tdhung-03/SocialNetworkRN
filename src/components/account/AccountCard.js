import Tag from '../general/Tag';
import ConfirmButton from '../auth/ConfirmButton';
import CardHeader from '../general/CardHeader';
import {View, StyleSheet} from 'react-native';

const AccountCard = ({name, shortIntro, location}) => {
  return (
    <View style={styles.container}>
      <View>
        <Tag name="Edit" style={styles.middle} />
      </View>
      <CardHeader name={name} shortIntro={shortIntro} location={location} />
      <View>
        <ConfirmButton text="Note to self" style={styles.middle} />
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

export default AccountCard;
