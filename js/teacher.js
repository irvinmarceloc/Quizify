// Base Sprint 1
const DB_KEY = 'quizify_db';
function getDB() { return JSON.parse(localStorage.getItem(DB_KEY)) || { quizzes: [], questions: [] }; }
function saveDB(data) { localStorage.setItem(DB_KEY, JSON.stringify(data)); }
function nav(id) {
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}
// Bug Sprint 1: Funciones vacías
function saveQuiz() { console.log("Pendiente"); }
function gestionTiempo() { console.log("Pendiente"); }
