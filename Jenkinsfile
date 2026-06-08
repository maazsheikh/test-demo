pipeline {
  agent any
  tools {
        nodejs 'Node26'   // must match the name you set in Tools
  }
  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }
    stage('Build') {
      steps {
        echo 'Building...'
        sh 'node --version'
      }
    }
    stage('Test') {
      steps { echo 'Tests passed!' }
    }
    stage('Deploy') {
      steps {
        sh 'docker build -t jenkins-demo .'
        echo 'Deployed!'
      }
    }
  }
  post {
    success { echo 'Pipeline SUCCESS!' }
    failure { echo 'Pipeline FAILED!' }
  }
}

