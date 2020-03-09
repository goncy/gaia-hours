const api = {
  projects: {
    fetch: () =>
      Promise.resolve([
        {
          id: 1,
          name: "Gaia",
          total_hours: "0.00",
        },
        {
          id: 2,
          name: "Tennis Pyramid",
          total_hours: "80.00",
        },
        {
          id: 3,
          name: "Donde Comemos",
          total_hours: "160.00",
        },
        {
          id: 4,
          name: "PSA",
          total_hours: "104.00",
        },
        {
          id: 5,
          name: "FACTTIC",
          total_hours: "0.00",
        },
        {
          id: 6,
          name: "APPO",
          total_hours: "0.00",
        },
        {
          id: 7,
          name: "Astrologia",
          total_hours: "0.00",
        },
      ]),
  },
  categories: {
    fetch: () =>
      Promise.resolve([
        {
          id: 1,
          name: "Gestión",
        },
        {
          id: 2,
          name: "Reunión",
        },
        {
          id: 3,
          name: "Desarrollo",
        },
        {
          id: 4,
          name: "Deploy",
        },
        {
          id: 5,
          name: "Asamblea",
        },
      ]),
  },
  fetch: () => Promise.all([api.projects.fetch(), api.categories.fetch()]),
};

export default api;
