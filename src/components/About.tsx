import React from 'react';
import emma from './../images/emma.png';

const About = () => (
  <div>
    <p className={'about-me'}>This application was developed so that users could 
      search Github Gists by username and favorite them. 
      These favorites are locally persisted and can be removed if the user chooses 
      to do so. </p>
    <h1>Made by Emma Peatfield</h1>
    <h4>Thanks for stopping by!</h4>
    <img style={{ width: '15pc'}} src={emma} alt="Emma" />
    <h1> Future Improvements </h1>
    <p className={'about-me'}> 
    While this app is working how I intended, there is still a lot more work that can be 
    done. One thing that I wanted to achieve was a Github Login for users so that they could 
    search for gists as a user and be able to potentially see private gists. With this login, 
    I would have a separate home page that asks users to login or you can click a link to 
    take you to the search as an anonymous user. Another update that would be nice is the 
    styling of the Navbar, or even changing it to a Tabs structure. I would want to make it 
    look more sleek and user friendly. In regards to showing the listed gists, I would like 
    to be able to order the tables by each column. It would also be a plus to inlclude pagination 
    within the tables in case there were a lot of entries.
</p>
  </div>
);

export default About
