---
title: 'PromptCast: A New Prompt-based Learning Paradigm for Time Series Forecasting'
sub: 'Leveraging prompts for time series forecasting'
authors: ['Hao Xue,', 'Flora D. Salim']
pubYear: 2023
tags: ['Time Series', 'Forecasting', 'Prompt-based Learning']
venue: ['International Conference on Machine Learning']
---

## What is this paper addressing? What problem are the authors trying to solve?

This paper proposes a novel paradigm called "PromptCast" for time series forecasting. The key problems addressed are:

1. Enabling the use of large language models for time series forecasting by transforming the numerical input and output into natural language prompts.

2. Providing a new "code-less" solution for time series forecasting that is more accessible and user-friendly compared to existing deep learning models.

3. Exploring the potential of using a single model (language model) across different time series forecasting tasks, rather than designing specialized models for each task.

4. Opening up new research directions and applications by leveraging the capabilities of large language models for time series forecasting.

The overarching goal is to investigate whether pre-trained language foundation models can be effectively adapted for the time series forecasting task by casting it as a natural language generation problem using prompts.

## What is the related work in this area? What is the SoA? How does the authors' work differ from these existing works?

**Related Work**:

- **Task-specific Learning**: Existing time series forecasting methods like ARIMA, LSTM, TCN, and Transformer-based models [cited] are designed for specific forecasting tasks and trained end-to-end on domain data.

- **In-modality Adaptation**: Time Series Pre-trained Models (TSPTMs) [cited] involve pre-training on time series data and then fine-tuning for specific tasks, similar to NLP and CV.

- **Cross-modality Adaptation**: Some works like Voice2Series [cited] explore adapting pre-trained models from other modalities like speech for time series tasks through fine-tuning or editing inputs.

**State-of-the-Art (SoA)**:

- For specialized forecasting tasks, models like PatchTST, ETSformer, FEDformer, and Autoformer represent SoA.
- For cross-modal adaptation of language models (LMs), GPT4TS and LLMTime are recent SoA approaches involving fine-tuning.

**Differences from Existing Works**:

1. PromptCast does not require fine-tuning the LM backbone, keeping it frozen during the proposed "reprogramming" process.

2. It reprograms time series data into text prototypes that are more natural for the LM, rather than direct input editing.

3. It uses natural language prompts to augment the LM's reasoning abilities for the forecasting task.

4. The authors demonstrate SoA performance across standard, few-shot, and zero-shot forecasting settings without task-specific training.

5. The work provides a general "reprogramming" paradigm to imbue LMs with new capabilities beyond their original pre-training.

## What is their high-level methodology. What are the key intuitions or any assumptions made ?

**High-Level Methodology**:

The authors investigate "reprogramming" pre-trained LMs as follows:

1. **Input Transformation**: Time series data is partitioned into univariate series, normalized, and divided into patches. These patches are embedded and reprogrammed using learned text prototypes to align with the LM's modality.

2. **Frozen LM**: A pre-trained LM like Llama or GPT-2 is used with its parameters frozen. No fine-tuning is performed.

3. **Prompt-as-Prefix (PaP)**: Natural language prompts containing domain knowledge, task instructions, and input statistics are prepended to the reprogrammed patches. This augments the LM's reasoning ability for the time series task.

4. **Output Projection**: The LM's output representations are projected to generate time series forecasts.

**Key Intuitions and Assumptions**:

1. Reprogramming the input modality aligns time series data with the LM's pre-training, enabling its capabilities to be leveraged for forecasting.

2. Natural language prompts provide declarative guidance to direct the LM's transformations on the reprogrammed input patches.

3. Keeping the LM backbone frozen allows efficient adaptation without extensive retraining or fine-tuning.

4. Combining statistical models, deep learning, and regression-based forecasters through the reprogrammed LM leads to better overall pattern manipulation capabilities compared to individual model classes.

The core assumption is that aligning time series data with the LM's modality and providing natural language guidance can effectively activate the LM's reasoning and few-shot transfer abilities for accurate and data-efficient forecasting across diverse tasks.

## How do they evaluate their approach? What are the baselines they compare to? What evaluation metrics do they use? Are there any key insights behind the performance achieved?

**Evaluation**:

The authors conduct comprehensive evaluations across three main tasks:

1. **Long-term Forecasting**:

   - Datasets: ETTh1, ETTh2, ETTm1, ETTm2, Weather, Electricity, Traffic, ILI
   - Baselines: PatchTST, GPT4TS, DLinear, TimesNet, FEDformer, Autoformer, and others
   - Metrics: Mean Squared Error (MSE), Mean Absolute Error (MAE)

2. **Short-term Forecasting**:

   - Dataset: M4 benchmark
   - Baselines: GPT4TS, TimesNet, PatchTST, N-HiTS, N-BEATS, and others
   - Metrics: Symmetric Mean Absolute Percentage Error (SMAPE), Mean Absolute Scaled Error (MASE), Overall Weighted Average (OWA)

3. **Few-shot and Zero-shot Forecasting**:
   - Datasets: Subsets of the above, used in limited data and cross-domain adaptation settings
   - Baselines: GPT4TS, LLMTime, DLinear, PatchTST, TimesNet
   - Metrics: MSE, MAE

**Key Insights**:

1. PromptCast consistently outperforms SOTA and specialized baselines across all tasks, achieving up to 12% MSE reduction in long-term forecasting and 8.7% improvement over the second-best in short-term forecasting.

2. The performance gains are more pronounced in few-shot (up to 20% over baselines) and zero-shot (up to 75% over LLMTime) settings, demonstrating the effective knowledge transfer and reasoning capabilities activated by the reprogramming approach.

3. Larger LM backbones, more text prototypes, and longer input context generally lead to better performance, in line with the scaling laws of pre-trained models.

4. Ablations show that both patch reprogramming and natural language prompts are crucial for aligning the modalities and augmenting the LM's time series reasoning abilities.

5. The reprogramming approach itself is lightweight and efficient, capped only by the LM backbone, while outperforming even parameter-efficient fine-tuning methods like QLoRA.

The strong performance is attributed to the effective combination of diverse forecasting paradigms through in-context learning in the reprogrammed LM, leveraging its reasoning capabilities while keeping the backbone frozen for efficiency.
