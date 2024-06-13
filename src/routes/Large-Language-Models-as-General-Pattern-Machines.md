---
title: 'Large Language Models as General Pattern Machines'
sub: 'using LLMs to learn general patterns in data'
abstract: 'The overarching goal is to characterize the inherent pattern manipulation capabilities of LLMs without additional training or fine-tuning, and investigate how these capabilities may be leveraged for various problems in robotics and sequential decision-making.'
authors:
  [
    'Suvir Mirchandani1,',
    'Fei Xia2,',
    'Pete Florence2,',
    'Brian Ichter2,',
    'Danny Driess2 3,',
    'Montserrat Gonzalez Arenas2,',
    'Kanishka Rao2,',
    'Dorsa Sadigh1 2,',
    'Andy Zeng2'
  ]
tags: ['Language Models', 'Pattern Learning', 'Generalization']
venue: ['Conference on Robot Learning']
pubYear: 2023
---

## What is this paper addressing? What problem are the authors trying to solve?

This paper explores the capabilities of pre-trained large language models (LLMs) to serve as general pattern machines, capable of recognizing, manipulating, and extrapolating abstract, non-linguistic patterns and sequences. Specifically, the authors investigate the following problems:

1. Assessing the zero-shot ability of LLMs to perform sequence transformations involving complex patterns, including those found in the Abstraction and Reasoning Corpus (ARC).

2. Evaluating the sequence completion capabilities of LLMs, i.e., their ability to extrapolate and continue patterns from simple functions (e.g., sinusoids) or kinesthetic demonstrations (e.g., wiping motions).

3. Exploring how sequence transformation and completion abilities can be combined for sequence improvement tasks in robotics, such as trajectory optimization or discovering control policies through online interaction with an environment.

The overarching goal is to characterize the inherent pattern manipulation capabilities of LLMs without additional training or fine-tuning, and investigate how these capabilities may be leveraged for various problems in robotics and sequential decision-making.

## What is the related work in this area? What is the SoA? How does the authors' work differ from these existing works?

**Related Work**:

- **In-Context Learning**: Works like [38, 39] have studied how LLMs can perform in-context learning by conditioning on few-shot examples. [43-48] provide various explanations and analyses of this phenomenon.

- **LLMs and Robotics**: Several works have applied LLMs for high-level planning, instruction following, and code generation in robotics [6-14]. However, directly influencing low-level control with LLMs remains an open problem.

- **Pattern Reasoning**: Prior works have developed methods based on program synthesis [21-24] or manual domain-specific languages [25-27] for the Abstraction and Reasoning Corpus (ARC). End-to-end machine learning approaches [28] have had limited success on the ARC.

**State-of-the-Art (SoA)**:

- For the ARC benchmark, the SoA is a brute-force search approach [23] that composes functions from a handcrafted API of grid operators, solving up to 130/800 problems.
- For sequence transformation capabilities, no clear SoA exists, as prior work has primarily focused on linguistic patterns rather than abstract sequences.

**Differences from Existing Works**:

1. The authors demonstrate that LLMs can solve a non-trivial number of ARC problems (up to 85/800) in a zero-shot manner, outperforming some recent program synthesis systems [21, 22, 24].

2. They introduce a new procedurally-generated benchmark (PCFG) to evaluate general sequence transformation capabilities of LLMs on adjustable-difficulty tasks.

3. The work explores using LLMs for sequence completion and improvement tasks in robotics, which has been largely unexplored in prior work.

4. The authors focus on characterizing the inherent pattern manipulation abilities of LLMs out-of-the-box, without additional training or fine-tuning, which is a novel perspective compared to previous works that develop specialized methods for specific benchmarks.

## Briefly explain their high-level methodology. What are the key intuitions or any assumptions made?

**High-Level Methodology**:

They investigate the inherent capabilities of pre-trained large language models (LLMs) as general pattern machines, without additional training or fine-tuning.

**Sequence Transformation**:

- They evaluate LLMs on the Abstraction and Reasoning Corpus (ARC) by prompting them with input-output examples encoded as token sequences (e.g., grids represented as digits).
- They introduce a new procedurally-generated benchmark (PCFG) to measure sequence transformation abilities on tasks of varying complexity.
- Key observation: LLMs exhibit token mapping invariance, i.e., they can solve some ARC/PCFG problems even when the tokens are randomly sampled from the vocabulary.

**Sequence Completion**:

- LLMs are prompted with partial sequences (e.g., samples from a sinusoidal function) and tasked with completing the pattern.
- This capability is applied to robotics tasks like extrapolating kinesthetic demonstrations for wiping motions or drawing patterns.

**Sequence Improvement**:

- LLMs generate new sequences conditioned on previous sequences, potentially labeled with rewards.
- This process can be iterative, enabling trajectory optimization or online in-context reinforcement learning.

**Key Intuitions and Assumptions**:

1. LLMs can serve as general pattern machines due to their ability to perform in-context learning on sequences of numeric or arbitrary tokens.
2. The patterns learned from Internet-scale language data may transfer to non-linguistic modalities or symbolic representations useful for robotics.
3. Combining sequence transformation and completion abilities enables basic forms of sequence improvement, which can drive low-level control or policy optimization.
4. The assumption is that ensembling the inductive biases of different model families (statistical, deep learning, regression-based) through in-context learning can lead to better overall pattern manipulation capabilities compared to individual model classes.

## How do they evaluate their approach? What are the baselines they compare to? What evaluation metrics do they use? Are there any key insights behind the performance achieved?

**Evaluation**

They evaluate their approach on three main tasks:

1. **Sequence Transformation**:

   - Datasets: Abstraction and Reasoning Corpus (ARC), Procedurally-generated PCFG benchmark
   - Baselines: Program synthesis methods [21, 22, 24], brute-force search [23], Kaggle competition winner [70]
   - Metric: Accuracy (% of problems correctly solved)

2. **Sequence Completion**:

   - Tasks: Extrapolating sinusoids, kinesthetic demonstrations (table wiping, whiteboard drawing)
   - Baselines: No explicit baselines, but compare LLM performance qualitatively and with a structure learning approach [90]
   - Metrics: Qualitative evaluation, Dynamic Time Warping (DTW) distance between predictions and ground truth

3. **Sequence Improvement**:
   - Tasks: Marker in Cup (trajectory optimization), Grid navigation (online RL), CartPole control, Human-guided trajectory optimization
   - Baselines: Random exploration
   - Metrics: Returns/rewards achieved over episodes or iterations

**Key Insights**:

1. LLMs outperform some existing systems on the ARC benchmark and exhibit non-trivial performance, despite not being specifically trained for this task.

2. Token mapping invariance suggests LLMs may possess general pattern manipulation capabilities beyond just linguistic patterns.

3. Larger LLMs and more context generally lead to better sequence completion and improvement performance.

4. LLMs can discover simple control policies (e.g., oscillations for CartPole) and adapt trajectories based on sparse rewards through online interaction.

5. Ensembling diverse models and leveraging self-supervised pre-training contribute to the strong performance of the proposed approach.

The authors attribute the promising results to the effective combination of statistical, deep learning, and regression-based models through in-context learning, as well as the ability to transfer patterns learned from language data to non-linguistic modalities and symbolic representations relevant for robotics.
