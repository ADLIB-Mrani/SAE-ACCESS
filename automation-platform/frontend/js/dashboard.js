// Initialize Mermaid
mermaid.initialize({ startOnLoad: false, theme: 'default' });

// Plan templates with full details
const planTemplates = {
    programming: {
        title: 'Maîtriser la Programmation',
        description: 'Un parcours complet pour devenir développeur',
        duration: '6-12 mois',
        phases: [
            {
                name: 'Fondations',
                duration: '2 mois',
                tasks: [
                    'Choisir un langage (Python recommandé pour débuter)',
                    'Suivre cours FreeCodeCamp ou The Odin Project',
                    'Comprendre variables, boucles, fonctions',
                    'Premier projet: Calculatrice',
                    'Apprendre Git et GitHub'
                ]
            },
            {
                name: 'Développement Web',
                duration: '3 mois',
                tasks: [
                    'HTML/CSS fondamentaux',
                    'JavaScript moderne (ES6+)',
                    'Créer 3 projets portfolio',
                    'Framework (React ou Vue.js)',
                    'Backend basics (Node.js)'
                ]
            },
            {
                name: 'Projets et Portfolio',
                duration: '2 mois',
                tasks: [
                    'Construire portfolio professionnel',
                    'Projet full-stack complet',
                    'Contribuer à l\'open source',
                    'Documenter projets GitHub',
                    'Préparer CV tech'
                ]
            },
            {
                name: 'Spécialisation et Job',
                duration: '3+ mois',
                tasks: [
                    'Choisir spécialisation (Frontend/Backend/Full-stack)',
                    'Approfondir technologies choisies',
                    'Participer à hackathons',
                    'Postuler stages/emplois',
                    'Networking LinkedIn'
                ]
            }
        ],
        resources: [
            { name: 'FreeCodeCamp', url: 'https://www.freecodecamp.org', type: 'Cours gratuit' },
            { name: 'The Odin Project', url: 'https://www.theodinproject.com', type: 'Cours gratuit' },
            { name: 'MDN Web Docs', url: 'https://developer.mozilla.org', type: 'Documentation' },
            { name: 'GitHub Student Pack', url: 'https://education.github.com/pack', type: 'Outils gratuits' },
            { name: 'CS50', url: 'https://cs50.harvard.edu', type: 'Cours Harvard gratuit' }
        ],
        opportunities: [
            { title: 'Hackathons Devpost', type: 'Hackathon', url: 'https://devpost.com/hackathons' },
            { title: 'Nuit de l\'Info', type: 'Hackathon', url: 'https://www.nuitdelinfo.com' },
            { title: 'GitHub Student Pack', type: 'Outils', url: 'https://education.github.com/pack' },
            { title: 'Stage via Malt', type: 'Stage', url: 'https://www.malt.fr' },
            { title: 'Google Hash Code', type: 'Concours', url: 'https://codingcompetitions.withgoogle.com' }
        ]
    },
    business: {
        title: 'Lancer Mon Business',
        description: 'De l\'idée à la micro-entreprise rentable',
        duration: '6-12 mois',
        phases: [
            {
                name: 'Validation d\'Idée',
                duration: '1 mois',
                tasks: [
                    'Identifier problème à résoudre',
                    'Recherche marché et concurrence',
                    'Sondage auprès de cible',
                    'MVP (Minimum Viable Product)',
                    'Premiers feedbacks'
                ]
            },
            {
                name: 'Création Légale',
                duration: '1 mois',
                tasks: [
                    'S\'inscrire au PEPITE de l\'université',
                    'Créer micro-entreprise (gratuit)',
                    'Ouvrir compte bancaire dédié',
                    'Comprendre obligations fiscales',
                    'Assurance RC Pro si nécessaire'
                ]
            },
            {
                name: 'Lancement',
                duration: '2-3 mois',
                tasks: [
                    'Site web professionnel',
                    'Réseaux sociaux (3 plateformes max)',
                    'Premiers clients (entourage, réseau)',
                    'Itérer produit selon feedback',
                    'Facturation et comptabilité'
                ]
            },
            {
                name: 'Croissance',
                duration: '6+ mois',
                tasks: [
                    'Marketing digital (SEO, publicités)',
                    'Automatisation processus',
                    'Déléguer tâches répétitives',
                    'Lever fonds si nécessaire (BPI, PEPITE)',
                    'Scaler le business'
                ]
            }
        ],
        resources: [
            { name: 'PEPITE France', url: 'https://www.pepite-france.fr', type: 'Accompagnement' },
            { name: 'Auto-entrepreneur URSSAF', url: 'https://www.autoentrepreneur.urssaf.fr', type: 'Création' },
            { name: 'BPI France', url: 'https://www.bpifrance.fr', type: 'Financement' },
            { name: 'Station F', url: 'https://stationf.co', type: 'Incubateur' },
            { name: 'French Tech', url: 'https://lafrenchtech.com', type: 'Écosystème' }
        ],
        opportunities: [
            { title: 'Prix PEPITE', type: 'Concours', url: 'https://www.pepite-france.fr/prix-pepite', description: 'Jusqu\'à 10 000€' },
            { title: 'Concours I-Lab', type: 'Concours', url: 'https://www.enseignementsup-recherche.gouv.fr', description: 'Jusqu\'à 600 000€' },
            { title: 'Prêt étudiant garanti', type: 'Financement', url: 'https://www.service-public.fr', description: 'Jusqu\'à 20 000€' },
            { title: 'Station F Programs', type: 'Incubation', url: 'https://stationf.co' }
        ]
    },
    freelancing: {
        title: 'Devenir Freelance',
        description: 'Construire une activité freelance rentable',
        duration: '3-6 mois',
        phases: [
            {
                name: 'Préparation',
                duration: '1 mois',
                tasks: [
                    'Identifier compétences commercialisables',
                    'Définir niche et positionnement',
                    'Fixer tarifs (recherche marché)',
                    'Créer portfolio solide',
                    'Préparer templates (devis, factures)'
                ]
            },
            {
                name: 'Setup Légal',
                duration: '2 semaines',
                tasks: [
                    'Créer micro-entreprise',
                    'S\'inscrire sur Malt',
                    'Profils Upwork, Fiverr, ComeUp',
                    'LinkedIn professionnel',
                    'CGV et contrat type'
                ]
            },
            {
                name: 'Premiers Clients',
                duration: '2 mois',
                tasks: [
                    'Proposer services réseau proche',
                    'Répondre à 10-20 annonces/semaine',
                    'Offre découverte (tarif réduit)',
                    'Sur-délivrer sur premiers projets',
                    'Demander témoignages et recommandations'
                ]
            },
            {
                name: 'Scaling',
                duration: '3+ mois',
                tasks: [
                    'Augmenter tarifs progressivement',
                    'Spécialisation dans niche',
                    'Automatiser processus (templates, outils)',
                    'Marketing de contenu (blog, LinkedIn)',
                    'Clients récurrents (maintenance, retainer)'
                ]
            }
        ],
        resources: [
            { name: 'Malt', url: 'https://www.malt.fr', type: 'Plateforme FR' },
            { name: 'ComeUp', url: 'https://comeup.com', type: 'Micro-services' },
            { name: 'Upwork', url: 'https://www.upwork.com', type: 'International' },
            { name: 'Fiverr', url: 'https://www.fiverr.com', type: 'International' }
        ],
        opportunities: [
            { title: 'Missions Malt', type: 'Plateforme', url: 'https://www.malt.fr' },
            { title: 'Upwork Projects', type: 'Plateforme', url: 'https://www.upwork.com' },
            { title: 'ComeUp Services', type: 'Plateforme', url: 'https://comeup.com' }
        ]
    },
    content: {
        title: 'Créateur de Contenu',
        description: 'Construire une audience et monétiser son contenu',
        duration: '6-12 mois',
        phases: [
            {
                name: 'Fondations',
                duration: '1 mois',
                tasks: [
                    'Choisir niche (tech, business, lifestyle...)',
                    'Analyser concurrence et tendances',
                    'Définir formats (vidéo, articles, podcast)',
                    'Setup matériel basique',
                    'Planifier contenu (30 jours)'
                ]
            },
            {
                name: 'Lancement',
                duration: '3 mois',
                tasks: [
                    'Créer comptes réseaux sociaux',
                    'Publier contenu régulièrement (3-7x/semaine)',
                    'Optimiser SEO et découvrabilité',
                    'Engager avec audience',
                    'Analyser métriques'
                ]
            },
            {
                name: 'Croissance',
                duration: '3 mois',
                tasks: [
                    'Collaborations avec autres créateurs',
                    'Formats viraux (Shorts, Reels)',
                    'Email liste (lead magnets)',
                    'Consistance publication',
                    'Améliorer qualité production'
                ]
            },
            {
                name: 'Monétisation',
                duration: '3+ mois',
                tasks: [
                    'Affiliation Amazon/programmes',
                    'Sponsorships (marques)',
                    'Produits digitaux (cours, e-books)',
                    'Memberships/Patreon',
                    'Publicités (YouTube, blog)'
                ]
            }
        ],
        resources: [
            { name: 'YouTube Studio', url: 'https://studio.youtube.com', type: 'Plateforme' },
            { name: 'Canva', url: 'https://www.canva.com', type: 'Design' },
            { name: 'DaVinci Resolve', url: 'https://www.blackmagicdesign.com', type: 'Montage vidéo gratuit' },
            { name: 'TubeBuddy', url: 'https://www.tubebuddy.com', type: 'Optimisation YouTube' }
        ],
        opportunities: [
            { title: 'YouTube Partner Program', type: 'Monétisation', url: 'https://www.youtube.com' },
            { title: 'Sponsorships', type: 'Partenariats', url: '#' },
            { title: 'Affiliation Amazon', type: 'Affiliation', url: 'https://partenaires.amazon.fr' }
        ]
    }
};

