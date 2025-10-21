import { Sound } from '@/types';

export const SOUNDS: Sound[] = [
  // 🔥 Top Sons
  {
    id: 'fire-in-hole',
    name: 'Fire In Hole',
    file: 'ct_fireinhole.wav',
    category: 'top',
    labels: {
      fr: '💣 ÇA VA PÉTER !',
      en: '💣 FIRE IN THE HOLE!',
    },
  },
  {
    id: 'ct-win',
    name: 'CT Win',
    file: 'ctwin.wav',
    category: 'top',
    labels: {
      fr: '🏆 Victoire Anti-Terroristes',
      en: '🏆 Counter-Terrorists Win',
    },
  },
  {
    id: 'ter-win',
    name: 'T Win',
    file: 'terwin.wav',
    category: 'top',
    labels: {
      fr: '💀 Victoire Terroristes',
      en: '💀 Terrorists Win',
    },
  },
  {
    id: 'blow',
    name: 'Blow',
    file: 'blow.wav',
    category: 'top',
    labels: {
      fr: "🚨 Sortez d'ici ça va sauter !",
      en: "🚨 Get out, it's gonna blow!",
    },
  },

  // Commandes Radio
  {
    id: 'cover-me',
    name: 'Cover Me',
    file: 'ct_coverme.wav',
    category: 'radio',
    labels: {
      fr: '🛡️ Couvrez-moi !',
      en: '🛡️ Cover me!',
    },
  },
  {
    id: 'need-backup',
    name: 'Need Backup',
    file: 'ct_backup.wav',
    category: 'radio',
    labels: {
      fr: "🚨 J'ai besoin de soutien",
      en: '🚨 Need backup',
    },
  },
  {
    id: 'hold-position',
    name: 'Hold Position',
    file: 'position.wav',
    category: 'radio',
    labels: {
      fr: '✋ Tenez la position',
      en: '✋ Hold this position',
    },
  },
  {
    id: 'regroup',
    name: 'Regroup',
    file: 'regroup.wav',
    category: 'radio',
    labels: {
      fr: '🔄 Regroupez-vous',
      en: '🔄 Regroup team',
    },
  },
  {
    id: 'follow-me',
    name: 'Follow Me',
    file: 'followme.wav',
    category: 'radio',
    labels: {
      fr: '👉 Suivez-moi',
      en: '👉 Follow me',
    },
  },
  {
    id: 'taking-fire',
    name: 'Taking Fire',
    file: 'ct_imhit.wav',
    category: 'radio',
    labels: {
      fr: '💥 Je suis touché',
      en: '💥 Taking fire, need assistance',
    },
  },
  {
    id: 'point',
    name: 'You Take The Point',
    file: 'ct_point.wav',
    category: 'radio',
    labels: {
      fr: '🎯 Je prends le point',
      en: '🎯 You take the point',
    },
  },
  {
    id: 'stick-together',
    name: 'Stick Together',
    file: 'sticktog.wav',
    category: 'radio',
    labels: {
      fr: '🤝 Restez groupés',
      en: '🤝 Stick together team',
    },
  },
  {
    id: 'meet-me',
    name: 'Meet Me Here',
    file: 'meetme.wav',
    category: 'radio',
    labels: {
      fr: '📍 Tous au point de RDV',
      en: '📍 Everyone, meet at the rally point',
    },
  },

  // Ordres Tactiques
  {
    id: 'go-go-go',
    name: 'Go Go Go',
    file: 'com_go.wav',
    category: 'commands',
    labels: {
      fr: '⚡ Go Go Go !',
      en: '⚡ Go Go Go!',
    },
  },
  {
    id: 'follow-commander',
    name: 'Follow Commander',
    file: 'com_followcom.wav',
    category: 'commands',
    labels: {
      fr: '👮 Ok, suivez mes ordres',
      en: '👮 Follow my orders',
    },
  },
  {
    id: 'report-in',
    name: 'Report In',
    file: 'com_reportin.wav',
    category: 'commands',
    labels: {
      fr: '📢 Au rapport',
      en: '📢 Team, report in',
    },
  },
  {
    id: 'get-in-position',
    name: 'Get In Position',
    file: 'com_getinpos.wav',
    category: 'commands',
    labels: {
      fr: '🎯 Prenez position et attendez mon Go !',
      en: '🎯 Get in position and wait for my go',
    },
  },
  {
    id: 'storm-front',
    name: 'Storm Front',
    file: 'stormfront.wav',
    category: 'commands',
    labels: {
      fr: "⚔️ Lancez l'assaut !",
      en: '⚔️ Storm the front!',
    },
  },
  {
    id: 'fallback',
    name: 'Fall Back',
    file: 'fallback.wav',
    category: 'commands',
    labels: {
      fr: '↩️ Groupe, rassemblement !',
      en: '↩️ Team, fall back!',
    },
  },
  {
    id: 'take-point',
    name: 'Take Point',
    file: 'takepoint.wav',
    category: 'commands',
    labels: {
      fr: '🔝 Vous prenez le point',
      en: '🔝 You take the point',
    },
  },
  {
    id: 'move-out',
    name: 'Move Out',
    file: 'moveout.wav',
    category: 'commands',
    labels: {
      fr: "🏃 Allez c'est parti",
      en: "🏃 Let's move out",
    },
  },
  {
    id: 'flank-them',
    name: 'Flank Them',
    file: 'flankthem.wav',
    category: 'commands',
    labels: {
      fr: '↪️ Contournez-les !',
      en: '↪️ Flank them!',
    },
  },
  {
    id: 'circle-back',
    name: 'Circle Back',
    file: 'circleback.wav',
    category: 'commands',
    labels: {
      fr: '🔄 Prenez les à revers',
      en: '🔄 Circle back and flank them',
    },
  },
  {
    id: 'lets-go',
    name: "Let's Go",
    file: 'letsgo.wav',
    category: 'commands',
    labels: {
      fr: '🚀 Ok, on y va !',
      en: "🚀 Let's go!",
    },
  },
  {
    id: 'get-out',
    name: 'Get Out',
    file: 'getout.wav',
    category: 'commands',
    labels: {
      fr: '🏃‍♂️ A tout le groupe on sort de là !',
      en: '🏃‍♂️ Everyone, get out of there!',
    },
  },

  // Réponses
  {
    id: 'roger',
    name: 'Roger',
    file: 'roger.wav',
    category: 'responses',
    labels: {
      fr: '✅ Bien compris',
      en: '✅ Roger that',
    },
  },
  {
    id: 'affirmative',
    name: 'Affirmative',
    file: 'ct_affirm.wav',
    category: 'responses',
    labels: {
      fr: '👍 Affirmatif',
      en: '👍 Affirmative',
    },
  },
  {
    id: 'negative',
    name: 'Negative',
    file: 'negative.wav',
    category: 'responses',
    labels: {
      fr: '❌ Négatif',
      en: '❌ Negative',
    },
  },
  {
    id: 'reporting-in',
    name: 'Reporting In',
    file: 'ct_reportingin.wav',
    category: 'responses',
    labels: {
      fr: '📻 Au rapport',
      en: '📻 Reporting in',
    },
  },
  {
    id: 'in-position',
    name: 'In Position',
    file: 'ct_inpos.wav',
    category: 'responses',
    labels: {
      fr: '✔️ Je suis en position',
      en: '✔️ In position',
    },
  },
  {
    id: 'sector-clear',
    name: 'Sector Clear',
    file: 'clear.wav',
    category: 'responses',
    labels: {
      fr: '🟢 Zone sécurisée',
      en: '🟢 Sector clear',
    },
  },

  // Événements
  {
    id: 'enemy-spotted',
    name: 'Enemy Spotted',
    file: 'ct_enemys.wav',
    category: 'events',
    labels: {
      fr: '👁️ Ennemi repéré',
      en: '👁️ Enemy spotted',
    },
  },
  {
    id: 'enemy-down',
    name: 'Enemy Down',
    file: 'enemydown.wav',
    category: 'events',
    labels: {
      fr: '☠️ Ennemi à terre',
      en: '☠️ Enemy down',
    },
  },
  {
    id: 'bomb-planted',
    name: 'Bomb Planted',
    file: 'bombpl.wav',
    category: 'events',
    labels: {
      fr: '💥 Bombe en place',
      en: '💥 Bomb has been planted',
    },
  },
  {
    id: 'bomb-defused',
    name: 'Bomb Defused',
    file: 'bombdef.wav',
    category: 'events',
    labels: {
      fr: '✂️ La bombe a été désamorcée',
      en: '✂️ Bomb has been defused',
    },
  },
  {
    id: 'round-draw',
    name: 'Round Draw',
    file: 'rounddraw.wav',
    category: 'events',
    labels: {
      fr: '🤝 Match nul',
      en: '🤝 Round draw',
    },
  },
  {
    id: 'eliminated',
    name: 'Eliminated',
    file: 'elim.wav',
    category: 'events',
    labels: {
      fr: '⚰️ Groupe infiltré et éliminé',
      en: '⚰️ Target has been eliminated',
    },
  },
  {
    id: 'teammate-down',
    name: 'Teammate Down',
    file: 'matedown.wav',
    category: 'events',
    labels: {
      fr: '🩹 Équipier à terre',
      en: '🩹 Man down',
    },
  },
  {
    id: 'hostage-down',
    name: 'Hostage Down',
    file: 'hosdown.wav',
    category: 'events',
    labels: {
      fr: '😵 Otage à terre',
      en: '😵 Hostage down',
    },
  },
  {
    id: 'hostage-rescued',
    name: 'Hostage Rescued',
    file: 'rescued.wav',
    category: 'events',
    labels: {
      fr: '🆓 Otage libéré',
      en: '🆓 Hostages have been rescued',
    },
  },
  {
    id: 'vip',
    name: 'VIP',
    file: 'vip.wav',
    category: 'events',
    labels: {
      fr: '👤 Protégez le VIP',
      en: '👤 Protect the VIP',
    },
  },
  {
    id: 'fire-assistance',
    name: 'Fire Assistance',
    file: 'fireassis.wav',
    category: 'events',
    labels: {
      fr: '🔥 Demande de couverture',
      en: '🔥 Requesting fire assistance',
    },
  },
  {
    id: 'hit-assistance',
    name: 'Hit Assistance',
    file: 'hitassist.wav',
    category: 'events',
    labels: {
      fr: "🆘 Je suis touché, j'ai besoin d'aide",
      en: '🆘 Taking fire, need assistance',
    },
  },
  {
    id: 'lock-and-load',
    name: 'Lock And Load',
    file: 'locknload.wav',
    category: 'events',
    labels: {
      fr: '🔫 Tenez vous prêts !',
      en: '🔫 Lock and load!',
    },
  },
];
