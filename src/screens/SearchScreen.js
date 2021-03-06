import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
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
    <>
      <SearchBar term={term} onTermChange={setTerm} onTermSubmit={() => searchApi(term)} />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <ResultsList results={filterResultsByPrice('$')} title="Cheap" />
        <ResultsList results={filterResultsByPrice('$$')} title="Mid-Range" />
        <ResultsList results={filterResultsByPrice('$$$')} title="Expensive" />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
