/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  FileText, 
  Search,
  ArrowLeft
} from 'lucide-react';

interface Topic {
  name: string;
  videoUrl?: string;
  questionsUrl?: string;
  solutionsUrl?: string;
  grade: string;
}

const TOPICS: Topic[] = [
  // Higher Tier (Grade 8/9)
  { 
    name: "Algebraic Fractions (Equations)", 
    grade: "8+", 
    videoUrl: "https://www.youtube.com/watch?v=mwCHn17XrSs",
    questionsUrl: "https://www.mathsgenie.co.uk/resources/7-algebraic-fractions.pdf",
    solutionsUrl: "https://www.mathsgenie.co.uk/resources/7-algebraic-fractionsans.pdf"
  },
  { 
    name: "Algebraic Fractions (Simplifying)", 
    grade: "8+", 
    videoUrl: "https://www.youtube.com/watch?v=2pKrSEVk-Uk",
    questionsUrl: "https://www.mathsgenie.co.uk/resources/7-algebraic-fractions.pdf",
    solutionsUrl: "https://www.mathsgenie.co.uk/resources/7-algebraic-fractionsans.pdf"
  },
  { 
    name: "Algebraic Proof", 
    grade: "8+", 
    videoUrl: "https://www.youtube.com/watch?v=Ghzp37tHyxA",
    questionsUrl: "https://www.mathsgenie.co.uk/resources/8-algebraic-proof.pdf",
    solutionsUrl: "https://www.mathsgenie.co.uk/resources/8-algebraic-proofans.pdf"
  },
  { 
    name: "Circle Theorem Proofs", 
    grade: "8+", 
    videoUrl: "https://www.youtube.com/watch?v=CmprPWcLtlk",
    questionsUrl: "https://www.mathsgenie.co.uk/resources/8-circle-theorem-proofs.pdf",
    solutionsUrl: "https://www.mathsgenie.co.uk/resources/8-circle-theorem-proofsans.pdf"
  },
  { 
    name: "Completing the Square (Tricky ones!)", 
    grade: "8+", 
    videoUrl: "https://www.youtube.com/watch?v=panLC6EEV0U",
    questionsUrl: "https://www.mathsgenie.co.uk/resources/7-completing-the-square.pdf",
    solutionsUrl: "https://www.mathsgenie.co.uk/resources/7-completing-the-squareans.pdf"
  },
  { 
    name: "Equation of a Tangent to a Circle", 
    grade: "8+", 
    videoUrl: "https://www.youtube.com/watch?v=NHrb8N9oAUY",
    questionsUrl: "https://www.mathsgenie.co.uk/resources/8-equation-of-a-tangent.pdf",
    solutionsUrl: "https://www.mathsgenie.co.uk/resources/8-equation-of-a-tangentans.pdf"
  },
  { 
    name: "Non-linear Simultaneous Equations", 
    grade: "8+", 
    videoUrl: "https://www.youtube.com/watch?v=eEYreNDTvKQ",
    questionsUrl: "https://www.mathsgenie.co.uk/resources/8-non-linear-simultaneous-equations.pdf",
    solutionsUrl: "https://www.mathsgenie.co.uk/resources/8-non-linear-simultaneous-equationsans.pdf"
  },
  { 
    name: "Quadratic Inequalities", 
    grade: "8+", 
    videoUrl: "https://www.youtube.com/watch?v=8J_m-hMp8lY",
    questionsUrl: "https://www.mathsgenie.co.uk/resources/8-quadratic-inequalities.pdf",
    solutionsUrl: "https://www.mathsgenie.co.uk/resources/8-quadratic-inequalitiesans.pdf"
  },
  { 
    name: "Rationalise the Denominator", 
    grade: "8+", 
    videoUrl: "https://www.youtube.com/watch?v=t1Pg0Ar52-k",
    questionsUrl: "https://www.mathsgenie.co.uk/resources/8-rationalising-the-denominator.pdf",
    solutionsUrl: "https://www.mathsgenie.co.uk/resources/8-rationalising-the-denominatorans.pdf"
  },
  { 
    name: "Speed Time Graphs", 
    grade: "8+", 
    videoUrl: "https://www.youtube.com/watch?v=UsmhVCjfzYQ",
    questionsUrl: "https://www.mathsgenie.co.uk/resources/7-velocity-time-graphs.pdf",
    solutionsUrl: "https://www.mathsgenie.co.uk/resources/7-velocity-time-graphsans.pdf"
  },
  { 
    name: "Transformations of Graphs", 
    grade: "8+", 
    videoUrl: "https://www.youtube.com/watch?v=ctVr9NpSiL4",
    questionsUrl: "https://www.mathsgenie.co.uk/resources/7-transformations-of-graphs.pdf",
    solutionsUrl: "https://www.mathsgenie.co.uk/resources/7-transformations-of-graphsans.pdf"
  },
  { 
    name: "Vectors (Higher)", 
    grade: "8+", 
    videoUrl: "https://www.youtube.com/watch?v=yNetkoIj1aY",
    questionsUrl: "https://www.mathsgenie.co.uk/resources/8-vectors.pdf",
    solutionsUrl: "https://www.mathsgenie.co.uk/resources/8-vectorsans.pdf"
  },
  { 
    name: "3D Trig and Pythagoras", 
    grade: "8+", 
    videoUrl: "https://www.youtube.com/watch?v=yy9ZcophKJc",
    questionsUrl: "https://www.mathsgenie.co.uk/resources/8-3d-trigonometry.pdf",
    solutionsUrl: "https://www.mathsgenie.co.uk/resources/8-3d-trigonometryans.pdf"
  },

  // Grade 7
  { 
    name: "Algebraic Fractions (Operations)", 
    grade: "7", 
    videoUrl: "https://www.youtube.com/watch?v=YtHMjuB9f_g",
    questionsUrl: "https://www.mathsgenie.co.uk/resources/7-algebraic-fractions.pdf",
    solutionsUrl: "https://www.mathsgenie.co.uk/resources/7-algebraic-fractionsans.pdf"
  },
  { 
    name: "Area of a Triangle (Using Trig)", 
    grade: "7", 
    videoUrl: "https://www.youtube.com/watch?v=hu4t3NuSk2w",
    questionsUrl: "https://www.mathsgenie.co.uk/resources/7-area-of-a-triangle.pdf",
    solutionsUrl: "https://www.mathsgenie.co.uk/resources/7-area-of-a-triangleans.pdf"
  },
  { 
    name: "Calculating with Surds", 
    grade: "7", 
    videoUrl: "https://www.youtube.com/watch?v=I_Mys8RNt30",
    questionsUrl: "https://www.mathsgenie.co.uk/resources/7-surds.pdf",
    solutionsUrl: "https://www.mathsgenie.co.uk/resources/7-surdsans.pdf"
  },
  { 
    name: "Circle Theorems", 
    grade: "7", 
    videoUrl: "https://www.youtube.com/watch?v=jYkl3mSLCPw",
    questionsUrl: "https://www.mathsgenie.co.uk/resources/6-circle-theorems.pdf",
    solutionsUrl: "https://www.mathsgenie.co.uk/resources/6-circle-theoremsans.pdf"
  },
  { 
    name: "Completing the Square", 
    grade: "7", 
    videoUrl: "https://www.youtube.com/watch?v=KFsBty-q0fg",
    questionsUrl: "https://www.mathsgenie.co.uk/resources/7-completing-the-square.pdf",
    solutionsUrl: "https://www.mathsgenie.co.uk/resources/7-completing-the-squareans.pdf"
  },
  { 
    name: "Composite Functions", 
    grade: "7", 
    videoUrl: "https://www.youtube.com/watch?v=Dp7lK3ZAQRg",
    questionsUrl: "https://www.mathsgenie.co.uk/resources/7-composite-and-inverse-functions.pdf",
    solutionsUrl: "https://www.mathsgenie.co.uk/resources/7-composite-and-inverse-functionsans.pdf"
  },
  { 
    name: "Conditional Probability", 
    grade: "7", 
    videoUrl: "https://www.youtube.com/watch?v=ibINrxJLvlM",
    questionsUrl: "https://www.mathsgenie.co.uk/resources/7-conditional-probability.pdf",
    solutionsUrl: "https://www.mathsgenie.co.uk/resources/7-conditional-probabilityans.pdf"
  },
  { 
    name: "Cosine Rule", 
    grade: "7", 
    videoUrl: "https://www.youtube.com/watch?v=Jci0I7fHnC4",
    questionsUrl: "https://www.mathsgenie.co.uk/resources/7-cosine-rule.pdf",
    solutionsUrl: "https://www.mathsgenie.co.uk/resources/7-cosine-ruleans.pdf"
  },
  { 
    name: "Drawing Histograms", 
    grade: "7", 
    videoUrl: "https://www.youtube.com/watch?v=g7Jnrf0g2tQ",
    questionsUrl: "https://www.mathsgenie.co.uk/resources/6-histograms.pdf",
    solutionsUrl: "https://www.mathsgenie.co.uk/resources/6-histogramsans.pdf"
  },
  { 
    name: "Equations of Perpendicular Lines", 
    grade: "7", 
    videoUrl: "https://www.youtube.com/watch?v=nlxg2I8OHq8",
    questionsUrl: "https://www.mathsgenie.co.uk/resources/6-parallel-and-perpendicular-lines.pdf",
    solutionsUrl: "https://www.mathsgenie.co.uk/resources/6-parallel-and-perpendicular-linesans.pdf"
  },
  { 
    name: "Find a Turning Point by completing the square", 
    grade: "7", 
    videoUrl: "https://www.youtube.com/watch?v=7xE5pj9-n1Q",
    questionsUrl: "https://www.mathsgenie.co.uk/resources/7-completing-the-square.pdf",
    solutionsUrl: "https://www.mathsgenie.co.uk/resources/7-completing-the-squareans.pdf"
  },
  { 
    name: "Functions and Equations", 
    grade: "7", 
    videoUrl: "https://www.youtube.com/playlist?list=PLCkAjxP1zN64-Og902CF_gFybL20fsvM5",
    questionsUrl: "https://www.mathsgenie.co.uk/resources/7-functions.pdf",
    solutionsUrl: "https://www.mathsgenie.co.uk/resources/7-functionsans.pdf"
  },
  { 
    name: "Interpreting Histograms", 
    grade: "7", 
    videoUrl: "https://www.youtube.com/watch?v=g7Jnrf0g2tQ",
    questionsUrl: "https://www.mathsgenie.co.uk/resources/6-histograms.pdf",
    solutionsUrl: "https://www.mathsgenie.co.uk/resources/6-histogramsans.pdf"
  },
  { 
    name: "Inverse Functions", 
    grade: "7", 
    videoUrl: "https://www.youtube.com/watch?v=EdQYcAsu7wA",
    questionsUrl: "https://www.mathsgenie.co.uk/resources/7-composite-and-inverse-functions.pdf",
    solutionsUrl: "https://www.mathsgenie.co.uk/resources/7-composite-and-inverse-functionsans.pdf"
  },
  { 
    name: "Iteration", 
    grade: "7", 
    videoUrl: "https://www.youtube.com/watch?v=QGJjN3OGL84",
    questionsUrl: "https://www.mathsgenie.co.uk/resources/7-iteration.pdf",
    solutionsUrl: "https://www.mathsgenie.co.uk/resources/7-iterationans.pdf"
  },
  { 
    name: "Proportionality (Direct/Inverse)", 
    grade: "7", 
    videoUrl: "https://www.youtube.com/watch?v=o9VuZhCqR2U",
    questionsUrl: "https://www.mathsgenie.co.uk/resources/7-direct-and-inverse-proportion.pdf",
    solutionsUrl: "https://www.mathsgenie.co.uk/resources/7-direct-and-inverse-proportionans.pdf"
  },
  { 
    name: "Recurring Decimals to Fractions", 
    grade: "7", 
    videoUrl: "https://www.youtube.com/watch?v=K5FhK9Nc4bY",
    questionsUrl: "https://www.mathsgenie.co.uk/resources/6-recurring-decimals.pdf",
    solutionsUrl: "https://www.mathsgenie.co.uk/resources/6-recurring-decimalsans.pdf"
  },
  { 
    name: "Sequences - Quadratic nth term", 
    grade: "7", 
    videoUrl: "https://www.youtube.com/watch?v=QGJjN3OGL84",
    questionsUrl: "https://www.mathsgenie.co.uk/resources/7-quadratic-sequences.pdf",
    solutionsUrl: "https://www.mathsgenie.co.uk/resources/7-quadratic-sequencesans.pdf"
  },
  { 
    name: "Similar Areas/Volumes", 
    grade: "7", 
    videoUrl: "https://www.youtube.com/watch?v=o9VuZhCqR2U",
    questionsUrl: "https://www.mathsgenie.co.uk/resources/6-similar-shapes2.pdf",
    solutionsUrl: "https://www.mathsgenie.co.uk/resources/similarshapes2ans.pdf"
  },
  { 
    name: "Sine Rule", 
    grade: "7", 
    videoUrl: "https://www.youtube.com/watch?v=3qwP-zMfCDw",
    questionsUrl: "https://www.mathsgenie.co.uk/resources/7-sine-rule.pdf",
    solutionsUrl: "https://www.mathsgenie.co.uk/resources/7-sine-ruleans.pdf"
  },
  { 
    name: "Solving Quadratics By Completing the Square", 
    grade: "7", 
    videoUrl: "https://www.youtube.com/watch?v=fMAJVHC2fyc",
    questionsUrl: "https://www.mathsgenie.co.uk/resources/7-completing-the-square.pdf",
    solutionsUrl: "https://www.mathsgenie.co.uk/resources/7-completing-the-squareans.pdf"
  },
  { 
    name: "Surds and Brackets", 
    grade: "7", 
    videoUrl: "https://www.youtube.com/watch?v=auYQ38gjJzk",
    questionsUrl: "https://www.mathsgenie.co.uk/resources/7-surds.pdf",
    solutionsUrl: "https://www.mathsgenie.co.uk/resources/7-surdsans.pdf"
  },
  { 
    name: "The Quadratic Formula", 
    grade: "7", 
    videoUrl: "https://www.youtube.com/watch?v=q64qaxLAR9U",
    questionsUrl: "https://www.mathsgenie.co.uk/resources/7-quadratic-formula.pdf",
    solutionsUrl: "https://www.mathsgenie.co.uk/resources/7-quadratic-formulaans.pdf"
  },
  { 
    name: "Trigonometric Graphs", 
    grade: "7", 
    videoUrl: "https://www.youtube.com/watch?v=QGJjN3OGL84",
    questionsUrl: "https://www.mathsgenie.co.uk/resources/7-trigonometric-graphs.pdf",
    solutionsUrl: "https://www.mathsgenie.co.uk/resources/7-trigonometric-graphsans.pdf"
  },
  { 
    name: "Upper and Lower Bounds", 
    grade: "7", 
    videoUrl: "https://www.youtube.com/watch?v=QGJjN3OGL84",
    questionsUrl: "https://www.mathsgenie.co.uk/resources/7-bounds.pdf",
    solutionsUrl: "https://www.mathsgenie.co.uk/resources/7-boundsans.pdf"
  },

  // Grade 6
  { 
    name: "Box Plots and Quartiles", 
    grade: "6", 
    videoUrl: "https://www.youtube.com/watch?v=QGJjN3OGL84",
    questionsUrl: "https://www.mathsgenie.co.uk/resources/6-box-plots.pdf",
    solutionsUrl: "https://www.mathsgenie.co.uk/resources/6-box-plotsans.pdf"
  },
  { 
    name: "Capture-Recapture", 
    grade: "6", 
    videoUrl: "https://www.youtube.com/watch?v=QGJjN3OGL84",
    questionsUrl: "https://www.mathsgenie.co.uk/papers/stats/CaptureRecapture.pdf",
    solutionsUrl: "https://www.mathsgenie.co.uk/papers/stats/CaptureRecaptureans.pdf"
  },
  { 
    name: "Cumulative Frequency Diagrams", 
    grade: "6", 
    videoUrl: "https://www.youtube.com/watch?v=QGJjN3OGL84",
    questionsUrl: "https://www.mathsgenie.co.uk/resources/6-cumulative-frequency.pdf",
    solutionsUrl: "https://www.mathsgenie.co.uk/resources/6-cumulative-frequencyans.pdf"
  },
  { 
    name: "Enlargements (Negative Scale Factor)", 
    grade: "6", 
    videoUrl: "https://www.youtube.com/watch?v=QGJjN3OGL84",
    questionsUrl: "https://www.mathsgenie.co.uk/resources/6-enlargement-negative-scale-factor.pdf",
    solutionsUrl: "https://www.mathsgenie.co.uk/resources/6-enlargement-negative-scale-factorans.pdf"
  },
  { 
    name: "Equation of a Circle", 
    grade: "6", 
    videoUrl: "https://www.youtube.com/watch?v=dBIlCD_JF9Q",
    questionsUrl: "https://www.mathsgenie.co.uk/resources/7-equation-of-a-circle.pdf",
    solutionsUrl: "https://www.mathsgenie.co.uk/resources/7-equation-of-a-circleans.pdf"
  },
  { 
    name: "Expanding Triple Brackets", 
    grade: "6", 
    videoUrl: "https://www.youtube.com/watch?v=QGJjN3OGL84",
    questionsUrl: "https://www.mathsgenie.co.uk/resources/6-expanding-triple-brackets.pdf",
    solutionsUrl: "https://www.mathsgenie.co.uk/resources/6-expanding-triple-bracketsans.pdf"
  },
  { 
    name: "Fractional Indices", 
    grade: "6", 
    videoUrl: "https://www.youtube.com/watch?v=Nfa9LxBzFr0",
    questionsUrl: "https://www.mathsgenie.co.uk/resources/6-fractional-and-negative-indices.pdf",
    solutionsUrl: "https://www.mathsgenie.co.uk/resources/6-fractional-and-negative-indicesans.pdf"
  },
  { 
    name: "Function Notation", 
    grade: "6", 
    videoUrl: "https://www.youtube.com/watch?v=QGJjN3OGL84",
    questionsUrl: "https://www.mathsgenie.co.uk/resources/7-functions.pdf",
    solutionsUrl: "https://www.mathsgenie.co.uk/resources/7-functionsans.pdf"
  },
  { 
    name: "Inequalities and Regions", 
    grade: "6", 
    videoUrl: "https://www.youtube.com/watch?v=5Lr96TAhUck",
    questionsUrl: "https://www.mathsgenie.co.uk/resources/6-inequalities-regions.pdf",
    solutionsUrl: "https://www.mathsgenie.co.uk/resources/6-inequalities-regionsans.pdf"
  },

  // Grade 5
  { 
    name: "Angles in Polygons", 
    grade: "5", 
    videoUrl: "https://www.youtube.com/watch?v=QGJjN3OGL84",
    questionsUrl: "https://www.mathsgenie.co.uk/resources/4-angles-in-polygons.pdf",
    solutionsUrl: "https://www.mathsgenie.co.uk/resources/4-angles-in-polygonsans.pdf"
  },
  { 
    name: "Averages from Grouped Frequency Tables", 
    grade: "5", 
    videoUrl: "https://www.youtube.com/watch?v=QGJjN3OGL84",
    questionsUrl: "https://www.mathsgenie.co.uk/resources/5-averages-from-grouped-data.pdf",
    solutionsUrl: "https://www.mathsgenie.co.uk/resources/5-averages-from-grouped-dataaans.pdf"
  },
  { 
    name: "Bearings", 
    grade: "5", 
    videoUrl: "https://www.youtube.com/watch?v=QGJjN3OGL84",
    questionsUrl: "https://www.mathsgenie.co.uk/resources/4-bearings.pdf",
    solutionsUrl: "https://www.mathsgenie.co.uk/resources/4-bearingsans.pdf"
  },
  { 
    name: "Compound Interest", 
    grade: "5", 
    videoUrl: "https://www.youtube.com/watch?v=QGJjN3OGL84",
    questionsUrl: "https://www.mathsgenie.co.uk/resources/4-compound-interest.pdf",
    solutionsUrl: "https://www.mathsgenie.co.uk/resources/4-compound-interestans.pdf"
  },
  { 
    name: "Equation of a line (y = mx + c)", 
    grade: "5", 
    videoUrl: "https://www.youtube.com/watch?v=bOzYAhsO-g4",
    questionsUrl: "https://www.mathsgenie.co.uk/resources/5-equation-of-a-line.pdf",
    solutionsUrl: "https://www.mathsgenie.co.uk/resources/5-equation-of-a-lineans.pdf"
  },
  { 
    name: "Equations (Unknowns on both sides)", 
    grade: "5", 
    videoUrl: "https://www.youtube.com/watch?v=4z6v8fU371A",
    questionsUrl: "https://www.mathsgenie.co.uk/resources/4-forming-and-solving-equations.pdf",
    solutionsUrl: "https://www.mathsgenie.co.uk/resources/4-forming-and-solving-equationsans.pdf"
  },
  { 
    name: "Equations of Parallel Lines", 
    grade: "5", 
    videoUrl: "https://www.youtube.com/watch?v=xw22VahNnEs",
    questionsUrl: "https://www.mathsgenie.co.uk/resources/6-parallel-and-perpendicular-lines.pdf",
    solutionsUrl: "https://www.mathsgenie.co.uk/resources/6-parallel-and-perpendicular-linesans.pdf"
  },
  { 
    name: "Error Intervals", 
    grade: "5", 
    videoUrl: "https://www.youtube.com/watch?v=QGJjN3OGL84",
    questionsUrl: "https://www.mathsgenie.co.uk/resources/3-error-intervals.pdf",
    solutionsUrl: "https://www.mathsgenie.co.uk/resources/3-error-intervalsans.pdf"
  },
  { 
    name: "Exact Trig Values", 
    grade: "5", 
    videoUrl: "https://www.youtube.com/watch?v=wBX0YXKThBs",
    questionsUrl: "https://www.mathsgenie.co.uk/resources/5-exact-trig-values.pdf",
    solutionsUrl: "https://www.mathsgenie.co.uk/resources/5-exact-trig-valuesans.pdf"
  },
  { 
    name: "Loci", 
    grade: "5", 
    videoUrl: "https://www.youtube.com/watch?v=QGJjN3OGL84",
    questionsUrl: "https://www.mathsgenie.co.uk/resources/4-loci-and-construction.pdf",
    solutionsUrl: "https://www.mathsgenie.co.uk/resources/4-loci-and-constructionans.pdf"
  },
  { 
    name: "Percentage Change", 
    grade: "5", 
    videoUrl: "https://www.youtube.com/watch?v=QGJjN3OGL84",
    questionsUrl: "https://www.mathsgenie.co.uk/resources/3-percentage-change.pdf",
    solutionsUrl: "https://www.mathsgenie.co.uk/resources/3-percentage-changeans.pdf"
  },
  { 
    name: "Probability Tree Diagrams", 
    grade: "5", 
    videoUrl: "https://www.youtube.com/watch?v=QGJjN3OGL84",
    questionsUrl: "https://www.mathsgenie.co.uk/resources/5-probability-trees.pdf",
    solutionsUrl: "https://www.mathsgenie.co.uk/resources/5-probability-treesans.pdf"
  },
  { 
    name: "Quadratic Graphs", 
    grade: "5", 
    videoUrl: "https://www.youtube.com/watch?v=QGJjN3OGL84",
    questionsUrl: "https://www.mathsgenie.co.uk/resources/5-quadratic-graphs.pdf",
    solutionsUrl: "https://www.mathsgenie.co.uk/resources/5-quadratic-graphsans.pdf"
  },
  { 
    name: "Reverse Mean", 
    grade: "5", 
    videoUrl: "https://www.youtube.com/watch?v=QGJjN3OGL84",
    questionsUrl: "https://www.mathsgenie.co.uk/resources/5-reverse-mean.pdf",
    solutionsUrl: "https://www.mathsgenie.co.uk/resources/5-reverse-meanans.pdf"
  },
  { 
    name: "Reverse Percentages", 
    grade: "5", 
    videoUrl: "https://www.youtube.com/watch?v=5Lr96TAhUck",
    questionsUrl: "https://www.mathsgenie.co.uk/resources/5-reverse-percentages.pdf",
    solutionsUrl: "https://www.mathsgenie.co.uk/resources/5-reverse-percentagesans.pdf"
  },
  { 
    name: "Sectors (Area/Arc Length)", 
    grade: "5", 
    videoUrl: "https://www.youtube.com/watch?v=j45UN4RrmwA",
    questionsUrl: "https://www.mathsgenie.co.uk/resources/5-sector-area-and-arc-length.pdf",
    solutionsUrl: "https://www.mathsgenie.co.uk/resources/5-sector-area-and-arc-lengthans.pdf"
  },
  { 
    name: "Sets and Venn Diagrams", 
    grade: "5", 
    videoUrl: "https://www.youtube.com/watch?v=QGJjN3OGL84",
    questionsUrl: "https://www.mathsgenie.co.uk/resources/5-venn-diagrams.pdf",
    solutionsUrl: "https://www.mathsgenie.co.uk/resources/5-venn-diagramsans.pdf"
  },
  { 
    name: "Similar Triangles", 
    grade: "5", 
    videoUrl: "https://www.youtube.com/watch?v=QGJjN3OGL84",
    questionsUrl: "https://www.mathsgenie.co.uk/resources/5-similar-shapes.pdf",
    solutionsUrl: "https://www.mathsgenie.co.uk/resources/5-similar-shapesans.pdf"
  },
  { 
    name: "Simultaneous Equations", 
    grade: "5", 
    videoUrl: "https://www.youtube.com/watch?v=dBIlCD_JF9Q",
    questionsUrl: "https://www.mathsgenie.co.uk/resources/5-simultaneous-equations.pdf",
    solutionsUrl: "https://www.mathsgenie.co.uk/resources/5-simultaneous-equationsans.pdf"
  },
  { 
    name: "Standard Form", 
    grade: "5", 
    videoUrl: "https://www.youtube.com/watch?v=QGJjN3OGL84",
    questionsUrl: "https://www.mathsgenie.co.uk/resources/5-standard-form.pdf",
    solutionsUrl: "https://www.mathsgenie.co.uk/resources/5-standard-formans.pdf"
  },
  { 
    name: "Trigonometry - SOHCAHTOA", 
    grade: "5", 
    videoUrl: "https://www.youtube.com/watch?v=QGJjN3OGL84",
    questionsUrl: "https://www.mathsgenie.co.uk/resources/5-SOHCAHTOA.pdf",
    solutionsUrl: "https://www.mathsgenie.co.uk/resources/5-SOHCAHTOAans.pdf"
  },
  { 
    name: "Volume and Surface Area of Cones", 
    grade: "5", 
    videoUrl: "https://www.youtube.com/watch?v=QGJjN3OGL84",
    questionsUrl: "https://www.mathsgenie.co.uk/resources/5-spheres-and-cones.pdf",
    solutionsUrl: "https://www.mathsgenie.co.uk/resources/5-spheres-and-conesans.pdf"
  },
  { 
    name: "Volume and Surface Area of Cylinders", 
    grade: "5", 
    videoUrl: "https://www.youtube.com/watch?v=QGJjN3OGL84",
    questionsUrl: "https://www.mathsgenie.co.uk/resources/4-cylinders.pdf",
    solutionsUrl: "https://www.mathsgenie.co.uk/resources/4-cylindersans.pdf"
  },
  { 
    name: "Volume and Surface Area of Prisms", 
    grade: "5", 
    videoUrl: "https://www.youtube.com/watch?v=QGJjN3OGL84",
    questionsUrl: "https://www.mathsgenie.co.uk/resources/4-volume-of-a-prism.pdf",
    solutionsUrl: "https://www.mathsgenie.co.uk/resources/4-volume-of-a-prismans.pdf"
  },
  { 
    name: "Volume and Surface Area of Pyramids", 
    grade: "5", 
    videoUrl: "https://www.youtube.com/watch?v=QGJjN3OGL84",
    questionsUrl: "https://www.mathsgenie.co.uk/resources/5-spheres-and-cones.pdf",
    solutionsUrl: "https://www.mathsgenie.co.uk/resources/5-spheres-and-conesans.pdf"
  },
  { 
    name: "Volume and Surface Area of Spheres", 
    grade: "5", 
    videoUrl: "https://www.youtube.com/watch?v=QGJjN3OGL84",
    questionsUrl: "https://www.mathsgenie.co.uk/resources/5-spheres-and-cones.pdf",
    solutionsUrl: "https://www.mathsgenie.co.uk/resources/5-spheres-and-conesans.pdf"
  },

  // Grade 4
  { 
    name: "Averages from Frequency Tables", 
    grade: "4", 
    videoUrl: "https://www.youtube.com/watch?v=QGJjN3OGL84",
    questionsUrl: "https://www.mathsgenie.co.uk/resources/4-averages-from-frequency-tables.pdf",
    solutionsUrl: "https://www.mathsgenie.co.uk/resources/4-averages-from-frequency-tablesans.pdf"
  },
  { 
    name: "Compound Shapes", 
    grade: "4", 
    videoUrl: "https://www.youtube.com/watch?v=QGJjN3OGL84",
    questionsUrl: "https://www.mathsgenie.co.uk/resources/37_area-of-compound-shapes.pdf",
    solutionsUrl: "https://www.mathsgenie.co.uk/resources/37_area-of-compound-shapesans.pdf"
  },
  { 
    name: "Diagram Sequences", 
    grade: "4", 
    videoUrl: "https://www.youtube.com/watch?v=QGJjN3OGL84",
    questionsUrl: "https://www.mathsgenie.co.uk/resources/4-sequences.pdf",
    solutionsUrl: "https://www.mathsgenie.co.uk/resources/4-sequencesans.pdf"
  },
  { 
    name: "Drawing Straight Line Graphs", 
    grade: "4", 
    videoUrl: "https://www.youtube.com/watch?v=bOzYAhsO-g4",
    questionsUrl: "https://www.mathsgenie.co.uk/resources/3-linear-graphs.pdf",
    solutionsUrl: "https://www.mathsgenie.co.uk/resources/3-linear-graphsans.pdf"
  },
  { 
    name: "Enlargements", 
    grade: "4", 
    videoUrl: "https://www.youtube.com/watch?v=QGJjN3OGL84",
    questionsUrl: "https://www.mathsgenie.co.uk/resources/3-enlargements.pdf",
    solutionsUrl: "https://www.mathsgenie.co.uk/resources/3-enlargementsans.pdf"
  },
  { 
    name: "HCF and LCM", 
    grade: "4", 
    videoUrl: "https://www.youtube.com/watch?v=QGJjN3OGL84",
    questionsUrl: "https://www.mathsgenie.co.uk/resources/4-HCF-and-LCM.pdf",
    solutionsUrl: "https://www.mathsgenie.co.uk/resources/4-HCF-and-LCMans.pdf"
  },
  { 
    name: "Linear Equations (with fractions)", 
    grade: "4", 
    videoUrl: "https://www.youtube.com/watch?v=4z6v8fU371A",
    questionsUrl: "https://www.mathsgenie.co.uk/resources/4-forming-and-solving-equations.pdf",
    solutionsUrl: "https://www.mathsgenie.co.uk/resources/4-forming-and-solving-equationsans.pdf"
  },
  { 
    name: "Prime Factorisation", 
    grade: "4", 
    videoUrl: "https://www.youtube.com/watch?v=QGJjN3OGL84",
    questionsUrl: "https://www.mathsgenie.co.uk/resources/4-HCF-and-LCM.pdf",
    solutionsUrl: "https://www.mathsgenie.co.uk/resources/4-HCF-and-LCMans.pdf"
  },
  { 
    name: "Reflections", 
    grade: "4", 
    videoUrl: "https://www.youtube.com/watch?v=QGJjN3OGL84",
    questionsUrl: "https://www.mathsgenie.co.uk/resources/3-reflections.pdf",
    solutionsUrl: "https://www.mathsgenie.co.uk/resources/3-reflectionsans.pdf"
  },
  { 
    name: "Rotations", 
    grade: "4", 
    videoUrl: "https://www.youtube.com/watch?v=QGJjN3OGL84",
    questionsUrl: "https://www.mathsgenie.co.uk/resources/3-rotations.pdf",
    solutionsUrl: "https://www.mathsgenie.co.uk/resources/3-rotationsans.pdf"
  },
  { 
    name: "Sequences - nth term", 
    grade: "4", 
    videoUrl: "https://www.youtube.com/watch?v=QGJjN3OGL84",
    questionsUrl: "https://www.mathsgenie.co.uk/resources/4-sequences.pdf",
    solutionsUrl: "https://www.mathsgenie.co.uk/resources/4-sequencesans.pdf"
  },
  { 
    name: "Similar Shapes", 
    grade: "4", 
    videoUrl: "https://www.youtube.com/watch?v=QGJjN3OGL84",
    questionsUrl: "https://www.mathsgenie.co.uk/resources/5-similar-shapes.pdf",
    solutionsUrl: "https://www.mathsgenie.co.uk/resources/5-similar-shapesans.pdf"
  },
  { 
    name: "Solving Inequalities", 
    grade: "4", 
    videoUrl: "https://www.youtube.com/watch?v=YJYhHQGopMQ",
    questionsUrl: "https://www.mathsgenie.co.uk/resources/4-inequalities.pdf",
    solutionsUrl: "https://www.mathsgenie.co.uk/resources/4-inequalitiesans.pdf"
  },
  { 
    name: "Translations", 
    grade: "4", 
    videoUrl: "https://www.youtube.com/watch?v=QGJjN3OGL84",
    questionsUrl: "https://www.mathsgenie.co.uk/resources/3-translations.pdf",
    solutionsUrl: "https://www.mathsgenie.co.uk/resources/3-translationsans.pdf"
  },
  { 
    name: "Types of Sequences", 
    grade: "4", 
    videoUrl: "https://www.youtube.com/watch?v=QGJjN3OGL84",
    questionsUrl: "https://www.mathsgenie.co.uk/resources/4-sequences.pdf",
    solutionsUrl: "https://www.mathsgenie.co.uk/resources/4-sequencesans.pdf"
  },

  // Grade 3
  { 
    name: "Area and Circumference", 
    grade: "3", 
    videoUrl: "https://www.youtube.com/watch?v=j45UN4RrmwA",
    questionsUrl: "https://www.mathsgenie.co.uk/resources/3-circles-area-and-circumference.pdf",
    solutionsUrl: "https://www.mathsgenie.co.uk/resources/3-circles-area-and-circumferenceans.pdf"
  },
  { 
    name: "Area of Shapes", 
    grade: "3", 
    videoUrl: "https://www.youtube.com/watch?v=QGJjN3OGL84",
    questionsUrl: "https://www.mathsgenie.co.uk/resources/2-area-and-perimeter.pdf",
    solutionsUrl: "https://www.mathsgenie.co.uk/resources/2-area-and-perimeterans.pdf"
  },
  { 
    name: "Constructions", 
    grade: "3", 
    videoUrl: "https://www.youtube.com/watch?v=QGJjN3OGL84",
    questionsUrl: "https://www.mathsgenie.co.uk/resources/4-loci-and-construction.pdf",
    solutionsUrl: "https://www.mathsgenie.co.uk/resources/4-loci-and-constructionans.pdf"
  },
  { 
    name: "Drawing Pie Charts", 
    grade: "3", 
    videoUrl: "https://www.youtube.com/watch?v=QGJjN3OGL84",
    questionsUrl: "https://www.mathsgenie.co.uk/resources/3-pie-charts.pdf",
    solutionsUrl: "https://www.mathsgenie.co.uk/resources/3-pie-chartsans.pdf"
  },
  { 
    name: "Frequency Polygons", 
    grade: "3", 
    videoUrl: "https://www.youtube.com/watch?v=QGJjN3OGL84",
    questionsUrl: "https://www.mathsgenie.co.uk/resources/2-frequency-polygons.pdf",
    solutionsUrl: "https://www.mathsgenie.co.uk/resources/2-frequency-polygonsans.pdf"
  },
  { 
    name: "Increasing/Decreasing by a Percentage", 
    grade: "3", 
    videoUrl: "https://www.youtube.com/watch?v=QGJjN3OGL84",
    questionsUrl: "https://www.mathsgenie.co.uk/resources/3-percentages.pdf",
    solutionsUrl: "https://www.mathsgenie.co.uk/resources/3-percentagesans.pdf"
  },
  { 
    name: "Inequality Diagrams", 
    grade: "3", 
    videoUrl: "https://www.youtube.com/watch?v=5Lr96TAhUck",
    questionsUrl: "https://www.mathsgenie.co.uk/resources/4-inequalities.pdf",
    solutionsUrl: "https://www.mathsgenie.co.uk/resources/4-inequalitiesans.pdf"
  },
  { 
    name: "Linear Equations (2 step and Brackets)", 
    grade: "3", 
    videoUrl: "https://www.youtube.com/watch?v=4z6v8fU371A",
    questionsUrl: "https://www.mathsgenie.co.uk/resources/3-solving-equations.pdf",
    solutionsUrl: "https://www.mathsgenie.co.uk/resources/3-solving-equationsans.pdf"
  },
  { 
    name: "Ordering Fractions", 
    grade: "3", 
    videoUrl: "https://www.youtube.com/watch?v=QGJjN3OGL84",
    questionsUrl: "https://www.mathsgenie.co.uk/resources/2-writing-simplifying-and-ordering-fractions.pdf",
    solutionsUrl: "https://www.mathsgenie.co.uk/resources/2-writing-simplifying-and-ordering-fractionsans.pdf"
  },
  { 
    name: "Sequences - Generating", 
    grade: "3", 
    videoUrl: "https://www.youtube.com/watch?v=QGJjN3OGL84",
    questionsUrl: "https://www.mathsgenie.co.uk/resources/4-sequences.pdf",
    solutionsUrl: "https://www.mathsgenie.co.uk/resources/4-sequencesans.pdf"
  },
  { 
    name: "Stem and Leaf Diagrams", 
    grade: "3", 
    videoUrl: "https://www.youtube.com/watch?v=QGJjN3OGL84",
    questionsUrl: "https://www.mathsgenie.co.uk/resources/2-stem-and-leaf-diagrams.pdf",
    solutionsUrl: "https://www.mathsgenie.co.uk/resources/2-stem-and-leaf-diagramsans.pdf"
  },
  { 
    name: "Volume and Surface Area of Cuboids", 
    grade: "3", 
    videoUrl: "https://www.youtube.com/watch?v=QGJjN3OGL84",
    questionsUrl: "https://www.mathsgenie.co.uk/resources/4-surface-area.pdf",
    solutionsUrl: "https://www.mathsgenie.co.uk/resources/4-surface-areaans.pdf"
  },

  // Grade 2
  { 
    name: "Working with Ratio", 
    grade: "2", 
    videoUrl: "https://www.youtube.com/watch?v=QGJjN3OGL84",
    questionsUrl: "https://www.mathsgenie.co.uk/resources/3-sharing-ratio.pdf",
    solutionsUrl: "https://www.mathsgenie.co.uk/resources/3-sharing-ratioans.pdf"
  },
  { 
    name: "Percentage of an Amount", 
    grade: "2", 
    videoUrl: "https://www.youtube.com/watch?v=6Ra9Sc3fS1M",
    questionsUrl: "https://www.mathsgenie.co.uk/resources/3-percentages.pdf",
    solutionsUrl: "https://www.mathsgenie.co.uk/resources/3-percentagesans.pdf"
  },
  { 
    name: "Averages and the Range", 
    grade: "2", 
    videoUrl: "https://www.youtube.com/watch?v=QGJjN3OGL84",
    questionsUrl: "https://www.mathsgenie.co.uk/resources/2-averages.pdf",
    solutionsUrl: "https://www.mathsgenie.co.uk/resources/2-averagesans.pdf"
  },
  { 
    name: "Sequences - Term to term Rule", 
    grade: "2", 
    videoUrl: "https://www.youtube.com/watch?v=QGJjN3OGL84",
    questionsUrl: "https://www.mathsgenie.co.uk/resources/4-sequences.pdf",
    solutionsUrl: "https://www.mathsgenie.co.uk/resources/4-sequencesans.pdf"
  },
  { 
    name: "Write and Simplify Ratios", 
    grade: "2", 
    videoUrl: "https://www.youtube.com/watch?v=QGJjN3OGL84",
    questionsUrl: "https://www.mathsgenie.co.uk/resources/3-writing-and-simplifying-ratio.pdf",
    solutionsUrl: "https://www.mathsgenie.co.uk/resources/3-writing-and-simplifying-ratioans.pdf"
  },

  // Grade 1
  { 
    name: "Linear Equations (one step)", 
    grade: "1", 
    videoUrl: "https://www.youtube.com/watch?v=4z6v8fU371A",
    questionsUrl: "https://www.mathsgenie.co.uk/resources/3-solving-one-step-equations.pdf",
    solutionsUrl: "https://www.mathsgenie.co.uk/resources/3-solving-one-step-equationsans.pdf"
  },
];

