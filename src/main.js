import './style.css'

const workouts = [
  {
    id: 'segunda',
    name: 'Segunda',
    focus: 'Glúteos + Posterior',
    aquecimento: '8 min escada ou caminhada inclinada',
    exercises: [
      { name: 'Hip Thrust', sets: '4', reps: '10', weight: '-', image: '/img/hip_thrust.png' },
      { name: 'Stiff com halter/barra', sets: '4', reps: '10', weight: '-', image: '/img/stiff_deadlift.png' },
      { name: 'Mesa flexora', sets: '3', reps: '12', weight: '-', image: '/img/lying_leg_curl.png' },
      { name: 'Afundo andando', sets: '3', reps: '10 cada perna', weight: '-', image: '/img/walking_lunges.png' },
      { name: 'Glúteo no cabo', sets: '3', reps: '12', weight: '-', image: '/img/cable_glute_kickback.png' },
      { name: 'Abdução máquina', sets: '3', reps: '15', weight: '-', image: '/img/hip_abduction_machine.png' }
    ],
    cardio: '20 min escada ou caminhada inclinada<br>🥊 Muay Thai'
  },
  {
    id: 'terca',
    name: 'Terça',
    focus: 'Dorsal + Braços',
    aquecimento: '5 min remo',
    exercises: [
      { name: 'Puxada na frente (aberta)', sets: '4', reps: '10', weight: '-', image: '/img/puxada aberta.jpeg' },
      { name: 'Remada baixa', sets: '4', reps: '10', weight: '-', image: '/img/remada baixa.jpg' },
      { name: 'Remada unilateral halter', sets: '3', reps: '10', weight: '-', image: '/img/remada unilateral com halter.jpg' },
      { name: 'Face pull', sets: '3', reps: '12', weight: '-', image: '/img/face pull.jpeg' },
      { name: 'Rosca direta', sets: '3', reps: '10', weight: '-', image: '/img/rosca direta.jpeg' },
      { name: 'Rosca martelo', sets: '3', reps: '10', weight: '-', image: '/img/rosca martelo.jpeg' },
      { name: 'Tríceps corda', sets: '3', reps: '12', weight: '-', image: '/img/triceps corda.webp' }
    ],
    cardio: '15–20 min bike moderada<br>🥊 Muay Thai'
  },
  {
    id: 'quarta',
    name: 'Quarta',
    focus: 'Ombro + Core',
    aquecimento: '5 min remo ou bike leve',
    exercises: [
      { name: 'Desenvolvimento halter', sets: '4', reps: '10', weight: '-', image: '/img/desenvolvimento com halter.jpeg' },
      { name: 'Elevação lateral', sets: '4', reps: '12', weight: '-', image: '/img/elevacao lateral.jpeg' },
      { name: 'Elevação frontal', sets: '3', reps: '12', weight: '-', image: '/img/ELEVAÇÃO FRONTAL.jpeg' },
      { name: 'Face pull', sets: '3', reps: '15', weight: '-', image: '/img/face pull.jpeg' },
      { name: 'Prancha', sets: '3', reps: '1 min', weight: '-', image: '/img/prancha.jpeg' },
      { name: 'Abdominal bicicleta', sets: '3', reps: '20', weight: '-', image: '/img/abdominal bicicleta.jpeg' }
    ],
    cardio: '15 min caminhada inclinada<br>🥊 Muay Thai'
  },
  {
    id: 'quinta',
    name: 'Quinta',
    focus: 'Glúteos + Quadríceps',
    aquecimento: '8 min escada',
    exercises: [
      { name: 'Agachamento livre', sets: '4', reps: '8', weight: '-', image: '/img/agachamento livre.jpeg' },
      { name: 'Leg press', sets: '4', reps: '10', weight: '-', image: '/img/leg press.jpg' },
      { name: 'Bulgarian squat', sets: '3', reps: '10 cada perna', weight: '-', image: '/img/bulgaro.jpeg' },
      { name: 'Cadeira extensora', sets: '3', reps: '12', weight: '-', image: '/img/extensora.jpeg' },
      { name: 'Elevação pélvica', sets: '3', reps: '12', weight: '-', image: '/src/assets/exercises/hip_thrust.png' },
      { name: 'Abdução com elástico', sets: '3', reps: '20', weight: '-', image: '/src/assets/exercises/hip_abduction_machine.png' }
    ],
    cardio: '15 min caminhada inclinada<br>🥊 Muay Thai'
  },
  {
    id: 'sexta',
    name: 'Sexta',
    focus: 'Costas + Ombro + Braços',
    aquecimento: '5 min remo',
    exercises: [
      { name: 'Puxada neutra', sets: '4', reps: '10', weight: '-', image: '/img/puxada neutra.jpg' },
      { name: 'Remada cavalinho', sets: '3', reps: '10', weight: '-', image: '/img/remada cavalinho.jpg' },
      { name: 'Elevação lateral', sets: '3', reps: '12', weight: '-', image: '/img/elevacao lateral.jpeg' },
      { name: 'Desenvolvimento halter', sets: '3', reps: '10', weight: '-', image: '/img/desenvolvimento com halter.jpeg' },
      { name: 'Tríceps corda', sets: '3', reps: '12', weight: '-', image: '/img/triceps corda.webp' },
      { name: 'Rosca alternada', sets: '3', reps: '10', weight: '-', image: '/img/rosca alternada.jpeg' }
    ],
    cardio: 'HIIT na esteira ou bike: 30s forte, 1 min leve, repetir por 15 min<br>🥊 Muay Thai'
  },
  {
    id: 'sabado',
    name: 'Sábado',
    focus: 'Peito + Tríceps',
    aquecimento: '5 min bike leve',
    exercises: [
      { name: 'Supino reto', sets: '4', reps: '10', weight: '-', image: '/img/supino reto.jpeg' },
      { name: 'Supino inclinado halter', sets: '4', reps: '10', weight: '-', image: '/img/supino inclinado.jpeg' },
      { name: 'Crucifixo reto', sets: '3', reps: '12', weight: '-', image: '/img/crucifixo reto.jpeg' },
      { name: 'Tríceps corda', sets: '3', reps: '12', weight: '-', image: '/img/triceps corda.webp' },
      { name: 'Tríceps testa halter', sets: '3', reps: '12', weight: '-', image: '/img/TRICEPS TESTA 2.jpeg' },
      { name: 'Mergulho em banco', sets: '3', reps: '15', weight: '-', image: '/img/MERGULHO NO BANCO.jpeg' }
    ],
    cardio: '15 min bike moderada<br>🥊 Muay Thai'
  }
];

