import React, { useEffect } from 'react';
import { GitHubAPI } from '../../api/fetchRepo';

const Repos = () => {
  useEffect(() => {
    const token =
      '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';
    const username = 'a-pinchuk';
    const gitHubAPI = new GitHubAPI(token, username);

    gitHubAPI
      .getRepos()
      .then(repos => {
        const markup = repos
          .slice(0, 10)
          .map(el => {
            return (
              '<li>' +
              '<a href=' +
              el.owner.html_url +
              '>' +
              el.full_name +
              '</a>' +
              (el.description ? '<p>' + el.description + '</p>' : '') +
              '</li>'
            );
          })
          .join('');

        document.querySelector('.projects_list').insertAdjacentHTML('beforeend', markup);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);
  return (
    <div className="projects resume_item">
      <div className="resume_title__letter" data-letter="P">
        My Projects
      </div>
      <ul className="projects_list"></ul>
    </div>
  );
};

export default Repos;
