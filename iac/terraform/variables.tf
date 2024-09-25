variable "aws_region" {
  description = "The AWS region to deploy resources"
  default     = "eu-central-1"
}

variable "aws_instance_type" {
  description = "AWS Instance Type"
  default     = "t2.micro"
}


variable "instance_ami" {
  description = "AWS AMI"
  default     = "ami-01e444924a2233b07"
}

variable "key_pair_id" {
  description = "Id for AWS Key Pair"
  default     = "tomschiffmann-ec2-sandbox"
}