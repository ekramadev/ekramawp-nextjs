type Three<T> = readonly [T,T,T];
type Ten<T> = readonly [T,T,T,T,T,T,T,T,T,T];
export interface LogoReferenceContent { heading: string; toolsHeading: string; imageAlts: readonly [string,string,string,string,string,string,string,string,string,string,string,string,string]; }
export interface PlanningItem { title: string; desc: string; imageAlt: string; }
export interface PlanningStage { badge: string; label: string; amount: string; amountUnit: string; infoTitle: string; items: Three<PlanningItem>; rightTitle: string; features: Ten<string>; btnText: string; }
export interface WorkPlanningContent { titleLead: string; titleRest: string; intro: string; steps: Three<PlanningStage>; showAll: string; showLess: string; previous: string; next: string; stageLabel: string; }

export const logoReferenceContent: Readonly<Record<string, LogoReferenceContent>> = {
  "/services/data-analytics/": {
    "heading": "Analytics: Interface Options",
    "toolsHeading": "Analytics: Web Tool Reference",
    "imageAlts": [
      "React logo in the data analytics interface reference",
      "Vue logo in the data analytics interface reference",
      "Angular logo in the data analytics interface reference",
      "Svelte logo in the data analytics interface reference",
      "Solid logo in the data analytics interface reference",
      "Next.js logo in the data analytics interface reference",
      "Tailwind CSS logo in the data analytics interface reference",
      "Redux logo in the data analytics interface reference",
      "GraphQL logo in the data analytics interface reference",
      "Vite logo in the data analytics interface reference",
      "Webpack logo in the data analytics interface reference",
      "Material UI logo in the data analytics interface reference",
      "Jest logo in the data analytics interface reference"
    ]
  },
  "/services/data-science/": {
    "heading": "Data Science: Interface Options",
    "toolsHeading": "Data Science: Web Tool Reference",
    "imageAlts": [
      "React logo in the data science interface reference",
      "Vue logo in the data science interface reference",
      "Angular logo in the data science interface reference",
      "Svelte logo in the data science interface reference",
      "Solid logo in the data science interface reference",
      "Next.js logo in the data science interface reference",
      "Tailwind CSS logo in the data science interface reference",
      "Redux logo in the data science interface reference",
      "GraphQL logo in the data science interface reference",
      "Vite logo in the data science interface reference",
      "Webpack logo in the data science interface reference",
      "Material UI logo in the data science interface reference",
      "Jest logo in the data science interface reference"
    ]
  },
  "/secure-portals/": {
    "heading": "Portals: Interface Options",
    "toolsHeading": "Portals: Web Tool Reference",
    "imageAlts": [
      "React logo in the secure portals interface reference",
      "Vue logo in the secure portals interface reference",
      "Angular logo in the secure portals interface reference",
      "Svelte logo in the secure portals interface reference",
      "Solid logo in the secure portals interface reference",
      "Next.js logo in the secure portals interface reference",
      "Tailwind CSS logo in the secure portals interface reference",
      "Redux logo in the secure portals interface reference",
      "GraphQL logo in the secure portals interface reference",
      "Vite logo in the secure portals interface reference",
      "Webpack logo in the secure portals interface reference",
      "Material UI logo in the secure portals interface reference",
      "Jest logo in the secure portals interface reference"
    ]
  },
  "/services/database-development/": {
    "heading": "Databases: Interface Options",
    "toolsHeading": "Databases: Web Tool Reference",
    "imageAlts": [
      "React logo in the database development interface reference",
      "Vue logo in the database development interface reference",
      "Angular logo in the database development interface reference",
      "Svelte logo in the database development interface reference",
      "Solid logo in the database development interface reference",
      "Next.js logo in the database development interface reference",
      "Tailwind CSS logo in the database development interface reference",
      "Redux logo in the database development interface reference",
      "GraphQL logo in the database development interface reference",
      "Vite logo in the database development interface reference",
      "Webpack logo in the database development interface reference",
      "Material UI logo in the database development interface reference",
      "Jest logo in the database development interface reference"
    ]
  },
  "/m365-sharepoint/": {
    "heading": "SharePoint: Interface Options",
    "toolsHeading": "SharePoint: Web Tool Reference",
    "imageAlts": [
      "React logo in the sharepoint interface reference",
      "Vue logo in the sharepoint interface reference",
      "Angular logo in the sharepoint interface reference",
      "Svelte logo in the sharepoint interface reference",
      "Solid logo in the sharepoint interface reference",
      "Next.js logo in the sharepoint interface reference",
      "Tailwind CSS logo in the sharepoint interface reference",
      "Redux logo in the sharepoint interface reference",
      "GraphQL logo in the sharepoint interface reference",
      "Vite logo in the sharepoint interface reference",
      "Webpack logo in the sharepoint interface reference",
      "Material UI logo in the sharepoint interface reference",
      "Jest logo in the sharepoint interface reference"
    ]
  },
  "/services/testing-and-qa/": {
    "heading": "Software QA: Interface Options",
    "toolsHeading": "Software QA: Web Tool Reference",
    "imageAlts": [
      "React logo in the software qa interface reference",
      "Vue logo in the software qa interface reference",
      "Angular logo in the software qa interface reference",
      "Svelte logo in the software qa interface reference",
      "Solid logo in the software qa interface reference",
      "Next.js logo in the software qa interface reference",
      "Tailwind CSS logo in the software qa interface reference",
      "Redux logo in the software qa interface reference",
      "GraphQL logo in the software qa interface reference",
      "Vite logo in the software qa interface reference",
      "Webpack logo in the software qa interface reference",
      "Material UI logo in the software qa interface reference",
      "Jest logo in the software qa interface reference"
    ]
  },
  "/services/digital-transformation/": {
    "heading": "Digital Work: Interface Options",
    "toolsHeading": "Digital Work: Web Tool Reference",
    "imageAlts": [
      "React logo in the digital transformation interface reference",
      "Vue logo in the digital transformation interface reference",
      "Angular logo in the digital transformation interface reference",
      "Svelte logo in the digital transformation interface reference",
      "Solid logo in the digital transformation interface reference",
      "Next.js logo in the digital transformation interface reference",
      "Tailwind CSS logo in the digital transformation interface reference",
      "Redux logo in the digital transformation interface reference",
      "GraphQL logo in the digital transformation interface reference",
      "Vite logo in the digital transformation interface reference",
      "Webpack logo in the digital transformation interface reference",
      "Material UI logo in the digital transformation interface reference",
      "Jest logo in the digital transformation interface reference"
    ]
  },
  "/crm-engineering/": {
    "heading": "CRM: Interface Options",
    "toolsHeading": "CRM: Web Tool Reference",
    "imageAlts": [
      "React logo in the crm engineering interface reference",
      "Vue logo in the crm engineering interface reference",
      "Angular logo in the crm engineering interface reference",
      "Svelte logo in the crm engineering interface reference",
      "Solid logo in the crm engineering interface reference",
      "Next.js logo in the crm engineering interface reference",
      "Tailwind CSS logo in the crm engineering interface reference",
      "Redux logo in the crm engineering interface reference",
      "GraphQL logo in the crm engineering interface reference",
      "Vite logo in the crm engineering interface reference",
      "Webpack logo in the crm engineering interface reference",
      "Material UI logo in the crm engineering interface reference",
      "Jest logo in the crm engineering interface reference"
    ]
  },
  "/computer-vision/": {
    "heading": "Vision: Interface Options",
    "toolsHeading": "Vision: Web Tool Reference",
    "imageAlts": [
      "React logo in the computer vision interface reference",
      "Vue logo in the computer vision interface reference",
      "Angular logo in the computer vision interface reference",
      "Svelte logo in the computer vision interface reference",
      "Solid logo in the computer vision interface reference",
      "Next.js logo in the computer vision interface reference",
      "Tailwind CSS logo in the computer vision interface reference",
      "Redux logo in the computer vision interface reference",
      "GraphQL logo in the computer vision interface reference",
      "Vite logo in the computer vision interface reference",
      "Webpack logo in the computer vision interface reference",
      "Material UI logo in the computer vision interface reference",
      "Jest logo in the computer vision interface reference"
    ]
  },
  "/salesforce-tech/": {
    "heading": "Salesforce: Interface Options",
    "toolsHeading": "Salesforce: Web Tool Reference",
    "imageAlts": [
      "React logo in the salesforce interface reference",
      "Vue logo in the salesforce interface reference",
      "Angular logo in the salesforce interface reference",
      "Svelte logo in the salesforce interface reference",
      "Solid logo in the salesforce interface reference",
      "Next.js logo in the salesforce interface reference",
      "Tailwind CSS logo in the salesforce interface reference",
      "Redux logo in the salesforce interface reference",
      "GraphQL logo in the salesforce interface reference",
      "Vite logo in the salesforce interface reference",
      "Webpack logo in the salesforce interface reference",
      "Material UI logo in the salesforce interface reference",
      "Jest logo in the salesforce interface reference"
    ]
  },
  "/php-engineers/": {
    "heading": "PHP Apps: Interface Options",
    "toolsHeading": "PHP Apps: Web Tool Reference",
    "imageAlts": [
      "React logo in the php applications interface reference",
      "Vue logo in the php applications interface reference",
      "Angular logo in the php applications interface reference",
      "Svelte logo in the php applications interface reference",
      "Solid logo in the php applications interface reference",
      "Next.js logo in the php applications interface reference",
      "Tailwind CSS logo in the php applications interface reference",
      "Redux logo in the php applications interface reference",
      "GraphQL logo in the php applications interface reference",
      "Vite logo in the php applications interface reference",
      "Webpack logo in the php applications interface reference",
      "Material UI logo in the php applications interface reference",
      "Jest logo in the php applications interface reference"
    ]
  },
  "/services/data-warehousing/": {
    "heading": "Data Stores: Interface Options",
    "toolsHeading": "Data Stores: Web Tool Reference",
    "imageAlts": [
      "React logo in the data warehousing interface reference",
      "Vue logo in the data warehousing interface reference",
      "Angular logo in the data warehousing interface reference",
      "Svelte logo in the data warehousing interface reference",
      "Solid logo in the data warehousing interface reference",
      "Next.js logo in the data warehousing interface reference",
      "Tailwind CSS logo in the data warehousing interface reference",
      "Redux logo in the data warehousing interface reference",
      "GraphQL logo in the data warehousing interface reference",
      "Vite logo in the data warehousing interface reference",
      "Webpack logo in the data warehousing interface reference",
      "Material UI logo in the data warehousing interface reference",
      "Jest logo in the data warehousing interface reference"
    ]
  },
  "/iot-engineering/": {
    "heading": "IoT: Interface Options",
    "toolsHeading": "IoT: Web Tool Reference",
    "imageAlts": [
      "React logo in the iot engineering interface reference",
      "Vue logo in the iot engineering interface reference",
      "Angular logo in the iot engineering interface reference",
      "Svelte logo in the iot engineering interface reference",
      "Solid logo in the iot engineering interface reference",
      "Next.js logo in the iot engineering interface reference",
      "Tailwind CSS logo in the iot engineering interface reference",
      "Redux logo in the iot engineering interface reference",
      "GraphQL logo in the iot engineering interface reference",
      "Vite logo in the iot engineering interface reference",
      "Webpack logo in the iot engineering interface reference",
      "Material UI logo in the iot engineering interface reference",
      "Jest logo in the iot engineering interface reference"
    ]
  },
  "/services/machine-learning/": {
    "heading": "ML Models: Interface Options",
    "toolsHeading": "ML Models: Web Tool Reference",
    "imageAlts": [
      "React logo in the machine learning interface reference",
      "Vue logo in the machine learning interface reference",
      "Angular logo in the machine learning interface reference",
      "Svelte logo in the machine learning interface reference",
      "Solid logo in the machine learning interface reference",
      "Next.js logo in the machine learning interface reference",
      "Tailwind CSS logo in the machine learning interface reference",
      "Redux logo in the machine learning interface reference",
      "GraphQL logo in the machine learning interface reference",
      "Vite logo in the machine learning interface reference",
      "Webpack logo in the machine learning interface reference",
      "Material UI logo in the machine learning interface reference",
      "Jest logo in the machine learning interface reference"
    ]
  },
  "/marketing-software/": {
    "heading": "Campaigns: Interface Options",
    "toolsHeading": "Campaigns: Web Tool Reference",
    "imageAlts": [
      "React logo in the marketing software interface reference",
      "Vue logo in the marketing software interface reference",
      "Angular logo in the marketing software interface reference",
      "Svelte logo in the marketing software interface reference",
      "Solid logo in the marketing software interface reference",
      "Next.js logo in the marketing software interface reference",
      "Tailwind CSS logo in the marketing software interface reference",
      "Redux logo in the marketing software interface reference",
      "GraphQL logo in the marketing software interface reference",
      "Vite logo in the marketing software interface reference",
      "Webpack logo in the marketing software interface reference",
      "Material UI logo in the marketing software interface reference",
      "Jest logo in the marketing software interface reference"
    ]
  },
  "/dynamics-365-solutions/": {
    "heading": "Dynamics 365: Interface Options",
    "toolsHeading": "Dynamics 365: Web Tool Reference",
    "imageAlts": [
      "React logo in the dynamics 365 interface reference",
      "Vue logo in the dynamics 365 interface reference",
      "Angular logo in the dynamics 365 interface reference",
      "Svelte logo in the dynamics 365 interface reference",
      "Solid logo in the dynamics 365 interface reference",
      "Next.js logo in the dynamics 365 interface reference",
      "Tailwind CSS logo in the dynamics 365 interface reference",
      "Redux logo in the dynamics 365 interface reference",
      "GraphQL logo in the dynamics 365 interface reference",
      "Vite logo in the dynamics 365 interface reference",
      "Webpack logo in the dynamics 365 interface reference",
      "Material UI logo in the dynamics 365 interface reference",
      "Jest logo in the dynamics 365 interface reference"
    ]
  },
  "/services/penetration-testing/": {
    "heading": "Pen Tests: Interface Options",
    "toolsHeading": "Pen Tests: Web Tool Reference",
    "imageAlts": [
      "React logo in the penetration testing interface reference",
      "Vue logo in the penetration testing interface reference",
      "Angular logo in the penetration testing interface reference",
      "Svelte logo in the penetration testing interface reference",
      "Solid logo in the penetration testing interface reference",
      "Next.js logo in the penetration testing interface reference",
      "Tailwind CSS logo in the penetration testing interface reference",
      "Redux logo in the penetration testing interface reference",
      "GraphQL logo in the penetration testing interface reference",
      "Vite logo in the penetration testing interface reference",
      "Webpack logo in the penetration testing interface reference",
      "Material UI logo in the penetration testing interface reference",
      "Jest logo in the penetration testing interface reference"
    ]
  },
  "/c-engineers/": {
    "heading": "C++: Interface Options",
    "toolsHeading": "C++: Web Tool Reference",
    "imageAlts": [
      "React logo in the c++ engineering interface reference",
      "Vue logo in the c++ engineering interface reference",
      "Angular logo in the c++ engineering interface reference",
      "Svelte logo in the c++ engineering interface reference",
      "Solid logo in the c++ engineering interface reference",
      "Next.js logo in the c++ engineering interface reference",
      "Tailwind CSS logo in the c++ engineering interface reference",
      "Redux logo in the c++ engineering interface reference",
      "GraphQL logo in the c++ engineering interface reference",
      "Vite logo in the c++ engineering interface reference",
      "Webpack logo in the c++ engineering interface reference",
      "Material UI logo in the c++ engineering interface reference",
      "Jest logo in the c++ engineering interface reference"
    ]
  },
  "/java-architects/": {
    "heading": "Java: Interface Options",
    "toolsHeading": "Java: Web Tool Reference",
    "imageAlts": [
      "React logo in the java architecture interface reference",
      "Vue logo in the java architecture interface reference",
      "Angular logo in the java architecture interface reference",
      "Svelte logo in the java architecture interface reference",
      "Solid logo in the java architecture interface reference",
      "Next.js logo in the java architecture interface reference",
      "Tailwind CSS logo in the java architecture interface reference",
      "Redux logo in the java architecture interface reference",
      "GraphQL logo in the java architecture interface reference",
      "Vite logo in the java architecture interface reference",
      "Webpack logo in the java architecture interface reference",
      "Material UI logo in the java architecture interface reference",
      "Jest logo in the java architecture interface reference"
    ]
  },
  "/ar-experiences/": {
    "heading": "AR: Interface Options",
    "toolsHeading": "AR: Web Tool Reference",
    "imageAlts": [
      "React logo in the augmented reality interface reference",
      "Vue logo in the augmented reality interface reference",
      "Angular logo in the augmented reality interface reference",
      "Svelte logo in the augmented reality interface reference",
      "Solid logo in the augmented reality interface reference",
      "Next.js logo in the augmented reality interface reference",
      "Tailwind CSS logo in the augmented reality interface reference",
      "Redux logo in the augmented reality interface reference",
      "GraphQL logo in the augmented reality interface reference",
      "Vite logo in the augmented reality interface reference",
      "Webpack logo in the augmented reality interface reference",
      "Material UI logo in the augmented reality interface reference",
      "Jest logo in the augmented reality interface reference"
    ]
  },
  "/services/business-intelligence/": {
    "heading": "BI Reporting: Interface Options",
    "toolsHeading": "BI Reporting: Web Tool Reference",
    "imageAlts": [
      "React logo in the bi reporting interface reference",
      "Vue logo in the bi reporting interface reference",
      "Angular logo in the bi reporting interface reference",
      "Svelte logo in the bi reporting interface reference",
      "Solid logo in the bi reporting interface reference",
      "Next.js logo in the bi reporting interface reference",
      "Tailwind CSS logo in the bi reporting interface reference",
      "Redux logo in the bi reporting interface reference",
      "GraphQL logo in the bi reporting interface reference",
      "Vite logo in the bi reporting interface reference",
      "Webpack logo in the bi reporting interface reference",
      "Material UI logo in the bi reporting interface reference",
      "Jest logo in the bi reporting interface reference"
    ]
  },
  "/power-bi-dashboards/": {
    "heading": "Power BI: Interface Options",
    "toolsHeading": "Power BI: Web Tool Reference",
    "imageAlts": [
      "React logo in the power bi interface reference",
      "Vue logo in the power bi interface reference",
      "Angular logo in the power bi interface reference",
      "Svelte logo in the power bi interface reference",
      "Solid logo in the power bi interface reference",
      "Next.js logo in the power bi interface reference",
      "Tailwind CSS logo in the power bi interface reference",
      "Redux logo in the power bi interface reference",
      "GraphQL logo in the power bi interface reference",
      "Vite logo in the power bi interface reference",
      "Webpack logo in the power bi interface reference",
      "Material UI logo in the power bi interface reference",
      "Jest logo in the power bi interface reference"
    ]
  },
  "/servicenow-dev/": {
    "heading": "ServiceNow: Interface Options",
    "toolsHeading": "ServiceNow: Web Tool Reference",
    "imageAlts": [
      "React logo in the servicenow interface reference",
      "Vue logo in the servicenow interface reference",
      "Angular logo in the servicenow interface reference",
      "Svelte logo in the servicenow interface reference",
      "Solid logo in the servicenow interface reference",
      "Next.js logo in the servicenow interface reference",
      "Tailwind CSS logo in the servicenow interface reference",
      "Redux logo in the servicenow interface reference",
      "GraphQL logo in the servicenow interface reference",
      "Vite logo in the servicenow interface reference",
      "Webpack logo in the servicenow interface reference",
      "Material UI logo in the servicenow interface reference",
      "Jest logo in the servicenow interface reference"
    ]
  },
  "/azure-cloud/": {
    "heading": "Azure: Interface Options",
    "toolsHeading": "Azure: Web Tool Reference",
    "imageAlts": [
      "React logo in the azure infrastructure interface reference",
      "Vue logo in the azure infrastructure interface reference",
      "Angular logo in the azure infrastructure interface reference",
      "Svelte logo in the azure infrastructure interface reference",
      "Solid logo in the azure infrastructure interface reference",
      "Next.js logo in the azure infrastructure interface reference",
      "Tailwind CSS logo in the azure infrastructure interface reference",
      "Redux logo in the azure infrastructure interface reference",
      "GraphQL logo in the azure infrastructure interface reference",
      "Vite logo in the azure infrastructure interface reference",
      "Webpack logo in the azure infrastructure interface reference",
      "Material UI logo in the azure infrastructure interface reference",
      "Jest logo in the azure infrastructure interface reference"
    ]
  },
  "/pimcore-solutions/": {
    "heading": "Pimcore: Interface Options",
    "toolsHeading": "Pimcore: Web Tool Reference",
    "imageAlts": [
      "React logo in the pimcore interface reference",
      "Vue logo in the pimcore interface reference",
      "Angular logo in the pimcore interface reference",
      "Svelte logo in the pimcore interface reference",
      "Solid logo in the pimcore interface reference",
      "Next.js logo in the pimcore interface reference",
      "Tailwind CSS logo in the pimcore interface reference",
      "Redux logo in the pimcore interface reference",
      "GraphQL logo in the pimcore interface reference",
      "Vite logo in the pimcore interface reference",
      "Webpack logo in the pimcore interface reference",
      "Material UI logo in the pimcore interface reference",
      "Jest logo in the pimcore interface reference"
    ]
  },
  "/digital-retail/": {
    "heading": "Retail: Interface Options",
    "toolsHeading": "Retail: Web Tool Reference",
    "imageAlts": [
      "React logo in the digital retail interface reference",
      "Vue logo in the digital retail interface reference",
      "Angular logo in the digital retail interface reference",
      "Svelte logo in the digital retail interface reference",
      "Solid logo in the digital retail interface reference",
      "Next.js logo in the digital retail interface reference",
      "Tailwind CSS logo in the digital retail interface reference",
      "Redux logo in the digital retail interface reference",
      "GraphQL logo in the digital retail interface reference",
      "Vite logo in the digital retail interface reference",
      "Webpack logo in the digital retail interface reference",
      "Material UI logo in the digital retail interface reference",
      "Jest logo in the digital retail interface reference"
    ]
  },
  "/telecom-tech/": {
    "heading": "Telecom: Interface Options",
    "toolsHeading": "Telecom: Web Tool Reference",
    "imageAlts": [
      "React logo in the telecom software interface reference",
      "Vue logo in the telecom software interface reference",
      "Angular logo in the telecom software interface reference",
      "Svelte logo in the telecom software interface reference",
      "Solid logo in the telecom software interface reference",
      "Next.js logo in the telecom software interface reference",
      "Tailwind CSS logo in the telecom software interface reference",
      "Redux logo in the telecom software interface reference",
      "GraphQL logo in the telecom software interface reference",
      "Vite logo in the telecom software interface reference",
      "Webpack logo in the telecom software interface reference",
      "Material UI logo in the telecom software interface reference",
      "Jest logo in the telecom software interface reference"
    ]
  },
  "/services/big-data/": {
    "heading": "Big Data: Interface Options",
    "toolsHeading": "Big Data: Web Tool Reference",
    "imageAlts": [
      "React logo in the big data processing interface reference",
      "Vue logo in the big data processing interface reference",
      "Angular logo in the big data processing interface reference",
      "Svelte logo in the big data processing interface reference",
      "Solid logo in the big data processing interface reference",
      "Next.js logo in the big data processing interface reference",
      "Tailwind CSS logo in the big data processing interface reference",
      "Redux logo in the big data processing interface reference",
      "GraphQL logo in the big data processing interface reference",
      "Vite logo in the big data processing interface reference",
      "Webpack logo in the big data processing interface reference",
      "Material UI logo in the big data processing interface reference",
      "Jest logo in the big data processing interface reference"
    ]
  },
  "/services/api-development/": {
    "heading": "APIs: Interface Options",
    "toolsHeading": "APIs: Web Tool Reference",
    "imageAlts": [
      "React logo in the api development interface reference",
      "Vue logo in the api development interface reference",
      "Angular logo in the api development interface reference",
      "Svelte logo in the api development interface reference",
      "Solid logo in the api development interface reference",
      "Next.js logo in the api development interface reference",
      "Tailwind CSS logo in the api development interface reference",
      "Redux logo in the api development interface reference",
      "GraphQL logo in the api development interface reference",
      "Vite logo in the api development interface reference",
      "Webpack logo in the api development interface reference",
      "Material UI logo in the api development interface reference",
      "Jest logo in the api development interface reference"
    ]
  },
  "/retail-banking-it/": {
    "heading": "Banking: Interface Options",
    "toolsHeading": "Banking: Web Tool Reference",
    "imageAlts": [
      "React logo in the retail banking interface reference",
      "Vue logo in the retail banking interface reference",
      "Angular logo in the retail banking interface reference",
      "Svelte logo in the retail banking interface reference",
      "Solid logo in the retail banking interface reference",
      "Next.js logo in the retail banking interface reference",
      "Tailwind CSS logo in the retail banking interface reference",
      "Redux logo in the retail banking interface reference",
      "GraphQL logo in the retail banking interface reference",
      "Vite logo in the retail banking interface reference",
      "Webpack logo in the retail banking interface reference",
      "Material UI logo in the retail banking interface reference",
      "Jest logo in the retail banking interface reference"
    ]
  },
  "/aws-infrastructure/": {
    "heading": "AWS: Interface Options",
    "toolsHeading": "AWS: Web Tool Reference",
    "imageAlts": [
      "React logo in the aws infrastructure interface reference",
      "Vue logo in the aws infrastructure interface reference",
      "Angular logo in the aws infrastructure interface reference",
      "Svelte logo in the aws infrastructure interface reference",
      "Solid logo in the aws infrastructure interface reference",
      "Next.js logo in the aws infrastructure interface reference",
      "Tailwind CSS logo in the aws infrastructure interface reference",
      "Redux logo in the aws infrastructure interface reference",
      "GraphQL logo in the aws infrastructure interface reference",
      "Vite logo in the aws infrastructure interface reference",
      "Webpack logo in the aws infrastructure interface reference",
      "Material UI logo in the aws infrastructure interface reference",
      "Jest logo in the aws infrastructure interface reference"
    ]
  },
  "/net-experts/": {
    "heading": ".NET: Interface Options",
    "toolsHeading": ".NET: Web Tool Reference",
    "imageAlts": [
      "React logo in the .net engineering interface reference",
      "Vue logo in the .net engineering interface reference",
      "Angular logo in the .net engineering interface reference",
      "Svelte logo in the .net engineering interface reference",
      "Solid logo in the .net engineering interface reference",
      "Next.js logo in the .net engineering interface reference",
      "Tailwind CSS logo in the .net engineering interface reference",
      "Redux logo in the .net engineering interface reference",
      "GraphQL logo in the .net engineering interface reference",
      "Vite logo in the .net engineering interface reference",
      "Webpack logo in the .net engineering interface reference",
      "Material UI logo in the .net engineering interface reference",
      "Jest logo in the .net engineering interface reference"
    ]
  },
  "/services/cybersecurity/": {
    "heading": "Cyber Checks: Interface Options",
    "toolsHeading": "Cyber Checks: Web Tool Reference",
    "imageAlts": [
      "React logo in the cybersecurity interface reference",
      "Vue logo in the cybersecurity interface reference",
      "Angular logo in the cybersecurity interface reference",
      "Svelte logo in the cybersecurity interface reference",
      "Solid logo in the cybersecurity interface reference",
      "Next.js logo in the cybersecurity interface reference",
      "Tailwind CSS logo in the cybersecurity interface reference",
      "Redux logo in the cybersecurity interface reference",
      "GraphQL logo in the cybersecurity interface reference",
      "Vite logo in the cybersecurity interface reference",
      "Webpack logo in the cybersecurity interface reference",
      "Material UI logo in the cybersecurity interface reference",
      "Jest logo in the cybersecurity interface reference"
    ]
  },
  "/services/devops-consulting/": {
    "heading": "DevOps: Interface Options",
    "toolsHeading": "DevOps: Web Tool Reference",
    "imageAlts": [
      "React logo in the devops interface reference",
      "Vue logo in the devops interface reference",
      "Angular logo in the devops interface reference",
      "Svelte logo in the devops interface reference",
      "Solid logo in the devops interface reference",
      "Next.js logo in the devops interface reference",
      "Tailwind CSS logo in the devops interface reference",
      "Redux logo in the devops interface reference",
      "GraphQL logo in the devops interface reference",
      "Vite logo in the devops interface reference",
      "Webpack logo in the devops interface reference",
      "Material UI logo in the devops interface reference",
      "Jest logo in the devops interface reference"
    ]
  },
  "/services/software-modernization/": {
    "heading": "Legacy Apps: Interface Options",
    "toolsHeading": "Legacy Apps: Web Tool Reference",
    "imageAlts": [
      "React logo in the software modernization interface reference",
      "Vue logo in the software modernization interface reference",
      "Angular logo in the software modernization interface reference",
      "Svelte logo in the software modernization interface reference",
      "Solid logo in the software modernization interface reference",
      "Next.js logo in the software modernization interface reference",
      "Tailwind CSS logo in the software modernization interface reference",
      "Redux logo in the software modernization interface reference",
      "GraphQL logo in the software modernization interface reference",
      "Vite logo in the software modernization interface reference",
      "Webpack logo in the software modernization interface reference",
      "Material UI logo in the software modernization interface reference",
      "Jest logo in the software modernization interface reference"
    ]
  },
  "/services/ai-development/": {
    "heading": "AI Delivery: Interface Options",
    "toolsHeading": "AI Delivery: Web Tool Reference",
    "imageAlts": [
      "React logo in the ai development interface reference",
      "Vue logo in the ai development interface reference",
      "Angular logo in the ai development interface reference",
      "Svelte logo in the ai development interface reference",
      "Solid logo in the ai development interface reference",
      "Next.js logo in the ai development interface reference",
      "Tailwind CSS logo in the ai development interface reference",
      "Redux logo in the ai development interface reference",
      "GraphQL logo in the ai development interface reference",
      "Vite logo in the ai development interface reference",
      "Webpack logo in the ai development interface reference",
      "Material UI logo in the ai development interface reference",
      "Jest logo in the ai development interface reference"
    ]
  },
  "/services/it-project-management/": {
    "heading": "IT Projects: Interface Options",
    "toolsHeading": "IT Projects: Web Tool Reference",
    "imageAlts": [
      "React logo in the it project management interface reference",
      "Vue logo in the it project management interface reference",
      "Angular logo in the it project management interface reference",
      "Svelte logo in the it project management interface reference",
      "Solid logo in the it project management interface reference",
      "Next.js logo in the it project management interface reference",
      "Tailwind CSS logo in the it project management interface reference",
      "Redux logo in the it project management interface reference",
      "GraphQL logo in the it project management interface reference",
      "Vite logo in the it project management interface reference",
      "Webpack logo in the it project management interface reference",
      "Material UI logo in the it project management interface reference",
      "Jest logo in the it project management interface reference"
    ]
  },
  "/services/agile-consulting/": {
    "heading": "Agile: Interface Options",
    "toolsHeading": "Agile: Web Tool Reference",
    "imageAlts": [
      "React logo in the agile consulting interface reference",
      "Vue logo in the agile consulting interface reference",
      "Angular logo in the agile consulting interface reference",
      "Svelte logo in the agile consulting interface reference",
      "Solid logo in the agile consulting interface reference",
      "Next.js logo in the agile consulting interface reference",
      "Tailwind CSS logo in the agile consulting interface reference",
      "Redux logo in the agile consulting interface reference",
      "GraphQL logo in the agile consulting interface reference",
      "Vite logo in the agile consulting interface reference",
      "Webpack logo in the agile consulting interface reference",
      "Material UI logo in the agile consulting interface reference",
      "Jest logo in the agile consulting interface reference"
    ]
  },
  "/services/microsoft-consulting/": {
    "heading": "MS Advice: Interface Options",
    "toolsHeading": "MS Advice: Web Tool Reference",
    "imageAlts": [
      "React logo in the microsoft consulting interface reference",
      "Vue logo in the microsoft consulting interface reference",
      "Angular logo in the microsoft consulting interface reference",
      "Svelte logo in the microsoft consulting interface reference",
      "Solid logo in the microsoft consulting interface reference",
      "Next.js logo in the microsoft consulting interface reference",
      "Tailwind CSS logo in the microsoft consulting interface reference",
      "Redux logo in the microsoft consulting interface reference",
      "GraphQL logo in the microsoft consulting interface reference",
      "Vite logo in the microsoft consulting interface reference",
      "Webpack logo in the microsoft consulting interface reference",
      "Material UI logo in the microsoft consulting interface reference",
      "Jest logo in the microsoft consulting interface reference"
    ]
  },
  "/services/artificial-intelligence/": {
    "heading": "AI Apps: Interface Options",
    "toolsHeading": "AI Apps: Web Tool Reference",
    "imageAlts": [
      "React logo in the ai applications interface reference",
      "Vue logo in the ai applications interface reference",
      "Angular logo in the ai applications interface reference",
      "Svelte logo in the ai applications interface reference",
      "Solid logo in the ai applications interface reference",
      "Next.js logo in the ai applications interface reference",
      "Tailwind CSS logo in the ai applications interface reference",
      "Redux logo in the ai applications interface reference",
      "GraphQL logo in the ai applications interface reference",
      "Vite logo in the ai applications interface reference",
      "Webpack logo in the ai applications interface reference",
      "Material UI logo in the ai applications interface reference",
      "Jest logo in the ai applications interface reference"
    ]
  },
  "/services/infrastructure-services/": {
    "heading": "IT Systems: Interface Options",
    "toolsHeading": "IT Systems: Web Tool Reference",
    "imageAlts": [
      "React logo in the it infrastructure interface reference",
      "Vue logo in the it infrastructure interface reference",
      "Angular logo in the it infrastructure interface reference",
      "Svelte logo in the it infrastructure interface reference",
      "Solid logo in the it infrastructure interface reference",
      "Next.js logo in the it infrastructure interface reference",
      "Tailwind CSS logo in the it infrastructure interface reference",
      "Redux logo in the it infrastructure interface reference",
      "GraphQL logo in the it infrastructure interface reference",
      "Vite logo in the it infrastructure interface reference",
      "Webpack logo in the it infrastructure interface reference",
      "Material UI logo in the it infrastructure interface reference",
      "Jest logo in the it infrastructure interface reference"
    ]
  },
  "/services/compliance-services/": {
    "heading": "Controls: Interface Options",
    "toolsHeading": "Controls: Web Tool Reference",
    "imageAlts": [
      "React logo in the compliance review interface reference",
      "Vue logo in the compliance review interface reference",
      "Angular logo in the compliance review interface reference",
      "Svelte logo in the compliance review interface reference",
      "Solid logo in the compliance review interface reference",
      "Next.js logo in the compliance review interface reference",
      "Tailwind CSS logo in the compliance review interface reference",
      "Redux logo in the compliance review interface reference",
      "GraphQL logo in the compliance review interface reference",
      "Vite logo in the compliance review interface reference",
      "Webpack logo in the compliance review interface reference",
      "Material UI logo in the compliance review interface reference",
      "Jest logo in the compliance review interface reference"
    ]
  },
  "/services/security-testing/": {
    "heading": "App Security: Interface Options",
    "toolsHeading": "App Security: Web Tool Reference",
    "imageAlts": [
      "React logo in the security testing interface reference",
      "Vue logo in the security testing interface reference",
      "Angular logo in the security testing interface reference",
      "Svelte logo in the security testing interface reference",
      "Solid logo in the security testing interface reference",
      "Next.js logo in the security testing interface reference",
      "Tailwind CSS logo in the security testing interface reference",
      "Redux logo in the security testing interface reference",
      "GraphQL logo in the security testing interface reference",
      "Vite logo in the security testing interface reference",
      "Webpack logo in the security testing interface reference",
      "Material UI logo in the security testing interface reference",
      "Jest logo in the security testing interface reference"
    ]
  },
  "/data-science-ops/": {
    "heading": "Data Ops: Interface Options",
    "toolsHeading": "Data Ops: Web Tool Reference",
    "imageAlts": [
      "React logo in the data science operations interface reference",
      "Vue logo in the data science operations interface reference",
      "Angular logo in the data science operations interface reference",
      "Svelte logo in the data science operations interface reference",
      "Solid logo in the data science operations interface reference",
      "Next.js logo in the data science operations interface reference",
      "Tailwind CSS logo in the data science operations interface reference",
      "Redux logo in the data science operations interface reference",
      "GraphQL logo in the data science operations interface reference",
      "Vite logo in the data science operations interface reference",
      "Webpack logo in the data science operations interface reference",
      "Material UI logo in the data science operations interface reference",
      "Jest logo in the data science operations interface reference"
    ]
  },
  "/ml-engineering/": {
    "heading": "ML Systems: Interface Options",
    "toolsHeading": "ML Systems: Web Tool Reference",
    "imageAlts": [
      "React logo in the ml engineering interface reference",
      "Vue logo in the ml engineering interface reference",
      "Angular logo in the ml engineering interface reference",
      "Svelte logo in the ml engineering interface reference",
      "Solid logo in the ml engineering interface reference",
      "Next.js logo in the ml engineering interface reference",
      "Tailwind CSS logo in the ml engineering interface reference",
      "Redux logo in the ml engineering interface reference",
      "GraphQL logo in the ml engineering interface reference",
      "Vite logo in the ml engineering interface reference",
      "Webpack logo in the ml engineering interface reference",
      "Material UI logo in the ml engineering interface reference",
      "Jest logo in the ml engineering interface reference"
    ]
  },
  "/blockchain-tech/": {
    "heading": "Blockchain: Interface Options",
    "toolsHeading": "Blockchain: Web Tool Reference",
    "imageAlts": [
      "React logo in the blockchain interface reference",
      "Vue logo in the blockchain interface reference",
      "Angular logo in the blockchain interface reference",
      "Svelte logo in the blockchain interface reference",
      "Solid logo in the blockchain interface reference",
      "Next.js logo in the blockchain interface reference",
      "Tailwind CSS logo in the blockchain interface reference",
      "Redux logo in the blockchain interface reference",
      "GraphQL logo in the blockchain interface reference",
      "Vite logo in the blockchain interface reference",
      "Webpack logo in the blockchain interface reference",
      "Material UI logo in the blockchain interface reference",
      "Jest logo in the blockchain interface reference"
    ]
  },
  "/big-data-systems/": {
    "heading": "Data Systems: Interface Options",
    "toolsHeading": "Data Systems: Web Tool Reference",
    "imageAlts": [
      "React logo in the big data systems interface reference",
      "Vue logo in the big data systems interface reference",
      "Angular logo in the big data systems interface reference",
      "Svelte logo in the big data systems interface reference",
      "Solid logo in the big data systems interface reference",
      "Next.js logo in the big data systems interface reference",
      "Tailwind CSS logo in the big data systems interface reference",
      "Redux logo in the big data systems interface reference",
      "GraphQL logo in the big data systems interface reference",
      "Vite logo in the big data systems interface reference",
      "Webpack logo in the big data systems interface reference",
      "Material UI logo in the big data systems interface reference",
      "Jest logo in the big data systems interface reference"
    ]
  },
  "/vr-enterprise/": {
    "heading": "VR: Interface Options",
    "toolsHeading": "VR: Web Tool Reference",
    "imageAlts": [
      "React logo in the virtual reality interface reference",
      "Vue logo in the virtual reality interface reference",
      "Angular logo in the virtual reality interface reference",
      "Svelte logo in the virtual reality interface reference",
      "Solid logo in the virtual reality interface reference",
      "Next.js logo in the virtual reality interface reference",
      "Tailwind CSS logo in the virtual reality interface reference",
      "Redux logo in the virtual reality interface reference",
      "GraphQL logo in the virtual reality interface reference",
      "Vite logo in the virtual reality interface reference",
      "Webpack logo in the virtual reality interface reference",
      "Material UI logo in the virtual reality interface reference",
      "Jest logo in the virtual reality interface reference"
    ]
  },
  "/cloud-native/": {
    "heading": "Cloud Apps: Interface Options",
    "toolsHeading": "Cloud Apps: Web Tool Reference",
    "imageAlts": [
      "React logo in the cloud native software interface reference",
      "Vue logo in the cloud native software interface reference",
      "Angular logo in the cloud native software interface reference",
      "Svelte logo in the cloud native software interface reference",
      "Solid logo in the cloud native software interface reference",
      "Next.js logo in the cloud native software interface reference",
      "Tailwind CSS logo in the cloud native software interface reference",
      "Redux logo in the cloud native software interface reference",
      "GraphQL logo in the cloud native software interface reference",
      "Vite logo in the cloud native software interface reference",
      "Webpack logo in the cloud native software interface reference",
      "Material UI logo in the cloud native software interface reference",
      "Jest logo in the cloud native software interface reference"
    ]
  },
  "/saas-architecture/": {
    "heading": "SaaS: Interface Options",
    "toolsHeading": "SaaS: Web Tool Reference",
    "imageAlts": [
      "React logo in the saas architecture interface reference",
      "Vue logo in the saas architecture interface reference",
      "Angular logo in the saas architecture interface reference",
      "Svelte logo in the saas architecture interface reference",
      "Solid logo in the saas architecture interface reference",
      "Next.js logo in the saas architecture interface reference",
      "Tailwind CSS logo in the saas architecture interface reference",
      "Redux logo in the saas architecture interface reference",
      "GraphQL logo in the saas architecture interface reference",
      "Vite logo in the saas architecture interface reference",
      "Webpack logo in the saas architecture interface reference",
      "Material UI logo in the saas architecture interface reference",
      "Jest logo in the saas architecture interface reference"
    ]
  },
  "/python-engineers/": {
    "heading": "Python: Interface Options",
    "toolsHeading": "Python: Web Tool Reference",
    "imageAlts": [
      "React logo in the python engineering interface reference",
      "Vue logo in the python engineering interface reference",
      "Angular logo in the python engineering interface reference",
      "Svelte logo in the python engineering interface reference",
      "Solid logo in the python engineering interface reference",
      "Next.js logo in the python engineering interface reference",
      "Tailwind CSS logo in the python engineering interface reference",
      "Redux logo in the python engineering interface reference",
      "GraphQL logo in the python engineering interface reference",
      "Vite logo in the python engineering interface reference",
      "Webpack logo in the python engineering interface reference",
      "Material UI logo in the python engineering interface reference",
      "Jest logo in the python engineering interface reference"
    ]
  },
  "/go-engineers/": {
    "heading": "Go: Interface Options",
    "toolsHeading": "Go: Web Tool Reference",
    "imageAlts": [
      "React logo in the go engineering interface reference",
      "Vue logo in the go engineering interface reference",
      "Angular logo in the go engineering interface reference",
      "Svelte logo in the go engineering interface reference",
      "Solid logo in the go engineering interface reference",
      "Next.js logo in the go engineering interface reference",
      "Tailwind CSS logo in the go engineering interface reference",
      "Redux logo in the go engineering interface reference",
      "GraphQL logo in the go engineering interface reference",
      "Vite logo in the go engineering interface reference",
      "Webpack logo in the go engineering interface reference",
      "Material UI logo in the go engineering interface reference",
      "Jest logo in the go engineering interface reference"
    ]
  },
  "/mobile-devs/": {
    "heading": "Phone Apps: Interface Options",
    "toolsHeading": "Phone Apps: Web Tool Reference",
    "imageAlts": [
      "React logo in the mobile engineering interface reference",
      "Vue logo in the mobile engineering interface reference",
      "Angular logo in the mobile engineering interface reference",
      "Svelte logo in the mobile engineering interface reference",
      "Solid logo in the mobile engineering interface reference",
      "Next.js logo in the mobile engineering interface reference",
      "Tailwind CSS logo in the mobile engineering interface reference",
      "Redux logo in the mobile engineering interface reference",
      "GraphQL logo in the mobile engineering interface reference",
      "Vite logo in the mobile engineering interface reference",
      "Webpack logo in the mobile engineering interface reference",
      "Material UI logo in the mobile engineering interface reference",
      "Jest logo in the mobile engineering interface reference"
    ]
  },
  "/ms-ecosystem/": {
    "heading": "MS Tools: Interface Options",
    "toolsHeading": "MS Tools: Web Tool Reference",
    "imageAlts": [
      "React logo in the microsoft ecosystem interface reference",
      "Vue logo in the microsoft ecosystem interface reference",
      "Angular logo in the microsoft ecosystem interface reference",
      "Svelte logo in the microsoft ecosystem interface reference",
      "Solid logo in the microsoft ecosystem interface reference",
      "Next.js logo in the microsoft ecosystem interface reference",
      "Tailwind CSS logo in the microsoft ecosystem interface reference",
      "Redux logo in the microsoft ecosystem interface reference",
      "GraphQL logo in the microsoft ecosystem interface reference",
      "Vite logo in the microsoft ecosystem interface reference",
      "Webpack logo in the microsoft ecosystem interface reference",
      "Material UI logo in the microsoft ecosystem interface reference",
      "Jest logo in the microsoft ecosystem interface reference"
    ]
  },
  "/power-apps-dev/": {
    "heading": "Power Apps: Interface Options",
    "toolsHeading": "Power Apps: Web Tool Reference",
    "imageAlts": [
      "React logo in the power apps interface reference",
      "Vue logo in the power apps interface reference",
      "Angular logo in the power apps interface reference",
      "Svelte logo in the power apps interface reference",
      "Solid logo in the power apps interface reference",
      "Next.js logo in the power apps interface reference",
      "Tailwind CSS logo in the power apps interface reference",
      "Redux logo in the power apps interface reference",
      "GraphQL logo in the power apps interface reference",
      "Vite logo in the power apps interface reference",
      "Webpack logo in the power apps interface reference",
      "Material UI logo in the power apps interface reference",
      "Jest logo in the power apps interface reference"
    ]
  },
  "/adobe-commerce-tech/": {
    "heading": "Adobe Stores: Interface Options",
    "toolsHeading": "Adobe Stores: Web Tool Reference",
    "imageAlts": [
      "React logo in the adobe commerce interface reference",
      "Vue logo in the adobe commerce interface reference",
      "Angular logo in the adobe commerce interface reference",
      "Svelte logo in the adobe commerce interface reference",
      "Solid logo in the adobe commerce interface reference",
      "Next.js logo in the adobe commerce interface reference",
      "Tailwind CSS logo in the adobe commerce interface reference",
      "Redux logo in the adobe commerce interface reference",
      "GraphQL logo in the adobe commerce interface reference",
      "Vite logo in the adobe commerce interface reference",
      "Webpack logo in the adobe commerce interface reference",
      "Material UI logo in the adobe commerce interface reference",
      "Jest logo in the adobe commerce interface reference"
    ]
  },
  "/custom-erp/": {
    "heading": "Custom ERP: Interface Options",
    "toolsHeading": "Custom ERP: Web Tool Reference",
    "imageAlts": [
      "React logo in the custom erp interface reference",
      "Vue logo in the custom erp interface reference",
      "Angular logo in the custom erp interface reference",
      "Svelte logo in the custom erp interface reference",
      "Solid logo in the custom erp interface reference",
      "Next.js logo in the custom erp interface reference",
      "Tailwind CSS logo in the custom erp interface reference",
      "Redux logo in the custom erp interface reference",
      "GraphQL logo in the custom erp interface reference",
      "Vite logo in the custom erp interface reference",
      "Webpack logo in the custom erp interface reference",
      "Material UI logo in the custom erp interface reference",
      "Jest logo in the custom erp interface reference"
    ]
  },
  "/transportation-management/": {
    "heading": "Transport: Interface Options",
    "toolsHeading": "Transport: Web Tool Reference",
    "imageAlts": [
      "React logo in the transport management interface reference",
      "Vue logo in the transport management interface reference",
      "Angular logo in the transport management interface reference",
      "Svelte logo in the transport management interface reference",
      "Solid logo in the transport management interface reference",
      "Next.js logo in the transport management interface reference",
      "Tailwind CSS logo in the transport management interface reference",
      "Redux logo in the transport management interface reference",
      "GraphQL logo in the transport management interface reference",
      "Vite logo in the transport management interface reference",
      "Webpack logo in the transport management interface reference",
      "Material UI logo in the transport management interface reference",
      "Jest logo in the transport management interface reference"
    ]
  },
  "/supply-chain-tech/": {
    "heading": "Supply Chain: Interface Options",
    "toolsHeading": "Supply Chain: Web Tool Reference",
    "imageAlts": [
      "React logo in the supply chain interface reference",
      "Vue logo in the supply chain interface reference",
      "Angular logo in the supply chain interface reference",
      "Svelte logo in the supply chain interface reference",
      "Solid logo in the supply chain interface reference",
      "Next.js logo in the supply chain interface reference",
      "Tailwind CSS logo in the supply chain interface reference",
      "Redux logo in the supply chain interface reference",
      "GraphQL logo in the supply chain interface reference",
      "Vite logo in the supply chain interface reference",
      "Webpack logo in the supply chain interface reference",
      "Material UI logo in the supply chain interface reference",
      "Jest logo in the supply chain interface reference"
    ]
  },
  "/wms-solutions/": {
    "heading": "Warehouses: Interface Options",
    "toolsHeading": "Warehouses: Web Tool Reference",
    "imageAlts": [
      "React logo in the warehouse management interface reference",
      "Vue logo in the warehouse management interface reference",
      "Angular logo in the warehouse management interface reference",
      "Svelte logo in the warehouse management interface reference",
      "Solid logo in the warehouse management interface reference",
      "Next.js logo in the warehouse management interface reference",
      "Tailwind CSS logo in the warehouse management interface reference",
      "Redux logo in the warehouse management interface reference",
      "GraphQL logo in the warehouse management interface reference",
      "Vite logo in the warehouse management interface reference",
      "Webpack logo in the warehouse management interface reference",
      "Material UI logo in the warehouse management interface reference",
      "Jest logo in the warehouse management interface reference"
    ]
  },
  "/enterprise-asset-management/": {
    "heading": "Assets: Interface Options",
    "toolsHeading": "Assets: Web Tool Reference",
    "imageAlts": [
      "React logo in the asset management interface reference",
      "Vue logo in the asset management interface reference",
      "Angular logo in the asset management interface reference",
      "Svelte logo in the asset management interface reference",
      "Solid logo in the asset management interface reference",
      "Next.js logo in the asset management interface reference",
      "Tailwind CSS logo in the asset management interface reference",
      "Redux logo in the asset management interface reference",
      "GraphQL logo in the asset management interface reference",
      "Vite logo in the asset management interface reference",
      "Webpack logo in the asset management interface reference",
      "Material UI logo in the asset management interface reference",
      "Jest logo in the asset management interface reference"
    ]
  },
  "/procurement/": {
    "heading": "Procurement: Interface Options",
    "toolsHeading": "Procurement: Web Tool Reference",
    "imageAlts": [
      "React logo in the procurement interface reference",
      "Vue logo in the procurement interface reference",
      "Angular logo in the procurement interface reference",
      "Svelte logo in the procurement interface reference",
      "Solid logo in the procurement interface reference",
      "Next.js logo in the procurement interface reference",
      "Tailwind CSS logo in the procurement interface reference",
      "Redux logo in the procurement interface reference",
      "GraphQL logo in the procurement interface reference",
      "Vite logo in the procurement interface reference",
      "Webpack logo in the procurement interface reference",
      "Material UI logo in the procurement interface reference",
      "Jest logo in the procurement interface reference"
    ]
  },
  "/enterprise-pm/": {
    "heading": "Projects: Interface Options",
    "toolsHeading": "Projects: Web Tool Reference",
    "imageAlts": [
      "React logo in the enterprise projects interface reference",
      "Vue logo in the enterprise projects interface reference",
      "Angular logo in the enterprise projects interface reference",
      "Svelte logo in the enterprise projects interface reference",
      "Solid logo in the enterprise projects interface reference",
      "Next.js logo in the enterprise projects interface reference",
      "Tailwind CSS logo in the enterprise projects interface reference",
      "Redux logo in the enterprise projects interface reference",
      "GraphQL logo in the enterprise projects interface reference",
      "Vite logo in the enterprise projects interface reference",
      "Webpack logo in the enterprise projects interface reference",
      "Material UI logo in the enterprise projects interface reference",
      "Jest logo in the enterprise projects interface reference"
    ]
  },
  "/logistics-fleet/": {
    "heading": "Fleets: Interface Options",
    "toolsHeading": "Fleets: Web Tool Reference",
    "imageAlts": [
      "React logo in the fleet operations interface reference",
      "Vue logo in the fleet operations interface reference",
      "Angular logo in the fleet operations interface reference",
      "Svelte logo in the fleet operations interface reference",
      "Solid logo in the fleet operations interface reference",
      "Next.js logo in the fleet operations interface reference",
      "Tailwind CSS logo in the fleet operations interface reference",
      "Redux logo in the fleet operations interface reference",
      "GraphQL logo in the fleet operations interface reference",
      "Vite logo in the fleet operations interface reference",
      "Webpack logo in the fleet operations interface reference",
      "Material UI logo in the fleet operations interface reference",
      "Jest logo in the fleet operations interface reference"
    ]
  },
  "/enterprise-commerce/": {
    "heading": "B2B Commerce: Interface Options",
    "toolsHeading": "B2B Commerce: Web Tool Reference",
    "imageAlts": [
      "React logo in the enterprise commerce interface reference",
      "Vue logo in the enterprise commerce interface reference",
      "Angular logo in the enterprise commerce interface reference",
      "Svelte logo in the enterprise commerce interface reference",
      "Solid logo in the enterprise commerce interface reference",
      "Next.js logo in the enterprise commerce interface reference",
      "Tailwind CSS logo in the enterprise commerce interface reference",
      "Redux logo in the enterprise commerce interface reference",
      "GraphQL logo in the enterprise commerce interface reference",
      "Vite logo in the enterprise commerce interface reference",
      "Webpack logo in the enterprise commerce interface reference",
      "Material UI logo in the enterprise commerce interface reference",
      "Jest logo in the enterprise commerce interface reference"
    ]
  },
  "/corporate-intranets/": {
    "heading": "Intranets: Interface Options",
    "toolsHeading": "Intranets: Web Tool Reference",
    "imageAlts": [
      "React logo in the corporate intranets interface reference",
      "Vue logo in the corporate intranets interface reference",
      "Angular logo in the corporate intranets interface reference",
      "Svelte logo in the corporate intranets interface reference",
      "Solid logo in the corporate intranets interface reference",
      "Next.js logo in the corporate intranets interface reference",
      "Tailwind CSS logo in the corporate intranets interface reference",
      "Redux logo in the corporate intranets interface reference",
      "GraphQL logo in the corporate intranets interface reference",
      "Vite logo in the corporate intranets interface reference",
      "Webpack logo in the corporate intranets interface reference",
      "Material UI logo in the corporate intranets interface reference",
      "Jest logo in the corporate intranets interface reference"
    ]
  },
  "/financial-planning-analyses/": {
    "heading": "Finance: Interface Options",
    "toolsHeading": "Finance: Web Tool Reference",
    "imageAlts": [
      "React logo in the financial planning interface reference",
      "Vue logo in the financial planning interface reference",
      "Angular logo in the financial planning interface reference",
      "Svelte logo in the financial planning interface reference",
      "Solid logo in the financial planning interface reference",
      "Next.js logo in the financial planning interface reference",
      "Tailwind CSS logo in the financial planning interface reference",
      "Redux logo in the financial planning interface reference",
      "GraphQL logo in the financial planning interface reference",
      "Vite logo in the financial planning interface reference",
      "Webpack logo in the financial planning interface reference",
      "Material UI logo in the financial planning interface reference",
      "Jest logo in the financial planning interface reference"
    ]
  },
  "/transaction-systems/": {
    "heading": "Txn Systems: Interface Options",
    "toolsHeading": "Txn Systems: Web Tool Reference",
    "imageAlts": [
      "React logo in the transaction systems interface reference",
      "Vue logo in the transaction systems interface reference",
      "Angular logo in the transaction systems interface reference",
      "Svelte logo in the transaction systems interface reference",
      "Solid logo in the transaction systems interface reference",
      "Next.js logo in the transaction systems interface reference",
      "Tailwind CSS logo in the transaction systems interface reference",
      "Redux logo in the transaction systems interface reference",
      "GraphQL logo in the transaction systems interface reference",
      "Vite logo in the transaction systems interface reference",
      "Webpack logo in the transaction systems interface reference",
      "Material UI logo in the transaction systems interface reference",
      "Jest logo in the transaction systems interface reference"
    ]
  },
  "/enterprise-accounting/": {
    "heading": "Accounting: Interface Options",
    "toolsHeading": "Accounting: Web Tool Reference",
    "imageAlts": [
      "React logo in the enterprise accounting interface reference",
      "Vue logo in the enterprise accounting interface reference",
      "Angular logo in the enterprise accounting interface reference",
      "Svelte logo in the enterprise accounting interface reference",
      "Solid logo in the enterprise accounting interface reference",
      "Next.js logo in the enterprise accounting interface reference",
      "Tailwind CSS logo in the enterprise accounting interface reference",
      "Redux logo in the enterprise accounting interface reference",
      "GraphQL logo in the enterprise accounting interface reference",
      "Vite logo in the enterprise accounting interface reference",
      "Webpack logo in the enterprise accounting interface reference",
      "Material UI logo in the enterprise accounting interface reference",
      "Jest logo in the enterprise accounting interface reference"
    ]
  },
  "/business-intelligence/": {
    "heading": "BI: Interface Options",
    "toolsHeading": "BI: Web Tool Reference",
    "imageAlts": [
      "React logo in the business intelligence interface reference",
      "Vue logo in the business intelligence interface reference",
      "Angular logo in the business intelligence interface reference",
      "Svelte logo in the business intelligence interface reference",
      "Solid logo in the business intelligence interface reference",
      "Next.js logo in the business intelligence interface reference",
      "Tailwind CSS logo in the business intelligence interface reference",
      "Redux logo in the business intelligence interface reference",
      "GraphQL logo in the business intelligence interface reference",
      "Vite logo in the business intelligence interface reference",
      "Webpack logo in the business intelligence interface reference",
      "Material UI logo in the business intelligence interface reference",
      "Jest logo in the business intelligence interface reference"
    ]
  },
  "/applied-ai/": {
    "heading": "Applied AI: Interface Options",
    "toolsHeading": "Applied AI: Web Tool Reference",
    "imageAlts": [
      "React logo in the applied ai interface reference",
      "Vue logo in the applied ai interface reference",
      "Angular logo in the applied ai interface reference",
      "Svelte logo in the applied ai interface reference",
      "Solid logo in the applied ai interface reference",
      "Next.js logo in the applied ai interface reference",
      "Tailwind CSS logo in the applied ai interface reference",
      "Redux logo in the applied ai interface reference",
      "GraphQL logo in the applied ai interface reference",
      "Vite logo in the applied ai interface reference",
      "Webpack logo in the applied ai interface reference",
      "Material UI logo in the applied ai interface reference",
      "Jest logo in the applied ai interface reference"
    ]
  },
  "/hris-software/": {
    "heading": "HR Systems: Interface Options",
    "toolsHeading": "HR Systems: Web Tool Reference",
    "imageAlts": [
      "React logo in the hr information systems interface reference",
      "Vue logo in the hr information systems interface reference",
      "Angular logo in the hr information systems interface reference",
      "Svelte logo in the hr information systems interface reference",
      "Solid logo in the hr information systems interface reference",
      "Next.js logo in the hr information systems interface reference",
      "Tailwind CSS logo in the hr information systems interface reference",
      "Redux logo in the hr information systems interface reference",
      "GraphQL logo in the hr information systems interface reference",
      "Vite logo in the hr information systems interface reference",
      "Webpack logo in the hr information systems interface reference",
      "Material UI logo in the hr information systems interface reference",
      "Jest logo in the hr information systems interface reference"
    ]
  },
  "/corporate-lms/": {
    "heading": "Learning: Interface Options",
    "toolsHeading": "Learning: Web Tool Reference",
    "imageAlts": [
      "React logo in the corporate learning interface reference",
      "Vue logo in the corporate learning interface reference",
      "Angular logo in the corporate learning interface reference",
      "Svelte logo in the corporate learning interface reference",
      "Solid logo in the corporate learning interface reference",
      "Next.js logo in the corporate learning interface reference",
      "Tailwind CSS logo in the corporate learning interface reference",
      "Redux logo in the corporate learning interface reference",
      "GraphQL logo in the corporate learning interface reference",
      "Vite logo in the corporate learning interface reference",
      "Webpack logo in the corporate learning interface reference",
      "Material UI logo in the corporate learning interface reference",
      "Jest logo in the corporate learning interface reference"
    ]
  },
  "/med-devices-software/": {
    "heading": "Device Apps: Interface Options",
    "toolsHeading": "Device Apps: Web Tool Reference",
    "imageAlts": [
      "React logo in the medical device software interface reference",
      "Vue logo in the medical device software interface reference",
      "Angular logo in the medical device software interface reference",
      "Svelte logo in the medical device software interface reference",
      "Solid logo in the medical device software interface reference",
      "Next.js logo in the medical device software interface reference",
      "Tailwind CSS logo in the medical device software interface reference",
      "Redux logo in the medical device software interface reference",
      "GraphQL logo in the medical device software interface reference",
      "Vite logo in the medical device software interface reference",
      "Webpack logo in the medical device software interface reference",
      "Material UI logo in the medical device software interface reference",
      "Jest logo in the medical device software interface reference"
    ]
  },
  "/behavioral-health-it/": {
    "heading": "Care Apps: Interface Options",
    "toolsHeading": "Care Apps: Web Tool Reference",
    "imageAlts": [
      "React logo in the behavioral health it interface reference",
      "Vue logo in the behavioral health it interface reference",
      "Angular logo in the behavioral health it interface reference",
      "Svelte logo in the behavioral health it interface reference",
      "Solid logo in the behavioral health it interface reference",
      "Next.js logo in the behavioral health it interface reference",
      "Tailwind CSS logo in the behavioral health it interface reference",
      "Redux logo in the behavioral health it interface reference",
      "GraphQL logo in the behavioral health it interface reference",
      "Vite logo in the behavioral health it interface reference",
      "Webpack logo in the behavioral health it interface reference",
      "Material UI logo in the behavioral health it interface reference",
      "Jest logo in the behavioral health it interface reference"
    ]
  },
  "/lab-info-systems/": {
    "heading": "Lab Systems: Interface Options",
    "toolsHeading": "Lab Systems: Web Tool Reference",
    "imageAlts": [
      "React logo in the laboratory systems interface reference",
      "Vue logo in the laboratory systems interface reference",
      "Angular logo in the laboratory systems interface reference",
      "Svelte logo in the laboratory systems interface reference",
      "Solid logo in the laboratory systems interface reference",
      "Next.js logo in the laboratory systems interface reference",
      "Tailwind CSS logo in the laboratory systems interface reference",
      "Redux logo in the laboratory systems interface reference",
      "GraphQL logo in the laboratory systems interface reference",
      "Vite logo in the laboratory systems interface reference",
      "Webpack logo in the laboratory systems interface reference",
      "Material UI logo in the laboratory systems interface reference",
      "Jest logo in the laboratory systems interface reference"
    ]
  },
  "/pharma-biotech/": {
    "heading": "Pharma IT: Interface Options",
    "toolsHeading": "Pharma IT: Web Tool Reference",
    "imageAlts": [
      "React logo in the pharma and biotech interface reference",
      "Vue logo in the pharma and biotech interface reference",
      "Angular logo in the pharma and biotech interface reference",
      "Svelte logo in the pharma and biotech interface reference",
      "Solid logo in the pharma and biotech interface reference",
      "Next.js logo in the pharma and biotech interface reference",
      "Tailwind CSS logo in the pharma and biotech interface reference",
      "Redux logo in the pharma and biotech interface reference",
      "GraphQL logo in the pharma and biotech interface reference",
      "Vite logo in the pharma and biotech interface reference",
      "Webpack logo in the pharma and biotech interface reference",
      "Material UI logo in the pharma and biotech interface reference",
      "Jest logo in the pharma and biotech interface reference"
    ]
  },
  "/medtech-startups/": {
    "heading": "Medtech: Interface Options",
    "toolsHeading": "Medtech: Web Tool Reference",
    "imageAlts": [
      "React logo in the medtech products interface reference",
      "Vue logo in the medtech products interface reference",
      "Angular logo in the medtech products interface reference",
      "Svelte logo in the medtech products interface reference",
      "Solid logo in the medtech products interface reference",
      "Next.js logo in the medtech products interface reference",
      "Tailwind CSS logo in the medtech products interface reference",
      "Redux logo in the medtech products interface reference",
      "GraphQL logo in the medtech products interface reference",
      "Vite logo in the medtech products interface reference",
      "Webpack logo in the medtech products interface reference",
      "Material UI logo in the medtech products interface reference",
      "Jest logo in the medtech products interface reference"
    ]
  },
  "/public-health-systems/": {
    "heading": "Public Health: Interface Options",
    "toolsHeading": "Public Health: Web Tool Reference",
    "imageAlts": [
      "React logo in the public health systems interface reference",
      "Vue logo in the public health systems interface reference",
      "Angular logo in the public health systems interface reference",
      "Svelte logo in the public health systems interface reference",
      "Solid logo in the public health systems interface reference",
      "Next.js logo in the public health systems interface reference",
      "Tailwind CSS logo in the public health systems interface reference",
      "Redux logo in the public health systems interface reference",
      "GraphQL logo in the public health systems interface reference",
      "Vite logo in the public health systems interface reference",
      "Webpack logo in the public health systems interface reference",
      "Material UI logo in the public health systems interface reference",
      "Jest logo in the public health systems interface reference"
    ]
  },
  "/wellness-apps/": {
    "heading": "Wellness: Interface Options",
    "toolsHeading": "Wellness: Web Tool Reference",
    "imageAlts": [
      "React logo in the wellness applications interface reference",
      "Vue logo in the wellness applications interface reference",
      "Angular logo in the wellness applications interface reference",
      "Svelte logo in the wellness applications interface reference",
      "Solid logo in the wellness applications interface reference",
      "Next.js logo in the wellness applications interface reference",
      "Tailwind CSS logo in the wellness applications interface reference",
      "Redux logo in the wellness applications interface reference",
      "GraphQL logo in the wellness applications interface reference",
      "Vite logo in the wellness applications interface reference",
      "Webpack logo in the wellness applications interface reference",
      "Material UI logo in the wellness applications interface reference",
      "Jest logo in the wellness applications interface reference"
    ]
  },
  "/insurtech/": {
    "heading": "Insurance: Interface Options",
    "toolsHeading": "Insurance: Web Tool Reference",
    "imageAlts": [
      "React logo in the insurance software interface reference",
      "Vue logo in the insurance software interface reference",
      "Angular logo in the insurance software interface reference",
      "Svelte logo in the insurance software interface reference",
      "Solid logo in the insurance software interface reference",
      "Next.js logo in the insurance software interface reference",
      "Tailwind CSS logo in the insurance software interface reference",
      "Redux logo in the insurance software interface reference",
      "GraphQL logo in the insurance software interface reference",
      "Vite logo in the insurance software interface reference",
      "Webpack logo in the insurance software interface reference",
      "Material UI logo in the insurance software interface reference",
      "Jest logo in the insurance software interface reference"
    ]
  },
  "/wealth-management-tech/": {
    "heading": "Wealth: Interface Options",
    "toolsHeading": "Wealth: Web Tool Reference",
    "imageAlts": [
      "React logo in the wealth management interface reference",
      "Vue logo in the wealth management interface reference",
      "Angular logo in the wealth management interface reference",
      "Svelte logo in the wealth management interface reference",
      "Solid logo in the wealth management interface reference",
      "Next.js logo in the wealth management interface reference",
      "Tailwind CSS logo in the wealth management interface reference",
      "Redux logo in the wealth management interface reference",
      "GraphQL logo in the wealth management interface reference",
      "Vite logo in the wealth management interface reference",
      "Webpack logo in the wealth management interface reference",
      "Material UI logo in the wealth management interface reference",
      "Jest logo in the wealth management interface reference"
    ]
  },
  "/digital-lending/": {
    "heading": "Lending: Interface Options",
    "toolsHeading": "Lending: Web Tool Reference",
    "imageAlts": [
      "React logo in the digital lending interface reference",
      "Vue logo in the digital lending interface reference",
      "Angular logo in the digital lending interface reference",
      "Svelte logo in the digital lending interface reference",
      "Solid logo in the digital lending interface reference",
      "Next.js logo in the digital lending interface reference",
      "Tailwind CSS logo in the digital lending interface reference",
      "Redux logo in the digital lending interface reference",
      "GraphQL logo in the digital lending interface reference",
      "Vite logo in the digital lending interface reference",
      "Webpack logo in the digital lending interface reference",
      "Material UI logo in the digital lending interface reference",
      "Jest logo in the digital lending interface reference"
    ]
  },
  "/fintech-engineering/": {
    "heading": "Fintech: Interface Options",
    "toolsHeading": "Fintech: Web Tool Reference",
    "imageAlts": [
      "React logo in the fintech engineering interface reference",
      "Vue logo in the fintech engineering interface reference",
      "Angular logo in the fintech engineering interface reference",
      "Svelte logo in the fintech engineering interface reference",
      "Solid logo in the fintech engineering interface reference",
      "Next.js logo in the fintech engineering interface reference",
      "Tailwind CSS logo in the fintech engineering interface reference",
      "Redux logo in the fintech engineering interface reference",
      "GraphQL logo in the fintech engineering interface reference",
      "Vite logo in the fintech engineering interface reference",
      "Webpack logo in the fintech engineering interface reference",
      "Material UI logo in the fintech engineering interface reference",
      "Jest logo in the fintech engineering interface reference"
    ]
  },
  "/payment-gateways/": {
    "heading": "Payments: Interface Options",
    "toolsHeading": "Payments: Web Tool Reference",
    "imageAlts": [
      "React logo in the payment gateways interface reference",
      "Vue logo in the payment gateways interface reference",
      "Angular logo in the payment gateways interface reference",
      "Svelte logo in the payment gateways interface reference",
      "Solid logo in the payment gateways interface reference",
      "Next.js logo in the payment gateways interface reference",
      "Tailwind CSS logo in the payment gateways interface reference",
      "Redux logo in the payment gateways interface reference",
      "GraphQL logo in the payment gateways interface reference",
      "Vite logo in the payment gateways interface reference",
      "Webpack logo in the payment gateways interface reference",
      "Material UI logo in the payment gateways interface reference",
      "Jest logo in the payment gateways interface reference"
    ]
  },
  "/smart-manufacturing/": {
    "heading": "Factory IT: Interface Options",
    "toolsHeading": "Factory IT: Web Tool Reference",
    "imageAlts": [
      "React logo in the smart manufacturing interface reference",
      "Vue logo in the smart manufacturing interface reference",
      "Angular logo in the smart manufacturing interface reference",
      "Svelte logo in the smart manufacturing interface reference",
      "Solid logo in the smart manufacturing interface reference",
      "Next.js logo in the smart manufacturing interface reference",
      "Tailwind CSS logo in the smart manufacturing interface reference",
      "Redux logo in the smart manufacturing interface reference",
      "GraphQL logo in the smart manufacturing interface reference",
      "Vite logo in the smart manufacturing interface reference",
      "Webpack logo in the smart manufacturing interface reference",
      "Material UI logo in the smart manufacturing interface reference",
      "Jest logo in the smart manufacturing interface reference"
    ]
  },
  "/logistics-software/": {
    "heading": "Logistics: Interface Options",
    "toolsHeading": "Logistics: Web Tool Reference",
    "imageAlts": [
      "React logo in the logistics software interface reference",
      "Vue logo in the logistics software interface reference",
      "Angular logo in the logistics software interface reference",
      "Svelte logo in the logistics software interface reference",
      "Solid logo in the logistics software interface reference",
      "Next.js logo in the logistics software interface reference",
      "Tailwind CSS logo in the logistics software interface reference",
      "Redux logo in the logistics software interface reference",
      "GraphQL logo in the logistics software interface reference",
      "Vite logo in the logistics software interface reference",
      "Webpack logo in the logistics software interface reference",
      "Material UI logo in the logistics software interface reference",
      "Jest logo in the logistics software interface reference"
    ]
  },
  "/energy-utilities/": {
    "heading": "Utilities: Interface Options",
    "toolsHeading": "Utilities: Web Tool Reference",
    "imageAlts": [
      "React logo in the energy and utilities interface reference",
      "Vue logo in the energy and utilities interface reference",
      "Angular logo in the energy and utilities interface reference",
      "Svelte logo in the energy and utilities interface reference",
      "Solid logo in the energy and utilities interface reference",
      "Next.js logo in the energy and utilities interface reference",
      "Tailwind CSS logo in the energy and utilities interface reference",
      "Redux logo in the energy and utilities interface reference",
      "GraphQL logo in the energy and utilities interface reference",
      "Vite logo in the energy and utilities interface reference",
      "Webpack logo in the energy and utilities interface reference",
      "Material UI logo in the energy and utilities interface reference",
      "Jest logo in the energy and utilities interface reference"
    ]
  },
  "/professional-services-it/": {
    "heading": "Client Work: Interface Options",
    "toolsHeading": "Client Work: Web Tool Reference",
    "imageAlts": [
      "React logo in the professional services interface reference",
      "Vue logo in the professional services interface reference",
      "Angular logo in the professional services interface reference",
      "Svelte logo in the professional services interface reference",
      "Solid logo in the professional services interface reference",
      "Next.js logo in the professional services interface reference",
      "Tailwind CSS logo in the professional services interface reference",
      "Redux logo in the professional services interface reference",
      "GraphQL logo in the professional services interface reference",
      "Vite logo in the professional services interface reference",
      "Webpack logo in the professional services interface reference",
      "Material UI logo in the professional services interface reference",
      "Jest logo in the professional services interface reference"
    ]
  },
  "/real-estate/": {
    "heading": "Real Estate: Interface Options",
    "toolsHeading": "Real Estate: Web Tool Reference",
    "imageAlts": [
      "React logo in the real estate interface reference",
      "Vue logo in the real estate interface reference",
      "Angular logo in the real estate interface reference",
      "Svelte logo in the real estate interface reference",
      "Solid logo in the real estate interface reference",
      "Next.js logo in the real estate interface reference",
      "Tailwind CSS logo in the real estate interface reference",
      "Redux logo in the real estate interface reference",
      "GraphQL logo in the real estate interface reference",
      "Vite logo in the real estate interface reference",
      "Webpack logo in the real estate interface reference",
      "Material UI logo in the real estate interface reference",
      "Jest logo in the real estate interface reference"
    ]
  },
  "/construction-it/": {
    "heading": "Site IT: Interface Options",
    "toolsHeading": "Site IT: Web Tool Reference",
    "imageAlts": [
      "React logo in the construction software interface reference",
      "Vue logo in the construction software interface reference",
      "Angular logo in the construction software interface reference",
      "Svelte logo in the construction software interface reference",
      "Solid logo in the construction software interface reference",
      "Next.js logo in the construction software interface reference",
      "Tailwind CSS logo in the construction software interface reference",
      "Redux logo in the construction software interface reference",
      "GraphQL logo in the construction software interface reference",
      "Vite logo in the construction software interface reference",
      "Webpack logo in the construction software interface reference",
      "Material UI logo in the construction software interface reference",
      "Jest logo in the construction software interface reference"
    ]
  },
  "/hospitality-tech/": {
    "heading": "Hospitality: Interface Options",
    "toolsHeading": "Hospitality: Web Tool Reference",
    "imageAlts": [
      "React logo in the hospitality software interface reference",
      "Vue logo in the hospitality software interface reference",
      "Angular logo in the hospitality software interface reference",
      "Svelte logo in the hospitality software interface reference",
      "Solid logo in the hospitality software interface reference",
      "Next.js logo in the hospitality software interface reference",
      "Tailwind CSS logo in the hospitality software interface reference",
      "Redux logo in the hospitality software interface reference",
      "GraphQL logo in the hospitality software interface reference",
      "Vite logo in the hospitality software interface reference",
      "Webpack logo in the hospitality software interface reference",
      "Material UI logo in the hospitality software interface reference",
      "Jest logo in the hospitality software interface reference"
    ]
  },
  "/about/": {
    "heading": "Principles: Interface Options",
    "toolsHeading": "Principles: Web Tool Reference",
    "imageAlts": [
      "React logo in the agency principles interface reference",
      "Vue logo in the agency principles interface reference",
      "Angular logo in the agency principles interface reference",
      "Svelte logo in the agency principles interface reference",
      "Solid logo in the agency principles interface reference",
      "Next.js logo in the agency principles interface reference",
      "Tailwind CSS logo in the agency principles interface reference",
      "Redux logo in the agency principles interface reference",
      "GraphQL logo in the agency principles interface reference",
      "Vite logo in the agency principles interface reference",
      "Webpack logo in the agency principles interface reference",
      "Material UI logo in the agency principles interface reference",
      "Jest logo in the agency principles interface reference"
    ]
  },
  "/our-agency/": {
    "heading": "Agency Scope: Interface Options",
    "toolsHeading": "Agency Scope: Web Tool Reference",
    "imageAlts": [
      "React logo in the agency capabilities interface reference",
      "Vue logo in the agency capabilities interface reference",
      "Angular logo in the agency capabilities interface reference",
      "Svelte logo in the agency capabilities interface reference",
      "Solid logo in the agency capabilities interface reference",
      "Next.js logo in the agency capabilities interface reference",
      "Tailwind CSS logo in the agency capabilities interface reference",
      "Redux logo in the agency capabilities interface reference",
      "GraphQL logo in the agency capabilities interface reference",
      "Vite logo in the agency capabilities interface reference",
      "Webpack logo in the agency capabilities interface reference",
      "Material UI logo in the agency capabilities interface reference",
      "Jest logo in the agency capabilities interface reference"
    ]
  },
  "/our-vision/": {
    "heading": "Our Vision: Interface Options",
    "toolsHeading": "Our Vision: Web Tool Reference",
    "imageAlts": [
      "React logo in the engineering vision interface reference",
      "Vue logo in the engineering vision interface reference",
      "Angular logo in the engineering vision interface reference",
      "Svelte logo in the engineering vision interface reference",
      "Solid logo in the engineering vision interface reference",
      "Next.js logo in the engineering vision interface reference",
      "Tailwind CSS logo in the engineering vision interface reference",
      "Redux logo in the engineering vision interface reference",
      "GraphQL logo in the engineering vision interface reference",
      "Vite logo in the engineering vision interface reference",
      "Webpack logo in the engineering vision interface reference",
      "Material UI logo in the engineering vision interface reference",
      "Jest logo in the engineering vision interface reference"
    ]
  },
  "/quality-standards/": {
    "heading": "Quality: Interface Options",
    "toolsHeading": "Quality: Web Tool Reference",
    "imageAlts": [
      "React logo in the quality standards interface reference",
      "Vue logo in the quality standards interface reference",
      "Angular logo in the quality standards interface reference",
      "Svelte logo in the quality standards interface reference",
      "Solid logo in the quality standards interface reference",
      "Next.js logo in the quality standards interface reference",
      "Tailwind CSS logo in the quality standards interface reference",
      "Redux logo in the quality standards interface reference",
      "GraphQL logo in the quality standards interface reference",
      "Vite logo in the quality standards interface reference",
      "Webpack logo in the quality standards interface reference",
      "Material UI logo in the quality standards interface reference",
      "Jest logo in the quality standards interface reference"
    ]
  },
  "/directors/": {
    "heading": "Leaders: Interface Options",
    "toolsHeading": "Leaders: Web Tool Reference",
    "imageAlts": [
      "React logo in the technical leadership interface reference",
      "Vue logo in the technical leadership interface reference",
      "Angular logo in the technical leadership interface reference",
      "Svelte logo in the technical leadership interface reference",
      "Solid logo in the technical leadership interface reference",
      "Next.js logo in the technical leadership interface reference",
      "Tailwind CSS logo in the technical leadership interface reference",
      "Redux logo in the technical leadership interface reference",
      "GraphQL logo in the technical leadership interface reference",
      "Vite logo in the technical leadership interface reference",
      "Webpack logo in the technical leadership interface reference",
      "Material UI logo in the technical leadership interface reference",
      "Jest logo in the technical leadership interface reference"
    ]
  },
  "/the-engineers/": {
    "heading": "Tech Roles: Interface Options",
    "toolsHeading": "Tech Roles: Web Tool Reference",
    "imageAlts": [
      "React logo in the engineering roles interface reference",
      "Vue logo in the engineering roles interface reference",
      "Angular logo in the engineering roles interface reference",
      "Svelte logo in the engineering roles interface reference",
      "Solid logo in the engineering roles interface reference",
      "Next.js logo in the engineering roles interface reference",
      "Tailwind CSS logo in the engineering roles interface reference",
      "Redux logo in the engineering roles interface reference",
      "GraphQL logo in the engineering roles interface reference",
      "Vite logo in the engineering roles interface reference",
      "Webpack logo in the engineering roles interface reference",
      "Material UI logo in the engineering roles interface reference",
      "Jest logo in the engineering roles interface reference"
    ]
  },
  "/case-studies/": {
    "heading": "Case Studies: Interface Options",
    "toolsHeading": "Case Studies: Web Tool Reference",
    "imageAlts": [
      "React logo in the project case studies interface reference",
      "Vue logo in the project case studies interface reference",
      "Angular logo in the project case studies interface reference",
      "Svelte logo in the project case studies interface reference",
      "Solid logo in the project case studies interface reference",
      "Next.js logo in the project case studies interface reference",
      "Tailwind CSS logo in the project case studies interface reference",
      "Redux logo in the project case studies interface reference",
      "GraphQL logo in the project case studies interface reference",
      "Vite logo in the project case studies interface reference",
      "Webpack logo in the project case studies interface reference",
      "Material UI logo in the project case studies interface reference",
      "Jest logo in the project case studies interface reference"
    ]
  },
  "/client-feedback/": {
    "heading": "Feedback: Interface Options",
    "toolsHeading": "Feedback: Web Tool Reference",
    "imageAlts": [
      "React logo in the client feedback interface reference",
      "Vue logo in the client feedback interface reference",
      "Angular logo in the client feedback interface reference",
      "Svelte logo in the client feedback interface reference",
      "Solid logo in the client feedback interface reference",
      "Next.js logo in the client feedback interface reference",
      "Tailwind CSS logo in the client feedback interface reference",
      "Redux logo in the client feedback interface reference",
      "GraphQL logo in the client feedback interface reference",
      "Vite logo in the client feedback interface reference",
      "Webpack logo in the client feedback interface reference",
      "Material UI logo in the client feedback interface reference",
      "Jest logo in the client feedback interface reference"
    ]
  },
  "/tech-alliances/": {
    "heading": "Tech Links: Interface Options",
    "toolsHeading": "Tech Links: Web Tool Reference",
    "imageAlts": [
      "React logo in the technology relationships interface reference",
      "Vue logo in the technology relationships interface reference",
      "Angular logo in the technology relationships interface reference",
      "Svelte logo in the technology relationships interface reference",
      "Solid logo in the technology relationships interface reference",
      "Next.js logo in the technology relationships interface reference",
      "Tailwind CSS logo in the technology relationships interface reference",
      "Redux logo in the technology relationships interface reference",
      "GraphQL logo in the technology relationships interface reference",
      "Vite logo in the technology relationships interface reference",
      "Webpack logo in the technology relationships interface reference",
      "Material UI logo in the technology relationships interface reference",
      "Jest logo in the technology relationships interface reference"
    ]
  },
  "/global-presence/": {
    "heading": "Teamwork: Interface Options",
    "toolsHeading": "Teamwork: Web Tool Reference",
    "imageAlts": [
      "React logo in the distributed collaboration interface reference",
      "Vue logo in the distributed collaboration interface reference",
      "Angular logo in the distributed collaboration interface reference",
      "Svelte logo in the distributed collaboration interface reference",
      "Solid logo in the distributed collaboration interface reference",
      "Next.js logo in the distributed collaboration interface reference",
      "Tailwind CSS logo in the distributed collaboration interface reference",
      "Redux logo in the distributed collaboration interface reference",
      "GraphQL logo in the distributed collaboration interface reference",
      "Vite logo in the distributed collaboration interface reference",
      "Webpack logo in the distributed collaboration interface reference",
      "Material UI logo in the distributed collaboration interface reference",
      "Jest logo in the distributed collaboration interface reference"
    ]
  },
  "/onboarding-workflow/": {
    "heading": "Onboard: Interface Options",
    "toolsHeading": "Onboard: Web Tool Reference",
    "imageAlts": [
      "React logo in the developer onboarding interface reference",
      "Vue logo in the developer onboarding interface reference",
      "Angular logo in the developer onboarding interface reference",
      "Svelte logo in the developer onboarding interface reference",
      "Solid logo in the developer onboarding interface reference",
      "Next.js logo in the developer onboarding interface reference",
      "Tailwind CSS logo in the developer onboarding interface reference",
      "Redux logo in the developer onboarding interface reference",
      "GraphQL logo in the developer onboarding interface reference",
      "Vite logo in the developer onboarding interface reference",
      "Webpack logo in the developer onboarding interface reference",
      "Material UI logo in the developer onboarding interface reference",
      "Jest logo in the developer onboarding interface reference"
    ]
  },
  "/engagement-models/": {
    "heading": "Team Terms: Interface Options",
    "toolsHeading": "Team Terms: Web Tool Reference",
    "imageAlts": [
      "React logo in the engagement models interface reference",
      "Vue logo in the engagement models interface reference",
      "Angular logo in the engagement models interface reference",
      "Svelte logo in the engagement models interface reference",
      "Solid logo in the engagement models interface reference",
      "Next.js logo in the engagement models interface reference",
      "Tailwind CSS logo in the engagement models interface reference",
      "Redux logo in the engagement models interface reference",
      "GraphQL logo in the engagement models interface reference",
      "Vite logo in the engagement models interface reference",
      "Webpack logo in the engagement models interface reference",
      "Material UI logo in the engagement models interface reference",
      "Jest logo in the engagement models interface reference"
    ]
  },
  "/agile-pmo/": {
    "heading": "Agile PMO: Interface Options",
    "toolsHeading": "Agile PMO: Web Tool Reference",
    "imageAlts": [
      "React logo in the agile project governance interface reference",
      "Vue logo in the agile project governance interface reference",
      "Angular logo in the agile project governance interface reference",
      "Svelte logo in the agile project governance interface reference",
      "Solid logo in the agile project governance interface reference",
      "Next.js logo in the agile project governance interface reference",
      "Tailwind CSS logo in the agile project governance interface reference",
      "Redux logo in the agile project governance interface reference",
      "GraphQL logo in the agile project governance interface reference",
      "Vite logo in the agile project governance interface reference",
      "Webpack logo in the agile project governance interface reference",
      "Material UI logo in the agile project governance interface reference",
      "Jest logo in the agile project governance interface reference"
    ]
  },
  "/system-design-hub/": {
    "heading": "System Design: Interface Options",
    "toolsHeading": "System Design: Web Tool Reference",
    "imageAlts": [
      "React logo in the system design interface reference",
      "Vue logo in the system design interface reference",
      "Angular logo in the system design interface reference",
      "Svelte logo in the system design interface reference",
      "Solid logo in the system design interface reference",
      "Next.js logo in the system design interface reference",
      "Tailwind CSS logo in the system design interface reference",
      "Redux logo in the system design interface reference",
      "GraphQL logo in the system design interface reference",
      "Vite logo in the system design interface reference",
      "Webpack logo in the system design interface reference",
      "Material UI logo in the system design interface reference",
      "Jest logo in the system design interface reference"
    ]
  },
  "/innovation-labs/": {
    "heading": "Tech Tests: Interface Options",
    "toolsHeading": "Tech Tests: Web Tool Reference",
    "imageAlts": [
      "React logo in the technical experiments interface reference",
      "Vue logo in the technical experiments interface reference",
      "Angular logo in the technical experiments interface reference",
      "Svelte logo in the technical experiments interface reference",
      "Solid logo in the technical experiments interface reference",
      "Next.js logo in the technical experiments interface reference",
      "Tailwind CSS logo in the technical experiments interface reference",
      "Redux logo in the technical experiments interface reference",
      "GraphQL logo in the technical experiments interface reference",
      "Vite logo in the technical experiments interface reference",
      "Webpack logo in the technical experiments interface reference",
      "Material UI logo in the technical experiments interface reference",
      "Jest logo in the technical experiments interface reference"
    ]
  },
  "/delivery-framework/": {
    "heading": "Delivery: Interface Options",
    "toolsHeading": "Delivery: Web Tool Reference",
    "imageAlts": [
      "React logo in the delivery practices interface reference",
      "Vue logo in the delivery practices interface reference",
      "Angular logo in the delivery practices interface reference",
      "Svelte logo in the delivery practices interface reference",
      "Solid logo in the delivery practices interface reference",
      "Next.js logo in the delivery practices interface reference",
      "Tailwind CSS logo in the delivery practices interface reference",
      "Redux logo in the delivery practices interface reference",
      "GraphQL logo in the delivery practices interface reference",
      "Vite logo in the delivery practices interface reference",
      "Webpack logo in the delivery practices interface reference",
      "Material UI logo in the delivery practices interface reference",
      "Jest logo in the delivery practices interface reference"
    ]
  },
  "/security-posture/": {
    "heading": "Security: Interface Options",
    "toolsHeading": "Security: Web Tool Reference",
    "imageAlts": [
      "React logo in the security practices interface reference",
      "Vue logo in the security practices interface reference",
      "Angular logo in the security practices interface reference",
      "Svelte logo in the security practices interface reference",
      "Solid logo in the security practices interface reference",
      "Next.js logo in the security practices interface reference",
      "Tailwind CSS logo in the security practices interface reference",
      "Redux logo in the security practices interface reference",
      "GraphQL logo in the security practices interface reference",
      "Vite logo in the security practices interface reference",
      "Webpack logo in the security practices interface reference",
      "Material UI logo in the security practices interface reference",
      "Jest logo in the security practices interface reference"
    ]
  },
  "/co-innovation/": {
    "heading": "Joint Work: Interface Options",
    "toolsHeading": "Joint Work: Web Tool Reference",
    "imageAlts": [
      "React logo in the joint engineering interface reference",
      "Vue logo in the joint engineering interface reference",
      "Angular logo in the joint engineering interface reference",
      "Svelte logo in the joint engineering interface reference",
      "Solid logo in the joint engineering interface reference",
      "Next.js logo in the joint engineering interface reference",
      "Tailwind CSS logo in the joint engineering interface reference",
      "Redux logo in the joint engineering interface reference",
      "GraphQL logo in the joint engineering interface reference",
      "Vite logo in the joint engineering interface reference",
      "Webpack logo in the joint engineering interface reference",
      "Material UI logo in the joint engineering interface reference",
      "Jest logo in the joint engineering interface reference"
    ]
  },
  "/green-it/": {
    "heading": "Efficiency: Interface Options",
    "toolsHeading": "Efficiency: Web Tool Reference",
    "imageAlts": [
      "React logo in the resource efficiency interface reference",
      "Vue logo in the resource efficiency interface reference",
      "Angular logo in the resource efficiency interface reference",
      "Svelte logo in the resource efficiency interface reference",
      "Solid logo in the resource efficiency interface reference",
      "Next.js logo in the resource efficiency interface reference",
      "Tailwind CSS logo in the resource efficiency interface reference",
      "Redux logo in the resource efficiency interface reference",
      "GraphQL logo in the resource efficiency interface reference",
      "Vite logo in the resource efficiency interface reference",
      "Webpack logo in the resource efficiency interface reference",
      "Material UI logo in the resource efficiency interface reference",
      "Jest logo in the resource efficiency interface reference"
    ]
  },
  "/webinars-talks/": {
    "heading": "Tech Talks: Interface Options",
    "toolsHeading": "Tech Talks: Web Tool Reference",
    "imageAlts": [
      "React logo in the technical talks interface reference",
      "Vue logo in the technical talks interface reference",
      "Angular logo in the technical talks interface reference",
      "Svelte logo in the technical talks interface reference",
      "Solid logo in the technical talks interface reference",
      "Next.js logo in the technical talks interface reference",
      "Tailwind CSS logo in the technical talks interface reference",
      "Redux logo in the technical talks interface reference",
      "GraphQL logo in the technical talks interface reference",
      "Vite logo in the technical talks interface reference",
      "Webpack logo in the technical talks interface reference",
      "Material UI logo in the technical talks interface reference",
      "Jest logo in the technical talks interface reference"
    ]
  },
  "/press-coverage/": {
    "heading": "Press: Interface Options",
    "toolsHeading": "Press: Web Tool Reference",
    "imageAlts": [
      "React logo in the press coverage interface reference",
      "Vue logo in the press coverage interface reference",
      "Angular logo in the press coverage interface reference",
      "Svelte logo in the press coverage interface reference",
      "Solid logo in the press coverage interface reference",
      "Next.js logo in the press coverage interface reference",
      "Tailwind CSS logo in the press coverage interface reference",
      "Redux logo in the press coverage interface reference",
      "GraphQL logo in the press coverage interface reference",
      "Vite logo in the press coverage interface reference",
      "Webpack logo in the press coverage interface reference",
      "Material UI logo in the press coverage interface reference",
      "Jest logo in the press coverage interface reference"
    ]
  },
  "/leadership-insights/": {
    "heading": "Insights: Interface Options",
    "toolsHeading": "Insights: Web Tool Reference",
    "imageAlts": [
      "React logo in the leadership insights interface reference",
      "Vue logo in the leadership insights interface reference",
      "Angular logo in the leadership insights interface reference",
      "Svelte logo in the leadership insights interface reference",
      "Solid logo in the leadership insights interface reference",
      "Next.js logo in the leadership insights interface reference",
      "Tailwind CSS logo in the leadership insights interface reference",
      "Redux logo in the leadership insights interface reference",
      "GraphQL logo in the leadership insights interface reference",
      "Vite logo in the leadership insights interface reference",
      "Webpack logo in the leadership insights interface reference",
      "Material UI logo in the leadership insights interface reference",
      "Jest logo in the leadership insights interface reference"
    ]
  },
  "/tech-blog/": {
    "heading": "Tech Writing: Interface Options",
    "toolsHeading": "Tech Writing: Web Tool Reference",
    "imageAlts": [
      "React logo in the engineering articles interface reference",
      "Vue logo in the engineering articles interface reference",
      "Angular logo in the engineering articles interface reference",
      "Svelte logo in the engineering articles interface reference",
      "Solid logo in the engineering articles interface reference",
      "Next.js logo in the engineering articles interface reference",
      "Tailwind CSS logo in the engineering articles interface reference",
      "Redux logo in the engineering articles interface reference",
      "GraphQL logo in the engineering articles interface reference",
      "Vite logo in the engineering articles interface reference",
      "Webpack logo in the engineering articles interface reference",
      "Material UI logo in the engineering articles interface reference",
      "Jest logo in the engineering articles interface reference"
    ]
  },
  "/agency-updates/": {
    "heading": "News: Interface Options",
    "toolsHeading": "News: Web Tool Reference",
    "imageAlts": [
      "React logo in the agency updates interface reference",
      "Vue logo in the agency updates interface reference",
      "Angular logo in the agency updates interface reference",
      "Svelte logo in the agency updates interface reference",
      "Solid logo in the agency updates interface reference",
      "Next.js logo in the agency updates interface reference",
      "Tailwind CSS logo in the agency updates interface reference",
      "Redux logo in the agency updates interface reference",
      "GraphQL logo in the agency updates interface reference",
      "Vite logo in the agency updates interface reference",
      "Webpack logo in the agency updates interface reference",
      "Material UI logo in the agency updates interface reference",
      "Jest logo in the agency updates interface reference"
    ]
  },
  "/press-kit/": {
    "heading": "Media Files: Interface Options",
    "toolsHeading": "Media Files: Web Tool Reference",
    "imageAlts": [
      "React logo in the media resources interface reference",
      "Vue logo in the media resources interface reference",
      "Angular logo in the media resources interface reference",
      "Svelte logo in the media resources interface reference",
      "Solid logo in the media resources interface reference",
      "Next.js logo in the media resources interface reference",
      "Tailwind CSS logo in the media resources interface reference",
      "Redux logo in the media resources interface reference",
      "GraphQL logo in the media resources interface reference",
      "Vite logo in the media resources interface reference",
      "Webpack logo in the media resources interface reference",
      "Material UI logo in the media resources interface reference",
      "Jest logo in the media resources interface reference"
    ]
  },
  "/media-spokespersons/": {
    "heading": "Attribution: Interface Options",
    "toolsHeading": "Attribution: Web Tool Reference",
    "imageAlts": [
      "React logo in the media attribution interface reference",
      "Vue logo in the media attribution interface reference",
      "Angular logo in the media attribution interface reference",
      "Svelte logo in the media attribution interface reference",
      "Solid logo in the media attribution interface reference",
      "Next.js logo in the media attribution interface reference",
      "Tailwind CSS logo in the media attribution interface reference",
      "Redux logo in the media attribution interface reference",
      "GraphQL logo in the media attribution interface reference",
      "Vite logo in the media attribution interface reference",
      "Webpack logo in the media attribution interface reference",
      "Material UI logo in the media attribution interface reference",
      "Jest logo in the media attribution interface reference"
    ]
  },
  "/hiring-workflow/": {
    "heading": "Hiring: Interface Options",
    "toolsHeading": "Hiring: Web Tool Reference",
    "imageAlts": [
      "React logo in the engineering hiring interface reference",
      "Vue logo in the engineering hiring interface reference",
      "Angular logo in the engineering hiring interface reference",
      "Svelte logo in the engineering hiring interface reference",
      "Solid logo in the engineering hiring interface reference",
      "Next.js logo in the engineering hiring interface reference",
      "Tailwind CSS logo in the engineering hiring interface reference",
      "Redux logo in the engineering hiring interface reference",
      "GraphQL logo in the engineering hiring interface reference",
      "Vite logo in the engineering hiring interface reference",
      "Webpack logo in the engineering hiring interface reference",
      "Material UI logo in the engineering hiring interface reference",
      "Jest logo in the engineering hiring interface reference"
    ]
  },
  "/partner-program/": {
    "heading": "Partners: Interface Options",
    "toolsHeading": "Partners: Web Tool Reference",
    "imageAlts": [
      "React logo in the partner discussions interface reference",
      "Vue logo in the partner discussions interface reference",
      "Angular logo in the partner discussions interface reference",
      "Svelte logo in the partner discussions interface reference",
      "Solid logo in the partner discussions interface reference",
      "Next.js logo in the partner discussions interface reference",
      "Tailwind CSS logo in the partner discussions interface reference",
      "Redux logo in the partner discussions interface reference",
      "GraphQL logo in the partner discussions interface reference",
      "Vite logo in the partner discussions interface reference",
      "Webpack logo in the partner discussions interface reference",
      "Material UI logo in the partner discussions interface reference",
      "Jest logo in the partner discussions interface reference"
    ]
  },
  "/refer-a-dev/": {
    "heading": "Referrals: Interface Options",
    "toolsHeading": "Referrals: Web Tool Reference",
    "imageAlts": [
      "React logo in the developer referrals interface reference",
      "Vue logo in the developer referrals interface reference",
      "Angular logo in the developer referrals interface reference",
      "Svelte logo in the developer referrals interface reference",
      "Solid logo in the developer referrals interface reference",
      "Next.js logo in the developer referrals interface reference",
      "Tailwind CSS logo in the developer referrals interface reference",
      "Redux logo in the developer referrals interface reference",
      "GraphQL logo in the developer referrals interface reference",
      "Vite logo in the developer referrals interface reference",
      "Webpack logo in the developer referrals interface reference",
      "Material UI logo in the developer referrals interface reference",
      "Jest logo in the developer referrals interface reference"
    ]
  },
  "/endorsements/": {
    "heading": "Evidence: Interface Options",
    "toolsHeading": "Evidence: Web Tool Reference",
    "imageAlts": [
      "React logo in the endorsement evidence interface reference",
      "Vue logo in the endorsement evidence interface reference",
      "Angular logo in the endorsement evidence interface reference",
      "Svelte logo in the endorsement evidence interface reference",
      "Solid logo in the endorsement evidence interface reference",
      "Next.js logo in the endorsement evidence interface reference",
      "Tailwind CSS logo in the endorsement evidence interface reference",
      "Redux logo in the endorsement evidence interface reference",
      "GraphQL logo in the endorsement evidence interface reference",
      "Vite logo in the endorsement evidence interface reference",
      "Webpack logo in the endorsement evidence interface reference",
      "Material UI logo in the endorsement evidence interface reference",
      "Jest logo in the endorsement evidence interface reference"
    ]
  },
  "/industry-awards/": {
    "heading": "Awards: Interface Options",
    "toolsHeading": "Awards: Web Tool Reference",
    "imageAlts": [
      "React logo in the award attribution interface reference",
      "Vue logo in the award attribution interface reference",
      "Angular logo in the award attribution interface reference",
      "Svelte logo in the award attribution interface reference",
      "Solid logo in the award attribution interface reference",
      "Next.js logo in the award attribution interface reference",
      "Tailwind CSS logo in the award attribution interface reference",
      "Redux logo in the award attribution interface reference",
      "GraphQL logo in the award attribution interface reference",
      "Vite logo in the award attribution interface reference",
      "Webpack logo in the award attribution interface reference",
      "Material UI logo in the award attribution interface reference",
      "Jest logo in the award attribution interface reference"
    ]
  },
  "/careers-portal/": {
    "heading": "Careers: Interface Options",
    "toolsHeading": "Careers: Web Tool Reference",
    "imageAlts": [
      "React logo in the engineering careers interface reference",
      "Vue logo in the engineering careers interface reference",
      "Angular logo in the engineering careers interface reference",
      "Svelte logo in the engineering careers interface reference",
      "Solid logo in the engineering careers interface reference",
      "Next.js logo in the engineering careers interface reference",
      "Tailwind CSS logo in the engineering careers interface reference",
      "Redux logo in the engineering careers interface reference",
      "GraphQL logo in the engineering careers interface reference",
      "Vite logo in the engineering careers interface reference",
      "Webpack logo in the engineering careers interface reference",
      "Material UI logo in the engineering careers interface reference",
      "Jest logo in the engineering careers interface reference"
    ]
  }
};

export const workPlanningContent: Readonly<Record<string, WorkPlanningContent>> = {
  "/services/data-analytics/": {
    "titleLead": "Analytics Work Planning",
    "titleRest": "Review the Scope in Stages",
    "intro": "Plan data analytics around the work in scope. Connect business questions to usable records, consistent calculations and findings that retain their source context.",
    "steps": [
      {
        "badge": "Analytics Scope",
        "label": "Clarify the requirements",
        "amount": "MAP",
        "amountUnit": " first",
        "infoTitle": "Analytics Priorities",
        "items": [
          {
            "title": "Source Context",
            "desc": "Identify the records behind an analysis and document what each observation represents.",
            "imageAlt": "Planning icon for data analytics: source context"
          },
          {
            "title": "Data Preparation",
            "desc": "Make cleanup and transformation choices visible before using records in an analytical comparison.",
            "imageAlt": "Planning icon for data analytics: data preparation"
          },
          {
            "title": "Comparable Measures",
            "desc": "Define populations, units and time windows so comparisons describe the same business activity.",
            "imageAlt": "Planning icon for data analytics: comparable measures"
          }
        ],
        "rightTitle": "Analytics Scope Checks",
        "features": [
          "Scope: Source ownership",
          "Scope: Record definitions",
          "Scope: Collection periods",
          "Scope: Coverage notes",
          "Scope: Missing-value checks",
          "Scope: Field normalization",
          "Scope: Transformation rules",
          "Scope: Preparation history",
          "Scope: Population boundaries",
          "Scope: Measurement units"
        ],
        "btnText": "Plan Analytics"
      },
      {
        "badge": "Analytics Work",
        "label": "Organize the work",
        "amount": "WORK",
        "amountUnit": " scope",
        "infoTitle": "Analytics Work Areas",
        "items": [
          {
            "title": "Source ownership",
            "desc": "For data analytics, include record definitions, collection periods, coverage notes when defining source context.",
            "imageAlt": "Planning icon for data analytics: source ownership"
          },
          {
            "title": "Missing-value checks",
            "desc": "For data analytics, include field normalization, transformation rules, preparation history when defining data preparation.",
            "imageAlt": "Planning icon for data analytics: missing-value checks"
          },
          {
            "title": "Population boundaries",
            "desc": "For data analytics, include measurement units, comparison windows, calculation examples when defining comparable measures.",
            "imageAlt": "Planning icon for data analytics: population boundaries"
          }
        ],
        "rightTitle": "Analytics Work Checks",
        "features": [
          "Work area: Coverage notes",
          "Work area: Missing-value checks",
          "Work area: Field normalization",
          "Work area: Transformation rules",
          "Work area: Preparation history",
          "Work area: Population boundaries",
          "Work area: Measurement units",
          "Work area: Comparison windows",
          "Work area: Calculation examples",
          "Work area: Finding definitions"
        ],
        "btnText": "Scope Analytics"
      },
      {
        "badge": "Analytics Review",
        "label": "Prepare the handover",
        "amount": "QA",
        "amountUnit": " notes",
        "infoTitle": "Analytics Review Points",
        "items": [
          {
            "title": "Interpretable Findings",
            "desc": "Present analytical results with the assumptions and limitations needed for a business review.",
            "imageAlt": "Planning icon for data analytics: interpretable findings"
          },
          {
            "title": "Finding definitions",
            "desc": "Review finding definitions alongside source references before agreeing the data analytics handover.",
            "imageAlt": "Planning icon for data analytics: finding definitions"
          },
          {
            "title": "Interpretation limits",
            "desc": "Keep interpretation limits and decision questions in the data analytics review record.",
            "imageAlt": "Planning icon for data analytics: interpretation limits"
          }
        ],
        "rightTitle": "Analytics Review Checks",
        "features": [
          "Review: Transformation rules",
          "Review: Preparation history",
          "Review: Population boundaries",
          "Review: Measurement units",
          "Review: Comparison windows",
          "Review: Calculation examples",
          "Review: Finding definitions",
          "Review: Source references",
          "Review: Interpretation limits",
          "Review: Decision questions"
        ],
        "btnText": "Review Analytics"
      }
    ],
    "showAll": "See All Checks ↓",
    "showLess": "See Fewer ↑",
    "previous": "← Previous",
    "next": "Next →",
    "stageLabel": "Stage"
  },
  "/services/data-science/": {
    "titleLead": "Data Science Work Planning",
    "titleRest": "Review the Scope in Stages",
    "intro": "Plan data science around the work in scope. Shape statistical and predictive work around the question, available observations and evidence needed to evaluate a result.",
    "steps": [
      {
        "badge": "Data Science Scope",
        "label": "Clarify the requirements",
        "amount": "MAP",
        "amountUnit": " first",
        "infoTitle": "Data Science Priorities",
        "items": [
          {
            "title": "Problem Framing",
            "desc": "Translate the research question into a modeling task with explicit targets and evaluation expectations.",
            "imageAlt": "Planning icon for data science: problem framing"
          },
          {
            "title": "Modeling Inputs",
            "desc": "Review observations and features for relevance, missing information and possible data leakage.",
            "imageAlt": "Planning icon for data science: modeling inputs"
          },
          {
            "title": "Model Evaluation",
            "desc": "Compare candidate behavior on suitable evaluation data and inspect the errors behind summary measures.",
            "imageAlt": "Planning icon for data science: model evaluation"
          }
        ],
        "rightTitle": "Data Science Scope Checks",
        "features": [
          "Scope: Research objectives",
          "Scope: Target definitions",
          "Scope: Baseline choices",
          "Scope: Evaluation criteria",
          "Scope: Feature preparation",
          "Scope: Label inspection",
          "Scope: Leakage checks",
          "Scope: Dataset separation",
          "Scope: Candidate comparisons",
          "Scope: Error analysis"
        ],
        "btnText": "Plan Data Science"
      },
      {
        "badge": "Data Science Work",
        "label": "Organize the work",
        "amount": "WORK",
        "amountUnit": " scope",
        "infoTitle": "Data Science Work Areas",
        "items": [
          {
            "title": "Research objectives",
            "desc": "For data science, include target definitions, baseline choices, evaluation criteria when defining problem framing.",
            "imageAlt": "Planning icon for data science: research objectives"
          },
          {
            "title": "Feature preparation",
            "desc": "For data science, include label inspection, leakage checks, dataset separation when defining modeling inputs.",
            "imageAlt": "Planning icon for data science: feature preparation"
          },
          {
            "title": "Candidate comparisons",
            "desc": "For data science, include error analysis, validation samples, assumption review when defining model evaluation.",
            "imageAlt": "Planning icon for data science: candidate comparisons"
          }
        ],
        "rightTitle": "Data Science Work Checks",
        "features": [
          "Work area: Evaluation criteria",
          "Work area: Feature preparation",
          "Work area: Label inspection",
          "Work area: Leakage checks",
          "Work area: Dataset separation",
          "Work area: Candidate comparisons",
          "Work area: Error analysis",
          "Work area: Validation samples",
          "Work area: Assumption review",
          "Work area: Method documentation"
        ],
        "btnText": "Scope Data Science"
      },
      {
        "badge": "Data Science Review",
        "label": "Prepare the handover",
        "amount": "QA",
        "amountUnit": " notes",
        "infoTitle": "Data Science Review Points",
        "items": [
          {
            "title": "Research Handover",
            "desc": "Keep analytical methods and their operating limits understandable to the team using the findings.",
            "imageAlt": "Planning icon for data science: research handover"
          },
          {
            "title": "Method documentation",
            "desc": "Review method documentation alongside reproducible steps before agreeing the data science handover.",
            "imageAlt": "Planning icon for data science: method documentation"
          },
          {
            "title": "Result context",
            "desc": "Keep result context and further investigation in the data science review record.",
            "imageAlt": "Planning icon for data science: result context"
          }
        ],
        "rightTitle": "Data Science Review Checks",
        "features": [
          "Review: Leakage checks",
          "Review: Dataset separation",
          "Review: Candidate comparisons",
          "Review: Error analysis",
          "Review: Validation samples",
          "Review: Assumption review",
          "Review: Method documentation",
          "Review: Reproducible steps",
          "Review: Result context",
          "Review: Further investigation"
        ],
        "btnText": "Review Data Science"
      }
    ],
    "showAll": "See All Checks ↓",
    "showLess": "See Fewer ↑",
    "previous": "← Previous",
    "next": "Next →",
    "stageLabel": "Stage"
  },
  "/secure-portals/": {
    "titleLead": "Portals Work Planning",
    "titleRest": "Review the Scope in Stages",
    "intro": "Plan secure portals around the work in scope. Connect B2B and B2C portal journeys to explicit roles, protected records and understandable account and service workflows.",
    "steps": [
      {
        "badge": "Portals Scope",
        "label": "Clarify the requirements",
        "amount": "MAP",
        "amountUnit": " first",
        "infoTitle": "Portals Priorities",
        "items": [
          {
            "title": "Model Portal Responsibilities",
            "desc": "Define what customers, partners and internal staff can view or change before building shared account screens.",
            "imageAlt": "Planning icon for secure portals: model portal responsibilities"
          },
          {
            "title": "Connect Protected Services",
            "desc": "Place authorization and input checks at the service boundaries that read or update protected portal records.",
            "imageAlt": "Planning icon for secure portals: connect protected services"
          },
          {
            "title": "Review the Complete Journey",
            "desc": "Check sign-in, account recovery, submissions and unsuccessful states alongside the expected portal workflow.",
            "imageAlt": "Planning icon for secure portals: review the complete journey"
          }
        ],
        "rightTitle": "Portals Scope Checks",
        "features": [
          "Scope: Model Portal Responsibilities",
          "Scope: Connect Protected Services",
          "Scope: Review the Complete Journey",
          "Scope: Users",
          "Scope: Roles",
          "Scope: Records",
          "Scope: Actions",
          "Scope: Sessions",
          "Scope: Access Rules",
          "Scope: Protected Actions"
        ],
        "btnText": "Plan Portals"
      },
      {
        "badge": "Portals Work",
        "label": "Organize the work",
        "amount": "WORK",
        "amountUnit": " scope",
        "infoTitle": "Portals Work Areas",
        "items": [
          {
            "title": "Users",
            "desc": "Identify portal users and their organizations.",
            "imageAlt": "Planning icon for secure portals: users"
          },
          {
            "title": "Roles",
            "desc": "Assign record visibility and action rights.",
            "imageAlt": "Planning icon for secure portals: roles"
          },
          {
            "title": "Records",
            "desc": "Link views to the correct account records.",
            "imageAlt": "Planning icon for secure portals: records"
          }
        ],
        "rightTitle": "Portals Work Checks",
        "features": [
          "Work area: Users",
          "Work area: Roles",
          "Work area: Records",
          "Work area: Actions",
          "Work area: Sessions",
          "Work area: Access Rules",
          "Work area: Protected Actions",
          "Work area: Activity Context",
          "Work area: Model Portal Responsibilities",
          "Work area: Connect Protected Services"
        ],
        "btnText": "Scope Portals"
      },
      {
        "badge": "Portals Review",
        "label": "Prepare the handover",
        "amount": "QA",
        "amountUnit": " notes",
        "infoTitle": "Portals Review Points",
        "items": [
          {
            "title": "Actions",
            "desc": "Validate changes to protected portal data.",
            "imageAlt": "Planning icon for secure portals: actions"
          },
          {
            "title": "Sessions",
            "desc": "Review sign-in, recovery and session closure.",
            "imageAlt": "Planning icon for secure portals: sessions"
          },
          {
            "title": "Portal Workflow",
            "desc": "Connect user roles to protected application tasks.",
            "imageAlt": "Planning icon for secure portals: portal workflow"
          }
        ],
        "rightTitle": "Portals Review Checks",
        "features": [
          "Review: Actions",
          "Review: Sessions",
          "Review: Access Rules",
          "Review: Protected Actions",
          "Review: Activity Context",
          "Review: Model Portal Responsibilities",
          "Review: Connect Protected Services",
          "Review: Review the Complete Journey",
          "Review: Users",
          "Review: Roles"
        ],
        "btnText": "Review Portals"
      }
    ],
    "showAll": "See All Checks ↓",
    "showLess": "See Fewer ↑",
    "previous": "← Previous",
    "next": "Next →",
    "stageLabel": "Stage"
  },
  "/services/database-development/": {
    "titleLead": "Databases Work Planning",
    "titleRest": "Review the Scope in Stages",
    "intro": "Plan database development around the work in scope. Connect database models, query responsibilities and operational requirements before choosing how records are stored and accessed.",
    "steps": [
      {
        "badge": "Databases Scope",
        "label": "Clarify the requirements",
        "amount": "MAP",
        "amountUnit": " first",
        "infoTitle": "Databases Priorities",
        "items": [
          {
            "title": "Data Models",
            "desc": "Define entities, relationships and constraints around the information the application must maintain.",
            "imageAlt": "Planning icon for database development: data models"
          },
          {
            "title": "Query Design",
            "desc": "Review common reads and updates with their filters, expected record volumes and access patterns.",
            "imageAlt": "Planning icon for database development: query design"
          },
          {
            "title": "Data Integrity",
            "desc": "Make validation, transaction boundaries and change behavior explicit where records are modified.",
            "imageAlt": "Planning icon for database development: data integrity"
          }
        ],
        "rightTitle": "Databases Scope Checks",
        "features": [
          "Scope: Entity relationships",
          "Scope: Key selection",
          "Scope: Constraint rules",
          "Scope: Schema ownership",
          "Scope: Query requirements",
          "Scope: Index candidates",
          "Scope: Execution-plan review",
          "Scope: Update patterns",
          "Scope: Validation boundaries",
          "Scope: Transaction scope"
        ],
        "btnText": "Plan Databases"
      },
      {
        "badge": "Databases Work",
        "label": "Organize the work",
        "amount": "WORK",
        "amountUnit": " scope",
        "infoTitle": "Databases Work Areas",
        "items": [
          {
            "title": "Entity relationships",
            "desc": "For database development, include key selection, constraint rules, schema ownership when defining data models.",
            "imageAlt": "Planning icon for database development: entity relationships"
          },
          {
            "title": "Query requirements",
            "desc": "For database development, include index candidates, execution-plan review, update patterns when defining query design.",
            "imageAlt": "Planning icon for database development: query requirements"
          },
          {
            "title": "Validation boundaries",
            "desc": "For database development, include transaction scope, consistency checks, migration review when defining data integrity.",
            "imageAlt": "Planning icon for database development: validation boundaries"
          }
        ],
        "rightTitle": "Databases Work Checks",
        "features": [
          "Work area: Schema ownership",
          "Work area: Query requirements",
          "Work area: Index candidates",
          "Work area: Execution-plan review",
          "Work area: Update patterns",
          "Work area: Validation boundaries",
          "Work area: Transaction scope",
          "Work area: Consistency checks",
          "Work area: Migration review",
          "Work area: Backup requirements"
        ],
        "btnText": "Scope Databases"
      },
      {
        "badge": "Databases Review",
        "label": "Prepare the handover",
        "amount": "QA",
        "amountUnit": " notes",
        "infoTitle": "Databases Review Points",
        "items": [
          {
            "title": "Database Operations",
            "desc": "Plan how the database is configured, observed and recovered within its operating environment.",
            "imageAlt": "Planning icon for database development: database operations"
          },
          {
            "title": "Backup requirements",
            "desc": "Review backup requirements alongside recovery exercises before agreeing the database development handover.",
            "imageAlt": "Planning icon for database development: backup requirements"
          },
          {
            "title": "Access configuration",
            "desc": "Keep access configuration and operational diagnostics in the database development review record.",
            "imageAlt": "Planning icon for database development: access configuration"
          }
        ],
        "rightTitle": "Databases Review Checks",
        "features": [
          "Review: Execution-plan review",
          "Review: Update patterns",
          "Review: Validation boundaries",
          "Review: Transaction scope",
          "Review: Consistency checks",
          "Review: Migration review",
          "Review: Backup requirements",
          "Review: Recovery exercises",
          "Review: Access configuration",
          "Review: Operational diagnostics"
        ],
        "btnText": "Review Databases"
      }
    ],
    "showAll": "See All Checks ↓",
    "showLess": "See Fewer ↑",
    "previous": "← Previous",
    "next": "Next →",
    "stageLabel": "Stage"
  },
  "/m365-sharepoint/": {
    "titleLead": "SharePoint Work Planning",
    "titleRest": "Review the Scope in Stages",
    "intro": "Plan sharepoint around the work in scope. Organize collaborative portals, documents and internal resources with clear publishing and access responsibilities.",
    "steps": [
      {
        "badge": "SharePoint Scope",
        "label": "Clarify the requirements",
        "amount": "MAP",
        "amountUnit": " first",
        "infoTitle": "SharePoint Priorities",
        "items": [
          {
            "title": "Workspace Structure",
            "desc": "Arrange sites, libraries and navigation around how teams find and maintain shared information.",
            "imageAlt": "Planning icon for sharepoint: workspace structure"
          },
          {
            "title": "Document Work",
            "desc": "Connect document metadata and review states to the teams responsible for keeping material current.",
            "imageAlt": "Planning icon for sharepoint: document work"
          },
          {
            "title": "Staff Access",
            "desc": "Define who can read, contribute and administer information across the SharePoint workspace.",
            "imageAlt": "Planning icon for sharepoint: staff access"
          }
        ],
        "rightTitle": "SharePoint Scope Checks",
        "features": [
          "Scope: Site organization",
          "Scope: Library structure",
          "Scope: Resource navigation",
          "Scope: Content ownership",
          "Scope: Document categories",
          "Scope: Version context",
          "Scope: Review responsibilities",
          "Scope: Publication states",
          "Scope: Group responsibilities",
          "Scope: Contribution permissions"
        ],
        "btnText": "Plan SharePoint"
      },
      {
        "badge": "SharePoint Work",
        "label": "Organize the work",
        "amount": "WORK",
        "amountUnit": " scope",
        "infoTitle": "SharePoint Work Areas",
        "items": [
          {
            "title": "Site organization",
            "desc": "For sharepoint, include library structure, resource navigation, content ownership when defining workspace structure.",
            "imageAlt": "Planning icon for sharepoint: site organization"
          },
          {
            "title": "Document categories",
            "desc": "For sharepoint, include version context, review responsibilities, publication states when defining document work.",
            "imageAlt": "Planning icon for sharepoint: document categories"
          },
          {
            "title": "Group responsibilities",
            "desc": "For sharepoint, include contribution permissions, sensitive libraries, access review when defining staff access.",
            "imageAlt": "Planning icon for sharepoint: group responsibilities"
          }
        ],
        "rightTitle": "SharePoint Work Checks",
        "features": [
          "Work area: Content ownership",
          "Work area: Document categories",
          "Work area: Version context",
          "Work area: Review responsibilities",
          "Work area: Publication states",
          "Work area: Group responsibilities",
          "Work area: Contribution permissions",
          "Work area: Sensitive libraries",
          "Work area: Access review",
          "Work area: Form requirements"
        ],
        "btnText": "Scope SharePoint"
      },
      {
        "badge": "SharePoint Review",
        "label": "Prepare the handover",
        "amount": "QA",
        "amountUnit": " notes",
        "infoTitle": "SharePoint Review Points",
        "items": [
          {
            "title": "Process Connections",
            "desc": "Link internal forms and collaboration tasks to the records and handoffs they support.",
            "imageAlt": "Planning icon for sharepoint: process connections"
          },
          {
            "title": "Form requirements",
            "desc": "Review form requirements alongside approval handoffs before agreeing the sharepoint handover.",
            "imageAlt": "Planning icon for sharepoint: form requirements"
          },
          {
            "title": "Workspace integrations",
            "desc": "Keep workspace integrations and support ownership in the sharepoint review record.",
            "imageAlt": "Planning icon for sharepoint: workspace integrations"
          }
        ],
        "rightTitle": "SharePoint Review Checks",
        "features": [
          "Review: Review responsibilities",
          "Review: Publication states",
          "Review: Group responsibilities",
          "Review: Contribution permissions",
          "Review: Sensitive libraries",
          "Review: Access review",
          "Review: Form requirements",
          "Review: Approval handoffs",
          "Review: Workspace integrations",
          "Review: Support ownership"
        ],
        "btnText": "Review SharePoint"
      }
    ],
    "showAll": "See All Checks ↓",
    "showLess": "See Fewer ↑",
    "previous": "← Previous",
    "next": "Next →",
    "stageLabel": "Stage"
  },
  "/services/it-outsourcing/": {
    "titleLead": "IT Handoffs Work Planning",
    "titleRest": "Review the Scope in Stages",
    "intro": "Plan it outsourcing around the work in scope. Define delegated technology work through agreed scope, operating responsibilities and reviewable handoffs.",
    "steps": [
      {
        "badge": "IT Handoffs Scope",
        "label": "Clarify the requirements",
        "amount": "MAP",
        "amountUnit": " first",
        "infoTitle": "IT Handoffs Priorities",
        "items": [
          {
            "title": "Service Boundaries",
            "desc": "Specify the systems, tasks and dependencies covered by the outsourcing arrangement.",
            "imageAlt": "Planning icon for it outsourcing: service boundaries"
          },
          {
            "title": "Operating Handover",
            "desc": "Connect runbooks and access requirements to the people taking responsibility for the service.",
            "imageAlt": "Planning icon for it outsourcing: operating handover"
          },
          {
            "title": "Delivery Coordination",
            "desc": "Keep incidents, maintenance work and decisions visible across internal and delegated teams.",
            "imageAlt": "Planning icon for it outsourcing: delivery coordination"
          }
        ],
        "rightTitle": "IT Handoffs Scope Checks",
        "features": [
          "Scope: Delegated activities",
          "Scope: System inventory",
          "Scope: Dependency mapping",
          "Scope: Scope exclusions",
          "Scope: Runbook transfer",
          "Scope: Authorized access",
          "Scope: Support contacts",
          "Scope: Handover checks",
          "Scope: Work-item ownership",
          "Scope: Escalation routes"
        ],
        "btnText": "Plan IT Handoffs"
      },
      {
        "badge": "IT Handoffs Work",
        "label": "Organize the work",
        "amount": "WORK",
        "amountUnit": " scope",
        "infoTitle": "IT Handoffs Work Areas",
        "items": [
          {
            "title": "Delegated activities",
            "desc": "For it outsourcing, include system inventory, dependency mapping, scope exclusions when defining service boundaries.",
            "imageAlt": "Planning icon for it outsourcing: delegated activities"
          },
          {
            "title": "Runbook transfer",
            "desc": "For it outsourcing, include authorized access, support contacts, handover checks when defining operating handover.",
            "imageAlt": "Planning icon for it outsourcing: runbook transfer"
          },
          {
            "title": "Work-item ownership",
            "desc": "For it outsourcing, include escalation routes, maintenance planning, decision records when defining delivery coordination.",
            "imageAlt": "Planning icon for it outsourcing: work-item ownership"
          }
        ],
        "rightTitle": "IT Handoffs Work Checks",
        "features": [
          "Work area: Scope exclusions",
          "Work area: Runbook transfer",
          "Work area: Authorized access",
          "Work area: Support contacts",
          "Work area: Handover checks",
          "Work area: Work-item ownership",
          "Work area: Escalation routes",
          "Work area: Maintenance planning",
          "Work area: Decision records",
          "Work area: Reporting definitions"
        ],
        "btnText": "Scope IT Handoffs"
      },
      {
        "badge": "IT Handoffs Review",
        "label": "Prepare the handover",
        "amount": "QA",
        "amountUnit": " notes",
        "infoTitle": "IT Handoffs Review Points",
        "items": [
          {
            "title": "Service Review",
            "desc": "Review the arrangement using agreed reporting definitions and the work completed within its scope.",
            "imageAlt": "Planning icon for it outsourcing: service review"
          },
          {
            "title": "Reporting definitions",
            "desc": "Review reporting definitions alongside open issue review before agreeing the it outsourcing handover.",
            "imageAlt": "Planning icon for it outsourcing: reporting definitions"
          },
          {
            "title": "Change requests",
            "desc": "Keep change requests and service follow-up in the it outsourcing review record.",
            "imageAlt": "Planning icon for it outsourcing: change requests"
          }
        ],
        "rightTitle": "IT Handoffs Review Checks",
        "features": [
          "Review: Support contacts",
          "Review: Handover checks",
          "Review: Work-item ownership",
          "Review: Escalation routes",
          "Review: Maintenance planning",
          "Review: Decision records",
          "Review: Reporting definitions",
          "Review: Open issue review",
          "Review: Change requests",
          "Review: Service follow-up"
        ],
        "btnText": "Review IT Handoffs"
      }
    ],
    "showAll": "See All Checks ↓",
    "showLess": "See Fewer ↑",
    "previous": "← Previous",
    "next": "Next →",
    "stageLabel": "Stage"
  },
  "/services/testing-and-qa/": {
    "titleLead": "Software QA Work Planning",
    "titleRest": "Review the Scope in Stages",
    "intro": "Plan software qa around the work in scope. Connect test coverage to product behavior, operating conditions and the evidence needed to review a release.",
    "steps": [
      {
        "badge": "Software QA Scope",
        "label": "Clarify the requirements",
        "amount": "MAP",
        "amountUnit": " first",
        "infoTitle": "Software QA Priorities",
        "items": [
          {
            "title": "Test Planning",
            "desc": "Identify user journeys, integration boundaries and risks that should guide the testing effort.",
            "imageAlt": "Planning icon for software qa: test planning"
          },
          {
            "title": "Manual Investigation",
            "desc": "Explore real task flows and unexpected states with reproducible observations and useful context.",
            "imageAlt": "Planning icon for software qa: manual investigation"
          },
          {
            "title": "Automated Checks",
            "desc": "Choose repeatable checks around stable behavior and maintain their fixtures and expected outcomes.",
            "imageAlt": "Planning icon for software qa: automated checks"
          }
        ],
        "rightTitle": "Software QA Scope Checks",
        "features": [
          "Scope: Behavior inventory",
          "Scope: Risk-based priorities",
          "Scope: Acceptance examples",
          "Scope: Environment needs",
          "Scope: Exploratory sessions",
          "Scope: Input variations",
          "Scope: Reproduction steps",
          "Scope: Usability observations",
          "Scope: Regression scenarios",
          "Scope: Test-data fixtures"
        ],
        "btnText": "Plan Software QA"
      },
      {
        "badge": "Software QA Work",
        "label": "Organize the work",
        "amount": "WORK",
        "amountUnit": " scope",
        "infoTitle": "Software QA Work Areas",
        "items": [
          {
            "title": "Behavior inventory",
            "desc": "For software qa, include risk-based priorities, acceptance examples, environment needs when defining test planning.",
            "imageAlt": "Planning icon for software qa: behavior inventory"
          },
          {
            "title": "Exploratory sessions",
            "desc": "For software qa, include input variations, reproduction steps, usability observations when defining manual investigation.",
            "imageAlt": "Planning icon for software qa: exploratory sessions"
          },
          {
            "title": "Regression scenarios",
            "desc": "For software qa, include test-data fixtures, assertion review, failure diagnostics when defining automated checks.",
            "imageAlt": "Planning icon for software qa: regression scenarios"
          }
        ],
        "rightTitle": "Software QA Work Checks",
        "features": [
          "Work area: Environment needs",
          "Work area: Exploratory sessions",
          "Work area: Input variations",
          "Work area: Reproduction steps",
          "Work area: Usability observations",
          "Work area: Regression scenarios",
          "Work area: Test-data fixtures",
          "Work area: Assertion review",
          "Work area: Failure diagnostics",
          "Work area: Build references"
        ],
        "btnText": "Scope Software QA"
      },
      {
        "badge": "Software QA Review",
        "label": "Prepare the handover",
        "amount": "QA",
        "amountUnit": " notes",
        "infoTitle": "Software QA Review Points",
        "items": [
          {
            "title": "Release Evidence",
            "desc": "Keep findings and unresolved issues connected to the build and behavior that were evaluated.",
            "imageAlt": "Planning icon for software qa: release evidence"
          },
          {
            "title": "Build references",
            "desc": "Review build references alongside defect context before agreeing the software qa handover.",
            "imageAlt": "Planning icon for software qa: build references"
          },
          {
            "title": "Retest outcomes",
            "desc": "Keep retest outcomes and known limitations in the software qa review record.",
            "imageAlt": "Planning icon for software qa: retest outcomes"
          }
        ],
        "rightTitle": "Software QA Review Checks",
        "features": [
          "Review: Reproduction steps",
          "Review: Usability observations",
          "Review: Regression scenarios",
          "Review: Test-data fixtures",
          "Review: Assertion review",
          "Review: Failure diagnostics",
          "Review: Build references",
          "Review: Defect context",
          "Review: Retest outcomes",
          "Review: Known limitations"
        ],
        "btnText": "Review Software QA"
      }
    ],
    "showAll": "See All Checks ↓",
    "showLess": "See Fewer ↑",
    "previous": "← Previous",
    "next": "Next →",
    "stageLabel": "Stage"
  },
  "/services/software-development/": {
    "titleLead": "Software Work Planning",
    "titleRest": "Review the Scope in Stages",
    "intro": "Plan software development around the work in scope. Build enterprise applications around defined user tasks, service boundaries and the work needed to maintain them.",
    "steps": [
      {
        "badge": "Software Scope",
        "label": "Clarify the requirements",
        "amount": "MAP",
        "amountUnit": " first",
        "infoTitle": "Software Priorities",
        "items": [
          {
            "title": "Application Scope",
            "desc": "Turn operational requirements into explicit user journeys, data responsibilities and acceptance examples.",
            "imageAlt": "Planning icon for software development: application scope"
          },
          {
            "title": "Service Design",
            "desc": "Organize application rules and interfaces so connected parts have clear responsibilities.",
            "imageAlt": "Planning icon for software development: service design"
          },
          {
            "title": "Implementation Checks",
            "desc": "Review implemented behavior across normal, unsuccessful and recovery paths before release.",
            "imageAlt": "Planning icon for software development: implementation checks"
          }
        ],
        "rightTitle": "Software Scope Checks",
        "features": [
          "Scope: Business workflows",
          "Scope: User responsibilities",
          "Scope: Acceptance boundaries",
          "Scope: Delivery increments",
          "Scope: Domain models",
          "Scope: Service contracts",
          "Scope: State transitions",
          "Scope: Integration dependencies",
          "Scope: Functional checks",
          "Scope: Integration scenarios"
        ],
        "btnText": "Plan Software"
      },
      {
        "badge": "Software Work",
        "label": "Organize the work",
        "amount": "WORK",
        "amountUnit": " scope",
        "infoTitle": "Software Work Areas",
        "items": [
          {
            "title": "Business workflows",
            "desc": "For software development, include user responsibilities, acceptance boundaries, delivery increments when defining application scope.",
            "imageAlt": "Planning icon for software development: business workflows"
          },
          {
            "title": "Domain models",
            "desc": "For software development, include service contracts, state transitions, integration dependencies when defining service design.",
            "imageAlt": "Planning icon for software development: domain models"
          },
          {
            "title": "Functional checks",
            "desc": "For software development, include integration scenarios, input validation, recovery behavior when defining implementation checks.",
            "imageAlt": "Planning icon for software development: functional checks"
          }
        ],
        "rightTitle": "Software Work Checks",
        "features": [
          "Work area: Delivery increments",
          "Work area: Domain models",
          "Work area: Service contracts",
          "Work area: State transitions",
          "Work area: Integration dependencies",
          "Work area: Functional checks",
          "Work area: Integration scenarios",
          "Work area: Input validation",
          "Work area: Recovery behavior",
          "Work area: Deployment configuration"
        ],
        "btnText": "Scope Software"
      },
      {
        "badge": "Software Review",
        "label": "Prepare the handover",
        "amount": "QA",
        "amountUnit": " notes",
        "infoTitle": "Software Review Points",
        "items": [
          {
            "title": "Operating Handover",
            "desc": "Include deployment and support context in the application work delivered to the operating team.",
            "imageAlt": "Planning icon for software development: operating handover"
          },
          {
            "title": "Deployment configuration",
            "desc": "Review deployment configuration alongside diagnostic records before agreeing the software development handover.",
            "imageAlt": "Planning icon for software development: deployment configuration"
          },
          {
            "title": "Maintenance guidance",
            "desc": "Keep maintenance guidance and support responsibilities in the software development review record.",
            "imageAlt": "Planning icon for software development: maintenance guidance"
          }
        ],
        "rightTitle": "Software Review Checks",
        "features": [
          "Review: State transitions",
          "Review: Integration dependencies",
          "Review: Functional checks",
          "Review: Integration scenarios",
          "Review: Input validation",
          "Review: Recovery behavior",
          "Review: Deployment configuration",
          "Review: Diagnostic records",
          "Review: Maintenance guidance",
          "Review: Support responsibilities"
        ],
        "btnText": "Review Software"
      }
    ],
    "showAll": "See All Checks ↓",
    "showLess": "See Fewer ↑",
    "previous": "← Previous",
    "next": "Next →",
    "stageLabel": "Stage"
  },
  "/services/digital-transformation/": {
    "titleLead": "Digital Work Work Planning",
    "titleRest": "Review the Scope in Stages",
    "intro": "Plan digital transformation around the work in scope. Turn manual handoffs and disconnected business tools into a practical sequence of workflow, data and system changes.",
    "steps": [
      {
        "badge": "Digital Work Scope",
        "label": "Clarify the requirements",
        "amount": "MAP",
        "amountUnit": " first",
        "infoTitle": "Digital Work Priorities",
        "items": [
          {
            "title": "Map Work Before Automation",
            "desc": "Document current decisions, handoffs and exceptions with the teams responsible for completing the work.",
            "imageAlt": "Planning icon for digital transformation: map work before automation"
          },
          {
            "title": "Connect the Operating Systems",
            "desc": "Define how information should move between existing tools and where responsibility for each record belongs.",
            "imageAlt": "Planning icon for digital transformation: connect the operating systems"
          },
          {
            "title": "Introduce Change in Stages",
            "desc": "Sequence delivery around operational dependencies and review adoption with the people using each new workflow.",
            "imageAlt": "Planning icon for digital transformation: introduce change in stages"
          }
        ],
        "rightTitle": "Digital Work Scope Checks",
        "features": [
          "Scope: Map Work Before Automation",
          "Scope: Connect the Operating Systems",
          "Scope: Introduce Change in Stages",
          "Scope: Current State",
          "Scope: Target Tasks",
          "Scope: Dependencies",
          "Scope: Delivery",
          "Scope: Adoption",
          "Scope: Operating Workflow",
          "Scope: System Exchange"
        ],
        "btnText": "Plan Digital Work"
      },
      {
        "badge": "Digital Work Work",
        "label": "Organize the work",
        "amount": "WORK",
        "amountUnit": " scope",
        "infoTitle": "Digital Work Work Areas",
        "items": [
          {
            "title": "Current State",
            "desc": "Map the existing operational process.",
            "imageAlt": "Planning icon for digital transformation: current state"
          },
          {
            "title": "Target Tasks",
            "desc": "Identify records needed across departments.",
            "imageAlt": "Planning icon for digital transformation: target tasks"
          },
          {
            "title": "Dependencies",
            "desc": "Define interfaces between connected systems.",
            "imageAlt": "Planning icon for digital transformation: dependencies"
          }
        ],
        "rightTitle": "Digital Work Work Checks",
        "features": [
          "Work area: Current State",
          "Work area: Target Tasks",
          "Work area: Dependencies",
          "Work area: Delivery",
          "Work area: Adoption",
          "Work area: Operating Workflow",
          "Work area: System Exchange",
          "Work area: Team Adoption",
          "Work area: Map Work Before Automation",
          "Work area: Connect the Operating Systems"
        ],
        "btnText": "Scope Digital Work"
      },
      {
        "badge": "Digital Work Review",
        "label": "Prepare the handover",
        "amount": "QA",
        "amountUnit": " notes",
        "infoTitle": "Digital Work Review Points",
        "items": [
          {
            "title": "Delivery",
            "desc": "Sequence changes around business priorities.",
            "imageAlt": "Planning icon for digital transformation: delivery"
          },
          {
            "title": "Adoption",
            "desc": "Review digital handoffs with their owners.",
            "imageAlt": "Planning icon for digital transformation: adoption"
          },
          {
            "title": "Digital Workflow",
            "desc": "Coordinate business change with the teams doing the work.",
            "imageAlt": "Planning icon for digital transformation: digital workflow"
          }
        ],
        "rightTitle": "Digital Work Review Checks",
        "features": [
          "Review: Delivery",
          "Review: Adoption",
          "Review: Operating Workflow",
          "Review: System Exchange",
          "Review: Team Adoption",
          "Review: Map Work Before Automation",
          "Review: Connect the Operating Systems",
          "Review: Introduce Change in Stages",
          "Review: Current State",
          "Review: Target Tasks"
        ],
        "btnText": "Review Digital Work"
      }
    ],
    "showAll": "See All Checks ↓",
    "showLess": "See Fewer ↑",
    "previous": "← Previous",
    "next": "Next →",
    "stageLabel": "Stage"
  },
  "/services/it-support/": {
    "titleLead": "IT Support Work Planning",
    "titleRest": "Review the Scope in Stages",
    "intro": "Plan it support around the work in scope. Connect reported technology issues to triage, investigation and the follow-up required to restore the affected work.",
    "steps": [
      {
        "badge": "IT Support Scope",
        "label": "Clarify the requirements",
        "amount": "MAP",
        "amountUnit": " first",
        "infoTitle": "IT Support Priorities",
        "items": [
          {
            "title": "Issue Intake",
            "desc": "Capture the affected system, symptoms and business task so a support request has usable context.",
            "imageAlt": "Planning icon for it support: issue intake"
          },
          {
            "title": "Triage and Routing",
            "desc": "Assign investigation responsibilities using the issue scope and the dependencies it involves.",
            "imageAlt": "Planning icon for it support: triage and routing"
          },
          {
            "title": "Resolution Work",
            "desc": "Record the actions taken and verify the relevant user task after a change or workaround.",
            "imageAlt": "Planning icon for it support: resolution work"
          }
        ],
        "rightTitle": "IT Support Scope Checks",
        "features": [
          "Scope: Affected systems",
          "Scope: Symptom records",
          "Scope: Request classification",
          "Scope: Business impact",
          "Scope: Initial checks",
          "Scope: Responsible teams",
          "Scope: Escalation context",
          "Scope: Dependency review",
          "Scope: Investigation notes",
          "Scope: Workaround context"
        ],
        "btnText": "Plan IT Support"
      },
      {
        "badge": "IT Support Work",
        "label": "Organize the work",
        "amount": "WORK",
        "amountUnit": " scope",
        "infoTitle": "IT Support Work Areas",
        "items": [
          {
            "title": "Affected systems",
            "desc": "For it support, include symptom records, request classification, business impact when defining issue intake.",
            "imageAlt": "Planning icon for it support: affected systems"
          },
          {
            "title": "Initial checks",
            "desc": "For it support, include responsible teams, escalation context, dependency review when defining triage and routing.",
            "imageAlt": "Planning icon for it support: initial checks"
          },
          {
            "title": "Investigation notes",
            "desc": "For it support, include workaround context, change records, outcome confirmation when defining resolution work.",
            "imageAlt": "Planning icon for it support: investigation notes"
          }
        ],
        "rightTitle": "IT Support Work Checks",
        "features": [
          "Work area: Business impact",
          "Work area: Initial checks",
          "Work area: Responsible teams",
          "Work area: Escalation context",
          "Work area: Dependency review",
          "Work area: Investigation notes",
          "Work area: Workaround context",
          "Work area: Change records",
          "Work area: Outcome confirmation",
          "Work area: Recurring patterns"
        ],
        "btnText": "Scope IT Support"
      },
      {
        "badge": "IT Support Review",
        "label": "Prepare the handover",
        "amount": "QA",
        "amountUnit": " notes",
        "infoTitle": "IT Support Review Points",
        "items": [
          {
            "title": "Support Learning",
            "desc": "Turn recurring issues and unresolved questions into maintainable support information.",
            "imageAlt": "Planning icon for it support: support learning"
          },
          {
            "title": "Recurring patterns",
            "desc": "Review recurring patterns alongside knowledge entries before agreeing the it support handover.",
            "imageAlt": "Planning icon for it support: recurring patterns"
          },
          {
            "title": "Open follow-up",
            "desc": "Keep open follow-up and ownership updates in the it support review record.",
            "imageAlt": "Planning icon for it support: open follow-up"
          }
        ],
        "rightTitle": "IT Support Review Checks",
        "features": [
          "Review: Escalation context",
          "Review: Dependency review",
          "Review: Investigation notes",
          "Review: Workaround context",
          "Review: Change records",
          "Review: Outcome confirmation",
          "Review: Recurring patterns",
          "Review: Knowledge entries",
          "Review: Open follow-up",
          "Review: Ownership updates"
        ],
        "btnText": "Review IT Support"
      }
    ],
    "showAll": "See All Checks ↓",
    "showLess": "See Fewer ↑",
    "previous": "← Previous",
    "next": "Next →",
    "stageLabel": "Stage"
  },
  "/crm-engineering/": {
    "titleLead": "CRM Work Planning",
    "titleRest": "Review the Scope in Stages",
    "intro": "Plan crm engineering around the work in scope. Bring customer records, team activity and service handoffs into CRM workflows that reflect how the business manages relationships.",
    "steps": [
      {
        "badge": "CRM Scope",
        "label": "Clarify the requirements",
        "amount": "MAP",
        "amountUnit": " first",
        "infoTitle": "CRM Priorities",
        "items": [
          {
            "title": "Structure Customer Information",
            "desc": "Define accounts, contacts and relationship links so staff can understand which records belong to the same customer context.",
            "imageAlt": "Planning icon for crm engineering: structure customer information"
          },
          {
            "title": "Coordinate Team Activity",
            "desc": "Connect notes, tasks, opportunities and service events to clear owners and the next relevant action.",
            "imageAlt": "Planning icon for crm engineering: coordinate team activity"
          },
          {
            "title": "Integrate Without Losing Meaning",
            "desc": "Map external customer updates to explicit field rules, duplicate handling and reviewable synchronization outcomes.",
            "imageAlt": "Planning icon for crm engineering: integrate without losing meaning"
          }
        ],
        "rightTitle": "CRM Scope Checks",
        "features": [
          "Scope: Structure Customer Information",
          "Scope: Coordinate Team Activity",
          "Scope: Integrate Without Losing Meaning",
          "Scope: Accounts",
          "Scope: Contacts",
          "Scope: Activities",
          "Scope: Handoffs",
          "Scope: Exchange",
          "Scope: Customer Records",
          "Scope: Contact Exchange"
        ],
        "btnText": "Plan CRM"
      },
      {
        "badge": "CRM Work",
        "label": "Organize the work",
        "amount": "WORK",
        "amountUnit": " scope",
        "infoTitle": "CRM Work Areas",
        "items": [
          {
            "title": "Accounts",
            "desc": "Structure contacts and company relationships.",
            "imageAlt": "Planning icon for crm engineering: accounts"
          },
          {
            "title": "Contacts",
            "desc": "Define pipeline stages and sales activities.",
            "imageAlt": "Planning icon for crm engineering: contacts"
          },
          {
            "title": "Activities",
            "desc": "Set conditions for CRM automation actions.",
            "imageAlt": "Planning icon for crm engineering: activities"
          }
        ],
        "rightTitle": "CRM Work Checks",
        "features": [
          "Work area: Accounts",
          "Work area: Contacts",
          "Work area: Activities",
          "Work area: Handoffs",
          "Work area: Exchange",
          "Work area: Customer Records",
          "Work area: Contact Exchange",
          "Work area: Team Handoffs",
          "Work area: Structure Customer Information",
          "Work area: Coordinate Team Activity"
        ],
        "btnText": "Scope CRM"
      },
      {
        "badge": "CRM Review",
        "label": "Prepare the handover",
        "amount": "QA",
        "amountUnit": " notes",
        "infoTitle": "CRM Review Points",
        "items": [
          {
            "title": "Handoffs",
            "desc": "Connect CRM records to external services.",
            "imageAlt": "Planning icon for crm engineering: handoffs"
          },
          {
            "title": "Exchange",
            "desc": "Trace customer-record and workflow changes.",
            "imageAlt": "Planning icon for crm engineering: exchange"
          },
          {
            "title": "CRM Workflow",
            "desc": "Keep customer records and team actions connected.",
            "imageAlt": "Planning icon for crm engineering: crm workflow"
          }
        ],
        "rightTitle": "CRM Review Checks",
        "features": [
          "Review: Handoffs",
          "Review: Exchange",
          "Review: Customer Records",
          "Review: Contact Exchange",
          "Review: Team Handoffs",
          "Review: Structure Customer Information",
          "Review: Coordinate Team Activity",
          "Review: Integrate Without Losing Meaning",
          "Review: Accounts",
          "Review: Contacts"
        ],
        "btnText": "Review CRM"
      }
    ],
    "showAll": "See All Checks ↓",
    "showLess": "See Fewer ↑",
    "previous": "← Previous",
    "next": "Next →",
    "stageLabel": "Stage"
  },
  "/services/desktop-development/": {
    "titleLead": "Desktop Apps Work Planning",
    "titleRest": "Review the Scope in Stages",
    "intro": "Plan desktop applications around the work in scope. Connect local interfaces, application data and operating-system dependencies around the work desktop users need to complete.",
    "steps": [
      {
        "badge": "Desktop Apps Scope",
        "label": "Clarify the requirements",
        "amount": "MAP",
        "amountUnit": " first",
        "infoTitle": "Desktop Apps Priorities",
        "items": [
          {
            "title": "Desktop Journeys",
            "desc": "Model workstation tasks and application states with clear navigation and input feedback.",
            "imageAlt": "Planning icon for desktop applications: desktop journeys"
          },
          {
            "title": "Local Data Work",
            "desc": "Define how records are stored, validated and exchanged when the application works with local data.",
            "imageAlt": "Planning icon for desktop applications: local data work"
          },
          {
            "title": "System Connections",
            "desc": "Document the devices, services and operating-system features the desktop workflow depends on.",
            "imageAlt": "Planning icon for desktop applications: system connections"
          }
        ],
        "rightTitle": "Desktop Apps Scope Checks",
        "features": [
          "Scope: Task-focused screens",
          "Scope: Input handling",
          "Scope: Window interactions",
          "Scope: User-state feedback",
          "Scope: Local persistence",
          "Scope: Record validation",
          "Scope: Import requirements",
          "Scope: Sync expectations",
          "Scope: Device interfaces",
          "Scope: Service exchange"
        ],
        "btnText": "Plan Desktop Apps"
      },
      {
        "badge": "Desktop Apps Work",
        "label": "Organize the work",
        "amount": "WORK",
        "amountUnit": " scope",
        "infoTitle": "Desktop Apps Work Areas",
        "items": [
          {
            "title": "Task-focused screens",
            "desc": "For desktop applications, include input handling, window interactions, user-state feedback when defining desktop journeys.",
            "imageAlt": "Planning icon for desktop applications: task-focused screens"
          },
          {
            "title": "Local persistence",
            "desc": "For desktop applications, include record validation, import requirements, sync expectations when defining local data work.",
            "imageAlt": "Planning icon for desktop applications: local persistence"
          },
          {
            "title": "Device interfaces",
            "desc": "For desktop applications, include service exchange, platform permissions, dependency configuration when defining system connections.",
            "imageAlt": "Planning icon for desktop applications: device interfaces"
          }
        ],
        "rightTitle": "Desktop Apps Work Checks",
        "features": [
          "Work area: User-state feedback",
          "Work area: Local persistence",
          "Work area: Record validation",
          "Work area: Import requirements",
          "Work area: Sync expectations",
          "Work area: Device interfaces",
          "Work area: Service exchange",
          "Work area: Platform permissions",
          "Work area: Dependency configuration",
          "Work area: Installation packages"
        ],
        "btnText": "Scope Desktop Apps"
      },
      {
        "badge": "Desktop Apps Review",
        "label": "Prepare the handover",
        "amount": "QA",
        "amountUnit": " notes",
        "infoTitle": "Desktop Apps Review Points",
        "items": [
          {
            "title": "Application Delivery",
            "desc": "Plan installation, update behavior and diagnostics for the supported desktop environments.",
            "imageAlt": "Planning icon for desktop applications: application delivery"
          },
          {
            "title": "Installation packages",
            "desc": "Review installation packages alongside update handling before agreeing the desktop applications handover.",
            "imageAlt": "Planning icon for desktop applications: installation packages"
          },
          {
            "title": "Environment checks",
            "desc": "Keep environment checks and desktop diagnostics in the desktop applications review record.",
            "imageAlt": "Planning icon for desktop applications: environment checks"
          }
        ],
        "rightTitle": "Desktop Apps Review Checks",
        "features": [
          "Review: Import requirements",
          "Review: Sync expectations",
          "Review: Device interfaces",
          "Review: Service exchange",
          "Review: Platform permissions",
          "Review: Dependency configuration",
          "Review: Installation packages",
          "Review: Update handling",
          "Review: Environment checks",
          "Review: Desktop diagnostics"
        ],
        "btnText": "Review Desktop Apps"
      }
    ],
    "showAll": "See All Checks ↓",
    "showLess": "See Fewer ↑",
    "previous": "← Previous",
    "next": "Next →",
    "stageLabel": "Stage"
  },
  "/computer-vision/": {
    "titleLead": "Vision Work Planning",
    "titleRest": "Review the Scope in Stages",
    "intro": "Plan computer vision around the work in scope. Define image-processing work through the inspection task, representative material and review of uncertain detections.",
    "steps": [
      {
        "badge": "Vision Scope",
        "label": "Clarify the requirements",
        "amount": "MAP",
        "amountUnit": " first",
        "infoTitle": "Vision Priorities",
        "items": [
          {
            "title": "Inspection Definition",
            "desc": "Specify what the system should identify and the image conditions relevant to that visual task.",
            "imageAlt": "Planning icon for computer vision: inspection definition"
          },
          {
            "title": "Image Preparation",
            "desc": "Keep image sources and annotation choices connected to the data used for training and evaluation.",
            "imageAlt": "Planning icon for computer vision: image preparation"
          },
          {
            "title": "Detection Review",
            "desc": "Inspect model errors with their source images and the context of the intended operating environment.",
            "imageAlt": "Planning icon for computer vision: detection review"
          }
        ],
        "rightTitle": "Vision Scope Checks",
        "features": [
          "Scope: Object categories",
          "Scope: Inspection boundaries",
          "Scope: Capture conditions",
          "Scope: Review expectations",
          "Scope: Image provenance",
          "Scope: Annotation rules",
          "Scope: Dataset variation",
          "Scope: Sample separation",
          "Scope: Detection examples",
          "Scope: Missed cases"
        ],
        "btnText": "Plan Vision"
      },
      {
        "badge": "Vision Work",
        "label": "Organize the work",
        "amount": "WORK",
        "amountUnit": " scope",
        "infoTitle": "Vision Work Areas",
        "items": [
          {
            "title": "Object categories",
            "desc": "For computer vision, include inspection boundaries, capture conditions, review expectations when defining inspection definition.",
            "imageAlt": "Planning icon for computer vision: object categories"
          },
          {
            "title": "Image provenance",
            "desc": "For computer vision, include annotation rules, dataset variation, sample separation when defining image preparation.",
            "imageAlt": "Planning icon for computer vision: image provenance"
          },
          {
            "title": "Detection examples",
            "desc": "For computer vision, include missed cases, false detections, uncertainty context when defining detection review.",
            "imageAlt": "Planning icon for computer vision: detection examples"
          }
        ],
        "rightTitle": "Vision Work Checks",
        "features": [
          "Work area: Review expectations",
          "Work area: Image provenance",
          "Work area: Annotation rules",
          "Work area: Dataset variation",
          "Work area: Sample separation",
          "Work area: Detection examples",
          "Work area: Missed cases",
          "Work area: False detections",
          "Work area: Uncertainty context",
          "Work area: Result presentation"
        ],
        "btnText": "Scope Vision"
      },
      {
        "badge": "Vision Review",
        "label": "Prepare the handover",
        "amount": "QA",
        "amountUnit": " notes",
        "infoTitle": "Vision Review Points",
        "items": [
          {
            "title": "Workflow Integration",
            "desc": "Connect visual findings to the interface or operator action that follows the inspection.",
            "imageAlt": "Planning icon for computer vision: workflow integration"
          },
          {
            "title": "Result presentation",
            "desc": "Review result presentation alongside source-image links before agreeing the computer vision handover.",
            "imageAlt": "Planning icon for computer vision: result presentation"
          },
          {
            "title": "Operator confirmation",
            "desc": "Keep operator confirmation and exception routing in the computer vision review record.",
            "imageAlt": "Planning icon for computer vision: operator confirmation"
          }
        ],
        "rightTitle": "Vision Review Checks",
        "features": [
          "Review: Dataset variation",
          "Review: Sample separation",
          "Review: Detection examples",
          "Review: Missed cases",
          "Review: False detections",
          "Review: Uncertainty context",
          "Review: Result presentation",
          "Review: Source-image links",
          "Review: Operator confirmation",
          "Review: Exception routing"
        ],
        "btnText": "Review Vision"
      }
    ],
    "showAll": "See All Checks ↓",
    "showLess": "See Fewer ↑",
    "previous": "← Previous",
    "next": "Next →",
    "stageLabel": "Stage"
  },
  "/salesforce-tech/": {
    "titleLead": "Salesforce Work Planning",
    "titleRest": "Review the Scope in Stages",
    "intro": "Plan salesforce around the work in scope. Shape Salesforce configuration and integration around customer records, team responsibilities and the sales or service journey.",
    "steps": [
      {
        "badge": "Salesforce Scope",
        "label": "Clarify the requirements",
        "amount": "MAP",
        "amountUnit": " first",
        "infoTitle": "Salesforce Priorities",
        "items": [
          {
            "title": "CRM Configuration",
            "desc": "Match Salesforce record structures and field definitions to the business process being supported.",
            "imageAlt": "Planning icon for salesforce: crm configuration"
          },
          {
            "title": "Workflow Rules",
            "desc": "Define how CRM actions move through approval, assignment and completion states.",
            "imageAlt": "Planning icon for salesforce: workflow rules"
          },
          {
            "title": "Platform Integration",
            "desc": "Connect external services through defined identifiers, exchange formats and failure handling.",
            "imageAlt": "Planning icon for salesforce: platform integration"
          }
        ],
        "rightTitle": "Salesforce Scope Checks",
        "features": [
          "Scope: Record relationships",
          "Scope: Field requirements",
          "Scope: Process terminology",
          "Scope: Configuration review",
          "Scope: Assignment conditions",
          "Scope: Approval stages",
          "Scope: Action permissions",
          "Scope: Workflow exceptions",
          "Scope: External identifiers",
          "Scope: Exchange contracts"
        ],
        "btnText": "Plan Salesforce"
      },
      {
        "badge": "Salesforce Work",
        "label": "Organize the work",
        "amount": "WORK",
        "amountUnit": " scope",
        "infoTitle": "Salesforce Work Areas",
        "items": [
          {
            "title": "Record relationships",
            "desc": "For salesforce, include field requirements, process terminology, configuration review when defining crm configuration.",
            "imageAlt": "Planning icon for salesforce: record relationships"
          },
          {
            "title": "Assignment conditions",
            "desc": "For salesforce, include approval stages, action permissions, workflow exceptions when defining workflow rules.",
            "imageAlt": "Planning icon for salesforce: assignment conditions"
          },
          {
            "title": "External identifiers",
            "desc": "For salesforce, include exchange contracts, sync responsibilities, integration failures when defining platform integration.",
            "imageAlt": "Planning icon for salesforce: external identifiers"
          }
        ],
        "rightTitle": "Salesforce Work Checks",
        "features": [
          "Work area: Configuration review",
          "Work area: Assignment conditions",
          "Work area: Approval stages",
          "Work area: Action permissions",
          "Work area: Workflow exceptions",
          "Work area: External identifiers",
          "Work area: Exchange contracts",
          "Work area: Sync responsibilities",
          "Work area: Integration failures",
          "Work area: CRM test scenarios"
        ],
        "btnText": "Scope Salesforce"
      },
      {
        "badge": "Salesforce Review",
        "label": "Prepare the handover",
        "amount": "QA",
        "amountUnit": " notes",
        "infoTitle": "Salesforce Review Points",
        "items": [
          {
            "title": "Change Validation",
            "desc": "Check configuration changes against representative customer records and team-specific use cases.",
            "imageAlt": "Planning icon for salesforce: change validation"
          },
          {
            "title": "CRM test scenarios",
            "desc": "Review crm test scenarios alongside role-aware checks before agreeing the salesforce handover.",
            "imageAlt": "Planning icon for salesforce: crm test scenarios"
          },
          {
            "title": "Release notes",
            "desc": "Keep release notes and administrator handover in the salesforce review record.",
            "imageAlt": "Planning icon for salesforce: release notes"
          }
        ],
        "rightTitle": "Salesforce Review Checks",
        "features": [
          "Review: Action permissions",
          "Review: Workflow exceptions",
          "Review: External identifiers",
          "Review: Exchange contracts",
          "Review: Sync responsibilities",
          "Review: Integration failures",
          "Review: CRM test scenarios",
          "Review: Role-aware checks",
          "Review: Release notes",
          "Review: Administrator handover"
        ],
        "btnText": "Review Salesforce"
      }
    ],
    "showAll": "See All Checks ↓",
    "showLess": "See Fewer ↑",
    "previous": "← Previous",
    "next": "Next →",
    "stageLabel": "Stage"
  },
  "/php-engineers/": {
    "titleLead": "PHP Apps Work Planning",
    "titleRest": "Review the Scope in Stages",
    "intro": "Plan php applications around the work in scope. Build PHP applications and portals around explicit request handling, persistence and service responsibilities.",
    "steps": [
      {
        "badge": "PHP Apps Scope",
        "label": "Clarify the requirements",
        "amount": "MAP",
        "amountUnit": " first",
        "infoTitle": "PHP Apps Priorities",
        "items": [
          {
            "title": "Web Application Logic",
            "desc": "Organize request handling and business rules around the tasks the PHP application performs.",
            "imageAlt": "Planning icon for php applications: web application logic"
          },
          {
            "title": "Database Interaction",
            "desc": "Connect application records to persistence rules and reviewable query behavior.",
            "imageAlt": "Planning icon for php applications: database interaction"
          },
          {
            "title": "Portal Integrations",
            "desc": "Define the identity and data contracts used when PHP services connect a portal to other systems.",
            "imageAlt": "Planning icon for php applications: portal integrations"
          }
        ],
        "rightTitle": "PHP Apps Scope Checks",
        "features": [
          "Scope: Route responsibilities",
          "Scope: Request validation",
          "Scope: Business-rule modules",
          "Scope: Response handling",
          "Scope: Data-access boundaries",
          "Scope: Query parameters",
          "Scope: Transaction handling",
          "Scope: Schema changes",
          "Scope: Session context",
          "Scope: Protected actions"
        ],
        "btnText": "Plan PHP Apps"
      },
      {
        "badge": "PHP Apps Work",
        "label": "Organize the work",
        "amount": "WORK",
        "amountUnit": " scope",
        "infoTitle": "PHP Apps Work Areas",
        "items": [
          {
            "title": "Route responsibilities",
            "desc": "For php applications, include request validation, business-rule modules, response handling when defining web application logic.",
            "imageAlt": "Planning icon for php applications: route responsibilities"
          },
          {
            "title": "Data-access boundaries",
            "desc": "For php applications, include query parameters, transaction handling, schema changes when defining database interaction.",
            "imageAlt": "Planning icon for php applications: data-access boundaries"
          },
          {
            "title": "Session context",
            "desc": "For php applications, include protected actions, external api calls, error responses when defining portal integrations.",
            "imageAlt": "Planning icon for php applications: session context"
          }
        ],
        "rightTitle": "PHP Apps Work Checks",
        "features": [
          "Work area: Response handling",
          "Work area: Data-access boundaries",
          "Work area: Query parameters",
          "Work area: Transaction handling",
          "Work area: Schema changes",
          "Work area: Session context",
          "Work area: Protected actions",
          "Work area: External API calls",
          "Work area: Error responses",
          "Work area: Runtime requirements"
        ],
        "btnText": "Scope PHP Apps"
      },
      {
        "badge": "PHP Apps Review",
        "label": "Prepare the handover",
        "amount": "QA",
        "amountUnit": " notes",
        "infoTitle": "PHP Apps Review Points",
        "items": [
          {
            "title": "PHP Delivery Checks",
            "desc": "Review application behavior, runtime configuration and maintenance needs together before handover.",
            "imageAlt": "Planning icon for php applications: php delivery checks"
          },
          {
            "title": "Runtime requirements",
            "desc": "Review runtime requirements alongside application tests before agreeing the php applications handover.",
            "imageAlt": "Planning icon for php applications: runtime requirements"
          },
          {
            "title": "Dependency review",
            "desc": "Keep dependency review and diagnostic guidance in the php applications review record.",
            "imageAlt": "Planning icon for php applications: dependency review"
          }
        ],
        "rightTitle": "PHP Apps Review Checks",
        "features": [
          "Review: Transaction handling",
          "Review: Schema changes",
          "Review: Session context",
          "Review: Protected actions",
          "Review: External API calls",
          "Review: Error responses",
          "Review: Runtime requirements",
          "Review: Application tests",
          "Review: Dependency review",
          "Review: Diagnostic guidance"
        ],
        "btnText": "Review PHP Apps"
      }
    ],
    "showAll": "See All Checks ↓",
    "showLess": "See Fewer ↑",
    "previous": "← Previous",
    "next": "Next →",
    "stageLabel": "Stage"
  },
  "/services/data-warehousing/": {
    "titleLead": "Data Stores Work Planning",
    "titleRest": "Review the Scope in Stages",
    "intro": "Plan data warehousing around the work in scope. Connect warehouse architecture to source definitions, transformation rules and the reporting questions it needs to support.",
    "steps": [
      {
        "badge": "Data Stores Scope",
        "label": "Clarify the requirements",
        "amount": "MAP",
        "amountUnit": " first",
        "infoTitle": "Data Stores Priorities",
        "items": [
          {
            "title": "Warehouse Models",
            "desc": "Define reporting grain, dimensions and relationships before consolidating source information.",
            "imageAlt": "Planning icon for data warehousing: warehouse models"
          },
          {
            "title": "Loading Pipelines",
            "desc": "Make extraction and loading steps explicit, including how failures and repeated loads are handled.",
            "imageAlt": "Planning icon for data warehousing: loading pipelines"
          },
          {
            "title": "Data Reconciliation",
            "desc": "Compare warehouse records with their source totals and transformation expectations.",
            "imageAlt": "Planning icon for data warehousing: data reconciliation"
          }
        ],
        "rightTitle": "Data Stores Scope Checks",
        "features": [
          "Scope: Reporting grain",
          "Scope: Dimension definitions",
          "Scope: Fact relationships",
          "Scope: Historical context",
          "Scope: Source extraction",
          "Scope: Load sequencing",
          "Scope: Incremental updates",
          "Scope: Failed-load recovery",
          "Scope: Record-count checks",
          "Scope: Measure reconciliation"
        ],
        "btnText": "Plan Data Stores"
      },
      {
        "badge": "Data Stores Work",
        "label": "Organize the work",
        "amount": "WORK",
        "amountUnit": " scope",
        "infoTitle": "Data Stores Work Areas",
        "items": [
          {
            "title": "Reporting grain",
            "desc": "For data warehousing, include dimension definitions, fact relationships, historical context when defining warehouse models.",
            "imageAlt": "Planning icon for data warehousing: reporting grain"
          },
          {
            "title": "Source extraction",
            "desc": "For data warehousing, include load sequencing, incremental updates, failed-load recovery when defining loading pipelines.",
            "imageAlt": "Planning icon for data warehousing: source extraction"
          },
          {
            "title": "Record-count checks",
            "desc": "For data warehousing, include measure reconciliation, transformation evidence, data-quality exceptions when defining data reconciliation.",
            "imageAlt": "Planning icon for data warehousing: record-count checks"
          }
        ],
        "rightTitle": "Data Stores Work Checks",
        "features": [
          "Work area: Historical context",
          "Work area: Source extraction",
          "Work area: Load sequencing",
          "Work area: Incremental updates",
          "Work area: Failed-load recovery",
          "Work area: Record-count checks",
          "Work area: Measure reconciliation",
          "Work area: Transformation evidence",
          "Work area: Data-quality exceptions",
          "Work area: Refresh ownership"
        ],
        "btnText": "Scope Data Stores"
      },
      {
        "badge": "Data Stores Review",
        "label": "Prepare the handover",
        "amount": "QA",
        "amountUnit": " notes",
        "infoTitle": "Data Stores Review Points",
        "items": [
          {
            "title": "Warehouse Operations",
            "desc": "Plan ownership of refresh schedules, data visibility and investigation of reporting discrepancies.",
            "imageAlt": "Planning icon for data warehousing: warehouse operations"
          },
          {
            "title": "Refresh ownership",
            "desc": "Review refresh ownership alongside access boundaries before agreeing the data warehousing handover.",
            "imageAlt": "Planning icon for data warehousing: refresh ownership"
          },
          {
            "title": "Pipeline diagnostics",
            "desc": "Keep pipeline diagnostics and reporting support in the data warehousing review record.",
            "imageAlt": "Planning icon for data warehousing: pipeline diagnostics"
          }
        ],
        "rightTitle": "Data Stores Review Checks",
        "features": [
          "Review: Incremental updates",
          "Review: Failed-load recovery",
          "Review: Record-count checks",
          "Review: Measure reconciliation",
          "Review: Transformation evidence",
          "Review: Data-quality exceptions",
          "Review: Refresh ownership",
          "Review: Access boundaries",
          "Review: Pipeline diagnostics",
          "Review: Reporting support"
        ],
        "btnText": "Review Data Stores"
      }
    ],
    "showAll": "See All Checks ↓",
    "showLess": "See Fewer ↑",
    "previous": "← Previous",
    "next": "Next →",
    "stageLabel": "Stage"
  },
  "/iot-engineering/": {
    "titleLead": "IoT Work Planning",
    "titleRest": "Review the Scope in Stages",
    "intro": "Plan iot engineering around the work in scope. Connect physical-device information to network exchange, platform records and the actions that follow an observed event.",
    "steps": [
      {
        "badge": "IoT Scope",
        "label": "Clarify the requirements",
        "amount": "MAP",
        "amountUnit": " first",
        "infoTitle": "IoT Priorities",
        "items": [
          {
            "title": "Device Context",
            "desc": "Define identifiers, signal units and operating conditions for the devices in the IoT system.",
            "imageAlt": "Planning icon for iot engineering: device context"
          },
          {
            "title": "Message Exchange",
            "desc": "Specify how device messages reach the platform and how missing or repeated transmissions are handled.",
            "imageAlt": "Planning icon for iot engineering: message exchange"
          },
          {
            "title": "Platform Records",
            "desc": "Keep observations connected to the device and time context needed for application processing.",
            "imageAlt": "Planning icon for iot engineering: platform records"
          }
        ],
        "rightTitle": "IoT Scope Checks",
        "features": [
          "Scope: Device identities",
          "Scope: Sensor units",
          "Scope: Capture intervals",
          "Scope: Operating conditions",
          "Scope: Message formats",
          "Scope: Transport choices",
          "Scope: Connectivity gaps",
          "Scope: Repeated-message handling",
          "Scope: Observation timestamps",
          "Scope: Device-state records"
        ],
        "btnText": "Plan IoT"
      },
      {
        "badge": "IoT Work",
        "label": "Organize the work",
        "amount": "WORK",
        "amountUnit": " scope",
        "infoTitle": "IoT Work Areas",
        "items": [
          {
            "title": "Device identities",
            "desc": "For iot engineering, include sensor units, capture intervals, operating conditions when defining device context.",
            "imageAlt": "Planning icon for iot engineering: device identities"
          },
          {
            "title": "Message formats",
            "desc": "For iot engineering, include transport choices, connectivity gaps, repeated-message handling when defining message exchange.",
            "imageAlt": "Planning icon for iot engineering: message formats"
          },
          {
            "title": "Observation timestamps",
            "desc": "For iot engineering, include device-state records, data retention needs, platform interfaces when defining platform records.",
            "imageAlt": "Planning icon for iot engineering: observation timestamps"
          }
        ],
        "rightTitle": "IoT Work Checks",
        "features": [
          "Work area: Operating conditions",
          "Work area: Message formats",
          "Work area: Transport choices",
          "Work area: Connectivity gaps",
          "Work area: Repeated-message handling",
          "Work area: Observation timestamps",
          "Work area: Device-state records",
          "Work area: Data retention needs",
          "Work area: Platform interfaces",
          "Work area: Event interpretation"
        ],
        "btnText": "Scope IoT"
      },
      {
        "badge": "IoT Review",
        "label": "Prepare the handover",
        "amount": "QA",
        "amountUnit": " notes",
        "infoTitle": "IoT Review Points",
        "items": [
          {
            "title": "Operational Actions",
            "desc": "Link device events and alerts to clear investigation, configuration and maintenance responsibilities.",
            "imageAlt": "Planning icon for iot engineering: operational actions"
          },
          {
            "title": "Event interpretation",
            "desc": "Review event interpretation alongside alert ownership before agreeing the iot engineering handover.",
            "imageAlt": "Planning icon for iot engineering: event interpretation"
          },
          {
            "title": "Configuration changes",
            "desc": "Keep configuration changes and field follow-up in the iot engineering review record.",
            "imageAlt": "Planning icon for iot engineering: configuration changes"
          }
        ],
        "rightTitle": "IoT Review Checks",
        "features": [
          "Review: Connectivity gaps",
          "Review: Repeated-message handling",
          "Review: Observation timestamps",
          "Review: Device-state records",
          "Review: Data retention needs",
          "Review: Platform interfaces",
          "Review: Event interpretation",
          "Review: Alert ownership",
          "Review: Configuration changes",
          "Review: Field follow-up"
        ],
        "btnText": "Review IoT"
      }
    ],
    "showAll": "See All Checks ↓",
    "showLess": "See Fewer ↑",
    "previous": "← Previous",
    "next": "Next →",
    "stageLabel": "Stage"
  },
  "/services/machine-learning/": {
    "titleLead": "ML Models Work Planning",
    "titleRest": "Review the Scope in Stages",
    "intro": "Plan machine learning around the work in scope. Connect model inputs and evaluation choices to the operational decision a prediction is intended to support.",
    "steps": [
      {
        "badge": "ML Models Scope",
        "label": "Clarify the requirements",
        "amount": "MAP",
        "amountUnit": " first",
        "infoTitle": "ML Models Priorities",
        "items": [
          {
            "title": "Prediction Requirements",
            "desc": "Specify the target, available information and outcome against which the model will be reviewed.",
            "imageAlt": "Planning icon for machine learning: prediction requirements"
          },
          {
            "title": "Training Preparation",
            "desc": "Review feature and label choices alongside the boundaries between training and evaluation data.",
            "imageAlt": "Planning icon for machine learning: training preparation"
          },
          {
            "title": "Behavior Evaluation",
            "desc": "Examine model errors and representative operating cases before connecting output to application actions.",
            "imageAlt": "Planning icon for machine learning: behavior evaluation"
          }
        ],
        "rightTitle": "ML Models Scope Checks",
        "features": [
          "Scope: Prediction targets",
          "Scope: Available inputs",
          "Scope: Baseline behavior",
          "Scope: Use-case constraints",
          "Scope: Feature definitions",
          "Scope: Label consistency",
          "Scope: Training partitions",
          "Scope: Leakage prevention checks",
          "Scope: Evaluation cases",
          "Scope: Error categories"
        ],
        "btnText": "Plan ML Models"
      },
      {
        "badge": "ML Models Work",
        "label": "Organize the work",
        "amount": "WORK",
        "amountUnit": " scope",
        "infoTitle": "ML Models Work Areas",
        "items": [
          {
            "title": "Prediction targets",
            "desc": "For machine learning, include available inputs, baseline behavior, use-case constraints when defining prediction requirements.",
            "imageAlt": "Planning icon for machine learning: prediction targets"
          },
          {
            "title": "Feature definitions",
            "desc": "For machine learning, include label consistency, training partitions, leakage prevention checks when defining training preparation.",
            "imageAlt": "Planning icon for machine learning: feature definitions"
          },
          {
            "title": "Evaluation cases",
            "desc": "For machine learning, include error categories, operating variation, model limitations when defining behavior evaluation.",
            "imageAlt": "Planning icon for machine learning: evaluation cases"
          }
        ],
        "rightTitle": "ML Models Work Checks",
        "features": [
          "Work area: Use-case constraints",
          "Work area: Feature definitions",
          "Work area: Label consistency",
          "Work area: Training partitions",
          "Work area: Leakage prevention checks",
          "Work area: Evaluation cases",
          "Work area: Error categories",
          "Work area: Operating variation",
          "Work area: Model limitations",
          "Work area: Prediction contracts"
        ],
        "btnText": "Scope ML Models"
      },
      {
        "badge": "ML Models Review",
        "label": "Prepare the handover",
        "amount": "QA",
        "amountUnit": " notes",
        "infoTitle": "ML Models Review Points",
        "items": [
          {
            "title": "Prediction Integration",
            "desc": "Define the service responses and review paths needed when the model is used in a business workflow.",
            "imageAlt": "Planning icon for machine learning: prediction integration"
          },
          {
            "title": "Prediction contracts",
            "desc": "Review prediction contracts alongside output interpretation before agreeing the machine learning handover.",
            "imageAlt": "Planning icon for machine learning: prediction contracts"
          },
          {
            "title": "Unsuccessful inference",
            "desc": "Keep unsuccessful inference and human-review paths in the machine learning review record.",
            "imageAlt": "Planning icon for machine learning: unsuccessful inference"
          }
        ],
        "rightTitle": "ML Models Review Checks",
        "features": [
          "Review: Training partitions",
          "Review: Leakage prevention checks",
          "Review: Evaluation cases",
          "Review: Error categories",
          "Review: Operating variation",
          "Review: Model limitations",
          "Review: Prediction contracts",
          "Review: Output interpretation",
          "Review: Unsuccessful inference",
          "Review: Human-review paths"
        ],
        "btnText": "Review ML Models"
      }
    ],
    "showAll": "See All Checks ↓",
    "showLess": "See Fewer ↑",
    "previous": "← Previous",
    "next": "Next →",
    "stageLabel": "Stage"
  },
  "/marketing-software/": {
    "titleLead": "Campaigns Work Planning",
    "titleRest": "Review the Scope in Stages",
    "intro": "Plan marketing software around the work in scope. Connect audience records, campaign content and reporting events through explicit scheduling and automation rules.",
    "steps": [
      {
        "badge": "Campaigns Scope",
        "label": "Clarify the requirements",
        "amount": "MAP",
        "amountUnit": " first",
        "infoTitle": "Campaigns Priorities",
        "items": [
          {
            "title": "Audience Records",
            "desc": "Organize campaign audiences around defined attributes, eligibility and communication preferences.",
            "imageAlt": "Planning icon for marketing software: audience records"
          },
          {
            "title": "Campaign Operations",
            "desc": "Keep content versions, channels and approval steps connected to the campaign being delivered.",
            "imageAlt": "Planning icon for marketing software: campaign operations"
          },
          {
            "title": "Automation Behavior",
            "desc": "Define triggers, permitted actions and exits so automated campaign work can be inspected.",
            "imageAlt": "Planning icon for marketing software: automation behavior"
          }
        ],
        "rightTitle": "Campaigns Scope Checks",
        "features": [
          "Scope: Audience attributes",
          "Scope: Segment rules",
          "Scope: Contact preferences",
          "Scope: Eligibility changes",
          "Scope: Campaign versions",
          "Scope: Channel requirements",
          "Scope: Editorial approvals",
          "Scope: Delivery schedules",
          "Scope: Trigger definitions",
          "Scope: Automation boundaries"
        ],
        "btnText": "Plan Campaigns"
      },
      {
        "badge": "Campaigns Work",
        "label": "Organize the work",
        "amount": "WORK",
        "amountUnit": " scope",
        "infoTitle": "Campaigns Work Areas",
        "items": [
          {
            "title": "Audience attributes",
            "desc": "For marketing software, include segment rules, contact preferences, eligibility changes when defining audience records.",
            "imageAlt": "Planning icon for marketing software: audience attributes"
          },
          {
            "title": "Campaign versions",
            "desc": "For marketing software, include channel requirements, editorial approvals, delivery schedules when defining campaign operations.",
            "imageAlt": "Planning icon for marketing software: campaign versions"
          },
          {
            "title": "Trigger definitions",
            "desc": "For marketing software, include automation boundaries, exit conditions, action history when defining automation behavior.",
            "imageAlt": "Planning icon for marketing software: trigger definitions"
          }
        ],
        "rightTitle": "Campaigns Work Checks",
        "features": [
          "Work area: Eligibility changes",
          "Work area: Campaign versions",
          "Work area: Channel requirements",
          "Work area: Editorial approvals",
          "Work area: Delivery schedules",
          "Work area: Trigger definitions",
          "Work area: Automation boundaries",
          "Work area: Exit conditions",
          "Work area: Action history",
          "Work area: Event terminology"
        ],
        "btnText": "Scope Campaigns"
      },
      {
        "badge": "Campaigns Review",
        "label": "Prepare the handover",
        "amount": "QA",
        "amountUnit": " notes",
        "infoTitle": "Campaigns Review Points",
        "items": [
          {
            "title": "Marketing Reporting",
            "desc": "Show campaign activity with the event definitions and attribution assumptions behind each measure.",
            "imageAlt": "Planning icon for marketing software: marketing reporting"
          },
          {
            "title": "Event terminology",
            "desc": "Review event terminology alongside attribution context before agreeing the marketing software handover.",
            "imageAlt": "Planning icon for marketing software: event terminology"
          },
          {
            "title": "Reporting periods",
            "desc": "Keep reporting periods and source-coverage review in the marketing software review record.",
            "imageAlt": "Planning icon for marketing software: reporting periods"
          }
        ],
        "rightTitle": "Campaigns Review Checks",
        "features": [
          "Review: Editorial approvals",
          "Review: Delivery schedules",
          "Review: Trigger definitions",
          "Review: Automation boundaries",
          "Review: Exit conditions",
          "Review: Action history",
          "Review: Event terminology",
          "Review: Attribution context",
          "Review: Reporting periods",
          "Review: Source-coverage review"
        ],
        "btnText": "Review Campaigns"
      }
    ],
    "showAll": "See All Checks ↓",
    "showLess": "See Fewer ↑",
    "previous": "← Previous",
    "next": "Next →",
    "stageLabel": "Stage"
  },
  "/dynamics-365-solutions/": {
    "titleLead": "Dynamics 365 Work Planning",
    "titleRest": "Review the Scope in Stages",
    "intro": "Plan dynamics 365 around the work in scope. Align Dynamics 365 configuration and exchanged records with the departments and workflows the implementation supports.",
    "steps": [
      {
        "badge": "Dynamics 365 Scope",
        "label": "Clarify the requirements",
        "amount": "MAP",
        "amountUnit": " first",
        "infoTitle": "Dynamics 365 Priorities",
        "items": [
          {
            "title": "Process Configuration",
            "desc": "Translate department requirements into record fields, workflow states and responsibility rules.",
            "imageAlt": "Planning icon for dynamics 365: process configuration"
          },
          {
            "title": "Business Data",
            "desc": "Define shared records and migration expectations before moving information into the configured system.",
            "imageAlt": "Planning icon for dynamics 365: business data"
          },
          {
            "title": "System Exchange",
            "desc": "Connect Dynamics 365 records to external applications with explicit ownership of each exchange.",
            "imageAlt": "Planning icon for dynamics 365: system exchange"
          }
        ],
        "rightTitle": "Dynamics 365 Scope Checks",
        "features": [
          "Scope: Department requirements",
          "Scope: Record configuration",
          "Scope: Workflow states",
          "Scope: Role responsibilities",
          "Scope: Master-data definitions",
          "Scope: Migration mapping",
          "Scope: Duplicate review",
          "Scope: Data validation",
          "Scope: Integration mappings",
          "Scope: Record identifiers"
        ],
        "btnText": "Plan Dynamics 365"
      },
      {
        "badge": "Dynamics 365 Work",
        "label": "Organize the work",
        "amount": "WORK",
        "amountUnit": " scope",
        "infoTitle": "Dynamics 365 Work Areas",
        "items": [
          {
            "title": "Department requirements",
            "desc": "For dynamics 365, include record configuration, workflow states, role responsibilities when defining process configuration.",
            "imageAlt": "Planning icon for dynamics 365: department requirements"
          },
          {
            "title": "Master-data definitions",
            "desc": "For dynamics 365, include migration mapping, duplicate review, data validation when defining business data.",
            "imageAlt": "Planning icon for dynamics 365: master-data definitions"
          },
          {
            "title": "Integration mappings",
            "desc": "For dynamics 365, include record identifiers, exchange ownership, sync exceptions when defining system exchange.",
            "imageAlt": "Planning icon for dynamics 365: integration mappings"
          }
        ],
        "rightTitle": "Dynamics 365 Work Checks",
        "features": [
          "Work area: Role responsibilities",
          "Work area: Master-data definitions",
          "Work area: Migration mapping",
          "Work area: Duplicate review",
          "Work area: Data validation",
          "Work area: Integration mappings",
          "Work area: Record identifiers",
          "Work area: Exchange ownership",
          "Work area: Sync exceptions",
          "Work area: User-task scenarios"
        ],
        "btnText": "Scope Dynamics 365"
      },
      {
        "badge": "Dynamics 365 Review",
        "label": "Prepare the handover",
        "amount": "QA",
        "amountUnit": " notes",
        "infoTitle": "Dynamics 365 Review Points",
        "items": [
          {
            "title": "Implementation Review",
            "desc": "Check configured behavior using the users, permissions and business examples relevant to the rollout.",
            "imageAlt": "Planning icon for dynamics 365: implementation review"
          },
          {
            "title": "User-task scenarios",
            "desc": "Review user-task scenarios alongside permission review before agreeing the dynamics 365 handover.",
            "imageAlt": "Planning icon for dynamics 365: user-task scenarios"
          },
          {
            "title": "Rollout increments",
            "desc": "Keep rollout increments and operational guidance in the dynamics 365 review record.",
            "imageAlt": "Planning icon for dynamics 365: rollout increments"
          }
        ],
        "rightTitle": "Dynamics 365 Review Checks",
        "features": [
          "Review: Duplicate review",
          "Review: Data validation",
          "Review: Integration mappings",
          "Review: Record identifiers",
          "Review: Exchange ownership",
          "Review: Sync exceptions",
          "Review: User-task scenarios",
          "Review: Permission review",
          "Review: Rollout increments",
          "Review: Operational guidance"
        ],
        "btnText": "Review Dynamics 365"
      }
    ],
    "showAll": "See All Checks ↓",
    "showLess": "See Fewer ↑",
    "previous": "← Previous",
    "next": "Next →",
    "stageLabel": "Stage"
  },
  "/services/web-development/": {
    "titleLead": "Web Apps Work Planning",
    "titleRest": "Review the Scope in Stages",
    "intro": "Plan web development around the work in scope. Connect responsive pages, application services and content delivery to the tasks people need to complete on the web.",
    "steps": [
      {
        "badge": "Web Apps Scope",
        "label": "Clarify the requirements",
        "amount": "MAP",
        "amountUnit": " first",
        "infoTitle": "Web Apps Priorities",
        "items": [
          {
            "title": "Page and Task Structure",
            "desc": "Organize web content and application screens around clear navigation and meaningful document structure.",
            "imageAlt": "Planning icon for web development: page and task structure"
          },
          {
            "title": "Interactive Workflows",
            "desc": "Coordinate forms, interface state and asynchronous responses across expected and unsuccessful journeys.",
            "imageAlt": "Planning icon for web development: interactive workflows"
          },
          {
            "title": "Web Service Connections",
            "desc": "Define how browser-facing features exchange records with application services and content sources.",
            "imageAlt": "Planning icon for web development: web service connections"
          }
        ],
        "rightTitle": "Web Apps Scope Checks",
        "features": [
          "Scope: Page relationships",
          "Scope: Semantic structure",
          "Scope: Content hierarchy",
          "Scope: Navigation context",
          "Scope: Form feedback",
          "Scope: Loading states",
          "Scope: Service responses",
          "Scope: Recovery paths",
          "Scope: API requirements",
          "Scope: Content contracts"
        ],
        "btnText": "Plan Web Apps"
      },
      {
        "badge": "Web Apps Work",
        "label": "Organize the work",
        "amount": "WORK",
        "amountUnit": " scope",
        "infoTitle": "Web Apps Work Areas",
        "items": [
          {
            "title": "Page relationships",
            "desc": "For web development, include semantic structure, content hierarchy, navigation context when defining page and task structure.",
            "imageAlt": "Planning icon for web development: page relationships"
          },
          {
            "title": "Form feedback",
            "desc": "For web development, include loading states, service responses, recovery paths when defining interactive workflows.",
            "imageAlt": "Planning icon for web development: form feedback"
          },
          {
            "title": "API requirements",
            "desc": "For web development, include content contracts, input checks, data-change behavior when defining web service connections.",
            "imageAlt": "Planning icon for web development: api requirements"
          }
        ],
        "rightTitle": "Web Apps Work Checks",
        "features": [
          "Work area: Navigation context",
          "Work area: Form feedback",
          "Work area: Loading states",
          "Work area: Service responses",
          "Work area: Recovery paths",
          "Work area: API requirements",
          "Work area: Content contracts",
          "Work area: Input checks",
          "Work area: Data-change behavior",
          "Work area: Responsive checks"
        ],
        "btnText": "Scope Web Apps"
      },
      {
        "badge": "Web Apps Review",
        "label": "Prepare the handover",
        "amount": "QA",
        "amountUnit": " notes",
        "infoTitle": "Web Apps Review Points",
        "items": [
          {
            "title": "Cross-screen Review",
            "desc": "Check content, controls and task completion across the devices and input methods in the project scope.",
            "imageAlt": "Planning icon for web development: cross-screen review"
          },
          {
            "title": "Responsive checks",
            "desc": "Review responsive checks alongside keyboard interactions before agreeing the web development handover.",
            "imageAlt": "Planning icon for web development: responsive checks"
          },
          {
            "title": "Media alternatives",
            "desc": "Keep media alternatives and browser coverage in the web development review record.",
            "imageAlt": "Planning icon for web development: media alternatives"
          }
        ],
        "rightTitle": "Web Apps Review Checks",
        "features": [
          "Review: Service responses",
          "Review: Recovery paths",
          "Review: API requirements",
          "Review: Content contracts",
          "Review: Input checks",
          "Review: Data-change behavior",
          "Review: Responsive checks",
          "Review: Keyboard interactions",
          "Review: Media alternatives",
          "Review: Browser coverage"
        ],
        "btnText": "Review Web Apps"
      }
    ],
    "showAll": "See All Checks ↓",
    "showLess": "See Fewer ↑",
    "previous": "← Previous",
    "next": "Next →",
    "stageLabel": "Stage"
  },
  "/services/penetration-testing/": {
    "titleLead": "Pen Tests Work Planning",
    "titleRest": "Review the Scope in Stages",
    "intro": "Plan penetration testing around the work in scope. Frame authorized security testing around defined targets, reproducible findings and the evidence required for remediation review.",
    "steps": [
      {
        "badge": "Pen Tests Scope",
        "label": "Clarify the requirements",
        "amount": "MAP",
        "amountUnit": " first",
        "infoTitle": "Pen Tests Priorities",
        "items": [
          {
            "title": "Engagement Scope",
            "desc": "Agree on the systems, permitted testing activity and communication responsibilities before assessment.",
            "imageAlt": "Planning icon for penetration testing: engagement scope"
          },
          {
            "title": "Controlled Assessment",
            "desc": "Investigate relevant application and access behavior within the agreed testing conditions.",
            "imageAlt": "Planning icon for penetration testing: controlled assessment"
          },
          {
            "title": "Finding Evidence",
            "desc": "Document observed weaknesses with their conditions and potential impact without overstating coverage.",
            "imageAlt": "Planning icon for penetration testing: finding evidence"
          }
        ],
        "rightTitle": "Pen Tests Scope Checks",
        "features": [
          "Scope: Authorized targets",
          "Scope: Testing boundaries",
          "Scope: Engagement contacts",
          "Scope: Handling requirements",
          "Scope: Exposure review",
          "Scope: Access behavior",
          "Scope: Input boundaries",
          "Scope: Assessment notes",
          "Scope: Reproduction context",
          "Scope: Affected components"
        ],
        "btnText": "Plan Pen Tests"
      },
      {
        "badge": "Pen Tests Work",
        "label": "Organize the work",
        "amount": "WORK",
        "amountUnit": " scope",
        "infoTitle": "Pen Tests Work Areas",
        "items": [
          {
            "title": "Authorized targets",
            "desc": "For penetration testing, include testing boundaries, engagement contacts, handling requirements when defining engagement scope.",
            "imageAlt": "Planning icon for penetration testing: authorized targets"
          },
          {
            "title": "Exposure review",
            "desc": "For penetration testing, include access behavior, input boundaries, assessment notes when defining controlled assessment.",
            "imageAlt": "Planning icon for penetration testing: exposure review"
          },
          {
            "title": "Reproduction context",
            "desc": "For penetration testing, include affected components, evidence references, impact explanation when defining finding evidence.",
            "imageAlt": "Planning icon for penetration testing: reproduction context"
          }
        ],
        "rightTitle": "Pen Tests Work Checks",
        "features": [
          "Work area: Handling requirements",
          "Work area: Exposure review",
          "Work area: Access behavior",
          "Work area: Input boundaries",
          "Work area: Assessment notes",
          "Work area: Reproduction context",
          "Work area: Affected components",
          "Work area: Evidence references",
          "Work area: Impact explanation",
          "Work area: Remediation ownership"
        ],
        "btnText": "Scope Pen Tests"
      },
      {
        "badge": "Pen Tests Review",
        "label": "Prepare the handover",
        "amount": "QA",
        "amountUnit": " notes",
        "infoTitle": "Pen Tests Review Points",
        "items": [
          {
            "title": "Remediation Review",
            "desc": "Connect reported findings to responsible owners and focused checks after a corrective change.",
            "imageAlt": "Planning icon for penetration testing: remediation review"
          },
          {
            "title": "Remediation ownership",
            "desc": "Review remediation ownership alongside change references before agreeing the penetration testing handover.",
            "imageAlt": "Planning icon for penetration testing: remediation ownership"
          },
          {
            "title": "Retest scope",
            "desc": "Keep retest scope and remaining limitations in the penetration testing review record.",
            "imageAlt": "Planning icon for penetration testing: retest scope"
          }
        ],
        "rightTitle": "Pen Tests Review Checks",
        "features": [
          "Review: Input boundaries",
          "Review: Assessment notes",
          "Review: Reproduction context",
          "Review: Affected components",
          "Review: Evidence references",
          "Review: Impact explanation",
          "Review: Remediation ownership",
          "Review: Change references",
          "Review: Retest scope",
          "Review: Remaining limitations"
        ],
        "btnText": "Review Pen Tests"
      }
    ],
    "showAll": "See All Checks ↓",
    "showLess": "See Fewer ↑",
    "previous": "← Previous",
    "next": "Next →",
    "stageLabel": "Stage"
  },
  "/services/software-consulting/": {
    "titleLead": "Consulting Work Planning",
    "titleRest": "Review the Scope in Stages",
    "intro": "Plan software consulting around the work in scope. Connect architecture advice and delivery recommendations to the requirements, constraints and tradeoffs of the software project.",
    "steps": [
      {
        "badge": "Consulting Scope",
        "label": "Clarify the requirements",
        "amount": "MAP",
        "amountUnit": " first",
        "infoTitle": "Consulting Priorities",
        "items": [
          {
            "title": "Requirement Discovery",
            "desc": "Clarify the business task, existing system context and constraints behind a technology decision.",
            "imageAlt": "Planning icon for software consulting: requirement discovery"
          },
          {
            "title": "Architecture Options",
            "desc": "Compare service and data boundaries against the behavior and dependencies the application needs.",
            "imageAlt": "Planning icon for software consulting: architecture options"
          },
          {
            "title": "Delivery Planning",
            "desc": "Turn technical choices into staged work with acceptance expectations and identified decision owners.",
            "imageAlt": "Planning icon for software consulting: delivery planning"
          }
        ],
        "rightTitle": "Consulting Scope Checks",
        "features": [
          "Scope: Business requirements",
          "Scope: System context",
          "Scope: Operating constraints",
          "Scope: Stakeholder questions",
          "Scope: Architecture alternatives",
          "Scope: Dependency tradeoffs",
          "Scope: Data responsibilities",
          "Scope: Interface boundaries",
          "Scope: Implementation stages",
          "Scope: Acceptance expectations"
        ],
        "btnText": "Plan Consulting"
      },
      {
        "badge": "Consulting Work",
        "label": "Organize the work",
        "amount": "WORK",
        "amountUnit": " scope",
        "infoTitle": "Consulting Work Areas",
        "items": [
          {
            "title": "Business requirements",
            "desc": "For software consulting, include system context, operating constraints, stakeholder questions when defining requirement discovery.",
            "imageAlt": "Planning icon for software consulting: business requirements"
          },
          {
            "title": "Architecture alternatives",
            "desc": "For software consulting, include dependency tradeoffs, data responsibilities, interface boundaries when defining architecture options.",
            "imageAlt": "Planning icon for software consulting: architecture alternatives"
          },
          {
            "title": "Implementation stages",
            "desc": "For software consulting, include acceptance expectations, decision ownership, delivery dependencies when defining delivery planning.",
            "imageAlt": "Planning icon for software consulting: implementation stages"
          }
        ],
        "rightTitle": "Consulting Work Checks",
        "features": [
          "Work area: Stakeholder questions",
          "Work area: Architecture alternatives",
          "Work area: Dependency tradeoffs",
          "Work area: Data responsibilities",
          "Work area: Interface boundaries",
          "Work area: Implementation stages",
          "Work area: Acceptance expectations",
          "Work area: Decision ownership",
          "Work area: Delivery dependencies",
          "Work area: Decision rationale"
        ],
        "btnText": "Scope Consulting"
      },
      {
        "badge": "Consulting Review",
        "label": "Prepare the handover",
        "amount": "QA",
        "amountUnit": " notes",
        "infoTitle": "Consulting Review Points",
        "items": [
          {
            "title": "Technical Handover",
            "desc": "Keep recommendations and their assumptions understandable to the team implementing or operating the system.",
            "imageAlt": "Planning icon for software consulting: technical handover"
          },
          {
            "title": "Decision rationale",
            "desc": "Review decision rationale alongside assumption records before agreeing the software consulting handover.",
            "imageAlt": "Planning icon for software consulting: decision rationale"
          },
          {
            "title": "Review checkpoints",
            "desc": "Keep review checkpoints and follow-up questions in the software consulting review record.",
            "imageAlt": "Planning icon for software consulting: review checkpoints"
          }
        ],
        "rightTitle": "Consulting Review Checks",
        "features": [
          "Review: Data responsibilities",
          "Review: Interface boundaries",
          "Review: Implementation stages",
          "Review: Acceptance expectations",
          "Review: Decision ownership",
          "Review: Delivery dependencies",
          "Review: Decision rationale",
          "Review: Assumption records",
          "Review: Review checkpoints",
          "Review: Follow-up questions"
        ],
        "btnText": "Review Consulting"
      }
    ],
    "showAll": "See All Checks ↓",
    "showLess": "See Fewer ↑",
    "previous": "← Previous",
    "next": "Next →",
    "stageLabel": "Stage"
  },
  "/services/application-services/": {
    "titleLead": "App Services Work Planning",
    "titleRest": "Review the Scope in Stages",
    "intro": "Plan application services around the work in scope. Coordinate application development, integration and maintenance around the behavior the business needs to preserve.",
    "steps": [
      {
        "badge": "App Services Scope",
        "label": "Clarify the requirements",
        "amount": "MAP",
        "amountUnit": " first",
        "infoTitle": "App Services Priorities",
        "items": [
          {
            "title": "Application Assessment",
            "desc": "Identify essential workflows and dependencies before planning a change to an existing application.",
            "imageAlt": "Planning icon for application services: application assessment"
          },
          {
            "title": "Feature Delivery",
            "desc": "Develop application capabilities through defined service contracts and reviewable increments.",
            "imageAlt": "Planning icon for application services: feature delivery"
          },
          {
            "title": "Integration Work",
            "desc": "Connect application data and actions to external services with clear failure and ownership rules.",
            "imageAlt": "Planning icon for application services: integration work"
          }
        ],
        "rightTitle": "App Services Scope Checks",
        "features": [
          "Scope: Workflow inventory",
          "Scope: Dependency context",
          "Scope: Current limitations",
          "Scope: Change requirements",
          "Scope: Feature boundaries",
          "Scope: Service interfaces",
          "Scope: Increment reviews",
          "Scope: Acceptance records",
          "Scope: Connected systems",
          "Scope: Data-exchange rules"
        ],
        "btnText": "Plan App Services"
      },
      {
        "badge": "App Services Work",
        "label": "Organize the work",
        "amount": "WORK",
        "amountUnit": " scope",
        "infoTitle": "App Services Work Areas",
        "items": [
          {
            "title": "Workflow inventory",
            "desc": "For application services, include dependency context, current limitations, change requirements when defining application assessment.",
            "imageAlt": "Planning icon for application services: workflow inventory"
          },
          {
            "title": "Feature boundaries",
            "desc": "For application services, include service interfaces, increment reviews, acceptance records when defining feature delivery.",
            "imageAlt": "Planning icon for application services: feature boundaries"
          },
          {
            "title": "Connected systems",
            "desc": "For application services, include data-exchange rules, failure handling, integration ownership when defining integration work.",
            "imageAlt": "Planning icon for application services: connected systems"
          }
        ],
        "rightTitle": "App Services Work Checks",
        "features": [
          "Work area: Change requirements",
          "Work area: Feature boundaries",
          "Work area: Service interfaces",
          "Work area: Increment reviews",
          "Work area: Acceptance records",
          "Work area: Connected systems",
          "Work area: Data-exchange rules",
          "Work area: Failure handling",
          "Work area: Integration ownership",
          "Work area: Issue investigation"
        ],
        "btnText": "Scope App Services"
      },
      {
        "badge": "App Services Review",
        "label": "Prepare the handover",
        "amount": "QA",
        "amountUnit": " notes",
        "infoTitle": "App Services Review Points",
        "items": [
          {
            "title": "Lifecycle Support",
            "desc": "Keep maintenance tasks and operational knowledge connected to the application version in use.",
            "imageAlt": "Planning icon for application services: lifecycle support"
          },
          {
            "title": "Issue investigation",
            "desc": "Review issue investigation alongside release context before agreeing the application services handover.",
            "imageAlt": "Planning icon for application services: issue investigation"
          },
          {
            "title": "Maintenance priorities",
            "desc": "Keep maintenance priorities and support documentation in the application services review record.",
            "imageAlt": "Planning icon for application services: maintenance priorities"
          }
        ],
        "rightTitle": "App Services Review Checks",
        "features": [
          "Review: Increment reviews",
          "Review: Acceptance records",
          "Review: Connected systems",
          "Review: Data-exchange rules",
          "Review: Failure handling",
          "Review: Integration ownership",
          "Review: Issue investigation",
          "Review: Release context",
          "Review: Maintenance priorities",
          "Review: Support documentation"
        ],
        "btnText": "Review App Services"
      }
    ],
    "showAll": "See All Checks ↓",
    "showLess": "See Fewer ↑",
    "previous": "← Previous",
    "next": "Next →",
    "stageLabel": "Stage"
  },
  "/c-engineers/": {
    "titleLead": "C++ Work Planning",
    "titleRest": "Review the Scope in Stages",
    "intro": "Plan c++ engineering around the work in scope. Develop desktop, embedded and system-level software around resource ownership, interface contracts and supported operating conditions.",
    "steps": [
      {
        "badge": "C++ Scope",
        "label": "Clarify the requirements",
        "amount": "MAP",
        "amountUnit": " first",
        "infoTitle": "C++ Priorities",
        "items": [
          {
            "title": "System Responsibilities",
            "desc": "Define the processing task and boundaries between C++ modules, platforms and connected devices.",
            "imageAlt": "Planning icon for c++ engineering: system responsibilities"
          },
          {
            "title": "Resource Management",
            "desc": "Make object lifetimes and shared-resource responsibilities explicit in the implementation design.",
            "imageAlt": "Planning icon for c++ engineering: resource management"
          },
          {
            "title": "Native Integration",
            "desc": "Connect native code to application and hardware interfaces with defined data and failure behavior.",
            "imageAlt": "Planning icon for c++ engineering: native integration"
          }
        ],
        "rightTitle": "C++ Scope Checks",
        "features": [
          "Scope: Module boundaries",
          "Scope: Platform requirements",
          "Scope: Device contracts",
          "Scope: Processing tasks",
          "Scope: Object lifetimes",
          "Scope: Ownership rules",
          "Scope: Memory-use review",
          "Scope: Shared-resource access",
          "Scope: Native interfaces",
          "Scope: Data-format boundaries"
        ],
        "btnText": "Plan C++"
      },
      {
        "badge": "C++ Work",
        "label": "Organize the work",
        "amount": "WORK",
        "amountUnit": " scope",
        "infoTitle": "C++ Work Areas",
        "items": [
          {
            "title": "Module boundaries",
            "desc": "For c++ engineering, include platform requirements, device contracts, processing tasks when defining system responsibilities.",
            "imageAlt": "Planning icon for c++ engineering: module boundaries"
          },
          {
            "title": "Object lifetimes",
            "desc": "For c++ engineering, include ownership rules, memory-use review, shared-resource access when defining resource management.",
            "imageAlt": "Planning icon for c++ engineering: object lifetimes"
          },
          {
            "title": "Native interfaces",
            "desc": "For c++ engineering, include data-format boundaries, hardware dependencies, error propagation when defining native integration.",
            "imageAlt": "Planning icon for c++ engineering: native interfaces"
          }
        ],
        "rightTitle": "C++ Work Checks",
        "features": [
          "Work area: Processing tasks",
          "Work area: Object lifetimes",
          "Work area: Ownership rules",
          "Work area: Memory-use review",
          "Work area: Shared-resource access",
          "Work area: Native interfaces",
          "Work area: Data-format boundaries",
          "Work area: Hardware dependencies",
          "Work area: Error propagation",
          "Work area: Build configuration"
        ],
        "btnText": "Scope C++"
      },
      {
        "badge": "C++ Review",
        "label": "Prepare the handover",
        "amount": "QA",
        "amountUnit": " notes",
        "infoTitle": "C++ Review Points",
        "items": [
          {
            "title": "Build and Verification",
            "desc": "Review builds and runtime behavior for the operating environments and usage conditions in scope.",
            "imageAlt": "Planning icon for c++ engineering: build and verification"
          },
          {
            "title": "Build configuration",
            "desc": "Review build configuration alongside runtime checks before agreeing the c++ engineering handover.",
            "imageAlt": "Planning icon for c++ engineering: build configuration"
          },
          {
            "title": "Boundary-case tests",
            "desc": "Keep boundary-case tests and diagnostic context in the c++ engineering review record.",
            "imageAlt": "Planning icon for c++ engineering: boundary-case tests"
          }
        ],
        "rightTitle": "C++ Review Checks",
        "features": [
          "Review: Memory-use review",
          "Review: Shared-resource access",
          "Review: Native interfaces",
          "Review: Data-format boundaries",
          "Review: Hardware dependencies",
          "Review: Error propagation",
          "Review: Build configuration",
          "Review: Runtime checks",
          "Review: Boundary-case tests",
          "Review: Diagnostic context"
        ],
        "btnText": "Review C++"
      }
    ],
    "showAll": "See All Checks ↓",
    "showLess": "See Fewer ↑",
    "previous": "← Previous",
    "next": "Next →",
    "stageLabel": "Stage"
  },
  "/java-architects/": {
    "titleLead": "Java Work Planning",
    "titleRest": "Review the Scope in Stages",
    "intro": "Plan java architecture around the work in scope. Structure Java applications through clear domain models, service interfaces and an operating model the delivery team can maintain.",
    "steps": [
      {
        "badge": "Java Scope",
        "label": "Clarify the requirements",
        "amount": "MAP",
        "amountUnit": " first",
        "infoTitle": "Java Priorities",
        "items": [
          {
            "title": "Enterprise Models",
            "desc": "Define business concepts and module responsibilities before distributing work across application services.",
            "imageAlt": "Planning icon for java architecture: enterprise models"
          },
          {
            "title": "Application Interfaces",
            "desc": "Specify request formats, validation and response behavior for connected Java application services.",
            "imageAlt": "Planning icon for java architecture: application interfaces"
          },
          {
            "title": "Persistence Design",
            "desc": "Connect records and transaction behavior to the business actions that read or change enterprise data.",
            "imageAlt": "Planning icon for java architecture: persistence design"
          }
        ],
        "rightTitle": "Java Scope Checks",
        "features": [
          "Scope: Domain terminology",
          "Scope: Module responsibilities",
          "Scope: Business invariants",
          "Scope: Service boundaries",
          "Scope: Request contracts",
          "Scope: Validation rules",
          "Scope: Response states",
          "Scope: Interface compatibility",
          "Scope: Persistence mappings",
          "Scope: Transaction boundaries"
        ],
        "btnText": "Plan Java"
      },
      {
        "badge": "Java Work",
        "label": "Organize the work",
        "amount": "WORK",
        "amountUnit": " scope",
        "infoTitle": "Java Work Areas",
        "items": [
          {
            "title": "Domain terminology",
            "desc": "For java architecture, include module responsibilities, business invariants, service boundaries when defining enterprise models.",
            "imageAlt": "Planning icon for java architecture: domain terminology"
          },
          {
            "title": "Request contracts",
            "desc": "For java architecture, include validation rules, response states, interface compatibility when defining application interfaces.",
            "imageAlt": "Planning icon for java architecture: request contracts"
          },
          {
            "title": "Persistence mappings",
            "desc": "For java architecture, include transaction boundaries, query behavior, data-change rules when defining persistence design.",
            "imageAlt": "Planning icon for java architecture: persistence mappings"
          }
        ],
        "rightTitle": "Java Work Checks",
        "features": [
          "Work area: Service boundaries",
          "Work area: Request contracts",
          "Work area: Validation rules",
          "Work area: Response states",
          "Work area: Interface compatibility",
          "Work area: Persistence mappings",
          "Work area: Transaction boundaries",
          "Work area: Query behavior",
          "Work area: Data-change rules",
          "Work area: Runtime configuration"
        ],
        "btnText": "Scope Java"
      },
      {
        "badge": "Java Review",
        "label": "Prepare the handover",
        "amount": "QA",
        "amountUnit": " notes",
        "infoTitle": "Java Review Points",
        "items": [
          {
            "title": "Platform Operation",
            "desc": "Plan deployment settings, diagnostics and release checks alongside the application architecture.",
            "imageAlt": "Planning icon for java architecture: platform operation"
          },
          {
            "title": "Runtime configuration",
            "desc": "Review runtime configuration alongside release verification before agreeing the java architecture handover.",
            "imageAlt": "Planning icon for java architecture: runtime configuration"
          },
          {
            "title": "Service diagnostics",
            "desc": "Keep service diagnostics and operating handover in the java architecture review record.",
            "imageAlt": "Planning icon for java architecture: service diagnostics"
          }
        ],
        "rightTitle": "Java Review Checks",
        "features": [
          "Review: Response states",
          "Review: Interface compatibility",
          "Review: Persistence mappings",
          "Review: Transaction boundaries",
          "Review: Query behavior",
          "Review: Data-change rules",
          "Review: Runtime configuration",
          "Review: Release verification",
          "Review: Service diagnostics",
          "Review: Operating handover"
        ],
        "btnText": "Review Java"
      }
    ],
    "showAll": "See All Checks ↓",
    "showLess": "See Fewer ↑",
    "previous": "← Previous",
    "next": "Next →",
    "stageLabel": "Stage"
  },
  "/ar-experiences/": {
    "titleLead": "AR Work Planning",
    "titleRest": "Review the Scope in Stages",
    "intro": "Plan augmented reality around the work in scope. Connect AR interaction, spatial content and device conditions to the training, enterprise or retail experience being developed.",
    "steps": [
      {
        "badge": "AR Scope",
        "label": "Clarify the requirements",
        "amount": "MAP",
        "amountUnit": " first",
        "infoTitle": "AR Priorities",
        "items": [
          {
            "title": "Experience Definition",
            "desc": "Identify the user task and physical setting before designing the augmented interaction.",
            "imageAlt": "Planning icon for augmented reality: experience definition"
          },
          {
            "title": "Spatial Content",
            "desc": "Organize overlays and scene content around understandable placement and real-world context.",
            "imageAlt": "Planning icon for augmented reality: spatial content"
          },
          {
            "title": "Interaction Feedback",
            "desc": "Define how users select, inspect and change AR content, including when tracking is interrupted.",
            "imageAlt": "Planning icon for augmented reality: interaction feedback"
          }
        ],
        "rightTitle": "AR Scope Checks",
        "features": [
          "Scope: AR user tasks",
          "Scope: Physical environments",
          "Scope: Interaction goals",
          "Scope: Device assumptions",
          "Scope: Overlay placement",
          "Scope: Scene relationships",
          "Scope: Content scale",
          "Scope: Spatial cues",
          "Scope: Selection feedback",
          "Scope: Tracking conditions"
        ],
        "btnText": "Plan AR"
      },
      {
        "badge": "AR Work",
        "label": "Organize the work",
        "amount": "WORK",
        "amountUnit": " scope",
        "infoTitle": "AR Work Areas",
        "items": [
          {
            "title": "AR user tasks",
            "desc": "For augmented reality, include physical environments, interaction goals, device assumptions when defining experience definition.",
            "imageAlt": "Planning icon for augmented reality: ar user tasks"
          },
          {
            "title": "Overlay placement",
            "desc": "For augmented reality, include scene relationships, content scale, spatial cues when defining spatial content.",
            "imageAlt": "Planning icon for augmented reality: overlay placement"
          },
          {
            "title": "Selection feedback",
            "desc": "For augmented reality, include tracking conditions, input alternatives, interrupted sessions when defining interaction feedback.",
            "imageAlt": "Planning icon for augmented reality: selection feedback"
          }
        ],
        "rightTitle": "AR Work Checks",
        "features": [
          "Work area: Device assumptions",
          "Work area: Overlay placement",
          "Work area: Scene relationships",
          "Work area: Content scale",
          "Work area: Spatial cues",
          "Work area: Selection feedback",
          "Work area: Tracking conditions",
          "Work area: Input alternatives",
          "Work area: Interrupted sessions",
          "Work area: Supported hardware"
        ],
        "btnText": "Scope AR"
      },
      {
        "badge": "AR Review",
        "label": "Prepare the handover",
        "amount": "QA",
        "amountUnit": " notes",
        "infoTitle": "AR Review Points",
        "items": [
          {
            "title": "Device Review",
            "desc": "Evaluate the experience on supported devices and the capture or lighting conditions relevant to its use.",
            "imageAlt": "Planning icon for augmented reality: device review"
          },
          {
            "title": "Supported hardware",
            "desc": "Review supported hardware alongside lighting variation before agreeing the augmented reality handover.",
            "imageAlt": "Planning icon for augmented reality: supported hardware"
          },
          {
            "title": "Task walkthroughs",
            "desc": "Keep task walkthroughs and session recovery in the augmented reality review record.",
            "imageAlt": "Planning icon for augmented reality: task walkthroughs"
          }
        ],
        "rightTitle": "AR Review Checks",
        "features": [
          "Review: Content scale",
          "Review: Spatial cues",
          "Review: Selection feedback",
          "Review: Tracking conditions",
          "Review: Input alternatives",
          "Review: Interrupted sessions",
          "Review: Supported hardware",
          "Review: Lighting variation",
          "Review: Task walkthroughs",
          "Review: Session recovery"
        ],
        "btnText": "Review AR"
      }
    ],
    "showAll": "See All Checks ↓",
    "showLess": "See Fewer ↑",
    "previous": "← Previous",
    "next": "Next →",
    "stageLabel": "Stage"
  },
  "/services/business-intelligence/": {
    "titleLead": "BI Reporting Work Planning",
    "titleRest": "Review the Scope in Stages",
    "intro": "Plan bi reporting around the work in scope. Build corporate dashboards around consistent measures, source relationships and the needs of the people reading each report.",
    "steps": [
      {
        "badge": "BI Reporting Scope",
        "label": "Clarify the requirements",
        "amount": "MAP",
        "amountUnit": " first",
        "infoTitle": "BI Reporting Priorities",
        "items": [
          {
            "title": "Reporting Requirements",
            "desc": "Define dashboard users and the business questions that determine the reporting dataset.",
            "imageAlt": "Planning icon for bi reporting: reporting requirements"
          },
          {
            "title": "Semantic Consistency",
            "desc": "Keep calculation definitions and record relationships consistent across reports and filtered views.",
            "imageAlt": "Planning icon for bi reporting: semantic consistency"
          },
          {
            "title": "Dashboard Context",
            "desc": "Present figures with the filters and periods needed to understand what each visual represents.",
            "imageAlt": "Planning icon for bi reporting: dashboard context"
          }
        ],
        "rightTitle": "BI Reporting Scope Checks",
        "features": [
          "Scope: Report audiences",
          "Scope: Business questions",
          "Scope: Reporting cadence",
          "Scope: Required drilldowns",
          "Scope: Measure definitions",
          "Scope: Relationship checks",
          "Scope: Date interpretation",
          "Scope: Aggregation rules",
          "Scope: Filter visibility",
          "Scope: Period selection"
        ],
        "btnText": "Plan BI Reporting"
      },
      {
        "badge": "BI Reporting Work",
        "label": "Organize the work",
        "amount": "WORK",
        "amountUnit": " scope",
        "infoTitle": "BI Reporting Work Areas",
        "items": [
          {
            "title": "Report audiences",
            "desc": "For bi reporting, include business questions, reporting cadence, required drilldowns when defining reporting requirements.",
            "imageAlt": "Planning icon for bi reporting: report audiences"
          },
          {
            "title": "Measure definitions",
            "desc": "For bi reporting, include relationship checks, date interpretation, aggregation rules when defining semantic consistency.",
            "imageAlt": "Planning icon for bi reporting: measure definitions"
          },
          {
            "title": "Filter visibility",
            "desc": "For bi reporting, include period selection, visual explanations, detail navigation when defining dashboard context.",
            "imageAlt": "Planning icon for bi reporting: filter visibility"
          }
        ],
        "rightTitle": "BI Reporting Work Checks",
        "features": [
          "Work area: Required drilldowns",
          "Work area: Measure definitions",
          "Work area: Relationship checks",
          "Work area: Date interpretation",
          "Work area: Aggregation rules",
          "Work area: Filter visibility",
          "Work area: Period selection",
          "Work area: Visual explanations",
          "Work area: Detail navigation",
          "Work area: Refresh responsibilities"
        ],
        "btnText": "Scope BI Reporting"
      },
      {
        "badge": "BI Reporting Review",
        "label": "Prepare the handover",
        "amount": "QA",
        "amountUnit": " notes",
        "infoTitle": "BI Reporting Review Points",
        "items": [
          {
            "title": "Report Maintenance",
            "desc": "Assign responsibility for refresh behavior, access decisions and investigation of reporting issues.",
            "imageAlt": "Planning icon for bi reporting: report maintenance"
          },
          {
            "title": "Refresh responsibilities",
            "desc": "Review refresh responsibilities alongside reader permissions before agreeing the bi reporting handover.",
            "imageAlt": "Planning icon for bi reporting: refresh responsibilities"
          },
          {
            "title": "Report versioning",
            "desc": "Keep report versioning and discrepancy review in the bi reporting review record.",
            "imageAlt": "Planning icon for bi reporting: report versioning"
          }
        ],
        "rightTitle": "BI Reporting Review Checks",
        "features": [
          "Review: Date interpretation",
          "Review: Aggregation rules",
          "Review: Filter visibility",
          "Review: Period selection",
          "Review: Visual explanations",
          "Review: Detail navigation",
          "Review: Refresh responsibilities",
          "Review: Reader permissions",
          "Review: Report versioning",
          "Review: Discrepancy review"
        ],
        "btnText": "Review BI Reporting"
      }
    ],
    "showAll": "See All Checks ↓",
    "showLess": "See Fewer ↑",
    "previous": "← Previous",
    "next": "Next →",
    "stageLabel": "Stage"
  },
  "/power-bi-dashboards/": {
    "titleLead": "Power BI Work Planning",
    "titleRest": "Review the Scope in Stages",
    "intro": "Plan power bi around the work in scope. Connect Power BI sources and semantic models to the visual context and publishing responsibilities of the intended report audience.",
    "steps": [
      {
        "badge": "Power BI Scope",
        "label": "Clarify the requirements",
        "amount": "MAP",
        "amountUnit": " first",
        "infoTitle": "Power BI Priorities",
        "items": [
          {
            "title": "Source Preparation",
            "desc": "Identify tables, preparation steps and connection requirements before building the report model.",
            "imageAlt": "Planning icon for power bi: source preparation"
          },
          {
            "title": "Measures and Relationships",
            "desc": "Review model relationships and calculations using representative totals and filter combinations.",
            "imageAlt": "Planning icon for power bi: measures and relationships"
          },
          {
            "title": "Report Interaction",
            "desc": "Give report readers a clear relationship between visual selections, slicers and underlying detail.",
            "imageAlt": "Planning icon for power bi: report interaction"
          }
        ],
        "rightTitle": "Power BI Scope Checks",
        "features": [
          "Scope: Connection requirements",
          "Scope: Table preparation",
          "Scope: Source-field mapping",
          "Scope: Data freshness context",
          "Scope: Model relationships",
          "Scope: Calculation samples",
          "Scope: Filter combinations",
          "Scope: Date-model checks",
          "Scope: Slicer context",
          "Scope: Visual selections"
        ],
        "btnText": "Plan Power BI"
      },
      {
        "badge": "Power BI Work",
        "label": "Organize the work",
        "amount": "WORK",
        "amountUnit": " scope",
        "infoTitle": "Power BI Work Areas",
        "items": [
          {
            "title": "Connection requirements",
            "desc": "For power bi, include table preparation, source-field mapping, data freshness context when defining source preparation.",
            "imageAlt": "Planning icon for power bi: connection requirements"
          },
          {
            "title": "Model relationships",
            "desc": "For power bi, include calculation samples, filter combinations, date-model checks when defining measures and relationships.",
            "imageAlt": "Planning icon for power bi: model relationships"
          },
          {
            "title": "Slicer context",
            "desc": "For power bi, include visual selections, report navigation, detail views when defining report interaction.",
            "imageAlt": "Planning icon for power bi: slicer context"
          }
        ],
        "rightTitle": "Power BI Work Checks",
        "features": [
          "Work area: Data freshness context",
          "Work area: Model relationships",
          "Work area: Calculation samples",
          "Work area: Filter combinations",
          "Work area: Date-model checks",
          "Work area: Slicer context",
          "Work area: Visual selections",
          "Work area: Report navigation",
          "Work area: Detail views",
          "Work area: Publishing responsibilities"
        ],
        "btnText": "Scope Power BI"
      },
      {
        "badge": "Power BI Review",
        "label": "Prepare the handover",
        "amount": "QA",
        "amountUnit": " notes",
        "infoTitle": "Power BI Review Points",
        "items": [
          {
            "title": "Publishing and Refresh",
            "desc": "Plan distribution and refresh behavior around the audience, source access and operating environment.",
            "imageAlt": "Planning icon for power bi: publishing and refresh"
          },
          {
            "title": "Publishing responsibilities",
            "desc": "Review publishing responsibilities alongside report distribution before agreeing the power bi handover.",
            "imageAlt": "Planning icon for power bi: publishing responsibilities"
          },
          {
            "title": "Refresh outcomes",
            "desc": "Keep refresh outcomes and source-access dependencies in the power bi review record.",
            "imageAlt": "Planning icon for power bi: refresh outcomes"
          }
        ],
        "rightTitle": "Power BI Review Checks",
        "features": [
          "Review: Filter combinations",
          "Review: Date-model checks",
          "Review: Slicer context",
          "Review: Visual selections",
          "Review: Report navigation",
          "Review: Detail views",
          "Review: Publishing responsibilities",
          "Review: Report distribution",
          "Review: Refresh outcomes",
          "Review: Source-access dependencies"
        ],
        "btnText": "Review Power BI"
      }
    ],
    "showAll": "See All Checks ↓",
    "showLess": "See Fewer ↑",
    "previous": "← Previous",
    "next": "Next →",
    "stageLabel": "Stage"
  },
  "/servicenow-dev/": {
    "titleLead": "ServiceNow Work Planning",
    "titleRest": "Review the Scope in Stages",
    "intro": "Plan servicenow around the work in scope. Configure service-management records and enterprise workflows around explicit task ownership and operational handoffs.",
    "steps": [
      {
        "badge": "ServiceNow Scope",
        "label": "Clarify the requirements",
        "amount": "MAP",
        "amountUnit": " first",
        "infoTitle": "ServiceNow Priorities",
        "items": [
          {
            "title": "Service Records",
            "desc": "Define request and incident information so teams can understand the work represented by a record.",
            "imageAlt": "Planning icon for servicenow: service records"
          },
          {
            "title": "Workflow Configuration",
            "desc": "Connect assignment and approval states to the responsibilities of each participating team.",
            "imageAlt": "Planning icon for servicenow: workflow configuration"
          },
          {
            "title": "Enterprise Connections",
            "desc": "Specify exchanged identifiers and exception behavior when ServiceNow connects to other operational systems.",
            "imageAlt": "Planning icon for servicenow: enterprise connections"
          }
        ],
        "rightTitle": "ServiceNow Scope Checks",
        "features": [
          "Scope: Request categories",
          "Scope: Incident context",
          "Scope: Required service fields",
          "Scope: Record relationships",
          "Scope: Assignment rules",
          "Scope: Approval responsibilities",
          "Scope: State-change conditions",
          "Scope: Escalation paths",
          "Scope: System identifiers",
          "Scope: Exchange mappings"
        ],
        "btnText": "Plan ServiceNow"
      },
      {
        "badge": "ServiceNow Work",
        "label": "Organize the work",
        "amount": "WORK",
        "amountUnit": " scope",
        "infoTitle": "ServiceNow Work Areas",
        "items": [
          {
            "title": "Request categories",
            "desc": "For servicenow, include incident context, required service fields, record relationships when defining service records.",
            "imageAlt": "Planning icon for servicenow: request categories"
          },
          {
            "title": "Assignment rules",
            "desc": "For servicenow, include approval responsibilities, state-change conditions, escalation paths when defining workflow configuration.",
            "imageAlt": "Planning icon for servicenow: assignment rules"
          },
          {
            "title": "System identifiers",
            "desc": "For servicenow, include exchange mappings, integration exceptions, source ownership when defining enterprise connections.",
            "imageAlt": "Planning icon for servicenow: system identifiers"
          }
        ],
        "rightTitle": "ServiceNow Work Checks",
        "features": [
          "Work area: Record relationships",
          "Work area: Assignment rules",
          "Work area: Approval responsibilities",
          "Work area: State-change conditions",
          "Work area: Escalation paths",
          "Work area: System identifiers",
          "Work area: Exchange mappings",
          "Work area: Integration exceptions",
          "Work area: Source ownership",
          "Work area: Service-task checks"
        ],
        "btnText": "Scope ServiceNow"
      },
      {
        "badge": "ServiceNow Review",
        "label": "Prepare the handover",
        "amount": "QA",
        "amountUnit": " notes",
        "infoTitle": "ServiceNow Review Points",
        "items": [
          {
            "title": "Service Review",
            "desc": "Review configured tasks and reporting definitions against representative service-management scenarios.",
            "imageAlt": "Planning icon for servicenow: service review"
          },
          {
            "title": "Service-task checks",
            "desc": "Review service-task checks alongside report definitions before agreeing the servicenow handover.",
            "imageAlt": "Planning icon for servicenow: service-task checks"
          },
          {
            "title": "Administrator notes",
            "desc": "Keep administrator notes and operational follow-up in the servicenow review record.",
            "imageAlt": "Planning icon for servicenow: administrator notes"
          }
        ],
        "rightTitle": "ServiceNow Review Checks",
        "features": [
          "Review: State-change conditions",
          "Review: Escalation paths",
          "Review: System identifiers",
          "Review: Exchange mappings",
          "Review: Integration exceptions",
          "Review: Source ownership",
          "Review: Service-task checks",
          "Review: Report definitions",
          "Review: Administrator notes",
          "Review: Operational follow-up"
        ],
        "btnText": "Review ServiceNow"
      }
    ],
    "showAll": "See All Checks ↓",
    "showLess": "See Fewer ↑",
    "previous": "← Previous",
    "next": "Next →",
    "stageLabel": "Stage"
  },
  "/azure-cloud/": {
    "titleLead": "Azure Work Planning",
    "titleRest": "Review the Scope in Stages",
    "intro": "Plan azure infrastructure around the work in scope. Connect Azure resource design, access and deployment decisions to the workloads and operational responsibilities of the project.",
    "steps": [
      {
        "badge": "Azure Scope",
        "label": "Clarify the requirements",
        "amount": "MAP",
        "amountUnit": " first",
        "infoTitle": "Azure Priorities",
        "items": [
          {
            "title": "Workload Architecture",
            "desc": "Identify workload dependencies and resource requirements before planning the Azure environment.",
            "imageAlt": "Planning icon for azure infrastructure: workload architecture"
          },
          {
            "title": "Access and Networking",
            "desc": "Define the identities and network boundaries used by applications and administrators.",
            "imageAlt": "Planning icon for azure infrastructure: access and networking"
          },
          {
            "title": "Deployment Configuration",
            "desc": "Keep infrastructure settings and release steps reviewable across the environments used by the team.",
            "imageAlt": "Planning icon for azure infrastructure: deployment configuration"
          }
        ],
        "rightTitle": "Azure Scope Checks",
        "features": [
          "Scope: Workload requirements",
          "Scope: Resource relationships",
          "Scope: Environment separation",
          "Scope: Dependency constraints",
          "Scope: Identity responsibilities",
          "Scope: Network boundaries",
          "Scope: Resource permissions",
          "Scope: Access-change review",
          "Scope: Configuration records",
          "Scope: Deployment steps"
        ],
        "btnText": "Plan Azure"
      },
      {
        "badge": "Azure Work",
        "label": "Organize the work",
        "amount": "WORK",
        "amountUnit": " scope",
        "infoTitle": "Azure Work Areas",
        "items": [
          {
            "title": "Workload requirements",
            "desc": "For azure infrastructure, include resource relationships, environment separation, dependency constraints when defining workload architecture.",
            "imageAlt": "Planning icon for azure infrastructure: workload requirements"
          },
          {
            "title": "Identity responsibilities",
            "desc": "For azure infrastructure, include network boundaries, resource permissions, access-change review when defining access and networking.",
            "imageAlt": "Planning icon for azure infrastructure: identity responsibilities"
          },
          {
            "title": "Configuration records",
            "desc": "For azure infrastructure, include deployment steps, environment checks, change traceability when defining deployment configuration.",
            "imageAlt": "Planning icon for azure infrastructure: configuration records"
          }
        ],
        "rightTitle": "Azure Work Checks",
        "features": [
          "Work area: Dependency constraints",
          "Work area: Identity responsibilities",
          "Work area: Network boundaries",
          "Work area: Resource permissions",
          "Work area: Access-change review",
          "Work area: Configuration records",
          "Work area: Deployment steps",
          "Work area: Environment checks",
          "Work area: Change traceability",
          "Work area: Diagnostic signals"
        ],
        "btnText": "Scope Azure"
      },
      {
        "badge": "Azure Review",
        "label": "Prepare the handover",
        "amount": "QA",
        "amountUnit": " notes",
        "infoTitle": "Azure Review Points",
        "items": [
          {
            "title": "Cloud Operations",
            "desc": "Plan diagnostics, capacity reviews and recovery requirements around the workload's operating needs.",
            "imageAlt": "Planning icon for azure infrastructure: cloud operations"
          },
          {
            "title": "Diagnostic signals",
            "desc": "Review diagnostic signals alongside capacity assumptions before agreeing the azure infrastructure handover.",
            "imageAlt": "Planning icon for azure infrastructure: diagnostic signals"
          },
          {
            "title": "Recovery requirements",
            "desc": "Keep recovery requirements and operating ownership in the azure infrastructure review record.",
            "imageAlt": "Planning icon for azure infrastructure: recovery requirements"
          }
        ],
        "rightTitle": "Azure Review Checks",
        "features": [
          "Review: Resource permissions",
          "Review: Access-change review",
          "Review: Configuration records",
          "Review: Deployment steps",
          "Review: Environment checks",
          "Review: Change traceability",
          "Review: Diagnostic signals",
          "Review: Capacity assumptions",
          "Review: Recovery requirements",
          "Review: Operating ownership"
        ],
        "btnText": "Review Azure"
      }
    ],
    "showAll": "See All Checks ↓",
    "showLess": "See Fewer ↑",
    "previous": "← Previous",
    "next": "Next →",
    "stageLabel": "Stage"
  },
  "/pimcore-solutions/": {
    "titleLead": "Pimcore Work Planning",
    "titleRest": "Review the Scope in Stages",
    "intro": "Plan pimcore around the work in scope. Organize master data, product records and commerce exchange through shared definitions and clear stewardship responsibilities.",
    "steps": [
      {
        "badge": "Pimcore Scope",
        "label": "Clarify the requirements",
        "amount": "MAP",
        "amountUnit": " first",
        "infoTitle": "Pimcore Priorities",
        "items": [
          {
            "title": "Information Models",
            "desc": "Define product attributes and relationships around the records required by commerce and internal teams.",
            "imageAlt": "Planning icon for pimcore: information models"
          },
          {
            "title": "Content Stewardship",
            "desc": "Connect data enrichment and review tasks to the people responsible for maintaining product information.",
            "imageAlt": "Planning icon for pimcore: content stewardship"
          },
          {
            "title": "Channel Exchange",
            "desc": "Specify how product and asset records are delivered to the channels and systems that consume them.",
            "imageAlt": "Planning icon for pimcore: channel exchange"
          }
        ],
        "rightTitle": "Pimcore Scope Checks",
        "features": [
          "Scope: Product attributes",
          "Scope: Master-data relationships",
          "Scope: Record identifiers",
          "Scope: Attribute ownership",
          "Scope: Enrichment workflows",
          "Scope: Review stages",
          "Scope: Completeness checks",
          "Scope: Data-change history",
          "Scope: Channel requirements",
          "Scope: Asset references"
        ],
        "btnText": "Plan Pimcore"
      },
      {
        "badge": "Pimcore Work",
        "label": "Organize the work",
        "amount": "WORK",
        "amountUnit": " scope",
        "infoTitle": "Pimcore Work Areas",
        "items": [
          {
            "title": "Product attributes",
            "desc": "For pimcore, include master-data relationships, record identifiers, attribute ownership when defining information models.",
            "imageAlt": "Planning icon for pimcore: product attributes"
          },
          {
            "title": "Enrichment workflows",
            "desc": "For pimcore, include review stages, completeness checks, data-change history when defining content stewardship.",
            "imageAlt": "Planning icon for pimcore: enrichment workflows"
          },
          {
            "title": "Channel requirements",
            "desc": "For pimcore, include asset references, export mappings, exchange exceptions when defining channel exchange.",
            "imageAlt": "Planning icon for pimcore: channel requirements"
          }
        ],
        "rightTitle": "Pimcore Work Checks",
        "features": [
          "Work area: Attribute ownership",
          "Work area: Enrichment workflows",
          "Work area: Review stages",
          "Work area: Completeness checks",
          "Work area: Data-change history",
          "Work area: Channel requirements",
          "Work area: Asset references",
          "Work area: Export mappings",
          "Work area: Exchange exceptions",
          "Work area: Catalog relationships"
        ],
        "btnText": "Scope Pimcore"
      },
      {
        "badge": "Pimcore Review",
        "label": "Prepare the handover",
        "amount": "QA",
        "amountUnit": " notes",
        "infoTitle": "Pimcore Review Points",
        "items": [
          {
            "title": "Commerce Context",
            "desc": "Keep commercial views and operational integrations connected to the underlying product record.",
            "imageAlt": "Planning icon for pimcore: commerce context"
          },
          {
            "title": "Catalog relationships",
            "desc": "Review catalog relationships alongside storefront context before agreeing the pimcore handover.",
            "imageAlt": "Planning icon for pimcore: catalog relationships"
          },
          {
            "title": "Integration reviews",
            "desc": "Keep integration reviews and record reconciliation in the pimcore review record.",
            "imageAlt": "Planning icon for pimcore: integration reviews"
          }
        ],
        "rightTitle": "Pimcore Review Checks",
        "features": [
          "Review: Completeness checks",
          "Review: Data-change history",
          "Review: Channel requirements",
          "Review: Asset references",
          "Review: Export mappings",
          "Review: Exchange exceptions",
          "Review: Catalog relationships",
          "Review: Storefront context",
          "Review: Integration reviews",
          "Review: Record reconciliation"
        ],
        "btnText": "Review Pimcore"
      }
    ],
    "showAll": "See All Checks ↓",
    "showLess": "See Fewer ↑",
    "previous": "← Previous",
    "next": "Next →",
    "stageLabel": "Stage"
  },
  "/services/mobile-development/": {
    "titleLead": "Mobile Apps Work Planning",
    "titleRest": "Review the Scope in Stages",
    "intro": "Plan mobile applications around the work in scope. Connect iOS and Android journeys to the device capabilities, application data and service states each mobile task requires.",
    "steps": [
      {
        "badge": "Mobile Apps Scope",
        "label": "Clarify the requirements",
        "amount": "MAP",
        "amountUnit": " first",
        "infoTitle": "Mobile Apps Priorities",
        "items": [
          {
            "title": "Mobile User Journeys",
            "desc": "Define screen flows and controls around the actions people need to complete on a phone or tablet.",
            "imageAlt": "Planning icon for mobile applications: mobile user journeys"
          },
          {
            "title": "Application Data",
            "desc": "Coordinate local records and remote responses, including interrupted connections and synchronization needs.",
            "imageAlt": "Planning icon for mobile applications: application data"
          },
          {
            "title": "Device Integration",
            "desc": "Make permission and capability requirements explicit when the application uses device features.",
            "imageAlt": "Planning icon for mobile applications: device integration"
          }
        ],
        "rightTitle": "Mobile Apps Scope Checks",
        "features": [
          "Scope: Screen-flow requirements",
          "Scope: Touch interactions",
          "Scope: Input feedback",
          "Scope: Navigation states",
          "Scope: Local data choices",
          "Scope: Remote request states",
          "Scope: Offline expectations",
          "Scope: Synchronization rules",
          "Scope: Device permissions",
          "Scope: Platform capabilities"
        ],
        "btnText": "Plan Mobile Apps"
      },
      {
        "badge": "Mobile Apps Work",
        "label": "Organize the work",
        "amount": "WORK",
        "amountUnit": " scope",
        "infoTitle": "Mobile Apps Work Areas",
        "items": [
          {
            "title": "Screen-flow requirements",
            "desc": "For mobile applications, include touch interactions, input feedback, navigation states when defining mobile user journeys.",
            "imageAlt": "Planning icon for mobile applications: screen-flow requirements"
          },
          {
            "title": "Local data choices",
            "desc": "For mobile applications, include remote request states, offline expectations, synchronization rules when defining application data.",
            "imageAlt": "Planning icon for mobile applications: local data choices"
          },
          {
            "title": "Device permissions",
            "desc": "For mobile applications, include platform capabilities, capability fallbacks, background-work rules when defining device integration.",
            "imageAlt": "Planning icon for mobile applications: device permissions"
          }
        ],
        "rightTitle": "Mobile Apps Work Checks",
        "features": [
          "Work area: Navigation states",
          "Work area: Local data choices",
          "Work area: Remote request states",
          "Work area: Offline expectations",
          "Work area: Synchronization rules",
          "Work area: Device permissions",
          "Work area: Platform capabilities",
          "Work area: Capability fallbacks",
          "Work area: Background-work rules",
          "Work area: iOS task checks"
        ],
        "btnText": "Scope Mobile Apps"
      },
      {
        "badge": "Mobile Apps Review",
        "label": "Prepare the handover",
        "amount": "QA",
        "amountUnit": " notes",
        "infoTitle": "Mobile Apps Review Points",
        "items": [
          {
            "title": "Platform Verification",
            "desc": "Review supported mobile environments and release behavior using representative end-to-end tasks.",
            "imageAlt": "Planning icon for mobile applications: platform verification"
          },
          {
            "title": "iOS task checks",
            "desc": "Review ios task checks alongside android task checks before agreeing the mobile applications handover.",
            "imageAlt": "Planning icon for mobile applications: ios task checks"
          },
          {
            "title": "Device coverage",
            "desc": "Keep device coverage and release preparation in the mobile applications review record.",
            "imageAlt": "Planning icon for mobile applications: device coverage"
          }
        ],
        "rightTitle": "Mobile Apps Review Checks",
        "features": [
          "Review: Offline expectations",
          "Review: Synchronization rules",
          "Review: Device permissions",
          "Review: Platform capabilities",
          "Review: Capability fallbacks",
          "Review: Background-work rules",
          "Review: iOS task checks",
          "Review: Android task checks",
          "Review: Device coverage",
          "Review: Release preparation"
        ],
        "btnText": "Review Mobile Apps"
      }
    ],
    "showAll": "See All Checks ↓",
    "showLess": "See Fewer ↑",
    "previous": "← Previous",
    "next": "Next →",
    "stageLabel": "Stage"
  },
  "/digital-retail/": {
    "titleLead": "Retail Work Planning",
    "titleRest": "Review the Scope in Stages",
    "intro": "Plan digital retail around the work in scope. Connect product information and purchase journeys to the inventory, order and service workflows that support each retail channel.",
    "steps": [
      {
        "badge": "Retail Scope",
        "label": "Clarify the requirements",
        "amount": "MAP",
        "amountUnit": " first",
        "infoTitle": "Retail Priorities",
        "items": [
          {
            "title": "Keep Product Context Together",
            "desc": "Structure catalog attributes, media and availability so channels can present coherent product information.",
            "imageAlt": "Planning icon for digital retail: keep product context together"
          },
          {
            "title": "Connect the Purchase Journey",
            "desc": "Coordinate cart, checkout, payment status and order confirmation with explicit behavior for unsuccessful or interrupted steps.",
            "imageAlt": "Planning icon for digital retail: connect the purchase journey"
          },
          {
            "title": "Support Retail Operations",
            "desc": "Give fulfillment and service teams relevant order, stock and customer context when a purchase needs follow-up.",
            "imageAlt": "Planning icon for digital retail: support retail operations"
          }
        ],
        "rightTitle": "Retail Scope Checks",
        "features": [
          "Scope: Keep Product Context Together",
          "Scope: Connect the Purchase Journey",
          "Scope: Support Retail Operations",
          "Scope: Products",
          "Scope: Availability",
          "Scope: Purchase",
          "Scope: Fulfillment",
          "Scope: Follow-up",
          "Scope: Product Context",
          "Scope: Channel Exchange"
        ],
        "btnText": "Plan Retail"
      },
      {
        "badge": "Retail Work",
        "label": "Organize the work",
        "amount": "WORK",
        "amountUnit": " scope",
        "infoTitle": "Retail Work Areas",
        "items": [
          {
            "title": "Products",
            "desc": "Structure product information for channels.",
            "imageAlt": "Planning icon for digital retail: products"
          },
          {
            "title": "Availability",
            "desc": "Connect stock displays to inventory records.",
            "imageAlt": "Planning icon for digital retail: availability"
          },
          {
            "title": "Purchase",
            "desc": "Coordinate cart and checkout outcomes.",
            "imageAlt": "Planning icon for digital retail: purchase"
          }
        ],
        "rightTitle": "Retail Work Checks",
        "features": [
          "Work area: Products",
          "Work area: Availability",
          "Work area: Purchase",
          "Work area: Fulfillment",
          "Work area: Follow-up",
          "Work area: Product Context",
          "Work area: Channel Exchange",
          "Work area: Order Follow-up",
          "Work area: Keep Product Context Together",
          "Work area: Connect the Purchase Journey"
        ],
        "btnText": "Scope Retail"
      },
      {
        "badge": "Retail Review",
        "label": "Prepare the handover",
        "amount": "QA",
        "amountUnit": " notes",
        "infoTitle": "Retail Review Points",
        "items": [
          {
            "title": "Fulfillment",
            "desc": "Link orders to packing and service work.",
            "imageAlt": "Planning icon for digital retail: fulfillment"
          },
          {
            "title": "Follow-up",
            "desc": "Track returns and questions by order.",
            "imageAlt": "Planning icon for digital retail: follow-up"
          },
          {
            "title": "Retail Workflow",
            "desc": "Connect the storefront to stock and order operations.",
            "imageAlt": "Planning icon for digital retail: retail workflow"
          }
        ],
        "rightTitle": "Retail Review Checks",
        "features": [
          "Review: Fulfillment",
          "Review: Follow-up",
          "Review: Product Context",
          "Review: Channel Exchange",
          "Review: Order Follow-up",
          "Review: Keep Product Context Together",
          "Review: Connect the Purchase Journey",
          "Review: Support Retail Operations",
          "Review: Products",
          "Review: Availability"
        ],
        "btnText": "Review Retail"
      }
    ],
    "showAll": "See All Checks ↓",
    "showLess": "See Fewer ↑",
    "previous": "← Previous",
    "next": "Next →",
    "stageLabel": "Stage"
  },
  "/services/application-maintenance/": {
    "titleLead": "App Upkeep Work Planning",
    "titleRest": "Review the Scope in Stages",
    "intro": "Plan application maintenance around the work in scope. Connect bug investigation and planned changes to the application context needed to preserve essential business workflows.",
    "steps": [
      {
        "badge": "App Upkeep Scope",
        "label": "Clarify the requirements",
        "amount": "MAP",
        "amountUnit": " first",
        "infoTitle": "App Upkeep Priorities",
        "items": [
          {
            "title": "Issue Investigation",
            "desc": "Trace reported behavior to the affected version, records and conditions before selecting a corrective change.",
            "imageAlt": "Planning icon for application maintenance: issue investigation"
          },
          {
            "title": "Focused Changes",
            "desc": "Keep fixes and maintenance updates bounded by the behavior and dependencies they affect.",
            "imageAlt": "Planning icon for application maintenance: focused changes"
          },
          {
            "title": "Regression Review",
            "desc": "Check essential workflows and known failure paths against the version prepared for release.",
            "imageAlt": "Planning icon for application maintenance: regression review"
          }
        ],
        "rightTitle": "App Upkeep Scope Checks",
        "features": [
          "Scope: Affected versions",
          "Scope: Reproduction conditions",
          "Scope: Issue classification",
          "Scope: Investigation evidence",
          "Scope: Fix boundaries",
          "Scope: Dependency updates",
          "Scope: Compatibility review",
          "Scope: Change rationale",
          "Scope: Preserved workflows",
          "Scope: Failure-path checks"
        ],
        "btnText": "Plan App Upkeep"
      },
      {
        "badge": "App Upkeep Work",
        "label": "Organize the work",
        "amount": "WORK",
        "amountUnit": " scope",
        "infoTitle": "App Upkeep Work Areas",
        "items": [
          {
            "title": "Affected versions",
            "desc": "For application maintenance, include reproduction conditions, issue classification, investigation evidence when defining issue investigation.",
            "imageAlt": "Planning icon for application maintenance: affected versions"
          },
          {
            "title": "Fix boundaries",
            "desc": "For application maintenance, include dependency updates, compatibility review, change rationale when defining focused changes.",
            "imageAlt": "Planning icon for application maintenance: fix boundaries"
          },
          {
            "title": "Preserved workflows",
            "desc": "For application maintenance, include failure-path checks, regression evidence, release comparison when defining regression review.",
            "imageAlt": "Planning icon for application maintenance: preserved workflows"
          }
        ],
        "rightTitle": "App Upkeep Work Checks",
        "features": [
          "Work area: Investigation evidence",
          "Work area: Fix boundaries",
          "Work area: Dependency updates",
          "Work area: Compatibility review",
          "Work area: Change rationale",
          "Work area: Preserved workflows",
          "Work area: Failure-path checks",
          "Work area: Regression evidence",
          "Work area: Release comparison",
          "Work area: Support history"
        ],
        "btnText": "Scope App Upkeep"
      },
      {
        "badge": "App Upkeep Review",
        "label": "Prepare the handover",
        "amount": "QA",
        "amountUnit": " notes",
        "infoTitle": "App Upkeep Review Points",
        "items": [
          {
            "title": "Maintenance Knowledge",
            "desc": "Retain operational notes and unresolved follow-up so later support work has the necessary context.",
            "imageAlt": "Planning icon for application maintenance: maintenance knowledge"
          },
          {
            "title": "Support history",
            "desc": "Review support history alongside known issue context before agreeing the application maintenance handover.",
            "imageAlt": "Planning icon for application maintenance: support history"
          },
          {
            "title": "Maintenance runbooks",
            "desc": "Keep maintenance runbooks and follow-up responsibilities in the application maintenance review record.",
            "imageAlt": "Planning icon for application maintenance: maintenance runbooks"
          }
        ],
        "rightTitle": "App Upkeep Review Checks",
        "features": [
          "Review: Compatibility review",
          "Review: Change rationale",
          "Review: Preserved workflows",
          "Review: Failure-path checks",
          "Review: Regression evidence",
          "Review: Release comparison",
          "Review: Support history",
          "Review: Known issue context",
          "Review: Maintenance runbooks",
          "Review: Follow-up responsibilities"
        ],
        "btnText": "Review App Upkeep"
      }
    ],
    "showAll": "See All Checks ↓",
    "showLess": "See Fewer ↑",
    "previous": "← Previous",
    "next": "Next →",
    "stageLabel": "Stage"
  },
  "/telecom-tech/": {
    "titleLead": "Telecom Work Planning",
    "titleRest": "Review the Scope in Stages",
    "intro": "Plan telecom software around the work in scope. Bring service events, network information and support tasks into telecom workflows with clear responsibilities and operational states.",
    "steps": [
      {
        "badge": "Telecom Scope",
        "label": "Clarify the requirements",
        "amount": "MAP",
        "amountUnit": " first",
        "infoTitle": "Telecom Priorities",
        "items": [
          {
            "title": "Model Telecom Service Context",
            "desc": "Connect customer services and network-facing records so operations teams can identify what an event affects.",
            "imageAlt": "Planning icon for telecom software: model telecom service context"
          },
          {
            "title": "Coordinate Incident Work",
            "desc": "Define incident states, routing rules and ownership so investigations retain their history across team handoffs.",
            "imageAlt": "Planning icon for telecom software: coordinate incident work"
          },
          {
            "title": "Integrate Operational Platforms",
            "desc": "Set explicit data contracts and exception paths between network, service and customer-support systems.",
            "imageAlt": "Planning icon for telecom software: integrate operational platforms"
          }
        ],
        "rightTitle": "Telecom Scope Checks",
        "features": [
          "Scope: Model Telecom Service Context",
          "Scope: Coordinate Incident Work",
          "Scope: Integrate Operational Platforms",
          "Scope: Service",
          "Scope: Signals",
          "Scope: Incidents",
          "Scope: Handoffs",
          "Scope: Interfaces",
          "Scope: Service Operations",
          "Scope: Platform Exchange"
        ],
        "btnText": "Plan Telecom"
      },
      {
        "badge": "Telecom Work",
        "label": "Organize the work",
        "amount": "WORK",
        "amountUnit": " scope",
        "infoTitle": "Telecom Work Areas",
        "items": [
          {
            "title": "Service",
            "desc": "Identify the service affected by an event.",
            "imageAlt": "Planning icon for telecom software: service"
          },
          {
            "title": "Signals",
            "desc": "Connect network signals to service context.",
            "imageAlt": "Planning icon for telecom software: signals"
          },
          {
            "title": "Incidents",
            "desc": "Track incident state and resolution owners.",
            "imageAlt": "Planning icon for telecom software: incidents"
          }
        ],
        "rightTitle": "Telecom Work Checks",
        "features": [
          "Work area: Service",
          "Work area: Signals",
          "Work area: Incidents",
          "Work area: Handoffs",
          "Work area: Interfaces",
          "Work area: Service Operations",
          "Work area: Platform Exchange",
          "Work area: Incident History",
          "Work area: Model Telecom Service Context",
          "Work area: Coordinate Incident Work"
        ],
        "btnText": "Scope Telecom"
      },
      {
        "badge": "Telecom Review",
        "label": "Prepare the handover",
        "amount": "QA",
        "amountUnit": " notes",
        "infoTitle": "Telecom Review Points",
        "items": [
          {
            "title": "Handoffs",
            "desc": "Keep context across telecom team handoffs.",
            "imageAlt": "Planning icon for telecom software: handoffs"
          },
          {
            "title": "Interfaces",
            "desc": "Review operational-platform data exchange.",
            "imageAlt": "Planning icon for telecom software: interfaces"
          },
          {
            "title": "Telecom Workflow",
            "desc": "Connect service context to network and support tasks.",
            "imageAlt": "Planning icon for telecom software: telecom workflow"
          }
        ],
        "rightTitle": "Telecom Review Checks",
        "features": [
          "Review: Handoffs",
          "Review: Interfaces",
          "Review: Service Operations",
          "Review: Platform Exchange",
          "Review: Incident History",
          "Review: Model Telecom Service Context",
          "Review: Coordinate Incident Work",
          "Review: Integrate Operational Platforms",
          "Review: Service",
          "Review: Signals"
        ],
        "btnText": "Review Telecom"
      }
    ],
    "showAll": "See All Checks ↓",
    "showLess": "See Fewer ↑",
    "previous": "← Previous",
    "next": "Next →",
    "stageLabel": "Stage"
  },
  "/services/managed-it-services/": {
    "titleLead": "Managed IT Work Planning",
    "titleRest": "Review the Scope in Stages",
    "intro": "Plan managed it around the work in scope. Organize infrastructure monitoring and maintenance around agreed coverage, system ownership and operational follow-up.",
    "steps": [
      {
        "badge": "Managed IT Scope",
        "label": "Clarify the requirements",
        "amount": "MAP",
        "amountUnit": " first",
        "infoTitle": "Managed IT Priorities",
        "items": [
          {
            "title": "Service Inventory",
            "desc": "Identify managed systems and the operating responsibilities included in the service arrangement.",
            "imageAlt": "Planning icon for managed it: service inventory"
          },
          {
            "title": "Monitoring Context",
            "desc": "Connect operational signals to their source, expected conditions and investigation responsibilities.",
            "imageAlt": "Planning icon for managed it: monitoring context"
          },
          {
            "title": "Maintenance Work",
            "desc": "Sequence routine changes and upkeep with the approvals and system dependencies they require.",
            "imageAlt": "Planning icon for managed it: maintenance work"
          }
        ],
        "rightTitle": "Managed IT Scope Checks",
        "features": [
          "Scope: Managed resources",
          "Scope: Coverage requirements",
          "Scope: Operating duties",
          "Scope: Service boundaries",
          "Scope: Signal sources",
          "Scope: Alert definitions",
          "Scope: Expected conditions",
          "Scope: Investigation routing",
          "Scope: Maintenance schedules",
          "Scope: Change approvals"
        ],
        "btnText": "Plan Managed IT"
      },
      {
        "badge": "Managed IT Work",
        "label": "Organize the work",
        "amount": "WORK",
        "amountUnit": " scope",
        "infoTitle": "Managed IT Work Areas",
        "items": [
          {
            "title": "Managed resources",
            "desc": "For managed it, include coverage requirements, operating duties, service boundaries when defining service inventory.",
            "imageAlt": "Planning icon for managed it: managed resources"
          },
          {
            "title": "Signal sources",
            "desc": "For managed it, include alert definitions, expected conditions, investigation routing when defining monitoring context.",
            "imageAlt": "Planning icon for managed it: signal sources"
          },
          {
            "title": "Maintenance schedules",
            "desc": "For managed it, include change approvals, dependency awareness, work completion records when defining maintenance work.",
            "imageAlt": "Planning icon for managed it: maintenance schedules"
          }
        ],
        "rightTitle": "Managed IT Work Checks",
        "features": [
          "Work area: Service boundaries",
          "Work area: Signal sources",
          "Work area: Alert definitions",
          "Work area: Expected conditions",
          "Work area: Investigation routing",
          "Work area: Maintenance schedules",
          "Work area: Change approvals",
          "Work area: Dependency awareness",
          "Work area: Work completion records",
          "Work area: Incident follow-up"
        ],
        "btnText": "Scope Managed IT"
      },
      {
        "badge": "Managed IT Review",
        "label": "Prepare the handover",
        "amount": "QA",
        "amountUnit": " notes",
        "infoTitle": "Managed IT Review Points",
        "items": [
          {
            "title": "Operational Review",
            "desc": "Review open incidents, service changes and reporting measures with the people responsible for follow-up.",
            "imageAlt": "Planning icon for managed it: operational review"
          },
          {
            "title": "Incident follow-up",
            "desc": "Review incident follow-up alongside service-change history before agreeing the managed it handover.",
            "imageAlt": "Planning icon for managed it: incident follow-up"
          },
          {
            "title": "Reporting agreements",
            "desc": "Keep reporting agreements and operating reviews in the managed it review record.",
            "imageAlt": "Planning icon for managed it: reporting agreements"
          }
        ],
        "rightTitle": "Managed IT Review Checks",
        "features": [
          "Review: Expected conditions",
          "Review: Investigation routing",
          "Review: Maintenance schedules",
          "Review: Change approvals",
          "Review: Dependency awareness",
          "Review: Work completion records",
          "Review: Incident follow-up",
          "Review: Service-change history",
          "Review: Reporting agreements",
          "Review: Operating reviews"
        ],
        "btnText": "Review Managed IT"
      }
    ],
    "showAll": "See All Checks ↓",
    "showLess": "See Fewer ↑",
    "previous": "← Previous",
    "next": "Next →",
    "stageLabel": "Stage"
  },
  "/services/big-data/": {
    "titleLead": "Big Data Work Planning",
    "titleRest": "Review the Scope in Stages",
    "intro": "Plan big data processing around the work in scope. Connect distributed processing to the volume, variety and interpretation requirements of the datasets being handled.",
    "steps": [
      {
        "badge": "Big Data Scope",
        "label": "Clarify the requirements",
        "amount": "MAP",
        "amountUnit": " first",
        "infoTitle": "Big Data Priorities",
        "items": [
          {
            "title": "Ingestion Requirements",
            "desc": "Define incoming sources, record formats and arrival patterns before constructing the data pipeline.",
            "imageAlt": "Planning icon for big data processing: ingestion requirements"
          },
          {
            "title": "Distributed Processing",
            "desc": "Partition transformation work around data relationships and the operating constraints of the workload.",
            "imageAlt": "Planning icon for big data processing: distributed processing"
          },
          {
            "title": "Analytical Outputs",
            "desc": "Keep processed datasets associated with the definitions and source context needed by downstream analysis.",
            "imageAlt": "Planning icon for big data processing: analytical outputs"
          }
        ],
        "rightTitle": "Big Data Scope Checks",
        "features": [
          "Scope: Incoming sources",
          "Scope: Record formats",
          "Scope: Arrival patterns",
          "Scope: Ingestion validation",
          "Scope: Processing partitions",
          "Scope: Transformation stages",
          "Scope: Workload dependencies",
          "Scope: Failure recovery",
          "Scope: Output definitions",
          "Scope: Source lineage"
        ],
        "btnText": "Plan Big Data"
      },
      {
        "badge": "Big Data Work",
        "label": "Organize the work",
        "amount": "WORK",
        "amountUnit": " scope",
        "infoTitle": "Big Data Work Areas",
        "items": [
          {
            "title": "Incoming sources",
            "desc": "For big data processing, include record formats, arrival patterns, ingestion validation when defining ingestion requirements.",
            "imageAlt": "Planning icon for big data processing: incoming sources"
          },
          {
            "title": "Processing partitions",
            "desc": "For big data processing, include transformation stages, workload dependencies, failure recovery when defining distributed processing.",
            "imageAlt": "Planning icon for big data processing: processing partitions"
          },
          {
            "title": "Output definitions",
            "desc": "For big data processing, include source lineage, quality observations, consumer requirements when defining analytical outputs.",
            "imageAlt": "Planning icon for big data processing: output definitions"
          }
        ],
        "rightTitle": "Big Data Work Checks",
        "features": [
          "Work area: Ingestion validation",
          "Work area: Processing partitions",
          "Work area: Transformation stages",
          "Work area: Workload dependencies",
          "Work area: Failure recovery",
          "Work area: Output definitions",
          "Work area: Source lineage",
          "Work area: Quality observations",
          "Work area: Consumer requirements",
          "Work area: Resource assumptions"
        ],
        "btnText": "Scope Big Data"
      },
      {
        "badge": "Big Data Review",
        "label": "Prepare the handover",
        "amount": "QA",
        "amountUnit": " notes",
        "infoTitle": "Big Data Review Points",
        "items": [
          {
            "title": "Pipeline Operation",
            "desc": "Plan resource reviews and investigation of incomplete or unsuccessful processing runs.",
            "imageAlt": "Planning icon for big data processing: pipeline operation"
          },
          {
            "title": "Resource assumptions",
            "desc": "Review resource assumptions alongside run diagnostics before agreeing the big data processing handover.",
            "imageAlt": "Planning icon for big data processing: resource assumptions"
          },
          {
            "title": "Incomplete datasets",
            "desc": "Keep incomplete datasets and pipeline ownership in the big data processing review record.",
            "imageAlt": "Planning icon for big data processing: incomplete datasets"
          }
        ],
        "rightTitle": "Big Data Review Checks",
        "features": [
          "Review: Workload dependencies",
          "Review: Failure recovery",
          "Review: Output definitions",
          "Review: Source lineage",
          "Review: Quality observations",
          "Review: Consumer requirements",
          "Review: Resource assumptions",
          "Review: Run diagnostics",
          "Review: Incomplete datasets",
          "Review: Pipeline ownership"
        ],
        "btnText": "Review Big Data"
      }
    ],
    "showAll": "See All Checks ↓",
    "showLess": "See Fewer ↑",
    "previous": "← Previous",
    "next": "Next →",
    "stageLabel": "Stage"
  },
  "/services/it-staff-augmentation/": {
    "titleLead": "IT Staffing Work Planning",
    "titleRest": "Review the Scope in Stages",
    "intro": "Plan it staff augmentation around the work in scope. Define engineering support through role requirements, project context and a practical handover into the existing delivery team.",
    "steps": [
      {
        "badge": "IT Staffing Scope",
        "label": "Clarify the requirements",
        "amount": "MAP",
        "amountUnit": " first",
        "infoTitle": "IT Staffing Priorities",
        "items": [
          {
            "title": "Role Definition",
            "desc": "Specify the skills and responsibilities required for the project rather than relying on generic engineer counts.",
            "imageAlt": "Planning icon for it staff augmentation: role definition"
          },
          {
            "title": "Team Onboarding",
            "desc": "Connect new contributors to the repository knowledge, authorized access and tools their work requires.",
            "imageAlt": "Planning icon for it staff augmentation: team onboarding"
          },
          {
            "title": "Work Coordination",
            "desc": "Give assigned engineering work a clear owner, acceptance expectation and review path within the team.",
            "imageAlt": "Planning icon for it staff augmentation: work coordination"
          }
        ],
        "rightTitle": "IT Staffing Scope Checks",
        "features": [
          "Scope: Required experience",
          "Scope: Role responsibilities",
          "Scope: Project context",
          "Scope: Working expectations",
          "Scope: Repository orientation",
          "Scope: Access requirements",
          "Scope: Tool configuration",
          "Scope: Team contacts",
          "Scope: Task ownership",
          "Scope: Acceptance examples"
        ],
        "btnText": "Plan IT Staffing"
      },
      {
        "badge": "IT Staffing Work",
        "label": "Organize the work",
        "amount": "WORK",
        "amountUnit": " scope",
        "infoTitle": "IT Staffing Work Areas",
        "items": [
          {
            "title": "Required experience",
            "desc": "For it staff augmentation, include role responsibilities, project context, working expectations when defining role definition.",
            "imageAlt": "Planning icon for it staff augmentation: required experience"
          },
          {
            "title": "Repository orientation",
            "desc": "For it staff augmentation, include access requirements, tool configuration, team contacts when defining team onboarding.",
            "imageAlt": "Planning icon for it staff augmentation: repository orientation"
          },
          {
            "title": "Task ownership",
            "desc": "For it staff augmentation, include acceptance examples, review responsibilities, cross-team dependencies when defining work coordination.",
            "imageAlt": "Planning icon for it staff augmentation: task ownership"
          }
        ],
        "rightTitle": "IT Staffing Work Checks",
        "features": [
          "Work area: Working expectations",
          "Work area: Repository orientation",
          "Work area: Access requirements",
          "Work area: Tool configuration",
          "Work area: Team contacts",
          "Work area: Task ownership",
          "Work area: Acceptance examples",
          "Work area: Review responsibilities",
          "Work area: Cross-team dependencies",
          "Work area: Decision documentation"
        ],
        "btnText": "Scope IT Staffing"
      },
      {
        "badge": "IT Staffing Review",
        "label": "Prepare the handover",
        "amount": "QA",
        "amountUnit": " notes",
        "infoTitle": "IT Staffing Review Points",
        "items": [
          {
            "title": "Knowledge Continuity",
            "desc": "Keep implementation decisions and handover material accessible to the people maintaining the project.",
            "imageAlt": "Planning icon for it staff augmentation: knowledge continuity"
          },
          {
            "title": "Decision documentation",
            "desc": "Review decision documentation alongside handover records before agreeing the it staff augmentation handover.",
            "imageAlt": "Planning icon for it staff augmentation: decision documentation"
          },
          {
            "title": "Maintenance context",
            "desc": "Keep maintenance context and engagement follow-up in the it staff augmentation review record.",
            "imageAlt": "Planning icon for it staff augmentation: maintenance context"
          }
        ],
        "rightTitle": "IT Staffing Review Checks",
        "features": [
          "Review: Tool configuration",
          "Review: Team contacts",
          "Review: Task ownership",
          "Review: Acceptance examples",
          "Review: Review responsibilities",
          "Review: Cross-team dependencies",
          "Review: Decision documentation",
          "Review: Handover records",
          "Review: Maintenance context",
          "Review: Engagement follow-up"
        ],
        "btnText": "Review IT Staffing"
      }
    ],
    "showAll": "See All Checks ↓",
    "showLess": "See Fewer ↑",
    "previous": "← Previous",
    "next": "Next →",
    "stageLabel": "Stage"
  },
  "/services/api-development/": {
    "titleLead": "APIs Work Planning",
    "titleRest": "Review the Scope in Stages",
    "intro": "Plan api development around the work in scope. Connect application interfaces to defined inputs, permission boundaries and predictable response and integration behavior.",
    "steps": [
      {
        "badge": "APIs Scope",
        "label": "Clarify the requirements",
        "amount": "MAP",
        "amountUnit": " first",
        "infoTitle": "APIs Priorities",
        "items": [
          {
            "title": "Contract Definition",
            "desc": "Specify resources and operations in terms that both the service and its consumers can implement.",
            "imageAlt": "Planning icon for api development: contract definition"
          },
          {
            "title": "Protected Operations",
            "desc": "Apply input and authorization checks where the API reads or changes application information.",
            "imageAlt": "Planning icon for api development: protected operations"
          },
          {
            "title": "Integration Behavior",
            "desc": "Define how clients interpret status, pagination and unsuccessful exchanges with connected services.",
            "imageAlt": "Planning icon for api development: integration behavior"
          }
        ],
        "rightTitle": "APIs Scope Checks",
        "features": [
          "Scope: Resource definitions",
          "Scope: Operation contracts",
          "Scope: Request schemas",
          "Scope: Response expectations",
          "Scope: Input-validation rules",
          "Scope: Authorization context",
          "Scope: Protected record access",
          "Scope: Sensitive action checks",
          "Scope: Status interpretation",
          "Scope: Pagination requirements"
        ],
        "btnText": "Plan APIs"
      },
      {
        "badge": "APIs Work",
        "label": "Organize the work",
        "amount": "WORK",
        "amountUnit": " scope",
        "infoTitle": "APIs Work Areas",
        "items": [
          {
            "title": "Resource definitions",
            "desc": "For api development, include operation contracts, request schemas, response expectations when defining contract definition.",
            "imageAlt": "Planning icon for api development: resource definitions"
          },
          {
            "title": "Input-validation rules",
            "desc": "For api development, include authorization context, protected record access, sensitive action checks when defining protected operations.",
            "imageAlt": "Planning icon for api development: input-validation rules"
          },
          {
            "title": "Status interpretation",
            "desc": "For api development, include pagination requirements, retry expectations, external-service errors when defining integration behavior.",
            "imageAlt": "Planning icon for api development: status interpretation"
          }
        ],
        "rightTitle": "APIs Work Checks",
        "features": [
          "Work area: Response expectations",
          "Work area: Input-validation rules",
          "Work area: Authorization context",
          "Work area: Protected record access",
          "Work area: Sensitive action checks",
          "Work area: Status interpretation",
          "Work area: Pagination requirements",
          "Work area: Retry expectations",
          "Work area: External-service errors",
          "Work area: Usage examples"
        ],
        "btnText": "Scope APIs"
      },
      {
        "badge": "APIs Review",
        "label": "Prepare the handover",
        "amount": "QA",
        "amountUnit": " notes",
        "infoTitle": "APIs Review Points",
        "items": [
          {
            "title": "API Handover",
            "desc": "Keep examples and compatibility expectations connected to the interface version being delivered.",
            "imageAlt": "Planning icon for api development: api handover"
          },
          {
            "title": "Usage examples",
            "desc": "Review usage examples alongside contract tests before agreeing the api development handover.",
            "imageAlt": "Planning icon for api development: usage examples"
          },
          {
            "title": "Version compatibility",
            "desc": "Keep version compatibility and integration documentation in the api development review record.",
            "imageAlt": "Planning icon for api development: version compatibility"
          }
        ],
        "rightTitle": "APIs Review Checks",
        "features": [
          "Review: Protected record access",
          "Review: Sensitive action checks",
          "Review: Status interpretation",
          "Review: Pagination requirements",
          "Review: Retry expectations",
          "Review: External-service errors",
          "Review: Usage examples",
          "Review: Contract tests",
          "Review: Version compatibility",
          "Review: Integration documentation"
        ],
        "btnText": "Review APIs"
      }
    ],
    "showAll": "See All Checks ↓",
    "showLess": "See Fewer ↑",
    "previous": "← Previous",
    "next": "Next →",
    "stageLabel": "Stage"
  },
  "/retail-banking-it/": {
    "titleLead": "Banking Work Planning",
    "titleRest": "Review the Scope in Stages",
    "intro": "Plan retail banking around the work in scope. Build customer banking tasks around clear account context, service boundaries and reviewable access and transaction behavior.",
    "steps": [
      {
        "badge": "Banking Scope",
        "label": "Clarify the requirements",
        "amount": "MAP",
        "amountUnit": " first",
        "infoTitle": "Banking Priorities",
        "items": [
          {
            "title": "Clarify the Banking Journey",
            "desc": "Organize account, payment and service-request steps so customers understand the available action and its current status.",
            "imageAlt": "Planning icon for retail banking: clarify the banking journey"
          },
          {
            "title": "Place Controls at Service Boundaries",
            "desc": "Apply identity, permission and input checks where sensitive banking information is retrieved or changed.",
            "imageAlt": "Planning icon for retail banking: place controls at service boundaries"
          },
          {
            "title": "Keep Actions Reviewable",
            "desc": "Record significant state changes and exceptions with the context operations teams need for investigation.",
            "imageAlt": "Planning icon for retail banking: keep actions reviewable"
          }
        ],
        "rightTitle": "Banking Scope Checks",
        "features": [
          "Scope: Clarify the Banking Journey",
          "Scope: Place Controls at Service Boundaries",
          "Scope: Keep Actions Reviewable",
          "Scope: Account",
          "Scope: Identity",
          "Scope: Request",
          "Scope: Outcome",
          "Scope: Review",
          "Scope: Customer Access",
          "Scope: Banking Actions"
        ],
        "btnText": "Plan Banking"
      },
      {
        "badge": "Banking Work",
        "label": "Organize the work",
        "amount": "WORK",
        "amountUnit": " scope",
        "infoTitle": "Banking Work Areas",
        "items": [
          {
            "title": "Account",
            "desc": "Present account details relevant to the task.",
            "imageAlt": "Planning icon for retail banking: account"
          },
          {
            "title": "Identity",
            "desc": "Apply identity checks to sensitive actions.",
            "imageAlt": "Planning icon for retail banking: identity"
          },
          {
            "title": "Request",
            "desc": "Validate banking requests and permissions.",
            "imageAlt": "Planning icon for retail banking: request"
          }
        ],
        "rightTitle": "Banking Work Checks",
        "features": [
          "Work area: Account",
          "Work area: Identity",
          "Work area: Request",
          "Work area: Outcome",
          "Work area: Review",
          "Work area: Customer Access",
          "Work area: Banking Actions",
          "Work area: Control History",
          "Work area: Clarify the Banking Journey",
          "Work area: Place Controls at Service Boundaries"
        ],
        "btnText": "Scope Banking"
      },
      {
        "badge": "Banking Review",
        "label": "Prepare the handover",
        "amount": "QA",
        "amountUnit": " notes",
        "infoTitle": "Banking Review Points",
        "items": [
          {
            "title": "Outcome",
            "desc": "Explain pending and completed action states.",
            "imageAlt": "Planning icon for retail banking: outcome"
          },
          {
            "title": "Review",
            "desc": "Keep significant banking actions reviewable.",
            "imageAlt": "Planning icon for retail banking: review"
          },
          {
            "title": "Banking Workflow",
            "desc": "Connect customer actions to controlled banking services.",
            "imageAlt": "Planning icon for retail banking: banking workflow"
          }
        ],
        "rightTitle": "Banking Review Checks",
        "features": [
          "Review: Outcome",
          "Review: Review",
          "Review: Customer Access",
          "Review: Banking Actions",
          "Review: Control History",
          "Review: Clarify the Banking Journey",
          "Review: Place Controls at Service Boundaries",
          "Review: Keep Actions Reviewable",
          "Review: Account",
          "Review: Identity"
        ],
        "btnText": "Review Banking"
      }
    ],
    "showAll": "See All Checks ↓",
    "showLess": "See Fewer ↑",
    "previous": "← Previous",
    "next": "Next →",
    "stageLabel": "Stage"
  },
  "/aws-infrastructure/": {
    "titleLead": "AWS Work Planning",
    "titleRest": "Review the Scope in Stages",
    "intro": "Plan aws infrastructure around the work in scope. Plan AWS resources and operating responsibilities around application dependencies, access requirements and recovery needs.",
    "steps": [
      {
        "badge": "AWS Scope",
        "label": "Clarify the requirements",
        "amount": "MAP",
        "amountUnit": " first",
        "infoTitle": "AWS Priorities",
        "items": [
          {
            "title": "Workload Planning",
            "desc": "Identify compute, storage and service relationships before configuring the AWS environment.",
            "imageAlt": "Planning icon for aws infrastructure: workload planning"
          },
          {
            "title": "Identity and Network Rules",
            "desc": "Define who and what may reach resources, with explicit responsibilities for changing access.",
            "imageAlt": "Planning icon for aws infrastructure: identity and network rules"
          },
          {
            "title": "Infrastructure Delivery",
            "desc": "Document resource configuration and deployment decisions so changes can be reviewed by the operating team.",
            "imageAlt": "Planning icon for aws infrastructure: infrastructure delivery"
          }
        ],
        "rightTitle": "AWS Scope Checks",
        "features": [
          "Scope: Compute requirements",
          "Scope: Storage responsibilities",
          "Scope: Service dependencies",
          "Scope: Environment boundaries",
          "Scope: Identity permissions",
          "Scope: Network access rules",
          "Scope: Resource boundaries",
          "Scope: Access-change ownership",
          "Scope: Resource configuration",
          "Scope: Deployment records"
        ],
        "btnText": "Plan AWS"
      },
      {
        "badge": "AWS Work",
        "label": "Organize the work",
        "amount": "WORK",
        "amountUnit": " scope",
        "infoTitle": "AWS Work Areas",
        "items": [
          {
            "title": "Compute requirements",
            "desc": "For aws infrastructure, include storage responsibilities, service dependencies, environment boundaries when defining workload planning.",
            "imageAlt": "Planning icon for aws infrastructure: compute requirements"
          },
          {
            "title": "Identity permissions",
            "desc": "For aws infrastructure, include network access rules, resource boundaries, access-change ownership when defining identity and network rules.",
            "imageAlt": "Planning icon for aws infrastructure: identity permissions"
          },
          {
            "title": "Resource configuration",
            "desc": "For aws infrastructure, include deployment records, environment validation, change ownership when defining infrastructure delivery.",
            "imageAlt": "Planning icon for aws infrastructure: resource configuration"
          }
        ],
        "rightTitle": "AWS Work Checks",
        "features": [
          "Work area: Environment boundaries",
          "Work area: Identity permissions",
          "Work area: Network access rules",
          "Work area: Resource boundaries",
          "Work area: Access-change ownership",
          "Work area: Resource configuration",
          "Work area: Deployment records",
          "Work area: Environment validation",
          "Work area: Change ownership",
          "Work area: Operational signals"
        ],
        "btnText": "Scope AWS"
      },
      {
        "badge": "AWS Review",
        "label": "Prepare the handover",
        "amount": "QA",
        "amountUnit": " notes",
        "infoTitle": "AWS Review Points",
        "items": [
          {
            "title": "Operating Readiness",
            "desc": "Connect diagnostics and recovery planning to the conditions the application is expected to face.",
            "imageAlt": "Planning icon for aws infrastructure: operating readiness"
          },
          {
            "title": "Operational signals",
            "desc": "Review operational signals alongside recovery scenarios before agreeing the aws infrastructure handover.",
            "imageAlt": "Planning icon for aws infrastructure: operational signals"
          },
          {
            "title": "Capacity review",
            "desc": "Keep capacity review and support runbooks in the aws infrastructure review record.",
            "imageAlt": "Planning icon for aws infrastructure: capacity review"
          }
        ],
        "rightTitle": "AWS Review Checks",
        "features": [
          "Review: Resource boundaries",
          "Review: Access-change ownership",
          "Review: Resource configuration",
          "Review: Deployment records",
          "Review: Environment validation",
          "Review: Change ownership",
          "Review: Operational signals",
          "Review: Recovery scenarios",
          "Review: Capacity review",
          "Review: Support runbooks"
        ],
        "btnText": "Review AWS"
      }
    ],
    "showAll": "See All Checks ↓",
    "showLess": "See Fewer ↑",
    "previous": "← Previous",
    "next": "Next →",
    "stageLabel": "Stage"
  },
  "/net-experts/": {
    "titleLead": ".NET Work Planning",
    "titleRest": "Review the Scope in Stages",
    "intro": "Plan .net engineering around the work in scope. Structure .NET application work through clear business rules, data access and service interfaces.",
    "steps": [
      {
        "badge": ".NET Scope",
        "label": "Clarify the requirements",
        "amount": "MAP",
        "amountUnit": " first",
        "infoTitle": ".NET Priorities",
        "items": [
          {
            "title": "Application Responsibilities",
            "desc": "Organize .NET modules around defined business actions and the records those actions use.",
            "imageAlt": "Planning icon for .net engineering: application responsibilities"
          },
          {
            "title": "Service Integration",
            "desc": "Specify the contracts and identity context needed when the application exchanges information with services.",
            "imageAlt": "Planning icon for .net engineering: service integration"
          },
          {
            "title": "Persistence Behavior",
            "desc": "Connect stored records and transaction rules to the workflows that read or modify enterprise information.",
            "imageAlt": "Planning icon for .net engineering: persistence behavior"
          }
        ],
        "rightTitle": ".NET Scope Checks",
        "features": [
          "Scope: Business-action models",
          "Scope: Module interfaces",
          "Scope: Input requirements",
          "Scope: Application boundaries",
          "Scope: Service request formats",
          "Scope: Identity context",
          "Scope: Exchange responses",
          "Scope: Integration exceptions",
          "Scope: Record mappings",
          "Scope: Data validation rules"
        ],
        "btnText": "Plan .NET"
      },
      {
        "badge": ".NET Work",
        "label": "Organize the work",
        "amount": "WORK",
        "amountUnit": " scope",
        "infoTitle": ".NET Work Areas",
        "items": [
          {
            "title": "Business-action models",
            "desc": "For .net engineering, include module interfaces, input requirements, application boundaries when defining application responsibilities.",
            "imageAlt": "Planning icon for .net engineering: business-action models"
          },
          {
            "title": "Service request formats",
            "desc": "For .net engineering, include identity context, exchange responses, integration exceptions when defining service integration.",
            "imageAlt": "Planning icon for .net engineering: service request formats"
          },
          {
            "title": "Record mappings",
            "desc": "For .net engineering, include data validation rules, transaction requirements, query review when defining persistence behavior.",
            "imageAlt": "Planning icon for .net engineering: record mappings"
          }
        ],
        "rightTitle": ".NET Work Checks",
        "features": [
          "Work area: Application boundaries",
          "Work area: Service request formats",
          "Work area: Identity context",
          "Work area: Exchange responses",
          "Work area: Integration exceptions",
          "Work area: Record mappings",
          "Work area: Data validation rules",
          "Work area: Transaction requirements",
          "Work area: Query review",
          "Work area: Configuration guidance"
        ],
        "btnText": "Scope .NET"
      },
      {
        "badge": ".NET Review",
        "label": "Prepare the handover",
        "amount": "QA",
        "amountUnit": " notes",
        "infoTitle": ".NET Review Points",
        "items": [
          {
            "title": "Delivery Support",
            "desc": "Prepare application configuration and diagnostic context alongside checks of the intended user journeys.",
            "imageAlt": "Planning icon for .net engineering: delivery support"
          },
          {
            "title": "Configuration guidance",
            "desc": "Review configuration guidance alongside workflow verification before agreeing the .net engineering handover.",
            "imageAlt": "Planning icon for .net engineering: configuration guidance"
          },
          {
            "title": "Release handover",
            "desc": "Keep release handover and runtime diagnostics in the .net engineering review record.",
            "imageAlt": "Planning icon for .net engineering: release handover"
          }
        ],
        "rightTitle": ".NET Review Checks",
        "features": [
          "Review: Exchange responses",
          "Review: Integration exceptions",
          "Review: Record mappings",
          "Review: Data validation rules",
          "Review: Transaction requirements",
          "Review: Query review",
          "Review: Configuration guidance",
          "Review: Workflow verification",
          "Review: Release handover",
          "Review: Runtime diagnostics"
        ],
        "btnText": "Review .NET"
      }
    ],
    "showAll": "See All Checks ↓",
    "showLess": "See Fewer ↑",
    "previous": "← Previous",
    "next": "Next →",
    "stageLabel": "Stage"
  },
  "/services/cybersecurity/": {
    "titleLead": "Cyber Checks Work Planning",
    "titleRest": "Review the Scope in Stages",
    "intro": "Plan cybersecurity around the work in scope. Connect security assessment and advisory work to the information, services and access responsibilities of the organization.",
    "steps": [
      {
        "badge": "Cyber Checks Scope",
        "label": "Clarify the requirements",
        "amount": "MAP",
        "amountUnit": " first",
        "infoTitle": "Cyber Checks Priorities",
        "items": [
          {
            "title": "Security Scope",
            "desc": "Identify relevant assets and information flows before defining assessment priorities.",
            "imageAlt": "Planning icon for cybersecurity: security scope"
          },
          {
            "title": "Access Responsibilities",
            "desc": "Review how identities receive, use and relinquish permissions across the systems in scope.",
            "imageAlt": "Planning icon for cybersecurity: access responsibilities"
          },
          {
            "title": "Control Assessment",
            "desc": "Connect observed security conditions to requirements and evidence that can be reviewed by responsible teams.",
            "imageAlt": "Planning icon for cybersecurity: control assessment"
          }
        ],
        "rightTitle": "Cyber Checks Scope Checks",
        "features": [
          "Scope: Asset context",
          "Scope: Information flows",
          "Scope: Exposure priorities",
          "Scope: Assessment boundaries",
          "Scope: Identity lifecycle",
          "Scope: Permission boundaries",
          "Scope: Administrative access",
          "Scope: Access-review duties",
          "Scope: Control expectations",
          "Scope: Evidence collection"
        ],
        "btnText": "Plan Cyber Checks"
      },
      {
        "badge": "Cyber Checks Work",
        "label": "Organize the work",
        "amount": "WORK",
        "amountUnit": " scope",
        "infoTitle": "Cyber Checks Work Areas",
        "items": [
          {
            "title": "Asset context",
            "desc": "For cybersecurity, include information flows, exposure priorities, assessment boundaries when defining security scope.",
            "imageAlt": "Planning icon for cybersecurity: asset context"
          },
          {
            "title": "Identity lifecycle",
            "desc": "For cybersecurity, include permission boundaries, administrative access, access-review duties when defining access responsibilities.",
            "imageAlt": "Planning icon for cybersecurity: identity lifecycle"
          },
          {
            "title": "Control expectations",
            "desc": "For cybersecurity, include evidence collection, observed weaknesses, risk context when defining control assessment.",
            "imageAlt": "Planning icon for cybersecurity: control expectations"
          }
        ],
        "rightTitle": "Cyber Checks Work Checks",
        "features": [
          "Work area: Assessment boundaries",
          "Work area: Identity lifecycle",
          "Work area: Permission boundaries",
          "Work area: Administrative access",
          "Work area: Access-review duties",
          "Work area: Control expectations",
          "Work area: Evidence collection",
          "Work area: Observed weaknesses",
          "Work area: Risk context",
          "Work area: Finding ownership"
        ],
        "btnText": "Scope Cyber Checks"
      },
      {
        "badge": "Cyber Checks Review",
        "label": "Prepare the handover",
        "amount": "QA",
        "amountUnit": " notes",
        "infoTitle": "Cyber Checks Review Points",
        "items": [
          {
            "title": "Security Follow-up",
            "desc": "Turn assessment findings into assigned actions and a documented path for reviewing changes.",
            "imageAlt": "Planning icon for cybersecurity: security follow-up"
          },
          {
            "title": "Finding ownership",
            "desc": "Review finding ownership alongside remediation priorities before agreeing the cybersecurity handover.",
            "imageAlt": "Planning icon for cybersecurity: finding ownership"
          },
          {
            "title": "Change review",
            "desc": "Keep change review and continuing assessment in the cybersecurity review record.",
            "imageAlt": "Planning icon for cybersecurity: change review"
          }
        ],
        "rightTitle": "Cyber Checks Review Checks",
        "features": [
          "Review: Administrative access",
          "Review: Access-review duties",
          "Review: Control expectations",
          "Review: Evidence collection",
          "Review: Observed weaknesses",
          "Review: Risk context",
          "Review: Finding ownership",
          "Review: Remediation priorities",
          "Review: Change review",
          "Review: Continuing assessment"
        ],
        "btnText": "Review Cyber Checks"
      }
    ],
    "showAll": "See All Checks ↓",
    "showLess": "See Fewer ↑",
    "previous": "← Previous",
    "next": "Next →",
    "stageLabel": "Stage"
  },
  "/services/it-consulting/": {
    "titleLead": "IT Advice Work Planning",
    "titleRest": "Review the Scope in Stages",
    "intro": "Plan it consulting around the work in scope. Connect technology choices to operating requirements, system dependencies and the decisions needed to move a plan forward.",
    "steps": [
      {
        "badge": "IT Advice Scope",
        "label": "Clarify the requirements",
        "amount": "MAP",
        "amountUnit": " first",
        "infoTitle": "IT Advice Priorities",
        "items": [
          {
            "title": "Business and IT Context",
            "desc": "Clarify the business processes and technology constraints relevant to the advisory work.",
            "imageAlt": "Planning icon for it consulting: business and it context"
          },
          {
            "title": "Technology Options",
            "desc": "Review alternatives through their operational implications and suitability for the required work.",
            "imageAlt": "Planning icon for it consulting: technology options"
          },
          {
            "title": "Change Roadmaps",
            "desc": "Sequence proposed technology work around identified dependencies and reviewable business outcomes.",
            "imageAlt": "Planning icon for it consulting: change roadmaps"
          }
        ],
        "rightTitle": "IT Advice Scope Checks",
        "features": [
          "Scope: Operating objectives",
          "Scope: System constraints",
          "Scope: Stakeholder needs",
          "Scope: Current dependencies",
          "Scope: Option comparisons",
          "Scope: Integration implications",
          "Scope: Resource requirements",
          "Scope: Operating tradeoffs",
          "Scope: Roadmap increments",
          "Scope: Dependency sequencing"
        ],
        "btnText": "Plan IT Advice"
      },
      {
        "badge": "IT Advice Work",
        "label": "Organize the work",
        "amount": "WORK",
        "amountUnit": " scope",
        "infoTitle": "IT Advice Work Areas",
        "items": [
          {
            "title": "Operating objectives",
            "desc": "For it consulting, include system constraints, stakeholder needs, current dependencies when defining business and it context.",
            "imageAlt": "Planning icon for it consulting: operating objectives"
          },
          {
            "title": "Option comparisons",
            "desc": "For it consulting, include integration implications, resource requirements, operating tradeoffs when defining technology options.",
            "imageAlt": "Planning icon for it consulting: option comparisons"
          },
          {
            "title": "Roadmap increments",
            "desc": "For it consulting, include dependency sequencing, decision checkpoints, acceptance goals when defining change roadmaps.",
            "imageAlt": "Planning icon for it consulting: roadmap increments"
          }
        ],
        "rightTitle": "IT Advice Work Checks",
        "features": [
          "Work area: Current dependencies",
          "Work area: Option comparisons",
          "Work area: Integration implications",
          "Work area: Resource requirements",
          "Work area: Operating tradeoffs",
          "Work area: Roadmap increments",
          "Work area: Dependency sequencing",
          "Work area: Decision checkpoints",
          "Work area: Acceptance goals",
          "Work area: Recommendation context"
        ],
        "btnText": "Scope IT Advice"
      },
      {
        "badge": "IT Advice Review",
        "label": "Prepare the handover",
        "amount": "QA",
        "amountUnit": " notes",
        "infoTitle": "IT Advice Review Points",
        "items": [
          {
            "title": "Advisory Handover",
            "desc": "Keep recommendations and unresolved questions connected to their assumptions and responsible decision makers.",
            "imageAlt": "Planning icon for it consulting: advisory handover"
          },
          {
            "title": "Recommendation context",
            "desc": "Review recommendation context alongside assumption documentation before agreeing the it consulting handover.",
            "imageAlt": "Planning icon for it consulting: recommendation context"
          },
          {
            "title": "Decision responsibilities",
            "desc": "Keep decision responsibilities and advisory follow-up in the it consulting review record.",
            "imageAlt": "Planning icon for it consulting: decision responsibilities"
          }
        ],
        "rightTitle": "IT Advice Review Checks",
        "features": [
          "Review: Resource requirements",
          "Review: Operating tradeoffs",
          "Review: Roadmap increments",
          "Review: Dependency sequencing",
          "Review: Decision checkpoints",
          "Review: Acceptance goals",
          "Review: Recommendation context",
          "Review: Assumption documentation",
          "Review: Decision responsibilities",
          "Review: Advisory follow-up"
        ],
        "btnText": "Review IT Advice"
      }
    ],
    "showAll": "See All Checks ↓",
    "showLess": "See Fewer ↑",
    "previous": "← Previous",
    "next": "Next →",
    "stageLabel": "Stage"
  },
  "/services/devops-consulting/": {
    "titleLead": "DevOps Work Planning",
    "titleRest": "Review the Scope in Stages",
    "intro": "Plan devops around the work in scope. Connect software delivery automation to the checks, environment boundaries and operating responsibilities behind each release.",
    "steps": [
      {
        "badge": "DevOps Scope",
        "label": "Clarify the requirements",
        "amount": "MAP",
        "amountUnit": " first",
        "infoTitle": "DevOps Priorities",
        "items": [
          {
            "title": "Pipeline Assessment",
            "desc": "Map existing build and release steps before identifying where automation or clearer ownership is needed.",
            "imageAlt": "Planning icon for devops: pipeline assessment"
          },
          {
            "title": "Automated Verification",
            "desc": "Place repeatable checks where they can provide useful evidence about the artifact being prepared.",
            "imageAlt": "Planning icon for devops: automated verification"
          },
          {
            "title": "Environment Configuration",
            "desc": "Define how settings and access differ across development, preview and production environments.",
            "imageAlt": "Planning icon for devops: environment configuration"
          }
        ],
        "rightTitle": "DevOps Scope Checks",
        "features": [
          "Scope: Build-step inventory",
          "Scope: Release dependencies",
          "Scope: Pipeline responsibilities",
          "Scope: Current failure points",
          "Scope: Build validation",
          "Scope: Test integration",
          "Scope: Artifact references",
          "Scope: Failure reporting",
          "Scope: Environment definitions",
          "Scope: Configuration handling"
        ],
        "btnText": "Plan DevOps"
      },
      {
        "badge": "DevOps Work",
        "label": "Organize the work",
        "amount": "WORK",
        "amountUnit": " scope",
        "infoTitle": "DevOps Work Areas",
        "items": [
          {
            "title": "Build-step inventory",
            "desc": "For devops, include release dependencies, pipeline responsibilities, current failure points when defining pipeline assessment.",
            "imageAlt": "Planning icon for devops: build-step inventory"
          },
          {
            "title": "Build validation",
            "desc": "For devops, include test integration, artifact references, failure reporting when defining automated verification.",
            "imageAlt": "Planning icon for devops: build validation"
          },
          {
            "title": "Environment definitions",
            "desc": "For devops, include configuration handling, deployment permissions, release conditions when defining environment configuration.",
            "imageAlt": "Planning icon for devops: environment definitions"
          }
        ],
        "rightTitle": "DevOps Work Checks",
        "features": [
          "Work area: Current failure points",
          "Work area: Build validation",
          "Work area: Test integration",
          "Work area: Artifact references",
          "Work area: Failure reporting",
          "Work area: Environment definitions",
          "Work area: Configuration handling",
          "Work area: Deployment permissions",
          "Work area: Release conditions",
          "Work area: Deployment outcomes"
        ],
        "btnText": "Scope DevOps"
      },
      {
        "badge": "DevOps Review",
        "label": "Prepare the handover",
        "amount": "QA",
        "amountUnit": " notes",
        "infoTitle": "DevOps Review Points",
        "items": [
          {
            "title": "Operational Feedback",
            "desc": "Connect deployment results and runtime observations to the team responsible for release follow-up.",
            "imageAlt": "Planning icon for devops: operational feedback"
          },
          {
            "title": "Deployment outcomes",
            "desc": "Review deployment outcomes alongside runtime observations before agreeing the devops handover.",
            "imageAlt": "Planning icon for devops: deployment outcomes"
          },
          {
            "title": "Rollback planning",
            "desc": "Keep rollback planning and post-release review in the devops review record.",
            "imageAlt": "Planning icon for devops: rollback planning"
          }
        ],
        "rightTitle": "DevOps Review Checks",
        "features": [
          "Review: Artifact references",
          "Review: Failure reporting",
          "Review: Environment definitions",
          "Review: Configuration handling",
          "Review: Deployment permissions",
          "Review: Release conditions",
          "Review: Deployment outcomes",
          "Review: Runtime observations",
          "Review: Rollback planning",
          "Review: Post-release review"
        ],
        "btnText": "Review DevOps"
      }
    ],
    "showAll": "See All Checks ↓",
    "showLess": "See Fewer ↑",
    "previous": "← Previous",
    "next": "Next →",
    "stageLabel": "Stage"
  },
  "/services/software-modernization/": {
    "titleLead": "Legacy Apps Work Planning",
    "titleRest": "Review the Scope in Stages",
    "intro": "Plan software modernization around the work in scope. Plan legacy-system improvements around essential behavior, known dependencies and staged migration or replacement work.",
    "steps": [
      {
        "badge": "Legacy Apps Scope",
        "label": "Clarify the requirements",
        "amount": "MAP",
        "amountUnit": " first",
        "infoTitle": "Legacy Apps Priorities",
        "items": [
          {
            "title": "Understand the Existing System",
            "desc": "Identify business-critical behavior, integration dependencies and data ownership before deciding what to retain or replace.",
            "imageAlt": "Planning icon for software modernization: understand the existing system"
          },
          {
            "title": "Sequence the Modernization Work",
            "desc": "Break architecture, interface and data changes into increments that can be reviewed against operational requirements.",
            "imageAlt": "Planning icon for software modernization: sequence the modernization work"
          },
          {
            "title": "Support the New Operating Model",
            "desc": "Include deployment, diagnostics and maintenance responsibilities in the modernization plan rather than treating them as later additions.",
            "imageAlt": "Planning icon for software modernization: support the new operating model"
          }
        ],
        "rightTitle": "Legacy Apps Scope Checks",
        "features": [
          "Scope: Understand the Existing System",
          "Scope: Sequence the Modernization Work",
          "Scope: Support the New Operating Model",
          "Scope: Baseline",
          "Scope: Boundaries",
          "Scope: Migration",
          "Scope: Checks",
          "Scope: Operation",
          "Scope: Legacy Behavior",
          "Scope: Service Boundaries"
        ],
        "btnText": "Plan Legacy Apps"
      },
      {
        "badge": "Legacy Apps Work",
        "label": "Organize the work",
        "amount": "WORK",
        "amountUnit": " scope",
        "infoTitle": "Legacy Apps Work Areas",
        "items": [
          {
            "title": "Baseline",
            "desc": "Map legacy behavior and system dependencies.",
            "imageAlt": "Planning icon for software modernization: baseline"
          },
          {
            "title": "Boundaries",
            "desc": "Isolate the capability being modernized.",
            "imageAlt": "Planning icon for software modernization: boundaries"
          },
          {
            "title": "Migration",
            "desc": "Plan data movement and compatibility checks.",
            "imageAlt": "Planning icon for software modernization: migration"
          }
        ],
        "rightTitle": "Legacy Apps Work Checks",
        "features": [
          "Work area: Baseline",
          "Work area: Boundaries",
          "Work area: Migration",
          "Work area: Checks",
          "Work area: Operation",
          "Work area: Legacy Behavior",
          "Work area: Service Boundaries",
          "Work area: Migration Handover",
          "Work area: Understand the Existing System",
          "Work area: Sequence the Modernization Work"
        ],
        "btnText": "Scope Legacy Apps"
      },
      {
        "badge": "Legacy Apps Review",
        "label": "Prepare the handover",
        "amount": "QA",
        "amountUnit": " notes",
        "infoTitle": "Legacy Apps Review Points",
        "items": [
          {
            "title": "Checks",
            "desc": "Compare changes with essential behavior.",
            "imageAlt": "Planning icon for software modernization: checks"
          },
          {
            "title": "Operation",
            "desc": "Prepare deployment and support handover.",
            "imageAlt": "Planning icon for software modernization: operation"
          },
          {
            "title": "Renewal Workflow",
            "desc": "Preserve essential behavior while changing the platform.",
            "imageAlt": "Planning icon for software modernization: renewal workflow"
          }
        ],
        "rightTitle": "Legacy Apps Review Checks",
        "features": [
          "Review: Checks",
          "Review: Operation",
          "Review: Legacy Behavior",
          "Review: Service Boundaries",
          "Review: Migration Handover",
          "Review: Understand the Existing System",
          "Review: Sequence the Modernization Work",
          "Review: Support the New Operating Model",
          "Review: Baseline",
          "Review: Boundaries"
        ],
        "btnText": "Review Legacy Apps"
      }
    ],
    "showAll": "See All Checks ↓",
    "showLess": "See Fewer ↑",
    "previous": "← Previous",
    "next": "Next →",
    "stageLabel": "Stage"
  },
  "/services/": {
    "titleLead": "IT Services Work Planning",
    "titleRest": "Review the Scope in Stages",
    "intro": "Plan software services around the work in scope. Connect custom software, consulting, cloud infrastructure and support work through defined scopes and delivery responsibilities.",
    "steps": [
      {
        "badge": "IT Services Scope",
        "label": "Clarify the requirements",
        "amount": "MAP",
        "amountUnit": " first",
        "infoTitle": "IT Services Priorities",
        "items": [
          {
            "title": "Software Delivery",
            "desc": "Develop application capabilities around the business tasks and system relationships the project needs.",
            "imageAlt": "Planning icon for software services: software delivery"
          },
          {
            "title": "Technology Advisory",
            "desc": "Review architecture and implementation choices with their dependencies, assumptions and operating tradeoffs.",
            "imageAlt": "Planning icon for software services: technology advisory"
          },
          {
            "title": "Cloud and Infrastructure",
            "desc": "Plan resource configuration and operating requirements for the environments supporting the software.",
            "imageAlt": "Planning icon for software services: cloud and infrastructure"
          }
        ],
        "rightTitle": "IT Services Scope Checks",
        "features": [
          "Scope: Application requirements",
          "Scope: Custom workflow design",
          "Scope: Service integration",
          "Scope: Delivery verification",
          "Scope: Architecture discussions",
          "Scope: Technology tradeoffs",
          "Scope: Delivery roadmaps",
          "Scope: Technical decision records",
          "Scope: Environment planning",
          "Scope: Infrastructure settings"
        ],
        "btnText": "Plan IT Services"
      },
      {
        "badge": "IT Services Work",
        "label": "Organize the work",
        "amount": "WORK",
        "amountUnit": " scope",
        "infoTitle": "IT Services Work Areas",
        "items": [
          {
            "title": "Application requirements",
            "desc": "For software services, include custom workflow design, service integration, delivery verification when defining software delivery.",
            "imageAlt": "Planning icon for software services: application requirements"
          },
          {
            "title": "Architecture discussions",
            "desc": "For software services, include technology tradeoffs, delivery roadmaps, technical decision records when defining technology advisory.",
            "imageAlt": "Planning icon for software services: architecture discussions"
          },
          {
            "title": "Environment planning",
            "desc": "For software services, include infrastructure settings, access responsibilities, recovery considerations when defining cloud and infrastructure.",
            "imageAlt": "Planning icon for software services: environment planning"
          }
        ],
        "rightTitle": "IT Services Work Checks",
        "features": [
          "Work area: Delivery verification",
          "Work area: Architecture discussions",
          "Work area: Technology tradeoffs",
          "Work area: Delivery roadmaps",
          "Work area: Technical decision records",
          "Work area: Environment planning",
          "Work area: Infrastructure settings",
          "Work area: Access responsibilities",
          "Work area: Recovery considerations",
          "Work area: Incident investigation"
        ],
        "btnText": "Scope IT Services"
      },
      {
        "badge": "IT Services Review",
        "label": "Prepare the handover",
        "amount": "QA",
        "amountUnit": " notes",
        "infoTitle": "IT Services Review Points",
        "items": [
          {
            "title": "Application Support",
            "desc": "Keep incidents and maintenance tasks connected to the system context needed for effective follow-up.",
            "imageAlt": "Planning icon for software services: application support"
          },
          {
            "title": "Incident investigation",
            "desc": "Review incident investigation alongside maintenance coordination before agreeing the software services handover.",
            "imageAlt": "Planning icon for software services: incident investigation"
          },
          {
            "title": "Operational knowledge",
            "desc": "Keep operational knowledge and support handover in the software services review record.",
            "imageAlt": "Planning icon for software services: operational knowledge"
          }
        ],
        "rightTitle": "IT Services Review Checks",
        "features": [
          "Review: Delivery roadmaps",
          "Review: Technical decision records",
          "Review: Environment planning",
          "Review: Infrastructure settings",
          "Review: Access responsibilities",
          "Review: Recovery considerations",
          "Review: Incident investigation",
          "Review: Maintenance coordination",
          "Review: Operational knowledge",
          "Review: Support handover"
        ],
        "btnText": "Review IT Services"
      }
    ],
    "showAll": "See All Checks ↓",
    "showLess": "See Fewer ↑",
    "previous": "← Previous",
    "next": "Next →",
    "stageLabel": "Stage"
  },
  "/services/mvp-development/": {
    "titleLead": "MVP Work Planning",
    "titleRest": "Review the Scope in Stages",
    "intro": "Plan mvp development around the work in scope. Define a focused software product that can be reviewed against its core workflow before planning later capabilities.",
    "steps": [
      {
        "badge": "MVP Scope",
        "label": "Clarify the requirements",
        "amount": "MAP",
        "amountUnit": " first",
        "infoTitle": "MVP Priorities",
        "items": [
          {
            "title": "Product Hypothesis",
            "desc": "Identify the user problem and assumptions the initial product should help the team investigate.",
            "imageAlt": "Planning icon for mvp development: product hypothesis"
          },
          {
            "title": "Initial Feature Scope",
            "desc": "Select the capabilities needed for the primary task and make later work explicit.",
            "imageAlt": "Planning icon for mvp development: initial feature scope"
          },
          {
            "title": "Reviewable Increments",
            "desc": "Build the selected product behavior in increments that can be checked against concrete examples.",
            "imageAlt": "Planning icon for mvp development: reviewable increments"
          }
        ],
        "rightTitle": "MVP Scope Checks",
        "features": [
          "Scope: Intended users",
          "Scope: Problem definition",
          "Scope: Product assumptions",
          "Scope: Review questions",
          "Scope: Core workflow",
          "Scope: Required features",
          "Scope: Scope boundaries",
          "Scope: Deferred capabilities",
          "Scope: Prototype increments",
          "Scope: Acceptance cases"
        ],
        "btnText": "Plan MVP"
      },
      {
        "badge": "MVP Work",
        "label": "Organize the work",
        "amount": "WORK",
        "amountUnit": " scope",
        "infoTitle": "MVP Work Areas",
        "items": [
          {
            "title": "Intended users",
            "desc": "For mvp development, include problem definition, product assumptions, review questions when defining product hypothesis.",
            "imageAlt": "Planning icon for mvp development: intended users"
          },
          {
            "title": "Core workflow",
            "desc": "For mvp development, include required features, scope boundaries, deferred capabilities when defining initial feature scope.",
            "imageAlt": "Planning icon for mvp development: core workflow"
          },
          {
            "title": "Prototype increments",
            "desc": "For mvp development, include acceptance cases, task walkthroughs, feedback records when defining reviewable increments.",
            "imageAlt": "Planning icon for mvp development: prototype increments"
          }
        ],
        "rightTitle": "MVP Work Checks",
        "features": [
          "Work area: Review questions",
          "Work area: Core workflow",
          "Work area: Required features",
          "Work area: Scope boundaries",
          "Work area: Deferred capabilities",
          "Work area: Prototype increments",
          "Work area: Acceptance cases",
          "Work area: Task walkthroughs",
          "Work area: Feedback records",
          "Work area: Observed limitations"
        ],
        "btnText": "Scope MVP"
      },
      {
        "badge": "MVP Review",
        "label": "Prepare the handover",
        "amount": "QA",
        "amountUnit": " notes",
        "infoTitle": "MVP Review Points",
        "items": [
          {
            "title": "Next-step Decisions",
            "desc": "Use observed product behavior and review findings to decide what needs refinement or further investigation.",
            "imageAlt": "Planning icon for mvp development: next-step decisions"
          },
          {
            "title": "Observed limitations",
            "desc": "Review observed limitations alongside refinement priorities before agreeing the mvp development handover.",
            "imageAlt": "Planning icon for mvp development: observed limitations"
          },
          {
            "title": "Evidence gaps",
            "desc": "Keep evidence gaps and further product work in the mvp development review record.",
            "imageAlt": "Planning icon for mvp development: evidence gaps"
          }
        ],
        "rightTitle": "MVP Review Checks",
        "features": [
          "Review: Scope boundaries",
          "Review: Deferred capabilities",
          "Review: Prototype increments",
          "Review: Acceptance cases",
          "Review: Task walkthroughs",
          "Review: Feedback records",
          "Review: Observed limitations",
          "Review: Refinement priorities",
          "Review: Evidence gaps",
          "Review: Further product work"
        ],
        "btnText": "Review MVP"
      }
    ],
    "showAll": "See All Checks ↓",
    "showLess": "See Fewer ↑",
    "previous": "← Previous",
    "next": "Next →",
    "stageLabel": "Stage"
  },
  "/services/ai-development/": {
    "titleLead": "AI Delivery Work Planning",
    "titleRest": "Review the Scope in Stages",
    "intro": "Plan ai development around the work in scope. Develop AI application capabilities around the inputs, service actions and human review needed for a specific enterprise task.",
    "steps": [
      {
        "badge": "AI Delivery Scope",
        "label": "Clarify the requirements",
        "amount": "MAP",
        "amountUnit": " first",
        "infoTitle": "AI Delivery Priorities",
        "items": [
          {
            "title": "Define the AI Responsibility",
            "desc": "Specify which part of the workflow the AI capability supports and which decisions remain with users or other application services.",
            "imageAlt": "Planning icon for ai development: define the ai responsibility"
          },
          {
            "title": "Connect Data and Tool Boundaries",
            "desc": "Plan input handling, external model or tool calls and permissions as explicit application interfaces.",
            "imageAlt": "Planning icon for ai development: connect data and tool boundaries"
          },
          {
            "title": "Evaluate Useful Outcomes",
            "desc": "Review representative tasks, unsuccessful outputs and fallback behavior before assessing whether a capability is ready for its intended use.",
            "imageAlt": "Planning icon for ai development: evaluate useful outcomes"
          }
        ],
        "rightTitle": "AI Delivery Scope Checks",
        "features": [
          "Scope: Define the AI Responsibility",
          "Scope: Connect Data and Tool Boundaries",
          "Scope: Evaluate Useful Outcomes",
          "Scope: Task",
          "Scope: Inputs",
          "Scope: Services",
          "Scope: Evaluation",
          "Scope: Fallback",
          "Scope: Defined Task",
          "Scope: Tool Boundary"
        ],
        "btnText": "Plan AI Delivery"
      },
      {
        "badge": "AI Delivery Work",
        "label": "Organize the work",
        "amount": "WORK",
        "amountUnit": " scope",
        "infoTitle": "AI Delivery Work Areas",
        "items": [
          {
            "title": "Task",
            "desc": "Define the task assigned to the AI service.",
            "imageAlt": "Planning icon for ai development: task"
          },
          {
            "title": "Inputs",
            "desc": "Select relevant data and validate inputs.",
            "imageAlt": "Planning icon for ai development: inputs"
          },
          {
            "title": "Services",
            "desc": "Set contracts for model and tool calls.",
            "imageAlt": "Planning icon for ai development: services"
          }
        ],
        "rightTitle": "AI Delivery Work Checks",
        "features": [
          "Work area: Task",
          "Work area: Inputs",
          "Work area: Services",
          "Work area: Evaluation",
          "Work area: Fallback",
          "Work area: Defined Task",
          "Work area: Tool Boundary",
          "Work area: Output Review",
          "Work area: Define the AI Responsibility",
          "Work area: Connect Data and Tool Boundaries"
        ],
        "btnText": "Scope AI Delivery"
      },
      {
        "badge": "AI Delivery Review",
        "label": "Prepare the handover",
        "amount": "QA",
        "amountUnit": " notes",
        "infoTitle": "AI Delivery Review Points",
        "items": [
          {
            "title": "Evaluation",
            "desc": "Review results on representative tasks.",
            "imageAlt": "Planning icon for ai development: evaluation"
          },
          {
            "title": "Fallback",
            "desc": "Explain recovery when AI cannot proceed.",
            "imageAlt": "Planning icon for ai development: fallback"
          },
          {
            "title": "AI Workflow",
            "desc": "Connect AI output to application controls and review.",
            "imageAlt": "Planning icon for ai development: ai workflow"
          }
        ],
        "rightTitle": "AI Delivery Review Checks",
        "features": [
          "Review: Evaluation",
          "Review: Fallback",
          "Review: Defined Task",
          "Review: Tool Boundary",
          "Review: Output Review",
          "Review: Define the AI Responsibility",
          "Review: Connect Data and Tool Boundaries",
          "Review: Evaluate Useful Outcomes",
          "Review: Task",
          "Review: Inputs"
        ],
        "btnText": "Review AI Delivery"
      }
    ],
    "showAll": "See All Checks ↓",
    "showLess": "See Fewer ↑",
    "previous": "← Previous",
    "next": "Next →",
    "stageLabel": "Stage"
  },
  "/services/it-project-management/": {
    "titleLead": "IT Projects Work Planning",
    "titleRest": "Review the Scope in Stages",
    "intro": "Plan it project management around the work in scope. Connect scope, dependencies and delivery milestones so project teams can follow decisions, progress and the work still ahead.",
    "steps": [
      {
        "badge": "IT Projects Scope",
        "label": "Clarify the requirements",
        "amount": "MAP",
        "amountUnit": " first",
        "infoTitle": "IT Projects Priorities",
        "items": [
          {
            "title": "Agree on the Delivery Scope",
            "desc": "Define project outcomes, acceptance expectations and the people responsible for scope decisions before scheduling implementation.",
            "imageAlt": "Planning icon for it project management: agree on the delivery scope"
          },
          {
            "title": "Track Work and Dependencies",
            "desc": "Keep milestones, blockers and cross-team dependencies connected to the work they affect and the owner who can act.",
            "imageAlt": "Planning icon for it project management: track work and dependencies"
          },
          {
            "title": "Make Changes Reviewable",
            "desc": "Record decisions, risks and scope changes so stakeholders can understand why a delivery plan has changed.",
            "imageAlt": "Planning icon for it project management: make changes reviewable"
          }
        ],
        "rightTitle": "IT Projects Scope Checks",
        "features": [
          "Scope: Agree on the Delivery Scope",
          "Scope: Track Work and Dependencies",
          "Scope: Make Changes Reviewable",
          "Scope: Outcomes",
          "Scope: Plan",
          "Scope: Ownership",
          "Scope: Progress",
          "Scope: Changes",
          "Scope: Delivery Milestones",
          "Scope: Work Ownership"
        ],
        "btnText": "Plan IT Projects"
      },
      {
        "badge": "IT Projects Work",
        "label": "Organize the work",
        "amount": "WORK",
        "amountUnit": " scope",
        "infoTitle": "IT Projects Work Areas",
        "items": [
          {
            "title": "Outcomes",
            "desc": "Agree on outcomes and acceptance criteria.",
            "imageAlt": "Planning icon for it project management: outcomes"
          },
          {
            "title": "Plan",
            "desc": "Sequence milestones and dependencies.",
            "imageAlt": "Planning icon for it project management: plan"
          },
          {
            "title": "Ownership",
            "desc": "Assign work, decisions and escalation owners.",
            "imageAlt": "Planning icon for it project management: ownership"
          }
        ],
        "rightTitle": "IT Projects Work Checks",
        "features": [
          "Work area: Outcomes",
          "Work area: Plan",
          "Work area: Ownership",
          "Work area: Progress",
          "Work area: Changes",
          "Work area: Delivery Milestones",
          "Work area: Work Ownership",
          "Work area: Decision History",
          "Work area: Agree on the Delivery Scope",
          "Work area: Track Work and Dependencies"
        ],
        "btnText": "Scope IT Projects"
      },
      {
        "badge": "IT Projects Review",
        "label": "Prepare the handover",
        "amount": "QA",
        "amountUnit": " notes",
        "infoTitle": "IT Projects Review Points",
        "items": [
          {
            "title": "Progress",
            "desc": "Review completed work and delivery blockers.",
            "imageAlt": "Planning icon for it project management: progress"
          },
          {
            "title": "Changes",
            "desc": "Record scope and schedule decisions.",
            "imageAlt": "Planning icon for it project management: changes"
          },
          {
            "title": "Project Workflow",
            "desc": "Connect delivery plans to owners, decisions and progress.",
            "imageAlt": "Planning icon for it project management: project workflow"
          }
        ],
        "rightTitle": "IT Projects Review Checks",
        "features": [
          "Review: Progress",
          "Review: Changes",
          "Review: Delivery Milestones",
          "Review: Work Ownership",
          "Review: Decision History",
          "Review: Agree on the Delivery Scope",
          "Review: Track Work and Dependencies",
          "Review: Make Changes Reviewable",
          "Review: Outcomes",
          "Review: Plan"
        ],
        "btnText": "Review IT Projects"
      }
    ],
    "showAll": "See All Checks ↓",
    "showLess": "See Fewer ↑",
    "previous": "← Previous",
    "next": "Next →",
    "stageLabel": "Stage"
  },
  "/services/agile-consulting/": {
    "titleLead": "Agile Work Planning",
    "titleRest": "Review the Scope in Stages",
    "intro": "Plan agile consulting around the work in scope. Review how teams plan, build and release software, then shape working practices around dependencies, feedback and delivery responsibilities.",
    "steps": [
      {
        "badge": "Agile Scope",
        "label": "Clarify the requirements",
        "amount": "MAP",
        "amountUnit": " first",
        "infoTitle": "Agile Priorities",
        "items": [
          {
            "title": "Understand the Current Workflow",
            "desc": "Examine how work enters the backlog, moves between teams and reaches release before recommending process changes.",
            "imageAlt": "Planning icon for agile consulting: understand the current workflow"
          },
          {
            "title": "Make Planning Usable",
            "desc": "Connect priorities, acceptance examples and team capacity so planning describes work that can be discussed and reviewed.",
            "imageAlt": "Planning icon for agile consulting: make planning usable"
          },
          {
            "title": "Use Feedback to Adapt",
            "desc": "Bring delivery observations and retrospective actions into the next planning cycle, with an owner for each agreed improvement.",
            "imageAlt": "Planning icon for agile consulting: use feedback to adapt"
          }
        ],
        "rightTitle": "Agile Scope Checks",
        "features": [
          "Scope: Understand the Current Workflow",
          "Scope: Make Planning Usable",
          "Scope: Use Feedback to Adapt",
          "Scope: Observe",
          "Scope: Prioritize",
          "Scope: Coordinate",
          "Scope: Review",
          "Scope: Adapt",
          "Scope: Working Practices",
          "Scope: Delivery Flow"
        ],
        "btnText": "Plan Agile"
      },
      {
        "badge": "Agile Work",
        "label": "Organize the work",
        "amount": "WORK",
        "amountUnit": " scope",
        "infoTitle": "Agile Work Areas",
        "items": [
          {
            "title": "Observe",
            "desc": "Map current planning and release practices.",
            "imageAlt": "Planning icon for agile consulting: observe"
          },
          {
            "title": "Prioritize",
            "desc": "Tie backlog priorities to user needs.",
            "imageAlt": "Planning icon for agile consulting: prioritize"
          },
          {
            "title": "Coordinate",
            "desc": "Identify cross-team dependencies and owners.",
            "imageAlt": "Planning icon for agile consulting: coordinate"
          }
        ],
        "rightTitle": "Agile Work Checks",
        "features": [
          "Work area: Observe",
          "Work area: Prioritize",
          "Work area: Coordinate",
          "Work area: Review",
          "Work area: Adapt",
          "Work area: Working Practices",
          "Work area: Delivery Flow",
          "Work area: Feedback Cycle",
          "Work area: Understand the Current Workflow",
          "Work area: Make Planning Usable"
        ],
        "btnText": "Scope Agile"
      },
      {
        "badge": "Agile Review",
        "label": "Prepare the handover",
        "amount": "QA",
        "amountUnit": " notes",
        "infoTitle": "Agile Review Points",
        "items": [
          {
            "title": "Review",
            "desc": "Review increments against acceptance examples.",
            "imageAlt": "Planning icon for agile consulting: review"
          },
          {
            "title": "Adapt",
            "desc": "Revisit agreed process improvements.",
            "imageAlt": "Planning icon for agile consulting: adapt"
          },
          {
            "title": "Agile Workflow",
            "desc": "Connect team planning to delivery feedback and learning.",
            "imageAlt": "Planning icon for agile consulting: agile workflow"
          }
        ],
        "rightTitle": "Agile Review Checks",
        "features": [
          "Review: Review",
          "Review: Adapt",
          "Review: Working Practices",
          "Review: Delivery Flow",
          "Review: Feedback Cycle",
          "Review: Understand the Current Workflow",
          "Review: Make Planning Usable",
          "Review: Use Feedback to Adapt",
          "Review: Observe",
          "Review: Prioritize"
        ],
        "btnText": "Review Agile"
      }
    ],
    "showAll": "See All Checks ↓",
    "showLess": "See Fewer ↑",
    "previous": "← Previous",
    "next": "Next →",
    "stageLabel": "Stage"
  },
  "/services/microsoft-consulting/": {
    "titleLead": "MS Advice Work Planning",
    "titleRest": "Review the Scope in Stages",
    "intro": "Plan microsoft consulting around the work in scope. Review Microsoft software configuration, information administration and licensing questions in their business and operating context.",
    "steps": [
      {
        "badge": "MS Advice Scope",
        "label": "Clarify the requirements",
        "amount": "MAP",
        "amountUnit": " first",
        "infoTitle": "MS Advice Priorities",
        "items": [
          {
            "title": "Platform Requirements",
            "desc": "Identify the products, users and business tasks relevant to the Microsoft advisory scope.",
            "imageAlt": "Planning icon for microsoft consulting: platform requirements"
          },
          {
            "title": "Configuration Review",
            "desc": "Connect application settings and identity responsibilities to the operating requirements of the environment.",
            "imageAlt": "Planning icon for microsoft consulting: configuration review"
          },
          {
            "title": "Information Administration",
            "desc": "Define ownership and access expectations for information shared across the relevant Microsoft products.",
            "imageAlt": "Planning icon for microsoft consulting: information administration"
          }
        ],
        "rightTitle": "MS Advice Scope Checks",
        "features": [
          "Scope: Product inventory",
          "Scope: Business task mapping",
          "Scope: User requirements",
          "Scope: Platform dependencies",
          "Scope: Configuration choices",
          "Scope: Identity settings",
          "Scope: Administrative roles",
          "Scope: Change responsibilities",
          "Scope: Information ownership",
          "Scope: Data-access requirements"
        ],
        "btnText": "Plan MS Advice"
      },
      {
        "badge": "MS Advice Work",
        "label": "Organize the work",
        "amount": "WORK",
        "amountUnit": " scope",
        "infoTitle": "MS Advice Work Areas",
        "items": [
          {
            "title": "Product inventory",
            "desc": "For microsoft consulting, include business task mapping, user requirements, platform dependencies when defining platform requirements.",
            "imageAlt": "Planning icon for microsoft consulting: product inventory"
          },
          {
            "title": "Configuration choices",
            "desc": "For microsoft consulting, include identity settings, administrative roles, change responsibilities when defining configuration review.",
            "imageAlt": "Planning icon for microsoft consulting: configuration choices"
          },
          {
            "title": "Information ownership",
            "desc": "For microsoft consulting, include data-access requirements, retention questions, cross-product context when defining information administration.",
            "imageAlt": "Planning icon for microsoft consulting: information ownership"
          }
        ],
        "rightTitle": "MS Advice Work Checks",
        "features": [
          "Work area: Platform dependencies",
          "Work area: Configuration choices",
          "Work area: Identity settings",
          "Work area: Administrative roles",
          "Work area: Change responsibilities",
          "Work area: Information ownership",
          "Work area: Data-access requirements",
          "Work area: Retention questions",
          "Work area: Cross-product context",
          "Work area: Usage requirements"
        ],
        "btnText": "Scope MS Advice"
      },
      {
        "badge": "MS Advice Review",
        "label": "Prepare the handover",
        "amount": "QA",
        "amountUnit": " notes",
        "infoTitle": "MS Advice Review Points",
        "items": [
          {
            "title": "License and Handover Context",
            "desc": "Keep licensing questions and recommendations tied to current product terms and the intended usage.",
            "imageAlt": "Planning icon for microsoft consulting: license and handover context"
          },
          {
            "title": "Usage requirements",
            "desc": "Review usage requirements alongside license-term review before agreeing the microsoft consulting handover.",
            "imageAlt": "Planning icon for microsoft consulting: usage requirements"
          },
          {
            "title": "Recommendation rationale",
            "desc": "Keep recommendation rationale and administrator guidance in the microsoft consulting review record.",
            "imageAlt": "Planning icon for microsoft consulting: recommendation rationale"
          }
        ],
        "rightTitle": "MS Advice Review Checks",
        "features": [
          "Review: Administrative roles",
          "Review: Change responsibilities",
          "Review: Information ownership",
          "Review: Data-access requirements",
          "Review: Retention questions",
          "Review: Cross-product context",
          "Review: Usage requirements",
          "Review: License-term review",
          "Review: Recommendation rationale",
          "Review: Administrator guidance"
        ],
        "btnText": "Review MS Advice"
      }
    ],
    "showAll": "See All Checks ↓",
    "showLess": "See Fewer ↑",
    "previous": "← Previous",
    "next": "Next →",
    "stageLabel": "Stage"
  },
  "/services/artificial-intelligence/": {
    "titleLead": "AI Apps Work Planning",
    "titleRest": "Review the Scope in Stages",
    "intro": "Plan ai applications around the work in scope. Connect cognitive services and text processing to defined information boundaries, application actions and human review.",
    "steps": [
      {
        "badge": "AI Apps Scope",
        "label": "Clarify the requirements",
        "amount": "MAP",
        "amountUnit": " first",
        "infoTitle": "AI Apps Priorities",
        "items": [
          {
            "title": "AI Use-case Definition",
            "desc": "Describe the business task and the part of that task an AI capability is expected to assist.",
            "imageAlt": "Planning icon for ai applications: ai use-case definition"
          },
          {
            "title": "Knowledge and Inputs",
            "desc": "Identify relevant records and define the permissions and input checks governing their use.",
            "imageAlt": "Planning icon for ai applications: knowledge and inputs"
          },
          {
            "title": "Controlled Actions",
            "desc": "Connect AI output to application services through explicit contracts and operating rules.",
            "imageAlt": "Planning icon for ai applications: controlled actions"
          }
        ],
        "rightTitle": "AI Apps Scope Checks",
        "features": [
          "Scope: Operational use cases",
          "Scope: Task responsibilities",
          "Scope: Required information",
          "Scope: Review expectations",
          "Scope: Knowledge sources",
          "Scope: Input boundaries",
          "Scope: Information permissions",
          "Scope: Sensitive-data handling",
          "Scope: Service-action contracts",
          "Scope: Automation conditions"
        ],
        "btnText": "Plan AI Apps"
      },
      {
        "badge": "AI Apps Work",
        "label": "Organize the work",
        "amount": "WORK",
        "amountUnit": " scope",
        "infoTitle": "AI Apps Work Areas",
        "items": [
          {
            "title": "Operational use cases",
            "desc": "For ai applications, include task responsibilities, required information, review expectations when defining ai use-case definition.",
            "imageAlt": "Planning icon for ai applications: operational use cases"
          },
          {
            "title": "Knowledge sources",
            "desc": "For ai applications, include input boundaries, information permissions, sensitive-data handling when defining knowledge and inputs.",
            "imageAlt": "Planning icon for ai applications: knowledge sources"
          },
          {
            "title": "Service-action contracts",
            "desc": "For ai applications, include automation conditions, output interpretation, action restrictions when defining controlled actions.",
            "imageAlt": "Planning icon for ai applications: service-action contracts"
          }
        ],
        "rightTitle": "AI Apps Work Checks",
        "features": [
          "Work area: Review expectations",
          "Work area: Knowledge sources",
          "Work area: Input boundaries",
          "Work area: Information permissions",
          "Work area: Sensitive-data handling",
          "Work area: Service-action contracts",
          "Work area: Automation conditions",
          "Work area: Output interpretation",
          "Work area: Action restrictions",
          "Work area: Representative tasks"
        ],
        "btnText": "Scope AI Apps"
      },
      {
        "badge": "AI Apps Review",
        "label": "Prepare the handover",
        "amount": "QA",
        "amountUnit": " notes",
        "infoTitle": "AI Apps Review Points",
        "items": [
          {
            "title": "Evaluation and Recovery",
            "desc": "Review representative outcomes and define how unsuitable or unavailable AI responses are handled.",
            "imageAlt": "Planning icon for ai applications: evaluation and recovery"
          },
          {
            "title": "Representative tasks",
            "desc": "Review representative tasks alongside unsuitable-output review before agreeing the ai applications handover.",
            "imageAlt": "Planning icon for ai applications: representative tasks"
          },
          {
            "title": "Fallback behavior",
            "desc": "Keep fallback behavior and human confirmation in the ai applications review record.",
            "imageAlt": "Planning icon for ai applications: fallback behavior"
          }
        ],
        "rightTitle": "AI Apps Review Checks",
        "features": [
          "Review: Information permissions",
          "Review: Sensitive-data handling",
          "Review: Service-action contracts",
          "Review: Automation conditions",
          "Review: Output interpretation",
          "Review: Action restrictions",
          "Review: Representative tasks",
          "Review: Unsuitable-output review",
          "Review: Fallback behavior",
          "Review: Human confirmation"
        ],
        "btnText": "Review AI Apps"
      }
    ],
    "showAll": "See All Checks ↓",
    "showLess": "See Fewer ↑",
    "previous": "← Previous",
    "next": "Next →",
    "stageLabel": "Stage"
  },
  "/services/infrastructure-services/": {
    "titleLead": "IT Systems Work Planning",
    "titleRest": "Review the Scope in Stages",
    "intro": "Plan it infrastructure around the work in scope. Connect internal and cloud environments to application dependencies, operational signals and maintainable configuration.",
    "steps": [
      {
        "badge": "IT Systems Scope",
        "label": "Clarify the requirements",
        "amount": "MAP",
        "amountUnit": " first",
        "infoTitle": "IT Systems Priorities",
        "items": [
          {
            "title": "Infrastructure Context",
            "desc": "Identify the resources and relationships required to support the intended application workload.",
            "imageAlt": "Planning icon for it infrastructure: infrastructure context"
          },
          {
            "title": "Configuration Work",
            "desc": "Document network, access and system settings with the responsibilities needed to maintain them.",
            "imageAlt": "Planning icon for it infrastructure: configuration work"
          },
          {
            "title": "Operating Observations",
            "desc": "Interpret resource and workload signals using defined thresholds, source context and investigation paths.",
            "imageAlt": "Planning icon for it infrastructure: operating observations"
          }
        ],
        "rightTitle": "IT Systems Scope Checks",
        "features": [
          "Scope: Resource inventory",
          "Scope: Workload relationships",
          "Scope: Environment requirements",
          "Scope: Dependency planning",
          "Scope: System settings",
          "Scope: Network configuration",
          "Scope: Administrative boundaries",
          "Scope: Configuration ownership",
          "Scope: Resource observations",
          "Scope: Threshold definitions"
        ],
        "btnText": "Plan IT Systems"
      },
      {
        "badge": "IT Systems Work",
        "label": "Organize the work",
        "amount": "WORK",
        "amountUnit": " scope",
        "infoTitle": "IT Systems Work Areas",
        "items": [
          {
            "title": "Resource inventory",
            "desc": "For it infrastructure, include workload relationships, environment requirements, dependency planning when defining infrastructure context.",
            "imageAlt": "Planning icon for it infrastructure: resource inventory"
          },
          {
            "title": "System settings",
            "desc": "For it infrastructure, include network configuration, administrative boundaries, configuration ownership when defining configuration work.",
            "imageAlt": "Planning icon for it infrastructure: system settings"
          },
          {
            "title": "Resource observations",
            "desc": "For it infrastructure, include threshold definitions, diagnostic context, investigation duties when defining operating observations.",
            "imageAlt": "Planning icon for it infrastructure: resource observations"
          }
        ],
        "rightTitle": "IT Systems Work Checks",
        "features": [
          "Work area: Dependency planning",
          "Work area: System settings",
          "Work area: Network configuration",
          "Work area: Administrative boundaries",
          "Work area: Configuration ownership",
          "Work area: Resource observations",
          "Work area: Threshold definitions",
          "Work area: Diagnostic context",
          "Work area: Investigation duties",
          "Work area: Maintenance dependencies"
        ],
        "btnText": "Scope IT Systems"
      },
      {
        "badge": "IT Systems Review",
        "label": "Prepare the handover",
        "amount": "QA",
        "amountUnit": " notes",
        "infoTitle": "IT Systems Review Points",
        "items": [
          {
            "title": "Continuity Planning",
            "desc": "Connect maintenance and recovery requirements to the systems and services the infrastructure supports.",
            "imageAlt": "Planning icon for it infrastructure: continuity planning"
          },
          {
            "title": "Maintenance dependencies",
            "desc": "Review maintenance dependencies alongside recovery priorities before agreeing the it infrastructure handover.",
            "imageAlt": "Planning icon for it infrastructure: maintenance dependencies"
          },
          {
            "title": "Restoration checks",
            "desc": "Keep restoration checks and operating documentation in the it infrastructure review record.",
            "imageAlt": "Planning icon for it infrastructure: restoration checks"
          }
        ],
        "rightTitle": "IT Systems Review Checks",
        "features": [
          "Review: Administrative boundaries",
          "Review: Configuration ownership",
          "Review: Resource observations",
          "Review: Threshold definitions",
          "Review: Diagnostic context",
          "Review: Investigation duties",
          "Review: Maintenance dependencies",
          "Review: Recovery priorities",
          "Review: Restoration checks",
          "Review: Operating documentation"
        ],
        "btnText": "Review IT Systems"
      }
    ],
    "showAll": "See All Checks ↓",
    "showLess": "See Fewer ↑",
    "previous": "← Previous",
    "next": "Next →",
    "stageLabel": "Stage"
  },
  "/services/it-help-desk/": {
    "titleLead": "IT Help Desk Work Planning",
    "titleRest": "Review the Scope in Stages",
    "intro": "Plan it help desk around the work in scope. Organize hardware and system questions through clear intake, triage and resolution responsibilities.",
    "steps": [
      {
        "badge": "IT Help Desk Scope",
        "label": "Clarify the requirements",
        "amount": "MAP",
        "amountUnit": " first",
        "infoTitle": "IT Help Desk Priorities",
        "items": [
          {
            "title": "User-request Context",
            "desc": "Capture the user's task, affected equipment and observed symptoms before routing a support request.",
            "imageAlt": "Planning icon for it help desk: user-request context"
          },
          {
            "title": "Tiered Investigation",
            "desc": "Connect initial troubleshooting to the team and escalation path appropriate to the issue.",
            "imageAlt": "Planning icon for it help desk: tiered investigation"
          },
          {
            "title": "Resolution Confirmation",
            "desc": "Record the troubleshooting outcome and check whether the affected user task can proceed.",
            "imageAlt": "Planning icon for it help desk: resolution confirmation"
          }
        ],
        "rightTitle": "IT Help Desk Scope Checks",
        "features": [
          "Scope: User task details",
          "Scope: Equipment context",
          "Scope: Reported symptoms",
          "Scope: Request records",
          "Scope: Initial troubleshooting",
          "Scope: Support-tier boundaries",
          "Scope: Escalation information",
          "Scope: Responsible contacts",
          "Scope: Troubleshooting actions",
          "Scope: Outcome records"
        ],
        "btnText": "Plan IT Help Desk"
      },
      {
        "badge": "IT Help Desk Work",
        "label": "Organize the work",
        "amount": "WORK",
        "amountUnit": " scope",
        "infoTitle": "IT Help Desk Work Areas",
        "items": [
          {
            "title": "User task details",
            "desc": "For it help desk, include equipment context, reported symptoms, request records when defining user-request context.",
            "imageAlt": "Planning icon for it help desk: user task details"
          },
          {
            "title": "Initial troubleshooting",
            "desc": "For it help desk, include support-tier boundaries, escalation information, responsible contacts when defining tiered investigation.",
            "imageAlt": "Planning icon for it help desk: initial troubleshooting"
          },
          {
            "title": "Troubleshooting actions",
            "desc": "For it help desk, include outcome records, user confirmation, unresolved questions when defining resolution confirmation.",
            "imageAlt": "Planning icon for it help desk: troubleshooting actions"
          }
        ],
        "rightTitle": "IT Help Desk Work Checks",
        "features": [
          "Work area: Request records",
          "Work area: Initial troubleshooting",
          "Work area: Support-tier boundaries",
          "Work area: Escalation information",
          "Work area: Responsible contacts",
          "Work area: Troubleshooting actions",
          "Work area: Outcome records",
          "Work area: User confirmation",
          "Work area: Unresolved questions",
          "Work area: Reusable support notes"
        ],
        "btnText": "Scope IT Help Desk"
      },
      {
        "badge": "IT Help Desk Review",
        "label": "Prepare the handover",
        "amount": "QA",
        "amountUnit": " notes",
        "infoTitle": "IT Help Desk Review Points",
        "items": [
          {
            "title": "Help-desk Knowledge",
            "desc": "Maintain explanations and recurring-issue information that can support later requests.",
            "imageAlt": "Planning icon for it help desk: help-desk knowledge"
          },
          {
            "title": "Reusable support notes",
            "desc": "Review reusable support notes alongside recurring user issues before agreeing the it help desk handover.",
            "imageAlt": "Planning icon for it help desk: reusable support notes"
          },
          {
            "title": "Knowledge maintenance",
            "desc": "Keep knowledge maintenance and request follow-up in the it help desk review record.",
            "imageAlt": "Planning icon for it help desk: knowledge maintenance"
          }
        ],
        "rightTitle": "IT Help Desk Review Checks",
        "features": [
          "Review: Escalation information",
          "Review: Responsible contacts",
          "Review: Troubleshooting actions",
          "Review: Outcome records",
          "Review: User confirmation",
          "Review: Unresolved questions",
          "Review: Reusable support notes",
          "Review: Recurring user issues",
          "Review: Knowledge maintenance",
          "Review: Request follow-up"
        ],
        "btnText": "Review IT Help Desk"
      }
    ],
    "showAll": "See All Checks ↓",
    "showLess": "See Fewer ↑",
    "previous": "← Previous",
    "next": "Next →",
    "stageLabel": "Stage"
  },
  "/services/compliance-services/": {
    "titleLead": "Controls Work Planning",
    "titleRest": "Review the Scope in Stages",
    "intro": "Plan compliance review around the work in scope. Translate applicable information-handling requirements into system settings, review responsibilities and evidence that teams can inspect.",
    "steps": [
      {
        "badge": "Controls Scope",
        "label": "Clarify the requirements",
        "amount": "MAP",
        "amountUnit": " first",
        "infoTitle": "Controls Priorities",
        "items": [
          {
            "title": "Map Requirements to Systems",
            "desc": "Identify the obligations relevant to the system, its information and its operating environment before selecting controls.",
            "imageAlt": "Planning icon for compliance review: map requirements to systems"
          },
          {
            "title": "Review Configuration Choices",
            "desc": "Connect access, retention and logging settings to documented requirements and the people responsible for maintaining them.",
            "imageAlt": "Planning icon for compliance review: review configuration choices"
          },
          {
            "title": "Organize Control Evidence",
            "desc": "Keep review records, exceptions and remediation work connected to the requirement they address.",
            "imageAlt": "Planning icon for compliance review: organize control evidence"
          }
        ],
        "rightTitle": "Controls Scope Checks",
        "features": [
          "Scope: Map Requirements to Systems",
          "Scope: Review Configuration Choices",
          "Scope: Organize Control Evidence",
          "Scope: Requirements",
          "Scope: Controls",
          "Scope: Evidence",
          "Scope: Exceptions",
          "Scope: Reassessment",
          "Scope: Control Scope",
          "Scope: Review Evidence"
        ],
        "btnText": "Plan Controls"
      },
      {
        "badge": "Controls Work",
        "label": "Organize the work",
        "amount": "WORK",
        "amountUnit": " scope",
        "infoTitle": "Controls Work Areas",
        "items": [
          {
            "title": "Requirements",
            "desc": "Identify applicable information requirements.",
            "imageAlt": "Planning icon for compliance review: requirements"
          },
          {
            "title": "Controls",
            "desc": "Map requirements to system settings.",
            "imageAlt": "Planning icon for compliance review: controls"
          },
          {
            "title": "Evidence",
            "desc": "Collect evidence of control operation.",
            "imageAlt": "Planning icon for compliance review: evidence"
          }
        ],
        "rightTitle": "Controls Work Checks",
        "features": [
          "Work area: Requirements",
          "Work area: Controls",
          "Work area: Evidence",
          "Work area: Exceptions",
          "Work area: Reassessment",
          "Work area: Control Scope",
          "Work area: Review Evidence",
          "Work area: Remediation Work",
          "Work area: Map Requirements to Systems",
          "Work area: Review Configuration Choices"
        ],
        "btnText": "Scope Controls"
      },
      {
        "badge": "Controls Review",
        "label": "Prepare the handover",
        "amount": "QA",
        "amountUnit": " notes",
        "infoTitle": "Controls Review Points",
        "items": [
          {
            "title": "Exceptions",
            "desc": "Assign remediation of identified gaps.",
            "imageAlt": "Planning icon for compliance review: exceptions"
          },
          {
            "title": "Reassessment",
            "desc": "Revisit controls when requirements change.",
            "imageAlt": "Planning icon for compliance review: reassessment"
          },
          {
            "title": "Controls Workflow",
            "desc": "Link requirements, system settings and review evidence.",
            "imageAlt": "Planning icon for compliance review: controls workflow"
          }
        ],
        "rightTitle": "Controls Review Checks",
        "features": [
          "Review: Exceptions",
          "Review: Reassessment",
          "Review: Control Scope",
          "Review: Review Evidence",
          "Review: Remediation Work",
          "Review: Map Requirements to Systems",
          "Review: Review Configuration Choices",
          "Review: Organize Control Evidence",
          "Review: Requirements",
          "Review: Controls"
        ],
        "btnText": "Review Controls"
      }
    ],
    "showAll": "See All Checks ↓",
    "showLess": "See Fewer ↑",
    "previous": "← Previous",
    "next": "Next →",
    "stageLabel": "Stage"
  },
  "/services/security-testing/": {
    "titleLead": "App Security Work Planning",
    "titleRest": "Review the Scope in Stages",
    "intro": "Plan security testing around the work in scope. Evaluate application exposure and access behavior within a defined scope, keeping observations connected to corrective work.",
    "steps": [
      {
        "badge": "App Security Scope",
        "label": "Clarify the requirements",
        "amount": "MAP",
        "amountUnit": " first",
        "infoTitle": "App Security Priorities",
        "items": [
          {
            "title": "Assessment Preparation",
            "desc": "Define target systems, expected controls and the conditions under which security checks will run.",
            "imageAlt": "Planning icon for security testing: assessment preparation"
          },
          {
            "title": "Exposure Checks",
            "desc": "Inspect relevant entry points and configuration with evidence of the conditions actually observed.",
            "imageAlt": "Planning icon for security testing: exposure checks"
          },
          {
            "title": "Access Verification",
            "desc": "Check how identities and permissions govern information and sensitive application actions.",
            "imageAlt": "Planning icon for security testing: access verification"
          }
        ],
        "rightTitle": "App Security Scope Checks",
        "features": [
          "Scope: Assessment targets",
          "Scope: Control requirements",
          "Scope: Test conditions",
          "Scope: Authorized boundaries",
          "Scope: Entry-point review",
          "Scope: Configuration checks",
          "Scope: Observed exposure",
          "Scope: Evidence context",
          "Scope: Identity scenarios",
          "Scope: Permission checks"
        ],
        "btnText": "Plan App Security"
      },
      {
        "badge": "App Security Work",
        "label": "Organize the work",
        "amount": "WORK",
        "amountUnit": " scope",
        "infoTitle": "App Security Work Areas",
        "items": [
          {
            "title": "Assessment targets",
            "desc": "For security testing, include control requirements, test conditions, authorized boundaries when defining assessment preparation.",
            "imageAlt": "Planning icon for security testing: assessment targets"
          },
          {
            "title": "Entry-point review",
            "desc": "For security testing, include configuration checks, observed exposure, evidence context when defining exposure checks.",
            "imageAlt": "Planning icon for security testing: entry-point review"
          },
          {
            "title": "Identity scenarios",
            "desc": "For security testing, include permission checks, protected information, sensitive operation paths when defining access verification.",
            "imageAlt": "Planning icon for security testing: identity scenarios"
          }
        ],
        "rightTitle": "App Security Work Checks",
        "features": [
          "Work area: Authorized boundaries",
          "Work area: Entry-point review",
          "Work area: Configuration checks",
          "Work area: Observed exposure",
          "Work area: Evidence context",
          "Work area: Identity scenarios",
          "Work area: Permission checks",
          "Work area: Protected information",
          "Work area: Sensitive operation paths",
          "Work area: Version references"
        ],
        "btnText": "Scope App Security"
      },
      {
        "badge": "App Security Review",
        "label": "Prepare the handover",
        "amount": "QA",
        "amountUnit": " notes",
        "infoTitle": "App Security Review Points",
        "items": [
          {
            "title": "Finding Follow-up",
            "desc": "Keep weaknesses, corrective changes and retest outcomes associated with the assessed system version.",
            "imageAlt": "Planning icon for security testing: finding follow-up"
          },
          {
            "title": "Version references",
            "desc": "Review version references alongside weakness descriptions before agreeing the security testing handover.",
            "imageAlt": "Planning icon for security testing: version references"
          },
          {
            "title": "Corrective work",
            "desc": "Keep corrective work and retest evidence in the security testing review record.",
            "imageAlt": "Planning icon for security testing: corrective work"
          }
        ],
        "rightTitle": "App Security Review Checks",
        "features": [
          "Review: Observed exposure",
          "Review: Evidence context",
          "Review: Identity scenarios",
          "Review: Permission checks",
          "Review: Protected information",
          "Review: Sensitive operation paths",
          "Review: Version references",
          "Review: Weakness descriptions",
          "Review: Corrective work",
          "Review: Retest evidence"
        ],
        "btnText": "Review App Security"
      }
    ],
    "showAll": "See All Checks ↓",
    "showLess": "See Fewer ↑",
    "previous": "← Previous",
    "next": "Next →",
    "stageLabel": "Stage"
  },
  "/data-science-ops/": {
    "titleLead": "Data Ops Work Planning",
    "titleRest": "Review the Scope in Stages",
    "intro": "Plan data science operations around the work in scope. Keep analytical preparation, model artifacts and execution records connected through repeatable operating steps.",
    "steps": [
      {
        "badge": "Data Ops Scope",
        "label": "Clarify the requirements",
        "amount": "MAP",
        "amountUnit": " first",
        "infoTitle": "Data Ops Priorities",
        "items": [
          {
            "title": "Analytical Preparation",
            "desc": "Document dataset cleanup and validation so modeling inputs can be recreated and inspected.",
            "imageAlt": "Planning icon for data science operations: analytical preparation"
          },
          {
            "title": "Artifact Context",
            "desc": "Associate model files and execution settings with the data and process that produced them.",
            "imageAlt": "Planning icon for data science operations: artifact context"
          },
          {
            "title": "Run Coordination",
            "desc": "Define how analytical jobs are started, checked and investigated when processing does not complete.",
            "imageAlt": "Planning icon for data science operations: run coordination"
          }
        ],
        "rightTitle": "Data Ops Scope Checks",
        "features": [
          "Scope: Dataset cleanup rules",
          "Scope: Preparation validation",
          "Scope: Transformation versions",
          "Scope: Input recreation",
          "Scope: Model artifact records",
          "Scope: Dataset versions",
          "Scope: Execution settings",
          "Scope: Training-run context",
          "Scope: Job dependencies",
          "Scope: Execution records"
        ],
        "btnText": "Plan Data Ops"
      },
      {
        "badge": "Data Ops Work",
        "label": "Organize the work",
        "amount": "WORK",
        "amountUnit": " scope",
        "infoTitle": "Data Ops Work Areas",
        "items": [
          {
            "title": "Dataset cleanup rules",
            "desc": "For data science operations, include preparation validation, transformation versions, input recreation when defining analytical preparation.",
            "imageAlt": "Planning icon for data science operations: dataset cleanup rules"
          },
          {
            "title": "Model artifact records",
            "desc": "For data science operations, include dataset versions, execution settings, training-run context when defining artifact context.",
            "imageAlt": "Planning icon for data science operations: model artifact records"
          },
          {
            "title": "Job dependencies",
            "desc": "For data science operations, include execution records, failed-run handling, run ownership when defining run coordination.",
            "imageAlt": "Planning icon for data science operations: job dependencies"
          }
        ],
        "rightTitle": "Data Ops Work Checks",
        "features": [
          "Work area: Input recreation",
          "Work area: Model artifact records",
          "Work area: Dataset versions",
          "Work area: Execution settings",
          "Work area: Training-run context",
          "Work area: Job dependencies",
          "Work area: Execution records",
          "Work area: Failed-run handling",
          "Work area: Run ownership",
          "Work area: Input-change review"
        ],
        "btnText": "Scope Data Ops"
      },
      {
        "badge": "Data Ops Review",
        "label": "Prepare the handover",
        "amount": "QA",
        "amountUnit": " notes",
        "infoTitle": "Data Ops Review Points",
        "items": [
          {
            "title": "Operational Evaluation",
            "desc": "Review changing inputs and model behavior using the context of the active analytical workflow.",
            "imageAlt": "Planning icon for data science operations: operational evaluation"
          },
          {
            "title": "Input-change review",
            "desc": "Review input-change review alongside model observations before agreeing the data science operations handover.",
            "imageAlt": "Planning icon for data science operations: input-change review"
          },
          {
            "title": "Evaluation history",
            "desc": "Keep evaluation history and operating follow-up in the data science operations review record.",
            "imageAlt": "Planning icon for data science operations: evaluation history"
          }
        ],
        "rightTitle": "Data Ops Review Checks",
        "features": [
          "Review: Execution settings",
          "Review: Training-run context",
          "Review: Job dependencies",
          "Review: Execution records",
          "Review: Failed-run handling",
          "Review: Run ownership",
          "Review: Input-change review",
          "Review: Model observations",
          "Review: Evaluation history",
          "Review: Operating follow-up"
        ],
        "btnText": "Review Data Ops"
      }
    ],
    "showAll": "See All Checks ↓",
    "showLess": "See Fewer ↑",
    "previous": "← Previous",
    "next": "Next →",
    "stageLabel": "Stage"
  },
  "/ml-engineering/": {
    "titleLead": "ML Systems Work Planning",
    "titleRest": "Review the Scope in Stages",
    "intro": "Plan ml engineering around the work in scope. Connect training pipelines and model evaluation to the interfaces and operating checks required for application use.",
    "steps": [
      {
        "badge": "ML Systems Scope",
        "label": "Clarify the requirements",
        "amount": "MAP",
        "amountUnit": " first",
        "infoTitle": "ML Systems Priorities",
        "items": [
          {
            "title": "Training Pipelines",
            "desc": "Structure feature preparation and model training with documented settings and artifact outputs.",
            "imageAlt": "Planning icon for ml engineering: training pipelines"
          },
          {
            "title": "Model Checks",
            "desc": "Evaluate trained artifacts against representative tasks and the error behavior relevant to the application.",
            "imageAlt": "Planning icon for ml engineering: model checks"
          },
          {
            "title": "Prediction Services",
            "desc": "Package model inputs and outputs into service contracts with explicit unsuccessful-response behavior.",
            "imageAlt": "Planning icon for ml engineering: prediction services"
          }
        ],
        "rightTitle": "ML Systems Scope Checks",
        "features": [
          "Scope: Feature transformations",
          "Scope: Training configuration",
          "Scope: Artifact storage",
          "Scope: Run reproducibility",
          "Scope: Evaluation datasets",
          "Scope: Task-specific errors",
          "Scope: Artifact comparisons",
          "Scope: Acceptance thresholds",
          "Scope: Inference inputs",
          "Scope: Prediction responses"
        ],
        "btnText": "Plan ML Systems"
      },
      {
        "badge": "ML Systems Work",
        "label": "Organize the work",
        "amount": "WORK",
        "amountUnit": " scope",
        "infoTitle": "ML Systems Work Areas",
        "items": [
          {
            "title": "Feature transformations",
            "desc": "For ml engineering, include training configuration, artifact storage, run reproducibility when defining training pipelines.",
            "imageAlt": "Planning icon for ml engineering: feature transformations"
          },
          {
            "title": "Evaluation datasets",
            "desc": "For ml engineering, include task-specific errors, artifact comparisons, acceptance thresholds when defining model checks.",
            "imageAlt": "Planning icon for ml engineering: evaluation datasets"
          },
          {
            "title": "Inference inputs",
            "desc": "For ml engineering, include prediction responses, service failures, consumer expectations when defining prediction services.",
            "imageAlt": "Planning icon for ml engineering: inference inputs"
          }
        ],
        "rightTitle": "ML Systems Work Checks",
        "features": [
          "Work area: Run reproducibility",
          "Work area: Evaluation datasets",
          "Work area: Task-specific errors",
          "Work area: Artifact comparisons",
          "Work area: Acceptance thresholds",
          "Work area: Inference inputs",
          "Work area: Prediction responses",
          "Work area: Service failures",
          "Work area: Consumer expectations",
          "Work area: Model-version changes"
        ],
        "btnText": "Scope ML Systems"
      },
      {
        "badge": "ML Systems Review",
        "label": "Prepare the handover",
        "amount": "QA",
        "amountUnit": " notes",
        "infoTitle": "ML Systems Review Points",
        "items": [
          {
            "title": "Model Operations",
            "desc": "Plan model-version changes and investigation of data or prediction issues after deployment.",
            "imageAlt": "Planning icon for ml engineering: model operations"
          },
          {
            "title": "Model-version changes",
            "desc": "Review model-version changes alongside deployment checks before agreeing the ml engineering handover.",
            "imageAlt": "Planning icon for ml engineering: model-version changes"
          },
          {
            "title": "Prediction diagnostics",
            "desc": "Keep prediction diagnostics and operational review in the ml engineering review record.",
            "imageAlt": "Planning icon for ml engineering: prediction diagnostics"
          }
        ],
        "rightTitle": "ML Systems Review Checks",
        "features": [
          "Review: Artifact comparisons",
          "Review: Acceptance thresholds",
          "Review: Inference inputs",
          "Review: Prediction responses",
          "Review: Service failures",
          "Review: Consumer expectations",
          "Review: Model-version changes",
          "Review: Deployment checks",
          "Review: Prediction diagnostics",
          "Review: Operational review"
        ],
        "btnText": "Review ML Systems"
      }
    ],
    "showAll": "See All Checks ↓",
    "showLess": "See Fewer ↑",
    "previous": "← Previous",
    "next": "Next →",
    "stageLabel": "Stage"
  },
  "/blockchain-tech/": {
    "titleLead": "Blockchain Work Planning",
    "titleRest": "Review the Scope in Stages",
    "intro": "Plan blockchain around the work in scope. Define distributed-ledger work through participant responsibilities, validation rules and the application actions tied to a transaction.",
    "steps": [
      {
        "badge": "Blockchain Scope",
        "label": "Clarify the requirements",
        "amount": "MAP",
        "amountUnit": " first",
        "infoTitle": "Blockchain Priorities",
        "items": [
          {
            "title": "Ledger Requirements",
            "desc": "Clarify what is recorded and why a shared ledger is appropriate for the intended business process.",
            "imageAlt": "Planning icon for blockchain: ledger requirements"
          },
          {
            "title": "Transaction Validation",
            "desc": "Define transaction formats and validation responsibilities before connecting records across participants.",
            "imageAlt": "Planning icon for blockchain: transaction validation"
          },
          {
            "title": "Application Interfaces",
            "desc": "Connect ledger events and token-related records to the services and user actions that consume them.",
            "imageAlt": "Planning icon for blockchain: application interfaces"
          }
        ],
        "rightTitle": "Blockchain Scope Checks",
        "features": [
          "Scope: Ledger purpose",
          "Scope: Recorded information",
          "Scope: Participant roles",
          "Scope: Application requirements",
          "Scope: Transaction formats",
          "Scope: Validation conditions",
          "Scope: Participant permissions",
          "Scope: State-change rules",
          "Scope: Ledger-event interfaces",
          "Scope: Token-record context"
        ],
        "btnText": "Plan Blockchain"
      },
      {
        "badge": "Blockchain Work",
        "label": "Organize the work",
        "amount": "WORK",
        "amountUnit": " scope",
        "infoTitle": "Blockchain Work Areas",
        "items": [
          {
            "title": "Ledger purpose",
            "desc": "For blockchain, include recorded information, participant roles, application requirements when defining ledger requirements.",
            "imageAlt": "Planning icon for blockchain: ledger purpose"
          },
          {
            "title": "Transaction formats",
            "desc": "For blockchain, include validation conditions, participant permissions, state-change rules when defining transaction validation.",
            "imageAlt": "Planning icon for blockchain: transaction formats"
          },
          {
            "title": "Ledger-event interfaces",
            "desc": "For blockchain, include token-record context, service integration, user-action mapping when defining application interfaces.",
            "imageAlt": "Planning icon for blockchain: ledger-event interfaces"
          }
        ],
        "rightTitle": "Blockchain Work Checks",
        "features": [
          "Work area: Application requirements",
          "Work area: Transaction formats",
          "Work area: Validation conditions",
          "Work area: Participant permissions",
          "Work area: State-change rules",
          "Work area: Ledger-event interfaces",
          "Work area: Token-record context",
          "Work area: Service integration",
          "Work area: User-action mapping",
          "Work area: Network assumptions"
        ],
        "btnText": "Scope Blockchain"
      },
      {
        "badge": "Blockchain Review",
        "label": "Prepare the handover",
        "amount": "QA",
        "amountUnit": " notes",
        "infoTitle": "Blockchain Review Points",
        "items": [
          {
            "title": "Operating Constraints",
            "desc": "Review the network dependencies, failure conditions and key-management duties of the ledger environment.",
            "imageAlt": "Planning icon for blockchain: operating constraints"
          },
          {
            "title": "Network assumptions",
            "desc": "Review network assumptions alongside failure conditions before agreeing the blockchain handover.",
            "imageAlt": "Planning icon for blockchain: network assumptions"
          },
          {
            "title": "Key-management duties",
            "desc": "Keep key-management duties and transaction review in the blockchain review record.",
            "imageAlt": "Planning icon for blockchain: key-management duties"
          }
        ],
        "rightTitle": "Blockchain Review Checks",
        "features": [
          "Review: Participant permissions",
          "Review: State-change rules",
          "Review: Ledger-event interfaces",
          "Review: Token-record context",
          "Review: Service integration",
          "Review: User-action mapping",
          "Review: Network assumptions",
          "Review: Failure conditions",
          "Review: Key-management duties",
          "Review: Transaction review"
        ],
        "btnText": "Review Blockchain"
      }
    ],
    "showAll": "See All Checks ↓",
    "showLess": "See Fewer ↑",
    "previous": "← Previous",
    "next": "Next →",
    "stageLabel": "Stage"
  },
  "/big-data-systems/": {
    "titleLead": "Data Systems Work Planning",
    "titleRest": "Review the Scope in Stages",
    "intro": "Plan big data systems around the work in scope. Structure cloud repositories and parallel processing around the records, workload boundaries and consumers the platform must support.",
    "steps": [
      {
        "badge": "Data Systems Scope",
        "label": "Clarify the requirements",
        "amount": "MAP",
        "amountUnit": " first",
        "infoTitle": "Data Systems Priorities",
        "items": [
          {
            "title": "Repository Structure",
            "desc": "Organize varied enterprise datasets with clear identifiers, storage responsibilities and source context.",
            "imageAlt": "Planning icon for big data systems: repository structure"
          },
          {
            "title": "Parallel Workloads",
            "desc": "Define how processing tasks and data partitions relate before distributing work across the platform.",
            "imageAlt": "Planning icon for big data systems: parallel workloads"
          },
          {
            "title": "Data Consumption",
            "desc": "Connect processed records to documented access patterns and the downstream tools that use them.",
            "imageAlt": "Planning icon for big data systems: data consumption"
          }
        ],
        "rightTitle": "Data Systems Scope Checks",
        "features": [
          "Scope: Dataset organization",
          "Scope: Storage boundaries",
          "Scope: Source identifiers",
          "Scope: Record-format context",
          "Scope: Task partitioning",
          "Scope: Processing dependencies",
          "Scope: Parallel-stage inputs",
          "Scope: Workload configuration",
          "Scope: Consumer access needs",
          "Scope: Published data formats"
        ],
        "btnText": "Plan Data Systems"
      },
      {
        "badge": "Data Systems Work",
        "label": "Organize the work",
        "amount": "WORK",
        "amountUnit": " scope",
        "infoTitle": "Data Systems Work Areas",
        "items": [
          {
            "title": "Dataset organization",
            "desc": "For big data systems, include storage boundaries, source identifiers, record-format context when defining repository structure.",
            "imageAlt": "Planning icon for big data systems: dataset organization"
          },
          {
            "title": "Task partitioning",
            "desc": "For big data systems, include processing dependencies, parallel-stage inputs, workload configuration when defining parallel workloads.",
            "imageAlt": "Planning icon for big data systems: task partitioning"
          },
          {
            "title": "Consumer access needs",
            "desc": "For big data systems, include published data formats, dataset definitions, downstream interfaces when defining data consumption.",
            "imageAlt": "Planning icon for big data systems: consumer access needs"
          }
        ],
        "rightTitle": "Data Systems Work Checks",
        "features": [
          "Work area: Record-format context",
          "Work area: Task partitioning",
          "Work area: Processing dependencies",
          "Work area: Parallel-stage inputs",
          "Work area: Workload configuration",
          "Work area: Consumer access needs",
          "Work area: Published data formats",
          "Work area: Dataset definitions",
          "Work area: Downstream interfaces",
          "Work area: Processing diagnostics"
        ],
        "btnText": "Scope Data Systems"
      },
      {
        "badge": "Data Systems Review",
        "label": "Prepare the handover",
        "amount": "QA",
        "amountUnit": " notes",
        "infoTitle": "Data Systems Review Points",
        "items": [
          {
            "title": "Platform Diagnostics",
            "desc": "Keep processing failures and capacity assumptions visible to the team operating the data environment.",
            "imageAlt": "Planning icon for big data systems: platform diagnostics"
          },
          {
            "title": "Processing diagnostics",
            "desc": "Review processing diagnostics alongside capacity assumptions before agreeing the big data systems handover.",
            "imageAlt": "Planning icon for big data systems: processing diagnostics"
          },
          {
            "title": "Run-failure context",
            "desc": "Keep run-failure context and platform maintenance in the big data systems review record.",
            "imageAlt": "Planning icon for big data systems: run-failure context"
          }
        ],
        "rightTitle": "Data Systems Review Checks",
        "features": [
          "Review: Parallel-stage inputs",
          "Review: Workload configuration",
          "Review: Consumer access needs",
          "Review: Published data formats",
          "Review: Dataset definitions",
          "Review: Downstream interfaces",
          "Review: Processing diagnostics",
          "Review: Capacity assumptions",
          "Review: Run-failure context",
          "Review: Platform maintenance"
        ],
        "btnText": "Review Data Systems"
      }
    ],
    "showAll": "See All Checks ↓",
    "showLess": "See Fewer ↑",
    "previous": "← Previous",
    "next": "Next →",
    "stageLabel": "Stage"
  },
  "/vr-enterprise/": {
    "titleLead": "VR Work Planning",
    "titleRest": "Review the Scope in Stages",
    "intro": "Plan virtual reality around the work in scope. Connect virtual environments and interaction rules to the onboarding, prototyping or training activity the experience supports.",
    "steps": [
      {
        "badge": "VR Scope",
        "label": "Clarify the requirements",
        "amount": "MAP",
        "amountUnit": " first",
        "infoTitle": "VR Priorities",
        "items": [
          {
            "title": "Training Scenarios",
            "desc": "Define the participant task and learning context before constructing a virtual training sequence.",
            "imageAlt": "Planning icon for virtual reality: training scenarios"
          },
          {
            "title": "Virtual Environments",
            "desc": "Organize spatial content and scene transitions around understandable movement and task context.",
            "imageAlt": "Planning icon for virtual reality: virtual environments"
          },
          {
            "title": "Participant Interaction",
            "desc": "Describe how users manipulate objects and receive feedback throughout the virtual task.",
            "imageAlt": "Planning icon for virtual reality: participant interaction"
          }
        ],
        "rightTitle": "VR Scope Checks",
        "features": [
          "Scope: Participant objectives",
          "Scope: Training sequences",
          "Scope: Scenario boundaries",
          "Scope: Review criteria",
          "Scope: Scene organization",
          "Scope: Spatial relationships",
          "Scope: Navigation cues",
          "Scope: Environment transitions",
          "Scope: Object interactions",
          "Scope: Input-device behavior"
        ],
        "btnText": "Plan VR"
      },
      {
        "badge": "VR Work",
        "label": "Organize the work",
        "amount": "WORK",
        "amountUnit": " scope",
        "infoTitle": "VR Work Areas",
        "items": [
          {
            "title": "Participant objectives",
            "desc": "For virtual reality, include training sequences, scenario boundaries, review criteria when defining training scenarios.",
            "imageAlt": "Planning icon for virtual reality: participant objectives"
          },
          {
            "title": "Scene organization",
            "desc": "For virtual reality, include spatial relationships, navigation cues, environment transitions when defining virtual environments.",
            "imageAlt": "Planning icon for virtual reality: scene organization"
          },
          {
            "title": "Object interactions",
            "desc": "For virtual reality, include input-device behavior, task feedback, session interruptions when defining participant interaction.",
            "imageAlt": "Planning icon for virtual reality: object interactions"
          }
        ],
        "rightTitle": "VR Work Checks",
        "features": [
          "Work area: Review criteria",
          "Work area: Scene organization",
          "Work area: Spatial relationships",
          "Work area: Navigation cues",
          "Work area: Environment transitions",
          "Work area: Object interactions",
          "Work area: Input-device behavior",
          "Work area: Task feedback",
          "Work area: Session interruptions",
          "Work area: Headset requirements"
        ],
        "btnText": "Scope VR"
      },
      {
        "badge": "VR Review",
        "label": "Prepare the handover",
        "amount": "QA",
        "amountUnit": " notes",
        "infoTitle": "VR Review Points",
        "items": [
          {
            "title": "Experience Evaluation",
            "desc": "Review the supported hardware and participant journey before interpreting training observations.",
            "imageAlt": "Planning icon for virtual reality: experience evaluation"
          },
          {
            "title": "Headset requirements",
            "desc": "Review headset requirements alongside scenario walkthroughs before agreeing the virtual reality handover.",
            "imageAlt": "Planning icon for virtual reality: headset requirements"
          },
          {
            "title": "Participant observations",
            "desc": "Keep participant observations and session handover in the virtual reality review record.",
            "imageAlt": "Planning icon for virtual reality: participant observations"
          }
        ],
        "rightTitle": "VR Review Checks",
        "features": [
          "Review: Navigation cues",
          "Review: Environment transitions",
          "Review: Object interactions",
          "Review: Input-device behavior",
          "Review: Task feedback",
          "Review: Session interruptions",
          "Review: Headset requirements",
          "Review: Scenario walkthroughs",
          "Review: Participant observations",
          "Review: Session handover"
        ],
        "btnText": "Review VR"
      }
    ],
    "showAll": "See All Checks ↓",
    "showLess": "See Fewer ↑",
    "previous": "← Previous",
    "next": "Next →",
    "stageLabel": "Stage"
  },
  "/cloud-native/": {
    "titleLead": "Cloud Apps Work Planning",
    "titleRest": "Review the Scope in Stages",
    "intro": "Plan cloud native software around the work in scope. Design application responsibilities and deployment context together so connected cloud services have clear data and operating boundaries.",
    "steps": [
      {
        "badge": "Cloud Apps Scope",
        "label": "Clarify the requirements",
        "amount": "MAP",
        "amountUnit": " first",
        "infoTitle": "Cloud Apps Priorities",
        "items": [
          {
            "title": "Service Boundaries",
            "desc": "Divide application work around explicit capabilities and the data each service is responsible for.",
            "imageAlt": "Planning icon for cloud native software: service boundaries"
          },
          {
            "title": "Tenant Context",
            "desc": "Define account and tenant relationships where the application serves multiple organizations.",
            "imageAlt": "Planning icon for cloud native software: tenant context"
          },
          {
            "title": "Deployment Work",
            "desc": "Connect service artifacts and environment settings to a reviewable software-release process.",
            "imageAlt": "Planning icon for cloud native software: deployment work"
          }
        ],
        "rightTitle": "Cloud Apps Scope Checks",
        "features": [
          "Scope: Capability boundaries",
          "Scope: Service data ownership",
          "Scope: Interface responsibilities",
          "Scope: Dependency contracts",
          "Scope: Tenant identifiers",
          "Scope: Account relationships",
          "Scope: Data-isolation rules",
          "Scope: Shared-service context",
          "Scope: Service artifacts",
          "Scope: Environment settings"
        ],
        "btnText": "Plan Cloud Apps"
      },
      {
        "badge": "Cloud Apps Work",
        "label": "Organize the work",
        "amount": "WORK",
        "amountUnit": " scope",
        "infoTitle": "Cloud Apps Work Areas",
        "items": [
          {
            "title": "Capability boundaries",
            "desc": "For cloud native software, include service data ownership, interface responsibilities, dependency contracts when defining service boundaries.",
            "imageAlt": "Planning icon for cloud native software: capability boundaries"
          },
          {
            "title": "Tenant identifiers",
            "desc": "For cloud native software, include account relationships, data-isolation rules, shared-service context when defining tenant context.",
            "imageAlt": "Planning icon for cloud native software: tenant identifiers"
          },
          {
            "title": "Service artifacts",
            "desc": "For cloud native software, include environment settings, release orchestration, deployment verification when defining deployment work.",
            "imageAlt": "Planning icon for cloud native software: service artifacts"
          }
        ],
        "rightTitle": "Cloud Apps Work Checks",
        "features": [
          "Work area: Dependency contracts",
          "Work area: Tenant identifiers",
          "Work area: Account relationships",
          "Work area: Data-isolation rules",
          "Work area: Shared-service context",
          "Work area: Service artifacts",
          "Work area: Environment settings",
          "Work area: Release orchestration",
          "Work area: Deployment verification",
          "Work area: Service observations"
        ],
        "btnText": "Scope Cloud Apps"
      },
      {
        "badge": "Cloud Apps Review",
        "label": "Prepare the handover",
        "amount": "QA",
        "amountUnit": " notes",
        "infoTitle": "Cloud Apps Review Points",
        "items": [
          {
            "title": "Runtime Behavior",
            "desc": "Plan diagnostics and recovery paths around the dependencies and failure conditions of connected services.",
            "imageAlt": "Planning icon for cloud native software: runtime behavior"
          },
          {
            "title": "Service observations",
            "desc": "Review service observations alongside dependency failures before agreeing the cloud native software handover.",
            "imageAlt": "Planning icon for cloud native software: service observations"
          },
          {
            "title": "Recovery behavior",
            "desc": "Keep recovery behavior and operating responsibilities in the cloud native software review record.",
            "imageAlt": "Planning icon for cloud native software: recovery behavior"
          }
        ],
        "rightTitle": "Cloud Apps Review Checks",
        "features": [
          "Review: Data-isolation rules",
          "Review: Shared-service context",
          "Review: Service artifacts",
          "Review: Environment settings",
          "Review: Release orchestration",
          "Review: Deployment verification",
          "Review: Service observations",
          "Review: Dependency failures",
          "Review: Recovery behavior",
          "Review: Operating responsibilities"
        ],
        "btnText": "Review Cloud Apps"
      }
    ],
    "showAll": "See All Checks ↓",
    "showLess": "See Fewer ↑",
    "previous": "← Previous",
    "next": "Next →",
    "stageLabel": "Stage"
  },
  "/saas-architecture/": {
    "titleLead": "SaaS Work Planning",
    "titleRest": "Review the Scope in Stages",
    "intro": "Plan saas architecture around the work in scope. Shape multi-tenant applications around account isolation, shared-service responsibilities and an operating model suited to the product.",
    "steps": [
      {
        "badge": "SaaS Scope",
        "label": "Clarify the requirements",
        "amount": "MAP",
        "amountUnit": " first",
        "infoTitle": "SaaS Priorities",
        "items": [
          {
            "title": "Define the Tenant Model",
            "desc": "Map organizations, users and account relationships before choosing data partitioning and tenant-context rules.",
            "imageAlt": "Planning icon for saas architecture: define the tenant model"
          },
          {
            "title": "Connect Shared Capabilities",
            "desc": "Identify which services are shared and how permissions, configuration and background work retain the correct tenant context.",
            "imageAlt": "Planning icon for saas architecture: connect shared capabilities"
          },
          {
            "title": "Plan Product Operations",
            "desc": "Consider onboarding, account changes and deployment responsibilities alongside the application's core service boundaries.",
            "imageAlt": "Planning icon for saas architecture: plan product operations"
          }
        ],
        "rightTitle": "SaaS Scope Checks",
        "features": [
          "Scope: Define the Tenant Model",
          "Scope: Connect Shared Capabilities",
          "Scope: Plan Product Operations",
          "Scope: Tenants",
          "Scope: Data",
          "Scope: Services",
          "Scope: Lifecycle",
          "Scope: Delivery",
          "Scope: Tenant Context",
          "Scope: Shared Services"
        ],
        "btnText": "Plan SaaS"
      },
      {
        "badge": "SaaS Work",
        "label": "Organize the work",
        "amount": "WORK",
        "amountUnit": " scope",
        "infoTitle": "SaaS Work Areas",
        "items": [
          {
            "title": "Tenants",
            "desc": "Define tenant identifiers and account links.",
            "imageAlt": "Planning icon for saas architecture: tenants"
          },
          {
            "title": "Data",
            "desc": "Review data partitioning and access rules.",
            "imageAlt": "Planning icon for saas architecture: data"
          },
          {
            "title": "Services",
            "desc": "Pass tenant context through shared services.",
            "imageAlt": "Planning icon for saas architecture: services"
          }
        ],
        "rightTitle": "SaaS Work Checks",
        "features": [
          "Work area: Tenants",
          "Work area: Data",
          "Work area: Services",
          "Work area: Lifecycle",
          "Work area: Delivery",
          "Work area: Tenant Context",
          "Work area: Shared Services",
          "Work area: Account Lifecycle",
          "Work area: Define the Tenant Model",
          "Work area: Connect Shared Capabilities"
        ],
        "btnText": "Scope SaaS"
      },
      {
        "badge": "SaaS Review",
        "label": "Prepare the handover",
        "amount": "QA",
        "amountUnit": " notes",
        "infoTitle": "SaaS Review Points",
        "items": [
          {
            "title": "Lifecycle",
            "desc": "Model onboarding and account changes.",
            "imageAlt": "Planning icon for saas architecture: lifecycle"
          },
          {
            "title": "Delivery",
            "desc": "Plan tenant-aware deployment and support.",
            "imageAlt": "Planning icon for saas architecture: delivery"
          },
          {
            "title": "SaaS Workflow",
            "desc": "Keep tenant context connected across the application.",
            "imageAlt": "Planning icon for saas architecture: saas workflow"
          }
        ],
        "rightTitle": "SaaS Review Checks",
        "features": [
          "Review: Lifecycle",
          "Review: Delivery",
          "Review: Tenant Context",
          "Review: Shared Services",
          "Review: Account Lifecycle",
          "Review: Define the Tenant Model",
          "Review: Connect Shared Capabilities",
          "Review: Plan Product Operations",
          "Review: Tenants",
          "Review: Data"
        ],
        "btnText": "Review SaaS"
      }
    ],
    "showAll": "See All Checks ↓",
    "showLess": "See Fewer ↑",
    "previous": "← Previous",
    "next": "Next →",
    "stageLabel": "Stage"
  },
  "/python-engineers/": {
    "titleLead": "Python Work Planning",
    "titleRest": "Review the Scope in Stages",
    "intro": "Plan python engineering around the work in scope. Build Python workflows around defined inputs, computation steps and the systems that use their results.",
    "steps": [
      {
        "badge": "Python Scope",
        "label": "Clarify the requirements",
        "amount": "MAP",
        "amountUnit": " first",
        "infoTitle": "Python Priorities",
        "items": [
          {
            "title": "Automation Tasks",
            "desc": "Translate repeatable operational work into explicit steps with validated inputs and meaningful failure information.",
            "imageAlt": "Planning icon for python engineering: automation tasks"
          },
          {
            "title": "Computational Work",
            "desc": "Keep formulas, data assumptions and calculation outputs connected to the analytical task being implemented.",
            "imageAlt": "Planning icon for python engineering: computational work"
          },
          {
            "title": "Service Interfaces",
            "desc": "Connect Python application logic to databases and APIs through documented request and response responsibilities.",
            "imageAlt": "Planning icon for python engineering: service interfaces"
          }
        ],
        "rightTitle": "Python Scope Checks",
        "features": [
          "Scope: Task decomposition",
          "Scope: Input validation",
          "Scope: Automation steps",
          "Scope: Failure reporting",
          "Scope: Calculation requirements",
          "Scope: Data assumptions",
          "Scope: Intermediate results",
          "Scope: Computation checks",
          "Scope: API interaction",
          "Scope: Database operations"
        ],
        "btnText": "Plan Python"
      },
      {
        "badge": "Python Work",
        "label": "Organize the work",
        "amount": "WORK",
        "amountUnit": " scope",
        "infoTitle": "Python Work Areas",
        "items": [
          {
            "title": "Task decomposition",
            "desc": "For python engineering, include input validation, automation steps, failure reporting when defining automation tasks.",
            "imageAlt": "Planning icon for python engineering: task decomposition"
          },
          {
            "title": "Calculation requirements",
            "desc": "For python engineering, include data assumptions, intermediate results, computation checks when defining computational work.",
            "imageAlt": "Planning icon for python engineering: calculation requirements"
          },
          {
            "title": "API interaction",
            "desc": "For python engineering, include database operations, response handling, service configuration when defining service interfaces.",
            "imageAlt": "Planning icon for python engineering: api interaction"
          }
        ],
        "rightTitle": "Python Work Checks",
        "features": [
          "Work area: Failure reporting",
          "Work area: Calculation requirements",
          "Work area: Data assumptions",
          "Work area: Intermediate results",
          "Work area: Computation checks",
          "Work area: API interaction",
          "Work area: Database operations",
          "Work area: Response handling",
          "Work area: Service configuration",
          "Work area: Execution requirements"
        ],
        "btnText": "Scope Python"
      },
      {
        "badge": "Python Review",
        "label": "Prepare the handover",
        "amount": "QA",
        "amountUnit": " notes",
        "infoTitle": "Python Review Points",
        "items": [
          {
            "title": "Project Handover",
            "desc": "Prepare reproducible execution guidance and tests for the team maintaining the Python implementation.",
            "imageAlt": "Planning icon for python engineering: project handover"
          },
          {
            "title": "Execution requirements",
            "desc": "Review execution requirements alongside dependency records before agreeing the python engineering handover.",
            "imageAlt": "Planning icon for python engineering: execution requirements"
          },
          {
            "title": "Behavior tests",
            "desc": "Keep behavior tests and maintenance guidance in the python engineering review record.",
            "imageAlt": "Planning icon for python engineering: behavior tests"
          }
        ],
        "rightTitle": "Python Review Checks",
        "features": [
          "Review: Intermediate results",
          "Review: Computation checks",
          "Review: API interaction",
          "Review: Database operations",
          "Review: Response handling",
          "Review: Service configuration",
          "Review: Execution requirements",
          "Review: Dependency records",
          "Review: Behavior tests",
          "Review: Maintenance guidance"
        ],
        "btnText": "Review Python"
      }
    ],
    "showAll": "See All Checks ↓",
    "showLess": "See Fewer ↑",
    "previous": "← Previous",
    "next": "Next →",
    "stageLabel": "Stage"
  },
  "/go-engineers/": {
    "titleLead": "Go Work Planning",
    "titleRest": "Review the Scope in Stages",
    "intro": "Plan go engineering around the work in scope. Structure Go services and data handlers around explicit interfaces, concurrent work and network-operating requirements.",
    "steps": [
      {
        "badge": "Go Scope",
        "label": "Clarify the requirements",
        "amount": "MAP",
        "amountUnit": " first",
        "infoTitle": "Go Priorities",
        "items": [
          {
            "title": "Service Contracts",
            "desc": "Define the requests and responses that connect Go application logic to its consumers.",
            "imageAlt": "Planning icon for go engineering: service contracts"
          },
          {
            "title": "Concurrent Work",
            "desc": "Plan the ownership and coordination of work that proceeds across concurrent processing tasks.",
            "imageAlt": "Planning icon for go engineering: concurrent work"
          },
          {
            "title": "Network and Data Work",
            "desc": "Connect service calls and data handling with clear timeouts and unsuccessful-operation behavior.",
            "imageAlt": "Planning icon for go engineering: network and data work"
          }
        ],
        "rightTitle": "Go Scope Checks",
        "features": [
          "Scope: Endpoint contracts",
          "Scope: Request parsing",
          "Scope: Response definitions",
          "Scope: Service boundaries",
          "Scope: Task coordination",
          "Scope: Work ownership",
          "Scope: Cancellation behavior",
          "Scope: Shared-state review",
          "Scope: Network interactions",
          "Scope: Data-handler inputs"
        ],
        "btnText": "Plan Go"
      },
      {
        "badge": "Go Work",
        "label": "Organize the work",
        "amount": "WORK",
        "amountUnit": " scope",
        "infoTitle": "Go Work Areas",
        "items": [
          {
            "title": "Endpoint contracts",
            "desc": "For go engineering, include request parsing, response definitions, service boundaries when defining service contracts.",
            "imageAlt": "Planning icon for go engineering: endpoint contracts"
          },
          {
            "title": "Task coordination",
            "desc": "For go engineering, include work ownership, cancellation behavior, shared-state review when defining concurrent work.",
            "imageAlt": "Planning icon for go engineering: task coordination"
          },
          {
            "title": "Network interactions",
            "desc": "For go engineering, include data-handler inputs, timeout requirements, error handling when defining network and data work.",
            "imageAlt": "Planning icon for go engineering: network interactions"
          }
        ],
        "rightTitle": "Go Work Checks",
        "features": [
          "Work area: Service boundaries",
          "Work area: Task coordination",
          "Work area: Work ownership",
          "Work area: Cancellation behavior",
          "Work area: Shared-state review",
          "Work area: Network interactions",
          "Work area: Data-handler inputs",
          "Work area: Timeout requirements",
          "Work area: Error handling",
          "Work area: Build requirements"
        ],
        "btnText": "Scope Go"
      },
      {
        "badge": "Go Review",
        "label": "Prepare the handover",
        "amount": "QA",
        "amountUnit": " notes",
        "infoTitle": "Go Review Points",
        "items": [
          {
            "title": "Go Service Delivery",
            "desc": "Keep runtime configuration and diagnostic information connected to build and release checks.",
            "imageAlt": "Planning icon for go engineering: go service delivery"
          },
          {
            "title": "Build requirements",
            "desc": "Review build requirements alongside runtime settings before agreeing the go engineering handover.",
            "imageAlt": "Planning icon for go engineering: build requirements"
          },
          {
            "title": "Service-level tests",
            "desc": "Keep service-level tests and diagnostic records in the go engineering review record.",
            "imageAlt": "Planning icon for go engineering: service-level tests"
          }
        ],
        "rightTitle": "Go Review Checks",
        "features": [
          "Review: Cancellation behavior",
          "Review: Shared-state review",
          "Review: Network interactions",
          "Review: Data-handler inputs",
          "Review: Timeout requirements",
          "Review: Error handling",
          "Review: Build requirements",
          "Review: Runtime settings",
          "Review: Service-level tests",
          "Review: Diagnostic records"
        ],
        "btnText": "Review Go"
      }
    ],
    "showAll": "See All Checks ↓",
    "showLess": "See Fewer ↑",
    "previous": "← Previous",
    "next": "Next →",
    "stageLabel": "Stage"
  },
  "/node-js-experts/": {
    "titleLead": "Node.js Work Planning",
    "titleRest": "Review the Scope in Stages",
    "intro": "Plan node.js engineering around the work in scope. Build server-side JavaScript around explicit API contracts, asynchronous work and the database or event systems the application uses.",
    "steps": [
      {
        "badge": "Node.js Scope",
        "label": "Clarify the requirements",
        "amount": "MAP",
        "amountUnit": " first",
        "infoTitle": "Node.js Priorities",
        "items": [
          {
            "title": "Structure Service Responsibilities",
            "desc": "Separate request handling, business rules and persistence concerns so each Node.js service has a clear purpose.",
            "imageAlt": "Planning icon for node.js engineering: structure service responsibilities"
          },
          {
            "title": "Handle Asynchronous Work",
            "desc": "Plan event handling, background jobs and failure paths around the work that must complete outside an immediate request.",
            "imageAlt": "Planning icon for node.js engineering: handle asynchronous work"
          },
          {
            "title": "Review the Runtime Journey",
            "desc": "Check validation, database interactions and unsuccessful responses together with deployment and diagnostic requirements.",
            "imageAlt": "Planning icon for node.js engineering: review the runtime journey"
          }
        ],
        "rightTitle": "Node.js Scope Checks",
        "features": [
          "Scope: Structure Service Responsibilities",
          "Scope: Handle Asynchronous Work",
          "Scope: Review the Runtime Journey",
          "Scope: Requests",
          "Scope: Logic",
          "Scope: Storage",
          "Scope: Events",
          "Scope: Runtime",
          "Scope: Request Contracts",
          "Scope: Runtime Logic"
        ],
        "btnText": "Plan Node.js"
      },
      {
        "badge": "Node.js Work",
        "label": "Organize the work",
        "amount": "WORK",
        "amountUnit": " scope",
        "infoTitle": "Node.js Work Areas",
        "items": [
          {
            "title": "Requests",
            "desc": "Define Node.js routes and response contracts.",
            "imageAlt": "Planning icon for node.js engineering: requests"
          },
          {
            "title": "Logic",
            "desc": "Organize business rules behind API actions.",
            "imageAlt": "Planning icon for node.js engineering: logic"
          },
          {
            "title": "Storage",
            "desc": "Link database work to service responsibilities.",
            "imageAlt": "Planning icon for node.js engineering: storage"
          }
        ],
        "rightTitle": "Node.js Work Checks",
        "features": [
          "Work area: Requests",
          "Work area: Logic",
          "Work area: Storage",
          "Work area: Events",
          "Work area: Runtime",
          "Work area: Request Contracts",
          "Work area: Runtime Logic",
          "Work area: Event Handling",
          "Work area: Structure Service Responsibilities",
          "Work area: Handle Asynchronous Work"
        ],
        "btnText": "Scope Node.js"
      },
      {
        "badge": "Node.js Review",
        "label": "Prepare the handover",
        "amount": "QA",
        "amountUnit": " notes",
        "infoTitle": "Node.js Review Points",
        "items": [
          {
            "title": "Events",
            "desc": "Handle background jobs and event failures.",
            "imageAlt": "Planning icon for node.js engineering: events"
          },
          {
            "title": "Runtime",
            "desc": "Review runtime settings and diagnostics.",
            "imageAlt": "Planning icon for node.js engineering: runtime"
          },
          {
            "title": "Node.js Workflow",
            "desc": "Connect requests, events and persistence in the runtime.",
            "imageAlt": "Planning icon for node.js engineering: node.js workflow"
          }
        ],
        "rightTitle": "Node.js Review Checks",
        "features": [
          "Review: Events",
          "Review: Runtime",
          "Review: Request Contracts",
          "Review: Runtime Logic",
          "Review: Event Handling",
          "Review: Structure Service Responsibilities",
          "Review: Handle Asynchronous Work",
          "Review: Review the Runtime Journey",
          "Review: Requests",
          "Review: Logic"
        ],
        "btnText": "Review Node.js"
      }
    ],
    "showAll": "See All Checks ↓",
    "showLess": "See Fewer ↑",
    "previous": "← Previous",
    "next": "Next →",
    "stageLabel": "Stage"
  },
  "/javascript-devs/": {
    "titleLead": "JavaScript Work Planning",
    "titleRest": "Review the Scope in Stages",
    "intro": "Plan javascript around the work in scope. Connect interactive user tasks and server workflows through clear state, asynchronous behavior and service contracts.",
    "steps": [
      {
        "badge": "JavaScript Scope",
        "label": "Clarify the requirements",
        "amount": "MAP",
        "amountUnit": " first",
        "infoTitle": "JavaScript Priorities",
        "items": [
          {
            "title": "Interface Components",
            "desc": "Define component inputs and responsibilities around the user action each part of the interface supports.",
            "imageAlt": "Planning icon for javascript: interface components"
          },
          {
            "title": "Asynchronous Behavior",
            "desc": "Coordinate requests and user actions with understandable pending, unsuccessful and completed states.",
            "imageAlt": "Planning icon for javascript: asynchronous behavior"
          },
          {
            "title": "Server-side Workflows",
            "desc": "Organize server-side JavaScript around explicit API operations, validation and persistence responsibilities.",
            "imageAlt": "Planning icon for javascript: server-side workflows"
          }
        ],
        "rightTitle": "JavaScript Scope Checks",
        "features": [
          "Scope: Component contracts",
          "Scope: Event responsibilities",
          "Scope: View-state models",
          "Scope: Reusable interactions",
          "Scope: Request coordination",
          "Scope: Pending-state feedback",
          "Scope: Error recovery",
          "Scope: State-change handling",
          "Scope: Server API operations",
          "Scope: Service validation"
        ],
        "btnText": "Plan JavaScript"
      },
      {
        "badge": "JavaScript Work",
        "label": "Organize the work",
        "amount": "WORK",
        "amountUnit": " scope",
        "infoTitle": "JavaScript Work Areas",
        "items": [
          {
            "title": "Component contracts",
            "desc": "For javascript, include event responsibilities, view-state models, reusable interactions when defining interface components.",
            "imageAlt": "Planning icon for javascript: component contracts"
          },
          {
            "title": "Request coordination",
            "desc": "For javascript, include pending-state feedback, error recovery, state-change handling when defining asynchronous behavior.",
            "imageAlt": "Planning icon for javascript: request coordination"
          },
          {
            "title": "Server API operations",
            "desc": "For javascript, include service validation, persistence boundaries, background task handling when defining server-side workflows.",
            "imageAlt": "Planning icon for javascript: server api operations"
          }
        ],
        "rightTitle": "JavaScript Work Checks",
        "features": [
          "Work area: Reusable interactions",
          "Work area: Request coordination",
          "Work area: Pending-state feedback",
          "Work area: Error recovery",
          "Work area: State-change handling",
          "Work area: Server API operations",
          "Work area: Service validation",
          "Work area: Persistence boundaries",
          "Work area: Background task handling",
          "Work area: Component behavior checks"
        ],
        "btnText": "Scope JavaScript"
      },
      {
        "badge": "JavaScript Review",
        "label": "Prepare the handover",
        "amount": "QA",
        "amountUnit": " notes",
        "infoTitle": "JavaScript Review Points",
        "items": [
          {
            "title": "JavaScript Verification",
            "desc": "Review interface and runtime behavior together using representative data and task scenarios.",
            "imageAlt": "Planning icon for javascript: javascript verification"
          },
          {
            "title": "Component behavior checks",
            "desc": "Review component behavior checks alongside async failure scenarios before agreeing the javascript handover.",
            "imageAlt": "Planning icon for javascript: component behavior checks"
          },
          {
            "title": "Service integration tests",
            "desc": "Keep service integration tests and runtime review in the javascript review record.",
            "imageAlt": "Planning icon for javascript: service integration tests"
          }
        ],
        "rightTitle": "JavaScript Review Checks",
        "features": [
          "Review: Error recovery",
          "Review: State-change handling",
          "Review: Server API operations",
          "Review: Service validation",
          "Review: Persistence boundaries",
          "Review: Background task handling",
          "Review: Component behavior checks",
          "Review: Async failure scenarios",
          "Review: Service integration tests",
          "Review: Runtime review"
        ],
        "btnText": "Review JavaScript"
      }
    ],
    "showAll": "See All Checks ↓",
    "showLess": "See Fewer ↑",
    "previous": "← Previous",
    "next": "Next →",
    "stageLabel": "Stage"
  },
  "/react-native-experts/": {
    "titleLead": "React Native Work Planning",
    "titleRest": "Review the Scope in Stages",
    "intro": "Plan react native around the work in scope. Connect shared mobile components and service work to the native controls and platform behavior relevant to iOS and Android users.",
    "steps": [
      {
        "badge": "React Native Scope",
        "label": "Clarify the requirements",
        "amount": "MAP",
        "amountUnit": " first",
        "infoTitle": "React Native Priorities",
        "items": [
          {
            "title": "Native Interface Work",
            "desc": "Organize mobile screens around native text, controls and the task a user is trying to complete.",
            "imageAlt": "Planning icon for react native: native interface work"
          },
          {
            "title": "Mobile State and Data",
            "desc": "Coordinate application state and remote information when requests complete, fail or lose connectivity.",
            "imageAlt": "Planning icon for react native: mobile state and data"
          },
          {
            "title": "Platform Capabilities",
            "desc": "Define device permissions and platform-specific behavior without assuming every native feature behaves identically.",
            "imageAlt": "Planning icon for react native: platform capabilities"
          }
        ],
        "rightTitle": "React Native Scope Checks",
        "features": [
          "Scope: Native component structure",
          "Scope: Mobile control behavior",
          "Scope: Screen responsibilities",
          "Scope: Input and focus context",
          "Scope: Mobile state transitions",
          "Scope: Remote data handling",
          "Scope: Connectivity interruptions",
          "Scope: Local record choices",
          "Scope: iOS capability checks",
          "Scope: Android capability checks"
        ],
        "btnText": "Plan React Native"
      },
      {
        "badge": "React Native Work",
        "label": "Organize the work",
        "amount": "WORK",
        "amountUnit": " scope",
        "infoTitle": "React Native Work Areas",
        "items": [
          {
            "title": "Native component structure",
            "desc": "For react native, include mobile control behavior, screen responsibilities, input and focus context when defining native interface work.",
            "imageAlt": "Planning icon for react native: native component structure"
          },
          {
            "title": "Mobile state transitions",
            "desc": "For react native, include remote data handling, connectivity interruptions, local record choices when defining mobile state and data.",
            "imageAlt": "Planning icon for react native: mobile state transitions"
          },
          {
            "title": "iOS capability checks",
            "desc": "For react native, include android capability checks, permission requirements, platform-specific feedback when defining platform capabilities.",
            "imageAlt": "Planning icon for react native: ios capability checks"
          }
        ],
        "rightTitle": "React Native Work Checks",
        "features": [
          "Work area: Input and focus context",
          "Work area: Mobile state transitions",
          "Work area: Remote data handling",
          "Work area: Connectivity interruptions",
          "Work area: Local record choices",
          "Work area: iOS capability checks",
          "Work area: Android capability checks",
          "Work area: Permission requirements",
          "Work area: Platform-specific feedback",
          "Work area: Screen-reader review"
        ],
        "btnText": "Scope React Native"
      },
      {
        "badge": "React Native Review",
        "label": "Prepare the handover",
        "amount": "QA",
        "amountUnit": " notes",
        "infoTitle": "React Native Review Points",
        "items": [
          {
            "title": "Journey Verification",
            "desc": "Review the complete mobile task with relevant device settings, accessibility inputs and service conditions.",
            "imageAlt": "Planning icon for react native: journey verification"
          },
          {
            "title": "Screen-reader review",
            "desc": "Review screen-reader review alongside text-input scenarios before agreeing the react native handover.",
            "imageAlt": "Planning icon for react native: screen-reader review"
          },
          {
            "title": "Device-setting variation",
            "desc": "Keep device-setting variation and mobile recovery paths in the react native review record.",
            "imageAlt": "Planning icon for react native: device-setting variation"
          }
        ],
        "rightTitle": "React Native Review Checks",
        "features": [
          "Review: Connectivity interruptions",
          "Review: Local record choices",
          "Review: iOS capability checks",
          "Review: Android capability checks",
          "Review: Permission requirements",
          "Review: Platform-specific feedback",
          "Review: Screen-reader review",
          "Review: Text-input scenarios",
          "Review: Device-setting variation",
          "Review: Mobile recovery paths"
        ],
        "btnText": "Review React Native"
      }
    ],
    "showAll": "See All Checks ↓",
    "showLess": "See Fewer ↑",
    "previous": "← Previous",
    "next": "Next →",
    "stageLabel": "Stage"
  },
  "/mobile-devs/": {
    "titleLead": "Phone Apps Work Planning",
    "titleRest": "Review the Scope in Stages",
    "intro": "Plan mobile engineering around the work in scope. Define phone-application work through interaction requirements, local information and explicit synchronization behavior.",
    "steps": [
      {
        "badge": "Phone Apps Scope",
        "label": "Clarify the requirements",
        "amount": "MAP",
        "amountUnit": " first",
        "infoTitle": "Phone Apps Priorities",
        "items": [
          {
            "title": "Phone-first Journeys",
            "desc": "Shape controls and navigation around the tasks and device conditions of the intended mobile user.",
            "imageAlt": "Planning icon for mobile engineering: phone-first journeys"
          },
          {
            "title": "Offline Information",
            "desc": "Specify which records remain available locally and how users understand work completed without a connection.",
            "imageAlt": "Planning icon for mobile engineering: offline information"
          },
          {
            "title": "Synchronization Rules",
            "desc": "Connect local changes to remote records with a defined approach to conflicts and unsuccessful exchanges.",
            "imageAlt": "Planning icon for mobile engineering: synchronization rules"
          }
        ],
        "rightTitle": "Phone Apps Scope Checks",
        "features": [
          "Scope: Phone task requirements",
          "Scope: Touch-control feedback",
          "Scope: Mobile navigation",
          "Scope: Device-condition context",
          "Scope: Offline record scope",
          "Scope: Local change states",
          "Scope: Connection feedback",
          "Scope: Pending work visibility",
          "Scope: Sync ownership",
          "Scope: Conflict expectations"
        ],
        "btnText": "Plan Phone Apps"
      },
      {
        "badge": "Phone Apps Work",
        "label": "Organize the work",
        "amount": "WORK",
        "amountUnit": " scope",
        "infoTitle": "Phone Apps Work Areas",
        "items": [
          {
            "title": "Phone task requirements",
            "desc": "For mobile engineering, include touch-control feedback, mobile navigation, device-condition context when defining phone-first journeys.",
            "imageAlt": "Planning icon for mobile engineering: phone task requirements"
          },
          {
            "title": "Offline record scope",
            "desc": "For mobile engineering, include local change states, connection feedback, pending work visibility when defining offline information.",
            "imageAlt": "Planning icon for mobile engineering: offline record scope"
          },
          {
            "title": "Sync ownership",
            "desc": "For mobile engineering, include conflict expectations, remote update results, retry-state handling when defining synchronization rules.",
            "imageAlt": "Planning icon for mobile engineering: sync ownership"
          }
        ],
        "rightTitle": "Phone Apps Work Checks",
        "features": [
          "Work area: Device-condition context",
          "Work area: Offline record scope",
          "Work area: Local change states",
          "Work area: Connection feedback",
          "Work area: Pending work visibility",
          "Work area: Sync ownership",
          "Work area: Conflict expectations",
          "Work area: Remote update results",
          "Work area: Retry-state handling",
          "Work area: Supported device context"
        ],
        "btnText": "Scope Phone Apps"
      },
      {
        "badge": "Phone Apps Review",
        "label": "Prepare the handover",
        "amount": "QA",
        "amountUnit": " notes",
        "infoTitle": "Phone Apps Review Points",
        "items": [
          {
            "title": "Mobile Delivery Review",
            "desc": "Check device capabilities and application journeys against the mobile environments selected for delivery.",
            "imageAlt": "Planning icon for mobile engineering: mobile delivery review"
          },
          {
            "title": "Supported device context",
            "desc": "Review supported device context alongside permission walkthroughs before agreeing the mobile engineering handover.",
            "imageAlt": "Planning icon for mobile engineering: supported device context"
          },
          {
            "title": "Journey acceptance checks",
            "desc": "Keep journey acceptance checks and mobile support notes in the mobile engineering review record.",
            "imageAlt": "Planning icon for mobile engineering: journey acceptance checks"
          }
        ],
        "rightTitle": "Phone Apps Review Checks",
        "features": [
          "Review: Connection feedback",
          "Review: Pending work visibility",
          "Review: Sync ownership",
          "Review: Conflict expectations",
          "Review: Remote update results",
          "Review: Retry-state handling",
          "Review: Supported device context",
          "Review: Permission walkthroughs",
          "Review: Journey acceptance checks",
          "Review: Mobile support notes"
        ],
        "btnText": "Review Phone Apps"
      }
    ],
    "showAll": "See All Checks ↓",
    "showLess": "See Fewer ↑",
    "previous": "← Previous",
    "next": "Next →",
    "stageLabel": "Stage"
  },
  "/ms-ecosystem/": {
    "titleLead": "MS Tools Work Planning",
    "titleRest": "Review the Scope in Stages",
    "intro": "Plan microsoft ecosystem around the work in scope. Connect Microsoft product environments through clear directory relationships, access responsibilities and exchanged business records.",
    "steps": [
      {
        "badge": "MS Tools Scope",
        "label": "Clarify the requirements",
        "amount": "MAP",
        "amountUnit": " first",
        "infoTitle": "MS Tools Priorities",
        "items": [
          {
            "title": "Directory Context",
            "desc": "Identify the users and organization relationships represented across connected Microsoft products.",
            "imageAlt": "Planning icon for microsoft ecosystem: directory context"
          },
          {
            "title": "Access Administration",
            "desc": "Define who can administer and use information as tasks move between the products in scope.",
            "imageAlt": "Planning icon for microsoft ecosystem: access administration"
          },
          {
            "title": "Information Exchange",
            "desc": "Keep shared records and integrations associated with their source and update responsibilities.",
            "imageAlt": "Planning icon for microsoft ecosystem: information exchange"
          }
        ],
        "rightTitle": "MS Tools Scope Checks",
        "features": [
          "Scope: Directory relationships",
          "Scope: Organization context",
          "Scope: User identifiers",
          "Scope: Identity lifecycle needs",
          "Scope: Cross-product permissions",
          "Scope: Administrative duties",
          "Scope: Access-change records",
          "Scope: Visibility requirements",
          "Scope: Shared-record definitions",
          "Scope: Source-product context"
        ],
        "btnText": "Plan MS Tools"
      },
      {
        "badge": "MS Tools Work",
        "label": "Organize the work",
        "amount": "WORK",
        "amountUnit": " scope",
        "infoTitle": "MS Tools Work Areas",
        "items": [
          {
            "title": "Directory relationships",
            "desc": "For microsoft ecosystem, include organization context, user identifiers, identity lifecycle needs when defining directory context.",
            "imageAlt": "Planning icon for microsoft ecosystem: directory relationships"
          },
          {
            "title": "Cross-product permissions",
            "desc": "For microsoft ecosystem, include administrative duties, access-change records, visibility requirements when defining access administration.",
            "imageAlt": "Planning icon for microsoft ecosystem: cross-product permissions"
          },
          {
            "title": "Shared-record definitions",
            "desc": "For microsoft ecosystem, include source-product context, update responsibilities, integration mappings when defining information exchange.",
            "imageAlt": "Planning icon for microsoft ecosystem: shared-record definitions"
          }
        ],
        "rightTitle": "MS Tools Work Checks",
        "features": [
          "Work area: Identity lifecycle needs",
          "Work area: Cross-product permissions",
          "Work area: Administrative duties",
          "Work area: Access-change records",
          "Work area: Visibility requirements",
          "Work area: Shared-record definitions",
          "Work area: Source-product context",
          "Work area: Update responsibilities",
          "Work area: Integration mappings",
          "Work area: Configuration decisions"
        ],
        "btnText": "Scope MS Tools"
      },
      {
        "badge": "MS Tools Review",
        "label": "Prepare the handover",
        "amount": "QA",
        "amountUnit": " notes",
        "infoTitle": "MS Tools Review Points",
        "items": [
          {
            "title": "Operating Coordination",
            "desc": "Connect configuration decisions and support information across the teams maintaining the environment.",
            "imageAlt": "Planning icon for microsoft ecosystem: operating coordination"
          },
          {
            "title": "Configuration decisions",
            "desc": "Review configuration decisions alongside product dependencies before agreeing the microsoft ecosystem handover.",
            "imageAlt": "Planning icon for microsoft ecosystem: configuration decisions"
          },
          {
            "title": "Support coordination",
            "desc": "Keep support coordination and environment review in the microsoft ecosystem review record.",
            "imageAlt": "Planning icon for microsoft ecosystem: support coordination"
          }
        ],
        "rightTitle": "MS Tools Review Checks",
        "features": [
          "Review: Access-change records",
          "Review: Visibility requirements",
          "Review: Shared-record definitions",
          "Review: Source-product context",
          "Review: Update responsibilities",
          "Review: Integration mappings",
          "Review: Configuration decisions",
          "Review: Product dependencies",
          "Review: Support coordination",
          "Review: Environment review"
        ],
        "btnText": "Review MS Tools"
      }
    ],
    "showAll": "See All Checks ↓",
    "showLess": "See Fewer ↑",
    "previous": "← Previous",
    "next": "Next →",
    "stageLabel": "Stage"
  },
  "/power-apps-dev/": {
    "titleLead": "Power Apps Work Planning",
    "titleRest": "Review the Scope in Stages",
    "intro": "Plan power apps around the work in scope. Build low-code forms and administrative tools around the records, permissions and review steps of a specific business task.",
    "steps": [
      {
        "badge": "Power Apps Scope",
        "label": "Clarify the requirements",
        "amount": "MAP",
        "amountUnit": " first",
        "infoTitle": "Power Apps Priorities",
        "items": [
          {
            "title": "Workspace Requirements",
            "desc": "Define the employee task and information needed before selecting the low-code application scope.",
            "imageAlt": "Planning icon for power apps: workspace requirements"
          },
          {
            "title": "Forms and Validation",
            "desc": "Connect field choices and input feedback to the business rules behind a submitted record.",
            "imageAlt": "Planning icon for power apps: forms and validation"
          },
          {
            "title": "Connected Work",
            "desc": "Plan the data connections and workflow handoffs used by the workspace application.",
            "imageAlt": "Planning icon for power apps: connected work"
          }
        ],
        "rightTitle": "Power Apps Scope Checks",
        "features": [
          "Scope: Employee task context",
          "Scope: Form requirements",
          "Scope: Required records",
          "Scope: Application scope",
          "Scope: Field definitions",
          "Scope: Input feedback rules",
          "Scope: Submission states",
          "Scope: Record-change checks",
          "Scope: Data connections",
          "Scope: Workflow handoffs"
        ],
        "btnText": "Plan Power Apps"
      },
      {
        "badge": "Power Apps Work",
        "label": "Organize the work",
        "amount": "WORK",
        "amountUnit": " scope",
        "infoTitle": "Power Apps Work Areas",
        "items": [
          {
            "title": "Employee task context",
            "desc": "For power apps, include form requirements, required records, application scope when defining workspace requirements.",
            "imageAlt": "Planning icon for power apps: employee task context"
          },
          {
            "title": "Field definitions",
            "desc": "For power apps, include input feedback rules, submission states, record-change checks when defining forms and validation.",
            "imageAlt": "Planning icon for power apps: field definitions"
          },
          {
            "title": "Data connections",
            "desc": "For power apps, include workflow handoffs, user permissions, connection dependencies when defining connected work.",
            "imageAlt": "Planning icon for power apps: data connections"
          }
        ],
        "rightTitle": "Power Apps Work Checks",
        "features": [
          "Work area: Application scope",
          "Work area: Field definitions",
          "Work area: Input feedback rules",
          "Work area: Submission states",
          "Work area: Record-change checks",
          "Work area: Data connections",
          "Work area: Workflow handoffs",
          "Work area: User permissions",
          "Work area: Connection dependencies",
          "Work area: Role-based task checks"
        ],
        "btnText": "Scope Power Apps"
      },
      {
        "badge": "Power Apps Review",
        "label": "Prepare the handover",
        "amount": "QA",
        "amountUnit": " notes",
        "infoTitle": "Power Apps Review Points",
        "items": [
          {
            "title": "Administrative Review",
            "desc": "Check the application using the roles and record conditions relevant to the administrative process.",
            "imageAlt": "Planning icon for power apps: administrative review"
          },
          {
            "title": "Role-based task checks",
            "desc": "Review role-based task checks alongside record-state scenarios before agreeing the power apps handover.",
            "imageAlt": "Planning icon for power apps: role-based task checks"
          },
          {
            "title": "Configuration handover",
            "desc": "Keep configuration handover and support expectations in the power apps review record.",
            "imageAlt": "Planning icon for power apps: configuration handover"
          }
        ],
        "rightTitle": "Power Apps Review Checks",
        "features": [
          "Review: Submission states",
          "Review: Record-change checks",
          "Review: Data connections",
          "Review: Workflow handoffs",
          "Review: User permissions",
          "Review: Connection dependencies",
          "Review: Role-based task checks",
          "Review: Record-state scenarios",
          "Review: Configuration handover",
          "Review: Support expectations"
        ],
        "btnText": "Review Power Apps"
      }
    ],
    "showAll": "See All Checks ↓",
    "showLess": "See Fewer ↑",
    "previous": "← Previous",
    "next": "Next →",
    "stageLabel": "Stage"
  },
  "/adobe-commerce-tech/": {
    "titleLead": "Adobe Stores Work Planning",
    "titleRest": "Review the Scope in Stages",
    "intro": "Plan adobe commerce around the work in scope. Connect Adobe Commerce catalogs, customer journeys and order integrations to the rules that govern the storefront and back office.",
    "steps": [
      {
        "badge": "Adobe Stores Scope",
        "label": "Clarify the requirements",
        "amount": "MAP",
        "amountUnit": " first",
        "infoTitle": "Adobe Stores Priorities",
        "items": [
          {
            "title": "Organize Commerce Data",
            "desc": "Model product attributes, catalog relationships and store-specific information around how shoppers find and evaluate products.",
            "imageAlt": "Planning icon for adobe commerce: organize commerce data"
          },
          {
            "title": "Review Checkout Behavior",
            "desc": "Connect cart rules, payment states and order placement with clear handling of interrupted or unsuccessful purchases.",
            "imageAlt": "Planning icon for adobe commerce: review checkout behavior"
          },
          {
            "title": "Coordinate Back-office Exchange",
            "desc": "Define how inventory, fulfillment and transaction records move between Adobe Commerce and operational systems.",
            "imageAlt": "Planning icon for adobe commerce: coordinate back-office exchange"
          }
        ],
        "rightTitle": "Adobe Stores Scope Checks",
        "features": [
          "Scope: Organize Commerce Data",
          "Scope: Review Checkout Behavior",
          "Scope: Coordinate Back-office Exchange",
          "Scope: Catalog",
          "Scope: Cart",
          "Scope: Checkout",
          "Scope: Exchange",
          "Scope: Support",
          "Scope: Catalog Records",
          "Scope: Order Exchange"
        ],
        "btnText": "Plan Adobe Stores"
      },
      {
        "badge": "Adobe Stores Work",
        "label": "Organize the work",
        "amount": "WORK",
        "amountUnit": " scope",
        "infoTitle": "Adobe Stores Work Areas",
        "items": [
          {
            "title": "Catalog",
            "desc": "Structure products for the store views.",
            "imageAlt": "Planning icon for adobe commerce: catalog"
          },
          {
            "title": "Cart",
            "desc": "Apply pricing rules to the cart context.",
            "imageAlt": "Planning icon for adobe commerce: cart"
          },
          {
            "title": "Checkout",
            "desc": "Coordinate payment and order states.",
            "imageAlt": "Planning icon for adobe commerce: checkout"
          }
        ],
        "rightTitle": "Adobe Stores Work Checks",
        "features": [
          "Work area: Catalog",
          "Work area: Cart",
          "Work area: Checkout",
          "Work area: Exchange",
          "Work area: Support",
          "Work area: Catalog Records",
          "Work area: Order Exchange",
          "Work area: Store Support",
          "Work area: Organize Commerce Data",
          "Work area: Review Checkout Behavior"
        ],
        "btnText": "Scope Adobe Stores"
      },
      {
        "badge": "Adobe Stores Review",
        "label": "Prepare the handover",
        "amount": "QA",
        "amountUnit": " notes",
        "infoTitle": "Adobe Stores Review Points",
        "items": [
          {
            "title": "Exchange",
            "desc": "Connect inventory and fulfillment records.",
            "imageAlt": "Planning icon for adobe commerce: exchange"
          },
          {
            "title": "Support",
            "desc": "Retain transaction details for service work.",
            "imageAlt": "Planning icon for adobe commerce: support"
          },
          {
            "title": "Commerce Workflow",
            "desc": "Link the catalog and checkout to order operations.",
            "imageAlt": "Planning icon for adobe commerce: commerce workflow"
          }
        ],
        "rightTitle": "Adobe Stores Review Checks",
        "features": [
          "Review: Exchange",
          "Review: Support",
          "Review: Catalog Records",
          "Review: Order Exchange",
          "Review: Store Support",
          "Review: Organize Commerce Data",
          "Review: Review Checkout Behavior",
          "Review: Coordinate Back-office Exchange",
          "Review: Catalog",
          "Review: Cart"
        ],
        "btnText": "Review Adobe Stores"
      }
    ],
    "showAll": "See All Checks ↓",
    "showLess": "See Fewer ↑",
    "previous": "← Previous",
    "next": "Next →",
    "stageLabel": "Stage"
  },
  "/custom-erp/": {
    "titleLead": "Custom ERP Work Planning",
    "titleRest": "Review the Scope in Stages",
    "intro": "Plan custom erp around the work in scope. Connect enterprise resources, financial records and material movement through shared definitions and explicit department responsibilities.",
    "steps": [
      {
        "badge": "Custom ERP Scope",
        "label": "Clarify the requirements",
        "amount": "MAP",
        "amountUnit": " first",
        "infoTitle": "Custom ERP Priorities",
        "items": [
          {
            "title": "Map Department Processes",
            "desc": "Document how requests, materials and financial entries move between teams before translating them into ERP workflows.",
            "imageAlt": "Planning icon for custom erp: map department processes"
          },
          {
            "title": "Agree on Shared Records",
            "desc": "Define master records and transaction relationships so departments can interpret the same resource and activity consistently.",
            "imageAlt": "Planning icon for custom erp: agree on shared records"
          },
          {
            "title": "Build Reviewable Handoffs",
            "desc": "Make approvals, posting states and exceptions visible to the teams responsible for completing each enterprise process.",
            "imageAlt": "Planning icon for custom erp: build reviewable handoffs"
          }
        ],
        "rightTitle": "Custom ERP Scope Checks",
        "features": [
          "Scope: Map Department Processes",
          "Scope: Agree on Shared Records",
          "Scope: Build Reviewable Handoffs",
          "Scope: Processes",
          "Scope: Records",
          "Scope: Approvals",
          "Scope: Movement",
          "Scope: Review",
          "Scope: Shared Records",
          "Scope: Department Handoffs"
        ],
        "btnText": "Plan Custom ERP"
      },
      {
        "badge": "Custom ERP Work",
        "label": "Organize the work",
        "amount": "WORK",
        "amountUnit": " scope",
        "infoTitle": "Custom ERP Work Areas",
        "items": [
          {
            "title": "Processes",
            "desc": "Map department resource and finance tasks.",
            "imageAlt": "Planning icon for custom erp: processes"
          },
          {
            "title": "Records",
            "desc": "Define shared items and account records.",
            "imageAlt": "Planning icon for custom erp: records"
          },
          {
            "title": "Approvals",
            "desc": "Assign request and posting responsibilities.",
            "imageAlt": "Planning icon for custom erp: approvals"
          }
        ],
        "rightTitle": "Custom ERP Work Checks",
        "features": [
          "Work area: Processes",
          "Work area: Records",
          "Work area: Approvals",
          "Work area: Movement",
          "Work area: Review",
          "Work area: Shared Records",
          "Work area: Department Handoffs",
          "Work area: Posting History",
          "Work area: Map Department Processes",
          "Work area: Agree on Shared Records"
        ],
        "btnText": "Scope Custom ERP"
      },
      {
        "badge": "Custom ERP Review",
        "label": "Prepare the handover",
        "amount": "QA",
        "amountUnit": " notes",
        "infoTitle": "Custom ERP Review Points",
        "items": [
          {
            "title": "Movement",
            "desc": "Track materials through ERP process states.",
            "imageAlt": "Planning icon for custom erp: movement"
          },
          {
            "title": "Review",
            "desc": "Trace ERP exceptions to source records.",
            "imageAlt": "Planning icon for custom erp: review"
          },
          {
            "title": "ERP Workflow",
            "desc": "Connect resources, department actions and shared records.",
            "imageAlt": "Planning icon for custom erp: erp workflow"
          }
        ],
        "rightTitle": "Custom ERP Review Checks",
        "features": [
          "Review: Movement",
          "Review: Review",
          "Review: Shared Records",
          "Review: Department Handoffs",
          "Review: Posting History",
          "Review: Map Department Processes",
          "Review: Agree on Shared Records",
          "Review: Build Reviewable Handoffs",
          "Review: Processes",
          "Review: Records"
        ],
        "btnText": "Review Custom ERP"
      }
    ],
    "showAll": "See All Checks ↓",
    "showLess": "See Fewer ↑",
    "previous": "← Previous",
    "next": "Next →",
    "stageLabel": "Stage"
  },
  "/transportation-management/": {
    "titleLead": "Transport Work Planning",
    "titleRest": "Review the Scope in Stages",
    "intro": "Plan transport management around the work in scope. Coordinate cargo, vehicle schedules and route choices with the transit events dispatchers need to follow each shipment.",
    "steps": [
      {
        "badge": "Transport Scope",
        "label": "Clarify the requirements",
        "amount": "MAP",
        "amountUnit": " first",
        "infoTitle": "Transport Priorities",
        "items": [
          {
            "title": "Match Loads to Transport",
            "desc": "Connect shipment dimensions, cargo requirements and vehicle availability before preparing a transport assignment.",
            "imageAlt": "Planning icon for transport management: match loads to transport"
          },
          {
            "title": "Coordinate Routes and Schedules",
            "desc": "Record stops, timing constraints and route changes with the context dispatchers and drivers need to act.",
            "imageAlt": "Planning icon for transport management: coordinate routes and schedules"
          },
          {
            "title": "Keep Transit Events Together",
            "desc": "Link departure, delay and arrival updates to the shipment so operations can review progress and unresolved exceptions.",
            "imageAlt": "Planning icon for transport management: keep transit events together"
          }
        ],
        "rightTitle": "Transport Scope Checks",
        "features": [
          "Scope: Match Loads to Transport",
          "Scope: Coordinate Routes and Schedules",
          "Scope: Keep Transit Events Together",
          "Scope: Loads",
          "Scope: Vehicles",
          "Scope: Routes",
          "Scope: Transit",
          "Scope: Exceptions",
          "Scope: Cargo Context",
          "Scope: Dispatch Planning"
        ],
        "btnText": "Plan Transport"
      },
      {
        "badge": "Transport Work",
        "label": "Organize the work",
        "amount": "WORK",
        "amountUnit": " scope",
        "infoTitle": "Transport Work Areas",
        "items": [
          {
            "title": "Loads",
            "desc": "Record cargo needs and shipment destinations.",
            "imageAlt": "Planning icon for transport management: loads"
          },
          {
            "title": "Vehicles",
            "desc": "Match available vehicles to planned loads.",
            "imageAlt": "Planning icon for transport management: vehicles"
          },
          {
            "title": "Routes",
            "desc": "Coordinate stops and route constraints.",
            "imageAlt": "Planning icon for transport management: routes"
          }
        ],
        "rightTitle": "Transport Work Checks",
        "features": [
          "Work area: Loads",
          "Work area: Vehicles",
          "Work area: Routes",
          "Work area: Transit",
          "Work area: Exceptions",
          "Work area: Cargo Context",
          "Work area: Dispatch Planning",
          "Work area: Transit Events",
          "Work area: Match Loads to Transport",
          "Work area: Coordinate Routes and Schedules"
        ],
        "btnText": "Scope Transport"
      },
      {
        "badge": "Transport Review",
        "label": "Prepare the handover",
        "amount": "QA",
        "amountUnit": " notes",
        "infoTitle": "Transport Review Points",
        "items": [
          {
            "title": "Transit",
            "desc": "Track shipment departure and arrival events.",
            "imageAlt": "Planning icon for transport management: transit"
          },
          {
            "title": "Exceptions",
            "desc": "Review dispatch changes and transit issues.",
            "imageAlt": "Planning icon for transport management: exceptions"
          },
          {
            "title": "Transport Workflow",
            "desc": "Connect cargo plans to dispatch and transit records.",
            "imageAlt": "Planning icon for transport management: transport workflow"
          }
        ],
        "rightTitle": "Transport Review Checks",
        "features": [
          "Review: Transit",
          "Review: Exceptions",
          "Review: Cargo Context",
          "Review: Dispatch Planning",
          "Review: Transit Events",
          "Review: Match Loads to Transport",
          "Review: Coordinate Routes and Schedules",
          "Review: Keep Transit Events Together",
          "Review: Loads",
          "Review: Vehicles"
        ],
        "btnText": "Review Transport"
      }
    ],
    "showAll": "See All Checks ↓",
    "showLess": "See Fewer ↑",
    "previous": "← Previous",
    "next": "Next →",
    "stageLabel": "Stage"
  },
  "/supply-chain-tech/": {
    "titleLead": "Supply Chain Work Planning",
    "titleRest": "Review the Scope in Stages",
    "intro": "Plan supply chain around the work in scope. Connect purchasing, inventory and warehouse activity so teams can follow materials and the records that explain each handoff.",
    "steps": [
      {
        "badge": "Supply Chain Scope",
        "label": "Clarify the requirements",
        "amount": "MAP",
        "amountUnit": " first",
        "infoTitle": "Supply Chain Priorities",
        "items": [
          {
            "title": "Trace Supply Records",
            "desc": "Connect suppliers, items and purchase references to the stock and fulfillment processes that depend on them.",
            "imageAlt": "Planning icon for supply chain: trace supply records"
          },
          {
            "title": "Coordinate Inventory Movement",
            "desc": "Represent receipts, transfers and reservations with explicit quantities, locations and transaction states.",
            "imageAlt": "Planning icon for supply chain: coordinate inventory movement"
          },
          {
            "title": "Review Fulfillment Exceptions",
            "desc": "Keep shortages, mismatched records and delayed handoffs connected to the order or material they affect.",
            "imageAlt": "Planning icon for supply chain: review fulfillment exceptions"
          }
        ],
        "rightTitle": "Supply Chain Scope Checks",
        "features": [
          "Scope: Trace Supply Records",
          "Scope: Coordinate Inventory Movement",
          "Scope: Review Fulfillment Exceptions",
          "Scope: Sources",
          "Scope: Receipts",
          "Scope: Inventory",
          "Scope: Fulfillment",
          "Scope: Exceptions",
          "Scope: Material Records",
          "Scope: Stock Movement"
        ],
        "btnText": "Plan Supply Chain"
      },
      {
        "badge": "Supply Chain Work",
        "label": "Organize the work",
        "amount": "WORK",
        "amountUnit": " scope",
        "infoTitle": "Supply Chain Work Areas",
        "items": [
          {
            "title": "Sources",
            "desc": "Identify suppliers and purchase references.",
            "imageAlt": "Planning icon for supply chain: sources"
          },
          {
            "title": "Receipts",
            "desc": "Match material receipts to expected amounts.",
            "imageAlt": "Planning icon for supply chain: receipts"
          },
          {
            "title": "Inventory",
            "desc": "Track locations, reservations and transfers.",
            "imageAlt": "Planning icon for supply chain: inventory"
          }
        ],
        "rightTitle": "Supply Chain Work Checks",
        "features": [
          "Work area: Sources",
          "Work area: Receipts",
          "Work area: Inventory",
          "Work area: Fulfillment",
          "Work area: Exceptions",
          "Work area: Material Records",
          "Work area: Stock Movement",
          "Work area: Handoff History",
          "Work area: Trace Supply Records",
          "Work area: Coordinate Inventory Movement"
        ],
        "btnText": "Scope Supply Chain"
      },
      {
        "badge": "Supply Chain Review",
        "label": "Prepare the handover",
        "amount": "QA",
        "amountUnit": " notes",
        "infoTitle": "Supply Chain Review Points",
        "items": [
          {
            "title": "Fulfillment",
            "desc": "Connect warehouse tasks to order lines.",
            "imageAlt": "Planning icon for supply chain: fulfillment"
          },
          {
            "title": "Exceptions",
            "desc": "Review stock shortages and record mismatches.",
            "imageAlt": "Planning icon for supply chain: exceptions"
          },
          {
            "title": "Supply Workflow",
            "desc": "Trace materials through purchasing and fulfillment.",
            "imageAlt": "Planning icon for supply chain: supply workflow"
          }
        ],
        "rightTitle": "Supply Chain Review Checks",
        "features": [
          "Review: Fulfillment",
          "Review: Exceptions",
          "Review: Material Records",
          "Review: Stock Movement",
          "Review: Handoff History",
          "Review: Trace Supply Records",
          "Review: Coordinate Inventory Movement",
          "Review: Review Fulfillment Exceptions",
          "Review: Sources",
          "Review: Receipts"
        ],
        "btnText": "Review Supply Chain"
      }
    ],
    "showAll": "See All Checks ↓",
    "showLess": "See Fewer ↑",
    "previous": "← Previous",
    "next": "Next →",
    "stageLabel": "Stage"
  },
  "/wms-solutions/": {
    "titleLead": "Warehouses Work Planning",
    "titleRest": "Review the Scope in Stages",
    "intro": "Plan warehouse management around the work in scope. Connect bin locations, inventory records and packing checks so warehouse teams can follow each item through the fulfillment process.",
    "steps": [
      {
        "badge": "Warehouses Scope",
        "label": "Clarify the requirements",
        "amount": "MAP",
        "amountUnit": " first",
        "infoTitle": "Warehouses Priorities",
        "items": [
          {
            "title": "Identify Stock and Locations",
            "desc": "Define item identifiers, bin records and inventory states that match the warehouse's receiving and storage work.",
            "imageAlt": "Planning icon for warehouse management: identify stock and locations"
          },
          {
            "title": "Guide Fulfillment Tasks",
            "desc": "Connect pick, pack and dispatch actions to the order lines and quantities they are intended to fulfill.",
            "imageAlt": "Planning icon for warehouse management: guide fulfillment tasks"
          },
          {
            "title": "Handle Inventory Exceptions",
            "desc": "Record count differences and unsuccessful checks with the location and transaction context needed for follow-up.",
            "imageAlt": "Planning icon for warehouse management: handle inventory exceptions"
          }
        ],
        "rightTitle": "Warehouses Scope Checks",
        "features": [
          "Scope: Identify Stock and Locations",
          "Scope: Guide Fulfillment Tasks",
          "Scope: Handle Inventory Exceptions",
          "Scope: Receive",
          "Scope: Store",
          "Scope: Pick",
          "Scope: Pack",
          "Scope: Reconcile",
          "Scope: Location Records",
          "Scope: Inventory Identity"
        ],
        "btnText": "Plan Warehouses"
      },
      {
        "badge": "Warehouses Work",
        "label": "Organize the work",
        "amount": "WORK",
        "amountUnit": " scope",
        "infoTitle": "Warehouses Work Areas",
        "items": [
          {
            "title": "Receive",
            "desc": "Match incoming stock to receipt records.",
            "imageAlt": "Planning icon for warehouse management: receive"
          },
          {
            "title": "Store",
            "desc": "Assign stock to defined warehouse bins.",
            "imageAlt": "Planning icon for warehouse management: store"
          },
          {
            "title": "Pick",
            "desc": "Connect order quantities to picking tasks.",
            "imageAlt": "Planning icon for warehouse management: pick"
          }
        ],
        "rightTitle": "Warehouses Work Checks",
        "features": [
          "Work area: Receive",
          "Work area: Store",
          "Work area: Pick",
          "Work area: Pack",
          "Work area: Reconcile",
          "Work area: Location Records",
          "Work area: Inventory Identity",
          "Work area: Packing Checks",
          "Work area: Identify Stock and Locations",
          "Work area: Guide Fulfillment Tasks"
        ],
        "btnText": "Scope Warehouses"
      },
      {
        "badge": "Warehouses Review",
        "label": "Prepare the handover",
        "amount": "QA",
        "amountUnit": " notes",
        "infoTitle": "Warehouses Review Points",
        "items": [
          {
            "title": "Pack",
            "desc": "Verify packing against order contents.",
            "imageAlt": "Planning icon for warehouse management: pack"
          },
          {
            "title": "Reconcile",
            "desc": "Investigate bin counts and stock differences.",
            "imageAlt": "Planning icon for warehouse management: reconcile"
          },
          {
            "title": "Warehouse Workflow",
            "desc": "Connect bin records to picking and packing checks.",
            "imageAlt": "Planning icon for warehouse management: warehouse workflow"
          }
        ],
        "rightTitle": "Warehouses Review Checks",
        "features": [
          "Review: Pack",
          "Review: Reconcile",
          "Review: Location Records",
          "Review: Inventory Identity",
          "Review: Packing Checks",
          "Review: Identify Stock and Locations",
          "Review: Guide Fulfillment Tasks",
          "Review: Handle Inventory Exceptions",
          "Review: Receive",
          "Review: Store"
        ],
        "btnText": "Review Warehouses"
      }
    ],
    "showAll": "See All Checks ↓",
    "showLess": "See Fewer ↑",
    "previous": "← Previous",
    "next": "Next →",
    "stageLabel": "Stage"
  },
  "/enterprise-asset-management/": {
    "titleLead": "Assets Work Planning",
    "titleRest": "Review the Scope in Stages",
    "intro": "Plan asset management around the work in scope. Connect asset records, operating observations and maintenance work so teams can follow equipment from registration to retirement.",
    "steps": [
      {
        "badge": "Assets Scope",
        "label": "Clarify the requirements",
        "amount": "MAP",
        "amountUnit": " first",
        "infoTitle": "Assets Priorities",
        "items": [
          {
            "title": "Define the Asset Record",
            "desc": "Bring identifiers, location, ownership and relevant equipment details into a record that supports maintenance and operational work.",
            "imageAlt": "Planning icon for asset management: define the asset record"
          },
          {
            "title": "Coordinate Maintenance Tasks",
            "desc": "Connect service schedules, inspection findings and work orders to the equipment and people responsible for acting.",
            "imageAlt": "Planning icon for asset management: coordinate maintenance tasks"
          },
          {
            "title": "Keep Lifecycle Context",
            "desc": "Record changes in condition, assignment and operating status so asset decisions retain their supporting history.",
            "imageAlt": "Planning icon for asset management: keep lifecycle context"
          }
        ],
        "rightTitle": "Assets Scope Checks",
        "features": [
          "Scope: Define the Asset Record",
          "Scope: Coordinate Maintenance Tasks",
          "Scope: Keep Lifecycle Context",
          "Scope: Register",
          "Scope: Observe",
          "Scope: Schedule",
          "Scope: Service",
          "Scope: Lifecycle",
          "Scope: Equipment Record",
          "Scope: Service Schedule"
        ],
        "btnText": "Plan Assets"
      },
      {
        "badge": "Assets Work",
        "label": "Organize the work",
        "amount": "WORK",
        "amountUnit": " scope",
        "infoTitle": "Assets Work Areas",
        "items": [
          {
            "title": "Register",
            "desc": "Identify equipment, owners and locations.",
            "imageAlt": "Planning icon for asset management: register"
          },
          {
            "title": "Observe",
            "desc": "Link condition readings to asset records.",
            "imageAlt": "Planning icon for asset management: observe"
          },
          {
            "title": "Schedule",
            "desc": "Plan maintenance and inspection duties.",
            "imageAlt": "Planning icon for asset management: schedule"
          }
        ],
        "rightTitle": "Assets Work Checks",
        "features": [
          "Work area: Register",
          "Work area: Observe",
          "Work area: Schedule",
          "Work area: Service",
          "Work area: Lifecycle",
          "Work area: Equipment Record",
          "Work area: Service Schedule",
          "Work area: Lifecycle History",
          "Work area: Define the Asset Record",
          "Work area: Coordinate Maintenance Tasks"
        ],
        "btnText": "Scope Assets"
      },
      {
        "badge": "Assets Review",
        "label": "Prepare the handover",
        "amount": "QA",
        "amountUnit": " notes",
        "infoTitle": "Assets Review Points",
        "items": [
          {
            "title": "Service",
            "desc": "Record service findings and work outcomes.",
            "imageAlt": "Planning icon for asset management: service"
          },
          {
            "title": "Lifecycle",
            "desc": "Track assignments and asset retirement.",
            "imageAlt": "Planning icon for asset management: lifecycle"
          },
          {
            "title": "Assets Workflow",
            "desc": "Connect equipment records to maintenance decisions.",
            "imageAlt": "Planning icon for asset management: assets workflow"
          }
        ],
        "rightTitle": "Assets Review Checks",
        "features": [
          "Review: Service",
          "Review: Lifecycle",
          "Review: Equipment Record",
          "Review: Service Schedule",
          "Review: Lifecycle History",
          "Review: Define the Asset Record",
          "Review: Coordinate Maintenance Tasks",
          "Review: Keep Lifecycle Context",
          "Review: Register",
          "Review: Observe"
        ],
        "btnText": "Review Assets"
      }
    ],
    "showAll": "See All Checks ↓",
    "showLess": "See Fewer ↑",
    "previous": "← Previous",
    "next": "Next →",
    "stageLabel": "Stage"
  },
  "/procurement/": {
    "titleLead": "Procurement Work Planning",
    "titleRest": "Review the Scope in Stages",
    "intro": "Plan procurement around the work in scope. Coordinate requisitions, supplier bids and purchase approvals with clear records for each step in the corporate buying process.",
    "steps": [
      {
        "badge": "Procurement Scope",
        "label": "Clarify the requirements",
        "amount": "MAP",
        "amountUnit": " first",
        "infoTitle": "Procurement Priorities",
        "items": [
          {
            "title": "Clarify Purchase Requests",
            "desc": "Capture requested items, quantities and business context so approvers can review a requisition against its intended purpose.",
            "imageAlt": "Planning icon for procurement: clarify purchase requests"
          },
          {
            "title": "Compare Supplier Proposals",
            "desc": "Present bid details, terms and supporting documents on a consistent basis without hiding differences in the offer.",
            "imageAlt": "Planning icon for procurement: compare supplier proposals"
          },
          {
            "title": "Connect Approval to Ordering",
            "desc": "Link purchase decisions and order states to the original request, supplier and responsible team.",
            "imageAlt": "Planning icon for procurement: connect approval to ordering"
          }
        ],
        "rightTitle": "Procurement Scope Checks",
        "features": [
          "Scope: Clarify Purchase Requests",
          "Scope: Compare Supplier Proposals",
          "Scope: Connect Approval to Ordering",
          "Scope: Request",
          "Scope: Bids",
          "Scope: Approval",
          "Scope: Order",
          "Scope: Follow-up",
          "Scope: Purchase Request",
          "Scope: Approved Order"
        ],
        "btnText": "Plan Procurement"
      },
      {
        "badge": "Procurement Work",
        "label": "Organize the work",
        "amount": "WORK",
        "amountUnit": " scope",
        "infoTitle": "Procurement Work Areas",
        "items": [
          {
            "title": "Request",
            "desc": "Record requisition items and business needs.",
            "imageAlt": "Planning icon for procurement: request"
          },
          {
            "title": "Bids",
            "desc": "Collect supplier bids and purchase terms.",
            "imageAlt": "Planning icon for procurement: bids"
          },
          {
            "title": "Approval",
            "desc": "Route purchase decisions to reviewers.",
            "imageAlt": "Planning icon for procurement: approval"
          }
        ],
        "rightTitle": "Procurement Work Checks",
        "features": [
          "Work area: Request",
          "Work area: Bids",
          "Work area: Approval",
          "Work area: Order",
          "Work area: Follow-up",
          "Work area: Purchase Request",
          "Work area: Approved Order",
          "Work area: Decision Trail",
          "Work area: Clarify Purchase Requests",
          "Work area: Compare Supplier Proposals"
        ],
        "btnText": "Scope Procurement"
      },
      {
        "badge": "Procurement Review",
        "label": "Prepare the handover",
        "amount": "QA",
        "amountUnit": " notes",
        "infoTitle": "Procurement Review Points",
        "items": [
          {
            "title": "Order",
            "desc": "Link approvals to purchase orders.",
            "imageAlt": "Planning icon for procurement: order"
          },
          {
            "title": "Follow-up",
            "desc": "Track order status and supplier questions.",
            "imageAlt": "Planning icon for procurement: follow-up"
          },
          {
            "title": "Buying Workflow",
            "desc": "Connect requisitions, supplier choices and purchase orders.",
            "imageAlt": "Planning icon for procurement: buying workflow"
          }
        ],
        "rightTitle": "Procurement Review Checks",
        "features": [
          "Review: Order",
          "Review: Follow-up",
          "Review: Purchase Request",
          "Review: Approved Order",
          "Review: Decision Trail",
          "Review: Clarify Purchase Requests",
          "Review: Compare Supplier Proposals",
          "Review: Connect Approval to Ordering",
          "Review: Request",
          "Review: Bids"
        ],
        "btnText": "Review Procurement"
      }
    ],
    "showAll": "See All Checks ↓",
    "showLess": "See Fewer ↑",
    "previous": "← Previous",
    "next": "Next →",
    "stageLabel": "Stage"
  },
  "/enterprise-pm/": {
    "titleLead": "Projects Work Planning",
    "titleRest": "Review the Scope in Stages",
    "intro": "Plan enterprise projects around the work in scope. Bring project schedules, unit responsibilities and progress measures together so enterprise teams can review work across business boundaries.",
    "steps": [
      {
        "badge": "Projects Scope",
        "label": "Clarify the requirements",
        "amount": "MAP",
        "amountUnit": " first",
        "infoTitle": "Projects Priorities",
        "items": [
          {
            "title": "Connect Project Measures",
            "desc": "Agree on milestone definitions, reporting periods and progress measures before combining project information across units.",
            "imageAlt": "Planning icon for enterprise projects: connect project measures"
          },
          {
            "title": "Expose Cross-unit Dependencies",
            "desc": "Link deliverables and resource responsibilities to the teams they depend on so handoffs can be discussed in context.",
            "imageAlt": "Planning icon for enterprise projects: expose cross-unit dependencies"
          },
          {
            "title": "Keep Portfolio Reviews Actionable",
            "desc": "Present schedule changes, blockers and decisions with the owner and follow-up task required to move the work forward.",
            "imageAlt": "Planning icon for enterprise projects: keep portfolio reviews actionable"
          }
        ],
        "rightTitle": "Projects Scope Checks",
        "features": [
          "Scope: Connect Project Measures",
          "Scope: Expose Cross-unit Dependencies",
          "Scope: Keep Portfolio Reviews Actionable",
          "Scope: Projects",
          "Scope: Measures",
          "Scope: Dependencies",
          "Scope: Decisions",
          "Scope: Follow-up",
          "Scope: Portfolio Scope",
          "Scope: Progress Measures"
        ],
        "btnText": "Plan Projects"
      },
      {
        "badge": "Projects Work",
        "label": "Organize the work",
        "amount": "WORK",
        "amountUnit": " scope",
        "infoTitle": "Projects Work Areas",
        "items": [
          {
            "title": "Projects",
            "desc": "Define projects and participating units.",
            "imageAlt": "Planning icon for enterprise projects: projects"
          },
          {
            "title": "Measures",
            "desc": "Agree on progress and milestone measures.",
            "imageAlt": "Planning icon for enterprise projects: measures"
          },
          {
            "title": "Dependencies",
            "desc": "Connect deliverables across business teams.",
            "imageAlt": "Planning icon for enterprise projects: dependencies"
          }
        ],
        "rightTitle": "Projects Work Checks",
        "features": [
          "Work area: Projects",
          "Work area: Measures",
          "Work area: Dependencies",
          "Work area: Decisions",
          "Work area: Follow-up",
          "Work area: Portfolio Scope",
          "Work area: Progress Measures",
          "Work area: Unit Handoffs",
          "Work area: Connect Project Measures",
          "Work area: Expose Cross-unit Dependencies"
        ],
        "btnText": "Scope Projects"
      },
      {
        "badge": "Projects Review",
        "label": "Prepare the handover",
        "amount": "QA",
        "amountUnit": " notes",
        "infoTitle": "Projects Review Points",
        "items": [
          {
            "title": "Decisions",
            "desc": "Record blockers and accountable owners.",
            "imageAlt": "Planning icon for enterprise projects: decisions"
          },
          {
            "title": "Follow-up",
            "desc": "Track actions from portfolio reviews.",
            "imageAlt": "Planning icon for enterprise projects: follow-up"
          },
          {
            "title": "Portfolio Workflow",
            "desc": "Connect project dashboards to cross-unit delivery work.",
            "imageAlt": "Planning icon for enterprise projects: portfolio workflow"
          }
        ],
        "rightTitle": "Projects Review Checks",
        "features": [
          "Review: Decisions",
          "Review: Follow-up",
          "Review: Portfolio Scope",
          "Review: Progress Measures",
          "Review: Unit Handoffs",
          "Review: Connect Project Measures",
          "Review: Expose Cross-unit Dependencies",
          "Review: Keep Portfolio Reviews Actionable",
          "Review: Projects",
          "Review: Measures"
        ],
        "btnText": "Review Projects"
      }
    ],
    "showAll": "See All Checks ↓",
    "showLess": "See Fewer ↑",
    "previous": "← Previous",
    "next": "Next →",
    "stageLabel": "Stage"
  },
  "/logistics-fleet/": {
    "titleLead": "Fleets Work Planning",
    "titleRest": "Review the Scope in Stages",
    "intro": "Plan fleet operations around the work in scope. Connect driver records, vehicle telemetry and route updates so fleet teams can interpret operational events and coordinate follow-up.",
    "steps": [
      {
        "badge": "Fleets Scope",
        "label": "Clarify the requirements",
        "amount": "MAP",
        "amountUnit": " first",
        "infoTitle": "Fleets Priorities",
        "items": [
          {
            "title": "Keep Fleet Records Connected",
            "desc": "Associate drivers, vehicles and required operating documents with the assignments they support.",
            "imageAlt": "Planning icon for fleet operations: keep fleet records connected"
          },
          {
            "title": "Interpret Vehicle Signals",
            "desc": "Present fuel and telemetry readings with their source, time and vehicle context rather than as isolated dashboard numbers.",
            "imageAlt": "Planning icon for fleet operations: interpret vehicle signals"
          },
          {
            "title": "Coordinate Operational Changes",
            "desc": "Keep route adjustments, vehicle issues and dispatcher decisions linked to the active assignment and responsible person.",
            "imageAlt": "Planning icon for fleet operations: coordinate operational changes"
          }
        ],
        "rightTitle": "Fleets Scope Checks",
        "features": [
          "Scope: Keep Fleet Records Connected",
          "Scope: Interpret Vehicle Signals",
          "Scope: Coordinate Operational Changes",
          "Scope: Drivers",
          "Scope: Vehicles",
          "Scope: Telemetry",
          "Scope: Routes",
          "Scope: Follow-up",
          "Scope: Driver Records",
          "Scope: Vehicle Signals"
        ],
        "btnText": "Plan Fleets"
      },
      {
        "badge": "Fleets Work",
        "label": "Organize the work",
        "amount": "WORK",
        "amountUnit": " scope",
        "infoTitle": "Fleets Work Areas",
        "items": [
          {
            "title": "Drivers",
            "desc": "Track driver profiles and operating records.",
            "imageAlt": "Planning icon for fleet operations: drivers"
          },
          {
            "title": "Vehicles",
            "desc": "Link vehicles to active fleet assignments.",
            "imageAlt": "Planning icon for fleet operations: vehicles"
          },
          {
            "title": "Telemetry",
            "desc": "Record fuel and telemetry source context.",
            "imageAlt": "Planning icon for fleet operations: telemetry"
          }
        ],
        "rightTitle": "Fleets Work Checks",
        "features": [
          "Work area: Drivers",
          "Work area: Vehicles",
          "Work area: Telemetry",
          "Work area: Routes",
          "Work area: Follow-up",
          "Work area: Driver Records",
          "Work area: Vehicle Signals",
          "Work area: Route Updates",
          "Work area: Keep Fleet Records Connected",
          "Work area: Interpret Vehicle Signals"
        ],
        "btnText": "Scope Fleets"
      },
      {
        "badge": "Fleets Review",
        "label": "Prepare the handover",
        "amount": "QA",
        "amountUnit": " notes",
        "infoTitle": "Fleets Review Points",
        "items": [
          {
            "title": "Routes",
            "desc": "Keep route changes with dispatch records.",
            "imageAlt": "Planning icon for fleet operations: routes"
          },
          {
            "title": "Follow-up",
            "desc": "Assign driver and vehicle follow-up.",
            "imageAlt": "Planning icon for fleet operations: follow-up"
          },
          {
            "title": "Fleet Workflow",
            "desc": "Connect vehicle signals to driver and dispatch activity.",
            "imageAlt": "Planning icon for fleet operations: fleet workflow"
          }
        ],
        "rightTitle": "Fleets Review Checks",
        "features": [
          "Review: Routes",
          "Review: Follow-up",
          "Review: Driver Records",
          "Review: Vehicle Signals",
          "Review: Route Updates",
          "Review: Keep Fleet Records Connected",
          "Review: Interpret Vehicle Signals",
          "Review: Coordinate Operational Changes",
          "Review: Drivers",
          "Review: Vehicles"
        ],
        "btnText": "Review Fleets"
      }
    ],
    "showAll": "See All Checks ↓",
    "showLess": "See Fewer ↑",
    "previous": "← Previous",
    "next": "Next →",
    "stageLabel": "Stage"
  },
  "/enterprise-commerce/": {
    "titleLead": "B2B Commerce Work Planning",
    "titleRest": "Review the Scope in Stages",
    "intro": "Plan enterprise commerce around the work in scope. Build wholesale ordering around company accounts, agreed pricing and the billing and invoice workflows that follow a purchase.",
    "steps": [
      {
        "badge": "B2B Commerce Scope",
        "label": "Clarify the requirements",
        "amount": "MAP",
        "amountUnit": " first",
        "infoTitle": "B2B Commerce Priorities",
        "items": [
          {
            "title": "Model Company Purchasing",
            "desc": "Connect buyer roles, account permissions and purchase requirements to the organization placing an order.",
            "imageAlt": "Planning icon for enterprise commerce: model company purchasing"
          },
          {
            "title": "Apply Contract Pricing Context",
            "desc": "Represent company-specific prices and terms explicitly so buyers can understand the commercial basis of a purchase.",
            "imageAlt": "Planning icon for enterprise commerce: apply contract pricing context"
          },
          {
            "title": "Connect Orders and Invoices",
            "desc": "Keep order, billing and reconciliation records linked so finance and service teams can investigate differences.",
            "imageAlt": "Planning icon for enterprise commerce: connect orders and invoices"
          }
        ],
        "rightTitle": "B2B Commerce Scope Checks",
        "features": [
          "Scope: Model Company Purchasing",
          "Scope: Apply Contract Pricing Context",
          "Scope: Connect Orders and Invoices",
          "Scope: Accounts",
          "Scope: Terms",
          "Scope: Orders",
          "Scope: Invoices",
          "Scope: Matching",
          "Scope: Company Accounts",
          "Scope: Purchase Context"
        ],
        "btnText": "Plan B2B Commerce"
      },
      {
        "badge": "B2B Commerce Work",
        "label": "Organize the work",
        "amount": "WORK",
        "amountUnit": " scope",
        "infoTitle": "B2B Commerce Work Areas",
        "items": [
          {
            "title": "Accounts",
            "desc": "Define company buyers and purchasing roles.",
            "imageAlt": "Planning icon for enterprise commerce: accounts"
          },
          {
            "title": "Terms",
            "desc": "Link contract prices to company accounts.",
            "imageAlt": "Planning icon for enterprise commerce: terms"
          },
          {
            "title": "Orders",
            "desc": "Capture quantities and purchase references.",
            "imageAlt": "Planning icon for enterprise commerce: orders"
          }
        ],
        "rightTitle": "B2B Commerce Work Checks",
        "features": [
          "Work area: Accounts",
          "Work area: Terms",
          "Work area: Orders",
          "Work area: Invoices",
          "Work area: Matching",
          "Work area: Company Accounts",
          "Work area: Purchase Context",
          "Work area: Invoice Matching",
          "Work area: Model Company Purchasing",
          "Work area: Apply Contract Pricing Context"
        ],
        "btnText": "Scope B2B Commerce"
      },
      {
        "badge": "B2B Commerce Review",
        "label": "Prepare the handover",
        "amount": "QA",
        "amountUnit": " notes",
        "infoTitle": "B2B Commerce Review Points",
        "items": [
          {
            "title": "Invoices",
            "desc": "Connect invoices to originating orders.",
            "imageAlt": "Planning icon for enterprise commerce: invoices"
          },
          {
            "title": "Matching",
            "desc": "Review order and invoice differences.",
            "imageAlt": "Planning icon for enterprise commerce: matching"
          },
          {
            "title": "Wholesale Workflow",
            "desc": "Connect company buying terms to ordering and invoicing.",
            "imageAlt": "Planning icon for enterprise commerce: wholesale workflow"
          }
        ],
        "rightTitle": "B2B Commerce Review Checks",
        "features": [
          "Review: Invoices",
          "Review: Matching",
          "Review: Company Accounts",
          "Review: Purchase Context",
          "Review: Invoice Matching",
          "Review: Model Company Purchasing",
          "Review: Apply Contract Pricing Context",
          "Review: Connect Orders and Invoices",
          "Review: Accounts",
          "Review: Terms"
        ],
        "btnText": "Review B2B Commerce"
      }
    ],
    "showAll": "See All Checks ↓",
    "showLess": "See Fewer ↑",
    "previous": "← Previous",
    "next": "Next →",
    "stageLabel": "Stage"
  },
  "/headless-cms/": {
    "titleLead": "Headless CMS Work Planning",
    "titleRest": "Review the Scope in Stages",
    "intro": "Plan headless cms around the work in scope. Connect structured content, media and publishing states to the APIs and frontend applications that present them.",
    "steps": [
      {
        "badge": "Headless CMS Scope",
        "label": "Clarify the requirements",
        "amount": "MAP",
        "amountUnit": " first",
        "infoTitle": "Headless CMS Priorities",
        "items": [
          {
            "title": "Model Reusable Content",
            "desc": "Define content types, relationships and media fields around editorial needs and the channels that will consume the records.",
            "imageAlt": "Planning icon for headless cms: model reusable content"
          },
          {
            "title": "Connect Preview and Publishing",
            "desc": "Give editors a clear route from draft review to published content, including the frontend's refresh expectations.",
            "imageAlt": "Planning icon for headless cms: connect preview and publishing"
          },
          {
            "title": "Define Delivery Contracts",
            "desc": "Specify how frontend clients request content and handle missing records, media alternatives and unpublished material.",
            "imageAlt": "Planning icon for headless cms: define delivery contracts"
          }
        ],
        "rightTitle": "Headless CMS Scope Checks",
        "features": [
          "Scope: Model Reusable Content",
          "Scope: Connect Preview and Publishing",
          "Scope: Define Delivery Contracts",
          "Scope: Models",
          "Scope: Media",
          "Scope: Preview",
          "Scope: Publish",
          "Scope: Channels",
          "Scope: Editorial Models",
          "Scope: Content Delivery"
        ],
        "btnText": "Plan Headless CMS"
      },
      {
        "badge": "Headless CMS Work",
        "label": "Organize the work",
        "amount": "WORK",
        "amountUnit": " scope",
        "infoTitle": "Headless CMS Work Areas",
        "items": [
          {
            "title": "Models",
            "desc": "Define content fields and relationships.",
            "imageAlt": "Planning icon for headless cms: models"
          },
          {
            "title": "Media",
            "desc": "Link media assets and their descriptions.",
            "imageAlt": "Planning icon for headless cms: media"
          },
          {
            "title": "Preview",
            "desc": "Review drafts in the frontend context.",
            "imageAlt": "Planning icon for headless cms: preview"
          }
        ],
        "rightTitle": "Headless CMS Work Checks",
        "features": [
          "Work area: Models",
          "Work area: Media",
          "Work area: Preview",
          "Work area: Publish",
          "Work area: Channels",
          "Work area: Editorial Models",
          "Work area: Content Delivery",
          "Work area: Publish Workflow",
          "Work area: Model Reusable Content",
          "Work area: Connect Preview and Publishing"
        ],
        "btnText": "Scope Headless CMS"
      },
      {
        "badge": "Headless CMS Review",
        "label": "Prepare the handover",
        "amount": "QA",
        "amountUnit": " notes",
        "infoTitle": "Headless CMS Review Points",
        "items": [
          {
            "title": "Publish",
            "desc": "Coordinate publishing and frontend refresh.",
            "imageAlt": "Planning icon for headless cms: publish"
          },
          {
            "title": "Channels",
            "desc": "Define API delivery for each channel.",
            "imageAlt": "Planning icon for headless cms: channels"
          },
          {
            "title": "Content Workflow",
            "desc": "Connect editorial records to frontend content delivery.",
            "imageAlt": "Planning icon for headless cms: content workflow"
          }
        ],
        "rightTitle": "Headless CMS Review Checks",
        "features": [
          "Review: Publish",
          "Review: Channels",
          "Review: Editorial Models",
          "Review: Content Delivery",
          "Review: Publish Workflow",
          "Review: Model Reusable Content",
          "Review: Connect Preview and Publishing",
          "Review: Define Delivery Contracts",
          "Review: Models",
          "Review: Media"
        ],
        "btnText": "Review Headless CMS"
      }
    ],
    "showAll": "See All Checks ↓",
    "showLess": "See Fewer ↑",
    "previous": "← Previous",
    "next": "Next →",
    "stageLabel": "Stage"
  },
  "/corporate-intranets/": {
    "titleLead": "Intranets Work Planning",
    "titleRest": "Review the Scope in Stages",
    "intro": "Plan corporate intranets around the work in scope. Organize company documents, communications and employee resources around the access and publishing responsibilities of internal teams.",
    "steps": [
      {
        "badge": "Intranets Scope",
        "label": "Clarify the requirements",
        "amount": "MAP",
        "amountUnit": " first",
        "infoTitle": "Intranets Priorities",
        "items": [
          {
            "title": "Structure Internal Information",
            "desc": "Connect resource categories, document ownership and employee directory fields to the tasks people need to complete.",
            "imageAlt": "Planning icon for corporate intranets: structure internal information"
          },
          {
            "title": "Define Staff Access",
            "desc": "Set visibility and contribution rules for internal information, including sensitive resources and department-specific material.",
            "imageAlt": "Planning icon for corporate intranets: define staff access"
          },
          {
            "title": "Keep Communications Current",
            "desc": "Give authors and reviewers clear publishing and update responsibilities for announcements, policies and shared resources.",
            "imageAlt": "Planning icon for corporate intranets: keep communications current"
          }
        ],
        "rightTitle": "Intranets Scope Checks",
        "features": [
          "Scope: Structure Internal Information",
          "Scope: Define Staff Access",
          "Scope: Keep Communications Current",
          "Scope: Resources",
          "Scope: Directory",
          "Scope: Access",
          "Scope: Publishing",
          "Scope: Updates",
          "Scope: Internal Resources",
          "Scope: Staff Access"
        ],
        "btnText": "Plan Intranets"
      },
      {
        "badge": "Intranets Work",
        "label": "Organize the work",
        "amount": "WORK",
        "amountUnit": " scope",
        "infoTitle": "Intranets Work Areas",
        "items": [
          {
            "title": "Resources",
            "desc": "Organize resources around employee tasks.",
            "imageAlt": "Planning icon for corporate intranets: resources"
          },
          {
            "title": "Directory",
            "desc": "Connect directory entries to team context.",
            "imageAlt": "Planning icon for corporate intranets: directory"
          },
          {
            "title": "Access",
            "desc": "Set internal visibility and editing rules.",
            "imageAlt": "Planning icon for corporate intranets: access"
          }
        ],
        "rightTitle": "Intranets Work Checks",
        "features": [
          "Work area: Resources",
          "Work area: Directory",
          "Work area: Access",
          "Work area: Publishing",
          "Work area: Updates",
          "Work area: Internal Resources",
          "Work area: Staff Access",
          "Work area: Content Ownership",
          "Work area: Structure Internal Information",
          "Work area: Define Staff Access"
        ],
        "btnText": "Scope Intranets"
      },
      {
        "badge": "Intranets Review",
        "label": "Prepare the handover",
        "amount": "QA",
        "amountUnit": " notes",
        "infoTitle": "Intranets Review Points",
        "items": [
          {
            "title": "Publishing",
            "desc": "Route documents through publishing review.",
            "imageAlt": "Planning icon for corporate intranets: publishing"
          },
          {
            "title": "Updates",
            "desc": "Assign ownership of resource updates.",
            "imageAlt": "Planning icon for corporate intranets: updates"
          },
          {
            "title": "Intranet Workflow",
            "desc": "Connect staff access to documents and company resources.",
            "imageAlt": "Planning icon for corporate intranets: intranet workflow"
          }
        ],
        "rightTitle": "Intranets Review Checks",
        "features": [
          "Review: Publishing",
          "Review: Updates",
          "Review: Internal Resources",
          "Review: Staff Access",
          "Review: Content Ownership",
          "Review: Structure Internal Information",
          "Review: Define Staff Access",
          "Review: Keep Communications Current",
          "Review: Resources",
          "Review: Directory"
        ],
        "btnText": "Review Intranets"
      }
    ],
    "showAll": "See All Checks ↓",
    "showLess": "See Fewer ↑",
    "previous": "← Previous",
    "next": "Next →",
    "stageLabel": "Stage"
  },
  "/financial-planning-analyses/": {
    "titleLead": "Finance Work Planning",
    "titleRest": "Review the Scope in Stages",
    "intro": "Plan financial planning around the work in scope. Connect forecasts, expense scenarios and budget tracking to the source figures and assumptions finance teams need to review.",
    "steps": [
      {
        "badge": "Finance Scope",
        "label": "Clarify the requirements",
        "amount": "MAP",
        "amountUnit": " first",
        "infoTitle": "Finance Priorities",
        "items": [
          {
            "title": "Define Planning Inputs",
            "desc": "Organize actual figures, budget categories and time periods before building a forecast or comparing financial scenarios.",
            "imageAlt": "Planning icon for financial planning: define planning inputs"
          },
          {
            "title": "Make Scenario Logic Explicit",
            "desc": "Keep assumptions and variable changes visible so reviewers can understand why projected expenses or balances differ.",
            "imageAlt": "Planning icon for financial planning: make scenario logic explicit"
          },
          {
            "title": "Connect Plans to Reviews",
            "desc": "Present budget variances with their calculation basis and assign follow-up to the people responsible for the underlying activity.",
            "imageAlt": "Planning icon for financial planning: connect plans to reviews"
          }
        ],
        "rightTitle": "Finance Scope Checks",
        "features": [
          "Scope: Define Planning Inputs",
          "Scope: Make Scenario Logic Explicit",
          "Scope: Connect Plans to Reviews",
          "Scope: Inputs",
          "Scope: Assumptions",
          "Scope: Forecast",
          "Scope: Variance",
          "Scope: Review",
          "Scope: Budget Inputs",
          "Scope: Scenario Context"
        ],
        "btnText": "Plan Finance"
      },
      {
        "badge": "Finance Work",
        "label": "Organize the work",
        "amount": "WORK",
        "amountUnit": " scope",
        "infoTitle": "Finance Work Areas",
        "items": [
          {
            "title": "Inputs",
            "desc": "Identify source figures and planning periods.",
            "imageAlt": "Planning icon for financial planning: inputs"
          },
          {
            "title": "Assumptions",
            "desc": "Record scenario variables and assumptions.",
            "imageAlt": "Planning icon for financial planning: assumptions"
          },
          {
            "title": "Forecast",
            "desc": "Calculate projections from planning inputs.",
            "imageAlt": "Planning icon for financial planning: forecast"
          }
        ],
        "rightTitle": "Finance Work Checks",
        "features": [
          "Work area: Inputs",
          "Work area: Assumptions",
          "Work area: Forecast",
          "Work area: Variance",
          "Work area: Review",
          "Work area: Budget Inputs",
          "Work area: Scenario Context",
          "Work area: Variance Review",
          "Work area: Define Planning Inputs",
          "Work area: Make Scenario Logic Explicit"
        ],
        "btnText": "Scope Finance"
      },
      {
        "badge": "Finance Review",
        "label": "Prepare the handover",
        "amount": "QA",
        "amountUnit": " notes",
        "infoTitle": "Finance Review Points",
        "items": [
          {
            "title": "Variance",
            "desc": "Compare budgets and actuals consistently.",
            "imageAlt": "Planning icon for financial planning: variance"
          },
          {
            "title": "Review",
            "desc": "Assign review of financial differences.",
            "imageAlt": "Planning icon for financial planning: review"
          },
          {
            "title": "FP&A Workflow",
            "desc": "Connect financial projections to their planning assumptions.",
            "imageAlt": "Planning icon for financial planning: fp&a workflow"
          }
        ],
        "rightTitle": "Finance Review Checks",
        "features": [
          "Review: Variance",
          "Review: Review",
          "Review: Budget Inputs",
          "Review: Scenario Context",
          "Review: Variance Review",
          "Review: Define Planning Inputs",
          "Review: Make Scenario Logic Explicit",
          "Review: Connect Plans to Reviews",
          "Review: Inputs",
          "Review: Assumptions"
        ],
        "btnText": "Review Finance"
      }
    ],
    "showAll": "See All Checks ↓",
    "showLess": "See Fewer ↑",
    "previous": "← Previous",
    "next": "Next →",
    "stageLabel": "Stage"
  },
  "/transaction-systems/": {
    "titleLead": "Txn Systems Work Planning",
    "titleRest": "Review the Scope in Stages",
    "intro": "Plan transaction systems around the work in scope. Connect payment events, ledger records and settlement status so teams can trace transaction processing and handle exceptions with context.",
    "steps": [
      {
        "badge": "Txn Systems Scope",
        "label": "Clarify the requirements",
        "amount": "MAP",
        "amountUnit": " first",
        "infoTitle": "Txn Systems Priorities",
        "items": [
          {
            "title": "Model Transaction States",
            "desc": "Define how a request moves through validation, processing and completion, including repeated or unsuccessful submissions.",
            "imageAlt": "Planning icon for transaction systems: model transaction states"
          },
          {
            "title": "Keep Ledger Events Connected",
            "desc": "Associate transaction identifiers and relevant accounting events so balances and status changes can be investigated.",
            "imageAlt": "Planning icon for transaction systems: keep ledger events connected"
          },
          {
            "title": "Review Settlement Exceptions",
            "desc": "Connect provider responses and settlement records to the originating transaction, including unresolved or mismatched outcomes.",
            "imageAlt": "Planning icon for transaction systems: review settlement exceptions"
          }
        ],
        "rightTitle": "Txn Systems Scope Checks",
        "features": [
          "Scope: Model Transaction States",
          "Scope: Keep Ledger Events Connected",
          "Scope: Review Settlement Exceptions",
          "Scope: Request",
          "Scope: Identity",
          "Scope: Processing",
          "Scope: Ledger",
          "Scope: Settlement",
          "Scope: Processing States",
          "Scope: Provider Exchange"
        ],
        "btnText": "Plan Txn Systems"
      },
      {
        "badge": "Txn Systems Work",
        "label": "Organize the work",
        "amount": "WORK",
        "amountUnit": " scope",
        "infoTitle": "Txn Systems Work Areas",
        "items": [
          {
            "title": "Request",
            "desc": "Validate payment requests and their context.",
            "imageAlt": "Planning icon for transaction systems: request"
          },
          {
            "title": "Identity",
            "desc": "Connect identifiers across payment services.",
            "imageAlt": "Planning icon for transaction systems: identity"
          },
          {
            "title": "Processing",
            "desc": "Track pending and unsuccessful outcomes.",
            "imageAlt": "Planning icon for transaction systems: processing"
          }
        ],
        "rightTitle": "Txn Systems Work Checks",
        "features": [
          "Work area: Request",
          "Work area: Identity",
          "Work area: Processing",
          "Work area: Ledger",
          "Work area: Settlement",
          "Work area: Processing States",
          "Work area: Provider Exchange",
          "Work area: Settlement Review",
          "Work area: Model Transaction States",
          "Work area: Keep Ledger Events Connected"
        ],
        "btnText": "Scope Txn Systems"
      },
      {
        "badge": "Txn Systems Review",
        "label": "Prepare the handover",
        "amount": "QA",
        "amountUnit": " notes",
        "infoTitle": "Txn Systems Review Points",
        "items": [
          {
            "title": "Ledger",
            "desc": "Link ledger events to transaction records.",
            "imageAlt": "Planning icon for transaction systems: ledger"
          },
          {
            "title": "Settlement",
            "desc": "Review settlement reconciliation states.",
            "imageAlt": "Planning icon for transaction systems: settlement"
          },
          {
            "title": "Payments Workflow",
            "desc": "Trace transaction requests through processing and settlement.",
            "imageAlt": "Planning icon for transaction systems: payments workflow"
          }
        ],
        "rightTitle": "Txn Systems Review Checks",
        "features": [
          "Review: Ledger",
          "Review: Settlement",
          "Review: Processing States",
          "Review: Provider Exchange",
          "Review: Settlement Review",
          "Review: Model Transaction States",
          "Review: Keep Ledger Events Connected",
          "Review: Review Settlement Exceptions",
          "Review: Request",
          "Review: Identity"
        ],
        "btnText": "Review Txn Systems"
      }
    ],
    "showAll": "See All Checks ↓",
    "showLess": "See Fewer ↑",
    "previous": "← Previous",
    "next": "Next →",
    "stageLabel": "Stage"
  },
  "/enterprise-accounting/": {
    "titleLead": "Accounting Work Planning",
    "titleRest": "Review the Scope in Stages",
    "intro": "Plan enterprise accounting around the work in scope. Build bookkeeping workflows around defined posting rules, currency context and a traceable relationship between entries and source records.",
    "steps": [
      {
        "badge": "Accounting Scope",
        "label": "Clarify the requirements",
        "amount": "MAP",
        "amountUnit": " first",
        "infoTitle": "Accounting Priorities",
        "items": [
          {
            "title": "Define Posting Responsibilities",
            "desc": "Connect journals, account structures and approval roles so each accounting entry has a clear origin and review path.",
            "imageAlt": "Planning icon for enterprise accounting: define posting responsibilities"
          },
          {
            "title": "Keep Currency Context Visible",
            "desc": "Associate amounts with currencies, applicable rates and calculation periods when preparing balances or consolidated views.",
            "imageAlt": "Planning icon for enterprise accounting: keep currency context visible"
          },
          {
            "title": "Trace Changes and Reconciliation",
            "desc": "Retain source references and change history so finance teams can review adjustments and investigate balance differences.",
            "imageAlt": "Planning icon for enterprise accounting: trace changes and reconciliation"
          }
        ],
        "rightTitle": "Accounting Scope Checks",
        "features": [
          "Scope: Define Posting Responsibilities",
          "Scope: Keep Currency Context Visible",
          "Scope: Trace Changes and Reconciliation",
          "Scope: Sources",
          "Scope: Posting",
          "Scope: Currency",
          "Scope: Balances",
          "Scope: Audit Trail",
          "Scope: Ledger Entries",
          "Scope: Currency Context"
        ],
        "btnText": "Plan Accounting"
      },
      {
        "badge": "Accounting Work",
        "label": "Organize the work",
        "amount": "WORK",
        "amountUnit": " scope",
        "infoTitle": "Accounting Work Areas",
        "items": [
          {
            "title": "Sources",
            "desc": "Link entries to source accounting records.",
            "imageAlt": "Planning icon for enterprise accounting: sources"
          },
          {
            "title": "Posting",
            "desc": "Apply posting rules and approval duties.",
            "imageAlt": "Planning icon for enterprise accounting: posting"
          },
          {
            "title": "Currency",
            "desc": "Retain currency and exchange-rate context.",
            "imageAlt": "Planning icon for enterprise accounting: currency"
          }
        ],
        "rightTitle": "Accounting Work Checks",
        "features": [
          "Work area: Sources",
          "Work area: Posting",
          "Work area: Currency",
          "Work area: Balances",
          "Work area: Audit Trail",
          "Work area: Ledger Entries",
          "Work area: Currency Context",
          "Work area: Adjustment History",
          "Work area: Define Posting Responsibilities",
          "Work area: Keep Currency Context Visible"
        ],
        "btnText": "Scope Accounting"
      },
      {
        "badge": "Accounting Review",
        "label": "Prepare the handover",
        "amount": "QA",
        "amountUnit": " notes",
        "infoTitle": "Accounting Review Points",
        "items": [
          {
            "title": "Balances",
            "desc": "Calculate totals for the selected period.",
            "imageAlt": "Planning icon for enterprise accounting: balances"
          },
          {
            "title": "Audit Trail",
            "desc": "Trace adjustments and reconciliation work.",
            "imageAlt": "Planning icon for enterprise accounting: audit trail"
          },
          {
            "title": "Accounts Workflow",
            "desc": "Connect source entries to balances and accounting reviews.",
            "imageAlt": "Planning icon for enterprise accounting: accounts workflow"
          }
        ],
        "rightTitle": "Accounting Review Checks",
        "features": [
          "Review: Balances",
          "Review: Audit Trail",
          "Review: Ledger Entries",
          "Review: Currency Context",
          "Review: Adjustment History",
          "Review: Define Posting Responsibilities",
          "Review: Keep Currency Context Visible",
          "Review: Trace Changes and Reconciliation",
          "Review: Sources",
          "Review: Posting"
        ],
        "btnText": "Review Accounting"
      }
    ],
    "showAll": "See All Checks ↓",
    "showLess": "See Fewer ↑",
    "previous": "← Previous",
    "next": "Next →",
    "stageLabel": "Stage"
  },
  "/business-intelligence/": {
    "titleLead": "BI Work Planning",
    "titleRest": "Review the Scope in Stages",
    "intro": "Plan business intelligence around the work in scope. Connect commercial dashboards to the queries, definitions and assumptions that make investment discussions understandable.",
    "steps": [
      {
        "badge": "BI Scope",
        "label": "Clarify the requirements",
        "amount": "MAP",
        "amountUnit": " first",
        "infoTitle": "BI Priorities",
        "items": [
          {
            "title": "Commercial Questions",
            "desc": "Identify the investment or operating question a business view should help its readers investigate.",
            "imageAlt": "Planning icon for business intelligence: commercial questions"
          },
          {
            "title": "Query Pipelines",
            "desc": "Trace transformations and relationships from business records to the measures presented in a dashboard.",
            "imageAlt": "Planning icon for business intelligence: query pipelines"
          },
          {
            "title": "Visual Interpretation",
            "desc": "Keep periods and calculation assumptions visible when presenting commercial trends or comparisons.",
            "imageAlt": "Planning icon for business intelligence: visual interpretation"
          }
        ],
        "rightTitle": "BI Scope Checks",
        "features": [
          "Scope: Investment questions",
          "Scope: Commercial measures",
          "Scope: Comparison requirements",
          "Scope: Decision context",
          "Scope: Business-source queries",
          "Scope: Transformation context",
          "Scope: Measure traceability",
          "Scope: Dataset relationships",
          "Scope: Period definitions",
          "Scope: Assumption visibility"
        ],
        "btnText": "Plan BI"
      },
      {
        "badge": "BI Work",
        "label": "Organize the work",
        "amount": "WORK",
        "amountUnit": " scope",
        "infoTitle": "BI Work Areas",
        "items": [
          {
            "title": "Investment questions",
            "desc": "For business intelligence, include commercial measures, comparison requirements, decision context when defining commercial questions.",
            "imageAlt": "Planning icon for business intelligence: investment questions"
          },
          {
            "title": "Business-source queries",
            "desc": "For business intelligence, include transformation context, measure traceability, dataset relationships when defining query pipelines.",
            "imageAlt": "Planning icon for business intelligence: business-source queries"
          },
          {
            "title": "Period definitions",
            "desc": "For business intelligence, include assumption visibility, comparison context, visual interpretation when defining visual interpretation.",
            "imageAlt": "Planning icon for business intelligence: period definitions"
          }
        ],
        "rightTitle": "BI Work Checks",
        "features": [
          "Work area: Decision context",
          "Work area: Business-source queries",
          "Work area: Transformation context",
          "Work area: Measure traceability",
          "Work area: Dataset relationships",
          "Work area: Period definitions",
          "Work area: Assumption visibility",
          "Work area: Comparison context",
          "Work area: Visual interpretation",
          "Work area: Evidence discussion"
        ],
        "btnText": "Scope BI"
      },
      {
        "badge": "BI Review",
        "label": "Prepare the handover",
        "amount": "QA",
        "amountUnit": " notes",
        "infoTitle": "BI Review Points",
        "items": [
          {
            "title": "Decision Review",
            "desc": "Keep source coverage and interpretation questions visible during commercial dashboard reviews.",
            "imageAlt": "Planning icon for business intelligence: decision review"
          },
          {
            "title": "Evidence discussion",
            "desc": "Review evidence discussion alongside source-coverage limits before agreeing the business intelligence handover.",
            "imageAlt": "Planning icon for business intelligence: evidence discussion"
          },
          {
            "title": "Interpretation questions",
            "desc": "Keep interpretation questions and review responsibilities in the business intelligence review record.",
            "imageAlt": "Planning icon for business intelligence: interpretation questions"
          }
        ],
        "rightTitle": "BI Review Checks",
        "features": [
          "Review: Measure traceability",
          "Review: Dataset relationships",
          "Review: Period definitions",
          "Review: Assumption visibility",
          "Review: Comparison context",
          "Review: Visual interpretation",
          "Review: Evidence discussion",
          "Review: Source-coverage limits",
          "Review: Interpretation questions",
          "Review: Review responsibilities"
        ],
        "btnText": "Review BI"
      }
    ],
    "showAll": "See All Checks ↓",
    "showLess": "See Fewer ↑",
    "previous": "← Previous",
    "next": "Next →",
    "stageLabel": "Stage"
  },
  "/applied-ai/": {
    "titleLead": "Applied AI Work Planning",
    "titleRest": "Review the Scope in Stages",
    "intro": "Plan applied ai around the work in scope. Connect text interpretation and conversational assistance to source material, business records and reviewable application actions.",
    "steps": [
      {
        "badge": "Applied AI Scope",
        "label": "Clarify the requirements",
        "amount": "MAP",
        "amountUnit": " first",
        "infoTitle": "Applied AI Priorities",
        "items": [
          {
            "title": "Document Tasks",
            "desc": "Define the fields or questions an AI capability should interpret within a particular business document workflow.",
            "imageAlt": "Planning icon for applied ai: document tasks"
          },
          {
            "title": "Conversational Context",
            "desc": "Keep user questions and generated responses associated with the relevant application information.",
            "imageAlt": "Planning icon for applied ai: conversational context"
          },
          {
            "title": "Interface Integration",
            "desc": "Present AI assistance alongside the user task and define which subsequent actions require confirmation.",
            "imageAlt": "Planning icon for applied ai: interface integration"
          }
        ],
        "rightTitle": "Applied AI Scope Checks",
        "features": [
          "Scope: Document-field needs",
          "Scope: Source-material context",
          "Scope: Interpretation tasks",
          "Scope: Required output format",
          "Scope: User-question context",
          "Scope: Relevant record sources",
          "Scope: Response boundaries",
          "Scope: Conversation handoffs",
          "Scope: In-task assistance",
          "Scope: Output presentation"
        ],
        "btnText": "Plan Applied AI"
      },
      {
        "badge": "Applied AI Work",
        "label": "Organize the work",
        "amount": "WORK",
        "amountUnit": " scope",
        "infoTitle": "Applied AI Work Areas",
        "items": [
          {
            "title": "Document-field needs",
            "desc": "For applied ai, include source-material context, interpretation tasks, required output format when defining document tasks.",
            "imageAlt": "Planning icon for applied ai: document-field needs"
          },
          {
            "title": "User-question context",
            "desc": "For applied ai, include relevant record sources, response boundaries, conversation handoffs when defining conversational context.",
            "imageAlt": "Planning icon for applied ai: user-question context"
          },
          {
            "title": "In-task assistance",
            "desc": "For applied ai, include output presentation, confirmation rules, application action limits when defining interface integration.",
            "imageAlt": "Planning icon for applied ai: in-task assistance"
          }
        ],
        "rightTitle": "Applied AI Work Checks",
        "features": [
          "Work area: Required output format",
          "Work area: User-question context",
          "Work area: Relevant record sources",
          "Work area: Response boundaries",
          "Work area: Conversation handoffs",
          "Work area: In-task assistance",
          "Work area: Output presentation",
          "Work area: Confirmation rules",
          "Work area: Application action limits",
          "Work area: Extraction review"
        ],
        "btnText": "Scope Applied AI"
      },
      {
        "badge": "Applied AI Review",
        "label": "Prepare the handover",
        "amount": "QA",
        "amountUnit": " notes",
        "infoTitle": "Applied AI Review Points",
        "items": [
          {
            "title": "Result Inspection",
            "desc": "Provide review paths for incomplete extraction, unsuitable responses and unavailable AI services.",
            "imageAlt": "Planning icon for applied ai: result inspection"
          },
          {
            "title": "Extraction review",
            "desc": "Review extraction review alongside unsuitable-response checks before agreeing the applied ai handover.",
            "imageAlt": "Planning icon for applied ai: extraction review"
          },
          {
            "title": "Unavailable-service paths",
            "desc": "Keep unavailable-service paths and user correction context in the applied ai review record.",
            "imageAlt": "Planning icon for applied ai: unavailable-service paths"
          }
        ],
        "rightTitle": "Applied AI Review Checks",
        "features": [
          "Review: Response boundaries",
          "Review: Conversation handoffs",
          "Review: In-task assistance",
          "Review: Output presentation",
          "Review: Confirmation rules",
          "Review: Application action limits",
          "Review: Extraction review",
          "Review: Unsuitable-response checks",
          "Review: Unavailable-service paths",
          "Review: User correction context"
        ],
        "btnText": "Review Applied AI"
      }
    ],
    "showAll": "See All Checks ↓",
    "showLess": "See Fewer ↑",
    "previous": "← Previous",
    "next": "Next →",
    "stageLabel": "Stage"
  },
  "/hris-software/": {
    "titleLead": "HR Systems Work Planning",
    "titleRest": "Review the Scope in Stages",
    "intro": "Plan hr information systems around the work in scope. Connect recruiting, employee records, payroll inputs and leave balances through clear roles and consistent personnel information.",
    "steps": [
      {
        "badge": "HR Systems Scope",
        "label": "Clarify the requirements",
        "amount": "MAP",
        "amountUnit": " first",
        "infoTitle": "HR Systems Priorities",
        "items": [
          {
            "title": "Connect the Employee Record",
            "desc": "Organize candidate and employee information with explicit relationships between recruitment, employment and payroll profiles.",
            "imageAlt": "Planning icon for hr information systems: connect the employee record"
          },
          {
            "title": "Model HR Actions Clearly",
            "desc": "Define approval and effective-date rules for leave requests, personnel changes and payroll-related updates.",
            "imageAlt": "Planning icon for hr information systems: model hr actions clearly"
          },
          {
            "title": "Review Sensitive Changes",
            "desc": "Keep access responsibilities and change history connected to the HR records that require administrative follow-up.",
            "imageAlt": "Planning icon for hr information systems: review sensitive changes"
          }
        ],
        "rightTitle": "HR Systems Scope Checks",
        "features": [
          "Scope: Connect the Employee Record",
          "Scope: Model HR Actions Clearly",
          "Scope: Review Sensitive Changes",
          "Scope: Recruitment",
          "Scope: People",
          "Scope: Payroll",
          "Scope: Leave",
          "Scope: History",
          "Scope: Personnel Records",
          "Scope: Approval Steps"
        ],
        "btnText": "Plan HR Systems"
      },
      {
        "badge": "HR Systems Work",
        "label": "Organize the work",
        "amount": "WORK",
        "amountUnit": " scope",
        "infoTitle": "HR Systems Work Areas",
        "items": [
          {
            "title": "Recruitment",
            "desc": "Track candidates and hiring-stage owners.",
            "imageAlt": "Planning icon for hr information systems: recruitment"
          },
          {
            "title": "People",
            "desc": "Maintain employee and employment records.",
            "imageAlt": "Planning icon for hr information systems: people"
          },
          {
            "title": "Payroll",
            "desc": "Connect approved data to payroll inputs.",
            "imageAlt": "Planning icon for hr information systems: payroll"
          }
        ],
        "rightTitle": "HR Systems Work Checks",
        "features": [
          "Work area: Recruitment",
          "Work area: People",
          "Work area: Payroll",
          "Work area: Leave",
          "Work area: History",
          "Work area: Personnel Records",
          "Work area: Approval Steps",
          "Work area: Effective Changes",
          "Work area: Connect the Employee Record",
          "Work area: Model HR Actions Clearly"
        ],
        "btnText": "Scope HR Systems"
      },
      {
        "badge": "HR Systems Review",
        "label": "Prepare the handover",
        "amount": "QA",
        "amountUnit": " notes",
        "infoTitle": "HR Systems Review Points",
        "items": [
          {
            "title": "Leave",
            "desc": "Track leave approvals and balance rules.",
            "imageAlt": "Planning icon for hr information systems: leave"
          },
          {
            "title": "History",
            "desc": "Review changes and their effective dates.",
            "imageAlt": "Planning icon for hr information systems: history"
          },
          {
            "title": "HRIS Workflow",
            "desc": "Connect personnel records to recruitment and HR actions.",
            "imageAlt": "Planning icon for hr information systems: hris workflow"
          }
        ],
        "rightTitle": "HR Systems Review Checks",
        "features": [
          "Review: Leave",
          "Review: History",
          "Review: Personnel Records",
          "Review: Approval Steps",
          "Review: Effective Changes",
          "Review: Connect the Employee Record",
          "Review: Model HR Actions Clearly",
          "Review: Review Sensitive Changes",
          "Review: Recruitment",
          "Review: People"
        ],
        "btnText": "Review HR Systems"
      }
    ],
    "showAll": "See All Checks ↓",
    "showLess": "See Fewer ↑",
    "previous": "← Previous",
    "next": "Next →",
    "stageLabel": "Stage"
  },
  "/corporate-lms/": {
    "titleLead": "Learning Work Planning",
    "titleRest": "Review the Scope in Stages",
    "intro": "Plan corporate learning around the work in scope. Connect learning tracks, participation records and qualification reviews so teams can organize employee training and follow progress.",
    "steps": [
      {
        "badge": "Learning Scope",
        "label": "Clarify the requirements",
        "amount": "MAP",
        "amountUnit": " first",
        "infoTitle": "Learning Priorities",
        "items": [
          {
            "title": "Structure Learning Tracks",
            "desc": "Define courses, required activities and track relationships around the professional-development program being delivered.",
            "imageAlt": "Planning icon for corporate learning: structure learning tracks"
          },
          {
            "title": "Connect Learners and Progress",
            "desc": "Associate assignments, participation and completion records with the relevant employee and training requirements.",
            "imageAlt": "Planning icon for corporate learning: connect learners and progress"
          },
          {
            "title": "Review Qualification Evidence",
            "desc": "Keep assessment rules and results connected to the learning activity rather than treating a score as a standalone credential.",
            "imageAlt": "Planning icon for corporate learning: review qualification evidence"
          }
        ],
        "rightTitle": "Learning Scope Checks",
        "features": [
          "Scope: Structure Learning Tracks",
          "Scope: Connect Learners and Progress",
          "Scope: Review Qualification Evidence",
          "Scope: Tracks",
          "Scope: Assignment",
          "Scope: Activity",
          "Scope: Assessment",
          "Scope: Review",
          "Scope: Learning Tracks",
          "Scope: Training Progress"
        ],
        "btnText": "Plan Learning"
      },
      {
        "badge": "Learning Work",
        "label": "Organize the work",
        "amount": "WORK",
        "amountUnit": " scope",
        "infoTitle": "Learning Work Areas",
        "items": [
          {
            "title": "Tracks",
            "desc": "Organize courses and learning activities.",
            "imageAlt": "Planning icon for corporate learning: tracks"
          },
          {
            "title": "Assignment",
            "desc": "Assign employees to relevant training.",
            "imageAlt": "Planning icon for corporate learning: assignment"
          },
          {
            "title": "Activity",
            "desc": "Track participation through learning material.",
            "imageAlt": "Planning icon for corporate learning: activity"
          }
        ],
        "rightTitle": "Learning Work Checks",
        "features": [
          "Work area: Tracks",
          "Work area: Assignment",
          "Work area: Activity",
          "Work area: Assessment",
          "Work area: Review",
          "Work area: Learning Tracks",
          "Work area: Training Progress",
          "Work area: Assessment Evidence",
          "Work area: Structure Learning Tracks",
          "Work area: Connect Learners and Progress"
        ],
        "btnText": "Scope Learning"
      },
      {
        "badge": "Learning Review",
        "label": "Prepare the handover",
        "amount": "QA",
        "amountUnit": " notes",
        "infoTitle": "Learning Review Points",
        "items": [
          {
            "title": "Assessment",
            "desc": "Apply documented assessment rules.",
            "imageAlt": "Planning icon for corporate learning: assessment"
          },
          {
            "title": "Review",
            "desc": "Review completion and further learning needs.",
            "imageAlt": "Planning icon for corporate learning: review"
          },
          {
            "title": "Learning Workflow",
            "desc": "Connect training activities to participation and assessment.",
            "imageAlt": "Planning icon for corporate learning: learning workflow"
          }
        ],
        "rightTitle": "Learning Review Checks",
        "features": [
          "Review: Assessment",
          "Review: Review",
          "Review: Learning Tracks",
          "Review: Training Progress",
          "Review: Assessment Evidence",
          "Review: Structure Learning Tracks",
          "Review: Connect Learners and Progress",
          "Review: Review Qualification Evidence",
          "Review: Tracks",
          "Review: Assignment"
        ],
        "btnText": "Review Learning"
      }
    ],
    "showAll": "See All Checks ↓",
    "showLess": "See Fewer ↑",
    "previous": "← Previous",
    "next": "Next →",
    "stageLabel": "Stage"
  },
  "/med-devices-software/": {
    "titleLead": "Device Apps Work Planning",
    "titleRest": "Review the Scope in Stages",
    "intro": "Plan medical device software around the work in scope. Connect embedded device requirements, diagnostic calculations and verification work to the intended operating conditions and review responsibilities.",
    "steps": [
      {
        "badge": "Device Apps Scope",
        "label": "Clarify the requirements",
        "amount": "MAP",
        "amountUnit": " first",
        "infoTitle": "Device Apps Priorities",
        "items": [
          {
            "title": "Specify Device Responsibilities",
            "desc": "Define inputs, outputs and operating states alongside the hardware and clinical context in which the software will be used.",
            "imageAlt": "Planning icon for medical device software: specify device responsibilities"
          },
          {
            "title": "Trace Calculation Requirements",
            "desc": "Keep diagnostic logic, units and boundary conditions connected to documented requirements and review examples.",
            "imageAlt": "Planning icon for medical device software: trace calculation requirements"
          },
          {
            "title": "Plan Verification Evidence",
            "desc": "Organize checks, observed failures and configuration records around the device behavior being evaluated.",
            "imageAlt": "Planning icon for medical device software: plan verification evidence"
          }
        ],
        "rightTitle": "Device Apps Scope Checks",
        "features": [
          "Scope: Specify Device Responsibilities",
          "Scope: Trace Calculation Requirements",
          "Scope: Plan Verification Evidence",
          "Scope: Purpose",
          "Scope: Signals",
          "Scope: Logic",
          "Scope: Verification",
          "Scope: Configuration",
          "Scope: Device Behavior",
          "Scope: Verification Evidence"
        ],
        "btnText": "Plan Device Apps"
      },
      {
        "badge": "Device Apps Work",
        "label": "Organize the work",
        "amount": "WORK",
        "amountUnit": " scope",
        "infoTitle": "Device Apps Work Areas",
        "items": [
          {
            "title": "Purpose",
            "desc": "Define the device's software responsibilities.",
            "imageAlt": "Planning icon for medical device software: purpose"
          },
          {
            "title": "Signals",
            "desc": "Specify signal units and operating ranges.",
            "imageAlt": "Planning icon for medical device software: signals"
          },
          {
            "title": "Logic",
            "desc": "Trace calculations to device requirements.",
            "imageAlt": "Planning icon for medical device software: logic"
          }
        ],
        "rightTitle": "Device Apps Work Checks",
        "features": [
          "Work area: Purpose",
          "Work area: Signals",
          "Work area: Logic",
          "Work area: Verification",
          "Work area: Configuration",
          "Work area: Device Behavior",
          "Work area: Verification Evidence",
          "Work area: Version Context",
          "Work area: Specify Device Responsibilities",
          "Work area: Trace Calculation Requirements"
        ],
        "btnText": "Scope Device Apps"
      },
      {
        "badge": "Device Apps Review",
        "label": "Prepare the handover",
        "amount": "QA",
        "amountUnit": " notes",
        "infoTitle": "Device Apps Review Points",
        "items": [
          {
            "title": "Verification",
            "desc": "Record checks and observed device failures.",
            "imageAlt": "Planning icon for medical device software: verification"
          },
          {
            "title": "Configuration",
            "desc": "Link reviewed software to device settings.",
            "imageAlt": "Planning icon for medical device software: configuration"
          },
          {
            "title": "Device Workflow",
            "desc": "Connect embedded behavior to requirements and checks.",
            "imageAlt": "Planning icon for medical device software: device workflow"
          }
        ],
        "rightTitle": "Device Apps Review Checks",
        "features": [
          "Review: Verification",
          "Review: Configuration",
          "Review: Device Behavior",
          "Review: Verification Evidence",
          "Review: Version Context",
          "Review: Specify Device Responsibilities",
          "Review: Trace Calculation Requirements",
          "Review: Plan Verification Evidence",
          "Review: Purpose",
          "Review: Signals"
        ],
        "btnText": "Review Device Apps"
      }
    ],
    "showAll": "See All Checks ↓",
    "showLess": "See Fewer ↑",
    "previous": "← Previous",
    "next": "Next →",
    "stageLabel": "Stage"
  },
  "/behavioral-health-it/": {
    "titleLead": "Care Apps Work Planning",
    "titleRest": "Review the Scope in Stages",
    "intro": "Plan behavioral health it around the work in scope. Organize patient portal tasks, treatment milestones and consultation schedules around appropriate record access and care-team responsibilities.",
    "steps": [
      {
        "badge": "Care Apps Scope",
        "label": "Clarify the requirements",
        "amount": "MAP",
        "amountUnit": " first",
        "infoTitle": "Care Apps Priorities",
        "items": [
          {
            "title": "Connect Patient and Care Records",
            "desc": "Structure relevant patient information and treatment milestones so authorized teams can follow the care workflow.",
            "imageAlt": "Planning icon for behavioral health it: connect patient and care records"
          },
          {
            "title": "Coordinate Consultation Tasks",
            "desc": "Link appointments, scheduling changes and patient communications to the consultation they support.",
            "imageAlt": "Planning icon for behavioral health it: coordinate consultation tasks"
          },
          {
            "title": "Review Access and Record Changes",
            "desc": "Define visibility and update permissions for sensitive information and keep significant changes available for review.",
            "imageAlt": "Planning icon for behavioral health it: review access and record changes"
          }
        ],
        "rightTitle": "Care Apps Scope Checks",
        "features": [
          "Scope: Connect Patient and Care Records",
          "Scope: Coordinate Consultation Tasks",
          "Scope: Review Access and Record Changes",
          "Scope: Patients",
          "Scope: Access",
          "Scope: Milestones",
          "Scope: Visits",
          "Scope: Follow-up",
          "Scope: Treatment Context",
          "Scope: Record Access"
        ],
        "btnText": "Plan Care Apps"
      },
      {
        "badge": "Care Apps Work",
        "label": "Organize the work",
        "amount": "WORK",
        "amountUnit": " scope",
        "infoTitle": "Care Apps Work Areas",
        "items": [
          {
            "title": "Patients",
            "desc": "Connect portal tasks to patient records.",
            "imageAlt": "Planning icon for behavioral health it: patients"
          },
          {
            "title": "Access",
            "desc": "Define patient and care-team visibility.",
            "imageAlt": "Planning icon for behavioral health it: access"
          },
          {
            "title": "Milestones",
            "desc": "Record milestones in their treatment context.",
            "imageAlt": "Planning icon for behavioral health it: milestones"
          }
        ],
        "rightTitle": "Care Apps Work Checks",
        "features": [
          "Work area: Patients",
          "Work area: Access",
          "Work area: Milestones",
          "Work area: Visits",
          "Work area: Follow-up",
          "Work area: Treatment Context",
          "Work area: Record Access",
          "Work area: Visit Coordination",
          "Work area: Connect Patient and Care Records",
          "Work area: Coordinate Consultation Tasks"
        ],
        "btnText": "Scope Care Apps"
      },
      {
        "badge": "Care Apps Review",
        "label": "Prepare the handover",
        "amount": "QA",
        "amountUnit": " notes",
        "infoTitle": "Care Apps Review Points",
        "items": [
          {
            "title": "Visits",
            "desc": "Coordinate consultation schedules and changes.",
            "imageAlt": "Planning icon for behavioral health it: visits"
          },
          {
            "title": "Follow-up",
            "desc": "Assign care-workflow and administrative tasks.",
            "imageAlt": "Planning icon for behavioral health it: follow-up"
          },
          {
            "title": "Care Workflow",
            "desc": "Connect patient access, milestones and consultations.",
            "imageAlt": "Planning icon for behavioral health it: care workflow"
          }
        ],
        "rightTitle": "Care Apps Review Checks",
        "features": [
          "Review: Visits",
          "Review: Follow-up",
          "Review: Treatment Context",
          "Review: Record Access",
          "Review: Visit Coordination",
          "Review: Connect Patient and Care Records",
          "Review: Coordinate Consultation Tasks",
          "Review: Review Access and Record Changes",
          "Review: Patients",
          "Review: Access"
        ],
        "btnText": "Review Care Apps"
      }
    ],
    "showAll": "See All Checks ↓",
    "showLess": "See Fewer ↑",
    "previous": "← Previous",
    "next": "Next →",
    "stageLabel": "Stage"
  },
  "/lab-info-systems/": {
    "titleLead": "Lab Systems Work Planning",
    "titleRest": "Review the Scope in Stages",
    "intro": "Plan laboratory systems around the work in scope. Connect specimen locations, experimental records and instrument exchange so laboratory teams can follow material and its analytical context.",
    "steps": [
      {
        "badge": "Lab Systems Scope",
        "label": "Clarify the requirements",
        "amount": "MAP",
        "amountUnit": " first",
        "infoTitle": "Lab Systems Priorities",
        "items": [
          {
            "title": "Track Specimen Identity",
            "desc": "Associate specimen identifiers, storage locations and movement records with the relevant laboratory work.",
            "imageAlt": "Planning icon for laboratory systems: track specimen identity"
          },
          {
            "title": "Structure Experimental Records",
            "desc": "Keep procedures, observations and result context linked to the sample and experiment that produced them.",
            "imageAlt": "Planning icon for laboratory systems: structure experimental records"
          },
          {
            "title": "Connect Instrument Interfaces",
            "desc": "Define the formats, identifiers and exception handling needed when analytical equipment exchanges information with the system.",
            "imageAlt": "Planning icon for laboratory systems: connect instrument interfaces"
          }
        ],
        "rightTitle": "Lab Systems Scope Checks",
        "features": [
          "Scope: Track Specimen Identity",
          "Scope: Structure Experimental Records",
          "Scope: Connect Instrument Interfaces",
          "Scope: Specimens",
          "Scope: Storage",
          "Scope: Experiments",
          "Scope: Instruments",
          "Scope: Review",
          "Scope: Specimen Identity",
          "Scope: Experiment Records"
        ],
        "btnText": "Plan Lab Systems"
      },
      {
        "badge": "Lab Systems Work",
        "label": "Organize the work",
        "amount": "WORK",
        "amountUnit": " scope",
        "infoTitle": "Lab Systems Work Areas",
        "items": [
          {
            "title": "Specimens",
            "desc": "Assign specimen identifiers and sample context.",
            "imageAlt": "Planning icon for laboratory systems: specimens"
          },
          {
            "title": "Storage",
            "desc": "Track storage locations and sample movement.",
            "imageAlt": "Planning icon for laboratory systems: storage"
          },
          {
            "title": "Experiments",
            "desc": "Link observations to laboratory procedures.",
            "imageAlt": "Planning icon for laboratory systems: experiments"
          }
        ],
        "rightTitle": "Lab Systems Work Checks",
        "features": [
          "Work area: Specimens",
          "Work area: Storage",
          "Work area: Experiments",
          "Work area: Instruments",
          "Work area: Review",
          "Work area: Specimen Identity",
          "Work area: Experiment Records",
          "Work area: Instrument Exchange",
          "Work area: Track Specimen Identity",
          "Work area: Structure Experimental Records"
        ],
        "btnText": "Scope Lab Systems"
      },
      {
        "badge": "Lab Systems Review",
        "label": "Prepare the handover",
        "amount": "QA",
        "amountUnit": " notes",
        "infoTitle": "Lab Systems Review Points",
        "items": [
          {
            "title": "Instruments",
            "desc": "Match instrument outputs to sample records.",
            "imageAlt": "Planning icon for laboratory systems: instruments"
          },
          {
            "title": "Review",
            "desc": "Review missing context and lab exceptions.",
            "imageAlt": "Planning icon for laboratory systems: review"
          },
          {
            "title": "Lab Workflow",
            "desc": "Connect specimen records to experiments and instruments.",
            "imageAlt": "Planning icon for laboratory systems: lab workflow"
          }
        ],
        "rightTitle": "Lab Systems Review Checks",
        "features": [
          "Review: Instruments",
          "Review: Review",
          "Review: Specimen Identity",
          "Review: Experiment Records",
          "Review: Instrument Exchange",
          "Review: Track Specimen Identity",
          "Review: Structure Experimental Records",
          "Review: Connect Instrument Interfaces",
          "Review: Specimens",
          "Review: Storage"
        ],
        "btnText": "Review Lab Systems"
      }
    ],
    "showAll": "See All Checks ↓",
    "showLess": "See Fewer ↑",
    "previous": "← Previous",
    "next": "Next →",
    "stageLabel": "Stage"
  },
  "/pharma-biotech/": {
    "titleLead": "Pharma IT Work Planning",
    "titleRest": "Review the Scope in Stages",
    "intro": "Plan pharma and biotech around the work in scope. Organize biostatistical data, study-phase records and compound information with clear relationships and access responsibilities.",
    "steps": [
      {
        "badge": "Pharma IT Scope",
        "label": "Clarify the requirements",
        "amount": "MAP",
        "amountUnit": " first",
        "infoTitle": "Pharma IT Priorities",
        "items": [
          {
            "title": "Structure Research Datasets",
            "desc": "Define variables, units and study context so analytical records retain the information needed for review.",
            "imageAlt": "Planning icon for pharma and biotech: structure research datasets"
          },
          {
            "title": "Track Study and Compound Records",
            "desc": "Connect phase milestones, compound identifiers and supporting documents without losing their originating context.",
            "imageAlt": "Planning icon for pharma and biotech: track study and compound records"
          },
          {
            "title": "Control Research Information",
            "desc": "Set access and change responsibilities for sensitive study material and keep relevant processing history available.",
            "imageAlt": "Planning icon for pharma and biotech: control research information"
          }
        ],
        "rightTitle": "Pharma IT Scope Checks",
        "features": [
          "Scope: Structure Research Datasets",
          "Scope: Track Study and Compound Records",
          "Scope: Control Research Information",
          "Scope: Studies",
          "Scope: Compounds",
          "Scope: Variables",
          "Scope: Processing",
          "Scope: Review",
          "Scope: Study Variables",
          "Scope: Compound Records"
        ],
        "btnText": "Plan Pharma IT"
      },
      {
        "badge": "Pharma IT Work",
        "label": "Organize the work",
        "amount": "WORK",
        "amountUnit": " scope",
        "infoTitle": "Pharma IT Work Areas",
        "items": [
          {
            "title": "Studies",
            "desc": "Define study identifiers and phase context.",
            "imageAlt": "Planning icon for pharma and biotech: studies"
          },
          {
            "title": "Compounds",
            "desc": "Link compounds to supporting material.",
            "imageAlt": "Planning icon for pharma and biotech: compounds"
          },
          {
            "title": "Variables",
            "desc": "Document research fields and measurement units.",
            "imageAlt": "Planning icon for pharma and biotech: variables"
          }
        ],
        "rightTitle": "Pharma IT Work Checks",
        "features": [
          "Work area: Studies",
          "Work area: Compounds",
          "Work area: Variables",
          "Work area: Processing",
          "Work area: Review",
          "Work area: Study Variables",
          "Work area: Compound Records",
          "Work area: Research Changes",
          "Work area: Structure Research Datasets",
          "Work area: Track Study and Compound Records"
        ],
        "btnText": "Scope Pharma IT"
      },
      {
        "badge": "Pharma IT Review",
        "label": "Prepare the handover",
        "amount": "QA",
        "amountUnit": " notes",
        "infoTitle": "Pharma IT Review Points",
        "items": [
          {
            "title": "Processing",
            "desc": "Trace research-data transformations.",
            "imageAlt": "Planning icon for pharma and biotech: processing"
          },
          {
            "title": "Review",
            "desc": "Review access and study-record changes.",
            "imageAlt": "Planning icon for pharma and biotech: review"
          },
          {
            "title": "Research Workflow",
            "desc": "Connect study context to compounds and analytical records.",
            "imageAlt": "Planning icon for pharma and biotech: research workflow"
          }
        ],
        "rightTitle": "Pharma IT Review Checks",
        "features": [
          "Review: Processing",
          "Review: Review",
          "Review: Study Variables",
          "Review: Compound Records",
          "Review: Research Changes",
          "Review: Structure Research Datasets",
          "Review: Track Study and Compound Records",
          "Review: Control Research Information",
          "Review: Studies",
          "Review: Compounds"
        ],
        "btnText": "Review Pharma IT"
      }
    ],
    "showAll": "See All Checks ↓",
    "showLess": "See Fewer ↑",
    "previous": "← Previous",
    "next": "Next →",
    "stageLabel": "Stage"
  },
  "/medtech-startups/": {
    "titleLead": "Medtech Work Planning",
    "titleRest": "Review the Scope in Stages",
    "intro": "Plan medtech products around the work in scope. Plan health-technology interfaces around a defined initial product, integration needs and the delivery decisions a startup must make.",
    "steps": [
      {
        "badge": "Medtech Scope",
        "label": "Clarify the requirements",
        "amount": "MAP",
        "amountUnit": " first",
        "infoTitle": "Medtech Priorities",
        "items": [
          {
            "title": "Define the Initial Product",
            "desc": "Identify the intended users, core health workflow and review requirements before choosing the first implementation scope.",
            "imageAlt": "Planning icon for medtech products: define the initial product"
          },
          {
            "title": "Plan Interoperable Interfaces",
            "desc": "Document the records, formats and access expectations of the health systems the product needs to exchange information with.",
            "imageAlt": "Planning icon for medtech products: plan interoperable interfaces"
          },
          {
            "title": "Sequence Startup Delivery",
            "desc": "Connect implementation increments to available resources and decision points while recording requirements for later work.",
            "imageAlt": "Planning icon for medtech products: sequence startup delivery"
          }
        ],
        "rightTitle": "Medtech Scope Checks",
        "features": [
          "Scope: Define the Initial Product",
          "Scope: Plan Interoperable Interfaces",
          "Scope: Sequence Startup Delivery",
          "Scope: Scope",
          "Scope: Interfaces",
          "Scope: Access",
          "Scope: Delivery",
          "Scope: Review",
          "Scope: Product Scope",
          "Scope: Health Interfaces"
        ],
        "btnText": "Plan Medtech"
      },
      {
        "badge": "Medtech Work",
        "label": "Organize the work",
        "amount": "WORK",
        "amountUnit": " scope",
        "infoTitle": "Medtech Work Areas",
        "items": [
          {
            "title": "Scope",
            "desc": "Define the initial health-product task.",
            "imageAlt": "Planning icon for medtech products: scope"
          },
          {
            "title": "Interfaces",
            "desc": "Map exchange formats and dependencies.",
            "imageAlt": "Planning icon for medtech products: interfaces"
          },
          {
            "title": "Access",
            "desc": "Plan access to sensitive health information.",
            "imageAlt": "Planning icon for medtech products: access"
          }
        ],
        "rightTitle": "Medtech Work Checks",
        "features": [
          "Work area: Scope",
          "Work area: Interfaces",
          "Work area: Access",
          "Work area: Delivery",
          "Work area: Review",
          "Work area: Product Scope",
          "Work area: Health Interfaces",
          "Work area: Delivery Increments",
          "Work area: Define the Initial Product",
          "Work area: Plan Interoperable Interfaces"
        ],
        "btnText": "Scope Medtech"
      },
      {
        "badge": "Medtech Review",
        "label": "Prepare the handover",
        "amount": "QA",
        "amountUnit": " notes",
        "infoTitle": "Medtech Review Points",
        "items": [
          {
            "title": "Delivery",
            "desc": "Sequence work around startup priorities.",
            "imageAlt": "Planning icon for medtech products: delivery"
          },
          {
            "title": "Review",
            "desc": "Review increments against product scope.",
            "imageAlt": "Planning icon for medtech products: review"
          },
          {
            "title": "MedTech Workflow",
            "desc": "Connect product scope to health-system integration work.",
            "imageAlt": "Planning icon for medtech products: medtech workflow"
          }
        ],
        "rightTitle": "Medtech Review Checks",
        "features": [
          "Review: Delivery",
          "Review: Review",
          "Review: Product Scope",
          "Review: Health Interfaces",
          "Review: Delivery Increments",
          "Review: Define the Initial Product",
          "Review: Plan Interoperable Interfaces",
          "Review: Sequence Startup Delivery",
          "Review: Scope",
          "Review: Interfaces"
        ],
        "btnText": "Review Medtech"
      }
    ],
    "showAll": "See All Checks ↓",
    "showLess": "See Fewer ↑",
    "previous": "← Previous",
    "next": "Next →",
    "stageLabel": "Stage"
  },
  "/public-health-systems/": {
    "titleLead": "Public Health Work Planning",
    "titleRest": "Review the Scope in Stages",
    "intro": "Plan public health systems around the work in scope. Connect community reporting, diagnostic logs and health-service information with documented definitions and appropriate data access.",
    "steps": [
      {
        "badge": "Public Health Scope",
        "label": "Clarify the requirements",
        "amount": "MAP",
        "amountUnit": " first",
        "infoTitle": "Public Health Priorities",
        "items": [
          {
            "title": "Define Community Measures",
            "desc": "Agree on reporting populations, time periods and geographic units before aggregating public-health trends.",
            "imageAlt": "Planning icon for public health systems: define community measures"
          },
          {
            "title": "Connect Reporting Sources",
            "desc": "Keep diagnostic-log fields and incoming reports associated with their source, collection context and validation rules.",
            "imageAlt": "Planning icon for public health systems: connect reporting sources"
          },
          {
            "title": "Support Information Access",
            "desc": "Organize service links and reporting views around the responsibilities of public-health teams and the people using the information.",
            "imageAlt": "Planning icon for public health systems: support information access"
          }
        ],
        "rightTitle": "Public Health Scope Checks",
        "features": [
          "Scope: Define Community Measures",
          "Scope: Connect Reporting Sources",
          "Scope: Support Information Access",
          "Scope: Sources",
          "Scope: Definitions",
          "Scope: Aggregation",
          "Scope: Services",
          "Scope: Review",
          "Scope: Community Records",
          "Scope: Trend Context"
        ],
        "btnText": "Plan Public Health"
      },
      {
        "badge": "Public Health Work",
        "label": "Organize the work",
        "amount": "WORK",
        "amountUnit": " scope",
        "infoTitle": "Public Health Work Areas",
        "items": [
          {
            "title": "Sources",
            "desc": "Identify community and diagnostic-log inputs.",
            "imageAlt": "Planning icon for public health systems: sources"
          },
          {
            "title": "Definitions",
            "desc": "Define population, period and area rules.",
            "imageAlt": "Planning icon for public health systems: definitions"
          },
          {
            "title": "Aggregation",
            "desc": "Keep collection context with trend data.",
            "imageAlt": "Planning icon for public health systems: aggregation"
          }
        ],
        "rightTitle": "Public Health Work Checks",
        "features": [
          "Work area: Sources",
          "Work area: Definitions",
          "Work area: Aggregation",
          "Work area: Services",
          "Work area: Review",
          "Work area: Community Records",
          "Work area: Trend Context",
          "Work area: Reporting Review",
          "Work area: Define Community Measures",
          "Work area: Connect Reporting Sources"
        ],
        "btnText": "Scope Public Health"
      },
      {
        "badge": "Public Health Review",
        "label": "Prepare the handover",
        "amount": "QA",
        "amountUnit": " notes",
        "infoTitle": "Public Health Review Points",
        "items": [
          {
            "title": "Services",
            "desc": "Connect health-service access information.",
            "imageAlt": "Planning icon for public health systems: services"
          },
          {
            "title": "Review",
            "desc": "Review coverage and reporting exceptions.",
            "imageAlt": "Planning icon for public health systems: review"
          },
          {
            "title": "Health Workflow",
            "desc": "Connect community records to reporting and service access.",
            "imageAlt": "Planning icon for public health systems: health workflow"
          }
        ],
        "rightTitle": "Public Health Review Checks",
        "features": [
          "Review: Services",
          "Review: Review",
          "Review: Community Records",
          "Review: Trend Context",
          "Review: Reporting Review",
          "Review: Define Community Measures",
          "Review: Connect Reporting Sources",
          "Review: Support Information Access",
          "Review: Sources",
          "Review: Definitions"
        ],
        "btnText": "Review Public Health"
      }
    ],
    "showAll": "See All Checks ↓",
    "showLess": "See Fewer ↑",
    "previous": "← Previous",
    "next": "Next →",
    "stageLabel": "Stage"
  },
  "/wellness-apps/": {
    "titleLead": "Wellness Work Planning",
    "titleRest": "Review the Scope in Stages",
    "intro": "Plan wellness applications around the work in scope. Connect workout, biometric and habit records to understandable mobile journeys and the information users choose to share.",
    "steps": [
      {
        "badge": "Wellness Scope",
        "label": "Clarify the requirements",
        "amount": "MAP",
        "amountUnit": " first",
        "infoTitle": "Wellness Priorities",
        "items": [
          {
            "title": "Organize Activity Records",
            "desc": "Define the exercises, measurements and habit entries the app records, including units and the context of each observation.",
            "imageAlt": "Planning icon for wellness applications: organize activity records"
          },
          {
            "title": "Make Progress Understandable",
            "desc": "Present activity history and trends with clear periods and definitions rather than implying medical conclusions from isolated readings.",
            "imageAlt": "Planning icon for wellness applications: make progress understandable"
          },
          {
            "title": "Respect User Data Choices",
            "desc": "Connect account settings and information-sharing choices to the collection and use of personal wellness records.",
            "imageAlt": "Planning icon for wellness applications: respect user data choices"
          }
        ],
        "rightTitle": "Wellness Scope Checks",
        "features": [
          "Scope: Organize Activity Records",
          "Scope: Make Progress Understandable",
          "Scope: Respect User Data Choices",
          "Scope: Activity",
          "Scope: Measures",
          "Scope: Habits",
          "Scope: Progress",
          "Scope: Choices",
          "Scope: Activity Journey",
          "Scope: Personal History"
        ],
        "btnText": "Plan Wellness"
      },
      {
        "badge": "Wellness Work",
        "label": "Organize the work",
        "amount": "WORK",
        "amountUnit": " scope",
        "infoTitle": "Wellness Work Areas",
        "items": [
          {
            "title": "Activity",
            "desc": "Capture workout details and activity context.",
            "imageAlt": "Planning icon for wellness applications: activity"
          },
          {
            "title": "Measures",
            "desc": "Keep biometric values associated with units.",
            "imageAlt": "Planning icon for wellness applications: measures"
          },
          {
            "title": "Habits",
            "desc": "Record user routines and habit history.",
            "imageAlt": "Planning icon for wellness applications: habits"
          }
        ],
        "rightTitle": "Wellness Work Checks",
        "features": [
          "Work area: Activity",
          "Work area: Measures",
          "Work area: Habits",
          "Work area: Progress",
          "Work area: Choices",
          "Work area: Activity Journey",
          "Work area: Personal History",
          "Work area: Sharing Choices",
          "Work area: Organize Activity Records",
          "Work area: Make Progress Understandable"
        ],
        "btnText": "Scope Wellness"
      },
      {
        "badge": "Wellness Review",
        "label": "Prepare the handover",
        "amount": "QA",
        "amountUnit": " notes",
        "infoTitle": "Wellness Review Points",
        "items": [
          {
            "title": "Progress",
            "desc": "Explain progress periods and trend context.",
            "imageAlt": "Planning icon for wellness applications: progress"
          },
          {
            "title": "Choices",
            "desc": "Connect sharing choices to personal records.",
            "imageAlt": "Planning icon for wellness applications: choices"
          },
          {
            "title": "Wellness Workflow",
            "desc": "Connect personal activity records to useful app views.",
            "imageAlt": "Planning icon for wellness applications: wellness workflow"
          }
        ],
        "rightTitle": "Wellness Review Checks",
        "features": [
          "Review: Progress",
          "Review: Choices",
          "Review: Activity Journey",
          "Review: Personal History",
          "Review: Sharing Choices",
          "Review: Organize Activity Records",
          "Review: Make Progress Understandable",
          "Review: Respect User Data Choices",
          "Review: Activity",
          "Review: Measures"
        ],
        "btnText": "Review Wellness"
      }
    ],
    "showAll": "See All Checks ↓",
    "showLess": "See Fewer ↑",
    "previous": "← Previous",
    "next": "Next →",
    "stageLabel": "Stage"
  },
  "/insurtech/": {
    "titleLead": "Insurance Work Planning",
    "titleRest": "Review the Scope in Stages",
    "intro": "Plan insurance software around the work in scope. Connect claim information, risk inputs and reconciliation tasks so insurance teams can inspect the rules and evidence behind processing steps.",
    "steps": [
      {
        "badge": "Insurance Scope",
        "label": "Clarify the requirements",
        "amount": "MAP",
        "amountUnit": " first",
        "infoTitle": "Insurance Priorities",
        "items": [
          {
            "title": "Structure Claim Evidence",
            "desc": "Associate submitted documents, damage information and validation findings with the claim and review stage they support.",
            "imageAlt": "Planning icon for insurance software: structure claim evidence"
          },
          {
            "title": "Make Calculation Inputs Visible",
            "desc": "Document the variables and rule versions used in premium or risk calculations so their results can be checked.",
            "imageAlt": "Planning icon for insurance software: make calculation inputs visible"
          },
          {
            "title": "Connect Reconciliation Work",
            "desc": "Keep claim decisions, payment status and unresolved differences linked for administrative follow-up.",
            "imageAlt": "Planning icon for insurance software: connect reconciliation work"
          }
        ],
        "rightTitle": "Insurance Scope Checks",
        "features": [
          "Scope: Structure Claim Evidence",
          "Scope: Make Calculation Inputs Visible",
          "Scope: Connect Reconciliation Work",
          "Scope: Claims",
          "Scope: Validation",
          "Scope: Risk",
          "Scope: Decisions",
          "Scope: Reconcile",
          "Scope: Claim Evidence",
          "Scope: Risk Inputs"
        ],
        "btnText": "Plan Insurance"
      },
      {
        "badge": "Insurance Work",
        "label": "Organize the work",
        "amount": "WORK",
        "amountUnit": " scope",
        "infoTitle": "Insurance Work Areas",
        "items": [
          {
            "title": "Claims",
            "desc": "Organize claim details and source evidence.",
            "imageAlt": "Planning icon for insurance software: claims"
          },
          {
            "title": "Validation",
            "desc": "Record validation checks and missing material.",
            "imageAlt": "Planning icon for insurance software: validation"
          },
          {
            "title": "Risk",
            "desc": "Apply documented risk-calculation rules.",
            "imageAlt": "Planning icon for insurance software: risk"
          }
        ],
        "rightTitle": "Insurance Work Checks",
        "features": [
          "Work area: Claims",
          "Work area: Validation",
          "Work area: Risk",
          "Work area: Decisions",
          "Work area: Reconcile",
          "Work area: Claim Evidence",
          "Work area: Risk Inputs",
          "Work area: Decision Context",
          "Work area: Structure Claim Evidence",
          "Work area: Make Calculation Inputs Visible"
        ],
        "btnText": "Scope Insurance"
      },
      {
        "badge": "Insurance Review",
        "label": "Prepare the handover",
        "amount": "QA",
        "amountUnit": " notes",
        "infoTitle": "Insurance Review Points",
        "items": [
          {
            "title": "Decisions",
            "desc": "Connect decisions to their review basis.",
            "imageAlt": "Planning icon for insurance software: decisions"
          },
          {
            "title": "Reconcile",
            "desc": "Review claim and payment differences.",
            "imageAlt": "Planning icon for insurance software: reconcile"
          },
          {
            "title": "Insurance Workflow",
            "desc": "Connect claim evidence to rules and reconciliation work.",
            "imageAlt": "Planning icon for insurance software: insurance workflow"
          }
        ],
        "rightTitle": "Insurance Review Checks",
        "features": [
          "Review: Decisions",
          "Review: Reconcile",
          "Review: Claim Evidence",
          "Review: Risk Inputs",
          "Review: Decision Context",
          "Review: Structure Claim Evidence",
          "Review: Make Calculation Inputs Visible",
          "Review: Connect Reconciliation Work",
          "Review: Claims",
          "Review: Validation"
        ],
        "btnText": "Review Insurance"
      }
    ],
    "showAll": "See All Checks ↓",
    "showLess": "See Fewer ↑",
    "previous": "← Previous",
    "next": "Next →",
    "stageLabel": "Stage"
  },
  "/wealth-management-tech/": {
    "titleLead": "Wealth Work Planning",
    "titleRest": "Review the Scope in Stages",
    "intro": "Plan wealth management around the work in scope. Connect fund balances, asset-allocation scenarios and tax records with the valuation dates and assumptions needed for portfolio review.",
    "steps": [
      {
        "badge": "Wealth Scope",
        "label": "Clarify the requirements",
        "amount": "MAP",
        "amountUnit": " first",
        "infoTitle": "Wealth Priorities",
        "items": [
          {
            "title": "Explain Portfolio Balances",
            "desc": "Associate holdings and fund values with their source, currency and valuation date before presenting a combined view.",
            "imageAlt": "Planning icon for wealth management: explain portfolio balances"
          },
          {
            "title": "Keep Allocation Changes Explicit",
            "desc": "Record proposed asset-distribution changes and their assumptions separately from completed transactions.",
            "imageAlt": "Planning icon for wealth management: keep allocation changes explicit"
          },
          {
            "title": "Connect Supporting Records",
            "desc": "Keep tax-related information and transaction history linked to portfolio records for review by the responsible team.",
            "imageAlt": "Planning icon for wealth management: connect supporting records"
          }
        ],
        "rightTitle": "Wealth Scope Checks",
        "features": [
          "Scope: Explain Portfolio Balances",
          "Scope: Keep Allocation Changes Explicit",
          "Scope: Connect Supporting Records",
          "Scope: Holdings",
          "Scope: Valuation",
          "Scope: Allocation",
          "Scope: Records",
          "Scope: Review",
          "Scope: Holding Context",
          "Scope: Allocation Scenarios"
        ],
        "btnText": "Plan Wealth"
      },
      {
        "badge": "Wealth Work",
        "label": "Organize the work",
        "amount": "WORK",
        "amountUnit": " scope",
        "infoTitle": "Wealth Work Areas",
        "items": [
          {
            "title": "Holdings",
            "desc": "Identify fund and asset holdings.",
            "imageAlt": "Planning icon for wealth management: holdings"
          },
          {
            "title": "Valuation",
            "desc": "Show balance sources and valuation dates.",
            "imageAlt": "Planning icon for wealth management: valuation"
          },
          {
            "title": "Allocation",
            "desc": "Record allocation scenarios and assumptions.",
            "imageAlt": "Planning icon for wealth management: allocation"
          }
        ],
        "rightTitle": "Wealth Work Checks",
        "features": [
          "Work area: Holdings",
          "Work area: Valuation",
          "Work area: Allocation",
          "Work area: Records",
          "Work area: Review",
          "Work area: Holding Context",
          "Work area: Allocation Scenarios",
          "Work area: Portfolio Records",
          "Work area: Explain Portfolio Balances",
          "Work area: Keep Allocation Changes Explicit"
        ],
        "btnText": "Scope Wealth"
      },
      {
        "badge": "Wealth Review",
        "label": "Prepare the handover",
        "amount": "QA",
        "amountUnit": " notes",
        "infoTitle": "Wealth Review Points",
        "items": [
          {
            "title": "Records",
            "desc": "Link transactions to relevant tax records.",
            "imageAlt": "Planning icon for wealth management: records"
          },
          {
            "title": "Review",
            "desc": "Review authorized portfolio changes.",
            "imageAlt": "Planning icon for wealth management: review"
          },
          {
            "title": "Portfolio Workflow",
            "desc": "Connect holdings and allocation scenarios to source records.",
            "imageAlt": "Planning icon for wealth management: portfolio workflow"
          }
        ],
        "rightTitle": "Wealth Review Checks",
        "features": [
          "Review: Records",
          "Review: Review",
          "Review: Holding Context",
          "Review: Allocation Scenarios",
          "Review: Portfolio Records",
          "Review: Explain Portfolio Balances",
          "Review: Keep Allocation Changes Explicit",
          "Review: Connect Supporting Records",
          "Review: Holdings",
          "Review: Valuation"
        ],
        "btnText": "Review Wealth"
      }
    ],
    "showAll": "See All Checks ↓",
    "showLess": "See Fewer ↑",
    "previous": "← Previous",
    "next": "Next →",
    "stageLabel": "Stage"
  },
  "/digital-lending/": {
    "titleLead": "Lending Work Planning",
    "titleRest": "Review the Scope in Stages",
    "intro": "Plan digital lending around the work in scope. Coordinate credit inputs, lending documents and repayment records through explicit application states and review responsibilities.",
    "steps": [
      {
        "badge": "Lending Scope",
        "label": "Clarify the requirements",
        "amount": "MAP",
        "amountUnit": " first",
        "infoTitle": "Lending Priorities",
        "items": [
          {
            "title": "Connect Application Information",
            "desc": "Organize applicant details, supporting documents and outstanding requests around the loan application they belong to.",
            "imageAlt": "Planning icon for digital lending: connect application information"
          },
          {
            "title": "Trace Credit Calculations",
            "desc": "Keep input variables, calculation rules and review outcomes connected so authorized teams can inspect the assessment process.",
            "imageAlt": "Planning icon for digital lending: trace credit calculations"
          },
          {
            "title": "Follow Repayment Records",
            "desc": "Associate schedules, received payments and outstanding balances with their applicable dates and transaction context.",
            "imageAlt": "Planning icon for digital lending: follow repayment records"
          }
        ],
        "rightTitle": "Lending Scope Checks",
        "features": [
          "Scope: Connect Application Information",
          "Scope: Trace Credit Calculations",
          "Scope: Follow Repayment Records",
          "Scope: Application",
          "Scope: Documents",
          "Scope: Assessment",
          "Scope: Decision",
          "Scope: Repayment",
          "Scope: Application Context",
          "Scope: Credit Review"
        ],
        "btnText": "Plan Lending"
      },
      {
        "badge": "Lending Work",
        "label": "Organize the work",
        "amount": "WORK",
        "amountUnit": " scope",
        "infoTitle": "Lending Work Areas",
        "items": [
          {
            "title": "Application",
            "desc": "Capture applicants and requested loan context.",
            "imageAlt": "Planning icon for digital lending: application"
          },
          {
            "title": "Documents",
            "desc": "Track loan documents and missing submissions.",
            "imageAlt": "Planning icon for digital lending: documents"
          },
          {
            "title": "Assessment",
            "desc": "Review credit inputs and calculation rules.",
            "imageAlt": "Planning icon for digital lending: assessment"
          }
        ],
        "rightTitle": "Lending Work Checks",
        "features": [
          "Work area: Application",
          "Work area: Documents",
          "Work area: Assessment",
          "Work area: Decision",
          "Work area: Repayment",
          "Work area: Application Context",
          "Work area: Credit Review",
          "Work area: Repayment Records",
          "Work area: Connect Application Information",
          "Work area: Trace Credit Calculations"
        ],
        "btnText": "Scope Lending"
      },
      {
        "badge": "Lending Review",
        "label": "Prepare the handover",
        "amount": "QA",
        "amountUnit": " notes",
        "infoTitle": "Lending Review Points",
        "items": [
          {
            "title": "Decision",
            "desc": "Record lending outcomes and review history.",
            "imageAlt": "Planning icon for digital lending: decision"
          },
          {
            "title": "Repayment",
            "desc": "Connect due amounts, payments and balances.",
            "imageAlt": "Planning icon for digital lending: repayment"
          },
          {
            "title": "Lending Workflow",
            "desc": "Connect lending applications to assessment and repayment.",
            "imageAlt": "Planning icon for digital lending: lending workflow"
          }
        ],
        "rightTitle": "Lending Review Checks",
        "features": [
          "Review: Decision",
          "Review: Repayment",
          "Review: Application Context",
          "Review: Credit Review",
          "Review: Repayment Records",
          "Review: Connect Application Information",
          "Review: Trace Credit Calculations",
          "Review: Follow Repayment Records",
          "Review: Application",
          "Review: Documents"
        ],
        "btnText": "Review Lending"
      }
    ],
    "showAll": "See All Checks ↓",
    "showLess": "See Fewer ↑",
    "previous": "← Previous",
    "next": "Next →",
    "stageLabel": "Stage"
  },
  "/fintech-engineering/": {
    "titleLead": "Fintech Work Planning",
    "titleRest": "Review the Scope in Stages",
    "intro": "Plan fintech engineering around the work in scope. Connect banking interfaces, asset ledgers and transaction validation through explicit service contracts and reviewable financial states.",
    "steps": [
      {
        "badge": "Fintech Scope",
        "label": "Clarify the requirements",
        "amount": "MAP",
        "amountUnit": " first",
        "infoTitle": "Fintech Priorities",
        "items": [
          {
            "title": "Define Financial Service Contracts",
            "desc": "Specify request fields, identity context and response states for the banking and financial interfaces the application uses.",
            "imageAlt": "Planning icon for fintech engineering: define financial service contracts"
          },
          {
            "title": "Keep Ledger Changes Consistent",
            "desc": "Associate asset movements and balance entries with their transaction context and the rules governing a state change.",
            "imageAlt": "Planning icon for fintech engineering: keep ledger changes consistent"
          },
          {
            "title": "Design Exception Handling",
            "desc": "Plan repeated requests, unavailable services and reconciliation paths alongside expected transaction behavior.",
            "imageAlt": "Planning icon for fintech engineering: design exception handling"
          }
        ],
        "rightTitle": "Fintech Scope Checks",
        "features": [
          "Scope: Define Financial Service Contracts",
          "Scope: Keep Ledger Changes Consistent",
          "Scope: Design Exception Handling",
          "Scope: Interfaces",
          "Scope: Validation",
          "Scope: Processing",
          "Scope: Ledgers",
          "Scope: Exceptions",
          "Scope: Financial Contracts",
          "Scope: Asset Entries"
        ],
        "btnText": "Plan Fintech"
      },
      {
        "badge": "Fintech Work",
        "label": "Organize the work",
        "amount": "WORK",
        "amountUnit": " scope",
        "infoTitle": "Fintech Work Areas",
        "items": [
          {
            "title": "Interfaces",
            "desc": "Define financial-service request contracts.",
            "imageAlt": "Planning icon for fintech engineering: interfaces"
          },
          {
            "title": "Validation",
            "desc": "Check inputs and authorization context.",
            "imageAlt": "Planning icon for fintech engineering: validation"
          },
          {
            "title": "Processing",
            "desc": "Track transactions across service boundaries.",
            "imageAlt": "Planning icon for fintech engineering: processing"
          }
        ],
        "rightTitle": "Fintech Work Checks",
        "features": [
          "Work area: Interfaces",
          "Work area: Validation",
          "Work area: Processing",
          "Work area: Ledgers",
          "Work area: Exceptions",
          "Work area: Financial Contracts",
          "Work area: Asset Entries",
          "Work area: Transaction Checks",
          "Work area: Define Financial Service Contracts",
          "Work area: Keep Ledger Changes Consistent"
        ],
        "btnText": "Scope Fintech"
      },
      {
        "badge": "Fintech Review",
        "label": "Prepare the handover",
        "amount": "QA",
        "amountUnit": " notes",
        "infoTitle": "Fintech Review Points",
        "items": [
          {
            "title": "Ledgers",
            "desc": "Link asset entries to financial events.",
            "imageAlt": "Planning icon for fintech engineering: ledgers"
          },
          {
            "title": "Exceptions",
            "desc": "Review retries and unresolved ledger outcomes.",
            "imageAlt": "Planning icon for fintech engineering: exceptions"
          },
          {
            "title": "FinTech Workflow",
            "desc": "Connect financial interfaces to ledgers and validation.",
            "imageAlt": "Planning icon for fintech engineering: fintech workflow"
          }
        ],
        "rightTitle": "Fintech Review Checks",
        "features": [
          "Review: Ledgers",
          "Review: Exceptions",
          "Review: Financial Contracts",
          "Review: Asset Entries",
          "Review: Transaction Checks",
          "Review: Define Financial Service Contracts",
          "Review: Keep Ledger Changes Consistent",
          "Review: Design Exception Handling",
          "Review: Interfaces",
          "Review: Validation"
        ],
        "btnText": "Review Fintech"
      }
    ],
    "showAll": "See All Checks ↓",
    "showLess": "See Fewer ↑",
    "previous": "← Previous",
    "next": "Next →",
    "stageLabel": "Stage"
  },
  "/payment-gateways/": {
    "titleLead": "Payments Work Planning",
    "titleRest": "Review the Scope in Stages",
    "intro": "Plan payment gateways around the work in scope. Connect merchant payment requests, token references and provider responses through clear processing states and settlement follow-up.",
    "steps": [
      {
        "badge": "Payments Scope",
        "label": "Clarify the requirements",
        "amount": "MAP",
        "amountUnit": " first",
        "infoTitle": "Payments Priorities",
        "items": [
          {
            "title": "Define the Payment Exchange",
            "desc": "Specify merchant identifiers, payment references and the information exchanged with each processing provider.",
            "imageAlt": "Planning icon for payment gateways: define the payment exchange"
          },
          {
            "title": "Handle Provider States",
            "desc": "Connect authorization, unsuccessful responses and repeated notifications to the correct payment without losing processing history.",
            "imageAlt": "Planning icon for payment gateways: handle provider states"
          },
          {
            "title": "Review Settlement Records",
            "desc": "Match provider and merchant records with the transaction references needed to investigate outstanding settlement differences.",
            "imageAlt": "Planning icon for payment gateways: review settlement records"
          }
        ],
        "rightTitle": "Payments Scope Checks",
        "features": [
          "Scope: Define the Payment Exchange",
          "Scope: Handle Provider States",
          "Scope: Review Settlement Records",
          "Scope: Merchant",
          "Scope: Tokens",
          "Scope: Provider",
          "Scope: Events",
          "Scope: Settlement",
          "Scope: Merchant Request",
          "Scope: Provider States"
        ],
        "btnText": "Plan Payments"
      },
      {
        "badge": "Payments Work",
        "label": "Organize the work",
        "amount": "WORK",
        "amountUnit": " scope",
        "infoTitle": "Payments Work Areas",
        "items": [
          {
            "title": "Merchant",
            "desc": "Connect payments to merchant records.",
            "imageAlt": "Planning icon for payment gateways: merchant"
          },
          {
            "title": "Tokens",
            "desc": "Use provider-defined token references.",
            "imageAlt": "Planning icon for payment gateways: tokens"
          },
          {
            "title": "Provider",
            "desc": "Track authorization and payment responses.",
            "imageAlt": "Planning icon for payment gateways: provider"
          }
        ],
        "rightTitle": "Payments Work Checks",
        "features": [
          "Work area: Merchant",
          "Work area: Tokens",
          "Work area: Provider",
          "Work area: Events",
          "Work area: Settlement",
          "Work area: Merchant Request",
          "Work area: Provider States",
          "Work area: Settlement Matching",
          "Work area: Define the Payment Exchange",
          "Work area: Handle Provider States"
        ],
        "btnText": "Scope Payments"
      },
      {
        "badge": "Payments Review",
        "label": "Prepare the handover",
        "amount": "QA",
        "amountUnit": " notes",
        "infoTitle": "Payments Review Points",
        "items": [
          {
            "title": "Events",
            "desc": "Match notifications and retries to payments.",
            "imageAlt": "Planning icon for payment gateways: events"
          },
          {
            "title": "Settlement",
            "desc": "Reconcile payments with settlement records.",
            "imageAlt": "Planning icon for payment gateways: settlement"
          },
          {
            "title": "Gateway Workflow",
            "desc": "Connect payment references to provider and settlement states.",
            "imageAlt": "Planning icon for payment gateways: gateway workflow"
          }
        ],
        "rightTitle": "Payments Review Checks",
        "features": [
          "Review: Events",
          "Review: Settlement",
          "Review: Merchant Request",
          "Review: Provider States",
          "Review: Settlement Matching",
          "Review: Define the Payment Exchange",
          "Review: Handle Provider States",
          "Review: Review Settlement Records",
          "Review: Merchant",
          "Review: Tokens"
        ],
        "btnText": "Review Payments"
      }
    ],
    "showAll": "See All Checks ↓",
    "showLess": "See Fewer ↑",
    "previous": "← Previous",
    "next": "Next →",
    "stageLabel": "Stage"
  },
  "/smart-manufacturing/": {
    "titleLead": "Factory IT Work Planning",
    "titleRest": "Review the Scope in Stages",
    "intro": "Plan smart manufacturing around the work in scope. Connect assembly signals, operating temperatures and fault observations with the equipment and production context needed for operational decisions.",
    "steps": [
      {
        "badge": "Factory IT Scope",
        "label": "Clarify the requirements",
        "amount": "MAP",
        "amountUnit": " first",
        "infoTitle": "Factory IT Priorities",
        "items": [
          {
            "title": "Identify Production Signals",
            "desc": "Associate sensor readings with equipment, units and capture times so manufacturing data can be interpreted in context.",
            "imageAlt": "Planning icon for smart manufacturing: identify production signals"
          },
          {
            "title": "Connect Conditions and Events",
            "desc": "Bring operating measurements and reported faults together without treating a single reading as a confirmed diagnosis.",
            "imageAlt": "Planning icon for smart manufacturing: connect conditions and events"
          },
          {
            "title": "Plan Alert Follow-up",
            "desc": "Define how rules or predictive outputs lead to inspection tasks, including ownership and review of uncertain conditions.",
            "imageAlt": "Planning icon for smart manufacturing: plan alert follow-up"
          }
        ],
        "rightTitle": "Factory IT Scope Checks",
        "features": [
          "Scope: Identify Production Signals",
          "Scope: Connect Conditions and Events",
          "Scope: Plan Alert Follow-up",
          "Scope: Equipment",
          "Scope: Capture",
          "Scope: Conditions",
          "Scope: Alerts",
          "Scope: Inspection",
          "Scope: Assembly Signals",
          "Scope: Operating Context"
        ],
        "btnText": "Plan Factory IT"
      },
      {
        "badge": "Factory IT Work",
        "label": "Organize the work",
        "amount": "WORK",
        "amountUnit": " scope",
        "infoTitle": "Factory IT Work Areas",
        "items": [
          {
            "title": "Equipment",
            "desc": "Identify production assets behind signals.",
            "imageAlt": "Planning icon for smart manufacturing: equipment"
          },
          {
            "title": "Capture",
            "desc": "Record sensor units and timestamps.",
            "imageAlt": "Planning icon for smart manufacturing: capture"
          },
          {
            "title": "Conditions",
            "desc": "Connect operating and temperature readings.",
            "imageAlt": "Planning icon for smart manufacturing: conditions"
          }
        ],
        "rightTitle": "Factory IT Work Checks",
        "features": [
          "Work area: Equipment",
          "Work area: Capture",
          "Work area: Conditions",
          "Work area: Alerts",
          "Work area: Inspection",
          "Work area: Assembly Signals",
          "Work area: Operating Context",
          "Work area: Fault Follow-up",
          "Work area: Identify Production Signals",
          "Work area: Connect Conditions and Events"
        ],
        "btnText": "Scope Factory IT"
      },
      {
        "badge": "Factory IT Review",
        "label": "Prepare the handover",
        "amount": "QA",
        "amountUnit": " notes",
        "infoTitle": "Factory IT Review Points",
        "items": [
          {
            "title": "Alerts",
            "desc": "Apply reviewed fault rules or model logic.",
            "imageAlt": "Planning icon for smart manufacturing: alerts"
          },
          {
            "title": "Inspection",
            "desc": "Assign inspection of reported conditions.",
            "imageAlt": "Planning icon for smart manufacturing: inspection"
          },
          {
            "title": "Factory Workflow",
            "desc": "Connect assembly signals to equipment review actions.",
            "imageAlt": "Planning icon for smart manufacturing: factory workflow"
          }
        ],
        "rightTitle": "Factory IT Review Checks",
        "features": [
          "Review: Alerts",
          "Review: Inspection",
          "Review: Assembly Signals",
          "Review: Operating Context",
          "Review: Fault Follow-up",
          "Review: Identify Production Signals",
          "Review: Connect Conditions and Events",
          "Review: Plan Alert Follow-up",
          "Review: Equipment",
          "Review: Capture"
        ],
        "btnText": "Review Factory IT"
      }
    ],
    "showAll": "See All Checks ↓",
    "showLess": "See Fewer ↑",
    "previous": "← Previous",
    "next": "Next →",
    "stageLabel": "Stage"
  },
  "/logistics-software/": {
    "titleLead": "Logistics Work Planning",
    "titleRest": "Review the Scope in Stages",
    "intro": "Plan logistics software around the work in scope. Connect intermodal loading, supplier delivery records and fulfillment activity so operations can trace cargo through each planned handoff.",
    "steps": [
      {
        "badge": "Logistics Scope",
        "label": "Clarify the requirements",
        "amount": "MAP",
        "amountUnit": " first",
        "infoTitle": "Logistics Priorities",
        "items": [
          {
            "title": "Structure Cargo Plans",
            "desc": "Record cargo units, loading constraints and transport legs with the identifiers needed to follow an intermodal shipment.",
            "imageAlt": "Planning icon for logistics software: structure cargo plans"
          },
          {
            "title": "Connect Delivery Updates",
            "desc": "Associate supplier dispatch and arrival information with the shipment and fulfillment work it affects.",
            "imageAlt": "Planning icon for logistics software: connect delivery updates"
          },
          {
            "title": "Review Handoff Exceptions",
            "desc": "Keep missed events, quantity differences and unresolved delivery issues attached to the cargo record and responsible team.",
            "imageAlt": "Planning icon for logistics software: review handoff exceptions"
          }
        ],
        "rightTitle": "Logistics Scope Checks",
        "features": [
          "Scope: Structure Cargo Plans",
          "Scope: Connect Delivery Updates",
          "Scope: Review Handoff Exceptions",
          "Scope: Cargo",
          "Scope: Legs",
          "Scope: Suppliers",
          "Scope: Fulfillment",
          "Scope: Exceptions",
          "Scope: Cargo Plan",
          "Scope: Intermodal Handoffs"
        ],
        "btnText": "Plan Logistics"
      },
      {
        "badge": "Logistics Work",
        "label": "Organize the work",
        "amount": "WORK",
        "amountUnit": " scope",
        "infoTitle": "Logistics Work Areas",
        "items": [
          {
            "title": "Cargo",
            "desc": "Identify cargo units and loading needs.",
            "imageAlt": "Planning icon for logistics software: cargo"
          },
          {
            "title": "Legs",
            "desc": "Connect stages and intermodal handoffs.",
            "imageAlt": "Planning icon for logistics software: legs"
          },
          {
            "title": "Suppliers",
            "desc": "Match supplier updates to consignments.",
            "imageAlt": "Planning icon for logistics software: suppliers"
          }
        ],
        "rightTitle": "Logistics Work Checks",
        "features": [
          "Work area: Cargo",
          "Work area: Legs",
          "Work area: Suppliers",
          "Work area: Fulfillment",
          "Work area: Exceptions",
          "Work area: Cargo Plan",
          "Work area: Intermodal Handoffs",
          "Work area: Delivery Updates",
          "Work area: Structure Cargo Plans",
          "Work area: Connect Delivery Updates"
        ],
        "btnText": "Scope Logistics"
      },
      {
        "badge": "Logistics Review",
        "label": "Prepare the handover",
        "amount": "QA",
        "amountUnit": " notes",
        "infoTitle": "Logistics Review Points",
        "items": [
          {
            "title": "Fulfillment",
            "desc": "Link arrivals to fulfillment work.",
            "imageAlt": "Planning icon for logistics software: fulfillment"
          },
          {
            "title": "Exceptions",
            "desc": "Review missed events and cargo differences.",
            "imageAlt": "Planning icon for logistics software: exceptions"
          },
          {
            "title": "Logistics Workflow",
            "desc": "Connect cargo loading to delivery and fulfillment records.",
            "imageAlt": "Planning icon for logistics software: logistics workflow"
          }
        ],
        "rightTitle": "Logistics Review Checks",
        "features": [
          "Review: Fulfillment",
          "Review: Exceptions",
          "Review: Cargo Plan",
          "Review: Intermodal Handoffs",
          "Review: Delivery Updates",
          "Review: Structure Cargo Plans",
          "Review: Connect Delivery Updates",
          "Review: Review Handoff Exceptions",
          "Review: Cargo",
          "Review: Legs"
        ],
        "btnText": "Review Logistics"
      }
    ],
    "showAll": "See All Checks ↓",
    "showLess": "See Fewer ↑",
    "previous": "← Previous",
    "next": "Next →",
    "stageLabel": "Stage"
  },
  "/energy-utilities/": {
    "titleLead": "Utilities Work Planning",
    "titleRest": "Review the Scope in Stages",
    "intro": "Plan energy and utilities around the work in scope. Connect meter transmissions, grid usage records and maintenance dispatch so utility teams can review information and coordinate field work.",
    "steps": [
      {
        "badge": "Utilities Scope",
        "label": "Clarify the requirements",
        "amount": "MAP",
        "amountUnit": " first",
        "infoTitle": "Utilities Priorities",
        "items": [
          {
            "title": "Explain Usage Records",
            "desc": "Associate consumption values with meter identifiers, units and reporting periods before preparing operational views.",
            "imageAlt": "Planning icon for energy and utilities: explain usage records"
          },
          {
            "title": "Follow Transmission Status",
            "desc": "Keep received, missing and unsuccessful meter messages visible with the source context needed for investigation.",
            "imageAlt": "Planning icon for energy and utilities: follow transmission status"
          },
          {
            "title": "Coordinate Field Maintenance",
            "desc": "Connect reported issues and work locations to crew assignments, task states and maintenance outcomes.",
            "imageAlt": "Planning icon for energy and utilities: coordinate field maintenance"
          }
        ],
        "rightTitle": "Utilities Scope Checks",
        "features": [
          "Scope: Explain Usage Records",
          "Scope: Follow Transmission Status",
          "Scope: Coordinate Field Maintenance",
          "Scope: Meters",
          "Scope: Messages",
          "Scope: Usage",
          "Scope: Dispatch",
          "Scope: Maintenance",
          "Scope: Meter Messages",
          "Scope: Usage Periods"
        ],
        "btnText": "Plan Utilities"
      },
      {
        "badge": "Utilities Work",
        "label": "Organize the work",
        "amount": "WORK",
        "amountUnit": " scope",
        "infoTitle": "Utilities Work Areas",
        "items": [
          {
            "title": "Meters",
            "desc": "Identify meter sources and measurement units.",
            "imageAlt": "Planning icon for energy and utilities: meters"
          },
          {
            "title": "Messages",
            "desc": "Review received and missing transmissions.",
            "imageAlt": "Planning icon for energy and utilities: messages"
          },
          {
            "title": "Usage",
            "desc": "Calculate usage for defined periods.",
            "imageAlt": "Planning icon for energy and utilities: usage"
          }
        ],
        "rightTitle": "Utilities Work Checks",
        "features": [
          "Work area: Meters",
          "Work area: Messages",
          "Work area: Usage",
          "Work area: Dispatch",
          "Work area: Maintenance",
          "Work area: Meter Messages",
          "Work area: Usage Periods",
          "Work area: Crew Dispatch",
          "Work area: Explain Usage Records",
          "Work area: Follow Transmission Status"
        ],
        "btnText": "Scope Utilities"
      },
      {
        "badge": "Utilities Review",
        "label": "Prepare the handover",
        "amount": "QA",
        "amountUnit": " notes",
        "infoTitle": "Utilities Review Points",
        "items": [
          {
            "title": "Dispatch",
            "desc": "Assign field work with location context.",
            "imageAlt": "Planning icon for energy and utilities: dispatch"
          },
          {
            "title": "Maintenance",
            "desc": "Track crew updates and service tasks.",
            "imageAlt": "Planning icon for energy and utilities: maintenance"
          },
          {
            "title": "Utilities Workflow",
            "desc": "Connect meter information to grid and field activity.",
            "imageAlt": "Planning icon for energy and utilities: utilities workflow"
          }
        ],
        "rightTitle": "Utilities Review Checks",
        "features": [
          "Review: Dispatch",
          "Review: Maintenance",
          "Review: Meter Messages",
          "Review: Usage Periods",
          "Review: Crew Dispatch",
          "Review: Explain Usage Records",
          "Review: Follow Transmission Status",
          "Review: Coordinate Field Maintenance",
          "Review: Meters",
          "Review: Messages"
        ],
        "btnText": "Review Utilities"
      }
    ],
    "showAll": "See All Checks ↓",
    "showLess": "See Fewer ↑",
    "previous": "← Previous",
    "next": "Next →",
    "stageLabel": "Stage"
  },
  "/professional-services-it/": {
    "titleLead": "Client Work Work Planning",
    "titleRest": "Review the Scope in Stages",
    "intro": "Plan professional services around the work in scope. Organize engagement time, case information and consultant assignments around the work and responsibilities of professional-service teams.",
    "steps": [
      {
        "badge": "Client Work Scope",
        "label": "Clarify the requirements",
        "amount": "MAP",
        "amountUnit": " first",
        "infoTitle": "Client Work Priorities",
        "items": [
          {
            "title": "Connect Engagement Records",
            "desc": "Define clients, projects or cases and the relationships that give time entries and supporting documents their context.",
            "imageAlt": "Planning icon for professional services: connect engagement records"
          },
          {
            "title": "Track Time and Assignment",
            "desc": "Associate recorded effort and consultant availability with the relevant engagement, period and approval responsibility.",
            "imageAlt": "Planning icon for professional services: track time and assignment"
          },
          {
            "title": "Prepare Operational Reviews",
            "desc": "Present utilization and work status with clear calculation definitions so managers can investigate the underlying records.",
            "imageAlt": "Planning icon for professional services: prepare operational reviews"
          }
        ],
        "rightTitle": "Client Work Scope Checks",
        "features": [
          "Scope: Connect Engagement Records",
          "Scope: Track Time and Assignment",
          "Scope: Prepare Operational Reviews",
          "Scope: Engagements",
          "Scope: Time",
          "Scope: People",
          "Scope: Approval",
          "Scope: Utilization",
          "Scope: Engagement Context",
          "Scope: Recorded Effort"
        ],
        "btnText": "Plan Client Work"
      },
      {
        "badge": "Client Work Work",
        "label": "Organize the work",
        "amount": "WORK",
        "amountUnit": " scope",
        "infoTitle": "Client Work Work Areas",
        "items": [
          {
            "title": "Engagements",
            "desc": "Define the project or case behind the work.",
            "imageAlt": "Planning icon for professional services: engagements"
          },
          {
            "title": "Time",
            "desc": "Link time entries to activities and periods.",
            "imageAlt": "Planning icon for professional services: time"
          },
          {
            "title": "People",
            "desc": "Track consultant assignments and availability.",
            "imageAlt": "Planning icon for professional services: people"
          }
        ],
        "rightTitle": "Client Work Work Checks",
        "features": [
          "Work area: Engagements",
          "Work area: Time",
          "Work area: People",
          "Work area: Approval",
          "Work area: Utilization",
          "Work area: Engagement Context",
          "Work area: Recorded Effort",
          "Work area: Team Assignments",
          "Work area: Connect Engagement Records",
          "Work area: Track Time and Assignment"
        ],
        "btnText": "Scope Client Work"
      },
      {
        "badge": "Client Work Review",
        "label": "Prepare the handover",
        "amount": "QA",
        "amountUnit": " notes",
        "infoTitle": "Client Work Review Points",
        "items": [
          {
            "title": "Approval",
            "desc": "Route time and record changes for approval.",
            "imageAlt": "Planning icon for professional services: approval"
          },
          {
            "title": "Utilization",
            "desc": "Explain workload using effort records.",
            "imageAlt": "Planning icon for professional services: utilization"
          },
          {
            "title": "Services Workflow",
            "desc": "Connect engagements, recorded effort and team assignments.",
            "imageAlt": "Planning icon for professional services: services workflow"
          }
        ],
        "rightTitle": "Client Work Review Checks",
        "features": [
          "Review: Approval",
          "Review: Utilization",
          "Review: Engagement Context",
          "Review: Recorded Effort",
          "Review: Team Assignments",
          "Review: Connect Engagement Records",
          "Review: Track Time and Assignment",
          "Review: Prepare Operational Reviews",
          "Review: Engagements",
          "Review: Time"
        ],
        "btnText": "Review Client Work"
      }
    ],
    "showAll": "See All Checks ↓",
    "showLess": "See Fewer ↑",
    "previous": "← Previous",
    "next": "Next →",
    "stageLabel": "Stage"
  },
  "/real-estate/": {
    "titleLead": "Real Estate Work Planning",
    "titleRest": "Review the Scope in Stages",
    "intro": "Plan real estate around the work in scope. Connect property information, broker activity and contract progress without separating each task from its listing and parties.",
    "steps": [
      {
        "badge": "Real Estate Scope",
        "label": "Clarify the requirements",
        "amount": "MAP",
        "amountUnit": " first",
        "infoTitle": "Real Estate Priorities",
        "items": [
          {
            "title": "Property Listings",
            "desc": "Structure residential and commercial information around the details needed to understand the property.",
            "imageAlt": "Planning icon for real estate: property listings"
          },
          {
            "title": "Broker Coordination",
            "desc": "Keep inquiries and viewing arrangements connected to the listing, broker and applicable schedule.",
            "imageAlt": "Planning icon for real estate: broker coordination"
          },
          {
            "title": "Agreement Tracking",
            "desc": "Associate contract records and review stages with the relevant property and transaction participants.",
            "imageAlt": "Planning icon for real estate: agreement tracking"
          }
        ],
        "rightTitle": "Real Estate Scope Checks",
        "features": [
          "Scope: Listing attributes",
          "Scope: Availability context",
          "Scope: Property documents",
          "Scope: Listing-change records",
          "Scope: Property inquiries",
          "Scope: Broker assignments",
          "Scope: Viewing arrangements",
          "Scope: Schedule changes",
          "Scope: Agreement documents",
          "Scope: Transaction parties"
        ],
        "btnText": "Plan Real Estate"
      },
      {
        "badge": "Real Estate Work",
        "label": "Organize the work",
        "amount": "WORK",
        "amountUnit": " scope",
        "infoTitle": "Real Estate Work Areas",
        "items": [
          {
            "title": "Listing attributes",
            "desc": "For real estate, include availability context, property documents, listing-change records when defining property listings.",
            "imageAlt": "Planning icon for real estate: listing attributes"
          },
          {
            "title": "Property inquiries",
            "desc": "For real estate, include broker assignments, viewing arrangements, schedule changes when defining broker coordination.",
            "imageAlt": "Planning icon for real estate: property inquiries"
          },
          {
            "title": "Agreement documents",
            "desc": "For real estate, include transaction parties, contract-review stages, outstanding actions when defining agreement tracking.",
            "imageAlt": "Planning icon for real estate: agreement documents"
          }
        ],
        "rightTitle": "Real Estate Work Checks",
        "features": [
          "Work area: Listing-change records",
          "Work area: Property inquiries",
          "Work area: Broker assignments",
          "Work area: Viewing arrangements",
          "Work area: Schedule changes",
          "Work area: Agreement documents",
          "Work area: Transaction parties",
          "Work area: Contract-review stages",
          "Work area: Outstanding actions",
          "Work area: Listing follow-up"
        ],
        "btnText": "Scope Real Estate"
      },
      {
        "badge": "Real Estate Review",
        "label": "Prepare the handover",
        "amount": "QA",
        "amountUnit": " notes",
        "infoTitle": "Real Estate Review Points",
        "items": [
          {
            "title": "Operational Follow-up",
            "desc": "Show the ownership and context of unresolved listing, appointment and agreement work.",
            "imageAlt": "Planning icon for real estate: operational follow-up"
          },
          {
            "title": "Listing follow-up",
            "desc": "Review listing follow-up alongside appointment outcomes before agreeing the real estate handover.",
            "imageAlt": "Planning icon for real estate: listing follow-up"
          },
          {
            "title": "Agreement questions",
            "desc": "Keep agreement questions and task ownership records in the real estate review record.",
            "imageAlt": "Planning icon for real estate: agreement questions"
          }
        ],
        "rightTitle": "Real Estate Review Checks",
        "features": [
          "Review: Viewing arrangements",
          "Review: Schedule changes",
          "Review: Agreement documents",
          "Review: Transaction parties",
          "Review: Contract-review stages",
          "Review: Outstanding actions",
          "Review: Listing follow-up",
          "Review: Appointment outcomes",
          "Review: Agreement questions",
          "Review: Task ownership records"
        ],
        "btnText": "Review Real Estate"
      }
    ],
    "showAll": "See All Checks ↓",
    "showLess": "See Fewer ↑",
    "previous": "← Previous",
    "next": "Next →",
    "stageLabel": "Stage"
  },
  "/construction-it/": {
    "titleLead": "Site IT Work Planning",
    "titleRest": "Review the Scope in Stages",
    "intro": "Plan construction software around the work in scope. Connect project schematics, resource estimates and inspection records with the site and version context needed for construction coordination.",
    "steps": [
      {
        "badge": "Site IT Scope",
        "label": "Clarify the requirements",
        "amount": "MAP",
        "amountUnit": " first",
        "infoTitle": "Site IT Priorities",
        "items": [
          {
            "title": "Organize Project Documents",
            "desc": "Associate drawings, revisions and site records with the project areas and responsibilities they describe.",
            "imageAlt": "Planning icon for construction software: organize project documents"
          },
          {
            "title": "Trace Resource Estimates",
            "desc": "Keep quantities, units and estimate assumptions visible so changes can be reviewed against their underlying inputs.",
            "imageAlt": "Planning icon for construction software: trace resource estimates"
          },
          {
            "title": "Connect Inspection Follow-up",
            "desc": "Record checklist findings, supporting evidence and assigned actions alongside the location and work package being inspected.",
            "imageAlt": "Planning icon for construction software: connect inspection follow-up"
          }
        ],
        "rightTitle": "Site IT Scope Checks",
        "features": [
          "Scope: Organize Project Documents",
          "Scope: Trace Resource Estimates",
          "Scope: Connect Inspection Follow-up",
          "Scope: Documents",
          "Scope: Resources",
          "Scope: Site Work",
          "Scope: Inspection",
          "Scope: Actions",
          "Scope: Drawing Revisions",
          "Scope: Estimate Inputs"
        ],
        "btnText": "Plan Site IT"
      },
      {
        "badge": "Site IT Work",
        "label": "Organize the work",
        "amount": "WORK",
        "amountUnit": " scope",
        "infoTitle": "Site IT Work Areas",
        "items": [
          {
            "title": "Documents",
            "desc": "Identify drawings and project revisions.",
            "imageAlt": "Planning icon for construction software: documents"
          },
          {
            "title": "Resources",
            "desc": "Record material quantities and assumptions.",
            "imageAlt": "Planning icon for construction software: resources"
          },
          {
            "title": "Site Work",
            "desc": "Connect work packages to site locations.",
            "imageAlt": "Planning icon for construction software: site work"
          }
        ],
        "rightTitle": "Site IT Work Checks",
        "features": [
          "Work area: Documents",
          "Work area: Resources",
          "Work area: Site Work",
          "Work area: Inspection",
          "Work area: Actions",
          "Work area: Drawing Revisions",
          "Work area: Estimate Inputs",
          "Work area: Inspection Follow-up",
          "Work area: Organize Project Documents",
          "Work area: Trace Resource Estimates"
        ],
        "btnText": "Scope Site IT"
      },
      {
        "badge": "Site IT Review",
        "label": "Prepare the handover",
        "amount": "QA",
        "amountUnit": " notes",
        "infoTitle": "Site IT Review Points",
        "items": [
          {
            "title": "Inspection",
            "desc": "Store checklist findings with site evidence.",
            "imageAlt": "Planning icon for construction software: inspection"
          },
          {
            "title": "Actions",
            "desc": "Assign follow-up on construction findings.",
            "imageAlt": "Planning icon for construction software: actions"
          },
          {
            "title": "Site Workflow",
            "desc": "Connect construction documents to estimates and inspections.",
            "imageAlt": "Planning icon for construction software: site workflow"
          }
        ],
        "rightTitle": "Site IT Review Checks",
        "features": [
          "Review: Inspection",
          "Review: Actions",
          "Review: Drawing Revisions",
          "Review: Estimate Inputs",
          "Review: Inspection Follow-up",
          "Review: Organize Project Documents",
          "Review: Trace Resource Estimates",
          "Review: Connect Inspection Follow-up",
          "Review: Documents",
          "Review: Resources"
        ],
        "btnText": "Review Site IT"
      }
    ],
    "showAll": "See All Checks ↓",
    "showLess": "See Fewer ↑",
    "previous": "← Previous",
    "next": "Next →",
    "stageLabel": "Stage"
  },
  "/hospitality-tech/": {
    "titleLead": "Hospitality Work Planning",
    "titleRest": "Review the Scope in Stages",
    "intro": "Plan hospitality software around the work in scope. Connect room reservations, dining records and guest profiles so multi-site teams can coordinate service activity with the right operational context.",
    "steps": [
      {
        "badge": "Hospitality Scope",
        "label": "Clarify the requirements",
        "amount": "MAP",
        "amountUnit": " first",
        "infoTitle": "Hospitality Priorities",
        "items": [
          {
            "title": "Coordinate Reservation States",
            "desc": "Associate bookings with property, room and date information, including changes, cancellations and outstanding requests.",
            "imageAlt": "Planning icon for hospitality software: coordinate reservation states"
          },
          {
            "title": "Connect Dining Transactions",
            "desc": "Keep service checks, charges and settlement status linked to the outlet or guest context they belong to.",
            "imageAlt": "Planning icon for hospitality software: connect dining transactions"
          },
          {
            "title": "Organize Guest Information",
            "desc": "Define profile access and update responsibilities so staff can use relevant service information appropriately across locations.",
            "imageAlt": "Planning icon for hospitality software: organize guest information"
          }
        ],
        "rightTitle": "Hospitality Scope Checks",
        "features": [
          "Scope: Coordinate Reservation States",
          "Scope: Connect Dining Transactions",
          "Scope: Organize Guest Information",
          "Scope: Properties",
          "Scope: Bookings",
          "Scope: Dining",
          "Scope: Profiles",
          "Scope: Service",
          "Scope: Booking Context",
          "Scope: Dining Records"
        ],
        "btnText": "Plan Hospitality"
      },
      {
        "badge": "Hospitality Work",
        "label": "Organize the work",
        "amount": "WORK",
        "amountUnit": " scope",
        "infoTitle": "Hospitality Work Areas",
        "items": [
          {
            "title": "Properties",
            "desc": "Identify properties and service locations.",
            "imageAlt": "Planning icon for hospitality software: properties"
          },
          {
            "title": "Bookings",
            "desc": "Track reservation dates and state changes.",
            "imageAlt": "Planning icon for hospitality software: bookings"
          },
          {
            "title": "Dining",
            "desc": "Connect dining charges to their outlet.",
            "imageAlt": "Planning icon for hospitality software: dining"
          }
        ],
        "rightTitle": "Hospitality Work Checks",
        "features": [
          "Work area: Properties",
          "Work area: Bookings",
          "Work area: Dining",
          "Work area: Profiles",
          "Work area: Service",
          "Work area: Booking Context",
          "Work area: Dining Records",
          "Work area: Guest Service",
          "Work area: Coordinate Reservation States",
          "Work area: Connect Dining Transactions"
        ],
        "btnText": "Scope Hospitality"
      },
      {
        "badge": "Hospitality Review",
        "label": "Prepare the handover",
        "amount": "QA",
        "amountUnit": " notes",
        "infoTitle": "Hospitality Review Points",
        "items": [
          {
            "title": "Profiles",
            "desc": "Define guest-profile access responsibilities.",
            "imageAlt": "Planning icon for hospitality software: profiles"
          },
          {
            "title": "Service",
            "desc": "Track guest requests and service tasks.",
            "imageAlt": "Planning icon for hospitality software: service"
          },
          {
            "title": "Guest Workflow",
            "desc": "Connect reservations, dining and guest-service records.",
            "imageAlt": "Planning icon for hospitality software: guest workflow"
          }
        ],
        "rightTitle": "Hospitality Review Checks",
        "features": [
          "Review: Profiles",
          "Review: Service",
          "Review: Booking Context",
          "Review: Dining Records",
          "Review: Guest Service",
          "Review: Coordinate Reservation States",
          "Review: Connect Dining Transactions",
          "Review: Organize Guest Information",
          "Review: Properties",
          "Review: Bookings"
        ],
        "btnText": "Review Hospitality"
      }
    ],
    "showAll": "See All Checks ↓",
    "showLess": "See Fewer ↑",
    "previous": "← Previous",
    "next": "Next →",
    "stageLabel": "Stage"
  },
  "/": {
    "titleLead": "Project Help Work Planning",
    "titleRest": "Review the Scope in Stages",
    "intro": "Plan software project advice around the work in scope. Connect software consulting, application delivery and ongoing technical work to a clear project scope and accountable handoffs.",
    "steps": [
      {
        "badge": "Project Help Scope",
        "label": "Clarify the requirements",
        "amount": "MAP",
        "amountUnit": " first",
        "infoTitle": "Project Help Priorities",
        "items": [
          {
            "title": "Project Direction",
            "desc": "Describe the software problem, the people affected and the decision the proposed work should support.",
            "imageAlt": "Planning icon for software project advice: project direction"
          },
          {
            "title": "System Context",
            "desc": "Review existing applications, information flows and operating constraints before selecting an implementation approach.",
            "imageAlt": "Planning icon for software project advice: system context"
          },
          {
            "title": "Delivery Scope",
            "desc": "Sequence the agreed software work around dependencies, review points and the teams responsible for implementation.",
            "imageAlt": "Planning icon for software project advice: delivery scope"
          }
        ],
        "rightTitle": "Project Help Scope Checks",
        "features": [
          "Scope: Business questions",
          "Scope: User responsibilities",
          "Scope: Project boundaries",
          "Scope: Decision ownership",
          "Scope: Application landscape",
          "Scope: Information flows",
          "Scope: Operating constraints",
          "Scope: Integration responsibilities",
          "Scope: Work priorities",
          "Scope: Delivery dependencies"
        ],
        "btnText": "Plan Project Help"
      },
      {
        "badge": "Project Help Work",
        "label": "Organize the work",
        "amount": "WORK",
        "amountUnit": " scope",
        "infoTitle": "Project Help Work Areas",
        "items": [
          {
            "title": "Business questions",
            "desc": "For software project advice, include user responsibilities, project boundaries, decision ownership when defining project direction.",
            "imageAlt": "Planning icon for software project advice: business questions"
          },
          {
            "title": "Application landscape",
            "desc": "For software project advice, include information flows, operating constraints, integration responsibilities when defining system context.",
            "imageAlt": "Planning icon for software project advice: application landscape"
          },
          {
            "title": "Work priorities",
            "desc": "For software project advice, include delivery dependencies, review checkpoints, implementation ownership when defining delivery scope.",
            "imageAlt": "Planning icon for software project advice: work priorities"
          }
        ],
        "rightTitle": "Project Help Work Checks",
        "features": [
          "Work area: Decision ownership",
          "Work area: Application landscape",
          "Work area: Information flows",
          "Work area: Operating constraints",
          "Work area: Integration responsibilities",
          "Work area: Work priorities",
          "Work area: Delivery dependencies",
          "Work area: Review checkpoints",
          "Work area: Implementation ownership",
          "Work area: Support responsibilities"
        ],
        "btnText": "Scope Project Help"
      },
      {
        "badge": "Project Help Review",
        "label": "Prepare the handover",
        "amount": "QA",
        "amountUnit": " notes",
        "infoTitle": "Project Help Review Points",
        "items": [
          {
            "title": "Ongoing Work",
            "desc": "Agree how the released software will be reviewed, maintained and supported as its requirements change.",
            "imageAlt": "Planning icon for software project advice: ongoing work"
          },
          {
            "title": "Support responsibilities",
            "desc": "Review support responsibilities alongside maintenance needs before agreeing the software project advice handover.",
            "imageAlt": "Planning icon for software project advice: support responsibilities"
          },
          {
            "title": "Change requests",
            "desc": "Keep change requests and handover records in the software project advice review record.",
            "imageAlt": "Planning icon for software project advice: change requests"
          }
        ],
        "rightTitle": "Project Help Review Checks",
        "features": [
          "Review: Operating constraints",
          "Review: Integration responsibilities",
          "Review: Work priorities",
          "Review: Delivery dependencies",
          "Review: Review checkpoints",
          "Review: Implementation ownership",
          "Review: Support responsibilities",
          "Review: Maintenance needs",
          "Review: Change requests",
          "Review: Handover records"
        ],
        "btnText": "Review Project Help"
      }
    ],
    "showAll": "See All Checks ↓",
    "showLess": "See Fewer ↑",
    "previous": "← Previous",
    "next": "Next →",
    "stageLabel": "Stage"
  }
};

function normalizePath(path: string | null | undefined): string {
  const value = (path || "/").trim().split(/[?#]/)[0].toLowerCase().replace(/^\/+|\/+$/g, "");
  return value ? "/" + value + "/" : "/";
}
const fallbackLogo: LogoReferenceContent = {"heading":"Project Help: Interface Options","toolsHeading":"Project Help: Web Tool Reference","imageAlts":["React logo in the software project advice interface reference","Vue logo in the software project advice interface reference","Angular logo in the software project advice interface reference","Svelte logo in the software project advice interface reference","Solid logo in the software project advice interface reference","Next.js logo in the software project advice interface reference","Tailwind CSS logo in the software project advice interface reference","Redux logo in the software project advice interface reference","GraphQL logo in the software project advice interface reference","Vite logo in the software project advice interface reference","Webpack logo in the software project advice interface reference","Material UI logo in the software project advice interface reference","Jest logo in the software project advice interface reference"]};
const fallbackPlanning: WorkPlanningContent = {"titleLead":"Project Help Work Planning","titleRest":"Review the Scope in Stages","intro":"Plan software project advice around the work in scope. Connect software consulting, application delivery and ongoing technical work to a clear project scope and accountable handoffs.","steps":[{"badge":"Project Help Scope","label":"Clarify the requirements","amount":"MAP","amountUnit":" first","infoTitle":"Project Help Priorities","items":[{"title":"Project Direction","desc":"Describe the software problem, the people affected and the decision the proposed work should support.","imageAlt":"Planning icon for software project advice: project direction"},{"title":"System Context","desc":"Review existing applications, information flows and operating constraints before selecting an implementation approach.","imageAlt":"Planning icon for software project advice: system context"},{"title":"Delivery Scope","desc":"Sequence the agreed software work around dependencies, review points and the teams responsible for implementation.","imageAlt":"Planning icon for software project advice: delivery scope"}],"rightTitle":"Project Help Scope Checks","features":["Scope: Business questions","Scope: User responsibilities","Scope: Project boundaries","Scope: Decision ownership","Scope: Application landscape","Scope: Information flows","Scope: Operating constraints","Scope: Integration responsibilities","Scope: Work priorities","Scope: Delivery dependencies"],"btnText":"Plan Project Help"},{"badge":"Project Help Work","label":"Organize the work","amount":"WORK","amountUnit":" scope","infoTitle":"Project Help Work Areas","items":[{"title":"Business questions","desc":"For software project advice, include user responsibilities, project boundaries, decision ownership when defining project direction.","imageAlt":"Planning icon for software project advice: business questions"},{"title":"Application landscape","desc":"For software project advice, include information flows, operating constraints, integration responsibilities when defining system context.","imageAlt":"Planning icon for software project advice: application landscape"},{"title":"Work priorities","desc":"For software project advice, include delivery dependencies, review checkpoints, implementation ownership when defining delivery scope.","imageAlt":"Planning icon for software project advice: work priorities"}],"rightTitle":"Project Help Work Checks","features":["Work area: Decision ownership","Work area: Application landscape","Work area: Information flows","Work area: Operating constraints","Work area: Integration responsibilities","Work area: Work priorities","Work area: Delivery dependencies","Work area: Review checkpoints","Work area: Implementation ownership","Work area: Support responsibilities"],"btnText":"Scope Project Help"},{"badge":"Project Help Review","label":"Prepare the handover","amount":"QA","amountUnit":" notes","infoTitle":"Project Help Review Points","items":[{"title":"Ongoing Work","desc":"Agree how the released software will be reviewed, maintained and supported as its requirements change.","imageAlt":"Planning icon for software project advice: ongoing work"},{"title":"Support responsibilities","desc":"Review support responsibilities alongside maintenance needs before agreeing the software project advice handover.","imageAlt":"Planning icon for software project advice: support responsibilities"},{"title":"Change requests","desc":"Keep change requests and handover records in the software project advice review record.","imageAlt":"Planning icon for software project advice: change requests"}],"rightTitle":"Project Help Review Checks","features":["Review: Operating constraints","Review: Integration responsibilities","Review: Work priorities","Review: Delivery dependencies","Review: Review checkpoints","Review: Implementation ownership","Review: Support responsibilities","Review: Maintenance needs","Review: Change requests","Review: Handover records"],"btnText":"Review Project Help"}],"showAll":"See All Checks ↓","showLess":"See Fewer ↑","previous":"← Previous","next":"Next →","stageLabel":"Stage"};
export const getLogoReferenceContent = (path?: string | null): LogoReferenceContent => logoReferenceContent[normalizePath(path)] || fallbackLogo;
export const getWorkPlanningContent = (path?: string | null): WorkPlanningContent => workPlanningContent[normalizePath(path)] || fallbackPlanning;
