import React, {Component} from 'react';
import { View, Text, AsyncStorage, StyleSheet, TouchableOpacity, ScrollView, TextInput,
  Keyboard, ActivityIndicator, } from 'react-native';

//Eben
    render() {
      return (
        <ScrollView style={style.keseluruhanAplikasi}>
          <View style={style.bagianAwal}>
            <Text style={style.Textatas}>Apa yang perlu diingatkan?</Text>
          </View>
          {this.state.memuat ? (
            <ActivityIndicator color="#d28888" size="large" />
          ) : (
            <View style={style.body}>
              {this.state.list.map((item, key) => (
                <React.Fragment>
                  {this.state.formIsi === null || this.state.formIsi !== key ? (
                    <TouchableOpacity
                      style={style.isi}
                      activeOpacity={0.5}
                      onLongPress={() => this.formPengisian(key)}>
                      <Text style={style.isiTeks}>{item}</Text>
                      <TouchableOpacity
                        style={style.hapusIsi}
                        onPress={() => this.hapusTugas(key)}>
                        <Text style={style.tulisanX}>x</Text>
                      </TouchableOpacity>
                    </TouchableOpacity>
                  ) : null}
                  {this.state.formIsi !== null ? (
                    key == this.state.formIsi ? (
                      <TextInput
                        style={style.masukanDaftar}
                        onBlur={() => this.daftarTugas(this.state.masukanTugas, key)}
                        onSubmitEditing={() =>
                          this.daftarTugas(this.state.masukanTugas, key)
                        }
                        value={this.state.masukanTugas}
                        autoFocus
                        onChangeText={editText => this.setState({editText})}
                      />
                    ) : null
                  ) : null}
                </React.Fragment>
              ))}
              <TouchableOpacity style={style.tombolTambah} onPress={() => this.tambahTugas()}>
                <Text style={style.isiTambah}>Tambahkan</Text>
              </TouchableOpacity>
            </View>
          )}
        </ScrollView>
      );
    }
  }


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

    