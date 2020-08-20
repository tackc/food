import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults();

const filterResultsByPrice = (price) => {
  // price will equal '$' || '$$' || '$$$'
  return results.filter(result => {
    return result.price === price;
  });
};

  return (
    <View>
      <SearchBar term={term} onTermChange={setTerm} onTermSubmit={() => searchApi(term)} />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>We have found {results.length} results</Text>
      <ResultsList results={filterResultsByPrice('$')} title="Cheap" />
      <ResultsList results={filterResultsByPrice('$$')} title="Mid-Range" />
      <ResultsList results={filterResultsByPrice('$$$')} title="Expensive" />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
