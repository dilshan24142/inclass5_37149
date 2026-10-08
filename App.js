import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';

export default function App() {
  const [points, setPoints] = useState(0);

  const name = 'Sachintha Dilshan';
  const email = 'dilshans626@gmail.com';
  const indexNo = '37149';

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={['top']}>
        <StatusBar style="light" />

        <View style={styles.header}>
          <Text style={styles.headerText}>My Profile</Text>
        </View>

        <View style={styles.page}>
          <View style={styles.avatarBox}>
            <View style={styles.avatar}>
              <Text style={styles.avatarLetters}>SD</Text>
            </View>
            <MaterialIcons name="check" size={32} color="#1fdd1f" style={styles.tick} />
          </View>

          <View style={styles.line} />

          <Text style={styles.title}>Name</Text>
          <Text style={styles.text}>{name}</Text>

          <Text style={styles.title}>Index No</Text>
          <Text style={styles.text}>{indexNo}</Text>

          <Text style={styles.title}>Email</Text>
          <View style={styles.row}>
            <MaterialIcons name="email" size={24} color="black" />
            <Text style={styles.rowText}>{email}</Text>
          </View>

          <Text style={styles.title}>Points</Text>
          <View style={styles.row}>
            <MaterialIcons name="star" size={24} color="black" />
            <Text style={styles.rowText}>{points}</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.addButton} onPress={() => setPoints(points + 1)}>
          <MaterialIcons name="add" size={30} color="white" />
        </TouchableOpacity>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  header: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: 22,
  },
  page: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    paddingHorizontal: 25,
    paddingTop: 25,
  },
  avatarBox: {
    width: 130,
    height: 130,
    borderRadius: 65,
    backgroundColor: 'white',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: '#444',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarLetters: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
  },
  tick: {
    position: 'absolute',
    right: 20,
    bottom: 20,
  },
  line: {
    height: 2,
    backgroundColor: 'black',
    marginTop: 12,
    marginBottom: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 18,
  },
  text: {
    fontSize: 18,
    marginTop: 5,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  rowText: {
    fontSize: 18,
    marginLeft: 12,
  },
  addButton: {
    position: 'absolute',
    right: 25,
    bottom: 35,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
});
