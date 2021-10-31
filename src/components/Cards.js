import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out here !!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/dna1.jpg'
              text='Scientists have a new theory about the structure of DNA. Two strands of alternating sugar (deoxyribose) and phosphate groups make up the DNA double helix.'
              label='Scientific'
              path='/About'
            />
            <CardItem
              src='images/dna2.jpg'
              text='DNA hybridization, wherein strands of DNA form duplex or larger hybrids through noncovalent, sequence-specific interactions, is one of the most fundamental processes in biology. ... Nucleic acid hairpin folding has been extensively investigated as an important model system of DNA hybridization.'
              label='Theory'
              path='/About'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/dna3.jpg'
              text='This paper presents a simple and efficient method for oligonucleotide-directed mutagenesis
              using vectors derived from single-stranded phage.'
              label='Papers'
              path='/About'
            />
            <CardItem
              src='images/dna4.jpg'
              text='Single-stranded DNA binding proteins influence APOBEC3A substrate preference'
              label='Research'
              path='/About'
            />
            <CardItem
              src='images/dna5.jpg'
              text='There are two types of DNA in the cell – autosomal DNA and mitochondrial DNA.'
              label='Types'
              path='/About'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
