import React, {useEffect, useState} from 'react';
import {View, FlatList, ActivityIndicator} from 'react-native';
import api from './src/services/api';
import Movies from './src/movies';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadMovies() {
      const response = await api.get('r-api/?api=filmes');
      setMovies(response.data);
      setLoading(false);
    }
    loadMovies();
  }, []);

  if (loading) {
    return (
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1,
        }}>
        <ActivityIndicator color="#121212" size={45} />
      </View>
    );
  } else {
    return (
      <View>
        <FlatList
          keyExtractor={item => String(item.id)}
          data={movies}
          renderItem={({item}) => <Movies data={item} />}
        />
      </View>
    );
  }
};

export default App;
