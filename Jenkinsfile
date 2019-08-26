pipeline {
    agent any
    stages {
        stage('clone git-repo') {
            steps {
                sh "rm -rf mev-task"
                sh "git clone https://github.com/Valdemar23/mev-task.git"
            }
        }
        stage('checking in existing needed tools'){
            steps {
                sh "cd mev-task/web/nginx && docker-compose ps"
                sh "cd mev-task/ansible-playbooks && ansible -vvv -m ping aws-instances"
            }
        }
        stage('starting ansible-playbook which setup infrastructure'){
            steps {
                sh "cd mev-task/ansible-playbooks && ansible-playbook -vvv install-docker-ce.yml"
            }
        }
        stage('build docker-containers api/spa'){
            steps {
                sh "cd mev-task/api && docker build -t yourfriendbober/nginx_api ."
                sh "cd mev-task/web && docker build -t yourfriendbober/nginx_web ."
            }
        }
        stage('deploy api/spa'){
            steps {
                sh "cd mev-task/ansible-playbooks && ansible-playbook -vvv deploy.yml --extra-vars \"name_component=web tag_image=yourfriendbober/nginx_web password=xxx\""
                sh "cd mev-task/ansible-playbooks && ansible-playbook -vvv deploy.yml --extra-vars \"name_component=api tag_image=yourfriendbober/nginx_api password=xxx\""
            }
        }
    }
}
