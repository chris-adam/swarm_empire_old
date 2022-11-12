pipeline {
   agent any
   tools {
      nodejs 'node-18-12'
   }
   stages {
      stage("Build") {
         steps {
            dir("client") {
                sh "npm install --global @angular/cli"
                sh "npm ci"
                sh "npm run build"
            }
         }
      }
      stage("Test") {
        steps {
            dir ("client") {
                warnError(message: "Frontend tests failed") {
                    sh "ng test --watch=false --browsers=ChromeHeadless --code-coverage=true"
                }
            }
        }
      }
      stage('SonarQube Analysis') {
         when { anyOf { branch 'main' ; branch "PR-*" } }
         environment {
            SCANNER_HOME = tool 'SonarScanner'
            PATH = "${env.SCANNER_HOME}/bin:${env.PATH}"
         }
         steps {
            withSonarQubeEnv('sonar') {
               sh 'sonar-scanner'
            }
            timeout(time: 3, unit: 'MINUTES') {
               waitForQualityGate abortPipeline: true
            }
         }
      }
      stage('Deploy') {
         when {
            branch 'deploy/*'
         }
        steps {
            echo "TODO"
        }
      }
   }
   post {
      unsuccessful {
         emailext to: "adam.chris@live.be",
                  recipientProviders: [requestor()],
                  subject: "[Jenkins] Swarm Game - Branch ${BRANCH_NAME} - Pipeline ${currentBuild.currentResult}",
                  body: "${env.RUN_DISPLAY_URL}"
      }
   }
}