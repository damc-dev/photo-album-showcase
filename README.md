# Photo Album Showcase

![GitHub](https://img.shields.io/github/license/damc-dev/photo-album-showcase)
![GitHub issues](https://img.shields.io/github/issues/damc-dev/photo-album-showcase)
![GitHub stars](https://img.shields.io/github/stars/damc-dev/photo-album-showcase)
![GitHub forks](https://img.shields.io/github/forks/damc-dev/photo-album-showcase)

## Introduction

Welcome to the Photo Album Showcase! This Next.js application, written in TypeScript, is designed to provide a beautiful and user-friendly way to showcase photo albums.

It currently uses the [{JSON} Placeholder](https://jsonplaceholder.typicode.com/) API's provided by Typecode to retrieve placeholder albums and photos.

The application was built with Typescript and leverages Next.js 13 and the power of SSR with their new App Router. UI uses React.js Material UI.

The End-to-end test suite is implemented with Cypress.

The project is open source and licensed under the MIT License.

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![MUI](https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white)
![cypress](https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e)


![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Markdown](https://img.shields.io/badge/markdown-%23000000.svg?style=for-the-badge&logo=markdown&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
## Installation

To get started with the Photo Album Showcase Application, follow these steps:

1. **Prerequisites**: Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

2. **Clone the Repository**: Clone this repository to your local machine using the following command:
   ```shell
   git clone https://github.com/damc-dev/photo-album-showcase.git
   ```

3. **Install Dependencies**: Navigate to the project directory and install the required dependencies:
   ```shell
   cd photo-album-showcase
   npm install
   ```

4. **Start the Application**: Start the development server:
   ```shell
   npm run dev
   ```

5. **Access the Application**: Open your web browser and visit `http://localhost:3000` to use the application.

## Testing

Currently only have end-to-end testing with Cypress, but have plans to add further testing.  **Don't forget to run the installation steps** above.

* Run E2E test suite
    ```shell
    npm run e2e
    ```

* Run E2E test suite (Headless)
    ```shell
    npm run e2e:headless
    ```

## Usage

Once the application is running, you can easily navigate between photo albums and view photos:

- **Home Page**: Gives an overview of the application
- **Albums Page**: Displays a list of available photo albums.
- **Album View**: Click on an album to see its contents.
- **Photo View**: Click on a photo to view it in full size.

Here's a screenshot of the application's home page:

![Home Page](/images/homepage.png)

Here's how the albums appears:

![Album View](/images/albumspage.png)

And here's the view of an album:

![Album View](/images/albumview.png)


And here's the photo view:
![Album View](/images/photoview.png)


Feel free to explore the application and enjoy the lovely placeholder photo albums!

## Skills Utilized

This project showcases the following skills and technologies:

- Next.js
- TypeScript
- React.js
- Material UI
- [{JSON} Placeholder](https://jsonplaceholder.typicode.com/) API's provided by Typecode 
- Cypress

## Opportunities for Improvement

We believe in continuous improvement and welcome contributions from the community. Here are some areas where you can contribute to the project:

- Extend the application with backend features, authentication, and database integration.

- Implement continuous integration and continuous deployment pipelines.

- Enhance security practices and implement security testing.

- Automate infrastructure provisioning with Infrastructure as Code

- Add additional testing to ensure maintaibility and catch errors before they are deployed.  Such as: Component Testing, Integration Testing, Unit Testing, and Performance Testing

- Add monitoring and alerting

Your contributions can make this project even better!

## About Me

### David McElligott

I'm a passionate full-stack developer and cloud architect with expertise in Sales Engineering, Application Development, Cloud Infrastructure, CI/CD, DevSecOps, Infrastructure as Code, and testing throughout the full software development life cycle (SDLC). 

I am currently looking for my next role, if you have an open role or are interested in working together please [reach out!](mailto:damc.dev@gmail.com)

**Lets Connect**

[![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/damc-dev) 
[![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)
](https://www.linkedin.com/in/damcelligott)
[![Twitter](https://img.shields.io/badge/Twitter-%231DA1F2.svg?style=for-the-badge&logo=Twitter&logoColor=white)](https://twitter.com/damcelligott)
[![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:damc.dev@gmail.com)

## Contributing

We welcome contributions from the community. If you'd like to contribute to this project, please read our [contribution guidelines](CONTRIBUTING.md) for more details.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.