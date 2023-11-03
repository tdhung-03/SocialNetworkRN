import ProfileCard from '../components/profile/ProfileCard';
import {StyleSheet, View} from 'react-native';
import Header from '../components/general/Header';

const Profile = () => {
  return (
    <>
      <Header />
      <View style={styles.container}>
        <ProfileCard
          name="Dennis Ivanov"
          shortIntro="Experience FullStack Developer, Youtuber and Instructor"
          location="Based in Florida, USA"
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
});

export default Profile;
