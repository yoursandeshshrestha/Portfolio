import React, { useEffect, useRef } from "react";
import mermaid from "mermaid";

const mermaidDeploymentScript = `graph TD;
    A[Start Deployment Process] --> B[Change to Application Directory];
    B -->|Success| C[Pull Latest Changes];
    C -->|Success| D[Install Dependencies];
    D -->|Success| E[Build Application];
    E -->|Success| F[Restart PM2 Process];
    F --> G[Deployment Completed Successfully];
    B -->|Fail| H[Failed to Change Directory];
    C -->|Fail| I[Failed to Pull Latest Changes];
    D -->|Fail| J[Failed to Install Dependencies];
    E -->|Fail| K[Failed to Build Application];
    F -->|Fail| L[Failed to Restart PM2 Process];
`;

const DeploymentScriptSimulator: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      const id = "mermaid-deployment-script";
      ref.current.innerHTML = `<div class=\"mermaid\" id=\"${id}\">${mermaidDeploymentScript}</div>`;
      mermaid.init(undefined, `#${id}`);
    }
  }, []);

  return <div className="w-full overflow-x-auto" ref={ref} />;
};

export default DeploymentScriptSimulator;
