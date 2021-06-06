export const config = {
  "dev": {
    'username': "udagramprojectgd",
    'password': "udagramprojectgd",
    'database': "udagramprojectgd",
    'host': "udagramprojectgd.czwnd9cqqfoh.us-east-2.rds.amazonaws.com",
    'dialect': 'postgres',
    'aws_region': "us-east-2",
    'aws_profile': "udagramprojectgd",
    'aws_media_bucket': "project-bucket-gd",
    'url': "http://localhost:8080",
  },
  "prod": {
    "username": "",
    "password": "",
    "database": "udagramprojectgd",
    "host": "",
    "dialect": "postgres"
  },
  "jwt":{
    secret:"helloworld"

  }
}
