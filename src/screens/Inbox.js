import {View, Text, StyleSheet} from 'react-native';
import Preview from '../components/messages/Preview';
import Header from '../components/general/Header';

const Inbox = () => {
  return (
    <>
      <Header />
      <View style={styles.container}>
        <Text style={styles.text}>
          NEW MESSAGES(<Text style={{color: '#5aa5b9'}}>2</Text>)
        </Text>
        <View style={styles.list}>
          <Preview
            sender="Dennis Ivanov"
            title="Working opportunity for Web Design Company"
            time="May 31, 2021, 4:37 PM"
            isRead={false}
          />
          <Preview
            sender="Md. Shahriar Parvez"
            title="Up for a Freelancing Project?"
            time="May 30, 2021, 07:47 PM"
            isRead={false}
          />
          <Preview
            sender="Sulamita Ivanov"
            title="Another Opportunity for Side Income"
            time="May 29, 2021, 09:45 AM"
            isRead={true}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 65,
    paddingHorizontal: 10,
  },
  text: {
    fontSize: 19,
    color: '#2d2d39',
    fontWeight: '700',
  },
  list: {
    marginTop: 30,
    flexDirection: 'column',
    paddingHorizontal: 24,
    paddingVertical: 4,
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: '#e5e7eb',
    borderRadius: 5,
  },
});

export default Inbox;
