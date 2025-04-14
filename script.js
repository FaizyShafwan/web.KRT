function toggleSection(id) {
    document.querySelectorAll('.section').forEach(sec => {
      sec.classList.remove('active');
    });
    document.getElementById(id).classList.add('active');
  }
  
  function openModal(nama, role, foto) {
    document.getElementById("modal-img").src = foto;
    document.getElementById("modal-nama").textContent = nama;
    document.getElementById("modal-role").textContent = `Role: ${role}`;
    document.getElementById("modal").style.display = "flex";
  }
  
  function closeModal() {
    document.getElementById("modal").style.display = "none";
  }
  
  document.getElementById("formDaftar").addEventListener("submit", function(e) {
    e.preventDefault();
    const nama = document.getElementById("namaPlayer").value;
    const role = document.getElementById("rolePlayer").value;
    const fotoInput = document.getElementById("fotoPlayer");
  
    if (fotoInput.files.length === 0) return;
  
    const reader = new FileReader();
    reader.onload = function() {
      const foto = reader.result;
  
      const card = document.createElement("div");
      card.classList.add("player-card");
      card.innerHTML = `
        <img src="${foto}" alt="${nama}" class="player-photo">
        <h3>${nama}</h3><p>${role}</p>
      `;
      card.onclick = () => openModal(nama, role, foto);
      document.getElementById("playerList").appendChild(card);
      document.getElementById("formDaftar").reset();
    };
  
    reader.readAsDataURL(fotoInput.files[0]);
  });
  