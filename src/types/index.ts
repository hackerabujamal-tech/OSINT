Enterexport interface FakeIntel {
  signalTrace: string;
  confidence: string;
  gridRef: string;
  tacticalZone: string;
  encryptedCoord: string;
  operationCode: string;
  nodeRelay: string;
  quantumHash: string;
  timestamp: string;
}

export interface SearchQuery {
  phone: string;
  codename: string;
  region: string;
  threat: string;
}

export type VIPLevel = 'OMEGA' | 'QUANTUM' | 'BLACK_CIPHER' | 'PHANTOM' | 'SATELLITE';
