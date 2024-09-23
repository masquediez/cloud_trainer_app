provider "aws" {
  region = "eu-central-1"
}

# Importiere die VPC-ID und die öffentlichen Subnet-IDs aus dem VPC-Deployment
data "terraform_remote_state" "vpc" {
  backend = "s3"
  config = {
    bucket = "ansible-exercises" # Hier Bucketnamen der VPC-tfstate eintragen
    key    = "ansible-exercise/vpc.tfstate"
    region = "eu-central-1"
  }
}

# Erstelle eine Security Group, die HTTP-Zugriff zulässt
resource "aws_security_group" "http" {
  vpc_id = data.terraform_remote_state.vpc.outputs.vpc_id

  # öffnet eingehend HTTP
  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  # öffnet eingehend SSH
  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  # öffnet ausgehend alles
  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name = "allow-http-ssh"
  }
}



# Erstelle eine EC2-Instance
resource "aws_instance" "web" {
  count = var.instance_count

  ami                    = "ami-01e444924a2233b07" # Ubuntu Server 20.04 LTS für eu-central-1
  instance_type          = "t2.micro"
  subnet_id              = data.terraform_remote_state.vpc.outputs.public_subnet_id_1a # Nutzt ein öffentliches Subnetz
  vpc_security_group_ids = [aws_security_group.http.id]                                # Nutzt VPC-Security-Gruppen
  key_name               = var.key_name                                                # Hier AWS SSH-Key-Namen  eintragen                                            # Key-Namen eintragen

  tags = {
    Name = "Ansible-Exercise"
  }
}

# Output der Instance IP-Adresse
output "instance_ip" {
  value = aws_instance.web[*].public_ip
}