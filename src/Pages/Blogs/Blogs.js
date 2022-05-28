import React from 'react';

const Blogs = () => {
    return (
        <div className='mt-4'>
            <div className='container mt-3'>
                <h2>Difference between `authorization` and `authentication ?</h2>
                <p> strong authentication is the process of verifying who someone is, on the other hansd authorization is the process of verifying what specific applications, files, and data a user has access to. Authentication works through passwords, one-time pins, biometric information, and other information provided or entered by the user wheres authorization works through settings that are implemented and maintained by the organization.</p>
            </div>
            <div className='container'>
                <h2>Why are you using `firebase`? What other options do you have to implement authentication ?</h2>
                <p>Firebase provides multiple ways of authenticating users. We can choose from email authentication. Besides that firebase gives us more authentication system like Google, Facebook or Twitter or we can implement authentication on custom server.<br />
                    Without using firebase peoples sometimes use react hooks for authentication.</p>
            </div>
            <div className='container'>
                <h2>What other services does `firebase` provide other than authentication ?</h2>
                <p>Other services of firebase without authentication are:
                    <ul>
                        <li>App check</li>
                        <li>Cloud Messasing</li>
                        <li>Intregrations</li>
                        <li>Realtime database</li>
                        <li>Data privacy</li>
                        <li>Firebase Hosting:</li>
                    </ul>
                </p>
            </div>
        </div>
    );
};

export default Blogs;