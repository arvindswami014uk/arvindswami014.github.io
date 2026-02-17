/**
 * RENDERER v2.0
 * Renders PORTFOLIO_DATA to DOM
 */

const Renderer = {
  init() {
    this.renderSummary();
    this.renderSkills();
    this.renderExperience();
    this.renderProjects();
    this.renderCertifications();
    this.setupNavigation();
    this.setupScrollEffects();
  },

  renderSummary() {
    const el = document.getElementById('summary-content');
    if (el) {
      el.innerHTML = `<p>${PORTFOLIO_DATA.summary}</p>`;
    }
  },

  renderSkills() {
    const renderTags = (id, skills) => {
      const el = document.getElementById(id);
      if (!el || !skills) return;
      el.innerHTML = skills.map(skill => `
        <span class="skill-tag">
          ${this.getSkillIcon(skill)}${skill}
        </span>
      `).join('');
    };

    renderTags('skills-engineering', PORTFOLIO_DATA.skills.dataEngineering);
    renderTags('skills-cloud', PORTFOLIO_DATA.skills.cloudDevops);
    renderTags('skills-governance', PORTFOLIO_DATA.skills.dataGovernance);
    renderTags('skills-tools', PORTFOLIO_DATA.skills.toolsPlatforms);
  },

  getSkillIcon(skill) {
    const icons = {
      'Python': '<i class="fa-brands fa-python"></i>',
      'SQL': '<i class="fa-solid fa-database"></i>',
      'Oracle': '<i class="fa-solid fa-server"></i>',
      'Azure': '<i class="fa-brands fa-microsoft"></i>',
      'Docker': '<i class="fa-brands fa-docker"></i>',
      'Git': '<i class="fa-brands fa-git-alt"></i>',
      'Linux': '<i class="fa-brands fa-linux"></i>',
      'Java': '<i class="fa-brands fa-java"></i>'
    };
    return icons[skill] ? `<span class="tag-icon">${icons[skill]}</span>` : '';
  },

  renderExperience() {
    const container = document.getElementById('experience-timeline');
    if (!container || !PORTFOLIO_DATA.experience) return;

    container.innerHTML = PORTFOLIO_DATA.experience.map((job, index) => `
      <div class="timeline-item ${job.isCurrent ? 'current' : ''}" style="animation-delay: ${index * 0.1}s">
        <div class="timeline-marker">
          ${job.isCurrent ? '<div class="marker-pulse"></div>' : ''}
        </div>
        
        <div class="timeline-card">
          <div class="card-header">
            <div class="role-info">
              <h3 class="role-title">${job.role}</h3>
              <div class="role-company">
                <strong>${job.company}</strong>
                ${job.context ? `• ${job.context}` : ''}
              </div>
            </div>
            <div class="role-meta">
              <span class="role-date">${job.date}</span>
              ${job.isCurrent ? '<span class="current-badge">CURRENT</span>' : ''}
            </div>
          </div>
          
          <p class="role-summary">${job.summary}</p>
          
          <ul class="role-achievements">
            ${job.bullets.map(b => `<li>${b}</li>`).join('')}
          </ul>
          
          <div class="role-tech">
            ${job.technologies.map(t => `<span class="tech-pill">${t}</span>`).join('')}
          </div>
        </div>
      </div>
    `).join('');
  },

  renderProjects() {
    const grid = document.getElementById('projects-grid');
    if (!grid || !PORTFOLIO_DATA.projects) return;

    grid.innerHTML = PORTFOLIO_DATA.projects.map((proj, index) => `
      <article class="project-card ${proj.featured ? 'featured' : ''}" style="animation-delay: ${index * 0.15}s">
        <div class="project-header">
          <span class="project-client">${proj.client}</span>
          <h3 class="project-name">${proj.name}</h3>
          <span class="project-role">${proj.role}</span>
        </div>
        
        <p class="project-description">${proj.description}</p>
        
        <div class="project-result">
          <div class="result-main">
            <i class="fa-solid fa-trophy"></i>
            <span>${proj.result}</span>
          </div>
          <div class="result-metric">${proj.metric}</div>
        </div>
        
        <div class="project-footer">
          <div class="project-tech">
            ${proj.technologies.map(t => `<span>${t}</span>`).join('')}
          </div>
          ${proj.link ? `
            <a href="https://${proj.link}" target="_blank" rel="noopener" class="project-link">
              View <i class="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
          ` : ''}
        </div>
      </article>
    `).join('');
  },

  renderCertifications() {
    const container = document.getElementById('certs-list');
    if (!container || !PORTFOLIO_DATA.certifications) return;

    container.innerHTML = PORTFOLIO_DATA.certifications.map(cert => `
      <div class="cert-item ${cert.status === 'In Progress' ? 'in-progress' : 'completed'}">
        <div class="cert-icon">
          <i class="fa-solid ${cert.icon}"></i>
        </div>
        <div class="cert-content">
          <div class="cert-header">
            <h4>${cert.name}</h4>
            <span class="cert-status-badge">${cert.status}</span>
          </div>
          <p class="cert-issuer">${cert.issuer} • ${cert.date}</p>
        </div>
      </div>
    `).join('');
  },

  setupNavigation() {
    // Mobile menu toggle
    const toggle = document.getElementById('nav-toggle');
    const menu = document.getElementById('nav-menu');
    
    if (toggle && menu) {
      toggle.addEventListener('click', () => {
        const expanded = toggle.getAttribute('aria-expanded') === 'true';
        toggle.setAttribute('aria-expanded', !expanded);
        menu.classList.toggle('active');
        toggle.querySelector('i').classList.toggle('fa-bars');
        toggle.querySelector('i').classList.toggle('fa-xmark');
      });
    }

    // Close menu on link click
    menu?.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        menu.classList.remove('active');
        toggle?.setAttribute('aria-expanded', 'false');
        toggle.querySelector('i').classList.add('fa-bars');
        toggle.querySelector('i').classList.remove('fa-xmark');
      });
    });

    // Nav scroll effect
    const nav = document.getElementById('nav');
    window.addEventListener('scroll', () => {
      nav?.classList.toggle('scrolled', window.scrollY > 100);
    }, { passive: true });
  },

  setupScrollEffects() {
    // Intersection Observer for animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.timeline-item, .project-card, .skill-category, .cert-item').forEach(el => {
      el.classList.add('animate-on-scroll');
      observer.observe(el);
    });
  }
};

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => Renderer.init());
} else {
  Renderer.init();
}