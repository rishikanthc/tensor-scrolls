---
title: 'AutoGluon–TimeSeries: AutoML for Probabilistic Time Series Forecasting'
sub: 'Probablistic time series forecasting using AutoML'
venue: ['arXiv preprint']
tags: ['AutoML', 'TimeSeries', 'DeepLearning']
abstract: 'We introduce AutoGluon-TimeSeries - an open-source AutoML library for probabilistic time series forecasting. Focused on ease of use and robustness, AutoGluon-TimeSeries enables users to generate accurate point and quantile forecasts with just 3 lines of Python code. Built on the design philosophy of AutoGluon, AutoGluon-TimeSeries leverages ensembles of diverse forecasting models to deliver high accuracy within a short training time.'
authors:
  [
    'Oleksandr Shchur, ',
    'Caner Turkmen, ',
    'Nick Erickson, ',
    'Huibin Shen, ',
    'Alexander Shirkov, ',
    'Tony Hu, ',
    'Yuyang Wang, '
  ]
---

## what is this paper addressing ? What problem are the authors trying to solve ?

This paper introduces AutoGluon-TimeSeries (AG-TS), an open-source AutoML library for probabilistic time series forecasting. The key problems/issues it aims to address are:

Providing an automated solution for generating accurate point forecasts and quantile/probabilistic forecasts for collections of univariate time series data. This makes time series forecasting more accessible to users without extensive domain expertise.
Combining the strengths of various statistical forecasting models, machine learning models like deep neural networks, and ensemble techniques in a unified framework to achieve high forecasting accuracy.
Allowing users to generate high-quality forecasts with just a few lines of Python code, following AutoGluon's design philosophy of ease-of-use and robustness.
Enabling self-supervised pre-training of forecasting models on unlabeled data to learn useful representations that can then be fine-tuned for specific forecasting tasks.
Providing a versatile framework that can handle static and time-varying covariates along with the target time series and support different forecasting scenarios like cold-start prediction.

In essence, AG-TS aims to democratize and streamline the process of probabilistic time series forecasting by automating the training, validation and ensembling of diverse forecasting techniques within a user-friendly AutoML system.

## what is the related work in this area ? what is the SoA ? How does the authors work differ from these existing works ?

The authors discuss several lines of related work in the paper:

### Time Series Forecasting and Automated Forecasting:

- Early influential work includes the forecast package in R which introduced AutoETS and AutoARIMA models that automatically tune parameters like trend and seasonality.
- There has been increasing focus on deep learning models for time series forecasting like DeepAR, N-BEATS, Temporal Fusion Transformers.
- Some works have explored combining such neural models with AutoML techniques for automated forecasting pipelines.
- Other approaches optimize the entire forecasting pipeline including preprocessing and feature engineering steps.

**In terms of available software/libraries:**
The authors mention a few open-source AutoML forecasting libraries like AutoPyTorch-Forecasting, AutoTS, and PyCaret's forecasting module.

However, the authors note that existing automated forecasting frameworks tend to focus only on point forecasting without considering uncertainty estimates. They also often lack ease-of-use by requiring more extensive coding.
The key differences of AutoGluon-TimeSeries from prior work are:

- Supporting probabilistic forecasting to generate prediction intervals/quantiles along with point forecasts.
- Providing an extremely easy-to-use API where users can get forecasts with just 3 lines of Python code.
- Combining a diverse suite of conventional statistical models, deep learning models, and tabular regression-based forecasters within an ensemble.
- Leveraging self-supervised pre-training of models on unlabeled data before fine-tuning on the target forecasting task.

So while building on previous model architectures, AutoGluon-TimeSeries differentiates itself by its user-friendly API, end-to-end automation, inherent uncertainty quantification, and combination of various forecasting paradigms through ensembling. The authors position it as a versatile yet accessible AutoML solution for probabilistic time series forecasting.

## What is their high level methodology ? How do they do AutoML ? What models do they use for probabilistic forecasting ? How do they combine these models ?

**AutoML Approach**

