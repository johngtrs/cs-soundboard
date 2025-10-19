import { Sound } from '@/types';

export const SOUNDS: Sound[] = [
  // Radio Commands
  { id: 'cover-me', name: 'Cover Me', file: '/audio/ct_coverme.wav', category: 'radio', label: 'Cover Me!' },
  { id: 'need-backup', name: 'Need Backup', file: '/audio/ct_backup.wav', category: 'radio', label: 'Need Backup' },
  { id: 'hold-position', name: 'Hold Position', file: '/audio/position.wav', category: 'radio', label: 'Hold This Position' },
  { id: 'regroup', name: 'Regroup', file: '/audio/regroup.wav', category: 'radio', label: 'Regroup Team' },
  { id: 'follow-me', name: 'Follow Me', file: '/audio/followme.wav', category: 'radio', label: 'Follow Me' },
  { id: 'taking-fire', name: 'Taking Fire', file: '/audio/ct_imhit.wav', category: 'radio', label: 'Taking Fire' },
  
  // Commands
  { id: 'go-go-go', name: 'Go Go Go', file: '/audio/com_go.wav', category: 'commands', label: 'Go Go Go!' },
  { id: 'follow-commander', name: 'Follow Commander', file: '/audio/com_followcom.wav', category: 'commands', label: 'Team, Follow Me' },
  { id: 'report-in', name: 'Report In', file: '/audio/com_reportin.wav', category: 'commands', label: 'Report In, Team' },
  { id: 'get-in-position', name: 'Get In Position', file: '/audio/com_getinpos.wav', category: 'commands', label: 'Get In Position' },
  { id: 'storm-front', name: 'Storm Front', file: '/audio/stormfront.wav', category: 'commands', label: 'Storm The Front!' },
  { id: 'fallback', name: 'Fall Back', file: '/audio/fallback.wav', category: 'commands', label: 'Fall Back!' },
  
  // Responses
  { id: 'roger', name: 'Roger', file: '/audio/roger.wav', category: 'responses', label: 'Roger That' },
  { id: 'affirmative', name: 'Affirmative', file: '/audio/ct_affirm.wav', category: 'responses', label: 'Affirmative' },
  { id: 'negative', name: 'Negative', file: '/audio/negative.wav', category: 'responses', label: 'Negative' },
  { id: 'reporting-in', name: 'Reporting In', file: '/audio/ct_reportingin.wav', category: 'responses', label: 'Reporting In' },
  { id: 'in-position', name: 'In Position', file: '/audio/ct_inpos.wav', category: 'responses', label: 'In Position' },
  
  // Events
  { id: 'enemy-spotted', name: 'Enemy Spotted', file: '/audio/ct_enemys.wav', category: 'events', label: 'Enemy Spotted' },
  { id: 'enemy-down', name: 'Enemy Down', file: '/audio/enemydown.wav', category: 'events', label: 'Enemy Down' },
  { id: 'fire-in-hole', name: 'Fire In Hole', file: '/audio/ct_fireinhole.wav', category: 'events', label: 'Fire In The Hole!' },
  { id: 'bomb-planted', name: 'Bomb Planted', file: '/audio/bombpl.wav', category: 'events', label: 'Bomb Has Been Planted' },
  { id: 'bomb-defused', name: 'Bomb Defused', file: '/audio/bombdef.wav', category: 'events', label: 'Bomb Has Been Defused' },
  { id: 'ct-win', name: 'CT Win', file: '/audio/ctwin.wav', category: 'events', label: 'Counter-Terrorists Win' },
  { id: 'ter-win', name: 'T Win', file: '/audio/terwin.wav', category: 'events', label: 'Terrorists Win' },
  { id: 'round-draw', name: 'Round Draw', file: '/audio/rounddraw.wav', category: 'events', label: 'Round Draw' },
];

export const CATEGORY_LABELS: Record<string, string> = {
  radio: 'Radio Commands',
  commands: 'Team Commands',
  responses: 'Responses',
  events: 'Events',
};

