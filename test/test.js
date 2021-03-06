const parent = document.getElementById('game')

fetch('pepita.txt')
    .then(response => response.text())
    .then(content => ({ name: 'pepita.wlk', content }))
    .then(file => ({ main: 'pepita', sources: [file], images: [], sounds: [] }))    
    .then(project => new Game(project).start(parent))