// Load and display user data
document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const userId = urlParams.get('id');
    
    // Get user data from localStorage
    const userDataStr = localStorage.getItem('userPlan');
    
    if (!userDataStr) {
        alert('Aucun plan trouvé. Veuillez remplir le formulaire d\'abord.');
        window.location.href = 'form.html';
        return;
    }
    
    const userData = JSON.parse(userDataStr);
    
    // Get plan template
    const planType = userData.planType || 'programming';
    const template = planTemplates[planType];
    
    if (!template) {
        console.error('Plan template not found:', planType);
        return;
    }
    
    // Display user info
    document.getElementById('userName').textContent = userData.name;
    document.getElementById('welcomeName').textContent = userData.name;
    document.getElementById('userInfo').textContent = `${userData.age} ans • ${userData.education} • ${userData.field}`;
    
    // Display plan info
    document.getElementById('planTitle').textContent = template.title;
    document.getElementById('planGoal').textContent = userData.goal || template.description;
    document.getElementById('planDuration').textContent = template.duration;
    document.getElementById('planLevel').textContent = userData.experience || 'Débutant';
    document.getElementById('planDescription').textContent = template.description;
    
    // Display creation date
    const createdDate = new Date(userData.createdAt);
    document.getElementById('createdDate').textContent = createdDate.toLocaleDateString('fr-FR');
    
    // Calculate and display progress
    const totalTasks = template.phases.reduce((sum, phase) => sum + phase.tasks.length, 0);
    document.getElementById('completedTasks').textContent = `0 / ${totalTasks}`;
    document.getElementById('timeRemaining').textContent = template.duration;
    
    // Generate roadmap
    generateRoadmap(template.phases);
    
    // Generate Gantt chart
    generateGanttChart(template.phases);
    
    // Generate tasks
    generateTasks(template.phases);
    
    // Generate Mermaid diagram
    generateMermaidDiagram(template.phases);
    
    // Generate opportunities
    generateOpportunities(template.opportunities);
    
    // Generate resources
    generateResources(template.resources);
    
    // Generate recommendations
    generateRecommendations(userData);
});

