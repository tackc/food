import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = ({ navigation }) => {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults();

const filterResultsByPrice = (price) => {
  // price will equal '$' || '$$' || '$$$'
  return results.filter(result => {
    return result.price === price;
  });
};

  return (
    <>
      <SearchBar term={term} onTermChange={setTerm} onTermSubmit={() => searchApi(term)} />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <ResultsList results={filterResultsByPrice('$')} title="Cheap" navigation={navigation} />
        <ResultsList results={filterResultsByPrice('$$')} title="Mid-Range" navigation={navigation} />
        <ResultsList results={filterResultsByPrice('$$$')} title="Expensive" navigation={navigation} />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
