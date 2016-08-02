node {
    stage 'Checkout'

        // Checkout code from repository
        checkout scm

        // Download dependencies
        sh 'composer install --no-dev'
        sh 'npm install'

    stage 'Build'

        sh 'grunt --no-color'
        sh 'php app/server/index.php'
        sh 'grunt zip'

        echo "branch: ${BRANCH_NAME}"
}