function generateRoadmap(phases) {
    const container = document.getElementById('roadmapContainer');
    const colors = ['#0d6efd', '#198754', '#ffc107', '#dc3545'];
    
    let html = '<div class="d-flex flex-wrap justify-content-between align-items-center">';
    
    phases.forEach((phase, index) => {
        html += `
            <div class="roadmap-phase text-center p-3 m-2" style="flex: 1; min-width: 200px;">
                <div class="mb-2">
                    <div class="bg-white border border-3 rounded-circle d-inline-flex align-items-center justify-content-center" 
                         style="width: 60px; height: 60px; border-color: ${colors[index % colors.length]} !important;">
                        <strong style="color: ${colors[index % colors.length]};">${index + 1}</strong>
                    </div>
                </div>
                <h6 class="fw-bold">${phase.name}</h6>
                <p class="small text-muted mb-0">${phase.duration}</p>
                ${index < phases.length - 1 ? '<i class="bi bi-arrow-right text-muted roadmap-arrow"></i>' : ''}
            </div>
        `;
    });
    
    html += '</div>';
    container.innerHTML = html;
}

function generateGanttChart(phases) {
    const container = document.getElementById('ganttChart');
    const colors = ['#0d6efd', '#198754', '#ffc107', '#dc3545'];
    
    let html = '';
    let currentMonth = 0;
    
    phases.forEach((phase, index) => {
        const durationMonths = parseInt(phase.duration) || 2;
        const width = (durationMonths / 12) * 100;
        
        html += `
            <div class="mb-3">
                <div class="d-flex justify-content-between align-items-center mb-1">
                    <strong>${phase.name}</strong>
                    <small class="text-muted">${phase.duration}</small>
                </div>
                <div class="gantt-bar" style="width: ${width}%; background-color: ${colors[index % colors.length]};">
                    ${phase.name}
                </div>
            </div>
        `;
        currentMonth += durationMonths;
    });
    
    container.innerHTML = html;
}

