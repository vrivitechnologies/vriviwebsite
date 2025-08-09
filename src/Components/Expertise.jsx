import React from "react";
import { FaCode, FaServer, FaBrain, FaDatabase, FaEye, FaCloud } from "react-icons/fa";

const expertiseData = [
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

const Expertise = () => {
  return (
    <section id="expertise" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-0">
        <h2 className="text-4xl font-semibold text-center mb-20 ">
          Our Expertise
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseData.map((item) => (
            <div
              key={item.id}
              className="group relative bg-white shadow-lg rounded-2xl p-8 hover:shadow-2xl transition duration-300 border border-gray-100"
            >
              <div
                className={`absolute  w-12 h-12 rounded-xl bg-gradient-to-r ${item.color} flex items-center justify-center text-white shadow-lg`}
              >
                {item.icon}
              </div>
              <div className="ml-20">
                {/* <span className="text-sm text-gray-400 font-medium">{item.id}</span> */}
                <h3 className="text-xl font-semibold  text-gray-800 group-hover:text-indigo-600 transition">
                  {item.title}
                </h3>
                <p className="mt-3 text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;


// import React from "react";
// import { FaCode, FaServer, FaBrain, FaDatabase, FaEye, FaCloud } from "react-icons/fa";

// const expertiseData = [
//   {
//     id: "01",
//     title: "Fullstack Development",
//     description:
//       "Java, J2EE, Python, GoLang, Nodejs, Angular, React, Typescript",
//     icon: <FaCode size={28} />,
//     color: "from-pink-500 to-red-500",
//   },
//   {
//     id: "02",
//     title: "DevOps",
//     description:
//       "Docker, Kubernetes, K3, Helm charts, Operators, Jenkins, Travis",
//     icon: <FaServer size={28} />,
//     color: "from-blue-500 to-indigo-500",
//   },
//   {
//     id: "03",
//     title: "Artificial Intelligence",
//     description: "Pytorch, Scikit-learn, Tensorflow, Keras",
//     icon: <FaBrain size={28} />,
//     color: "from-purple-500 to-pink-500",
//   },
//   {
//     id: "04",
//     title: "Databases",
//     description:
//       "MySQL, PostgreSQL, Cassandra, Elasticsearch, AWS DynamoDB",
//     icon: <FaDatabase size={28} />,
//     color: "from-yellow-500 to-orange-500",
//   },
//   {
//     id: "05",
//     title: "Observability",
//     description:
//       "Prometheus, Grafana, Dynatrace, OpenTelemetry, Splunk, ServiceNow, Jira, Elasticsearch, Logstash, Kibana",
//     icon: <FaEye size={28} />,
//     color: "from-green-500 to-emerald-500",
//   },
//   {
//     id: "06",
//     title: "Cloud",
//     description:
//       "AWS Cloud services includes DynamoDB, Lambda, Kubernetes, Containers, S3, EC2, Kafka",
//     icon: <FaCloud size={28} />,
//     color: "from-cyan-500 to-blue-500",
//   },
// ];

// const Expertise = () => {
//   return (
//     <section
//       id="expertise"
//       className="py-20 bg-gradient-to-b from-gray-50 to-gray-100"
//     >
//       <div className="max-w-7xl mx-auto px-6 lg:px-8">
//         <h2 className="text-4xl font-bold text-center mb-14 text-gray-800">
//           Our Expertise
//         </h2>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
//           {expertiseData.map((item) => (
//             <div
//               key={item.id}
//               className="relative group rounded-2xl p-6 bg-white/70 backdrop-blur-lg border border-white/40 shadow-lg hover:shadow-2xl transition duration-300"
//             >
//               {/* Gradient Icon */}
//               <div
//                 className={`absolute -top-6 left-6 w-14 h-14 rounded-xl bg-gradient-to-r ${item.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transform transition`}
//               >
//                 {item.icon}
//               </div>

//               {/* Content */}
//               <div className="ml-20">
//                 <span className="text-sm text-gray-500 font-medium">
//                   {item.id}
//                 </span>
//                 <h3 className="text-xl font-semibold mt-1 text-gray-800 group-hover:text-indigo-600 transition">
//                   {item.title}
//                 </h3>
//                 <p className="mt-3 text-gray-600 leading-relaxed">
//                   {item.description}
//                 </p>
//               </div>

//               {/* Hover Glow Effect */}
//               <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none"></div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Expertise;



