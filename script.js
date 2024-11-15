// Room data (replace with actual data from your database)
const rooms = [
  { id: 1, name: "Deluxe Room", price: 200, image: "images/room1.jpg" },
  { id: 2, name: "Suite", price: 350, image: "images/room2.jpg" },
  // ... more rooms
];

// Handle room card clicks
const roomCards = document.querySelectorAll(".room-card");
roomCards.forEach(card => {
  card.addEventListener("click", () => {
    const roomId = card.querySelector(".book-button").dataset.roomId;
    // Redirect to the reservation page with the room ID
    window.location.href = `reservations.html?roomId=${roomId}`; 
  });
});

// Handle "Book Now" button clicks (on reservation page)
// ... (You'll need to add a reservations.html file)