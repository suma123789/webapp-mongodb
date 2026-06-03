pipeline {

    agent any

    environment {
        APP_NAME = "employee-webapp"
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build Backend') {
            steps {
                bat '''
                docker build ^
                -t employee-api:%BUILD_NUMBER% ^
                backend
                '''
            }
        }

        stage('Build Frontend') {
            steps {
                bat '''
                docker build ^
                -f frontend.Dockerfile ^
                -t employee-web:%BUILD_NUMBER% .
                '''
            }
        }

        stage('Deploy') {
            steps {
                bat '''
                docker-compose down
                docker-compose up -d --build
                '''
            }
        }

        stage('Health Check') {
            steps {
                bat '''
                curl http://localhost:8080
                '''
            }
        }
    }

    post {

        success {
            echo "Deployment Successful"
        }

        failure {
            echo "Deployment Failed"
        }
    }
}