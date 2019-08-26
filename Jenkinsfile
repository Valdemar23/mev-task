pipeline {
    agent any
    stages {
        stage('Clone git-repo') {
            steps {
                sh "rm -rf mev-task"
                sh "git clone https://github.com/Valdemar23/mev-task.git"
            }
        }
        stage('Checking in existing needed tools'){
            steps {
                sh "cd mev-task/web/nginx && docker-compose ps"
                sh "cd mev-task/ansible-playbooks && ansible -vvv -m ping aws-instances"
            }
        }
        stage('Starting ansible-playbook which setup infrastructure'){
            steps {
                sh "cd mev-task/ansible-playbooks && ansible-playbook -vvv install-docker-ce.yml"
            }
        }
        stage('Build docker-containers API/SPA'){
            steps {
                sh "cd mev-task/api && docker build -t yourfriendbober/nginx_api ."
                sh "cd mev-task/web && docker build -t yourfriendbober/nginx_web ."
            }
        }
        stage('Push docker containers to DockerHub'){
            steps {
                sh "docker push yourfriendbober/nginx_api"
                sh "docker push yourfriendbober/nginx_web"
            }
        }
        stage('Deploy API/SPA'){
            steps {
                sh "cd mev-task/ansible-playbooks && ansible-playbook -vvv deploy.yml --extra-vars \"name_component=web tag_image=yourfriendbober/nginx_web password=xxx\""
                sh "cd mev-task/ansible-playbooks && ansible-playbook -vvv deploy.yml --extra-vars \"name_component=api tag_image=yourfriendbober/nginx_api password=xxx\""
            }
        }
    }
}
