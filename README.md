# Next.js Authentication on Vercel

This JavaScript template demonstrates **how to implement user authentication** in Next.js applications using Auth0.

This template is based on a code sample is part of the ["Auth0 Developer Center"](https://developer.auth0.com/resources/code-samples/web-app/nextjs), a place where you can explore the authentication and authorization features of the Auth0 Identity Platform.

## Quick Auth0 Set Up

**First and foremost, if you haven't already, [sign up for an Auth0 account](https://auth0.com/signup?promo=sup&place=dev-hub-instruction&type=signup-cta&origin=developers-hub) to connect your application with the Auth0 Identity Platform.**

Next, you'll connect your Next.js application as a "Regular Web Application" with Auth0. You'll need to create an application registration in the Auth0 Dashboard and get three configuration values: the **Auth0 Domain**, the **Auth0 Client ID**, and the **Auth0 Client Secret**. 

### Get the Auth0 domain, client ID, and client secret

- Open the [Applications](https://manage.auth0.com/#/applications) section of the Auth0 Dashboard.

- Click on the **Create Application** button and fill out the form with the following values:
  - **Name**: `Next.js Authentication on Vercel`
  - **Application Type**: `Regular Web Application`
- Click on the **Create** button.

> Visit the ["Register Applications"](https://auth0.com/docs/applications/set-up-an-application) document for more details.

An Auth0 Application page loads up.

As such, click on the **"Settings"** tab of your Auth0 Application page, locate the **"Application URIs"** section, and fill in the following values:

- **Allowed Callback URLs**: `https://*.vercel.app/api/auth/callback`
- **Allowed Logout URLs**: `https://*.vercel.app`

🚨🚨🚨 **WARNING: Once you have deployed this template, please replace `https://*.vercel.app` with your Vercel deploy URL for better security.** 🚨🚨🚨

Scroll down and click the **"Save Changes"** button.

Next, locate the **"Basic Information"** section. You will need the **"Domain"**, **"Client ID"**, and **"Client Secret"** values to deploy this template correctly.

![Auth0 application settings to enable user authentication](https://cdn.auth0.com/blog/developer-hub/hello-world-web-app-settings.png)

Once you click the "Deploy" button, the Vercel deploy workflow will show up. On the **"Configure Project"** section, ensure that you use the following values for the **"Required Environment Variables"**:

- `AUTH0_ISSUER_BASE_URL` is the value of the **"Domain"** field from the Auth0 settings including the protocol: `https://<AUTH0_DOMAIN>`
- `AUTH0_CLIENT_ID` is the value of the **"Client ID"** field from the Auth0 settings.
- `AUTH0_CLIENT_SECRET` is the value of the **"Client Secret"** field from the Auth0 settings.
- `AUTH0_SECRET` is a session secret to sign the session ID cookie of your web application. Use the following command to generate a random secret key:

```bash
node -e "console.log(crypto.randomBytes(32).toString('hex'))"
```

## After Deploy

**Remember to replace `https://*.vercel.app` with your Vercel deploy URL in the Auth0 application settings.**

### Use the Next.js Sample Application

Your Vercel deploy URL gives you access to the application.

When you click on the **"Log In"** button, Next.js takes you to the [Auth0 Universal Login page](https://auth0.com/docs/login/universal-login). Your users can log in to your application through a page hosted by Auth0, which provides them with a secure, standards-based login experience that you can customize with your own branding and various authentication methods, such as logging in with a username and password or with a social provider like Facebook or Google.

Once you log in, visit the protected **"Profile"** page to see all the user profile information that Auth0 securely shares with your application using [ID tokens](https://auth0.com/docs/security/tokens/id-tokens).

Click on the **"Log Out"** button and try to access the [Profile page](http://localhost:4040/profile).

If everything is working as expected, Next.js redirects you to log in with Auth0.

## Why Use Auth0?

Auth0 is a flexible drop-in solution to add authentication and authorization services to your applications. Your team and organization can avoid the cost, time, and risk that come with building your own solution to authenticate and authorize users. We offer tons of guidance and SDKs for you to get started and [integrate Auth0 into your stack easily](https://auth0.com/developers/hub/code-samples/full-stack).
