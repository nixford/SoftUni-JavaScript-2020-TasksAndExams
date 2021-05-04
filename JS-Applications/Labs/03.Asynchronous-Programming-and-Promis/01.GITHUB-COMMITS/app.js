function loadCommits() {
    let username = document.getElementById('username').value;
    let repo = document.getElementById('repo').value;
    let commitsElement = document.getElementById('commits');
    let url = `https://api.github.com/repos/${username}/${repo}/commits`;

    fetch(url)
        .then(res => res.json())
        .then(data => {
            let commits = data.map(c => `<li>${c.commit.author.name}: ${c.commit.message}</li>`).join('');
            commitsElement.innerHTML = commits;
        })
        .catch(err => {
            commitsElement.innerHTML = `<li>Error: ${err.status} (${err.statusText})</li>`;
        });
}