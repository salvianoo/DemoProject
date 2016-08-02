env.STACK_ID = '438473918743'
env.APP_ID = '69584069584'

node {
    stage 'Checkout'

        // Checkout code from repository
        checkout scm

        // Download dependencies
        sh 'composer install --no-dev'
        sh 'npm install'

        sh 'whoami'

    stage 'Build'
        branch_name = env.BRANCH_NAME

        sh 'grunt --no-color'
        sh 'php app/server/index.php'
        sh 'grunt zip'

        //echo "Nao faz deploy da branch: ${branch_name}"

    stage 'Deploy'

        if (branch_name == 'master') {

            // Upload para S3
            // sh 'aws s3 cp build-demo.zip s3://deploy-demo/ --region sa-east-1'

            // upload do .zip para s3
            // update url do s3 project_name-master-timestamp.zip na app OpsWorks
            // faz deploy no Global-Prod no opsworks StackId=prod (env.StackId)
        } else {
            // upload do .zip para s3
            // update url do s3 project_name-{branch_name}-timestamp.zip na app OpsWorks
            // faz deploy no Global-Staging no opsworks StackId=staging
        }
}