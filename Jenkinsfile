pipeline {
    agent any
    
    environment {
        NODE_VERSION = "20.x" // Adjust based on the version your project needs
    }
    
    stages {
        stage('Install Node.js') {
            steps {
                script {
                    // Install the specified version of Node.js
                    sh '''
                    curl -sL https://deb.nodesource.com/setup_${NODE_VERSION} | bash -
                    sudo apt-get install -y nodejs
                    '''
                }
            }
        }
        
        stage('Checkout Code') {
            steps {
                // Clone the Angular project from GitHub
                git branch: 'master', url: 'https://github.com/amarhusain/deenijob-frontend.git'
            }
        }
        
        stage('Install Dependencies') {
            steps {
                // Install npm dependencies
                sh 'npm install'
            }
        }
        
        stage('Build Angular Application') {
            steps {
                // Build the Angular project
                sh 'npm run build --prod'
            }
        }
        
        stage('Archive Build Artifacts') {
            steps {
                // Archive the dist/ folder
                archiveArtifacts artifacts: 'dist/**/*', allowEmptyArchive: false
            }
        }
    }
    
    post {
        always {
            // Clean up workspace after build
            cleanWs()
        }
        success {
            echo 'Build completed successfully.'
        }
        failure {
            echo 'Build failed.'
        }
    }
}
