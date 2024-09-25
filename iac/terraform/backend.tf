terraform {
  backend "s3" {
    bucket = "techstarter-tom-iac"
    key    = "ec2-example/ec2.tfstate"
    region = "eu-central-1"
  }
}