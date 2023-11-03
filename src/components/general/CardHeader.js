import {View, Text, Image, StyleSheet} from 'react-native';

const CardHeader = ({name, shortIntro, location}) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={{
          uri: 'https://avatars.githubusercontent.com/u/33843378',
        }}></Image>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.shortIntro}>{shortIntro}</Text>
      <Text style={styles.location}>{location}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  img: {
    width: 135,
    height: 135,
    borderRadius: 75,
    borderColor: '#5aa5b9',
    borderWidth: 2,
    alignSelf: 'center',
  },
  name: {
    fontSize: 22,
    color: '#2d2d39',
    fontWeight: '700',
    textAlign: 'center',
    marginVertical: 8,
  },
  shortIntro: {
    textAlign: 'center',
    fontSize: 13,
    color: '#737373',
    fontWeight: '500',
  },
  location: {
    textAlign: 'center',
    fontSize: 13,
    color: '#737373',
    fontWeight: '300',
    marginTop: 5,
  },
  container: {
    marginTop: 15,
    marginBottom: 40,
  },
});

export default CardHeader;