AutoGluon-TimeSeries follows an AutoML approach, automating the training, validation, and ensembling of various forecasting models. The key steps are:

1. **Data Preparation**: Load data into a `TimeSeriesDataFrame` object, which stores collections of univariate time series and associated covariates.

2. **Task Definition**: Create a `TimeSeriesPredictor` object, specifying the prediction length, quantile levels of interest, and evaluation metric.

3. **Model Fitting**: The `fit()` method preprocesses data, trains multiple models using cross-validation, optionally performs HPO on selected models, and trains an ensemble.

4. **Prediction Generation**: The `predict()` method generates point and quantile forecasts on new data using the trained ensemble.

**Forecasting Models**

AG-TS combines three families of forecasting models:

1. **Local Statistical Models**: Conventional methods like ARIMA, ETS, Theta, and simple baselines like Seasonal Naive. Each model is fit separately to individual time series.

2. **Global Deep Learning Models**: Neural architectures like DeepAR, PatchTST, Temporal Fusion Transformer. A single model is fit globally on all time series data.

3. **Global Tabular Models**: Techniques like LightGBM that convert the forecasting task into a tabular regression problem before training a global model.

**Ensembling Strategy**

The forecasts from the individual models are combined using a forward selection algorithm to create an ensemble. The ensemble output is a convex combination of model predictions, with weights optimized for the chosen evaluation metric (e.g., MASE for point forecasts, wQL for quantile forecasts).

**Key Intuitions and Assumptions**

1. **Ensembles Over HPO**: AG-TS relies more on ensembling diverse models rather than extensive HPO of individual models to achieve robust performance.

2. **Shared Representations**: The channel-independent architecture used in PatchTST allows learning shared representations across different time series while modeling variable-specific dynamics.

3. **Self-Supervision Utility**: Self-supervised pre-training on unlabeled data can learn useful representations that transfer well to the downstream forecasting task.

The main assumption is that combining the inductive biases of different model families (statistical, deep learning, regression-based) through ensembling leads to better overall forecasting accuracy compared to any individual model class.

## How do they evaluate their method ? What datasets do they use ? What metrics do they use for evaluation ?

**Evaluation**

They evaluate their approach on both supervised long-term multivariate time series forecasting as well as self-supervised representation learning tasks.

**Datasets**

- 29 publicly available benchmark datasets from sources like the Monash Forecasting Repository (M1, M3, M4 competitions)
- Datasets cover various scenarios - small datasets, long time series, large collections of medium series

**Baselines**
For supervised forecasting:

- Statistical models: AutoARIMA, AutoETS, AutoTheta, StatEnsemble (median of the three)
- Deep learning models: DeepAR, Temporal Fusion Transformer (TFT)
- AutoML framework: AutoPyTorch-Forecasting

For self-supervised learning:

- Contrastive methods: BTSF, TS2Vec, TNC, TS-TCC

**Evaluation Metrics**

- Point forecast accuracy: Mean Absolute Scaled Error (MASE)
- Probabilistic forecast accuracy: Mean weighted Quantile Loss (wQL) averaged over 9 quantile levels

**Key Insights**

1. AG-TS outperforms all baselines on average for both point and probabilistic forecasts, even beating the best individual baseline on 19/29 datasets.

2. Simple statistical ensembles (StatEnsemble) are strong baselines, especially in low-data regimes.

3. AG-TS tends to outperform AutoPyTorch on larger datasets by effectively combining lightweight models under time constraints.

4. Deep learning models like DeepAR/TFT excel at probabilistic forecasting but can underperform for point forecasts compared to statistical approaches.

5. Self-supervised pre-training provides substantial gains over supervised training from scratch on large datasets.

6. Ensembling is crucial, with ablations showing larger accuracy drops when disabling the ensemble step compared to removing entire model classes.

7. AG-TS achieves high accuracy under practical time budgets, avoiding extremely long runtimes of some statistical models on long time series.

Overall, the strong performance is attributed to the effective combination of diverse models through ensembling and leveraging self-supervised pre-training, enabled by AG-TS's design choices.
