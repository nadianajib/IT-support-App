export interface Panne {
  idPanne: number;
  description: string;
  etatPanne: 'SIGNALEE' | 'EN_COURS' | 'RESOLUE' | 'NON_REPARABLE';
}
