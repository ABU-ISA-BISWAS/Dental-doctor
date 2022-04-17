import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h2> Difference between authorization and authentication?</h2>
            <p>Authentication is the process of verifying who someone is, whereas authorization is the process of verifying what specific applications, files, and data a user has access.Authentication verifies who the user is.Authorization determines what resources a user can access.</p>
            <h2>Why are you using firebase? What other options do you have to implement authentication?</h2>
            <p>The Firebase Realtime Database lets you build rich, collaborative applications by allowing secure access to the database directly from client-side code. Data is persisted locally, and even while offline, realtime events continue to fire, giving the end user a responsive experience.
                Other option are STYTCH,Ory,Supabase etc.
            </p>
            <h2>What other services does firebase provide other than authentication?</h2>
            <p>Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app.Firebase Authentication integrates tightly with other Firebase services, and it leverages industry standards like OAuth 2.0 and OpenID Connect, so it can be easily integrated with your custom backend.</p>
        </div>
    );
};

export default Blogs;