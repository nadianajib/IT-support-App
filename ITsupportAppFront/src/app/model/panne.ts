export interface Panne {
    idPanne: number; // Assurez-vous que cet attribut est non nullable
    description: string;
    etatPanne: 'SIGNALEE' | 'EN_COURS' | 'RESOLUE' | 'NON_REPARABLE'; // Énumération des états
  }
  