const weeklySchedule = [
  ...workouts.map(w => ({ day: w.name, activity: `${w.focus} + Muay Thai`, status: 'primary' })),
  { day: 'Domingo', activity: 'Descanso', status: 'muted' }
];

const app = document.querySelector('#app');

function render() {
  checkMidnightReset();
  app.innerHTML = `
    <div class="container">
      <header>
        <div class="profile-section">
          <div class="profile-avatar">
            <img src="/img/profile.jpg" alt="Isabelle" id="profile-img">
          </div>
          <div class="profile-info">
            <h1>Treinos da Isabelle</h1>
            <span class="status-badge">Elite Athlete</span>
          </div>
        </div>
      </header>

      <div class="training-details">
        <p class="author">Treino desenvolvido por <span class="highlight">Rodrigo Scharp</span></p>
        <p class="focus-summary">Foco em Glúteos a pedido da patroa, força para ajudar no desempenho no Muay Thai e uma melhor lapidação da Dorsal, treino de médio volume sem se exterder muito nas repetições para evitar fadiga desnecessária.</p>
      </div>

      <div class="workout-tabs">
        ${workouts.map((w, index) => `
          <button class="tab-btn ${index === 0 ? 'active' : ''}" data-id="${w.id}">
            ${w.name}
          </button>
        `).join('')}
      </div>

      <div id="workout-content" class="workout-list">
        <!-- Exercises will be injected here -->
      </div>

      <section class="weekly-schedule">
        <h2>Organização da Semana</h2>
        <div class="schedule-grid">
          ${weeklySchedule.map(item => `
            <div class="schedule-item ${item.status}">
              <span class="day">${item.day}</span>
              <span class="activity">${item.activity}</span>
            </div>
          `).join('')}
        </div>
      </section>

      <footer>
        <p>Treino da Isabelle &copy; 2026 | Sistema Desenvolvido por <span class="highlight">Rodrigo Scharp</span> com carinho!</p>
      </footer>
    </div>
  `;

  // Initial render
  updateWorkout(workouts[0].id);

  // Add event listeners
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      const activeBtn = e.currentTarget;
      activeBtn.classList.add('active');
      updateWorkout(activeBtn.dataset.id);
    });
  });
}

