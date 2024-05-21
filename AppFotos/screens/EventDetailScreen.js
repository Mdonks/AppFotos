import React, { useState } from 'react';
import { View, Text, Button, Image, ScrollView, StyleSheet } from 'react-native';

const EventDetailsScreen = ({ route, navigation }) => {
  const { event, photo } = route.params;
  const [photos, setPhotos] = useState([]);

  if (photo && !photos.includes(photo.uri)) {
    setPhotos([...photos, photo.uri]);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{event.name}</Text>
      <Text style={styles.details}>{event.details}</Text>
      <Button title="Tomar Foto" onPress={() => navigation.navigate('Camera', { event })} />
      <ScrollView>
        {photos.map((uri, index) => (
          <Image key={index} source={{ uri }} style={styles.photo} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  details: {
    fontSize: 16,
    marginBottom: 16,
  },
  photo: {
    width: '100%',
    height: 200,
    marginVertical: 8,
  },
});

export default EventDetailsScreen;
