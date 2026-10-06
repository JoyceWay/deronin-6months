// 6 Months to Become an AI Engineer · State & Interactive Logic

document.addEventListener('DOMContentLoaded', () => {
    const STORAGE_KEY = 'ai_engineer_roadmap_state_v1';

    // Status state mapping
    const STATUS_CYCLE = ['not-started', 'in-progress', 'completed'];
    const STATUS_CONFIG = {
        'not-started': {
            cn: '未开始',
            en: 'Not started',
            className: 'status-not-started'
        },
        'in-progress': {
            cn: '进行中',
            en: 'In progress',
            className: 'status-in-progress'
        },
        'completed': {
            cn: '已完成',
            en: 'Completed',
            className: 'status-completed'
        }
    };

    // Default state structure
    let state = loadState() || {
        months: {
            1: { status: 'not-started', subtopics: [false, false, false, false] },
            2: { status: 'not-started', subtopics: [false, false, false, false] },
            3: { status: 'not-started', subtopics: [false, false, false, false] },
            4: { status: 'not-started', subtopics: [false, false, false, false] },
            5: { status: 'not-started', subtopics: [false, false, false, false] },
            6: { status: 'not-started', subtopics: [false, false, false, false] }
        }
    };

    // DOM References
    const monthCards = document.querySelectorAll('.month-card');
    const progressFill = document.getElementById('progress-fill');
    const progressPercentage = document.getElementById('progress-percentage');
    const statsCounter = document.getElementById('stats-counter');
    const resetBtn = document.getElementById('reset-btn');

    // Initialize UI from state
    renderUI();

    // Event Delegation & Listeners
    monthCards.forEach(card => {
        const monthId = parseInt(card.dataset.month);
        const statusBtn = card.querySelector('.status-tag');
        const checkboxes = card.querySelectorAll('.subtopic-checkbox');

        // Status Tag Toggle Click
        statusBtn.addEventListener('click', () => {
            const currentStatus = state.months[monthId].status;
            const currentIndex = STATUS_CYCLE.indexOf(currentStatus);
            const nextStatus = STATUS_CYCLE[(currentIndex + 1) % STATUS_CYCLE.length];
            
            state.months[monthId].status = nextStatus;

            // If manually marked completed, check all subtopics; if not started, uncheck all
            if (nextStatus === 'completed') {
                state.months[monthId].subtopics = [true, true, true, true];
            } else if (nextStatus === 'not-started') {
                state.months[monthId].subtopics = [false, false, false, false];
            }

            saveState();
            renderUI();
        });

        // Subtopic Checkbox Toggle
        checkboxes.forEach(cb => {
            cb.addEventListener('change', (e) => {
                const subtopicIdx = parseInt(cb.dataset.subtopic) - 1;
                state.months[monthId].subtopics[subtopicIdx] = cb.checked;

                // Auto update month status based on checked items
                const checkedCount = state.months[monthId].subtopics.filter(Boolean).length;
                const total = state.months[monthId].subtopics.length;

                if (checkedCount === total) {
                    state.months[monthId].status = 'completed';
                } else if (checkedCount > 0) {
                    state.months[monthId].status = 'in-progress';
                } else {
                    state.months[monthId].status = 'not-started';
                }

                saveState();
                renderUI();
            });
        });
    });

    // Reset Progress Button
    resetBtn.addEventListener('click', () => {
        if (confirm('是否确定重置所有打卡与学习进度？\nAre you sure you want to reset all progress?')) {
            for (let m = 1; m <= 6; m++) {
                state.months[m] = { status: 'not-started', subtopics: [false, false, false, false] };
            }
            saveState();
            renderUI();
        }
    });

    // Helper functions
    function loadState() {
        try {
            const saved = localStorage.getItem(STORAGE_KEY);
            return saved ? JSON.parse(saved) : null;
        } catch (e) {
            console.error('Failed to load state from localStorage', e);
            return null;
        }
    }

    function saveState() {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
        } catch (e) {
            console.error('Failed to save state to localStorage', e);
        }
    }

    function renderUI() {
        let totalSubtopics = 0;
        let checkedSubtopics = 0;
        let completedMonthsCount = 0;

        monthCards.forEach(card => {
            const monthId = parseInt(card.dataset.month);
            const mData = state.months[monthId];
            const statusBtn = card.querySelector('.status-tag');
            const checkboxes = card.querySelectorAll('.subtopic-checkbox');

            // Render status tag
            const cfg = STATUS_CONFIG[mData.status];
            statusBtn.className = `status-tag ${cfg.className}`;
            statusBtn.dataset.status = mData.status;
            statusBtn.querySelector('.status-text-cn').textContent = cfg.cn;
            statusBtn.querySelector('.status-text-en').textContent = cfg.en;

            // Render checkboxes
            checkboxes.forEach((cb, idx) => {
                const isChecked = !!mData.subtopics[idx];
                cb.checked = isChecked;
                totalSubtopics++;
                if (isChecked) checkedSubtopics++;
            });

            if (mData.status === 'completed') {
                completedMonthsCount++;
            }
        });

        // Calculate progress percentage
        const percent = totalSubtopics > 0 ? Math.round((checkedSubtopics / totalSubtopics) * 100) : 0;
        progressFill.style.width = `${percent}%`;
        progressPercentage.textContent = `${percent}%`;
        statsCounter.textContent = `${completedMonthsCount} / 6 模块已完成 (${completedMonthsCount} / 6 Completed) · ${checkedSubtopics} / ${totalSubtopics} 子任务 (Tasks)`;
    }
});
