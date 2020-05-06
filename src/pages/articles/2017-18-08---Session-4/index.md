---
title: Session 4 (6th May 2020)
date: "2020-05-06T16:00:00Z"
layout: post
draft: false
path: "/posts/session-4"
category: "Session Schedule"
tags:
  - "Bioinformatics software and protocols"
  - "Microbial ecology and evolution"
description: "With talks from Shatavia Morrison, Inês Mendes and Rebecca Ansorge"
---
# Schedule 

Time: 16:00 6 May 2020 (UTC) 

Zoom link: https://cdc.zoomgov.com/j/1613270485

Discord link: https://discord.gg/N9dVFJp

Add to your calendar: [.iCal file](./Micro_Binfie_Virtual_conference.ics)

* **16:00 Machine learning and whole genome sequencing: Dragging classical method of *Legionella pneumophila* serotyping, kicking and screaming, into the 21st century**  
  Shatavia Morrison (CDC - NCIRD/DBD/RDB)  
* **16:30 DEN-IM: dengue virus genotyping from amplicon and shotgun metagenomic sequencing**  
  Inês Mendes (Instituto de Medicina Molecular)
* **17:00 Same same but different: Functional diversity despite identical 16S rRNA sequences**  
  Rebecca Ansorge (Quadram Institute Bioscience)   
* **17:30 Virtual coffee break**

## Machine learning and whole genome sequencing: Dragging classical method of *Legionella pneumophila* serotyping, kicking and screaming, into the 21st century
**Background:** The majority of Legionnaire’s Dieses cases are due to a single species, *L. pneumophila*.  This species consists of at least 17 serogroups, with serogroup 1 (sg1) being most frequently isolated from clinical and environmental samples. While a number of tools are available for sequence-based identification of sg1 isolates, there are only antibody-based methods for discrimination among serogroups 2-17. With the bacterial genome sequences getting more readily available, there is an urgent need to develop sequence-based tools for identification of all *L. pneumophila* serogroups.

**Methods:** We performed whole genome sequencing on 181 *L. pneumophila* isolates representing 14 different serogroups and aligned sequences to the *L. pneumophila* Philadelphia sg1 genome sequence. Isolate serogroup were previously characterized by direct fluorescent antibody and/or detection of sg1-specific wzm. A 30 kb sequence and gene presence/absence alignment was created for each isolate based on the lipopolysaccharide (LPS) biosynthesis region. The alignment matrix was used as input for the RandomForest and Caret packages in R. The RandomForest machine learning method with the kFolds cross validation was performed in order to identify genetic features that contained enough discriminatory power for *L. pneumophila* sg typing. A custom python script was also used to calculate the intra- and inter- pairwise nucleotide identity within the LPS region.

**Results:** After the removal of conserved nucleotide positions, 24,546 features were used as input into random forest algorithm. The cross validation consisted of 10 sample sets each with ~ 160 isolates randomly selected. We excluded sg 11, 16, and 17 because they were represented by a single isolate. The cross-validation analysis resulted in approximately 73.5% model accuracy. Sg 1 -7, 9, and 13 had an error rate between 0 – 0.30 and for sg 8, 10, 12, 14, and 15 the error rate was >0.50. A pairwise identity analysis of the LPS regions revealed some serogroups are highly conserved (97.99% -100%), while others potentially have several representative sequences (95.5% -100%).  Also, several isolates had higher inter-sg similarity than intra-sg similarity. This suggests that not all sg have homogenous LPS regions and may represent independent origins for the same sg phenotype.  

**Conclusion:** The random forest approach revealed the LPS region as a promising target to construct diagnostic assays to detect non-Lp1 isolates. With the transition to sequencing as a first approach during *L. pneumophila* outbreak investigations, this model may be used to help elucidate traditional epidemiology metadata. This initial work is the foundation to construct a refined predictive model for *L. pneumophila* serogroups.

*The findings and conclusions in this report are those of the authors and do not necessarily represent the official position of the Centers for Disease Control and Prevention.*

