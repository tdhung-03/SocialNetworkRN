import AccountCard from '../components/account/AccountCard';
import {StyleSheet, View} from 'react-native';
import Header from '../components/general/Header';

const Account = () => {
  return (
    <>
      <Header />
      <View style={styles.container}>
        <AccountCard
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

export default Account;
