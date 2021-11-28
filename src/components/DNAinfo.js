import React from 'react';




export default function DNAinfo() {
  
  return (
    <>
      <div className='cards'>
      <h2> Details About DNA strands Are Listed Here</h2>
        

        <div class="card">
                <div class="card-header" id="headingOne">
                    <h2 class="mb-0">
                        <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne"
                            aria-expanded="true" aria-controls="collapseOne">
                            How We Started
                        </button>
                    </h2>
                    <p>DNA, abbreviation of deoxyribonucleic acid, organic chemical of complex molecular structure that is found in all prokaryotic and eukaryotic cells and in many viruses. DNA codes genetic information for the transmission of inherited traits.

                      A brief treatment of DNA follows. For full treatment, see genetics: DNA and the genetic code.

                      The chemical DNA was first discovered in 1869, but its role in genetic inheritance was not demonstrated until 1943. In 1953 James Watson and Francis Crick, aided by the work of biophysicists Rosalind Franklin and Maurice Wilkins, determined that the structure of DNA is a double-helix polymer, a spiral consisting of two DNA strands wound around each other. The breakthrough led to significant advances in scientists’ understanding of DNA replication and hereditary control of cellular activities.

                    </p>
                          <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne"
                            aria-expanded="true" aria-controls="collapseOne">
                            Going on 
                          </button>
                      <p>
                        Each strand of a DNA molecule is composed of a long chain of monomer nucleotides. The nucleotides of DNA consist of a deoxyribose sugar molecule to which is attached a phosphate group and one of four nitrogenous bases: two purines (adenine and guanine) and two pyrimidines (cytosine and thymine). The nucleotides are joined together by covalent bonds between the phosphate of one nucleotide and the sugar of the next, forming a phosphate-sugar backbone from which the nitrogenous bases protrude. One strand is held to another by hydrogen bonds between the bases; the sequencing of this bonding is specific—i.e., adenine bonds only with thymine, and cytosine only with guanine.


                      </p>
                      <img src='/images/Intra.png'
          alt ='IntraBond'  
          height ={200} width ={600}
          />
                </div>

                
            </div>
      </div>
      
    </>
  );
}
