document.addEventListener("DOMContentLoaded", () => {

  // Mobile navigation
  const menuButton = document.querySelector(".menu-toggle");
  const menu = document.querySelector("#site-menu");

  if (menuButton && menu) {

    menuButton.addEventListener("click", () => {

      const isOpen = menu.classList.toggle("open");

      menuButton.setAttribute(
        "aria-expanded",
        String(isOpen)
      );

    });

  }


  // Standings sorting
  const table = document.querySelector("#standings-table");
  const buttons = document.querySelectorAll(".filter");
  const status = document.querySelector("#sort-status");

  if (table && buttons.length) {

    const tbody = table.querySelector("tbody");

    buttons.forEach(button => {

      button.addEventListener("click", () => {

        const sortBy = button.dataset.sort;

        const rows = [
          ...tbody.querySelectorAll("tr")
        ];


        rows.sort((a, b) => {

          if (sortBy === "rank") {

            return (
              Number(a.children[0].textContent) -
              Number(b.children[0].textContent)
            );

          }

          return (
            Number(b.dataset[sortBy]) -
            Number(a.dataset[sortBy])
          );

        });


        rows.forEach((row, index) => {

          tbody.appendChild(row);

          row.children[0].textContent =
            index + 1;

        });


        buttons.forEach(item => {

          item.classList.remove(
            "active-filter"
          );

        });


        button.classList.add(
          "active-filter"
        );


        if (status) {

          const labels = {
            rank: "rank",
            wins: "wins",
            losses: "losses",
            diff: "point differential"
          };

          status.textContent =
            `Standings sorted by ${labels[sortBy]}.`;

        }

      });

    });

  }

});
