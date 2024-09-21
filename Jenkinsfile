/* Requires the Docker Pipeline plugin */
pipeline {
    agent { docker { image 'node:20.17.0-alpine3.20' } }
    stages {
        stage('build') {
            steps {
                sh 'node --version'
                sh 'echo "Hello World"'
                sh '''
                    echo "Multiline shell steps works too"
                    ls -lah
                '''
            }
        }
    }
}