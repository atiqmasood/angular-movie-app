#!/bin/bash

# Configuration
IMAGE_NAME="your-dockerhub-username/angular-movie-app"
VERSION="1.0.0"

# Build the image
echo "Building Docker image..."
docker build -t ${IMAGE_NAME}:${VERSION} .
docker tag ${IMAGE_NAME}:${VERSION} ${IMAGE_NAME}:latest

# Push to Docker Hub
echo "Pushing to Docker Hub..."
docker push ${IMAGE_NAME}:${VERSION}
docker push ${IMAGE_NAME}:latest

echo "Done! Image pushed to Docker Hub." 