import './style.css'
import { createDashboard } from './dashboard'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="dashboard-container">
    <header class="dashboard-header">
      <div class="header-content">
        <h1 class="main-title">n8n Dashboard</h1>
        <p class="subtitle">Select your automation instance</p>
      </div>
    </header>
    
    <main class="dashboard-main">
      <div id="instances-grid" class="instances-grid"></div>
    </main>
    
    <footer class="dashboard-footer">
      <p>Powered by <span class="brand">ZK-AI Agency</span></p>
    </footer>
  </div>
`

createDashboard()