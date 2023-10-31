function addContact() {
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const contactList = document.getElementById("contact-list");

    if (name && phone) {
        const li = document.createElement("li");
        li.innerHTML = `<strong>${name}:</strong> ${phone}`;
        contactList.appendChild(li);

        // Limpar os campos do formulário
        document.getElementById("name").value = "";
        document.getElementById("phone").value = "";
    } else {
        alert("Por favor, preencha todos os campos.");
    }
}