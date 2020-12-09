export const login = {
  wrapper: "Form",
  content: [
    { label: "Email", type: "TextBox" },
    { label: "Password", type: "TextBox", txt_type: "password" },

    { label: "Submit", type: "Button", Action: "submit_login" },
  ],
};
