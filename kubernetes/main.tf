
module "eks" {
  source  = "terraform-aws-modules/eks/aws"
  version = "19.5.1"

  cluster_name    = "sandbox"
  cluster_version = "1.25"
  
  cluster_addons = {
    coredns = {
      preserve    = true
      most_recent = true

      timeouts = {
        create = "25m"
        delete = "10m"
      }
    }
    kube-proxy = {
      most_recent = true
    }
    vpc-cni = {
      most_recent = true
    }
  }
  iam_role_additional_policies = {
    additional = "arn:aws:iam::aws:policy/AmazonEC2FullAccess"
  }
  vpc_id                         = "vpc-0e355d290b274b86f"
  subnet_ids                     = ["subnet-050c9e36bda3e6b62","subnet-0bd81c09f00d0607a","subnet-03396584886320a18"]
  cluster_endpoint_public_access = true

  eks_managed_node_group_defaults = {
    ami_type = "AL2_x86_64"

  }

  eks_managed_node_groups = {
    one = {
      name = "node-group-1"

      instance_types = ["t3.large"]

      min_size     = 1
      max_size     = 2
      desired_size = 1
    }

    two = {
      name = "node-group-2"

      instance_types = ["t3.large"]

      min_size     = 1
      max_size     = 2
      desired_size = 1
    }
  }
}
########################################
terraform {
required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.47.0"
    }

    random = {
      source  = "hashicorp/random"
      version = "~> 3.4.3"
    }

    tls = {
      source  = "hashicorp/tls"
      version = "~> 4.0.4"
    }

    cloudinit = {
      source  = "hashicorp/cloudinit"
      version = "~> 2.2.0"
    }
  }

  required_version = "~> 1.3"
}

#########################################

output "cluster_endpoint" {
  description = "Endpoint for EKS control plane"
  value       = module.eks.cluster_endpoint
}

output "cluster_security_group_id" {
  description = "Security group ids attached to the cluster control plane"
  value       = module.eks.cluster_security_group_id
}


output "cluster_name" {
  description = "Kubernetes Cluster Name"
  value       = module.eks.cluster_name
}

#########################################

provider "aws" {
  region = "ap-south-1"
}
