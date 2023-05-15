pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Checkout the project code from version control
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                // Use Node.js installed on the Jenkins agent
                tool 'Node.js'

                // Install project dependencies using yarn
                sh 'yarn install'
            }
        }

        stage('Build') {
            steps {
                // Build the React Native project
                sh 'npx react-native build --platform android'
            }
        }

        stage('Test') {
            steps {
                // Run tests, if applicable
                // Modify this step according to your testing setup
                sh 'npm test'
            }
        }

        stage('Package APK') {
            steps {
                // Package the Android APK file
                sh 'npx react-native run-android --variant=release'
            }
        }

        stage('Archive APK') {
            steps {
                // Archive the APK file as an artifact
                archiveArtifacts artifacts: 'android/app/build/outputs/apk/release/*.apk', fingerprint: true
            }
        }
    }
}
