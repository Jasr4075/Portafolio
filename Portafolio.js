async function fetchGitHubProjects() {
    const username = 'Jasr4075'; // Replace with your GitHub username
    const apiUrl = `https://api.github.com/users/${username}/repos`;

    try {
        const response = await fetch(apiUrl);
        const projects = await response.json();

        const projectsContainer = document.getElementById('github-projects');

        projects.forEach(project => {
            const projectCard = document.createElement('div');
            projectCard.className = 'project-card';

            projectCard.innerHTML = `
                <h3>${project.name}</h3>
                <p>${project.description || 'No description available.'}</p>
                <a href="${project.html_url}" target="_blank">View on GitHub</a>
            `;

            projectsContainer.appendChild(projectCard);
        });
    } catch (error) {
        console.error('Error fetching GitHub projects:', error);
    }
}

fetchGitHubProjects();

