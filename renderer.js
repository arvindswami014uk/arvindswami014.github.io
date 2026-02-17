/**
 * RENDERER v3.0 - Template matching
 */

const Renderer = {
  init() {
    this.renderExperience();
    this.renderProjects();
  },

  renderExperience() {
    const container = document.getElementById('experience-timeline');
    if (!container || !PORTFOLIO_DATA.experience) return;

    container.innerHTML = PORTFOLIO_DATA.experience.map(job => `
      <div class="timeline-item">
        <div class="timeline-dot ${job.isCurrent ? 'current' : ''}"></div>
        
        <div class="timeline-content">
          <div class="timeline-header">
            <div>
              <div class="timeline-role">${job.role}</div>
              <div class="timeline-company">${job.company} • ${job.context}</div>
            </div>
            <div class="timeline-date">
              ${job.date}
              ${job.isCurrent ? '<span class="timeline-current">Current</span>' : ''}
            </div>
          </div>
          
          <div class="timeline-location">${job.location || 'UK'}</div>
          
          <p class="timeline-summary">${job.summary}</p>
          
          <ul class="timeline-bullets">
            ${job.bullets.slice(0, 3).map(b => `<li>${b.substring(0, 100)}${b.length > 100 ? '...' : ''}</li>`).join('')}
          </ul>
          
          <div class="timeline-tech">
            ${job.technologies.map(t => `<span class="tech-tag">${t}</span>`).join('')}
          </div>
        </div>
      </div>
    `).join('');
  },

  renderProjects() {
    const grid = document.getElementById('projects-grid');
    if (!grid || !PORTFOLIO_DATA.projects) return;

    grid.innerHTML = PORTFOLIO_DATA.projects.map(proj => `
      <article class="project-card">
        <div class="project-client">${proj.client}</div>
        <h3 class="project-name">${proj.name}</h3>
        <div class="project-role">${proj.role}</div>
        
        <p class="project-desc">${proj.description.substring(0, 120)}...</p>
        
        <div class="project-result">
          <i class="fa-solid fa-check-circle"></i>
          ${proj.result}
        </div>
        
        <div class="project-tech">
          ${proj.technologies.map(t => `<span>${t}</span>`).join(' • ')}
        </div>
      </article>
    `).join('');
  }
};

document.addEventListener('DOMContentLoaded', () => Renderer.init());