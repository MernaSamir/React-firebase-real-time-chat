export const login = {
  wrapper: "Form",
  content: [
    { label: "First Name", type: "TextBox" },
    { label: "Last Name", type: "TextBox" },
    { label: "Email", type: "TextBox" },
    { label: "Password", type: "TextBox", txt_type: "password" },
    { label: "Submit", type: "Button", Action: "submit_signup" },
  ],
};
