import React, { useEffect, useRef } from "react";
import mermaid from "mermaid";

const mermaidDevOpsFlowchart = `%% Developer Workflow
flowchart TD
    Dev[Developer] -->|Push Code| GitHub[GitHub Repository]
    GitHub -->|Trigger| Actions[GitHub Actions CI/CD]
    
    %% CI/CD Pipeline
    Actions -->|Branch Check| Branch{Which Branch?}
    Branch -->|develop| DevDeploy[Deploy to Development]
    Branch -->|staging| StagingDeploy[Deploy to Staging]
    Branch -->|main| ProdDeploy[Deploy to Production]
    
    %% Environment Deployments
    DevDeploy -->|Docker Build| DevContainer[Development Container]
    StagingDeploy -->|Docker Build| StagingContainer[Staging Container]
    ProdDeploy -->|Docker Build| ProdContainer[Production Container]
    
    %% Server Infrastructure
    DevContainer -->|Port 3001| DevServer[Development Server]
    StagingContainer -->|Port 3002| StagingServer[Staging Server]
    ProdContainer -->|Port 3000| ProdServer[Production Server]
    
    %% PM2 Process Management
    DevServer -->|PM2 Start| DevPM2[PM2 Dev Process]
    StagingServer -->|PM2 Start| StagingPM2[PM2 Staging Process]
    ProdServer -->|PM2 Start| ProdPM2[PM2 Production Process]
    
    %% NGINX Configuration
    DevPM2 -->|Port 3001| NGINX[NGINX Reverse Proxy]
    StagingPM2 -->|Port 3002| NGINX
    ProdPM2 -->|Port 3000| NGINX
    
    %% Domain Mapping
    NGINX -->|dev.yourdomain.com| DevDomain[Development Domain]
    NGINX -->|staging.yourdomain.com| StagingDomain[Staging Domain]
    NGINX -->|yourdomain.com| ProdDomain[Production Domain]
    
    %% SSL Certificates
    DevDomain -->|SSL| DevSSL[Development SSL]
    StagingDomain -->|SSL| StagingSSL[Staging SSL]
    ProdDomain -->|SSL| ProdSSL[Production SSL]
    
    %% Deployment Scripts
    Actions -->|Run Script| DeployScript[deploy.sh Script]
    DeployScript -->|cd /var/www/app| ChangeDir[Change Directory]
    ChangeDir -->|git pull origin main| GitPull[Git Pull]
    GitPull -->|npm install| InstallDeps[Install Dependencies]
    InstallDeps -->|npm run build| BuildApp[Build Application]
    BuildApp -->|pm2 restart all| RestartPM2[Restart PM2 Processes]
    
    %% Monitoring
    DevPM2 -->|Monitor| DevLogs[Development Logs]
    StagingPM2 -->|Monitor| StagingLogs[Staging Logs]
    ProdPM2 -->|Monitor| ProdLogs[Production Logs]
    
    %% Backup
    ProdLogs -->|Backup| BackupScript[Backup Script]
    BackupScript -->|Daily Backup| BackupStorage[Backup Storage]
    
    %% Styling
    classDef development fill:#dbeafe,stroke:#93c5fd,stroke-width:1.2px,color:#1e3a8a
    classDef staging fill:#e0f2fe,stroke:#7dd3fc,stroke-width:1.2px,color:#075985
    classDef production fill:#f1f5f9,stroke:#cbd5e1,stroke-width:1.2px,color:#0f172a
    classDef infrastructure fill:#f8fafc,stroke:#94a3b8,stroke-width:1.2px,color:#334155
    classDef automation fill:#f3f4f6,stroke:#c7d2fe,stroke-width:1.2px,color:#3730a3

    class DevContainer,DevServer,DevPM2,DevDomain,DevSSL,DevLogs development
    class StagingContainer,StagingServer,StagingPM2,StagingDomain,StagingSSL,StagingLogs staging
    class ProdContainer,ProdServer,ProdPM2,ProdDomain,ProdSSL,ProdLogs production
    class NGINX,BackupStorage infrastructure
    class Actions,DeployScript,ChangeDir,GitPull,InstallDeps,BuildApp,RestartPM2,BackupScript automation

`;

const DevOpsFlowchartSimulator: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      const id = "mermaid-devops-flowchart";
      ref.current.innerHTML = `<div class=\"mermaid\" id=\"${id}\">${mermaidDevOpsFlowchart}</div>`;
      mermaid.init(undefined, `#${id}`);
    }
  }, []);

  return <div className="w-full overflow-x-auto" ref={ref} />;
};

export default DevOpsFlowchartSimulator;
