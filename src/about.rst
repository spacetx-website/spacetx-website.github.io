About SpaceTx
=============

`The SpaceTx Consortium <https://chanzuckerberg.com/human-cell-atlas/spacetx-benchmarking-methods-for-spatial-transcriptomic-mapping-of-cortical-cell-types/>`_ was created as part of the Chan Zuckerberg Initiative's support for the Human Cell Atlas with the goal of benchmarking spatial transcriptomics methods by comparing standardized outputs in the mouse visual cortex and human middle temporal gyrus. Generating this data was challenging, as the experimental methods were in early days of development in academic labs. Data from multiple modalities was finally aggregated for a hackathon in February of 2020, just as the SARS-COv-2 virus was beginning to circulate across the globe.

Introduction
------------

Mapping spatial distributions of molecularly defined cell types is essential in the brain, with its exceptional cellular heterogeneity and the functional significance of spatial organization.  To address this issue, several multiplex FISH or in situ RNA sequencing methods have been developed in parallel, each using different experimental and computational protocols, with different trade-offs and optimizations.  Here, we present the results of the SpaceTx Consortium, including a direct comparison of six different matched experiments performed in mouse primary visual cortex.  Following cell type analysis of single cell transcriptomics data in the same brain region, we tailored a range of gene panels specifically to solve the problem of mapping imaged cells to known transcriptomic types. We summarize the performance of each method in the context of this experiment, compare their outputs and present results for the spatial distribution of gene expression and cell types.  We present a meta-analysis of methodological similarities and differences between experimental protocols and the resulting cell type assignments and measurements of their abundance and spatial distribution. By comparing various methods to determine the transcriptomic type of individual cells (“cell type mapping”), we show that cell type mapping methods are a critical point for further research as spatial transcriptomic methods become more widely available. We also present the consortium’s successful efforts to address critical issues such as the standardization of computational analysis and file formats, cell segmentation, cell type assignment, and big data visualization.  

Determining spatial distributions of molecularly defined cell types is a core element of the Human Cell Atlas, Brain Initiative Cell Census Network (BICCN) and related efforts to characterize tissue heterogeneity at the single cell level.  With single cell transcriptomics methods having limited spatial resolution, spatial transcriptomics methods will be critical to understanding the brain with its exceptional cellular heterogeneity and the functional significance of their spatial organization.  The main focus of the SpaceTx consortium is to evaluate and compare the performance of spatially resolved transcriptomics methods in mouse neocortex for their ability to accurately map the spatial distributions of cortical cell types.  We produced initial, reference cell type classifications based on open access single cell/nucleus transcriptome datasets from the Allen Institute in mouse visual cortex.  Participating groups developed scRNAseq-informed gene sets optimized for each method and performed measurements on mouse primary visual cortex. The resulting datasets were processed to create cell-by-gene tables for each imaging-based method (multiround smFISH, MERFISH, ISS, BaristaSeq and ExSeq) and a spot-by-gene table of the sequencing-based Visium method. With standardized data sets in hand, we :ref:`mapped cells to a common reference<cell-type-mapping>`.  The results of these cell type mapping algorithms were combined using two different approaches to identify final cell type mappings that incorporate all of the cell type mapping methods.

Related Projects and Ongoing Work
---------------------------------

As SpaceTx analysis proceeded during the pandemic lockdowns, the spatial transcriptomics field has grown. Here are some related projects and useful references. 

Reviews and Perspectives:

- `Museum of Spatial Transcriptomics <https://www.biorxiv.org/content/10.1101/2021.05.11.443152v2.full>`_ Lambda Moses and Lior Pachtor's excellent review and `great interactive supplement <https://pachterlab.github.io/LP_2021/>`_.

- Comment from some SpaceTx members for Nature Methods crowning Spatial Transcriptomics as the Method of The Year 2021:  `Comment on Spatial Transcriptomics in the Brain <https://www.nature.com/articles/s41592-020-01040-z>`_.

- Comment from Lyla Atta and Jean Fan on `Computational challenges and opportunities in spatially resolved transcriptomic data analysis <https://www.nature.com/articles/s41467-021-25557-9>`_.

Commercial Systems for Spatial Transcriptomics
----------------------------------------------

Commercial Offerings for Image-based Spatial Transcriptomics:

- `10x "Xenium" <https://www.10xgenomics.com/in-situ-technology>`_
- `Nanostring "CosMx SMI" <https://nanostring.com/products/cosmx-spatial-molecular-imager/>`_
- `Rebus Biosystems "Esper" <https://rebusbio.com/rebus-esper/>`_ 
- `Resolve Biosciences "Molecular Cartography" <https://resolvebiosciences.com/>`_
- `Vizgen "MERSCOPE" <https://vizgen.com/products/>`_