function checkMidnightReset() {
  const lastDate = localStorage.getItem('last-workout-date');
  const today = new Date().toLocaleDateString();

  if (lastDate && lastDate !== today) {
    const keysToRemove = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith('done-')) {
        keysToRemove.push(key);
      }
    }
    keysToRemove.forEach(key => localStorage.removeItem(key));
  }
  localStorage.setItem('last-workout-date', today);
}

function updateProgressBar(workoutId, exerciseCount) {
  let doneCount = 0;
  for (let i = 0; i < exerciseCount; i++) {
    if (localStorage.getItem(`done-${workoutId}-${i}`) === 'true') {
      doneCount++;
    }
  }
  const percentage = exerciseCount > 0 ? Math.round((doneCount / exerciseCount) * 100) : 0;
  const fill = document.querySelector('.progress-fill');
  const text = document.querySelector('.progress-percentage');
  if (fill && text) {
    fill.style.width = `${percentage}%`;
    text.textContent = `${percentage}%`;
  }
}

function updateWorkout(id) {
  const workout = workouts.find(w => w.id === id);
  const content = document.querySelector('#workout-content');

  content.style.opacity = '0';

  setTimeout(() => {
    content.innerHTML = `
      <div class="progress-container">
        <div class="progress-header">
          <span class="progress-label">Progresso do Treino</span>
          <span class="progress-percentage">0%</span>
        </div>
        <div class="progress-bar">
          <div class="progress-fill"></div>
        </div>
      </div>

      <div class="focus-badge">
        Foco: ${workout.focus}
      </div>

      <div class="special-section warm-up">
        <span class="section-label">Aquecimento</span>
        <p>${workout.aquecimento}</p>
      </div>

      <div class="exercise-grid">
        ${workout.exercises.map((ex, i) => {
      const storageKey = `done-${workout.id}-${i}`;
      const isDone = localStorage.getItem(storageKey) === 'true';
      const weightKey = `weight-${workout.id}-${i}`;
      const savedWeight = localStorage.getItem(weightKey) || ex.weight;

      return `
            <div class="exercise-card ${isDone ? 'done' : ''}" style="animation-delay: ${i * 0.05}s" data-key="${storageKey}" data-weight-key="${weightKey}">
              <div class="exercise-visual">
                <img src="${ex.image || '/src/assets/exercises/generic_workout.png'}" alt="${ex.name}" loading="lazy">
              </div>
              <div class="exercise-content">
                <div class="exercise-info">
                  <h3>${ex.name}</h3>
                  <p>${ex.sets} séries de ${ex.reps}</p>
                </div>
                <div class="exercise-stats">
                  <input type="text" class="weight-input" value="${savedWeight}" placeholder="-">
                  <span class="stat-label">Carga</span>
                </div>
                <div class="exercise-checkbox-wrapper">
                  <input type="checkbox" class="exercise-checkbox" ${isDone ? 'checked' : ''}>
                </div>
              </div>
            </div>
          `;
    }).join('')}
      </div>

      <div class="special-section cardio">
        <span class="section-label">Cardio</span>
        <p>${workout.cardio}</p>
      </div>
    `;
    content.style.opacity = '1';

    // Initial progress update
    updateProgressBar(workout.id, workout.exercises.length);

    // Add checkbox event listeners
    content.querySelectorAll('.exercise-checkbox').forEach(checkbox => {
      checkbox.addEventListener('change', (e) => {
        const card = e.target.closest('.exercise-card');
        const key = card.dataset.key;
        const isDone = e.target.checked;

        if (isDone) {
          card.classList.add('done');
        } else {
          card.classList.remove('done');
        }

        localStorage.setItem(key, isDone);
        updateProgressBar(workout.id, workout.exercises.length);
      });
    });

    // Add weight input event listeners
    content.querySelectorAll('.weight-input').forEach(input => {
      input.addEventListener('change', (e) => {
        const card = e.target.closest('.exercise-card');
        const key = card.dataset.weightKey;
        localStorage.setItem(key, e.target.value);
      });
    });
  }, 200);
}

render();
