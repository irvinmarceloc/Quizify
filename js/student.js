const DB_KEY = 'quizify_db';
function getDB() { return JSON.parse(localStorage.getItem(DB_KEY)) || { quizzes: [] }; }

function init() {
    const db = getDB();
    const list = document.getElementById('quiz-list');
    if(db.quizzes.length === 0) list.innerHTML = '<p>No hay exámenes.</p>';
    db.quizzes.forEach((q, i) => {
        list.innerHTML += `<div onclick="start(${i})" class="bg-white p-4 rounded border cursor-pointer hover:bg-blue-50">${q.title}</div>`;
    });
}

function start(idx) {
    document.getElementById('view-home').classList.remove('active');
    document.getElementById('view-quiz').classList.add('active');
    // Render preguntas (Simulado por ahora)
    document.getElementById('questions-container').innerHTML = '<p>Pregunta 1...</p>';
}

function submit() { alert("Enviado"); location.reload(); }
init();
// UT-1012: Monitor de longitud de respuesta
function checkLength(id) {
    const el = document.getElementById(id);
    if(el) console.log("Caracteres: " + el.value.length);
}
