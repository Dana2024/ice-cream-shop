# Deploying a React App on AWS Amplify

I successfully deployed a React webpage for an ice cream shop using AWS Amplify. The original HTML code was provided during an AWS lab, and I converted it into a React application while making several changes.

## Deployment Process

To deploy the app, I followed these steps:

1. Visit the [AWS Amplify Console](https://console.aws.amazon.com/amplify/home) and sign in using my AWS account credentials.

2. Click the "Connect app" button to initiate the setup process. I selected "GitHub" as the repository service and granted AWS Amplify access to my GitHub account.

3. Choose the specific GitHub repository and branch that I intended to deploy. Once these selections were made, I clicked "Next" to proceed.

4. At the "Configure Build Settings" step, I had the option to adjust build settings if necessary. However, since Amplify automatically detected the appropriate build settings for my standard React app, I proceeded by clicking "Next" without making any changes.

5. Before finalizing the deployment, I meticulously reviewed all the settings to ensure accuracy and alignment with my requirements. Once I was content with the configuration, I clicked the "Save and deploy" button to initiate the deployment process.

## Amplify Takes Care of the Rest

Amplify seamlessly handled the deployment process:

- It fetched the code from my connected GitHub repository.
- It built the React app.
- It deployed the app on the Amplify platform. The build process typically took only a few minutes.

Upon completion of the deployment, I received a URL where my React app was hosted on Amplify. To access my deployed app, I simply visited this URL in my web browser.

## Continuous Updates

From that point onward, Amplify automatically monitored any changes I made to the GitHub repository. If I pushed new commits to the configured branch, Amplify promptly triggered a new deployment, ensuring that my app remained up-to-date with the latest changes.

With my React app on AWS Amplify, I had the opportunity to further enhance and manage it by utilizing additional features and services available within the Amplify platform.

![image](https://github.com/Dana2024/ice-cream-shop/assets/130597970/b65faebf-bf71-4aed-8628-28d764087064)

![image](https://github.com/Dana2024/ice-cream-shop/assets/130597970/05dff545-5178-436b-9667-06c24e6cbf75)




