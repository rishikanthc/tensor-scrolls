---
title: 'E-QUARTIC: Energy Efficient Edge Ensemble of Convolutional Neural Networks for Resource-Optimized Learning'
date: 2021-10-10
authors: ['I. Gomez', 'X. Yu', 'T. Rosing']
venue: ['Neural Information Processing Systems']
pubYear: 2021
abstract: 'Semantic segmentation within LiDAR scans is crucial for scene comprehension in applications like autonomous driving and forestry studies.  Existing segmentation methods, mostly using neural networks (NNs), rely on a large quantity of real-world scans and annotated data to train. Moreover, previous approaches demand considerable computational resources for training deep NNs, which is unsuitable for edge devices with restricted resources. In response to the above challenges, we introduce HyperLiDAR, a new label- and energy-efficient segmentation framework for LiDAR scans using Hyperdimensional Computing (HDC).'
tags: ['lidar', 'segmentation', 'HDComputing']
---

## Idea 2: Learning representations for regions of point cloud data

Randomly sample a point from the point cloud data.
The context of a point is the set of $k$ closest points that are close to it
in the 3-D space. Let's assume that the points within a context would most likely belong
to the same class. It's a relaxed assumption yet a reasonable one.

The idea is to learn a representation for the context of a point. Given a point, we want to
learn a hypervector representation for the context of that point. Our decoder should be
able to recover the points in the context from the hypervector representation.

Let's encode a point as projecting it to a hypervector. The projection matrix should be
learned. Learn the covariance matrix for the projection matrix. This followed by cosine
activation should give us a hypervector representation for the point.

Encode all the points in the context of a point using the same learned projection.
Bind these hypervectors with id hypervectors (generated randomly) to indicate members of
the context. Next bundle these hypervectors to create a single hypervector representation
for the context. Now, learn a decoder that when given the point hypervector
representation, can recover the context hypervector representation. Use a cosine similarity
loss to train the decoder.

## Idea 1:

An auto-encoder seems like a nice architecture for this.
We are interested in learning the spatial patterns in point cloud data, represented as
$$x, y, z$$ coordinates.

Let's assume the lidar scans are a cube of size $n \times n \times n$.
The input to the auto-encoder is a cube of size $n \times n \times n$.
We move a sliding window in 3-D just like convolution and collect the points in the window.
Then project these points to a hypervector and bind them. The projection for the hypervector
should be learned.

- Particularly the covariance matrix used for sampling the projection matrix should be
  learned. We can then use this projection matrix to project the points in a window

Then bind the hypervectors to get a single hypervector for the window. This hypervector
carries the information that these coordinates appear together in the window. By considering
a sliding window at a time, just like convolution, we capture spatial neighborhood in a
translation invariant way.

This would provide a 2-D array of hypervectors. Stack these hypervectors to get a 3-D grid
of hypervectors of dimensions $(m, i, j, d)$ where $(m, i, j)$ is the coordinate of the patch
in the 3-D grid.

Here, a few different options are worth trying out.

## Option 1: Convolutional Auto-Encoder

## Option 2: Fractional encoding

Assuming holographic representations
