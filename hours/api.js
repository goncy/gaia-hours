import requester from "../utils/requester";

export default {
  /*
  [
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
  ]
  */
  fetch: () => {
    try {
      return requester.get("/api/working-hours/");
    } catch (error) {
      Promise.reject("No se pudieron obtener las horas");
    }
  },
  register: (user, project, category, hours) => {
    try {
      return requester.post("/api/working-hours/", {
        user_id: user,
        date_worked: `2020-03-09`,
        project_id: project,
        working_hour_category_id: category,
        hours,
      });
    } catch (error) {
      Promise.reject("No se pudieron registrar las horas");
    }
  },
};
