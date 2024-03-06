type Params = {
  tag: string;
  password: string;
};

export async function signup(params: Params) {
  const response = await fetch("http://localhost:2000/auth/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(params),
  });
  const data = await response.json();
  return data;
}
