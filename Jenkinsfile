pipeline {
  agent any
  stages {
    stage('build') {
      steps {
        sh '''ssh vchdesign@vchdesign.ca \\
"cd ~/public_html/BOT-infographic;\\
git pull origin master;\\
npm i;\\
gulp build"'''
      }
    }
  }
}