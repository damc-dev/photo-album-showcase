## Technology Choices

The development of the Photo Album Showcase application involved a careful selection of technologies to ensure efficiency, maintainability, and a seamless user experience. Here's a rationale for the technologies chosen:

### Next.js and React.js

Next.js, a React framework, was chosen for its ability to provide server-side rendering (SSR) and efficient routing. SSR enhances performance by rendering pages on the server and sending fully rendered HTML to the client, improving SEO and initial load times. React.js, a popular frontend library, allows for efficient component-based UI development, enabling better code organization and reusability.

### TypeScript

TypeScript was selected to enhance code quality and maintainability. Its static typing system helps catch errors during development, improving code robustness and facilitating collaboration within a team. Additionally, TypeScript provides better code documentation and editor support, aiding in understanding and navigating the codebase.

### Material UI (MUI)

Material UI, a React component library, was chosen for its modern and aesthetic design, saving development time and effort. It provides a consistent and visually appealing UI, enhancing the user experience. MUI components are customizable and adhere to Material Design guidelines, ensuring a polished and intuitive interface.

### {JSON} Placeholder API

The {JSON} Placeholder API by Typecode was utilized to fetch placeholder albums and photos. Leveraging an external API allows for real-time data integration without the need for a custom backend. This choice simplifies development, making it easier to focus on frontend functionality and design.

### Cypress

Cypress was chosen for end-to-end (E2E) testing due to its ease of use, robust testing capabilities, and ability to simulate real user interactions. E2E testing ensures the application functions as expected across different components, providing confidence in the application's behavior and preventing potential regressions.

### SST (Serverless Stack)

SST (Serverless Stack) was used for AWS deployment, providing an efficient and scalable serverless architecture. SST is an extension of AWS CDK providing useful L3 constructs and simplifying the development and deployment of modern full-stack applications on AWS.

Leverages OpenNext to deploy an optimized architecture to support Next.js server side rendering and incremental static regeneration of the site with cloudfront cache invalidation to ensure cached content stays fresh.  

Features a local development environment that lets you debug and test your UI and Lambda functions locally with bindings to resources running in the AWS improving the dev and test cycle and allows you to set breakpoints for debugging.

Makes it easy to deploy multiple environments for dev, test, and preview environments based on pull request.

### AWS

Amazon Web Services (AWS) was chosen for deployment due to its reliability, scalability, and comprehensive set of cloud services. AWS offers a robust infrastructure, allowing for secure and performant hosting of the application.

The chosen technologies collectively contribute to the development of a polished, efficient, and user-friendly Photo Album Showcase application. The selection was based on the specific requirements of the project, aiming to deliver a high-quality showcase within the given time frame.

**For more details on the architecture see [Architecture Overview](docs/ARCHITECTURE.md)**