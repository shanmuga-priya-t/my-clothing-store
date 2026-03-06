pipeline {
    agent any

    stages {
        stage('Step 1: Code Checkout') {
            steps {
                // Unga GitHub repo-la irundhu code-ah Jenkins edukkum
                git 'https://github.com/shanmuga-priya-t/my-clothing-store.git'
            }
        }

        stage('Step 2: Build Docker Image') {
            steps {
                // Dockerfile vachchi image create pannum
                sh 'docker build -t clothing-app-image .'
            }
        }

        stage('Step 3: Deploy to AWS Server') {
            steps {
                // Pazhaya container-ah remove pannittu pudhusa run pannum
                sh 'docker stop clothing-container || true'
                sh 'docker rm clothing-container || true'
                sh 'docker run -d --name clothing-container -p 5000:5000 clothing-app-image'
            }
        }
    }
}