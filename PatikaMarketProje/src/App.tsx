import React ,{useState} from 'react';
import { View, Text, StyleSheet, FlatList, TextInput } from 'react-native';
import NewsCard from './components/NewsCard';
import ürünbilgileri from './ürünbilgileri.json';
import { SearchSource } from 'jest';

function App() {
  const [searchWord, setSearchWord] = useState<string>()
  const [filteredArray, setFilteredArray] = useState(ürünbilgileri);
  const [originalArray, setOriginalArray] = useState([1, 2, 3, 4, 5, 6]);
 

  const filterProduct = (value: any) => {
    const result = ürünbilgileri.filter((item: any) => item.title.includes(value));
    setFilteredArray(result);
  };



  const listRender = (data: any) => {

    return(
      <View style={styles.rowContainer}>
      {data.item.map((product:any) => (
        <View key={product.id} style={styles.cardContainer}>
          <NewsCard news={product} />
        </View>
      ))}
    </View>
    )
  }


  return (
    <View style={styles.container}>
      <Text style={styles.baslık}>PATIKASTORE</Text>

      <TextInput
        placeholder='Ara...'
        clearButtonMode='always'
        style={styles.searchInput}
        onChangeText={(e) => filterProduct(e)}
      />

      <FlatList
        data={chunkArray(filteredArray, 2)} // Her seferinde 2 ürün görüntülemek için
        renderItem={listRender}
      />
    </View>
  );
}

// Veriyi her seferinde belirtilen boyutta dilimleyen yardımcı bir fonksiyon
function chunkArray(array:any, chunkSize:any) {
  const result = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }
  return result;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eceff1',
    flexDirection: 'column',
  },
  rowContainer: {
    flexDirection: 'row',
  },
  cardContainer: {
    flex: 1,
    margin: 10,
  },
  baslık: {
    fontSize: 40,
    color: 'purple',
  },
  searchInput: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    margin: 10,
  },
});

export default App;
