![image](https://github.com/Dana2024/ice-cream-shop/assets/130597970/05dff545-5178-436b-9667-06c24e6cbf75)

![image](https://github.com/Dana2024/ice-cream-shop/assets/130597970/b65faebf-bf71-4aed-8628-28d764087064)


I successfully deployed React webpage of an ice cream shop on Amplify. The original html code was provided during AWS lab, I converted it to React application, made some changes.

While deploying the app I was following these steps:

First, I went to the AWS Amplify Console (https://console.aws.amazon.com/amplify/home) and signed in using my AWS account credentials.

Then, I clicked the "Connect app" button to initiate the setup process and chose "GitHub" as the repository service and authorized AWS Amplify to access my GitHub account. I selected the specific GitHub repository and branch that I wanted to deploy. After making these selections, I clicked "Next" to proceed to the next stage.

At the "Configure Build Settings" step, I had the option to adjust the build settings if needed. However, since Amplify automatically detected the build settings for my typical React app, I proceeded by clicking "Next" without making any changes.

Before finalizing the deployment, I reviewed all the settings to ensure everything was accurate and aligned with my requirements. Once I was satisfied with the configuration, I clicked the "Save and deploy" button to kickstart the deployment process.

Amplify took care of fetching the code from my connected GitHub repository, building the React app, and deploying it on the Amplify platform. The build process took a few minutes. Upon completion of the deployment, I received a URL where my React app was hosted on Amplify. To access my deployed app, I simply visited this URL in my web browser.

From that point onwards, Amplify automatically tracked any changes I made to the GitHub repository. If I pushed any new commits to the configured branch, Amplify promptly triggered a new deployment, ensuring my app remained up-to-date with the latest changes.

With my React app on AWS Amplify, I had the opportunity to further enhance and manage it by utilizing additional features and services available within the Amplify platform.
