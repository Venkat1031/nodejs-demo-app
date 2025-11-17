# Task 1: CI/CD Pipeline Using GitHub Actions

This project shows how to deploy a simple Node.js app using  
GitHub Actions + Docker + DockerHub.

## Objective
- Run CI/CD on every push to **main**
- Install dependencies
- Run tests
- Build Docker image
- Push image to DockerHub using GitHub Secrets

## Project Files
- server.js  
- package.json  
- Dockerfile  
- .github/workflows/main.yml  

## Docker Image
Image pushed to:
**venkat1031/nodejs-demo-app:latest**

## Run Locally
npm install  
npm start

## Run with Docker
docker pull venkat1031/nodejs-demo-app:latest  
docker run -p 3000:3000 venkat1031/nodejs-demo-app:latest

## Repository Link
https://github.com/Venkat1031/nodejs-demo-app
