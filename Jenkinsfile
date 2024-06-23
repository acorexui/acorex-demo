pipeline {
    agent any
    stages {
        stage('Build docker') {
            steps {
                script {
                    sh 'docker-compose build'
                }
            }
        }
        stage('Deploy docker') {
            steps {
                sh 'docker-compose down'
                sh 'docker-compose up -d'
                cleanWs()
            }
        }
    }
}
