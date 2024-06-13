---
title: 'A Time Series is Worth 64 Words: Long-term Forecasting with Transformers'
sub: 'A novel approach to time series forecasting'
authors: ['Yuqi Nie,', 'Nam H. Nguyen,', 'Phanwadee Sinthong,', 'Jayant Kalagnanam']
pubYear: 2023
venue: ['International Conference on Learning Representations']
tags: ['Time Series', 'Forecasting', 'Transformers']
abstract: 'Designing an efficient and effective Transformer-based model for multivariate time series forecasting that can capture long-range dependencies and local semantic information in the time series. '
---

## what is this paper addressing ? What problem are the authors trying to solve ?

This paper is addressing the problem of long-term multivariate time series forecasting and self-supervised representation learning for time series data. The key issues the authors are trying to solve are:

Designing an efficient and effective Transformer-based model for multivariate time series forecasting that can capture long-range dependencies and local semantic information in the time series.
Enabling the model to attend to longer historical context by reducing the computational complexity and memory usage compared to standard Transformer models.
Developing a self-supervised pre-training approach for learning good representations from unlabeled time series data that can be effectively transferred to downstream forecasting tasks.

**The main novelties proposed are:**

- Using patches of the time series as input tokens to the Transformer instead of individual time points. This allows capturing local patterns while reducing the sequence length.
- A channel-independent architecture where each univariate time series has its own embedding/attention mechanism, unlike mixing all variables into the Transformer input.
- A self-supervised pre-training approach based on randomly masking and reconstructing the patches of the time series.

The authors aim to show their proposed PatchTST model can improve long-term forecasting accuracy and learn better representations compared to previous Transformer models for time series.

## what is the related work in this area ? what is the SoA ? How does the authors work differ from these existing works ?

The authors discuss several lines of related work in the paper:

### Patching in Transformer Models:

- Using patches/subwords as input tokens instead of individual elements is a common practice in Transformer models across different domains like NLP (BERT), computer vision (ViT), and speech.
  Key related works cited include BERT, ViT, BEiT, and masked autoencoders.
- Transformer-based Long-Term Time Series Forecasting:

There has been a lot of recent work on applying Transformers for long-term time series forecasting like LogTrans, Informer, Autoformer, FEDformer, Pyraformer etc.
These mainly focus on designing sparse/efficient attention mechanisms to reduce complexity for long sequences.
However, most use point-wise/single time step inputs and do not leverage patching.

### Time Series Representation Learning:

- Several non-Transformer models have been proposed for self-supervised representation learning on time series data.
  The authors cite TS-TCC and TST as some initial Transformer-based attempts, but state the potential is not fully realized yet.

In terms of state-of-the-art (SoTA):
For supervised long-term forecasting, the authors cite DLinear as a recent very simple but powerful baseline that outperforms previous Transformer models on some benchmarks.
For self-supervised representation learning, no clear SoTA Transformer model is mentioned.

The key differences of the authors' work from existing literature are:

- Introducing the patching technique for time series data as input to Transformers.
- The channel-independent architecture treating each variable separately.
  - Combining patching and channel-independence for improved forecasting performance.
- A self-supervised pre-training approach using masked patch reconstruction.

So while building on previous ideas like patching from other domains, the novelty lies in adapting them effectively for multivariate time series forecasting and representation learning.

## What is their high level methodology. How does their method do patching ? How do they achieve a channel independent architecture ? How is the self-supervisiong done ?

Patching:

- Each univariate time series is divided into non-overlapping or overlapping subseries/patches of length P
- These patches are used as the input tokens to the Transformer instead of individual time points
- This allows capturing local patterns within the patches while reducing the input sequence length
- The intuition is that semantic information is better represented at the patch/subseries level rather than individual time points

Channel-Independent Architecture:

For multivariate data with M variables, typical Transformers combine all variables into one input vector/token
Instead, the authors treat each univariate series independently and pass it through a separate Transformer encoder
All univariate Transformer encoders share the same weights/architecture but the forward passes are parallelized
The assumption is that each variable can exhibit different dynamics/patterns, so allowing variable-specific attention is beneficial

Self-Supervision:

- They employ a masked patch reconstruction pre-training task similar to BERT
- A subset of input patches are randomly masked/set to zero values.
- The model is trained to reconstruct the masked/missing patches based on the visible context
  - This forces the model to learn broader semantic representations of the time series
- It avoids easily inferring masked points from adjacent values which can happen at single time step masking

Other Aspects:

- Instance normalization is applied to each univariate series before patching to mitigate distribution shifts
- Position embeddings are used to make the Transformer position-aware on the patches
- At finetuning, the pre-trained patch representations are mapped to forecasting outputs via a linear layer

The key intuitions seem to be:

- Localizing patterns into patches provides better semantic representations than individual points
- Allowing variable-specific attention is better suited for multivariate series with diverse dynamics
- Self-supervised pre-training can learn powerful representations that transfer well to downstream tasks

So in essence, they tailor the Transformer architecture for time series via patching and channel-independence, while leveraging self-supervision to learn generalizable representations in an unsupervised manner.

## how do they evaluate their approach ? What are the baselines they compare to ? What evaluation metrics do they use ? Are there any key insights behind the performance achieved ?

The authors evaluate their approach on both supervised long-term multivariate time series forecasting as well as self-supervised representation learning tasks.
For supervised forecasting evaluation:
Datasets:

They use 8 popular public benchmark datasets: Weather, Traffic, Electricity, ILI, and 4 ETT (Electric Transformer Temperature) datasets.

### Baselines:

They compare against several state-of-the-art Transformer-based models like FEDformer, Autoformer, Informer, Pyraformer, LogTrans.
They also include DLinear, a recent simple but powerful linear model, as a baseline.

### Metrics:

They use mean squared error (MSE) and mean absolute error (MAE) as evaluation metrics for forecasting performance.

### Key Insights:

- Their proposed PatchTST model outperforms all baselines, achieving 20.2% lower MSE and 16.4% lower MAE compared to the best Transformer baseline.
- Patching allows attending to longer historical context while reducing computation quadratically.
- Channel-independence allows capturing diverse dynamics across different variables.
- Instance normalization mitigates distribution shifts during testing.

For self-supervised representation learning:

- They apply a masked patch reconstruction pre-training objective similar to BERT.
- They evaluate the learned representations by fine-tuning on the forecasting task.
- Their self-supervised PatchTST outperforms supervised training from scratch on large datasets.
- They compare against other self-supervised methods like BTSF, TS2Vec, TNC, TS-TCC and show substantial gains.
- Representations learned on one dataset can be effectively transferred to other forecasting datasets.

Overall, the strong performance is attributed to the inductive biases introduced by patching and channel-independence which allow capturing longer-range patterns and variable-specific dynamics effectively, combined with self-supervised pre-training which learns powerful representations from unlabeled data.
