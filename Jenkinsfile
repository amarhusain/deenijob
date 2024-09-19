pipeline {
    agent any
    
    environment {
        // Set Node.js version (make sure Node is installed on the Jenkins server)
        NODE_VERSION = "20.x"  
    }
    
    stages {
        stage('Install Node.js') {
            steps {
                script {
                    // Install the desired version of Node.js
                    sh '''
                    curl -sL https://deb.nodesource.com/setup_${NODE_VERSION} | bash -
                    sudo apt-get install -y nodejs
                    '''
                }
            }
        }
        
        stage('Checkout Code') {
            steps {
                // Checkout the code from the repository
                git branch: 'main', url: 'https://github.com/your-repo/angular-project.git'
            }
        }
        
        stage('Install Dependencies') {
            steps {
                // Install Angular project dependencies
                sh 'npm install'
            }
        }
        
        stage('Build Angular App') {
            steps {
                // Build the Angular project
                sh 'npm run build --prod'
            }
        }

        stage('Archive Build') {
            steps {
                // Archive the build artifacts, like the 'dist' folder
                archiveArtifacts artifacts: 'dist/**/*', allowEmptyArchive: true
            }
        }
    }

    post {
        always {
            // Cleanup workspace after the build
            cleanWs()
        }

        success {
            echo 'Build was successful!'
        }

        failure {
            echo 'Build failed.'
        }
    }
}
