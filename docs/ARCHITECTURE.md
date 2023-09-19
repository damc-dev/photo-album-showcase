## Architecture Overview

The Photo Album Showcase web application is designed with a modern serverless architecture to ensure a smooth user experience and streamlined development and deployment processes.

![Architecture Diagram](/diagrams/architecture.png)

Here's a brief overview of the architecture:

### Frontend

The frontend of the application is built using Next.js, a React framework. Next.js enables server-side rendering (SSR) and supports incremental static regeneration, enhancing performance and SEO. The UI is designed using Material UI (MUI), providing a visually appealing and consistent user interface.

### Backend

The application follows a serverless architecture utilizing AWS services. No backend is currently deployed, but would use AWS Lambda functions for backend logic and API endpoints. AWS API Gateway facilitates API management and integration with Lambda functions, ensuring secure and efficient communication between the frontend and backend.

### Data Integration

The application retrieves photo albums and photos from the {JSON} Placeholder API provided by Typecode. This external API serves as a source of data, which is seamlessly integrated into the application to showcase photo albums.

### Deployment

Deployment is streamlined using SST (Serverless Stack), an extension of AWS CDK. SST simplifies the deployment process by providing useful Level 3 constructs. It leverages OpenNext to optimize the deployment architecture, ensuring efficient support for Next.js server-side rendering and incremental static regeneration. AWS CloudFront is utilized for content delivery, enhancing performance and scalability.

### Development and Testing

The development process is made efficient through a local development environment provided by SST. This environment allows developers to debug and test the UI and Lambda functions locally, improving the development and testing cycle. Cypress is used for end-to-end testing, ensuring the application functions as expected.

### Environments

SST enables the creation of multiple environments for development, testing, and preview purposes, based on pull requests. This enables a structured and controlled testing process, ensuring the application is thoroughly validated before deployment to production.

In summary, the architecture incorporates modern technologies and AWS services to create a performant, scalable, and visually appealing Photo Album Showcase application. The focus on serverless architecture, seamless data integration, efficient deployment, and robust testing processes ensures a high-quality user experience and a streamlined development lifecycle.

**For more details on the rationale for the technologies see [technology choices](docs/TECHNOLOGY.md)**
