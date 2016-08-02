node {
    stage 'Checkout'

        // Checkout code from repository
        checkout scm

        // Download dependencies
        sh 'composer install --no-dev'
        sh 'npm install'

    stage 'Build'
        branch_name = "${sh '${BRANCH_NAME}'}"

        if (branch_name == 'master') {
            sh 'grunt --no-color'
            sh 'php app/server/index.php'
            sh 'grunt zip'
        } else {
            echo "Nao faz deploy do branch: ${branch_name}"
        }
}