function generateTasks(phases) {
    const container = document.getElementById('tasksContainer');
    let html = '';
    let taskId = 0;
    
    phases.forEach((phase, phaseIndex) => {
        html += `
            <div class="mb-4">
                <h6 class="text-primary"><i class="bi bi-folder"></i> Phase ${phaseIndex + 1}: ${phase.name}</h6>
                <div class="list-group">
        `;
        
        phase.tasks.forEach((task, taskIndex) => {
            taskId++;
            html += `
                <div class="list-group-item task-item">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="task${taskId}" 
                               onchange="updateProgress()">
                        <label class="form-check-label w-100" for="task${taskId}">
                            ${task}
                        </label>
                    </div>
                </div>
            `;
        });
        
        html += `
                </div>
            </div>
        `;
    });
    
    container.innerHTML = html;
}

function generateMermaidDiagram(phases) {
    let diagram = 'graph LR\n';
    diagram += '    Start([Début]) --> Phase1\n';
    
    phases.forEach((phase, index) => {
        const nodeId = `Phase${index + 1}`;
        const nextNodeId = index < phases.length - 1 ? `Phase${index + 2}` : 'End';
        diagram += `    ${nodeId}[${phase.name}] --> ${nextNodeId}\n`;
    });
    
    diagram += '    End([Objectif Atteint!])\n';
    
    const element = document.getElementById('mermaidDiagram');
    element.innerHTML = diagram;
    
    mermaid.run({
        nodes: [element]
    }).catch(err => {
        console.error('Mermaid error:', err);
        element.innerHTML = '<p class="text-muted">Diagramme non disponible</p>';
    });
}

function generateOpportunities(opportunities) {
    const container = document.getElementById('opportunitiesContainer');
    let html = '';
    
    opportunities.forEach(opp => {
        html += `
            <div class="col-md-6 mb-3">
                <div class="card opportunity-card h-100">
                    <div class="card-body">
                        <div class="d-flex justify-content-between align-items-start mb-2">
                            <h6 class="card-title mb-0">${opp.title}</h6>
                            <span class="badge bg-info">${opp.type}</span>
                        </div>
                        ${opp.description ? `<p class="card-text small text-muted">${opp.description}</p>` : ''}
                        <a href="${opp.url}" target="_blank" class="btn btn-sm btn-outline-primary">
                            <i class="bi bi-box-arrow-up-right"></i> En savoir plus
                        </a>
                    </div>
                </div>
            </div>
        `;
    });
    
    container.innerHTML = html;
}

