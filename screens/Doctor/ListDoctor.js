import React from 'react';
import { StyleSheet, View, Text, Image, Tit } from 'react-native';

const DoctorList = () => {
  const doctors = [
    {
      id: 1,
      name: 'Dr. Raghav',
      qualifications: 'MBBS, MD',
      description: 'Done 12 surgeries, graduated from Harvard Medical School',
      photo: require('//'),
    },
    {
      id: 2,
      name: 'Dr. Meghna',
      qualifications: 'MBBS, MPhil',
      description: 'Master in heart surgery from Columbia',
      photo: require('../assets/fdoctor.jpeg'),
    },
  ];

  return (
    <View style={styles.container}>
      {doctors.map((doctor) => (
        <View key={doctor.id} style={styles.card}>
          <Image source={doctor.photo} style={styles.photo} />
          <Text style={styles.name}>{doctor.name}</Text>
          <Text style={styles.qualifications}>{doctor.qualifications}</Text>
          <Text style={styles.description}>{doctor.description}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  card: {
    marginBottom: 16,
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
  },
  photo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 8,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  qualifications: {
    fontSize: 16,
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: 'gray',
  },
});

export default DoctorList;

