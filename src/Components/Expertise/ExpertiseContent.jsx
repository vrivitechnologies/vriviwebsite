import { FaCode, FaServer, FaBrain, FaDatabase, FaEye, FaCloud } from "react-icons/fa";
import React  from "react";
export const expertiseData = [
  {
    id: "01",
    title: "Fullstack Development",
    description: "Java, J2EE, Python, GoLang, Nodejs, Angular, React, Typescript",
    icon: <FaCode size={30} />,
    color: "from-pink-500 to-red-500",
  },
  {
    id: "02",
    title: "DevOps",
    description: "Docker, Kubernetes, K3, Helm charts, Operators, Jenkins, Travis",
    icon: <FaServer size={30} />,
    color: "from-blue-500 to-indigo-500",
  },
  {
    id: "03",
    title: "Artificial Intelligence",
    description: "Pytorch, Scikit-learn, Tensorflow, Keras",
    icon: <FaBrain size={30} />,
    color: "from-purple-500 to-pink-500",
  },
  {
    id: "04",
    title: "Databases",
    description: "MySQL, PostgreSQL, Cassandra, Elasticsearch, AWS DynamoDB",
    icon: <FaDatabase size={30} />,
    color: "from-yellow-500 to-orange-500",
  },
  {
    id: "05",
    title: "Observability",
    description: "Prometheus, Grafana, Dynatrace, OpenTelemetry, Splunk, ServiceNow, Jira, Elasticsearch, Logstash, Kibana",
    icon: <FaEye size={30} />,
    color: "from-green-500 to-emerald-500",
  },
  {
    id: "06",
    title: "Cloud",
    description: "AWS Cloud services includes DynamoDB, Lambda, Kubernetes, Containers, S3, EC2, Kafka",
    icon: <FaCloud size={30} />,
    color: "from-cyan-500 to-blue-500",
  },
];