function generateResources(resources) {
    const container = document.getElementById('resourcesContainer');
    let html = '<div class="list-group">';
    
    resources.forEach(resource => {
        html += `
            <a href="${resource.url}" target="_blank" class="list-group-item list-group-item-action resource-card">
                <div class="d-flex justify-content-between align-items-center">
                    <div>
                        <h6 class="mb-1">${resource.name}</h6>
                        <small class="text-muted">${resource.type}</small>
                    </div>
                    <i class="bi bi-box-arrow-up-right"></i>
                </div>
            </a>
        `;
    });
    
    html += '</div>';
    container.innerHTML = html;
}

function generateRecommendations(userData) {
    const container = document.getElementById('recommendationsContainer');
    const recommendations = [];
    
    // Budget-based
    if (userData.budget === '0') {
        recommendations.push({
            type: 'budget',
            icon: 'bi-piggy-bank',
            title: 'Ressources 100% Gratuites',
            description: 'Concentre-toi sur les ressources gratuites listées ci-dessous. Le GitHub Student Pack te donne accès à des dizaines d\'outils premium gratuitement.'
        });
    }
    
    // Time-based
    if (userData.timePerWeek === '5h' || userData.timePerWeek === '10h') {
        recommendations.push({
            type: 'time',
            icon: 'bi-clock',
            title: 'Optimise ton Temps',
            description: 'Avec ton temps limité, utilise la technique Pomodoro (25 min focus + 5 min pause) et priorise les tâches essentielles.'
        });
    }
    
    // Experience-based
    if (userData.experience === 'debutant') {
        recommendations.push({
            type: 'learning',
            icon: 'bi-mortarboard',
            title: 'Débutant Complet',
            description: 'Commence par les fondamentaux sans te précipiter. La consistance bat l\'intensité sur le long terme. Fais un peu chaque jour.'
        });
    }
    
    // Always add opportunities
    recommendations.push({
        type: 'opportunities',
        icon: 'bi-star',
        title: 'Opportunités à Explorer',
        description: 'Inscris-toi au PEPITE de ton université et consulte régulièrement Devpost pour les hackathons. C\'est gratuit et excellente expérience.'
    });
    
    let html = '';
    recommendations.forEach(rec => {
        html += `
            <div class="alert alert-light border-start border-4 border-primary">
                <h6><i class="${rec.icon}"></i> ${rec.title}</h6>
                <p class="mb-0">${rec.description}</p>
            </div>
        `;
    });
    
    container.innerHTML = html;
}

function updateProgress() {
    const checkboxes = document.querySelectorAll('.task-item input[type="checkbox"]');
    const total = checkboxes.length;
    let completed = 0;
    
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            completed++;
            checkbox.closest('.task-item').classList.add('completed');
        } else {
            checkbox.closest('.task-item').classList.remove('completed');
        }
    });
    
    const percentage = Math.round((completed / total) * 100);
    
    // Update progress bar
    const progressBar = document.getElementById('progressBar');
    progressBar.style.width = `${percentage}%`;
    progressBar.textContent = `${percentage}%`;
    
    // Update stats
    document.getElementById('completedTasks').textContent = `${completed} / ${total}`;
    
    // Save progress to localStorage
    const checkboxStates = Array.from(checkboxes).map(cb => cb.checked);
    localStorage.setItem('taskProgress', JSON.stringify(checkboxStates));
}

function exportPDF() {
    alert('Fonctionnalité d\'export PDF en cours de développement.\n\nPour l\'instant, vous pouvez utiliser Imprimer > Enregistrer en PDF depuis votre navigateur.');
    // TODO: Implement jsPDF export
    // const { jsPDF } = window.jspdf;
    // const doc = new jsPDF();
    // doc.text('Mon Plan Personnalisé', 10, 10);
    // doc.save('mon-plan.pdf');
}

// Load saved progress on page load
window.addEventListener('load', function() {
    const savedProgress = localStorage.getItem('taskProgress');
    if (savedProgress) {
        try {
            const checkboxStates = JSON.parse(savedProgress);
            const checkboxes = document.querySelectorAll('.task-item input[type="checkbox"]');
            checkboxes.forEach((checkbox, index) => {
                if (checkboxStates[index]) {
                    checkbox.checked = true;
                }
            });
            updateProgress();
        } catch (e) {
            console.error('Error loading progress:', e);
        }
    }
});
