const container = document.getElementById("userContainer");
const reloadBtn = document.getElementById("reloadBtn");

function fetchUsers() {
    container.innerHTML = "<h3>Loading...</h3>";

    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => {
            container.innerHTML = "";

            data.forEach(user => {
                const div = document.createElement("div");
                div.classList.add("user-card");

                div.innerHTML = `
                    <h3>${user.name}</h3>
                    <p><strong>Email:</strong> ${user.email}</p>
                    <p><strong>Address:</strong> ${user.address.city}, ${user.address.street}</p>
                `;

                container.appendChild(div);
            });
        })
        .catch(error => {
            container.innerHTML = "<h3 style='color:red;'>Failed to fetch data! Check internet.</h3>";
            console.error(error);
        });
}

// Initial load
fetchUsers();

// Reload button
reloadBtn.addEventListener("click", fetchUsers);