const notes = [
  {
    title: "Attend webinar",
    body: "Coaching webinar in June",
  },
  {
    title: "Buy special spieces",
    body: "Recreate the amazing curry recipe",
  },
  {
    title: "Book a table for 4",
    body: "Have a great time with my parents, in my favorite coffee shop",
  },
  {
    title: "submit the coaching recording",
    body: "review the transciption again",
  },
];

// Filter

const filters = {
  searchText: "",
};

// limit the notes only to filtered ones
const renderNotes = function (notes, filters) {
  const filteredNotes = notes.filter(function (note) {
    return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
  });
  console.log(filteredNotes);

  // this render on screen and push to html div container
  document.querySelector("#notes").innerHTML = "";

  // majd adja hozza az elementekt

  filteredNotes.forEach(function (note) {
    const noteElement = document.createElement("p");
    noteElement.textContent = note.title;
    document.querySelector("#notes").appendChild(noteElement);
  });
};

renderNotes(notes, filters);

document.querySelector("#search-text").addEventListener("input", function (e) {
  filters.searchText = e.target.value;
  renderNotes(notes, filters);
});
