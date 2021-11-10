# Glass Lewis Code Challenge 2021

## Introduction

# Prerequisite:

- Install nodejs and npm from the official website
- Install docker from the official website
  - pull down the latest cypress image
  ```commandline
  docker pull cypress/included:8.7.0  
  ```
- This includes two browsers(Chrome and Firefox) and the most important dependencies
- With terminal go into the project folder and type
  - npm install --save-dev cypress 
    - This will create a sample project
    - I deleted the unused files
This will create my docker image:
```commandline
docker build -t my-image:1.1.0 .
```

