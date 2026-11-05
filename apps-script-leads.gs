/**
 * E.S.AERO – Réception des demandes de rappel dans Google Sheets
 *
 * À coller dans : Google Sheet > Extensions > Apps Script
 * Puis : Déployer > Nouveau déploiement > Application Web
 *        Exécuter en tant que : Moi
 *        Qui a accès : Tout le monde
 */

// 1) Choisis un mot de passe long et aléatoire (le MÊME que SHEETS_SECRET sur Vercel)
const SECRET = "REMPLACE-PAR-UN-LONG-MOT-DE-PASSE-ALEATOIRE";

// 2) Nom de l'onglet qui reçoit les demandes (créé automatiquement s'il n'existe pas)
const SHEET_NAME = "Leads";

const HEADERS = [
  "Date",
  "Réf.",
  "Nom et prénom",
  "Téléphone",
  "E-mail",
  "Question",
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "Statut",
  "Notes",
];

function doPost(e) {
  const lock = LockService.getScriptLock();
  try {
    lock.waitLock(10000); // évite que 2 demandes simultanées s'écrasent

    const data = JSON.parse(e.postData.contents);

    if (data.secret !== SECRET) {
      return json_({ ok: false, error: "unauthorized" });
    }

    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = ss.getSheetByName(SHEET_NAME);
    if (!sheet) sheet = ss.insertSheet(SHEET_NAME);

    // En-têtes à la première utilisation
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(HEADERS);
      sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight("bold");
      sheet.setFrozenRows(1);
    }

    const date = Utilities.formatDate(
      new Date(),
      "Africa/Algiers",
      "yyyy-MM-dd HH:mm:ss"
    );

    const row = [
      date,
      str_(data.leadId),
      str_(data.fullName),
      str_(data.phone),
      str_(data.email),
      str_(data.question),
      str_(data.utm_source),
      str_(data.utm_medium),
      str_(data.utm_campaign),
      str_(data.utm_content),
      str_(data.utm_term),
      "Nouveau",
      "",
    ];

    // Format "texte brut" : garde le 0 du numéro (0560…) et neutralise toute formule saisie
    const target = sheet.getRange(sheet.getLastRow() + 1, 1, 1, row.length);
    target.setNumberFormat("@");
    target.setValues([row]);

    return json_({ ok: true });
  } catch (err) {
    return json_({ ok: false, error: String(err) });
  } finally {
    try {
      lock.releaseLock();
    } catch (_) {}
  }
}

// Permet de vérifier dans le navigateur que le déploiement répond
function doGet() {
  return json_({ ok: true, service: "esaero-leads" });
}

function str_(v) {
  return v === undefined || v === null ? "" : String(v).slice(0, 2000);
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(
    ContentService.MimeType.JSON
  );
}
