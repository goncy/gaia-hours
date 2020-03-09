export default {
  fetch: () =>
    Promise.resolve([
      {
        id: 1,
        user: {
          id: 3,
          username: "bog",
          email: "",
          first_name: "",
          last_name: "",
        },
        project: {
          id: 3,
          name: "Donde Comemos",
          total_hours: "160.00",
        },
        working_hour_category: {
          id: 3,
          name: "Desarrollo",
        },
        description: null,
        date_worked: "2020-03-06",
        hours: "5.00",
      },
    ]),
  register: (project, category, hours) => Promise.resolve([{id: 1, project, category, hours}]),
};
