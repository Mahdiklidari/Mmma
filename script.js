document.addEventListener('DOMContentLoaded', function() {
    const gameOptions = document.querySelectorAll('.game-option');
    const keyCountGroup = document.getElementById('keyCountGroup');
    const startBtn = document.getElementById('startBtn');
    const progressContainer = document.getElementById('progressContainer');
    const progressBar = document.getElementById('progressBar');
    const progressText = document.getElementById('progressText');
    const progressLog = document.getElementById('progressLog');
    const keyContainer = document.getElementById('keyContainer');
    const keyInput = document.getElementById('keyInput');
    const copyKeyBtn = document.getElementById('copyKeyBtn');
    const copyStatus = document.getElementById('copyStatus');
    const keyRange = document.getElementById('keyRange');
    const keyValue = document.getElementById('keyValue');

    let selectedGame = null;

    gameOptions.forEach(option => {
        option.addEventListener('click', function() {
            gameOptions.forEach(opt => opt.classList.remove('selected'));
            this.classList.add('selected');
            selectedGame = this.getAttribute('data-game');
            keyCountGroup.classList.remove('hidden');
            startBtn.classList.remove('hidden');
        });
    });

    keyRange.addEventListener('input', function() {
        keyValue.textContent = this.value;
    });

    startBtn.addEventListener('click', function() {
        startBtn.classList.add('hidden');
        progressContainer.classList.remove('hidden');
        keyContainer.classList.add('hidden');

        let progress = 0;
        const interval = setInterval(() => {
            progress += 1;
            progressBar.style.width = progress + '%';
            progressText.textContent = progress + '%';
            progressLog.textContent = `در حال تولید کلید (${progress}%)...`;

            if (progress >= 100) {
                clearInterval(interval);
                progressLog.textContent = 'کلید تولید شد!';
                keyContainer.classList.remove('hidden');
                keyInput.value = generateKey();
            }
        }, 100); // Adjust speed as needed
    });

    copyKeyBtn.addEventListener('click', function() {
        keyInput.select();
        document.execCommand('copy');
        copyStatus.textContent = 'کلید کپی شد!';
        setTimeout(() => copyStatus.textContent = '', 2000);
    });

    function generateKey() {
        // Your key generation logic here
        return 'ABC123-XYZ456'; // Example key
    }
});
