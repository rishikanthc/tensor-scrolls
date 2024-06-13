---
title: 'Chronos: Learning the Language of Time Series'
sub: 'LLMs for Time Series'
tags: ['time-series', 'DeepLearning']
abstract: 'We introduce Chronos, a simple yet effective framework for pretrained probabilistic time
series models. Chronos tokenizes time series values using scaling and quantization into
a fixed vocabulary and trains existing transformer-based language model architectures on
these tokenized time series via the cross-entropy loss'
venue: ['arXiv preprint']
authors: ['Ansari', 'Abdul Fatir', 'and Stella, Lorenzo', 'and Turkmen, Caner', 'and Zhang, Xiyuan', 'and Mercado, Pedro', 'and Shen, Huibin', 'and Shchur, Oleksandr', 'and Rangapuram', 'Syama Syndar', 'and Pineda Arango, Sebastian', 'and Kapoor, Shubham', 'and Zschiegner, Jasper', 'and Maddix, Danielle C.', 'and Mahoney', 'Michael W.', and Torkkola, Kari', 'and Gordon Wilson, Andrew', 'and Bohlke-Schneider, Michael', 'and Wang, Yuyang']
---

## What is this paper addressing? What problem are the authors trying to solve?

This paper addresses the problem of developing generalist pretrained time series forecasting models. The authors aim to create a model that can be trained once on a large and diverse corpus of time series data and then applied in a zero-shot manner to new datasets, without requiring dataset-specific fine-tuning or architecture modifications.

## What is the related work in this area? What is the SoTA? How does the authors' work differ from these existing works?

Related work includes:

- Traditional statistical models like ARIMA and ETS
- Deep learning models like DeepAR, TFT, N-BEATS, etc. that are trained on individual datasets
- Recent work on zero-shot forecasting and transfer learning
- Concurrent work on pretraining transformer models on large time series corpora

The authors' work differs in taking a minimalist approach - they adapt existing language model architectures with minimal modifications (just tokenization) and avoid time-series specific architectures or features. Their model operates on a fixed vocabulary of tokens rather than real values.

## What is their high-level methodology. What are the key intuitions or any assumptions made?

Their high-level methodology, called Chronos, involves:

1. Tokenizing time series values into a fixed vocabulary using scaling and quantization
2. Training standard language models (encoder-decoder or decoder-only) on these tokens using a standard categorical cross-entropy loss
3. For inference, autoregressively sampling tokens and mapping them back to real values

Key intuitions:

- Language models trained to predict the next token should work well for time series if values are appropriately discretized
- Using a categorical output allows learning flexible distributions
- Data augmentation techniques and synthetic data can improve performance, especially for zero-shot generalization

## How do they evaluate their approach? What are the baselines they compare to? What evaluation metrics do they use? Are there any key insights behind the performance achieved?

They evaluate on 42 datasets split into:

- Benchmark I (15 datasets): Used for both training and evaluation, testing in-domain performance
- Benchmark II (27 datasets): Only used for evaluation, testing zero-shot performance

Baselines compared include:

- Local statistical models like ARIMA, ETS, Theta
- Task-specific deep learning models like DeepAR, TFT, N-BEATS trained on each dataset
- Other pretrained models like ForecastPFN, GPT4TS

Evaluation metrics:

- Weighted quantile loss (WQL) for probabilistic forecasts
- Mean absolute scaled error (MASE) for point forecasts

Key performance insights:

- Larger Chronos models significantly outperform baselines on in-domain benchmark
- On zero-shot benchmark, Chronos is competitive with dataset-specific deep learning models and outperforms other zero-shot methods
- Finetuning Chronos on individual datasets leads to further gains
- Data augmentation and synthetic data improve zero-shot performance
