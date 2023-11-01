import {View, Text, StyleSheet} from 'react-native';

const HorizontalLine = () => {
  return <View style={styles.line}></View>;
};

const Preview = ({sender, title, time, isRead}) => {
  return (
    <>
      <View style={styles.container}>
        <Text style={[isRead ? styles.readText : styles.text, , {flex: 0.22}]}>
          {sender}
        </Text>
        <Text style={[isRead ? styles.readText : styles.text, , {flex: 0.45}]}>
          {title}
        </Text>
        <Text
          style={[
            isRead ? styles.readText : styles.text,
            {flex: 0.25, textAlign: 'right'},
          ]}>
          {time}
        </Text>
      </View>
      <HorizontalLine />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
  },
  text: {
    fontSize: 12,
    color: '#2d2d39',
    fontWeight: '700',
    lineHeight: 15,
  },
  readText: {
    fontSize: 12,
    lineHeight: 15,
    color: '#737373',
    fontWeight: '500',
  },
  line: {
    height: 2,
    backgroundColor: '#f3f3f3',
  },
});

export default Preview;
