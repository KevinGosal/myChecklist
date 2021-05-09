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