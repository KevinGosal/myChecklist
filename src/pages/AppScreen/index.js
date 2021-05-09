import React, {Component} from 'react';
import { View, Text, AsyncStorage, StyleSheet, TouchableOpacity, ScrollView, TextInput,
  Keyboard, ActivityIndicator, } from 'react-native';






















































//Fanuel
const style = StyleSheet.create({
  keseluruhanAplikasi: {
      backgroundColor: '#5B8A72', 
      height: '100%'
    },
  bagianAwal: {
    backgroundColor: '#464f41',
    elevation: 5,
    paddingHorizontal: '5%',
    paddingVertical: 20,
  },
  Textatas: {
    fontSize: 20,
    color : 'white',
    fontWeight : 'bold',
  },
  tombolTambah: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    backgroundColor : '#464f41'
  },
  isiTambah: {
    fontSize: 25,
    fontWeight: '700',
    color : 'white',
  },
  body: {
    paddingHorizontal: '4%', 
    paddingVertical: 15
  },
  isi: {
    marginBottom: 10,
    backgroundColor: 'white',
    padding: 10,
    minHeight: 50,
    position: 'relative',
  },
  hapusIsi: {
    position: 'absolute',
    fontSize: 16,
    padding: 10,
    right: 0,
  },
  tulisanX: {
    fontSize: 16,
    color : 'red',
  },
  isiTeks: {
    fontSize: 16,
    paddingHorizontal: '1%',
  },
  masukanDaftar: {
    borderBottomWidth: 1,
    fontSize: 16,
  },
});
