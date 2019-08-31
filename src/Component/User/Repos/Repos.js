import React, { Component } from 'react';
import ReposItem from './RepoItem';

const Repos = ({ repos }) => {
    return repos.map((repo) => <ReposItem repo={repo} key={repo.id} />)
}


export default Repos;