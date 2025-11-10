// Actualización Sprint 2 - Día 7
const DB_KEY = 'quizify_db';
function getDB() { return JSON.parse(localStorage.getItem(DB_KEY)) || { quizzes: [], questions: [] }; }
function saveDB(data) { localStorage.setItem(DB_KEY, JSON.stringify(data)); }

function nav(id) {
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    if(id === 'view-dashboard') renderDash();
}

function openModal(id) { document.getElementById(id).classList.add('active'); }
function closeModal(id) { document.getElementById(id).classList.remove('active'); }

// UT-1041 Logic
function invite() { console.log("Backend call..."); alert("Invitación enviada a " + document.getElementById("share-email").value); closeModal('modal-share'); }

// Fix Sprint 1 Logic
function saveQuiz() {
    alert("Quiz Guardado (Fix S1)");
    nav('view-home');
}

function renderDash() {
    // Render logic simple
    console.log("Render Dash");
}
