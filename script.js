// script.js

// Initial data for the leaderboard
let leaderboardData = [
    { rank: 1, player: "Player A", score: 500 },
    { rank: 2, player: "Player B", score: 450 },
    { rank: 3, player: "Player C", score: 400 }
];

// Function to render the leaderboard
function renderLeaderboard() {
    const tbody = document.querySelector('#leaderboardTable tbody');
    
    // Loop through the data and update or create table rows
    leaderboardData.forEach((data, index) => {
        let row = document.getElementById(`player-${index + 1}`);
        
        if (!row) {
            // Create a new row if it doesn't exist
            row = document.createElement('tr');
            row.setAttribute('id', `player-${index + 1}`);
            row.classList.add('new-entry');  // Add animation class for new entries
            tbody.appendChild(row);
        }

        // Update the row content
        row.innerHTML = `
            <td>${data.rank}</td>
            <td>${data.player}</td>
            <td>${data.score}</td>
        `;
    });
}

// Simulate real-time updates
function updateLeaderboard() {
    // Randomly update scores
    leaderboardData = leaderboardData.map(player => ({
        ...player,
        score: player.score + Math.floor(Math.random() * 20 - 10) // +/- 10 range
    }));

    // Sort the leaderboard based on the updated scores
    leaderboardData.sort((a, b) => b.score - a.score);

    // Update rank based on the new sorting
    leaderboardData = leaderboardData.map((player, index) => ({
        ...player,
        rank: index + 1
    }));

    // Re-render the table
    renderLeaderboard();

    // Animate rows that are updated
    const rows = document.querySelectorAll('tbody tr');
    rows.forEach(row => {
        row.classList.add('update');
        setTimeout(() => row.classList.remove('update'), 1000); // remove animation after 1s
    });
}

// Initialize the leaderboard
renderLeaderboard();

// Update leaderboard every 3 seconds (simulating real-time updates)
setInterval(updateLeaderboard, 3000);