## DEN-IM: dengue virus genotyping from amplicon and shotgun metagenomic sequencing
Dengue virus (DENV) represents a public health threat and economic burden in affected countries. The availability of genomic data is key to understanding viral evolution and dynamics, supporting improved control strategies. Currently, the use of high-throughput sequencing (HTS) technologies, which can be applied both directly to patient samples (shotgun metagenomics) and to PCR-amplified viral sequences (amplicon sequencing), is potentially the most informative approach to monitor viral dissemination and genetic diversity by providing, in a single methodological step, identification and characterization of the whole viral genome at the nucleotide level. Despite many advantages, these technologies require bioinformatics expertise and appropriate infrastructure for the analysis and interpretation of the resulting data. In addition, the many software solutions available can hamper the reproducibility and comparison of results. Here we present DEN-IM, a one-stop, user-friendly, containerized and reproducible workflow for the analysis of DENV short-read sequencing data from both amplicon and shotgun metagenomics approaches. It is able to infer the DENV coding sequence (CDS), identify the serotype and genotype, and generate a phylogenetic tree. It can easily be run on any UNIX-like system, from local machines to high-performance computing clusters, performing a comprehensive analysis without the requirement for extensive bioinformatics expertise. Using DEN-IM, we successfully analysed two types of DENV datasets. The first comprised 25 shotgun metagenomic sequencing samples from patients with variable serotypes and genotypes, including an in vitro spiked sample containing the four known serotypes. The second consisted of 106 paired-end and 76 single-end amplicon sequences of DENV 3 genotype III and DENV 1 genotype I, respectively, where DEN-IM allowed detection of the intra-genotype diversity. The DEN-IM workflow, parameters and execution configuration files, and documentation are freely available at https://github.com/B-UMMI/DEN-IM).

### About the speaker
Inês Mendes is currently a PhD student at Instituto de Medicina Molecular and University Medical Center Groningen. 
Her formal education started, in 2011, in Cellular and Molecular Biology, in Faculdade de Ciências e Tecnologia - Universidade Nova de Lisboa, followed by a Master degree in 2014 in Bioinformatics and Computational Biology in Faculdade de Ciências - Universidade de Lisboa. Inês joined the Instituto de Medicina Molecular, at the Mário Ramirez Lab as a master student in 2015 where she used a variety of open source tools, and developed her own scripts, in Python, for the analysis of Streptococcus dysgalactiae genomes recovered from different sources (both human and animal). Since then, she remained a member of the MRamirez Lab as a Bioinformatician where she developed and maintain in house tools and scripts and perform various analysis using a variety of open source tools.

In 2018 Inês began a PhD in Bioinformatics, in collaboration with University Medical Center Groningen, focused on metagenomics, validation and reproducibility, specially relevant when analyzing clinical data. Her work is supervised by Dr. João André Carriço and Prof. Dr. Mário Ramirez, from University of Lisbon, and Prof. Dr. John W A Rossen, from University of Groningen.

## Same same but different: Functional diversity despite identical 16S rRNA sequences
The 16S rRNA sequence is commonly considered a gold standard to determine the diversity in microbial communities. But how much diversity do we miss when we stop there? We investigated a low-diversity symbiosis between deep-sea bivalves and their bacterial symbionts using their metagenomic information. Despite identical 16S sequences we found as many as 16 intracellular symbiont strains to co-exist in single host individuals. We used nucleotide polymorphism and read coverage information to tease apart strain-level differences within symbiont populations. This approach revealed extensive differences in the gene content of these strains, that are otherwise unaccessible from the MAGs. 

### About the speaker 
I have recently started a PostDoc position in the bioinformatics group of Andrew Page at the Quadram Institute of Bioscience where I am a member of the “Gut Microbes and Health” Institute Strategic Programme. I did my PhD in 2019 at the Max Planck Institute for Marine Microbiology in Bremen (Germany) focussing on an endosymbiosis between bacteria and bivalves in the deep sea. My work has been mostly metagenomics towards teasing apart highly similar strains of the bacterial symbionts within a host. During my PhD however I also participated on two research expeditions to hydrothermal vents and cold seeps where my study objects occurred which making up for all the screen time. I am fascinated by host-microbe interactions and how this links to strain-diversity – from highly specific one-to-one symbioses to complex microbiomes such as those in the human gut. 