export default function GCSEEdexcel({ onBack }: { onBack: () => void }) {
  const [search, setSearch] = useState("");
  const [selectedGrades, setSelectedGrades] = useState<string[]>([]);

  const filteredTopics = TOPICS.filter(topic => {
    const matchesSearch = topic.name.toLowerCase().includes(search.toLowerCase());
    const matchesGrade = selectedGrades.length === 0 || selectedGrades.includes(topic.grade);
    return matchesSearch && matchesGrade;
  });

  const toggleGrade = (grade: string) => {
    setSelectedGrades(prev => 
      prev.includes(grade) ? prev.filter(g => g !== grade) : [...prev, grade]
    );
  };

  const grades = ["8+", "7", "6", "5", "4", "3", "2", "1"];

  return (
    <div className="min-h-screen bg-white pb-20">
      {/* Navigation */}
      <div className="bg-[#3498db] p-4 flex items-center gap-4 text-white">
        <button onClick={onBack} className="hover:bg-white/10 p-2 rounded-full transition-colors">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-xl font-bold">GCSE Revision (Edexcel)</h1>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Booklet Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <a 
            href="https://www.1stclassmaths.com/_files/ugd/9f3fb0_7f4e332e9ee34e54bc4d1810ec108e2d.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between bg-[#3498db] text-white p-6 rounded-lg shadow-lg hover:bg-[#2980b9] transition-all group"
          >
            <div className="text-left">
              <h2 className="text-2xl font-bold">The Ultimate Foundation</h2>
              <p className="text-xl">Revision Booklet</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-0 h-0 border-t-[15px] border-t-transparent border-l-[25px] border-l-white border-b-[15px] border-b-transparent group-hover:translate-x-2 transition-transform" />
              <div className="bg-red-600 p-3 rounded flex flex-col items-center">
                <FileText className="w-8 h-8" />
                <span className="text-[10px] font-bold">PDF</span>
              </div>
            </div>
          </a>

          <a 
            href="https://www.1stclassmaths.com/_files/ugd/9f3fb0_7c9b3f07eb934c26bc9fee56346be737.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between bg-[#3498db] text-white p-6 rounded-lg shadow-lg hover:bg-[#2980b9] transition-all group"
          >
            <div className="text-left">
              <h2 className="text-2xl font-bold">The Ultimate Higher</h2>
              <p className="text-xl">Revision Booklet</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-0 h-0 border-t-[15px] border-t-transparent border-l-[25px] border-l-white border-b-[15px] border-b-transparent group-hover:translate-x-2 transition-transform" />
              <div className="bg-red-600 p-3 rounded flex flex-col items-center">
                <FileText className="w-8 h-8" />
                <span className="text-[10px] font-bold">PDF</span>
              </div>
            </div>
          </a>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input 
              type="text"
              placeholder="Search for topics here..."
              className="w-full pl-10 pr-4 py-3 border-2 border-[#3498db] rounded focus:outline-none focus:ring-2 focus:ring-[#3498db]/20"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-[#3498db] font-bold text-sm">Filter by Grade</span>
            <div className="flex flex-wrap gap-2">
              {grades.map(grade => (
                <button
                  key={grade}
                  onClick={() => toggleGrade(grade)}
                  className={`w-8 h-8 flex items-center justify-center rounded text-white font-bold text-sm transition-all ${
                    selectedGrades.includes(grade) ? 'bg-[#2980b9] scale-110' : 'bg-[#3498db] hover:bg-[#2980b9]'
                  }`}
                >
                  {grade}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Topics Table */}
        <div className="overflow-x-auto border border-[#3498db] rounded">
          <table className="w-full text-left border-collapse">
            <thead className="bg-[#3498db] text-white">
              <tr>
                <th className="p-4 border-r border-white/20">Topic</th>
                <th className="p-4 border-r border-white/20 text-center">Video Explanation</th>
                <th className="p-4 border-r border-white/20 text-center">Exam Questions</th>
                <th className="p-4 border-r border-white/20 text-center">Solutions</th>
                <th className="p-4 text-center">Grade</th>
              </tr>
            </thead>
            <tbody>
              {filteredTopics.map((topic, idx) => (
                <tr key={idx} className="border-b border-[#3498db]/20 hover:bg-blue-50 transition-colors">
                  <td className="p-4 border-r border-[#3498db]/20 font-bold text-[#3498db]">{topic.name}</td>
                  <td className="p-4 border-r border-[#3498db]/20 text-center">
                    <a 
                      href={topic.videoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:scale-110 transition-transform inline-block"
                    >
                      <img 
                        src="https://static.wixstatic.com/media/9f3fb0_134b96c2706f423fae833562af058b88~mv2.png/v1/fit/w_157,h_50/9f3fb0_134b96c2706f423fae833562af058b88~mv2.png" 
                        alt="Video Explanation" 
                        className="h-8 w-auto"
                        referrerPolicy="no-referrer"
                      />
                    </a>
                  </td>
                  <td className="p-4 border-r border-[#3498db]/20 text-center">
                    {topic.questionsUrl ? (
                      <a 
                        href={topic.questionsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-red-600 text-white p-2 rounded hover:scale-110 transition-transform inline-flex flex-col items-center"
                      >
                        <FileText className="w-6 h-6" />
                        <span className="text-[8px] font-bold">PDF</span>
                      </a>
                    ) : (
                      <button className="bg-gray-400 text-white p-2 rounded cursor-not-allowed inline-flex flex-col items-center">
                        <FileText className="w-6 h-6" />
                        <span className="text-[8px] font-bold">PDF</span>
                      </button>
                    )}
                  </td>
                  <td className="p-4 border-r border-[#3498db]/20 text-center">
                    {topic.solutionsUrl ? (
                      <a 
                        href={topic.solutionsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-red-600 text-white p-2 rounded hover:scale-110 transition-transform inline-flex flex-col items-center"
                      >
                        <FileText className="w-6 h-6" />
                        <span className="text-[8px] font-bold">PDF</span>
                      </a>
                    ) : (
                      <button className="bg-gray-400 text-white p-2 rounded cursor-not-allowed inline-flex flex-col items-center">
                        <FileText className="w-6 h-6" />
                        <span className="text-[8px] font-bold">PDF</span>
                      </button>
                    )}
                  </td>
                  <td className="p-4 text-center">
                    <div className="inline-block border-4 border-black p-1 font-bold text-2xl leading-none">
                      {topic.grade}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
