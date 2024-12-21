import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Modal,
} from 'react-native';
import Details from '../details';

export default function Movies({data}) {
  const [modalVisibility, setVisibility] = useState(false);

  return (
    <View style={styles.card}>
      <Text style={styles.titulo}>{data.nome}</Text>
      <Image source={{uri: data.foto}} style={styles.capa} />

      <View style={styles.areaBotao}>
        <TouchableOpacity
          style={styles.botao}
          onPress={() => setVisibility(true)}>
          <Text style={styles.botaoTexto}>Leia mais</Text>
        </TouchableOpacity>
      </View>

      <Modal transparent={true} animationType="slide" visible={modalVisibility}>
        <Details movie={data} back={() => setVisibility(false)} />
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFF',
    margin: 15,
    elevation: 2,
  },
  capa: {
    height: 250,
    zIndex: 2,
  },
  titulo: {
    padding: 15,
    fontSize: 18,
    fontWeight: 'bold',
  },
  areaBotao: {
    alignItems: 'flex-end',
    marginTop: -45,
    zIndex: 9,
  },
  botao: {
    width: 100,
    backgroundColor: '#89a6ff',
    opacity: 1,
    padding: 8,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  botaoTexto: {
    color: '#fff',
    textAlign: 'center',
  },
});
