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
                tool 'Nodejs'

                // Install project dependencies using yarn
                sh 'npm i --legacy-peer-deps'
            }
        }
    stage('Build Docker') {
        steps {
            // Login to Docker registry
            docker.withRegistry('uditchauhan/astar8') {
                // Build the Docker image
                    docker.build()
                    }
            }
    }


        // stage('Build') {
        //     steps {
        //         // Build the React Native project
        //         sh 'cd android'
        //         sh './gradlew bundleRelease'
        //     }
        // }

        // stage('Test') {
        //     steps {
        //         // Run tests, if applicable
        //         // Modify this step according to your testing setup
        //         sh 'npm test'
        //     }
        // }

        // stage('Package APK') {
        //     steps {
        //         // Package the Android APK file
        //         sh 'npx react-native run-android --variant=release'
        //     }
        // }

        // stage('Archive APK') {
        //     steps {
        //         // Archive the APK file as an artifact
        //         archiveArtifacts artifacts: 'android/app/build/outputs/apk/release/*.apk', fingerprint: true
        //     }
        // }
    }
}
