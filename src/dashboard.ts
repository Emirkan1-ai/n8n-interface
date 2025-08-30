interface N8nInstance {
  id: string
  name: string
  description: string
  url: string
  icon: string
}

const instances: N8nInstance[] = [
  {
    id: 'admin',
    name: 'Admin Instance',
    description: 'Administrative workflows and system management',
    url: 'https://admin-n8n.zk-ai.agency',
    icon: '⚙️'
  },
  {
    id: 'zuefer',
    name: 'Zuefer Kilincarslan Instance',
    description: 'Personal automation workflows',
    url: 'https://zuefer-kilincarslan-n8n.zk-ai.agency',
    icon: '🚀'
  },
  {
    id: 'emirkan',
    name: 'Emirkan Tekin Instance',
    description: 'Development and testing workflows',
    url: 'https://emirkan-tekin-n8n.zk-ai.agency',
    icon: '💻'
  }
]

function createInstanceCard(instance: N8nInstance): HTMLElement {
  const card = document.createElement('div')
  card.className = 'instance-card'
  card.setAttribute('data-instance', instance.id)
  card.setAttribute('tabindex', '0')
  card.setAttribute('role', 'button')
  card.setAttribute('aria-label', `Open ${instance.name}`)
  
  card.innerHTML = `
    <div class="card-content">
      <div class="card-icon">${instance.icon}</div>
      <div class="card-info">
        <h3 class="card-title">${instance.name}</h3>
        <p class="card-description">${instance.description}</p>
      </div>
      <button class="card-button" aria-label="Open ${instance.name}">
        <span>Open</span>
        <svg class="button-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M6 3L11 8L6 13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    </div>
  `
  
  // Add click handler
  const handleClick = () => {
    card.classList.add('card-clicked')
    
    setTimeout(() => {
      window.open(instance.url, '_blank', 'noopener,noreferrer')
      card.classList.remove('card-clicked')
    }, 150)
  }
  
  card.addEventListener('click', handleClick)
  card.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      handleClick()
    }
  })
  
  return card
}

export function createDashboard(): void {
  const grid = document.querySelector('#instances-grid')
  if (!grid) return
  
  instances.forEach(instance => {
    const card = createInstanceCard(instance)
    grid.appendChild(card)
  })
}