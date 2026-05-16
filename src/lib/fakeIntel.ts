Enterimport { FakeIntel, SearchQuery } from '@/types';

export function generateFakeIntel(query: SearchQuery): FakeIntel {
  const now = new Date();
  const timestamp = `${now.getUTCHours().toString().padStart(2,'0')}:${now.getUTCMinutes().toString().padStart(2,'0')}:${now.getUTCSeconds().toString().padStart(2,'0')}Z`;

  const randomHex = (len: number) =>
    Array.from({ length: len }, () => Math.floor(Math.random() * 16).toString(16)).join('').toUpperCase();

  return {
    signalTrace: `SIG-${randomHex(4)}-${randomHex(4)}`,
    confidence: (90 + Math.random() * 9.9).toFixed(1),
    gridRef: `XZ-${Math.floor(Math.random() * 999)}${String.fromCharCode(65 + Math.floor(Math.random() * 26))}-09`,
    tacticalZone: `SECTOR ${Math.floor(Math.random() * 20) + 1} // GHOST GRID`,
    encryptedCoord: `${randomHex(4)}-${randomHex(4)}-DELTA`,
    operationCode: `OP-${Math.floor(Math.random() * 8999) + 1000}-BLACK`,
    nodeRelay: `NODE-${Math.floor(Math.random() * 99)}.${Math.floor(Math.random() * 99)}.${Math.floor(Math.random() * 99)}.${Math.floor(Math.random() * 99)}`,
    quantumHash: randomHex(8),
    timestamp
  };
}
